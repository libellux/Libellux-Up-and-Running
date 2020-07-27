---
title: PSAD Port Scan Attack Detector | Libellux
tags: ["psad", "intrusion", "detection", "scanner", "security"]
---

# PSAD Intrusion Detection with Log Analysis

<TagLinks />

Setup and configuration has been tested on following OS with version:

* Ubuntu 16.04, Ubuntu 18.04
* 2.2.3, 2.4.3

## Configuration files

## Prerequisites

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
