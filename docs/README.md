---
title: Introduction
meta:
  - name: description
    content: Open-source software documentation and configuration
noGlobalSocialShare: true
---

# Introduction

Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called [Zero Trust Network](https://www.cloudflare.com/learning/security/glossary/what-is-zero-trust/) and managing it using an open-source software tool for provisioning and configuration management to automate and speed up productivity.

::: warning NOTE
In development
:::

[![StyleCI](https://github.styleci.io/repos/245666033/shield)](https://github.styleci.io/repos/245666033/shield)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c55fd474-8155-440c-971b-a9ccbaf2133c/deploy-status)](https://app.netlify.com/sites/nervous-jennings-d80639/deploys)

::: tip DISCLAIMER
It is understood that this documentation, and any configurations may contain errors and are provided for education purposes only. The documentation, and any configurations are provided "as is" without warrany of any kind, whether express, implied, statutory, or otherwise.
:::

## Credits

| Role | Names |
|------|-------|
| Lead Authors: | Fredrik Hilmersson [@libellux](https://github.com/libellux) |
| Contributors: | |
| Reviewers: | Adam Hilmersson [@cnsta](https://github.com/cnsta) |

## Environments

* Ubuntu 20.04 LTS (Focal Fossa)
* Ubuntu 18.04 LTS (Bionic Beaver)
* Ubuntu 16.04 LTS (Xenial Xerus)
* VMware ESXi 6.7.0

::: details Conventions
| Type | Convention | Description |
|--------|----------|-------------|
| Environment | server@ubuntu | Suffix determine operating system |
| Server CLI | server@centos | Commands executed from server command-line |
| Client CLI | client@ubuntu | Commands executed from client command-line |
| Server IP | 192.168.0.1 | Server IP address |
| Client IP | 192.168.0.2 | Client IP address |
:::

## Table of contents

#### PART 1: ZERO TRUST NETWORK

* [1.0: WireGuard Secure VPN Tunnel](./wireguard/README.md)
* 1.1: privacyIDEA authentication server <Badge text="TBA" type="warning"/>

#### PART 2: INTRUSTION DETECTION AND PREVENTION

* [2.0: OSSEC Host Intrusion Detection System](./ossec/README.md)
* [2.1: PSAD Intrusion Detection with Log Analysis](./psad/README.md)
* [2.2: OpenVAS Open Vulnerability Assessment Scanner](./openvas/README.md)

#### PART 3: MONITORING AND MANAGEMENT

* 3.0: OpenLDAP Lightweight Directory Access <Badge text="TBA" type="warning"/>
* [3.1: M/Monit System Monitoring](./mmonit/README.md)
* [3.2: Performance Co-Pilot Grafana](./pcp/README.md)
* [3.3: Rsyslog Log Processing](./rsyslog/README.md)
* [3.4: Graylog Centralized Log Management](./graylog/README.md)

#### PART 4: MISCELLANEOUS

* [4.0: Jira Software](./jira/README.md)

## Feedback

[Questions](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), [comments](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), or [problems](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) regarding this service? Create an issue [here](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) or contact [webmaster@libellux.com](mailto:webmaster@libellux.com).

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

## Road map

To follow the process and prioritization check out the project [road map](https://github.com/libellux/Libellux-Up-and-Running/projects/1). Feel free to create a [feature request](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) if there's any documentation or software you would like us to cover.

## Recommended reading <Badge text="affiliate links" type="warning"/>

* [UNIX and Linux System Administration Handbook (5th Edition), Evi Nemeth, 2017](https://amzn.to/3gwFzH6)
* [Securing DevOps-Safe services in the Cloud, Julien Vehent, 2017](https://amzn.to/3i7At4o)
* [Instant OSSEC Host-based Intrusion Detection, Lhotsky Brad, 2013](https://amzn.to/33sOjdF)
* [OSSEC Host-Based Intrusion Detection Guide, Rory Bray, 2008](https://amzn.to/2XuL9lM)
* [Systems Performance: Enterprise and the Cloud, Gregg Brendan, 2013](https://amzn.to/33sX733)
* [Mastering Ansible: Effectively automate configuration management and deployment challenges with Ansible, Freeman James & Keating Jesse, 2019](https://amzn.to/33WoaEk)
* [Ansible Up and Running (2nd Edition), Hochstein Lorin & Moser Rene, 2017](https://amzn.to/3g820RQ)
* [Jira 8 Administration Cookbook, Patrick Li, 2019](https://amzn.to/31qmvDU)
* [Linux Firewalls, Michael Rash, 2007](https://amzn.to/3gvD0VR)
* [Linux Firewalls, Steve Suehring, 2015](https://amzn.to/3fpFp2U)

<social-share />
