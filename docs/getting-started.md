---
title: Getting started
description: Install open-source software from source to focus on Zero Trust Network principles, enhancing security for existing applications, and deploying tools for threat detection and prevention.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { onMounted } from 'vue'
import mediumZoom from 'medium-zoom'

const members = [
  {
    avatar: 'https://github.com/libellux.png',
    name: 'Fredrik Hilmersson',
    title: 'Author',
    sponsor: 'https://ko-fi.com/B0B31BJU3',
    actionText: 'Buy Me a Coffee',
    links: [
      { icon: 'github', link: 'https://github.com/libellux' },
      { icon: 'twitter', link: 'https://twitter.com/libellux_' }
    ]
  },
]

onMounted(() => {
  mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
});
</script>

# Getting started

Install open-source software from source to focus on Zero Trust Network principles, enhancing security for existing applications, and deploying tools for threat detection and prevention.

::: warning DISCLAIMER
It is understood that this documentation, and any configurations may contain errors and are provided for education purposes only. The documentation, and any configurations are provided "as is" without warranty of any kind, whether express, implied, statutory, or otherwise.
:::

<a href='https://ko-fi.com/B0B31BJU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Introduction

In this project, we'll harness OSSEC's active response feature to execute commands on an agent in response to specific triggers. These triggers include alerts from Snort, PSAD, Fail2ban and ClamAV, effectively broadening OSSEC's active response capabilities. Furthermore, all alerts will be collected by Fluentd and transmitted to OpenSearch, streamlining data analysis. Additionally, the integration of WireGuard will bolster communication security throughout this process. Greenbone Vulnerability Manager will be used to identify any security risks to the process, ensuring comprehensive risk management.

## Credits

| Role | Names |
|------|-------|
| Authors: | Fredrik Hilmersson [@libellux](https://github.com/libellux) |
| Contributors: | Damir Kucic [@dkucic](https://github.com/dkucic), Scott Shinn [@atomicturtle](https://github.com/atomicturtle) |
| Reviewers: | Scott Shinn [@atomicturtle](https://github.com/atomicturtle), Cornelius Kölbel [@cornelinux](https://github.com/cornelinux), Adam Hilmersson [@cnsta](https://github.com/cnsta), Björn Ricks [@bjoernricks](https://github.com/bjoernricks) |
| Supporters: | [HyperQube](https://hyperqube.io/), [Atomi Systems](https://atomisystems.com/activepresenter/), [Mullvad VPN](https://mullvad.net/en/), [JetBrains](https://www.jetbrains.com/), [Better Stack](https://betterstack.com/) |

## Table of contents

#### PART 1: ZERO TRUST NETWORK

* [1.0: WireGuard Secure VPN Tunnel](/)

#### PART 2: INTRUSTION DETECTION AND PREVENTION

* [2.0: Greenbone Vulnerability Manager](/intrusion-detection/greenbone-vulnerability-manager)
* [2.1: OSSEC Host Intrusion Detection](/intrusion-detection/ossec)
* [2.2: ClamAV Anti-virus Engine](/intrusion-detection/clamav)
* [2.3: Snort Network Intrusion Detection](/intrusion-detection/snort)
* [2.4: PSAD Port Scan Attack Detector](/)
* 2.5: Fail2ban Intrusion Prevention <Badge text="TBA" type="warning"/>
* 2.6: Suricata Intrusion Detection System <Badge text="TBA" type="warning"/>

#### PART 3: MANAGEMENT

* 3.0: OpenSearch <Badge text="TBA" type="warning"/>
* 3.1: Ansible <Badge text="TBA" type="warning"/>
* 3.2: Monit System Monitoring <Badge text="TBA" type="warning"/>

## Feedback

[Questions](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), [comments](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), or [problems](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) regarding this service? Create an issue [here](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) or contact [webmaster@libellux.com](mailto:webmaster@libellux.com).

## Team

<VPTeamMembers size="small" :members="members" />

<a target="_blank" class="dark-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
<a target="_blank" class="light-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/light.png" /></a>
