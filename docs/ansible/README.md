---
lang: en-US
title: Ansible provisioning, configuration management, and application-deployment tool
description: Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code.
---

# Ansible provisioning, configuration management, and application-deployment tool <Badge text="dev" type="warning"/>

Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code.

[Ansible website](https://www.ansible.com/) [GitHub](https://github.com/ansible/ansible)

Setup and configuration have been tested on the following operating systems:

* Ubuntu 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)
* Ansible 2.9.6

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

## Configuration files

## Prerequisites

Prerequisites for Ansible.

## Install Ansible

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y ansible
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo yum -y update && \
sudo yum -y upgrade && \
sudo yum install -y ansible
```
:::
::::

## Server configuration

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /etc/ansible/hosts
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo nano /etc/ansible/hosts
```
:::
::::

:::: code-group
::: code-group-item Ubuntu
```bash:no-line-numbers
[servers]
server1 ansible_host=192.168.0.2
server2 ansible_host=192.168.0.3
server3 ansible_host=192.168.0.4

[all:vars]
ansible_python_interpreter=/usr/bin/python3
```
:::
::: code-group-item Rocky
```bash:no-line-numbers
[servers]
server1 ansible_host=192.168.0.2
server2 ansible_host=192.168.0.3
server3 ansible_host=192.168.0.4
```
:::
::::

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ ansible all -m ping -u ansible
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ ansible all -m ping -u ansible
```
:::
::::

```shell-session:no-line-numbers
Output
server1 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
server2 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
server3 | SUCCESS => {
    "changed": false, 
    "ping": "pong"
}
```

## Firewall settings

The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW [here](https://help.ubuntu.com/community/UFW).

::: details UFW Settings
```console
server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
```
:::

## Command-line
