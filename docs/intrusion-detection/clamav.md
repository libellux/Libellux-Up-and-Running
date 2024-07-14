---
title: ClamAV Anti-virus Engine
description: ClamAV is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats.
---

# ClamAV Antivirus Server <Badge text="Rev 6" type="tip"/>

ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.

<a href='https://ko-fi.com/B0B31BJU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Install ClamAV from source

Install ClamAV Anti-virus Engine 1.0.5 from source as a centralized server to read data from ClamAV clients.

::: info
Supported distributions:

* Ubuntu 22.04 (Jammy Jellyfish)
* Debian 12 (Bookworm)
* Rocky Linux 9 (Blue Onyx)
:::

::: code-group
```shellsession [Ubuntu/Debian]
sudo apt-get update --assume-yes
```
```shellsession [Rocky Linux]
sudo dnf update --assumeyes
sudo dnf install --assumeyes dnf-utils
sudo dnf install --assumeyes epel-release
sudo dnf install --assumeyes epel-next-release
sudo dnf upgrade --assumeyes
sudo yum config-manager --set-enabled powertools
```
:::

Once you've installed EPEL and enabled PowerTools (Rocky only) continue to install ClamAV dependencies.

::: code-group
```shellsession [Ubuntu]
sudo apt-get install --assume-yes \
gcc \
make \
pkg-config \
python3 \
python3-pip \
python3-pytest \
valgrind \
cmake \
check \
libbz2-dev \
libcurl4-openssl-dev \
libjson-c-dev \
libmilter-dev \
libncurses5-dev \
libpcre2-dev \
libssl-dev \
libxml2-dev \
zlib1g-dev \
rust-all
```
:::

::: code-group
```shellsession [Ubuntu]
sudo apt-get install --assume-yes \
build-essential \
make \
pkg-config \
python3 \
python3-pip \
python3-pytest \
valgrind \
check \
libbz2-dev \
libcurl4-openssl-dev \
libjson-c-dev \
libmilter-dev \
libncurses5-dev \
libpcre2-dev \
libssl-dev \
libxml2-dev \
zlib1g-dev \
cmake \
rust-all \
cargo
```
```shellsession [Debian]
sudo apt-get install -y gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind \
check libbz2-dev libcurl4-openssl-dev libmilter-dev \
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
```
```shellsession [Rocky Linux]
sudo yum -y install gcc gcc-c++ cmake make python3 python3-pip valgrind \
bzip2-devel check-devel libcurl-devel libxml2-devel \
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
```
:::

::: warning
Only install libjson-c5 and libjson-c-dev for Debian 11 when compiling ClamAV 0.104.1.
:::

For ClamAV 0.104.1 and Debian 11 proceed to install packages `libjson-c5` and `libjson-c-dev`.

:::: code-group
::: code-group-item Debian
```shell-session:no-line-numbers
wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb && \
wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb && \
sudo dpkg -i libjson-c5_0.15-2_amd64.deb && sudo dpkg -i libjson-c-dev_0.15-2_amd64.deb
```
:::
::::

## Create user and group

Create ClamAV service group and user.

::: code-group
```shellsession [Ubuntu/Debian]
sudo groupadd clamav
sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
```
```shellsession [Rocky Linux]
sudo groupadd clamav
sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
```
:::

## Import ClamAV signing key

Download and import the [Talos PGP public key](http://www.clamav.net/downloads#collapsePGP) so we later can verify the signature of our download.

::: code-group
```shellsession [Ubuntu/Debian]
gpg --import talos-pgp.asc
```
:::

## Build ClamAV server

Before you build ClamAV download both the source along with the signature to verify its validity.

::: code-group
```shellsession [Ubuntu/Debian]
wget https://www.clamav.net/downloads/production/clamav-1.0.5.tar.gz
wget https://www.clamav.net/downloads/production/clamav-1.0.5.tar.gz.sig
gpg --verify clamav-1.0.5.tar.gz.sig
```
:::

The output should say its a good signature from Talos.

```shellsession
gpg: assuming signed data in 'clamav-1.0.5.tar.gz'
gpg: Signature made Wed 07 Feb 2024 02:33:08 PM UTC
gpg:                using RSA key CCE0DFD21EC1A9BF
gpg: Good signature from "Talos (Talos, Cisco Systems Inc.) <research@sourcefire.com>" [unknown] // [!code focus]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C71C 5DF5 E1E7 D51C CB8B  9D5C CCE0 DFD2 1EC1 A9BF
```

Proceed to extract, test our build and install ClamAV.

::: info
This may take a while.
:::

::: code-group
```shellsession [Ubuntu/Debian]
tar -xvzf clamav-1.0.5.tar.gz
cd clamav-1.0.5
mkdir -p build
cd build
cmake .. \
  -D CMAKE_INSTALL_PREFIX=/usr \
  -D CMAKE_INSTALL_LIBDIR=lib \
  -D APP_CONFIG_DIRECTORY=/etc/clamav \
  -D DATABASE_DIRECTORY=/var/lib/clamav \
  -D ENABLE_JSON_SHARED=OFF
cmake --build .
ctest
sudo cmake --build . --target install
```
:::

The test.. 

```shellsession
Test project /home/toothpick/clamav-1.0.5/build
      Start  1: libclamav
 1/11 Test  #1: libclamav ........................   Passed   16.38 sec
      Start  2: libclamav_valgrind
 2/11 Test  #2: libclamav_valgrind ...............   Passed  146.36 sec
      Start  3: libclamav_rust
 3/11 Test  #3: libclamav_rust ...................   Passed   42.91 sec
      Start  4: clamscan
 4/11 Test  #4: clamscan .........................   Passed    8.22 sec
      Start  5: clamscan_valgrind
 5/11 Test  #5: clamscan_valgrind ................   Passed  251.18 sec
      Start  6: clamd
 6/11 Test  #6: clamd ............................   Passed   22.88 sec
      Start  7: clamd_valgrind
 7/11 Test  #7: clamd_valgrind ...................   Passed  105.70 sec
      Start  8: freshclam
 8/11 Test  #8: freshclam ........................   Passed   42.38 sec
      Start  9: freshclam_valgrind
 9/11 Test  #9: freshclam_valgrind ...............   Passed   73.86 sec
      Start 10: sigtool
10/11 Test #10: sigtool ..........................   Passed    1.23 sec
      Start 11: sigtool_valgrind
11/11 Test #11: sigtool_valgrind .................   Passed   22.64 sec

100% tests passed, 0 tests failed out of 11 // [!code focus]
```


## Server configuration

Once the ClamAV installation is complete, a default example configuration file is created at `/etc/clamav/clamd.conf.sample`. We suggest you read through the example to familiarize yourself with the options. Alternatively, you may use and create the configuration file below.

::: info
To enable ClamAV to operate as a centralized server and read client data, we need to enable TCP socket 3310.
:::

::: warning
When using ClamAV over TCP, the communication is not encrypted, so take precautions to mitigate any security risks.
:::

```shellsession
sudo bash -c 'cat << EOF > /etc/clamav/clamd.conf
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket true
LocalSocketGroup clamav
LocalSocketMode 666
User clamav
TCPSocket 3310 // [!code highlight]
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

## Virus signature database

To keep the ClamAV Anti-virus Engine's virus definition database up to date, we will use freshclam. By default, freshclam checks 12 times per day (every two hours) for new virus definitions. Similar to the ClamAV daemon, an example configuration file is created. Alternatively, you may create and use the configuration file provided below.

```shellsession
sudo bash -c 'cat << EOF > /etc/clamav/freshclam.conf
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
Checks 12 // [!code highlight]
DatabaseMirror db.local.clamav.net
DatabaseMirror database.clamav.net
EOF'
```

## System unit files
Before we'll create the system files for both the ClamAV daemon and freshclam create the required directories and adjust the owner permissions.


sudo mkdir /var/log/clamav/ /var/lib/clamav /var/run/clamav/ && \
sudo chown clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/

touch /var/log/freshclam.log
chmod 600 /var/log/freshclam.log
chown clamav /var/log/freshclam.log


```shellsession
sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'
```

```shellsession
sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
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

To enable the created startup scripts, reload the system control daemon.

::: code-group
```shellsession [Ubuntu/Debian]
sudo systemctl daemon-reload
sudo systemctl enable clamav-freshclam.service
sudo systemctl enable clamav-daemon.service
```
:::


Next start each service.

::: code-group
```shellsession [Ubuntu/Debian]
sudo systemctl start clamav-freshclam.service
sudo systemctl start clamav-daemon.service
```
:::

You can use the `clamdtop` command-line tool when you've installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.

::: code-group
```shellsession [Ubuntu/Debian]
clamdtop
```
:::

```shellsession
  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ `/ __ `__ \/ __  / __/ __ \/ __ \
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
\___/_/\__,_/_/ /_/ /_/\__,_/\__/\____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
```

## Linux client

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

## Troubleshooting

In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at [ClamAV users](https://lists.clamav.net/mailman/listinfo/clamav-users).

<a target="_blank" class="dark-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
<a target="_blank" class="light-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/light.png" /></a>
