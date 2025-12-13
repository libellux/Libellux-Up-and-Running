---
title: CrowdSec
description: CrowdSec Security Engine is an all-in-one IDS/IPS and WAF
---

# CrowdSec

CrowdSec Security Engine is an all-in-one IDS/IPS and WAF.

<a href='https://ko-fi.com/B0B31BJU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Install

::: info
Supported distributions:

* Ubuntu 22.04 (Jammy Jellyfish)
* Debian 12 (Bookworm)
* Rocky Linux 9 (Blue Onyx)
:::

::: code-group
```shellsession [Ubuntu/Debian]
```
```shellsession [Rocky Linux]
```
:::



When running a scan use the `multiscan` option to enable multihread reading. You can also set it to `quiet` if you're going to use the `log` option. You can also create a `file list` for all the directories to scan.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo clamdscan --multiscan --quiet --file-list= --log=
```
:::
::::

<a target="_blank" class="dark-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
<a target="_blank" class="light-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/light.png" /></a>
