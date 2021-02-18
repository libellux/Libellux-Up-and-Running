#!/bin/bash
#
# Libellux: Up and Running
# GVM 20.08.1 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Credits: Falkowich (https://www.sadsloth.net/)
# Desc: Pre-installation guide test for GVM 20.08.1 on Ubuntu 20.04
# Latest update: 2021-02-18
#

# Install dependencies
sudo apt-get update ;\
sudo apt-get -y upgrade ;\
sudo apt-get install -y build-essential ;\
sudo apt-get install -y cmake pkg-config glib2.0 gcc-mingw-w64 \
gnutls-bin libgnutls28-dev libxml2-dev \
libssh-dev libssl-dev libldap2-dev libgcrypt-dev \
libpcap-dev libgpgme-dev libradcli-dev \
libksba-dev libical-dev libpq-dev \
libopenvas-dev libpopt-dev libmicrohttpd-dev \
redis-server libhiredis-dev \
doxygen xsltproc graphviz bison \
postgresql postgresql-contrib postgresql-server-dev-all \
heimdal-dev xmltoman nmap \
npm nodejs virtualenv \
python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil ;\
sudo apt-get update

# Install yarn
sudo npm install -g yarn --prefix /usr/

# Create GVM user profile
echo 'export PATH="$PATH:/opt/gvm/bin:/opt/gvm/sbin:/opt/gvm/.local/bin"' | sudo tee -a /etc/profile.d/gvm.sh ;\
sudo chmod 0755 /etc/profile.d/gvm.sh ;\
source /etc/profile.d/gvm.sh

# Create dynamic loader configuration file
sudo bash -c 'cat << EOF > /etc/ld.so.conf.d/gvm.conf
# gmv libs location
/opt/gvm/lib
EOF'

# Create the GVM user
sudo mkdir /opt/gvm ;\
sudo adduser gvm --disabled-password --home /opt/gvm/ --no-create-home --gecos '' ;\
sudo usermod -aG redis gvm ;\
sudo chown gvm:gvm /opt/gvm/

# Create source build directory (as GVM user) cmd: sudo su - gvm
mkdir src ;\
cd src/ ;\
export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH

# Download and build GVM Libraries (as GVM user)
git clone -b gvm-libs-20.08 --single-branch https://github.com/greenbone/gvm-libs.git ;\
cd gvm-libs/ ;\
export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH ;\
mkdir build ;\
cd build ;\
cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm .. ;\
make ;\
make doc ;\
make install ;\
cd /opt/gvm/src/

# Download and build OpenVAS scanner (as GVM user)
git clone -b openvas-20.08 --single-branch https://github.com/greenbone/openvas.git ;\
cd openvas/ ;\
export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH ;\
mkdir build ;\
cd build/ ;\
cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm .. ;\
make ;\
make doc ;\
make install

# Configure Redis (as root user) cmd: sudo su
export LC_ALL="C" ;\
ldconfig ;\
cp /etc/redis/redis.conf /etc/redis/redis.orig ;\
cp /opt/gvm/src/openvas/config/redis-openvas.conf /etc/redis/ ;\
chown redis:redis /etc/redis/redis-openvas.conf ;\
echo "db_address = /run/redis-openvas/redis.sock" > /opt/gvm/etc/openvas/openvas.conf ;\
systemctl enable redis-server@openvas.service ;\
systemctl start redis-server@openvas.service

# Set up GVM user permissions (as root user)
# Run visudo, replace the secure path as below and allow gvm user to run
# ospd-openvas and launch GVM with root privileges
visudo

#
# This file MUST be edited with the 'visudo' command as root.
#
# Please consider adding local content in /etc/sudoers.d/ instead of
# directly modifying this file.
#
# See the man page for details on how to write a sudoers file.
#
Defaults        env_reset
Defaults        mail_badpass
Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin:/opt/gvm/sbin"

# Host alias specification

# User alias specification

# Cmnd alias specification

# User privilege specification
root    ALL=(ALL:ALL) ALL

# Members of the admin group may gain root privileges
%admin ALL=(ALL) ALL

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

### Allow gvm user to run ospd-openvas and launch GVM with root privileges
gvm ALL = NOPASSWD: /opt/gvm/sbin/openvas
gvm ALL = NOPASSWD: /opt/gvm/sbin/gsad

# See sudoers(5) for more information on "#include" directives:

#includedir /etc/sudoers.d

# Update Network Vulnerability Tests (as GVM user)
greenbone-nvt-sync

# Download and build the Greenbone Vulnerability Manager (as GVM user)
cd /opt/gvm/src/ ;\
git clone -b gvmd-20.08 --single-branch https://github.com/greenbone/gvmd.git ;\
cd gvmd/ ;\
export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH ;\
mkdir build ;\
cd build/ ;\
cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm .. ;\
make ;\
make doc ;\
make install

# Configure PostgreSQL database (as Postgres user) cmd: sudo -u postgres bash
export LC_ALL="C"
createuser -DRS gvm
createdb -O gvm gvmd

## Setup PostgreSQL permissions and database extensions (as Postgres user)
psql gvmd
create role dba with superuser noinherit;
grant dba to gvm;
create extension "uuid-ossp";
create extension "pgcrypto";
exit

# Generate GVM certificates (as GVM user)
gvm-manage-certs -a

# Create GVM admin (as GVM user)
/opt/gvm/sbin/gvmd --create-user=admin --password=admin

## Retrieve our administrators uuid (as GVM user)
gvmd --get-users --verbose

## Set the value using the administrators uuid (as GVM user)
gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE

# Update Greenbone Feed Sync (run the commands below one by one as GVM user)
greenbone-feed-sync --type GVMD_DATA
greenbone-feed-sync --type SCAP
greenbone-feed-sync --type CERT

# Download and build the Greenbone Security Assistant (as GVM user)
cd src/ ;\
git clone -b gsa-20.08 --single-branch https://github.com/greenbone/gsa.git ;\
cd gsa/ ;\
export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH ;\
mkdir build ;\
cd build/ ;\
cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm .. ;\
make ;\
make doc ;\
make install ;\
touch /opt/gvm/var/log/gvm/gsad.log

# Set up the Virtual environment with Python (as sudo user, non root)
sudo add-apt-repository ppa:deadsnakes/ppa ;\
sudo apt-get update ;\
sudo apt-get install python3.7 python3.7-dev

## Install the virtual environment (as GVM user)
cd /opt/gvm/src ;\
export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH ;\
virtualenv --python python3.7 /opt/gvm/bin/ospd-scanner/

# Start the virtualenv
source /opt/gvm/bin/ospd-scanner/bin/activate

# Download and install the base class ospd for scanner wrappers (as GVM user, within the virtualenv)
git clone -b ospd-20.08 --single-branch https://github.com/greenbone/ospd.git ;\
mkdir /opt/gvm/var/run/ospd/ ;\
cd ospd/ ;\
pip3 install . ;\
cd /opt/gvm/src

# Download and install ospd-openvas for remote control (as GVM user, within the virtualenv)
git clone -b ospd-openvas-20.08 --single-branch  https://github.com/greenbone/ospd-openvas.git ;\
cd ospd-openvas/ ;\
pip3 install .

# Set up systemd (as root user)

## GVMD systemd (as root user)
cat << EOF > /etc/systemd/system/gvmd.service
[Unit]
Description=Open Vulnerability Assessment System Manager Daemon
Documentation=man:gvmd(8) https://www.greenbone.net
Wants=postgresql.service ospd-openvas.service
After=postgresql.service ospd-openvas.service

[Service]
Type=forking
User=gvm
Group=gvm
PIDFile=/opt/gvm/var/run/gvmd.pid
WorkingDirectory=/opt/gvm
ExecStart=/opt/gvm/sbin/gvmd --osp-vt-update=/opt/gvm/var/run/ospd.sock
ExecReload=/bin/kill -HUP $MAINPID
KillMode=mixed
Restart=on-failure
RestartSec=2min
KillMode=process
KillSignal=SIGINT
GuessMainPID=no
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF

## GSAD systemd (as root user)
cat << EOF > /etc/systemd/system/gsad.service
[Unit]
Description=Greenbone Security Assistant (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target
Wants=gvmd.service

[Service]
Type=forking
PIDFile=/opt/gvm/var/run/gsad.pid
WorkingDirectory=/opt/gvm
ExecStart=/opt/gvm/sbin/gsad --drop-privileges=gvm
Restart=on-failure
RestartSec=2min
KillMode=process
KillSignal=SIGINT
GuessMainPID=no
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF

## ospd-openvas systemd (as root user)
cat << EOF > /etc/systemd/system/ospd-openvas.service
[Unit]
Description=Job that runs the ospd-openvas daemon
Documentation=man:gvm
After=network.target redis-server@openvas.service
Wants=redis-server@openvas.service

[Service]
Environment=PATH=/opt/gvm/bin/ospd-scanner/bin:/opt/gvm/bin:/opt/gvm/sbin:/opt/gvm/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
Type=forking
User=gvm
Group=gvm
WorkingDirectory=/opt/gvm
PIDFile=/opt/gvm/var/run/ospd-openvas.pid
ExecStart=/opt/gvm/bin/ospd-scanner/bin/python /opt/gvm/bin/ospd-scanner/bin/ospd-openvas --pid-file /opt/gvm/var/run/ospd-openvas.pid --unix-socket=/opt/gvm/var/run/ospd.sock --log-file /opt/gvm/var/log/gvm/ospd-scanner.log --lock-file-dir /opt/gvm/var/run/ospd/
Restart=on-failure
RestartSec=2min
KillMode=process
KillSignal=SIGINT
GuessMainPID=no
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF

## Reload the system daemon to enable the startup scripts (as root user)
systemctl daemon-reload ;\
systemctl enable gvmd ;\
systemctl enable gsad ;\
systemctl enable ospd-openvas ;\
systemctl start gvmd ;\
systemctl start gsad ;\
systemctl start ospd-openvas

# Get the default UUID from the OpenVAS scanner (as GVM user)
# Copy the UUID from the default OpenVAS scanner
cd /opt/gvm/src/ ;\
gvmd --get-scanners

# Modify scanner
gvmd --modify-scanner=UUID_HERE --scanner-host=/opt/gvm/var/run/ospd.sock

# Visit the host e.g. https://192.168.0.1 login and have fun!!
# If you enjoy the content feel free to help out and donate at: https://ko-fi.com/libellux
