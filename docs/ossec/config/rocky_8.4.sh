#!/bin/bash
#
# Libellux: Up & Running
# OSSEC 3.6.0 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Desc: Pre-installation guide test for OSSEC 3.6.0 on Rocky 8.4 (Green Obsidian)
# Latest update: 2021-09-18
#

# Server installation

# Install dependencies
sudo yum -y update && \
sudo yum -y upgrade && \
sudo yum install -y make gcc && \
sudo yum install -y libevent-devel openssl-devel zlib-devel pcre2-devel jq

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
sudo yum -y update && \
sudo yum -y upgrade && \
sudo yum install -y make gcc && \
sudo yum install -y libevent-devel openssl-devel zlib-devel pcre2-devel

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
