---
title: Greenbone Vulnerability Manager
meta:
  - name: description
    content: OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.
noGlobalSocialShare: true
tags: ["vulnerability", "scanner", "security"]
---

# Greenbone Vulnerability Manager

<TagLinks />

OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.

[GVM website](https://www.greenbone.net/en/vulnerability-management/) [OpenVAS website](https://www.openvas.org/) [GitHub](https://github.com/greenbone/openvas) [GVM official docs](https://greenbone.github.io/docs/)

Setup and configuration has been tested on the following operating systems:

* Ubuntu- 16.04, 18.04, 20.04, CentOS 8
* GVM 20.08 for Debian 10 visit [sadsloth.net](https://sadsloth.net/post/install-gvm-20_08-src-on-debian/).
* GVM-9 (OpenVAS-9), Atomicorp 20.08 (RHEL 8, CentOS 8, Fedora 32), GVM- 20.08, 20.08.1, 21.04, 21.4.2

::: warning NOTE
GVM-9 (OpenVAS-9) reached end-of-life support. GVM 10 and 11 will reach end-of-life support in the end of 2020.
:::

## Configuration files

::: tip INFO
The lines in the "scripts" below has been used for testing and successfully configure GVM 20.08 (20.08.1) and 21.04 (21.4.2).
You may use the testing guide to install GVM or follow our detailed step-by-step tutorial below to install GVM 21.04.
:::

* [21.4.2](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/21_4_2.sh)
* [20.08.1](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/20_08_1.sh)

## Prerequisites

Dependencies required to install GVM 21.04 (21.4.2) from source on Ubuntu 20.04:

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
* `python3-lxml`
* `python3-defusedxml`
* `python3-pip`
* `python3-psutil`
* `libnet1-dev`
* `libunistring-dev`

## Install GVM 21.04 from source <Badge text="Rev 6" type="default"/>

Before we will install the latest version of Greenbone Vulnerability Manager (GVM) 21.04 (21.4.2) make sure your system is up-to-date.

```
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get upgrade
```

Proceed to install all the dependencies for GVM 21.04 (21.4.2) on Ubuntu 20.04.

```
server@ubuntu:~$ sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y cmake pkg-config glib2.0 gcc-mingw-w64 \
gnutls-bin libgnutls28-dev libxml2-dev libssh-dev libssl-dev libunistring-dev \
libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev \
libksba-dev libical-dev libpq-dev libopenvas-dev libpopt-dev libnet1-dev \
libmicrohttpd-dev redis-server libhiredis-dev doxygen xsltproc \
graphviz bison postgresql postgresql-contrib postgresql-server-dev-all \
heimdal-dev xmltoman nmap npm nodejs virtualenv \
python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil
```

Continue to install yarn using npm with the specified installation path.

```
server@ubuntu:~$ sudo npm install -g yarn --prefix /usr/
```

### Set up GVM user and group

Lets create the GVM user and add it to sudoers group without login.

```
server@ubuntu:~$ sudo useradd -r -M -U -G sudo -s /usr/sbin/nologin gvm
```

Next add your current sudo users to the GVM group so you're allowed to run *gvmd*.

```
server@ubuntu:~$ sudo usermod -aG gvm $USER
```

Make sure that the group change is updated by running the below command.

```
server@ubuntu:~$ su $USER
```

### Define paths

Next we will define base, source, build and installation directory. First lets set up the base path.

```
server@ubuntu:~$ export PATH=$PATH:/usr/local/sbin
server@ubuntu:~$ export INSTALL_PREFIX=/usr/local
```

Continue to setup the source directory.

```
server@ubuntu:~$ export SOURCE_DIR=$HOME/source
server@ubuntu:~$ mkdir -p $SOURCE_DIR
```

Next set and create the build directory.

```
server@ubuntu:~$ export BUILD_DIR=$HOME/build
server@ubuntu:~$ mkdir -p $BUILD_DIR
```

Finally set up the installation directory.

```
server@ubuntu:~$ export INSTALL_DIR=$HOME/install
server@ubuntu:~$ mkdir -p $INSTALL_DIR
```

### Import GVM signing key to validate the integrity of the source files

```{1,2}
server@ubuntu:~$ curl -O https://www.greenbone.net/GBCommunitySigningKey.asc
server@ubuntu:~$ gpg --import GBCommunitySigningKey.asc

gpg: /home/$USER/.gnupg/trustdb.gpg: trustdb created
gpg: key 9823FAA60ED1E580: public key "Greenbone Community Feed integrity key" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

Next edit and add the GPG key to the ultimately trusted list.

```
server@ubuntu:~$ gpg --edit-key 9823FAA60ED1E580
```

You'll be presented with following information and options as below. First type *trust* and select option 5 (I trust ultimately).

```{10,23,26}
gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

pub  rsa4096/9823FAA60ED1E580
     created: 2017-09-06  expires: never       usage: SC
     trust: unknown       validity: unknown
[ unknown] (1). Greenbone Community Feed integrity key

gpg> trust
pub  rsa4096/9823FAA60ED1E580
     created: 2017-09-06  expires: never       usage: SC
     trust: unknown       validity: unknown
[ unknown] (1). Greenbone Community Feed integrity key

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5
Do you really want to set this key to ultimate trust? (y/N) y

pub  rsa4096/9823FAA60ED1E580
     created: 2017-09-06  expires: never       usage: SC
     trust: ultimate      validity: unknown
[ unknown] (1). Greenbone Community Feed integrity key
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg> quit
```

### Specify Greenbone Vulnerability Manager version

Set the GVM version to 21.4.2.

```
server@ubuntu:~$ export GVM_VERSION=21.4.2
```

### Build GVM libraries

Download and build the [GVM libraries](https://github.com/greenbone/gvm-libs) version 21.04 (21.4.1). Set the GVM libraries to same version as GVM.

```
server@ubuntu:~$ export GVM_LIBS_VERSION=$GVM_VERSION
```

Download the specified GVM libraries version.

```
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v$GVM_LIBS_VERSION.tar.gz -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gvm-libs/releases/download/v$GVM_LIBS_VERSION/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc
```

Verify the GVM libraries.

```
server@ubuntu:~$ gpg --verify $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz
```

Make sure the output says that the signature from Greenbone Community Feed is good.

```
gpg: Signature made Tue 03 Aug 2021 12:11:44 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
```

Continue to extract the gvm-libs file.

```
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz
```

Next create build folder for gvm-libs.

```
server@ubuntu:~$ mkdir -p $BUILD_DIR/gvm-libs && cd $BUILD_DIR/gvm-libs
```

Proceed to build the gvm-libs source.

```
server@ubuntu:~$ cmake $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release \
  -DSYSCONFDIR=/etc \
  -DLOCALSTATEDIR=/var \
  -DGVM_PID_DIR=/run/gvm
```

Install gvm-libs by running the command below.

```
server@ubuntu:~$ make DESTDIR=$INSTALL_DIR install
```

Finally clean up.

```
server@ubuntu:~$ sudo cp -rv $INSTALL_DIR/* /
server@ubuntu:~$ rm -rf $INSTALL_DIR/*
```

### Build the Greenbone Vulnerability Manager

Next download and build the [Greenbone Vulnerability Manager (GVM)](https://github.com/greenbone/gvmd) version 21.04 (21.4.3). Set the GVMD version to the latest realese 21.4.3.

```
server@ubuntu:~$ export GVMD_VERSION=21.4.3
```

Proceed to download set version.

```
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v$GVMD_VERSION.tar.gz -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gvmd/releases/download/v$GVMD_VERSION/gvmd-$GVMD_VERSION.tar.gz.asc -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc
```

Verify the GVMD download.

```
server@ubuntu:~$ gpg --verify $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz
```

Make sure the output says that the signature from Greenbone Community Feed is good.

```
gpg: Signature made Tue 03 Aug 2021 02:28:53 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
```

Extract the downloaded GVMD file.

```
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz
```

Next create the build folder for GVMD.

```
server@ubuntu:~$ mkdir -p $BUILD_DIR/gvmd && cd $BUILD_DIR/gvmd
```

Build GVMD running below command.

```
server@ubuntu:~$ cmake $SOURCE_DIR/gvmd-$GVMD_VERSION \
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
  -DLOGROTATE_DIR=/etc/logrotate.d
```

Install GVMD.

```
server@ubuntu:~$ make DESTDIR=$INSTALL_DIR install
```

Clean up.

```
server@ubuntu:~$ sudo cp -rv $INSTALL_DIR/* /
server@ubuntu:~$ rm -rf $INSTALL_DIR/*
```

### Build the Greenbone Security Assistant

Proceed to download and build the [Greenbone Security Assistant (GSA)](https://github.com/greenbone/gsa) version 21.04 (21.4.2).

```
server@ubuntu:~$ export GSA_VERSION=$GVM_VERSION
```

Download Greenbone Security Assistant and its node modules.

```
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gsa/archive/refs/tags/v$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-node-modules-$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-node-modules-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz.asc
```

Once complete verify the GSA downloads and make sure the signature from Greenbone Community Feed is good.

```
server@ubuntu:~$ gpg --verify $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz
server@ubuntu:~$ gpg --verify $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz
```

Extract the GSA and its node modules.

```
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz
server@ubuntu:~$ tar -C $SOURCE_DIR/gsa-$GSA_VERSION/gsa -xvzf $SOURCE_DIR/gsa-node-modules-$GSA_VERSION.tar.gz
```

Proceed to create the GSA build folder.

```
server@ubuntu:~$ mkdir -p $BUILD_DIR/gsa && cd $BUILD_DIR/gsa
```

Once you've created the build folder build the GSA source.

```
server@ubuntu:~$ cmake $SOURCE_DIR/gsa-$GSA_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release \
  -DSYSCONFDIR=/etc \
  -DLOCALSTATEDIR=/var \
  -DGVM_RUN_DIR=/run/gvm \
  -DGSAD_PID_DIR=/run/gvm \
  -DLOGROTATE_DIR=/etc/logrotate.d
```

Next run the installation and clean up.

```
server@ubuntu:~$ make DESTDIR=$INSTALL_DIR install
server@ubuntu:~$ sudo cp -rv $INSTALL_DIR/* /
server@ubuntu:~$ rm -rf $INSTALL_DIR/*
```

### Build the OpenVAS SMB module

Download and build the [openvas-scanner (OpenVAS)](https://github.com/greenbone/openvas-smb) version 21.04.

```
server@ubuntu:~$ export OPENVAS_SMB_VERSION=21.4.0
```

```
server@ubuntu:~$ curl -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v$OPENVAS_SMB_VERSION.tar.gz -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/openvas-smb/releases/download/v$OPENVAS_SMB_VERSION/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc
```

Run the gpg command to verify the downloaded file.

```
server@ubuntu:~$ gpg --verify $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz
```

```
gpg: Signature made Fri 25 Jun 2021 06:36:43 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
```

Extract files.

```
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz
```

Create the build folder.

```
server@ubuntu:~$ mkdir -p $BUILD_DIR/openvas-smb && cd $BUILD_DIR/openvas-smb
```

Build openvas-smb to enable scans for Windows systems.

```
server@ubuntu:~$ cmake $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release
```

Proceed with installation.

```
server@ubuntu:~$ make DESTDIR=$INSTALL_DIR install
```

Copy the installation and remove the temporary installation directory.

```
server@ubuntu:~$ sudo cp -rv $INSTALL_DIR/* /
server@ubuntu:~$ rm -rf $INSTALL_DIR/*
```

### Build the OpenVAS Scanner

Download and build the [openvas-scanner (OpenVAS)](https://github.com/greenbone/openvas) version 21.04 (21.4.1).

```
server@ubuntu:~$ export OPENVAS_SCANNER_VERSION=$GVM_VERSION
```

```
server@ubuntu:~$ curl -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v$OPENVAS_SCANNER_VERSION.tar.gz -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/openvas-scanner/releases/download/v$OPENVAS_SCANNER_VERSION/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc
```

As prior verify the downloaded source file.

```
server@ubuntu:~$ gpg --verify $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz
```

```
gpg: Signature made Tue 03 Aug 2021 12:59:52 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
```

If all good proceed to extract the OpenVAS scanner.

```
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz
```

Create the OpenVAS scanner build directory.

```
server@ubuntu:~$ mkdir -p $BUILD_DIR/openvas-scanner && cd $BUILD_DIR/openvas-scanner
```

Build the OpenVAS scanner.

```
server@ubuntu:~$ cmake $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION \
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \
  -DCMAKE_BUILD_TYPE=Release \
  -DSYSCONFDIR=/etc \
  -DLOCALSTATEDIR=/var \
  -DOPENVAS_FEED_LOCK_PATH=/var/lib/openvas/feed-update.lock \
  -DOPENVAS_RUN_DIR=/run/ospd
```

Next install the scanner.

```
server@ubuntu:~$ make DESTDIR=$INSTALL_DIR install
```

Finally clean up.

```
server@ubuntu:~$ sudo cp -rv $INSTALL_DIR/* /
server@ubuntu:~$ rm -rf $INSTALL_DIR/*
```

### Download and install the base class ospd (21.4.3) for scanner wrappers and ospd-openvas for remote control

Proceed to download and install [ospd](https://github.com/greenbone/ospd).

```
server@ubuntu:~$ export OSPD_VERSION=21.4.3
server@ubuntu:~$ export OSPD_OPENVAS_VERSION=$GVM_VERSION
```

```
server@ubuntu:~$ curl -f -L https://github.com/greenbone/ospd/archive/refs/tags/v$OSPD_VERSION.tar.gz -o $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/ospd/releases/download/v$OSPD_VERSION/ospd-$OSPD_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz.asc
server@ubuntu:~$ curl -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v$OSPD_OPENVAS_VERSION.tar.gz -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
server@ubuntu:~$ curl -f -L https://github.com/greenbone/ospd-openvas/releases/download/v$OSPD_OPENVAS_VERSION/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc
```

Verify ospd and ospd-openvas.

```
server@ubuntu:~$ gpg --verify $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz.asc $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz
server@ubuntu:~$ gpg --verify $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
```

Continue by extracting both files.

```
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
```

Before you install ospd and ospd-openvas make sure that you've got the required version of python3-psutil (5.7.2).

```
server@ubuntu:~$ pip install --upgrade psutil==5.7.2

```

Once you've installed Python3-psutil 5.7.2 go to the source directory of ospd.

```
server@ubuntu:~$ cd $SOURCE_DIR/ospd-$OSPD_VERSION
```

Run the installation.

```
server@ubuntu:~$ python3 -m pip install . --prefix=$INSTALL_PREFIX --root=$INSTALL_DIR
```

```
Successfully built ospd wrapt
Installing collected packages: wrapt, deprecated, ospd
Successfully installed deprecated-1.2.12 ospd-21.4.3 wrapt-1.12.1
```

Proceed to install ospd-openvas and go to its source directory.

```
server@ubuntu:~$ cd $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION
```

Run the ospd-openvas installation.

```
server@ubuntu:~$ python3 -m pip install . --prefix=$INSTALL_PREFIX --root=$INSTALL_DIR --no-warn-script-location
```

Clean up.

```
server@ubuntu:~$ sudo cp -rv $INSTALL_DIR/* /
server@ubuntu:~$ rm -rf $INSTALL_DIR/*
```

### Build the GVM tools

Install [GVM tools](https://github.com/greenbone/gvm-tools) version 21.04 (21.6.1).

```
server@ubuntu:~$ python3 -m pip install --user gvm-tools
```

### Configure Redis

Next configure redis for the default GVM installation.

```
server@ubuntu:~$ sudo cp $SOURCE_DIR/openvas-scanner-$GVM_VERSION/config/redis-openvas.conf /etc/redis/
server@ubuntu:~$ sudo chown redis:redis /etc/redis/redis-openvas.conf
server@ubuntu:~$ echo "db_address = /run/redis-openvas/redis.sock" | sudo tee -a /etc/openvas/openvas.conf
```

Start the redis server and enable it as an start up service.

```
server@ubuntu:~$ sudo systemctl start redis-server@openvas.service
server@ubuntu:~$ sudo systemctl enable redis-server@openvas.service
```

Add redis to the GVM group.

```
server@ubuntu:~$ sudo usermod -aG redis gvm
```

### Set up GVM user permissions

Make sure that the GVM user and the GVM group has correct permissions.

```
server@ubuntu:~$ sudo chown -R gvm:gvm /var/lib/gvm
server@ubuntu:~$ sudo chown -R gvm:gvm /var/lib/openvas
server@ubuntu:~$ sudo chown -R gvm:gvm /var/log/gvm
server@ubuntu:~$ sudo chown -R gvm:gvm /run/gvm
```

```
server@ubuntu:~$ sudo chmod -R g+srw /var/lib/gvm
server@ubuntu:~$ sudo chmod -R g+srw /var/lib/openvas
server@ubuntu:~$ sudo chmod -R g+srw /var/log/gvm
```

```
server@ubuntu:~$ sudo chown gvm:gvm /usr/local/sbin/gvmd
server@ubuntu:~$ sudo chmod 6750 /usr/local/sbin/gvmd
```

You also need to adjust the permissions for the feed synchronization.

```
server@ubuntu:~$ sudo chown gvm:gvm /usr/local/bin/greenbone-nvt-sync
server@ubuntu:~$ sudo chmod 740 /usr/local/sbin/greenbone-feed-sync
server@ubuntu:~$ sudo chown gvm:gvm /usr/local/sbin/greenbone-*-sync
server@ubuntu:~$ sudo chmod 740 /usr/local/sbin/greenbone-*-sync
```

OpenVAS will be launched from an ospd-openvas process. The process need to be executed using root. Update the secure path in the sudoers file accordingly.

```{5}
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

# allow users of the gvm group run openvas
%gvm ALL = NOPASSWD: /usr/local/sbin/openvas
```

### Configure PostgreSQL database

For additional information see reference greenbone/gvmd [INSTALL.md](https://github.com/greenbone/gvmd/blob/master/INSTALL.md).

First make sure that the required dependencies have been installed (see [Prerequisites](#prerequisites)). Proceed to create a Postgres user and database.

```
server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ createuser -DRS gvm
postgres@ubuntu:/home/server$ createdb -O gvm gvmd
```

Setup correct permissions.

```
postgres@ubuntu:/home/server$ psql gvmd
gvmd=# create role dba with superuser noinherit;
gvmd=# grant dba to gvm;
```

Create database extensions.

```
gvmd=# create extension "uuid-ossp";
gvmd=# create extension "pgcrypto";
gvmd=# exit
postgres@ubuntu:/home/server$ exit
```

### Create GVM admin

Create the GVM administration user. Do not forget to change the password later.

::: warning NOTE
Do not use special characters in the password.
:::

```
server@ubuntu:~$ sudo /usr/local/sbin/gvmd --create-user=admin --password=admin
User created.
```

Next, lets retrieve our administrators uuid.

```{2}
server@ubuntu:~$ sudo gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
```

Use the administration uuid and modify the gvmd settings. Remember to put your uuid as the value option.

```
server@ubuntu:~$ sudo gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE
```

### Update Network Vulnerability Tests

Update Network Vulnerability Tests (NVT) from Greenbone Community Feed (this might take awhile).

```
server@ubuntu:~$ sudo -u gvm greenbone-nvt-sync
```

### Update Greenbone Feed synchronisation

Update the Greenbone feed synchronisation one at the time (this might take awhile).

```
server@ubuntu:~$ sudo -u gvm greenbone-feed-sync --type GVMD_DATA
server@ubuntu:~$ sudo -u gvm greenbone-feed-sync --type SCAP
server@ubuntu:~$ sudo -u gvm greenbone-feed-sync --type CERT
```

### Generate GVM certificates

Once we've finished the feed synchronisation generate GVM certificates.

```
server@ubuntu:~$ sudo -u gvm gvm-manage-certs -a
```

### Set up systemd

Next setup the startup scripts. First, configure the Greenbone Manager startup script.

```
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
```

```
server@ubuntu:~$ sudo cp $BUILD_DIR/gvmd.service /etc/systemd/system/
```

Once the first startup script is saved, proceed to create the script for the Greenbone Security Assistant (GSA).

```{13}
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
ExecStart=/usr/local/sbin/gsad --listen=192.168.0.1 --port=9392
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
Alias=greenbone-security-assistant.service
EOF
```

```
server@ubuntu:~$ sudo cp $BUILD_DIR/gsad.service /etc/systemd/system/
```

Create the systemd service script for ospd-openvas.

```
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
```

```
server@ubuntu:~$ sudo cp $BUILD_DIR/ospd-openvas.service /etc/systemd/system/
```

### Modify scanner

Before running vulnerability scans, also known as tasks, you need to modify the default OpenVAS scanner. Get the pre-exisiting scanners by running command below. Copy the UUID from the OpenVAS Default Scanner.

```{3}
server@ubuntu:~$ sudo gvmd --get-scanners
6acd0832-df90-11e4-b9d5-28d24461215b  CVE    0  CVE
08b69003-5fc2-4037-a479-93b440211c73  OpenVAS  /opt/gvm/var/run/ospd.sock  0  OpenVAS Default
```

Next run the modification command and attach the UUID to the scanner host socket.

```
server@ubuntu:~$ sudo gvmd --modify-scanner=08b69003-5fc2-4037-a479-93b440211c73 --scanner-host=/opt/gvm/var/run/ospd.sock
Scanner modified.
```

### Enable and start services

```
server@ubuntu:~$ sudo systemctl daemon-reload
```

```
server@ubuntu:~$ sudo systemctl enable ospd-openvas
server@ubuntu:~$ sudo systemctl enable gvmd
server@ubuntu:~$ sudo systemctl enable gsad
```

```
server@ubuntu:~$ sudo systemctl start ospd-openvas
server@ubuntu:~$ sudo systemctl start gvmd
server@ubuntu:~$ sudo systemctl start gsad
```

Next check that all the services are running.

```{1,5,9}
server@ubuntu:~$ sudo systemctl status gvmd
● gvmd.service - Greenbone Vulnerability Manager daemon (gvmd)
     Loaded: loaded (/etc/systemd/system/gvmd.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-08-28 20:23:46 UTC; 54min ago
server@ubuntu:~$ sudo systemctl status gsad
● gsad.service - Greenbone Security Assistant daemon (gsad)
     Loaded: loaded (/etc/systemd/system/gsad.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-08-28 20:50:09 UTC; 28min ago
server@ubuntu:~$ sudo systemctl status ospd-openvas
● ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
     Loaded: loaded (/etc/systemd/system/ospd-openvas.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-08-28 20:48:04 UTC; 31min ago
```

Login at your localhost e.g. `https://192.168.0.1:9392` with the username `admin` and the chosen password.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_login-2.png')" alt="GSA login">

Once logged in, go to the *Administration* tab and select *Feed Status*. You'll see that the update is in progress (this might take awhile). When the status changed to *current*, go to the dashboard and it will be populated with CVEs by creation time and NVTs by severity class.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">

You may also confirm the current version, go to the *Help* tab and select *About*.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_about.png')" alt="GSA about">

To run basic vulnerability scans and get hands-on approach to get started with OpenVAS check the [Running vulnerability scans](#running-vulnerability-scans) section.

## Install GVM 20.08 CentOS

[Atomicorp GVM package](https://github.com/Atomicorp/openvas) <Badge text="non-sponsored" type="default"/>

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

Finally run the GVM configuration script to setup GVM (this might take awhile).

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

Login at your localhost e.g. `https://192.168.0.1` with the username `admin` and the chosen password.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">

## Running vulnerability scans

There is several approaches on how to configure and run tasks (scans) toward your targets (hosts) in GVM. In this tutorial we will go through how to run the more basic tasks. We will do both unauthenticated scans, where we do not grant GVM SSH access to our target, and authenticated scans to help identify internal server vulnerabilites or misconfigurations.

### Unauthenticated scan

<br/>
<p align="center">
  <video width="600" controls poster="/img/icons/video.png" style="witdth:100%;height:auto;">
    <source src="/vids/openvas/unauthenticated_scan.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>

Login to the Greenbone Security Assistant (GSA) e.g. `https://192.168.0.1`. Once logged in we will add our first target. Go the the *Configuration* menu in the top navigation and select *Targets*.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_targets.png')" alt="GSA targets">

In the top left corner of the *Targets* view there's a starred document icon, click and select to create a *New Target*. Fill in the name of the target server e.g. *Ubuntu Client* and its IP address `192.168.0.2`. Leave the rest of the settings in default.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_target.png')" alt="GSA target">

Next we will create a task for unauthenticated targets (scans without SSH access). Go the *Scans* in the top menu and select *Tasks*.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_tasks.png')" alt="GSA tasks">

Click the starred document icon in the top left corner of the *Tasks* view.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_task.png')" alt="GSA task">

Select a descriptive name for your task e.g. Unauthenticated scan. In the *Scan Targets* dropdown menu select your target we created before (Ubuntu Client). Leave the default settings and click save.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_noauth_task.png')" alt="GSA noauth task">

You will then be redirected back to the *Tasks* overview and our new task will be listed in the table below the graphs. To start the scan press the start button on the right side of the table.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_noauth_scan.png')" alt="GSA noauth scan">

### Authenticated scan

First make sure that you've generated SSH keys for your GVM client user e.g. `client@ubuntu`. Add your public key to the targets authorized keys file. You may have to connect to your target host, through SSH, before running GVM vulnerability scan to add the target host to your clients machine known hosts. Once you've established a secure communication between your client and target, proceed to configure credentials in the Greenbone Security Assistant. Go to *Configuration* and select *Credentials*.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_credentials.png')" alt="GSA credentials">

Next click the starred document in the top left corner to create your new credentials. Give the credentials a desciptive name with an optional comment. In the dropdown menu *Type*, select *Username + SSH key* and disallow insecure use and auto-generation. Add the username of the target host user followed by the password and upload the private key (e.g. id_rsa). Click save.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_newcredentials.png')" alt="GSA new credentials">

Go to the *Targets* section and either edit your [unauthenticated scan](#unauthenticated-scan) or create a new target. Set the host IP address and in the dropdown menu, under the *Credentials for authentication checks*, select your newly created SSH credential.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_auth_target.png')" alt="GSA auth target">

Finally create a new task and select the target that we attached our credentials to and leave the default settings.

<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_auth_task.png')" alt="GSA auth task">

## Two-factor authentication w/ privacyIDEA

To enforce two-factor authentication for Greenbone Security Assistant with privacyIDEA and YubiKey read the [Two-factor authentication w/ privacyIDEA and YubiKey](../privacyidea/README.md) chapter.

## Install OpenVAS-9 community version <Badge text="deprecated" type="warning"/>

First add the OpenVAS PPA repository to your server.

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

## GVM behind NGINX Proxy

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

## Scheduled jobs

To keep the community feed up-to-date, first login as your GVM user.

```
server@ubuntu:~$ sudo su - gvm
```

Create the file that we will populate with the required commands.

```
gvm@ubuntu:~$ touch /opt/gvm/bin/openvas-update
```

Make the file executable.

```
gvm@ubuntu:~$ chmod a+x /opt/gvm/bin/openvas-update
```

Enter the commands that we will run daily.

```
gvm@ubuntu:~$ nano /opt/gvm/bin/openvas-update
```

```
/opt/gvm/bin/greenbone-nvt-sync
/opt/gvm/sbin/greenbone-feed-sync --type GVMD_DATA
/opt/gvm/sbin/greenbone-feed-sync --type SCAP
/opt/gvm/sbin/greenbone-feed-sync --type CERT
```

Edit the GVM users crontab and add the script we created to check for daily updates.

```
gvm@ubuntu:~$ crontab -e
```

```bash{25}
# Edit this file to introduce tasks to be run by cron.
#
# Each task to run has to be defined through a single line
# indicating with different fields when the task will be run
# and what command to run for the task
#
# To define the time you can provide concrete values for
# minute (m), hour (h), day of month (dom), month (mon),
# and day of week (dow) or use '*' in these fields (for 'any').
#
# Notice that tasks will be started based on the cron's system
# daemon's notion of time and timezones.
#
# Output of the crontab jobs (including errors) is sent through
# email to the user the crontab file belongs to (unless redirected).
#
# For example, you can run a backup of all your user accounts
# at 5 a.m every week with:
# 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/
#
# For more information see the manual pages of crontab(5) and cron(8)
#
# m h  dom mon dow   command

0 0 * * * /opt/gvm/bin/openvas-update
```

## Troubleshooting

If you encounter any issue or having questions regarding Greenbone Vulnerability Manager, I recommend using their helpful [community forum](https://community.greenbone.net/).

[Questions](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), [comments](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), or [problems](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) regarding this service? Create an issue [here](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) or contact [webmaster@libellux.com](mailto:webmaster@libellux.com).

### SEC_ERROR_INADEQUATE_KEY_USAGE

If receiving `SEC_ERROR_INADEQUATE_KEY_USAGE` and the browser blocks access to the local GVM server, proceed with removing the certificate. For example, in Firefox go to `about:preferences#privacy` and the certificate section. Select Show certificates, click the Servers tab and remove the certificates found under GVM Users.

### Failed to find interpreter for Python 3.7

If receiving `RuntimeError: failed to find interpreter for Builtin discover of python_spec='python3.7'` make sure you've followed the instructions to install the required 3.7 packages.

```
server@ubuntu:~$ sudo add-apt-repository ppa:deadsnakes/ppa
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install python3.7 python3.7-dev
```

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### The Greenbone Security Manager

The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.

[Greenbone Security Manager](https://www.greenbone.net/en/product-comparison/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
