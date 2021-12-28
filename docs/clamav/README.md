---
lang: en-US
title: ClamAV Antivirus Server
description: ClamAV is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats.
---

# ClamAV Antivirus Server <Badge text="Rev 3" type="tip"/>

ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.

[ClamAV website](https://www.clamav.net/) [Source code](https://www.clamav.net/downloads) [Offical docs](https://docs.clamav.net/)

Setup and configuration have been tested on following OS with version:

* Ubuntu- 18.04, 20.04 (Focal Fossa), Debian 11 (bullseye), Rocky 8 (Green Obsidian), Windows 10, Windows Server 2019
* ClamAV- 0.102.4, 0.104.0, 0.104.1

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

## Configuration files

* [Debian 11, ClamAV 0.104.1](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/debian_.104.1.sh)
* [Rocky 8, ClamAV 0.104.1](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/rocky_0.104.1.sh)

## Prerequisites

* `net-tools` (optional)

::: details Dependencies for Debian 11
```:no-line-numbers
gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libmilter-dev libjson-c5 libjson-c-dev_0.15-2
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
```
:::

::: details Dependencies for Rocky 8
```:no-line-numbers
gcc gcc-c++ cmake make python3 python3-pip valgrind
bzip2-devel check-devel libcurl-devel libxml2-devel
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
```
:::

## Install ClamAV from source

In this tutorial we'll install the ClamAV Antivirus Server (`192.168.0.1`) from source as a stand-alone server with Debian 11 or Rocky 8. We'll be using the **multiscan** option so the more cores the faster your scans will perform. The clients (`192.168.0.2`, `192.168.0.3`) will not use the regular `clamavscan` but rather the `clamdscan` and listen to the ClamAV Antivirus Server's TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the stand-alone server. The clients wont be built from source but rather use already available repository packages (Ubuntu 20.04 and Windows 10).

::: tip
For Rocky 8 install Extra Packages for Enterprise Linux (EPEL) and enable PowerTools.
:::

:::: code-group
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo yum -y install epel-release && \
sudo yum -y install dnf-plugins-core && \
sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm && \
sudo yum config-manager --set-enabled powertools
```
:::
::::

Once you've installed EPEL and enabled PowerTools (Rocky only) continue to install ClamAV dependencies.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind \
check libbz2-dev libcurl4-openssl-dev libmilter-dev \
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo yum -y install gcc gcc-c++ cmake make python3 python3-pip valgrind \
bzip2-devel check-devel libcurl-devel libxml2-devel \
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
```
:::
::::

For Debian 11 download and install `libjson-c5` and `libjson-c-dev` packages.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb && \
wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb && \
sudo dpkg -i libjson-c5_0.15-2_amd64.deb && sudo dpkg -i libjson-c-dev_0.15-2_amd64.deb
```
:::
::::

Create ClamAV service group and user.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
```
:::
::::

### Import ClamAV signing key

::: tip
You can find the public ClamAV key [here](https://www.clamav.net/downloads) under Talos PGP Public Key.
:::

Create a new .asc file, paste the public key and save.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ touch clamav.asc && nano clamav.asc
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ touch clamav.asc && nano clamav.asc
```
:::
::::

Once you've saved the `clamav.asc` file proceed to import the key.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ gpg --import clamav.asc
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ gpg --import clamav.asc
```
:::
::::

You should see that the public key *Talos from Cisco Systems Inc.* has been imported.

```shell-session:no-line-numbers{1}
gpg: key 609B024F2B3EDD07: public key "Talos (Talos, Cisco Systems Inc.) <research@sourcefire.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
```

Now lets edit the key.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ gpg --edit-key 609B024F2B3EDD07
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ gpg --edit-key 609B024F2B3EDD07
```
:::
::::

When you get prompted type *trust* and select option 5 (I trust ultimately).

```shell-session:no-line-numbers{12,30,42}
gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

pub  rsa4096/609B024F2B3EDD07
     created: 2021-03-30  expires: 2023-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: 2021-03-30  expires: 2023-03-30  usage: E
[ unknown] (1). Talos (Talos, Cisco Systems Inc.) <research@sourcefire.com>

gpg> trust
pub  rsa4096/609B024F2B3EDD07
     created: 2021-03-30  expires: 2023-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: 2021-03-30  expires: 2023-03-30  usage: E
[ unknown] (1). Talos (Talos, Cisco Systems Inc.) <research@sourcefire.com>

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

pub  rsa4096/609B024F2B3EDD07
     created: 2021-03-30  expires: 2023-03-30  usage: SC
     trust: ultimate      validity: unknown
sub  rsa4096/73966F3B446077EC
     created: 2021-03-30  expires: 2023-03-30  usage: E
[ unknown] (1). Talos (Talos, Cisco Systems Inc.) <research@sourcefire.com>
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg> quit
```

### Build ClamAV server

Before you build ClamAV download both the source along with the signature to verify its validity.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz && \
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig && \
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz && \
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig && \
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
```
:::
::::

The output should say its a good signature from Cisco.

```shell-session:no-line-numbers{3}
gpg: Signature made Wed 01 Sep 2021 05:52:12 PM UTC
gpg:                using RSA key 609B024F2B3EDD07
gpg: Good signature from "Talos (Talos, Cisco Systems Inc.) <research@sourcefire.com>" [ultimate]
```

Proceed to extract and build.

::: warning
This may take a while.
:::

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ tar -xvzf clamav-0.104.1.tar.gz && \
cd clamav-0.104.1/ && \
mkdir -p build && cd build && \
cmake .. \
  -D CMAKE_INSTALL_PREFIX=/usr \
  -D CMAKE_INSTALL_LIBDIR=lib \
  -D APP_CONFIG_DIRECTORY=/etc/clamav \
  -D DATABASE_DIRECTORY=/var/lib/clamav \
  -D ENABLE_JSON_SHARED=OFF && \
cmake --build . && \
ctest
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ tar -xvzf clamav-0.104.1.tar.gz && \
cd clamav-0.104.1/ && \
mkdir -p build && cd build && \
cmake .. \
  -D CMAKE_INSTALL_PREFIX=/usr \
  -D CMAKE_INSTALL_LIBDIR=lib \
  -D APP_CONFIG_DIRECTORY=/etc/clamav \
  -D DATABASE_DIRECTORY=/var/lib/clamav \
  -D ENABLE_JSON_SHARED=ON && \
cmake --build . && \
ctest
```
:::
::::

The `ctest` should output the following information.

```shell-session:no-line-numbers{23}
Test project ~/clamav-0.104.1/build
      Start  1: libclamav
 1/10 Test  #1: libclamav ........................   Passed   14.78 sec
      Start  2: libclamav_valgrind
 2/10 Test  #2: libclamav_valgrind ...............   Passed  138.25 sec
      Start  3: clamscan
 3/10 Test  #3: clamscan .........................   Passed    4.21 sec
      Start  4: clamscan_valgrind
 4/10 Test  #4: clamscan_valgrind ................   Passed   63.91 sec
      Start  5: clamd
 5/10 Test  #5: clamd ............................   Passed   15.90 sec
      Start  6: clamd_valgrind
 6/10 Test  #6: clamd_valgrind ...................   Passed   63.48 sec
      Start  7: freshclam
 7/10 Test  #7: freshclam ........................   Passed    6.80 sec
      Start  8: freshclam_valgrind
 8/10 Test  #8: freshclam_valgrind ...............   Passed   37.96 sec
      Start  9: sigtool
 9/10 Test  #9: sigtool ..........................   Passed    0.30 sec
      Start 10: sigtool_valgrind
10/10 Test #10: sigtool_valgrind .................   Passed    1.42 sec

100% tests passed, 0 tests failed out of 10

Total Test time (real) = 347.01 sec
```

Once the test successfully passed proceed to build and install ClamAV 0.104.1.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ sudo cmake --build . --target install
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo cmake --build . --target install
```
:::
::::

## Server configuration

When the installation is complete there's example configuration files created by default e.g. `/etc/clamav/clamd.conf.sample`. You may read through the sample configuration files to get a better understanding on which options you prefer to enable. Otherwise feel free to use the beneath options and creation of the ClamAV daemon configuration file.

::: details ClamAV daemon configuration file
:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers{7}
server@debian:~$ sudo bash -c 'cat << EOF > /etc/clamav/clamd.conf
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket true
LocalSocketGroup clamav
LocalSocketMode 666
User clamav
TCPSocket 3310
ScanMail true
ScanArchive true
ArchiveBlockEncrypted false
MaxDirectoryRecursion 15
FollowDirectorySymlinks false
FollowFileSymlinks false
ReadTimeout 180
MaxThreads 12
MaxConnectionQueueLength 15
LogSyslog false
LogRotate true
LogFacility LOG_LOCAL6
LogClean false
LogVerbose false
PreludeEnable no
PreludeAnalyzerName ClamAV
DatabaseDirectory /var/lib/clamav
OfficialDatabaseOnly false
SelfCheck 3600
Foreground false
Debug false
ScanPE true
MaxEmbeddedPE 10M
ScanOLE2 true
ScanPDF true
ScanHTML true
MaxHTMLNormalize 10M
MaxHTMLNoTags 2M
MaxScriptNormalize 5M
MaxZipTypeRcg 1M
ScanSWF true
ExitOnOOM false
LeaveTemporaryFiles false
AlgorithmicDetection true
ScanELF true
IdleTimeout 30
CrossFilesystems true
PhishingSignatures true
PhishingScanURLs true
PhishingAlwaysBlockSSLMismatch false
PhishingAlwaysBlockCloak false
PartitionIntersection false
DetectPUA false
ScanPartialMessages false
HeuristicScanPrecedence false
StructuredDataDetection false
CommandReadTimeout 30
SendBufTimeout 200
MaxQueue 100
ExtendedDetectionInfo true
OLE2BlockMacros false
AllowAllMatchScan true
ForceToDisk false
DisableCertCheck false
DisableCache false
MaxScanTime 120000
MaxScanSize 100M
MaxFileSize 25M
MaxRecursion 16
MaxFiles 10000
MaxPartitions 50
MaxIconsPE 100
PCREMatchLimit 10000
PCRERecMatchLimit 5000
PCREMaxFileSize 25M
ScanXMLDOCS true
ScanHWP3 true
MaxRecHWP3 16
StreamMaxLength 25M
LogFile /var/log/clamav/clamav.log
LogTime true
LogFileUnlock false
LogFileMaxSize 0
Bytecode true
BytecodeSecurity TrustSigned
BytecodeTimeout 60000
OnAccessMaxFileSize 5M
EOF'
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers{7}
server@rocky:~$ sudo bash -c 'cat << EOF > /etc/clamav/clamd.conf
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket true
LocalSocketGroup clamav
LocalSocketMode 666
User clamav
TCPSocket 3310
ScanMail true
ScanArchive true
ArchiveBlockEncrypted false
MaxDirectoryRecursion 15
FollowDirectorySymlinks false
FollowFileSymlinks false
ReadTimeout 180
MaxThreads 12
MaxConnectionQueueLength 15
LogSyslog false
LogRotate true
LogFacility LOG_LOCAL6
LogClean false
LogVerbose false
PreludeEnable no
PreludeAnalyzerName ClamAV
DatabaseDirectory /var/lib/clamav
OfficialDatabaseOnly false
SelfCheck 3600
Foreground false
Debug false
ScanPE true
MaxEmbeddedPE 10M
ScanOLE2 true
ScanPDF true
ScanHTML true
MaxHTMLNormalize 10M
MaxHTMLNoTags 2M
MaxScriptNormalize 5M
MaxZipTypeRcg 1M
ScanSWF true
ExitOnOOM false
LeaveTemporaryFiles false
AlgorithmicDetection true
ScanELF true
IdleTimeout 30
CrossFilesystems true
PhishingSignatures true
PhishingScanURLs true
PhishingAlwaysBlockSSLMismatch false
PhishingAlwaysBlockCloak false
PartitionIntersection false
DetectPUA false
ScanPartialMessages false
HeuristicScanPrecedence false
StructuredDataDetection false
CommandReadTimeout 30
SendBufTimeout 200
MaxQueue 100
ExtendedDetectionInfo true
OLE2BlockMacros false
AllowAllMatchScan true
ForceToDisk false
DisableCertCheck false
DisableCache false
MaxScanTime 120000
MaxScanSize 100M
MaxFileSize 25M
MaxRecursion 16
MaxFiles 10000
MaxPartitions 50
MaxIconsPE 100
PCREMatchLimit 10000
PCRERecMatchLimit 5000
PCREMaxFileSize 25M
ScanXMLDOCS true
ScanHWP3 true
MaxRecHWP3 16
StreamMaxLength 25M
LogFile /var/log/clamav/clamav.log
LogTime true
LogFileUnlock false
LogFileMaxSize 0
Bytecode true
BytecodeSecurity TrustSigned
BytecodeTimeout 60000
OnAccessMaxFileSize 5M
EOF'
```
:::
::::
:::

Same with ClamAV freshclam there's a sample configuration file created at `/etc/clamav/freshclam.conf.sample`. You may also use the following configuration file for freshclam to keep your signature database up-to-date.

::: details ClamAV freshclam configuration file
:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ sudo bash -c 'cat << EOF > /etc/clamav/freshclam.conf
DatabaseOwner clamav
UpdateLogFile /var/log/clamav/freshclam.log
LogVerbose false
LogSyslog false
LogFacility LOG_LOCAL6
LogFileMaxSize 0
LogRotate true
LogTime true
Foreground false
Debug false
MaxAttempts 5
DatabaseDirectory /var/lib/clamav
DNSDatabaseInfo current.cvd.clamav.net
ConnectTimeout 30
ReceiveTimeout 0
TestDatabases yes
ScriptedUpdates yes
CompressLocalDatabase no
Bytecode true
NotifyClamd /etc/clamav/clamd.conf
Checks 24
DatabaseMirror db.local.clamav.net
DatabaseMirror database.clamav.net
EOF'
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo bash -c 'cat << EOF > /etc/clamav/freshclam.conf
DatabaseOwner clamav
UpdateLogFile /var/log/clamav/freshclam.log
LogVerbose false
LogSyslog false
LogFacility LOG_LOCAL6
LogFileMaxSize 0
LogRotate true
LogTime true
Foreground false
Debug false
MaxAttempts 5
DatabaseDirectory /var/lib/clamav
DNSDatabaseInfo current.cvd.clamav.net
ConnectTimeout 30
ReceiveTimeout 0
TestDatabases yes
ScriptedUpdates yes
CompressLocalDatabase no
Bytecode true
NotifyClamd /etc/clamav/clamd.conf
Checks 24
DatabaseMirror db.local.clamav.net
DatabaseMirror database.clamav.net
EOF'
```
:::
::::
:::

Before we'll create the system files for both the ClamAV daemon and freshclam create the required directories and adjust the owner permissions.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ sudo mkdir /var/log/clamav/ /var/lib/clamav /var/run/clamav/ && \
sudo chown clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo mkdir /var/log/clamav/ /var/lib/clamav /var/run/clamav/ && \
sudo chown clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
```
:::
::::

Next create the service file for freshclam.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
# If user wants it run from cron, dont start the daemon.
ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
# If user wants it run from cron, dont start the daemon.
ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'
```
:::
::::

Proceed to create the ClamAV daemon service file.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
server@debian:~$ sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
# Check for database existence
ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
# Reload the database
ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
# Check for database existence
ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
# Reload the database
ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'
```
:::
::::

To enable the created startup scripts, reload the system control daemon.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo systemctl daemon-reload
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo systemctl daemon-reload
```
:::
::::

Once you've reloaded the daemon proceed to enable each of the services.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo systemctl enable clamav-freshclam.service
server@ubuntu:~$ sudo systemctl enable clamav-daemon.service
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo systemctl enable clamav-freshclam.service
server@rocky:~$ sudo systemctl enable clamav-daemon.service
```
:::
::::

Next start each service.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo systemctl start clamav-freshclam.service
server@ubuntu:~$ sudo systemctl start clamav-daemon.service
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo systemctl start clamav-freshclam.service
server@rocky:~$ sudo systemctl start clamav-daemon.service
```
:::
::::

To check that your ClamAV daemon is listening to both the local unix socket and the TCP port 3310 run the following command.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers{4}
server@ubuntu:~$ netstat -lnp | grep -E "(clam|3310)"
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.socket
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers{4}
server@rocky:~$ netstat -lnp | grep -E "(clam|3310)"
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     320610   -                    /var/run/clamav/clamd.socket
```
:::
::::

## Install from repository

In this tutorial we will install the ClamAV Antivirus Server (the clamav-daemon `192.168.0.1`) as a own server/virtual machine. We'll also use the multiscan option, so the more cores the faster your scans will perform. The clients (`192.168.0.2`, `192.168.0.3`) will not use the regular `clamavscan` but rather the `clamdscan` and listen to the ClamAV Antivirus Server's TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the master server.

## ClamAV server

First download the ClamAV scanner and the ClamAV daemon.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo apt-get install clamav clamav-daemon
```
:::
::::

Proceed to stop freshclam the automatic database update tool for ClamAV.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo systemctl stop clamav-freshclam
```
:::
::::

Next run freshclam to update to the latest definition database.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo freshclam
```
:::
::::

Once you've ran the freshclam command you can check the log `/var/log/clamav/freshclam.log` for the current status and then start freshclam again.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers{1,5}
server@ubuntu:~$ cat /var/log/clamav/freshclam.log
Sat Apr 10 17:51:37 2021 -> daily.cvd database is up to date (version: 26136, sigs: 3969743, f-level: 63, builder: raynman)
Sat Apr 10 17:51:37 2021 -> main.cvd database is up to date (version: 59, sigs: 4564902, f-level: 60, builder: sigmgr)
Sat Apr 10 17:51:37 2021 -> bytecode.cvd database is up to date (version: 333, sigs: 92, f-level: 63, builder: awillia2)
server@ubuntu:~$ sudo systemctl start clamav-freshclam
```
:::
::::

Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /etc/clamav/clamd.conf
```
:::
::::

```bash{11}
#Automatically Generated by clamav-daemon postinst
#To reconfigure clamd run #dpkg-reconfigure clamav-daemon
#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket yes
LocalSocketGroup clamav
LocalSocketMode 666
# TemporaryDirectory is not set to its default /tmp here to make overriding
# the default with environment variables TMPDIR/TMP/TEMP possible
User clamav
TCPSocket 3310
```

Restart ClamAV to apply the new changes.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo systemctl restart clamav-daemon.service
```
:::
::::

To confirm that ClamAV listen to TCP port 3310 run the command below (requires `net-tools`).

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers{4}
server@ubuntu:~$ netstat -lnp | grep -E "(clam|3310)"
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.ctl
```
:::
::::

Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the [Firewall settings](#firewall-settings) section for more information.

### Keep virus definitions up-to-date

To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /etc/clamav/freshclam.conf
```
:::
::::

```bash{2}
# Check for new database 24 times a day
Checks 24
```

You can use the `clamdtop` command-line tool when you've installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ clamdtop

  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ `/ __ `__ \/ __  / __/ __ \/ __ \
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
\___/_/\__,_/_/ /_/ /_/\__,_/\__/\____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
```
:::
::::

## Ubuntu client

Install ClamAV on Ubuntu 20.04.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo apt-get install clamav clamav-daemon
```
:::
::::

Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well. 

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo systemctl stop clamav-daemon.service
client@ubuntu:~$ sudo systemctl stop clamav-freshclam.service
client@ubuntu:~$ sudo systemctl disable clamav-daemon.service
client@ubuntu:~$ sudo systemctl disable clamav-freshclam.service
```
:::
::::

Continue to configure the `clamdscan` which share configuration file with the ClamAV daemon.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo nano /etc/clamav/clamd.conf
```
:::
::::

Comment the `LocalSocket /var/run/clamav/clamd.ctl` line and add the `TCPSocket 3310` along with the server `TCPAddr`.

```bash{4,11,12}
#Automatically Generated by clamav-daemon postinst
#To reconfigure clamd run #dpkg-reconfigure clamav-daemon
#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details
#LocalSocket /var/run/clamav/clamd.ctl
FixStaleSocket true
LocalSocketGroup clamav
LocalSocketMode 666
# TemporaryDirectory is not set to its default /tmp here to make overriding
# the default with environment variables TMPDIR/TMP/TEMP possible
User clamav
TCPSocket 3310
TCPAddr 192.168.0.1
```

When running a scan use the `multiscan` option to enable multihread reading. You can also set it to `quiet` if you're going to use the `log` option. You can also create a `file list` for all the directories to scan.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo clamdscan --multiscan --quiet --file-list= --log=
```
:::
::::

## Windows client

First download the [ClamAV Windows Installer](http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe) (version 0.102.4). Right-click the executable file `ClamAV-0.102.4.exe` and select `Run as Administrator`.

<img class="zoom-custom-imgs" :src="('/img/clamav/win10client1.png')" alt="Windows 10 setup 1">

Select destination location.

<img class="zoom-custom-imgs" :src="('/img/clamav/win10client2.png')" alt="Windows 10 setup 2">

Proceed to click the `Install` button.

<img class="zoom-custom-imgs" :src="('/img/clamav/win10client3.png')" alt="Windows 10 setup 3">

Once the installation is complete click the `Finish` button.

<img class="zoom-custom-imgs" :src="('/img/clamav/win10client4.png')" alt="Windows 10 setup 4">

Run PowerShell as administrator and make sure you're in the correct path `C:\WINDOWS\system32`. Navigate to the ClamAV directory by entering `cd 'C:\Program Files\ClamAV\`.

<img class="zoom-custom-imgs" :src="('/img/clamav/win10client5.png')" alt="Windows 10 setup 5">

Now copy the ClamAV daeomon configuration and rename it to `clamd.conf` and open the file in WordPad.

:::: code-group
::: code-group-item Windows
```powershell:no-line-numbers
client@windows:~PS$ copy .\conf_examples\clamd.conf.sample .\clamd.conf
client@windows:~PS$ write.exe .\clamd.conf
```
:::
::::

<img class="zoom-custom-imgs" :src="('/img/clamav/win10client6.png')" alt="Windows 10 setup 6">

Comment the `Example` line and add the `TCPSocket` along with the server `TCPAddr` and save.

```bash{7,15,23}
##
## Example config file for the Clam AV daemon
## Please read the clamd.conf(5) manual before editing this file.
##

# Comment or remove the line below.
#Example

# The daemon on Windows only supports unsecured TCP sockets.
# Due to security reasons make sure that your IP & port is not
# exposed to the open internet.

# TCP port address.
# Default: no
TCPSocket 3310

# TCP address.
# By default we bind to INADDR_ANY, probably not wise.
# Enable the following to provide some degree of protection
# from the outside world. This option can be specified multiple
# times if you want to listen on multiple IPs. IPv6 is now supported.
# Default: no
TCPAddr 192.168.0.1
```

You may fast test the configuration running a scan in the current directory.

<img class="zoom-custom-imgs" :src="('/img/clamav/win10client7.png')" alt="Windows 10 setup 7">

Running a more complete scan, like during the Ubuntu set up, use the `multiscan` option to enable multithread reading. Set the output to `quiet` in case you will use the `log` option. As priorly mentioned you may also define a `file list` of all the directories you wish to include in the scan.

:::: code-group
::: code-group-item Windows
```powershell:no-line-numbers
client@windows:~PS$ .\clamdscan.exe  --multiscan --quiet --file-list= --log=
```
:::
::::

## Firewall settings

The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW [here](https://help.ubuntu.com/community/UFW).

::: details UFW Settings
```shell-session:no-line-numbers
server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
```
:::

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo ufw allow proto tcp from 192.168.0.2 to any port 3310 comment "ClamAV client 1"
server@ubuntu:~$ sudo ufw allow proto tcp from 192.168.0.3 to any port 3310 comment "ClamAV client 2"
```
:::
::::

If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo ufw allow proto tcp from 192.168.0.0/24 to any port 3310 comment "ClamAV clients"
```
:::
::::

## Troubleshooting

In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at [ClamAV users](https://lists.clamav.net/mailman/listinfo/clamav-users).

## Enterprise solutions <Badge text="non-sponsored" type="tip"/>

### Atomic Protector

Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.

[Atomic Protector](https://atomicorp.com/atomic-protector/)
