#!/bin/bash
#
# Libellux: Up and Running
# ClamAV 0.104.1 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Credits: https://docs.clamav.net/manual/Installing/Installing-from-source-Unix.html
# Description: Pre-installation test for ClamAV 0.104.1 on Rocky 8 (Green Obsidian)
# Last updated: 2021-11-20
#

# Install dependencies
sudo yum -y install epel-release && \
sudo yum -y install dnf-plugins-core && \
sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm && \
sudo yum config-manager --set-enabled powertools

sudo yum -y install gcc gcc-c++ cmake make python3 python3-pip valgrind \
bzip2-devel check-devel libcurl-devel libxml2-devel \
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel

# add ClamAV user
sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav

# get ClamAV public key https://www.clamav.net/downloads
touch clamav.asc && nano clamav.asc
gpg --import clamav.asc

# edit gpg key
gpg --edit-key 609B024F2B3EDD07

# Verify
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz && \
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig && \
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz

# Build
tar -xvzf clamav-0.104.1.tar.gz && \
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

sudo cmake --build . --target install
