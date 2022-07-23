---
lang: en-US
title: PSAD Port Scan Attack Detector
description: PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.
---

# PSAD Intrusion Detection with Log Analysis <Badge text="Rev 2" type="tip"/>

PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.

[PSAD website](https://cipherdyne.org/psad/) [GitHub](https://github.com/mrash/psad)

Setup and configuration have been tested on the following operating systems:

* Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)
* PSAD- 2.2.3 -> 2.4.6

<a href="https://fundof.me/libellux"><img src="https://img.shields.io/badge/fundof-libellux-green" alt="fundof"></a>

## Configuration files

* [psad.conf](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/psad/config/psad.conf)

## Prerequisites

Dependancies when installing PSAD from source.

* `net-tools`
* `g++`

## Install PSAD from source

Make sure you have installed the dependency packages and once complete download the lastest stable version from the [PSAD GitHub](https://github.com/mrash/psad), extract and run the installation script.

<img class="zoom-custom-imgs" :src="('/img/psad/psad_diagram.jpg')" alt="PSAD Port Scan Attack Detector">

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get -y install net-tools g++ && \
wget https://github.com/mrash/psad/archive/2.4.6.tar.gz && \
tar -zxvf 2.4.6.tar.gz && cd psad-2.4.6/ && \
sudo ./install.pl
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$
```
:::
::::

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers{5,13,22,32,42,44}
[+] psad alerts will be sent to:

       root@localhost

[+] Would you like alerts sent to a different address ([y]/n)?  n

[+] By default, psad parses all iptables log messages for scan activity.
    However, psad can be configured to only parse those iptables messages
    that match particular strings (that are specified in your iptables
    ruleset with the --log-prefix option).

    Would you like psad to only parse specific strings in iptables
    messages (y/[n])?  n

[+] By default, psad matches Snort rules against any IP addresses, but
    psad offers the ability to restrict signature matches to specific
    networks with the HOME_NET variable (similar to Snort).  However, psad
    also offers the ability to acquire all local subnets on the local system
    by parsing the output of "ifconfig", or the subnets can be restricted
    to a limited set of networks.

    First, is it ok to leave the HOME_NET setting as "any" ([y]/n)?  y

[+] psad has the capability of sending scan data via email alerts to the
    DShield distributed intrusion detection system (www.dshield.org).  By
    default this feature is not enabled since firewall log data is sensitive,
    but submitting logs to DShield provides a valuable service and assists
    in generally enhancing internet security.  As an optional step, if you
    have a DShield user id you can edit the "DSHIELD_USER_ID" variable
    in /etc/psad/psad.conf

    Would you like to enable DShield alerts (y/[n])?  n

[+] Setting hostname to "client@ubuntu" in /etc/psad/psad.conf
[+] The latest psad signatures can be installed with "psad --sig-update"
    or installed now with install.pl.

    If you decide to answer 'y' to the next question, install.pl
    will require DNS and network access now.

    Would you like to install the latest signatures from
      http://www.cipherdyne.org/psad/signatures (y/n)?  y

[+] Enable psad at boot time ([y]/n)?  y

[+] psad has been installed.
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$
```
:::
::::

## Configuration

The email address will be left as default (root@localhost;) as in this tutorial we'll use OSSEC to manage the alerts. 

:::: code-group
::: code-group-item Ubuntu
```bash{4}
$ sudo nano /etc/psad/psad.conf

### Machine hostname
HOSTNAME server@ubuntu;

### Specify the home and external networks.  Note that by default the
### ENABLE_INTF_LOCAL_NETS is enabled, so psad automatically detects
### all of the directly connected subnets and uses this information as
### the HOME_NET variable.
HOME_NET                    192.168.0.0/24;
EXTERNAL_NET                any;

IPT_SYSLOG_FILE             /var/log/syslog;
EXPECT_TCP_OPTIONS		    Y;
EMAIL_ALERT_DANGER_LEVEL	3;

### Allow reporting methods to be enabled/restricted.  This keyword can
### accept values of "nosyslog" (don't write any messages to syslog),
### "noemail" (don't send any email messages), or "ALL" (to generate both
### syslog and email messages).  "ALL" is the default.  Both "nosyslog"
### and "noemail" can be combined with a comma to disable all logging
### and alerting.
ALERTING_METHODS            noemail;
```
:::
::: code-group-item Rocky
```bash
server@rocky:~$
```
:::
::::

To check the status of PSAD execute the following command.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo psad -S
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$
```
:::
::::

### Enable PSAD rules in OSSEC

To enable OSSEC to decode and respond to PSAD rules being triggered follow the instructions found [here]().

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

First enable logging using the built-in UFW command below.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo ufw logging on
Logging enabled
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$
```
:::
::::

Once logging been enabled you'll also need to alter the UFW rules. Edit both configuration files (before.rules and before6.rules) and add the following before the COMMIT line.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /etc/ufw/before.rules
server@ubuntu:~$ sudo nano /etc/ufw/before6.rules
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$
```
:::
::::

:::: code-group
::: code-group-item Ubuntu
```bash{2,3}
# custom psad logging directives
-A INPUT -j LOG
-A FORWARD -j LOG

# do not delete the "COMMIT" line or these rules wont be processed
COMMIT
```
:::
::: code-group-item Rocky
```bash
server@rocky:~$
```
:::
::::

Next reload UFW and proceed to check psad with the built-in firewall analyze tool.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo ufw reload
server@ubuntu:~$ sudo psad --fw-analyze
[+] Parsing INPUT chain rules.
[+] Parsing INPUT chain rules.
[+] Firewall config looks good.
[+] Completed check of firewall ruleset.
[+] Results in /var/log/psad/fw_check
[+] Exiting.
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$
```
:::
::::

## Command-line

Command|Description
-------|-----------
psad -R | Restart psad
psad -S | psad status
psad --fw-analyze | Analyze the local iptables ruleset
psad --sig-update | Download the latest set of psad signatures
psad -H | Send all psad daemons a HUP signal to have them re-import configs
