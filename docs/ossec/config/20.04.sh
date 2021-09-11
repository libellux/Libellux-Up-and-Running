#!/bin/bash
#
# Libellux: Up & Running
# OSSEC 3.6.0 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Desc: Pre-installation guide test for OSSEC 3.6.0 on Ubuntu 20.04
# Latest update: 2021-09-11
#

# Install dependencies
sudo apt-get update && \
sudo apt-get -y uppgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y make zlib1g-dev libpcre2-dev libevent-dev libssl-dev jq

# Download and verify file
wget https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc && \
gpg --keyid-format long --list-options show-keyring ossec-hids-3.6.0.tar.gz.asc