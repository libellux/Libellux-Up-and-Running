#!/bin/bash
#
# Libellux: Up & Running
# PSAD 2.4.6 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Desc: Pre-installation guide test for PSAD 2.4.6 on Ubuntu 20.04 (Focal Fossa)
# Latest update: 2021-09-24
#

# Server installation

# Install dependencies
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get -y install net-tools g++ && \
wget https://github.com/mrash/psad/archive/2.4.6.tar.gz && \
tar -zxvf 2.4.6.tar.gz && cd psad-2.4.6/ && \
sudo ./install.pl
