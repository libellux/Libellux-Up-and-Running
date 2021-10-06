#!/bin/bash
#
# Libellux: Up and Running
# GVM 21.4.2 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Credits: https://greenbone.github.io/docs/gvm-21.04/index.html
# Description: Pre-installation test for GVM 21.4.2 on Ubuntu 20.04 (Focal Fossa)
# Last updated: 2021-10-06
#

# Install dependencies
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y cmake pkg-config glib2.0 gcc-mingw-w64 \
gnutls-bin libgnutls28-dev libxml2-dev libssh-dev libssl-dev libunistring-dev \
libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev \
libksba-dev libical-dev libpq-dev libopenvas-dev libpopt-dev libnet1-dev \
libmicrohttpd-dev redis-server libhiredis-dev doxygen xsltproc \
graphviz bison postgresql postgresql-contrib postgresql-server-dev-all \
heimdal-dev xmltoman nmap npm nodejs virtualenv \
python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil \
xmlstarlet texlive-fonts-recommended texlive-latex-extra

# Install yarn
sudo npm install -g yarn --prefix /usr/

# Create GVM user and group
sudo useradd -r -M -U -G sudo -s /usr/sbin/nologin gvm && \
sudo usermod -aG gvm $USER && su $USER

# Define GVM library path
sudo bash -c 'cat << EOF > /etc/ld.so.conf.d/gvm.conf
# gmv libs location
/usr/local/lib/
EOF' && \
sudo ldconfig

# Define installation directories
export PATH=$PATH:/usr/local/sbin && export INSTALL_PREFIX=/usr/local && \
export SOURCE_DIR=$HOME/source && mkdir -p $SOURCE_DIR && \
export BUILD_DIR=$HOME/build && mkdir -p $BUILD_DIR && \
export INSTALL_DIR=$HOME/install && mkdir -p $INSTALL_DIR

# Import GVM signing key to validate the integrity of the source files
curl -O https://www.greenbone.net/GBCommunitySigningKey.asc && \
gpg --import GBCommunitySigningKey.asc

# Edit GVM signing key to trust ultimately
gpg --edit-key 9823FAA60ED1E580

# Set the GVM and its librarires version
export GVM_VERSION=21.4.2 && \
export GVM_LIBS_VERSION=$GVM_VERSION

# Download and verify the GVM librarires
curl -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v$GVM_LIBS_VERSION.tar.gz -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/gvm-libs/releases/download/v$GVM_LIBS_VERSION/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc && \
gpg --verify $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz

# Extract, build and install
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \
mkdir -p $BUILD_DIR/gvm-libs && cd $BUILD_DIR/gvm-libs && \
cmake $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release \
  -DSYSCONFDIR=/etc \
  -DLOCALSTATEDIR=/var \
  -DGVM_PID_DIR=/run/gvm && \
make DESTDIR=$INSTALL_DIR install && \
sudo cp -rv $INSTALL_DIR/* / && \
rm -rf $INSTALL_DIR/*

# Set version, Download and verify GVMD
export GVMD_VERSION=21.4.3 && \
curl -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v$GVMD_VERSION.tar.gz -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/gvmd/releases/download/v$GVMD_VERSION/gvmd-$GVMD_VERSION.tar.gz.asc -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc && \
gpg --verify $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz

# Extract, build and install
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \
mkdir -p $BUILD_DIR/gvmd && cd $BUILD_DIR/gvmd && \
cmake $SOURCE_DIR/gvmd-$GVMD_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release \
  -DLOCALSTATEDIR=/var \
  -DSYSCONFDIR=/etc \
  -DGVM_DATA_DIR=/var \
  -DGVM_RUN_DIR=/run/gvm \
  -DOPENVAS_DEFAULT_SOCKET=/run/ospd/ospd-openvas.sock \
  -DGVM_FEED_LOCK_PATH=/var/lib/gvm/feed-update.lock \
  -DSYSTEMD_SERVICE_DIR=/lib/systemd/system \
  -DDEFAULT_CONFIG_DIR=/etc/default \
  -DLOGROTATE_DIR=/etc/logrotate.d && \
make DESTDIR=$INSTALL_DIR install && \
sudo cp -rv $INSTALL_DIR/* / && \
rm -rf $INSTALL_DIR/*

# Download and verify GSA
export GSA_VERSION=$GVM_VERSION && \
curl -f -L https://github.com/greenbone/gsa/archive/refs/tags/v$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc && \
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-node-modules-$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-node-modules-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz.asc && \
gpg --verify $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \
gpg --verify $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz

# extract build and install GSA (this may take awhile)
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \
tar -C $SOURCE_DIR/gsa-$GSA_VERSION/gsa -xvzf $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz && \
mkdir -p $BUILD_DIR/gsa && cd $BUILD_DIR/gsa && \
cmake $SOURCE_DIR/gsa-$GSA_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release \
  -DSYSCONFDIR=/etc \
  -DLOCALSTATEDIR=/var \
  -DGVM_RUN_DIR=/run/gvm \
  -DGSAD_PID_DIR=/run/gvm \
  -DLOGROTATE_DIR=/etc/logrotate.d && \
make DESTDIR=$INSTALL_DIR install && \
sudo cp -rv $INSTALL_DIR/* / && \
rm -rf $INSTALL_DIR/*

# Set version download and verify OpenVAS-SMB
export OPENVAS_SMB_VERSION=21.4.0 && \
curl -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v$OPENVAS_SMB_VERSION.tar.gz -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/openvas-smb/releases/download/v$OPENVAS_SMB_VERSION/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc && \
gpg --verify $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz

# extract build and install openvas-smb
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \
mkdir -p $BUILD_DIR/openvas-smb && cd $BUILD_DIR/openvas-smb && \
cmake $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release && \
make DESTDIR=$INSTALL_DIR install && \
sudo cp -rv $INSTALL_DIR/* / && \
rm -rf $INSTALL_DIR/*

# Download and verify openvas-scanner
export OPENVAS_SCANNER_VERSION=$GVM_VERSION && \
curl -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v$OPENVAS_SCANNER_VERSION.tar.gz -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/openvas-scanner/releases/download/v$OPENVAS_SCANNER_VERSION/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc && \
gpg --verify $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz

# extract build and install openvas-scanner
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \
mkdir -p $BUILD_DIR/openvas-scanner && cd $BUILD_DIR/openvas-scanner && \
cmake $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release \
  -DSYSCONFDIR=/etc \
  -DLOCALSTATEDIR=/var \
  -DOPENVAS_FEED_LOCK_PATH=/var/lib/openvas/feed-update.lock \
  -DOPENVAS_RUN_DIR=/run/ospd && \
make DESTDIR=$INSTALL_DIR install && \
sudo cp -rv $INSTALL_DIR/* / && \
rm -rf $INSTALL_DIR/*

# ospd-openvas
export OSPD_VERSION=21.4.3 && export OSPD_OPENVAS_VERSION=$GVM_VERSION && \
curl -f -L https://github.com/greenbone/ospd/archive/refs/tags/v$OSPD_VERSION.tar.gz -o $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/ospd/releases/download/v$OSPD_VERSION/ospd-$OSPD_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz.asc && \
curl -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v$OSPD_OPENVAS_VERSION.tar.gz -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \
curl -f -L https://github.com/greenbone/ospd-openvas/releases/download/v$OSPD_OPENVAS_VERSION/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc && \
gpg --verify $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz.asc $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz && \
gpg --verify $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz

# extract, build and install
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz && \
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \
cd $SOURCE_DIR/ospd-$OSPD_VERSION && \
python3 -m pip install . --prefix=$INSTALL_PREFIX --root=$INSTALL_DIR

# upgrade psutils and install gvm-tools
pip install --upgrade psutil==5.7.2 && \
cd $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION && \
python3 -m pip install . --prefix=$INSTALL_PREFIX --root=$INSTALL_DIR --no-warn-script-location && \
python3 -m pip install --user gvm-tools && \
sudo cp -rv $INSTALL_DIR/* / && \
rm -rf $INSTALL_DIR/*

# Configure Redis
sudo cp $SOURCE_DIR/openvas-scanner-$GVM_VERSION/config/redis-openvas.conf /etc/redis/ && \
sudo chown redis:redis /etc/redis/redis-openvas.conf && \
echo "db_address = /run/redis-openvas/redis.sock" | sudo tee -a /etc/openvas/openvas.conf

sudo systemctl start redis-server@openvas.service && \
sudo systemctl enable redis-server@openvas.service

# add gvm to redis group and adjust permissions
sudo usermod -aG redis gvm && \
sudo chown -R gvm:gvm /var/lib/gvm && \
sudo chown -R gvm:gvm /var/lib/openvas && \
sudo chown -R gvm:gvm /var/log/gvm && \
sudo chown -R gvm:gvm /run/gvm && \
sudo chmod -R g+srw /var/lib/gvm && \
sudo chmod -R g+srw /var/lib/openvas && \
sudo chmod -R g+srw /var/log/gvm && \
sudo chown gvm:gvm /usr/local/sbin/gvmd && \
sudo chmod 6750 /usr/local/sbin/gvmd

# adjust permissions for feed syncs
sudo chown gvm:gvm /usr/local/bin/greenbone-nvt-sync && \
sudo chmod 740 /usr/local/sbin/greenbone-feed-sync && \
sudo chown gvm:gvm /usr/local/sbin/greenbone-*-sync && \
sudo chmod 740 /usr/local/sbin/greenbone-*-sync

# visudo
sudo visudo

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

# allow users of the gvm group run openvas
%gvm ALL = NOPASSWD: /usr/local/sbin/openvas

# Setup PostgreSQL
sudo -u postgres bash
createuser -DRS gvm
createdb -O gvm gvmd

psql gvmd
create role dba with superuser noinherit;
grant dba to gvm;
create extension "uuid-ossp";
create extension "pgcrypto";
exit
exit

# Create GVM admin
sudo /usr/local/sbin/gvmd --create-user=admin --password=admin

## Retrieve our administrators uuid
sudo gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b

## Set the value using the administrators uuid
sudo gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE

# NVT sync. This might take awhile.
sudo -u gvm greenbone-nvt-sync

# Update Greenbone Feed Sync (run the commands one by one as GVM user). This might take awhile.
sudo -u gvm greenbone-feed-sync --type GVMD_DATA
sudo -u gvm greenbone-feed-sync --type SCAP
sudo -u gvm greenbone-feed-sync --type CERT

## GVMD systemd
cat << EOF > $BUILD_DIR/gvmd.service
[Unit]
Description=Greenbone Vulnerability Manager daemon (gvmd)
After=network.target networking.service postgresql.service ospd-openvas.service
Wants=postgresql.service ospd-openvas.service
Documentation=man:gvmd(8)
ConditionKernelCommandLine=!recovery

[Service]
Type=forking
User=gvm
Group=gvm
PIDFile=/run/gvm/gvmd.pid
RuntimeDirectory=gvm
RuntimeDirectoryMode=2775
ExecStart=/usr/local/sbin/gvmd --osp-vt-update=/run/ospd/ospd-openvas.sock --listen-group=gvm
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo cp $BUILD_DIR/gvmd.service /etc/systemd/system/

## GSAD systemd
cat << EOF > $BUILD_DIR/gsad.service
[Unit]
Description=Greenbone Security Assistant daemon (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target gvmd.service
Wants=gvmd.service

[Service]
Type=forking
User=gvm
Group=gvm
PIDFile=/run/gvm/gsad.pid
ExecStart=/usr/local/sbin/gsad --listen=127.0.0.1 --port=9392 --http-only
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
Alias=greenbone-security-assistant.service
EOF

sudo cp $BUILD_DIR/gsad.service /etc/systemd/system/

## ospd-openvas systemd
cat << EOF > $BUILD_DIR/ospd-openvas.service
[Unit]
Description=OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
Documentation=man:ospd-openvas(8) man:openvas(8)
After=network.target networking.service redis-server@openvas.service
Wants=redis-server@openvas.service
ConditionKernelCommandLine=!recovery

[Service]
Type=forking
User=gvm
Group=gvm
RuntimeDirectory=ospd
RuntimeDirectoryMode=2775
PIDFile=/run/ospd/ospd-openvas.pid
ExecStart=/usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas --socket-mode 0o770
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF

sudo cp $BUILD_DIR/ospd-openvas.service /etc/systemd/system/

### Modify scanner
sudo gvmd --get-scanners
sudo gvmd --modify-scanner=08b69003-5fc2-4037-a479-93b440211c73 --scanner-host=/run/ospd/ospd-openvas.sock

## Reload the system daemon to enable the startup scripts
sudo systemctl daemon-reload
sudo systemctl enable ospd-openvas
sudo systemctl enable gvmd
sudo systemctl enable gsad
sudo systemctl start ospd-openvas
sudo systemctl start gvmd
sudo systemctl start gsad

# Visit the host e.g. https://192.168.0.1:9392 login and have fun!!
# If you enjoy the content feel free to help out and donate at: https://ko-fi.com/libellux
