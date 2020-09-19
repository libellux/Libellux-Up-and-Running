---
title: OpenVAS Vulnerability Assessment Scanner
meta:
  - name: description
    content: OpenVAS Vulnerability Assessment Scanner
noGlobalSocialShare: true
tags: ["vulnerability", "scanner", "security"]
---

# OpenVAS Vulnerability Assessment Scanner

<TagLinks />

::: warning DEVELOPMENT
In development but soon complete.
:::

TODO:

* ospd

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

## Install OpenVAS 20.08 from source

First install all the dependencies.

```
server@ubuntu:~$ sudo apt-get install build-essential cmake gnutls-bin pkg-config glib2.0 libgnutls28-dev libssh-dev libssl-dev redis-server libhiredis-dev libxml2-dev doxygen libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev graphviz bison libksba-dev libical-dev libpq-dev postgresql postgresql-contrib postgresql-server-dev-all libopenvas-dev heimdal-dev libpopt-dev xmltoman gcc-mingw-w64 nmap libmicrohttpd-dev npm nodejs
```

Continue to install yarn using npm with the specified installation path.

```
server@ubuntu:~$ sudo npm install -g yarn --prefix /usr/
```

Create the OpenVAS gvm user.

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

### Configure redis for the default OpenVAS installation

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

Next download and install the [Greenbone Vulnerability Manager (GVM)](https://github.com/greenbone/gvmd) version 20.8.0.

```
server@ubuntu:~$ wget https://github.com/greenbone/gvmd/archive/v20.8.0.tar.gz
server@ubuntu:~$ tar -zxvf v20.8.0.tar.gz
server@ubuntu:~$ rm v20.8.0.tar.gz
server@ubuntu:~$ cd gvmd-20.8.0/
server@ubuntu:~$ mkdir build
server@ubuntu:~$ cd build
server@ubuntu:~$ cmake ..
server@ubuntu:~$ make
server@ubuntu:~$ sudo make install
```

Change permissions for the OpenVAS plugins folder as we're required to execute the feed command as non-root.

```
server@ubuntu:~$ cd /usr/local/var/lib/openvas/
server@ubuntu:~$ sudo chown -R server plugins/
```

We also have to manually create `feed-update.lock` as the folder is owned by root and give our non-root user permission.

```
server@ubuntu:~$ cd /usr/local/var/run/
server@ubuntu:~$ sudo touch feed-update.lock
server@ubuntu:~$ sudo chown server feed-update.lock
```

Now we can update Network Vulnerability Tests (NVT) feed from Greenbone community feed (this might take awhile).

```
server@ubuntu:~$ greenbone-nvt-sync
```

```
export "LD_LIBRARY_PATH=/usr/local/lib"
```

Proceed to download and install the [Greenbone Security Assistant (GSA)](https://github.com/greenbone/gsa) version 20.8.0.

```
server@ubuntu:~$ wget https://github.com/greenbone/gsa/archive/v20.8.0.tar.gz
server@ubuntu:~$ tar -zxvf v20.8.0.tar.gz
server@ubuntu:~$ rm v20.8.0.tar.gz
server@ubuntu:~$ cd gsa-20.8.0/
server@ubuntu:~$ mkdir build
server@ubuntu:~$ cd build
server@ubuntu:~$ cmake ..
server@ubuntu:~$ make
server@ubuntu:~$ sudo make install
```

```
sudo gvm-manage-certs -a
```

Before complete make sure to read both the [PostgreSQL configuration](#configure-postgresql-database) and the [firewall section](#firewall-settings).

## Configure PostgreSQL database

For additional information see reference greenbone/gvmd [INSTALL.md](https://github.com/greenbone/gvmd/blob/master/INSTALL.md).

First make sure that the required dependencies been installed (see [Prerequisites](#prerequisites)). Proceed to create a Postgres user and database.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ createuser -DRS server
postgres@ubuntu:/home/server$ createdb -O server gvmd
```

Setup correct permissions.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ psql gvmd
gvmd=# create role dba with superuser noinherit;
gvmd=# grant dba to server;
```

Create database extensions.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ psql gvmd
gvmd=# create extension "uuid-ossp";
gvmd=# create extension "pgcrypto";
gvmd=# quit
postgres@ubuntu:/home/server$ exit
```

## Firewall settings

The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW [here](https://help.ubuntu.com/community/UFW).

::: details UFW Settings
```console
server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
```
:::

If port 443 or 80 is already used, as in this example, update the UFW rules and allow the fallback port 9392.

```console
server@ubuntu:~$ sudo ufw allow 9392 comment "OpenVAS"
```

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

```{9}
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
server@centos:~$ sudo reboot
```

Once the system is rebooted continue and download the Atomicorp installer.

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

```
GVMD startup: Complete

Step 2: Choose the GSAD admin users password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter administrator username [Default: admin] : libellux
Enter Administrator Password:
Verify Administrator Password:
```

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

### SEC_ERROR_INADEQUATE_KEY_USAGE

If receving `SEC_ERROR_INADEQUATE_KEY_USAGE` and the browser blocks access to the local GVM server, proceed with removing the certificate. For example in Firefox go to `about:preferences#privacy` and the certificate section. Select Show certificates, click the Servers tab and remove the certificates found under GVM Users.

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### The Greenbone Security Manager

The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.

[Greenbone Security Manager](https://www.greenbone.net/en/product-comparison/)

<social-share />
