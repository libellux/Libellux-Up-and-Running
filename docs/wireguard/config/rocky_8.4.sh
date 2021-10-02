#!/bin/bash
#
# Libellux: Up & Running
# WireGuard 1.0.2~ installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Desc: Pre-installation guide test for WireGuard 1.0.2~ on Rocky 8.4 (Green Obsidian)
# Latest update: 2021-10-02
#

# Server installation

# EPEL
sudo yum -y install epel-release && \
sudo yum -y install elrepo-release

# WireGuard
sudo yum -y install kmod-wireguard wireguard-tools
