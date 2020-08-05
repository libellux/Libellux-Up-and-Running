---
title: PSAD Port Scan Attack Detector
tags: ["psad", "intrusion", "detection", "scanner", "security"]
---

# PSAD Intrusion Detection with Log Analysis

<TagLinks />

PSAD is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.

[PSAD website](https://cipherdyne.org/psad/) [GitHub](https://github.com/mrash/psad)

Setup and configuration has been tested on following OS with version:

* Ubuntu- 16.04, 18.04, 20.04
* 2.2.3 -> 2.4.6

## Configuration files

## Prerequisites

Dependancies when installing PSAD from source.

* `net-tools`
* `g++`

## Install from source

Make sure you have installed the dependency packages `sudo apt-get install net-tools & g++`. Once complete download the lastest stable version from the [PSAD GitHub](https://github.com/mrash/psad), extract and run the installation script.

    $ wget https://github.com/mrash/psad/archive/2.4.6.tar.gz
    $ tar -zxvf 2.4.6.tar.gz
    $ cd psad-2.4.6/
    $ sudo ./install.pl

Answer the question as it fits (Y) and install the latest signatures.

```console
Would you like to install the latest signatures from
    http://www.cipherdyne.org/psad/signatures (y/n)?  y
```

## Setup PSAD

    $ sudo apt-get update
    $ sudo apt-get install psad

First enable logging using the built-in UFW command below.

    $ sudo ufw logging on

Once we did enable logging in UFW we also need to alter our UFW rules. Edit both configuration files (before.rules and before6.rules) and add the following before the COMMIT line.

    $ sudo nano /etc/ufw/before.rules

    # custom psad logging directives
    -A INPUT -j LOG --log-tcp-options
    -A INPUT -j LOG --log-tcp-options

    # do not delete the "COMMIT" line or these rules wont be processed
    COMMIT

Now we need to reload UFW and proceed to check psad with the built-in firewall analyze tool.

    $ sudo ufw reload
    $ sudo psad --fw-analyze
    ...
    [+] Parsing INPUT chain rules.
    [+] Parsing INPUT chain rules.
    [+] Firewall config looks good.
    [+] Completed check of firewall ruleset.
    [+] Results in /var/log/psad/fw_check
    [+] Exiting.

## Configuration

The email address will be left as default (root@localhost;) as we use OSSEC to generate alerts. However, we will still send local server emails if the danger level is 3 or greater.

    $ sudo nano /etc/psad/psad.conf

    HOSTNAME    your_domain.com;
    IPT_SYSLOG_FILE		/var/log/syslog;
    EXPECT_TCP_OPTIONS		Y; # --log-tcp-options argument
    EMAIL_ALERT_DANGER_LEVEL	3; # alert if danger >= to this value

To avoid any email reports and only rely on the syslog and OSSEC alerts we can define the alerting method in the psad.conf file.

    ### Allow reporting methods to be enabled/restricted.  This keyword can
    ### accept values of "nosyslog" (don't write any messages to syslog),
    ### "noemail" (don't send any email messages), or "ALL" (to generate both
    ### syslog and email messages).  "ALL" is the default.  Both "nosyslog"
    ### and "noemail" can be combined with a comma to disable all logging
    ### and alerting.
    ALERTING_METHODS            noemail;

To check the status of PSAD execute the following command.

    $ sudo psad -S

## Recommended reading

* [Linux Firewalls, Michael Rash, 2007](https://amzn.to/3gvD0VR)