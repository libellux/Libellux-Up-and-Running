#!/bin/bash
#
# Libellux: Up and Running
# Ansible 21.4.2 installation
# Author: Fredrik Hilmersson <fredrik@libellux.com>
# Description: Pre-installation test for Ansible <VERSION> on Ubuntu 20.04 (Focal Fossa)
# Last updated: 2021-11-06
#

# Install ansible

# Ubuntu
sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y ansible

# Rocky (move to own sh file)
sudo yum -y update && \
sudo yum -y upgrade && \
sudo yum install -y ansible

# Configure hosts
sudo nano /etc/ansible/hosts

[servers]
server1 ansible_host=192.168.0.2
server2 ansible_host=192.168.0.3
server3 ansible_host=192.168.0.4

[all:vars]
ansible_python_interpreter=/usr/bin/python3
