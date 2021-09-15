#!/bin/bash
#
# Libellux: Up & Running
# OSSEC 3.6.0 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Desc: Pre-installation guide test for OSSEC 3.6.0 on Ubuntu 20.04
# Latest update: 2021-09-11
#

# Server installation

# Install dependencies
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y zlib1g-dev libpcre2-dev libevent-dev libssl-dev jq

# Download certificate and verification key
wget http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc && \
wget https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc && \
gpg --import OSSEC-ARCHIVE-KEY.asc

# Download OSSEC 3.6.0 and verify the file integrity
wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz && \
gpg --verify ossec-hids-3.6.0.tar.gz.asc 3.6.0.tar.gz

# Extract and install OSSEC with PCRE2 support
tar -zxvf 3.6.0.tar.gz && cd ossec-hids-3.6.0/ && \
wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz && \
tar -zxvf pcre2-10.32.tar.gz -C src/external/ && \
sudo PCRE2_SYSTEM=yes ./install.sh

# Agent installation

# Install dependencies
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y zlib1g-dev libpcre2-dev libevent-dev libssl-dev

# Download certificate and verification key
client@ubuntu:~$ wget http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc && \
wget https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc && \
gpg --import OSSEC-ARCHIVE-KEY.asc

# Download OSSEC 3.6.0 and verify the file integrity
client@ubuntu:~$ wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz && \
gpg --verify ossec-hids-3.6.0.tar.gz.asc 3.6.0.tar.gz

# Extract and install OSSEC with PCRE2 support
tar -zxvf 3.6.0.tar.gz && cd ossec-hids-3.6.0/ && \
wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz && \
tar -zxvf pcre2-10.32.tar.gz -C src/external/ && \
sudo PCRE2_SYSTEM=yes ./install.sh
