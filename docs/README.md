---
title: Introduction
meta:
  - name: description
    content: Open-source software documentation and configuration
  - name: keywords
    content: open-source ossec mmonit monit psad openvas graylog rsyslog jira
---

# Introduction

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
| Reviewers: | |

## Environments

* Ubuntu 20.04 LTS (Focal Fossa)
* Ubuntu 18.04 LTS (Bionic Beaver)
* Ubuntu 16.04 LTS (Xenial Xerus)

::: details Conventions
| Type | Convention | Description |
|--------|----------|-------------|
| Environment | server@ubuntu | Prefix determine operating system |
| Server CLI | server@centos | Commands executed from server command-line |
| Client CLI | client@ubuntu | Commands executed from client command-line |
| Server IP | 192.168.0.1 | Server IP address |
| Client IP | 192.168.0.2 | Client IP address |
:::

## Table of contents

#### PART 1: ZERO TRUST NETWORK

* [1.0: WireGuard Secure VPN Tunnel](./wireguard/README.md)

#### PART 2: INTRUSTION DETECTION AND PREVENTION

* [2.0: OSSEC Host Intrusion Detection System](./ossec/README.md)
* [2.1: PSAD Intrusion Detection with Log Analysis](./psad/README.md)
* [2.2: OpenVAS Open Vulnerability Assessment Scanner](./openvas/README.md)

#### PART 3: MONITORING AND PERFORMANCE

* [3.0: M/Monit System Monitoring](./mmonit/README.md)
* [3.1: Performance Co-Pilot Grafana](./pcp/README.md)
* [3.2: Rsyslog Log Processing](./rsyslog/README.md)
* [3.3: Graylog Centralized Log Management](./graylog/README.md)

#### PART 4: MISCELLANEOUS

* [4.0: Jira Service Desk](./jira/README.md)

## Recommended reading <Badge text="affiliate links" type="warning"/>

* [UNIX and Linux System Administration Handbook (5th Edition), Evi Nemeth, 2017](https://amzn.to/3gwFzH6)
* [Securing DevOps-Safe services in the Cloud, Julien Vehent, 2017](https://amzn.to/3i7At4o)
* [Instant OSSEC Host-based Intrusion Detection, Lhotsky Brad, 2013](https://amzn.to/33sOjdF)
* [OSSEC Host-Based Intrusion Detection Guide, Rory Bray, 2008](https://amzn.to/2XuL9lM)
* [Systems Performance: Enterprise and the Cloud, Gregg Brendan, 2013](https://amzn.to/33sX733)
* [Jira 8 Administration Cookbook, Patrick Li, 2019](https://amzn.to/31qmvDU)
* [Linux Firewalls, Michael Rash, 2007](https://amzn.to/3gvD0VR)
* [Linux Firewalls, Steve Suehring, 2015](https://amzn.to/3fpFp2U)
