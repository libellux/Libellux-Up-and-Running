---
title: Getting started
description: Install open-source software from source to focus on Zero Trust Network principles, enhancing security for existing applications, and deploying tools for threat detection and prevention.
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import { onMounted } from 'vue'
import  mediumZoom  from 'medium-zoom'

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

![flowchart](/img/flowchart-dark.png){.dark-only}{data-zoomable}
![flowchart](/img/flowchart-light.png){.light-only}{data-zoomable}

## Credits

| Role | Names |
|------|-------|
| Authors: | Fredrik Hilmersson [@libellux](https://github.com/libellux) |
| Contributors: | Damir Kucic [@dkucic](https://github.com/dkucic), Scott Shinn [@atomicturtle](https://github.com/atomicturtle) |
| Reviewers: | Scott Shinn [@atomicturtle](https://github.com/atomicturtle), Adam Hilmersson [@cnsta](https://github.com/cnsta), Björn Ricks [@bjoernricks](https://github.com/bjoernricks) |
| Supporters: | [HyperQube](https://hyperqube.io/), [Atomi Systems](https://atomisystems.com/activepresenter/), [Mullvad VPN](https://mullvad.net/en/), [JetBrains](https://www.jetbrains.com/), [Better Stack](https://betterstack.com/) |

## Feedback

[Questions](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), [comments](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), or [problems](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) regarding this service? Create an issue [here](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) or contact [webmaster@libellux.com](mailto:webmaster@libellux.com).

## Team

<VPTeamMembers size="small" :members="members" />

<a target="_blank" class="dark-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
<a target="_blank" class="light-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/light.png" /></a>
