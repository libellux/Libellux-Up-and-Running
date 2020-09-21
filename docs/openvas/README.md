---
title: OpenVAS Vulnerability Assessment Scanner
meta:
  - name: description
    content: OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.
noGlobalSocialShare: true
tags: ["vulnerability", "scanner", "security"]
---

# OpenVAS Vulnerability Assessment Scanner

<TagLinks />

OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.

[OpenVAS website](https://www.openvas.org/) [GitHub](https://github.com/greenbone/openvas)

Setup and configuration has been tested on following OS with version:

* Ubuntu- 16.04, 18.04, 20.04, CentOS 8
* OpenVAS 20.08 for Debian 10 visit [sadsloth.net](https://sadsloth.net/post/install-gvm-20_08-src-on-debian/).
* GVM-9 (OpenVAS-9), GVM-20.08 (OpenVAS 20.08), Atomicorp 20.08 (RHEL 8, CentOS 8, Fedora 32)

::: warning NOTE
GVM-9 (OpenVAS-9) reached end-of-life support. GVM 10 and 11 will reach end-of-life support in the end of 2020.
:::

## Configuration files

## Prerequisites

Dependencies required to install OpenVAS 20.08 from source on Ubuntu 20.04:

* `build-essential`
* `cmake`
* `gnutls-bin`
* `pkg-config`
* `glib2.0`
* `libgnutls28-dev`
* `libssh-dev`
* `libssl-dev`
* `libhiredis-dev`
* `redis-server`
* `libxml2-dev`
* `doxygen`
* `xsltproc`
* `libldap2-dev`
* `libgcrypt-dev`
* `libpcap-dev`
* `libgpgme-dev`
* `libradcli-dev`
* `graphviz`
* `bison`
* `libksba-dev`
* `libical-dev`
* `libpq-dev`
* `postgresql`
* `postgresql-contrib`
* `postgresql-server-dev-all`
* `libopenvas-dev`
* `heimdal-dev`
* `libpopt-dev`
* `xmltoman`
* `gcc-mingw-w64`
* `nmap`
* `npm`
* `nodejs`
* `libpthread-stubs0-dev`
* `clang-format`
* `libmicrohttpd-dev`
* `yarn`
* `virtualenv`
* `python3-paramiko`
* `python3-lxm`
* `python3-defusedxml`
* `python3-pip`
* `python3-psutil`

## Install OpenVAS 20.08 from source

First install all the dependencies.

```
server@ubuntu:~$ sudo apt-get install build-essential cmake gnutls-bin pkg-config glib2.0 libgnutls28-dev libssh-dev libssl-dev redis-server libhiredis-dev libxml2-dev doxygen xsltproc libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev graphviz bison libksba-dev libical-dev libpq-dev postgresql postgresql-contrib postgresql-server-dev-all libopenvas-dev heimdal-dev libpopt-dev xmltoman gcc-mingw-w64 nmap libmicrohttpd-dev npm nodejs virtualenv python3-paramiko python3-lxm python3-defusedxml python3-pip python3-psutil
```

Continue to install yarn using npm with the specified installation path.

```
server@ubuntu:~$ sudo npm install -g yarn --prefix /usr/
```

First create the profile and export path for our gvm user.

```
server@ubuntu:~$ echo 'export PATH="$PATH:/opt/gvm/bin:/opt/gvm/sbin:/opt/gvm/.local/bin"' | sudo tee -a /etc/profile.d/gvm.sh
server@ubuntu:~$ sudo chmod 0755 /etc/profile.d/gvm.sh
server@ubuntu:~$ source /etc/profile.d/gvm.sh
```

Now create the `gvm.conf` and set the gvm-libs path.

```
server@ubuntu:~$ sudo nano /etc/ld.so.conf.d/gvm.conf
# gmv-libs location
/opt/gvm/lib
```

Once saved the `gvm.conf` create the OpenVAS gvm user.

```
server@ubuntu:~$ sudo mkdir /opt/gvm
server@ubuntu:~$ sudo adduser gvm --disabled-password --home /opt/gvm/ --no-create-home --gecos ''
server@ubuntu:~$ sudo usermod -aG redis gvm
server@ubuntu:~$ sudo chown gvm:gvm /opt/gvm/
server@ubuntu:~$ sudo su - gvm
```

Run the command `pwd` and you should be in the `/opt/gvm/` directory. Proceed to create the source directory where we will download and build all required packages and set the package configuration path.

```
gvm@ubuntu:~$ mkdir src
gvm@ubuntu:~$ cd src/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
```

Download and build the [GVM Libraries](https://github.com/greenbone/gvm-libs) version 20.8.0.

```
gvm@ubuntu:~$ git clone -b gvm-libs-20.08 --single-branch https://github.com/greenbone/gvm-libs.git
gvm@ubuntu:~$ cd gvm-libs/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ cd /opt/gvm/src/
```

Download and build the [OpenVAS Samba package for Windows usage](https://github.com/greenbone/openvas-smb).

```
gvm@ubuntu:~$ git clone -b master --single-branch https://github.com/greenbone/openvas-smb.git
gvm@ubuntu:~$ cd openvas-smb/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build/
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ cd /opt/gvm/src/
```

Download and install the [openvas-scanner (OpenVAS)](https://github.com/greenbone/openvas) version 20.8.0.

```
gvm@ubuntu:~$ git clone -b openvas-20.08 --single-branch https://github.com/greenbone/openvas.git
gvm@ubuntu:~$ cd openvas/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build/
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ exit
```

Next configure redis for the default OpenVAS installation.

```
server@ubuntu:~$ sudo su
root@ubuntu:~$ export LC_ALL="C"
root@ubuntu:~$ ldconfig
root@ubuntu:~$ cp /etc/redis/redis.conf /etc/redis/redis.orig
root@ubuntu:~$ cp /opt/gvm/src/openvas/config/redis-openvas.conf /etc/redis/
root@ubuntu:~$ chown redis:redis /etc/redis/redis-openvas.conf
root@ubuntu:~$ echo "db_address = /run/redis-openvas/redis.sock" > /opt/gvm/etc/openvas/openvas.conf
root@ubuntu:~$ systemctl enable redis-server@openvas.service
root@ubuntu:~$ systemctl start redis-server@openvas.service
```

OpenVAS will be launched from an ospd-openvas process. The process need to be executed using sudo. Update the sudoers file accordingly.

```{12}
root@ubuntu:~$ visudo
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
```

Also in the sudoers file add the following lines to give the gvm user root privileges to execute OpenVAS and the greenbone security assistant (gsad).

```{5,6}
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

### Allow gvm user to run ospd-openvas and launch OpenVAS with root privileges
gvm ALL = NOPASSWD: /opt/gvm/sbin/openvas
gvm ALL = NOPASSWD: /opt/gvm/sbin/gsad
```

Once we saved the updated sudoers file we can update Network Vulnerability Tests (NVT) from Greenbone community feed (this might take awhile).

```{3}
root@ubuntu:~$ exit
server@ubuntu:~$ sudo su - gvm
gvm@ubuntu:~$ greenbone-nvt-sync
```

Next download and install the [Greenbone Vulnerability Manager (GVM)](https://github.com/greenbone/gvmd) version 20.8.0.

```
gvm@ubuntu:~$ cd /opt/gvm/src/
gvm@ubuntu:~$ git clone -b gvmd-20.08 --single-branch https://github.com/greenbone/gvmd.git
gvm@ubuntu:~$ cd gvmd/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build/
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ exit
```

### Configure PostgreSQL database

For additional information see reference greenbone/gvmd [INSTALL.md](https://github.com/greenbone/gvmd/blob/master/INSTALL.md).

First make sure that the required dependencies been installed (see [Prerequisites](#prerequisites)). Proceed to create a Postgres user and database.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ export LC_ALL="C"
postgres@ubuntu:/home/server$ createuser -DRS gvm
postgres@ubuntu:/home/server$ createdb -O gvm gvmd
```

Setup correct permissions.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ psql gvmd
gvmd=# create role dba with superuser noinherit;
gvmd=# grant dba to gvm;
```

Create database extensions.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ psql gvmd
gvmd=# create extension "uuid-ossp";
gvmd=# create extension "pgcrypto";
gvmd=# exit
postgres@ubuntu:/home/server$ exit
```

Once the database has been configured proceed and create the certificates.

```{2}
server@ubuntu:~$ sudo su - gvm
gvm@ubuntu:~$ gvm-manage-certs -a
```

Create the gvm administration user. Do not forget to change the password later.

::: warning NOTE
Do not use special characters in the password.
:::

```
gvm@ubuntu:~$ /opt/gvm/sbin/gvmd --create-user=admin --password=admin
User created.
```

Next lets retrieve our administrators uuid.

```{2}
gvm@ubuntu:~$ gvmd --get-users --verbose
gvm@ubuntu:~$ admin 129a1661-138b-4017-25x1-xc0231f91222
````

Use the administration uuid and modify the gvmd settings as beneath.

```
gvm@ubuntu:~$ gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value 129a1661-138b-4017-25x1-xc0231f91222
```

Next update the greenbone feed synchronisation one by one (this might take awhile).

```
gvm@ubuntu:~$ greenbone-feed-sync --type GVMD_DATA
gvm@ubuntu:~$ greenbone-feed-sync --type SCAP
gvm@ubuntu:~$ greenbone-feed-sync --type CERT
```

Proceed to download and install the [Greenbone Security Assistant (GSA)](https://github.com/greenbone/gsa) version 20.8.0.

```
gvm@ubuntu:~$ cd src/
gvm@ubuntu:~$ git clone -b gsa-20.08 --single-branch https://github.com/greenbone/gsa.git
gvm@ubuntu:~$ cd gsa/
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ mkdir build
gvm@ubuntu:~$ cd build/
gvm@ubuntu:~$ cmake -DCMAKE_INSTALL_PREFIX=/opt/gvm ..
gvm@ubuntu:~$ make
gvm@ubuntu:~$ make doc
gvm@ubuntu:~$ make install
gvm@ubuntu:~$ touch /opt/gvm/var/log/gvm/gsad.log
```

Check the version of Python. If the version is not 3.7 make sure to add the repository and install the correct version.

```
gvm@ubuntu:~$ exit
server@ubuntu:~$ python3 --version
server@ubuntu:~$ sudo add-apt-repository ppa:deadsnakes/ppa
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install python3.7 python3.7-dev
````

Next install the virtual environment.

```
server@ubuntu:~$ sudo su - gvm
gvm@ubuntu:~$ cd /opt/gvm/src
gvm@ubuntu:~$ export PKG_CONFIG_PATH=/opt/gvm/lib/pkgconfig:$PKG_CONFIG_PATH
gvm@ubuntu:~$ virtualenv --python python3.7  /opt/gvm/bin/ospd-scanner/
gvm@ubuntu:~$ source /opt/gvm/bin/ospd-scanner/bin/activate
```

Install ospd

```
gvm@ubuntu:~$ git clone -b ospd-20.08 --single-branch https://github.com/greenbone/ospd.git
gvm@ubuntu:~$ mkdir /opt/gvm/var/run/ospd/
gvm@ubuntu:~$ cd ospd/
gvm@ubuntu:~$ pip3 install .
gvm@ubuntu:~$ cd /opt/gvm/src
```

Install ospd-openvas

```
gvm@ubuntu:~$ git clone -b ospd-openvas-20.08 --single-branch  https://github.com/greenbone/ospd-openvas.git
gvm@ubuntu:~$ cd ospd-openvas/
gvm@ubuntu:~$ pip3 install .
```

Next setup the startup scripts. First we configure the Greenbone manager startup script.

```
gvm@ubuntu:~$ exit
server@ubuntu:~$ sudo su
root@ubuntu:~$ nano /etc/systemd/system/gvmd.service
```

Paste the following setup to the startup script.

```bash
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
```

Once we saved our first startup script proceed to creat the script for the greenbone security assistant (GSA).

```
root@ubuntu:~$ nano /etc/systemd/system/gsad.service
```

Paste the following setup to the GSA startup script.

```bash
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
```

```
root@ubuntu:~$ nano /etc/systemd/system/ospd-openvas.service
```

Paste the following setup to the ospd-openvas startup script.

```bash
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
```

Reload the system daemon and enable our startup script.

```
root@ubuntu:~$ systemctl daemon-reload
root@ubuntu:~$ systemctl enable gvmd
root@ubuntu:~$ systemctl enable gsad
root@ubuntu:~$ systemctl enable ospd-openvas
root@ubuntu:~$ systemctl start gvmd
root@ubuntu:~$ systemctl start gsad
root@ubuntu:~$ systemctl start ospd-openvas
```

Next check that all our services are running.

```
root@ubuntu:~$ systemctl status gvmd
root@ubuntu:~$ systemctl status gsad
root@ubuntu:~$ systemctl status ospd-openvas
```

Login at your localhost e.g. `https://192.168.0.1` with the username `admin` and the choosen password.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">

## Install OpenVAS 20.08 CentOS

[Atomicorp OpenVAS package](https://github.com/Atomicorp/openvas) <Badge text="non-sponsored" type="default"/>

Check if SELinux is enabled.

```{2,7}
server@centos:~$ sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
```

If enabled proceed to disable SELinux by running the command below and update the SELinux configuration file.

```{1,9}
server@centos:~$ sudo setenforce 0
server@centos:~$ sudo nano /etc/selinux/config

# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=disabled
```

Save and reboot the system.

```
server@centos:~$ sudo shutdown -r now
```

Once the system rebooted control that SELinux been disabled.

```
server@centos:~$ sestatus
SELinux status:                 disabled
```

Continue and download the Atomicorp installer.

```{7,8}
server@centos:~$ wget -q -O - https://updates.atomicorp.com/installers/atomic | sudo sh

For supported software packages please contact us at: 

  sales@atomicorp.com

Do you agree to these terms? (yes/no) [Default: yes] yes
Enable repo by default? (yes/no) [Default: yes]: yes
```

Enable PowerTools and install extra packages.

```
server@centos:~$ sudo yum config-manager --set-enabled PowerTools
server@centos:~$ sudo yum install epel-release
```

Proceed and install GVM.

```
server@centos:~$ sudo yum install gvm
```

Finally run the GVM configuration script to setup OpenVAS (this might take awhile).

```
server@centos:~$ sudo gvm-setup
```

Once the GVM setup been complete proceed to set the administrator password.

::: warning NOTE
Do not use special characters in the password.
:::

```{9,10}
Updating OpenVAS Manager certificates: Complete

GVMD startup: Done

Set the GSAD admin users password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter Administrator Password:
Verify Administrator Password:

Setup complete
  Log in to GSAD at https://localhost
```

Login at your localhost e.g. `https://192.168.0.1` with the username `admin` and the choosen password.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_login.png')" alt="GSA login">

## Install OpenVAS-9 community version <Badge text="deprecated" type="warning"/>

First add the OpenVAS PPA repository to our server.

```
server@ubuntu:~$ sudo add-apt-repository ppa:mrazavi/openvas
```

Next we need to update and install the main packages.

```
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install openvas9
```

We will also install the OpenVAS9 dev package so we can run single OpenVAS nasl scripts, for fast troubleshooting. Additionaly we will also be adding the vulnerability data by syncing with the Greenbone feeds.

```
server@ubuntu:~$ sudo apt-get install libopenvas9-dev
server@ubuntu:~$ sudo greenbone-nvt-sync
server@ubuntu:~$ sudo greenbone-scapdata-sync
server@ubuntu:~$ sudo greenbone-certdata-sync
```

To keep OpenVAS up-to-date to run the latest tests, we need to sync the nvt, scap and cert data regularly. To achieve this we will create a script and add it to our cron.

```
server@ubuntu:~$ sudo nano /usr/local/bin/openvas-update
```

Add the following content to the openvas-update file.

```bash
/usr/sbin/greenbone-nvt-sync
/usr/sbin/greenbone-certdata-sync
/usr/sbin/greenbone-scapdata-sync
/usr/sbin/openvasmd --update --verbose --progress
/etc/init.d/openvas-manager restart
/etc/init.d/openvas-scanner restart
```

Save the file and make it executable.

```
server@ubuntu:~$ sudo chmod a+x /usr/local/bin/openvas-update
```

We will add the update script to cron with a nightly frequency.

```
Nightly 0 0 * * * root /usr/local/bin/openvas-update
```

## OpenVAS behind NGINX Proxy

```
server@ubuntu:~$ sudo nano /etc/default/openvas-gsa
```

```bash
# Defaults for Greenbone Security Assistant initscript
# sourced by /etc/init.d/openvas-gsa
# installed at /etc/default/openvas-gsa by the maintainer scripts

# To disable HTTPS:
#
#HTTP_ONLY=1

# To allow <host> as hostname/address part of a Host header:
#
ALLOW_HEADER_HOST=openvas.example.com

# To enable http redirection:
#
HTTP_REDIRECT=1

# To set listening address:
#
LISTEN_ADDRESS="127.0.0.1"

# To set listening port number:
#
PORT_NUMBER=4000
```

Restart openvas-gsa `sudo systemctl restart openvas-gsa`. Edit the NGINX configuration to fit the environment.

``` nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name openvas.example.com;

    # SSL CERTIFICATES
    ssl_certificate /etc/nginx/ssl/openvas.example.com/server.crt;
    ssl_certificate_key /etc/nginx/ssl/openvas.example.com/server.key;

    ssl_protocols TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        proxy_set_header   Host             $http_host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   REMOTE_HOST      $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header   X-FORWARDED-PROTOCOL $scheme;  
        proxy_pass https://127.0.0.1:4000;
    }

   location = /favicon.ico { access_log off; log_not_found off; }
   location = /robots.txt  { access_log off; log_not_found off; }

   access_log off;
   error_log  /var/log/nginx/openvas.example.com-error.log error;

   location ~ /\.(?!well-known).* {
       deny all;
    }
}
```

```
server@ubuntu:~$ sudo systemctl reload nginx.service
```

## Troubleshooting

If you encounter any issue or having questions regarding OpenVAS I recommend using their very helpful [community forum](https://community.greenbone.net/).

### SEC_ERROR_INADEQUATE_KEY_USAGE

If receving `SEC_ERROR_INADEQUATE_KEY_USAGE` and the browser blocks access to the local GVM server, proceed with removing the certificate. For example in Firefox go to `about:preferences#privacy` and the certificate section. Select Show certificates, click the Servers tab and remove the certificates found under GVM Users.

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### The Greenbone Security Manager

The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.

[Greenbone Security Manager](https://www.greenbone.net/en/product-comparison/)

<social-share />
