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
Documentation of OpenVAS is still in progress but soon complete.
:::

OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.

[OpenVAS website](https://www.openvas.org/) [GitHub](https://github.com/greenbone/openvas)

Setup and configuration has been tested on following OS with version:

* Ubuntu- 16.04, 18.04, 20.04, CentOS 8, VMware ESXi 6.7.0
* GVM-9 (OpenVAS-9), GVM-20.08 (OpenVAS 20.8.0), Atomicorp 20.8.0 (RHEL 8, CentOS 8, Fedora 32)

::: warning NOTE
GVM-9 (OpenVAS-9) reached end-of-life support. GVM 10 and 11 will reach end-of-life support in the end of 2020.
:::

## Configuration files

## Prerequisites

Dependencies required to install OpenVAS 20.8.0 on Ubuntu 20.04:

* `build-essential`
* `cmake`
* `gnutls-bin`
* `pkg-config`
* `glib2.0`
* `libgnutls28-dev`
* `libssh-dev`
* `libssl-dev`
* `libhiredis-dev`
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
* `npm`
* `nodejs`
* `libpthread-stubs0-dev`
* `clang-format`
* `libmicrohttpd-dev`
* `yarn`

## Install OpenVAS 20.8.0 from source

First install the dependencies for the [GVM Libraries](https://github.com/greenbone/gvm-libs), OpenVAS- and GSA 20.8.0.

```
server@ubuntu:~$ sudo apt-get install build-essential cmake gnutls-bin pkg-config glib2.0 libgnutls28-dev libssh-dev libssl-dev libhiredis-dev libxml2-dev doxygen libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev graphviz bison libksba-dev libical-dev libpq-dev postgresql postgresql-contrib postgresql-server-dev-all libopenvas-dev libmicrohttpd-dev npm nodejs
```

Continue to install yarn using npm with the specified installation path.

```
server@ubuntu:~$ sudo npm install -g yarn --prefix /usr/
```

Download and build the [GVM Libraries](https://github.com/greenbone/gvm-libs/releases/tag/v20.8.0) version 20.8.0.

```
server@ubuntu:~$ wget https://github.com/greenbone/gvm-libs/archive/v20.8.0.tar.gz
server@ubuntu:~$ tar -zxvf gvm-libs-20.8.0.tar.gz
server@ubuntu:~$ cd gvm-libs-20.8.0/
server@ubuntu:~$ mkdir build
server@ubuntu:~$ cd build
server@ubuntu:~$ cmake ..
server@ubuntu:~$ make
server@ubuntu:~$ sudo make install
```

Next download and install the Greenbone Vulnerability Manager.

```
server@ubuntu:~$ https://github.com/greenbone/gvmd/archive/v20.8.0.tar.gz
server@ubuntu:~$ tar -zxvf v20.8.0.tar.gz
server@ubuntu:~$ mkdir build
server@ubuntu:~$ cd build
server@ubuntu:~$ cmake ..
server@ubuntu:~$ make
server@ubuntu:~$ sudo make install
```

https://github.com/greenbone/openvas/tree/openvas-scanner-6.0

TODO: Use branch (openvas-scanner) instead of the master branch. Reinstall new VM and test all configurations.

```
server@ubuntu:~$ wget https://github.com/greenbone/openvas/archive/v20.8.0.tar.gz
server@ubuntu:~$ tar -zxvf v20.8.0.tar.gz
server@ubuntu:~$ cd openvas-20.8.0/
server@ubuntu:~$ mkdir build
server@ubuntu:~$ cd build
server@ubuntu:~$ cmake ..
server@ubuntu:~$ make
server@ubuntu:~$ sudo make install
```

```
server@ubuntu:~$ https://github.com/greenbone/gsa/archive/v20.8.0.tar.gz
server@ubuntu:~$ tar -zxvf v20.8.0.tar.gz
server@ubuntu:~$ cd gsa-20.8.0/
server@ubuntu:~$ mkdir build
server@ubuntu:~$ cd build
server@ubuntu:~$ cmake ..
server@ubuntu:~$ make
server@ubuntu:~$ sudo make install
```

## Configure PostgreSQL database

For additional information see reference greenbone/gvmd [INSTALL.md](https://github.com/greenbone/gvmd/blob/master/INSTALL.md).

First make sure that the required dependencies been installed (see [Prerequisites](#prerequisites)). Proceed to create a Postgres user and database.

```
server@ubuntu:~$ sudo -u postgres bash
createuser -DRS libellux
createdb -O libellux gvmd
```

Setup correct permissions.

```
server@ubuntu:~$ sudo -u postgres bash
psql gvmd
create role dba with superuser noinherit;
grant dba to mattm;
```

Create database extensions.

```
server@ubuntu:~$ sudo -u postgres bash
psql gvmd
create extension "uuid-ossp";
create extension "pgcrypto";
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

## Install OpenVAS 20.8.0 CentOS

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

## Install OpenVAS-9 from repository <Badge text="deprecated" type="warning"/>

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
