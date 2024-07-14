---
title: Ansible
---

# Ansible

Ansible is an open-source automation tool used for configuration management, application deployment, and task automation. It allows users to automate repetitive tasks such as provisioning servers, configuring software, and managing infrastructure by defining tasks, called playbooks, and executing them across multiple servers simultaneously.

<a href='https://ko-fi.com/B0B31BJU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Ansible roles

::: info
You already have ansible installed
:::

## OSSEC server

## OSSEC agent

## ClamAV

## Monit

## PSAD

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

<a target="_blank" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
