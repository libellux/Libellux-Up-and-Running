---
lang: en-US
title: OSSEC Host Intrusion Detection System
description: OSSEC is a full platform to monitor and control your systems. It mixes together all the aspects of HIDS (host-based intrusion detection), log monitoring and SIM/SIEM together in a simple, powerful and open source solution.
---

# OSSEC Host Intrusion Detection System <Badge text="Rev 2" type="tip"/>

OSSEC is a full platform to monitor and control your systems. It mixes together all the aspects of HIDS (host-based intrusion detection), log monitoring and SIM/SIEM together in a simple, powerful and open source solution.

[OSSEC website](https://www.ossec.net/) [GitHub](https://github.com/ossec/ossec-hids)

Setup and configuration have been tested on the following operating systems:

* Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian), Windows Server 2019, Windows 10
* OSSEC- 2.9.0 -> 3.6.0

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

## Configuration files

* ossec.conf (server)
* ossec.conf (agent)
* ossec.conf (Windows agent)
* local_rules.xml

## Prerequisites

For more detailed information on OSSEC installation requirements read the official [documentation](https://www.ossec.net/docs/docs/manual/installation/installation-requirements.html).

**Ubuntu 20.04:**

* `build-essential`
* `libssl-dev`
* `libpcre2-dev`
* `zlib1g-dev`
* `libevent-dev`
* `jq` (optional)

**Rocky 8.4:**

* `make`
* `gcc`
* `libevent-devel`
* `openssl-devel`
* `zlib-devel`
* `pcre2-devel`
* `jq` (optional)

## Server installation

To install **OSSEC 3.6.0** on **Ubuntu 20.04** (Focal Fossa) or **Rocky 8.4** (Green Obsidian) first install its prerequisites.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y zlib1g-dev libpcre2-dev libevent-dev libssl-dev jq
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo yum -y update && \
sudo yum -y upgrade && \
sudo yum install -y make gcc && \
sudo yum install -y libevent-devel openssl-devel zlib-devel pcre2-devel jq
```
:::
::::

### Verify file integrity

Before you download the [latest stable version](https://github.com/ossec/ossec-hids/releases) from ossec-hids GitHub (3.6.0). Fetch and import the corresponding certificate and key file (.asc) from [ossec.net](http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc) and the ossec-hids [repository](https://github.com/ossec/ossec-hids/releases).

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ wget http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc && \
wget https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc && \
gpg --import OSSEC-ARCHIVE-KEY.asc
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ wget http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc && \
wget https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc && \
gpg --import OSSEC-ARCHIVE-KEY.asc
```
:::
::::

The output should show the following.

```shell-session:no-line-numbers
gpg: key EE1B0E6B2D8387B7: public key "Scott R. Shinn <scott@atomicorp.com>" imorted
gpg: Total number processed: 1
gpg:               imported: 1
```

Next download the [latest stable version](https://github.com/ossec/ossec-hids/releases) of OSSEC (3.6.0) and verify the file integrity.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz && \
gpg --verify ossec-hids-3.6.0.tar.gz.asc 3.6.0.tar.gz
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz && \
gpg --verify ossec-hids-3.6.0.tar.gz.asc 3.6.0.tar.gz
```
:::
::::

The signature output is supposed to look as following.

```shell-session:no-line-numbers{3}
gpg: Signature made Fri 14 Feb 2020 09:04:32 PM UTC
gpg:                using RSA key B50FB1947A0AE31145D05FADEE1B0E6B2D8387B7
gpg: Good signature from "Scott R. Shinn <scott@atomicorp.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: B50F B194 7A0A E311 45D0  5FAD EE1B 0E6B 2D83 87B7
```

### Install OSSEC with PCRE2 support

Extract and run the installation script. If receiving build errors, make sure that you have installed all the required dependencies or check the [troubleshooting section](#troubleshooting) for details.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ tar -zxvf 3.6.0.tar.gz && cd ossec-hids-3.6.0/ && \
wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz && \
tar -zxvf pcre2-10.32.tar.gz -C src/external/ && \
sudo PCRE2_SYSTEM=yes ./install.sh
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ tar -zxvf 3.6.0.tar.gz && cd ossec-hids-3.6.0/ && \
wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz && \
tar -zxvf pcre2-10.32.tar.gz -C src/external/ && \
sudo PCRE2_SYSTEM=yes ./install.sh
```
:::
::::

Select preferred language and server installation. Adjust options to fit your requirements.

```shell-session:no-line-numbers
(en/br/cn/de/el/es/fr/hu/it/jp/nl/pl/ru/sr/tr) [en]:
What kind of installation do you want (server, agent, local, hybrid or help)? server
Choose where to install the OSSEC HIDS [/var/ossec/]:
Do you want e-mail notification? (y/n) [y]: n
Do you want to run the integrity check daemon? (y/n) [y]: y
Do you want to run the rootkit detection engine? (y/n) [y]: y
Do you want to enable active response? (y/n) [y]: y
Do you want to enable the firewall-drop response? (y/n) [y]: y
Do you want to add more IPs to the white list? (y/n)? [n]: n
Do you want to enable remote syslog (port 514 udp)? (y/n) [y]: y
--- Press ENTER to finish (maybe more information below). ---
```

::: details Click to view full installation process
```shell-session:no-line-numbers{14,20,26,30,34,45,58,65,67}
 OSSEC HIDS v3.6.0 Installation Script - http://www.ossec.net

 You are about to start the installation process of the OSSEC HIDS.
 You must have a C compiler pre-installed in your system.

  - System: Linux libellux 5.4.0-84-generic
  - User: root
  - Host: libellux


  -- Press ENTER to continue or Ctrl-C to abort. --


1- What kind of installation do you want (server, agent, local, hybrid or help)? server
 
  - Server installation chosen.

2- Setting up the installation environment.

 - Choose where to install the OSSEC HIDS [/var/ossec/]:

    - Installation will be made at  /var/ossec .

3- Configure the OSSEC HIDS.

  3.1- Do you want e-mail notification? (y/n) [y]: n

   --- Email notification disabled.

  3.2- Do you want to run the integrity check daemon? (y/n) [y]: y

   - Running syscheck (integrity check daemon).

  3.3- Do you want to run the rootkit detection engine? (y/n) [y]: y

   - Running rootcheck (rootkit detection).

  3.4- Active response allows you to execute a specific
       command based on the events received. For example,
       you can block an IP address or disable access for
       a specific user.
       More information at:
       http://www.ossec.net/en/manual.html#active-response
  
   - Do you want to enable active response? (y/n) [y]: y

     - Active response enabled.

   - By default, we can enable the host-deny and the
     firewall-drop responses. The first one will add
     a host to the /etc/hosts.deny and the second one
     will block the host on iptables (if linux) or on
     ipfilter (if Solaris, FreeBSD or NetBSD).
   - They can be used to stop SSHD brute force scans,
     portscans and some other forms of attacks. You can
     also add them to block on snort events, for example.

   - Do you want to enable the firewall-drop response? (y/n) [y]: y

     - firewall-drop enabled (local) for levels >= 6

   -
      - 127.0.0.53

   - Do you want to add more IPs to the white list? (y/n)? [n]: n

  3.5- Do you want to enable remote syslog (port 514 udp)? (y/n) [y]: y

   - Remote syslog enabled.

  3.6- Setting the configuration to analyze the following logs:
    -- /var/log/auth.log
    -- /var/log/syslog
    -- /var/log/dpkg.log

 - If you want to monitor any other file, just change
   the ossec.conf and add a new localfile entry.
   Any questions about the configuration can be answered
   by visiting us online at http://www.ossec.net .


--- Press ENTER to finish ---
```
:::

## Server configuration

### Allow list

In the global section of the OSSEC configuration file add the IP addresses of the client(s) and services (e.g. [Greenbone Vulnerability Manager](../openvas/)) to allow.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::::

```xml{6}
<global>
  <allow_list>127.0.0.1</allow_list>
  <allow_list>::1</allow_list>
  <allow_list>localhost.localdomain</allow_list>
  <allow_list>127.0.0.53</allow_list>
  <allow_list>192.168.0.2</allow_list> <!-- OSSEC client -->
</global>
```

### Remote syslog

To enable the function to harvest syslog we need to establish that our remote client connection is secure and allow it. Add the client IP address within the remote section.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::::

```xml{3}
<remote>
  <connection>secure</connection>
  <allowed-ips>192.168.0.2</allowed-ips> <!-- OSSEC client -->
</remote>
```

### Repeated offenders

The first time an IP is blocked it will be put on timeout for the default 600 seconds. If the IP is blocked again it will follow the defined repeated offenders list. To enable repeated offenders, add the entry in the active response config.

::: warning
Make sure that you add the repeated offenders entry at the top of the active response section in the ossec.conf file.
:::

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::::

```xml{6}
<!-- Active Response Config -->
<active-response>
  <!-- Specify a comma seperated list of timeouts per
    - re-incidence (in minutes).
    -->
  <repeated_offenders>30,60,120,240,480</repeated_offenders>
</active-response>
```

Save the config and restart OSSEC to confirm that the repeated offenders been added.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/ossec-control restart
Starting OSSEC HIDS v3.6.0...
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 30 (for #1)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 60 (for #2)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 120 (for #3)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 240 (for #4)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 480 (for #5)
Started ossec-execd...
Started ossec-analysisd...
Started ossec-logcollector...
Started ossec-remoted...
Started ossec-syscheckd...
Started ossec-monitord...
Completed.
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo /var/ossec/bin/ossec-control restart
Starting OSSEC HIDS v3.6.0...
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 30 (for #1)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 60 (for #2)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 120 (for #3)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 240 (for #4)
2021/09/27 17:19:24 ossec-execd: INFO: Adding offenders timeout: 480 (for #5)
Started ossec-execd...
Started ossec-analysisd...
Started ossec-logcollector...
Started ossec-remoted...
Started ossec-syscheckd...
Started ossec-monitord...
Completed.
```
:::
::::

### PSAD rules

If [PSAD Intrusion Detection](../psad/) is to be used, make sure to include the PSAD ruleset in the configuration file (`/var/ossec/etc/ossec.conf`) as its not defined by default.

::: warning
Make sure that you add the the psad rules include before the local rules.
:::

```xml{1}
    <include>psad_rules.xml</include>
    <include>local_rules.xml</include>
</rules>
```

## Agent installation

To install **OSSEC 3.6.0** as an **agent** on **Ubuntu 20.04** (Focal Fossa) or **Rocky 8.4** (Green Obsidian) download its prerequisites.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo apt-get update && \
sudo apt-get -y upgrade && \
sudo apt-get install -y build-essential && \
sudo apt-get install -y zlib1g-dev libpcre2-dev libevent-dev libssl-dev
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
client@rocky:~$ sudo yum -y update && \
sudo yum -y upgrade && \
sudo yum install -y make gcc && \
sudo yum install -y libevent-devel openssl-devel zlib-devel pcre2-devel
```
:::
::::

### Verify file integrity

Before you download the [latest stable version](https://github.com/ossec/ossec-hids/releases) from ossec-hids GitHub (3.6.0). Fetch and import the corresponding certificate and key file (.asc) from [ossec.net](http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc) and the ossec-hids [repository](https://github.com/ossec/ossec-hids/releases).

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ wget http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc && \
wget https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc && \
gpg --import OSSEC-ARCHIVE-KEY.asc
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
client@rocky:~$ wget http://www.ossec.net/files/OSSEC-ARCHIVE-KEY.asc && \
wget https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc && \
gpg --import OSSEC-ARCHIVE-KEY.asc
```
:::
::::

The output should show the following.

```shell-session:no-line-numbers
gpg: key EE1B0E6B2D8387B7: public key "Scott R. Shinn <scott@atomicorp.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

Next download the [latest stable version](https://github.com/ossec/ossec-hids/releases) of OSSEC (3.6.0) and verify the file integrity.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz && \
gpg --verify ossec-hids-3.6.0.tar.gz.asc 3.6.0.tar.gz
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
client@rocky:~$ wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz && \
gpg --verify ossec-hids-3.6.0.tar.gz.asc 3.6.0.tar.gz
```
:::
::::

The signature output is supposed to look as followed.

```shell-session:no-line-numbers{3}
gpg: Signature made Fri 14 Feb 2020 09:04:32 PM UTC
gpg:                using RSA key B50FB1947A0AE31145D05FADEE1B0E6B2D8387B7
gpg: Good signature from "Scott R. Shinn <scott@atomicorp.com>" [unknown]
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: B50F B194 7A0A E311 45D0  5FAD EE1B 0E6B 2D83 87B7
```

### Install OSSEC with PCRE2 support

Extract and run the installation script.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ tar -zxvf 3.6.0.tar.gz && cd ossec-hids-3.6.0/ && \
wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz && \
tar -zxvf pcre2-10.32.tar.gz -C src/external/ && \
sudo PCRE2_SYSTEM=yes ./install.sh
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
client@rocky:~$ tar -zxvf 3.6.0.tar.gz && cd ossec-hids-3.6.0/ && \
wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz && \
tar -zxvf pcre2-10.32.tar.gz -C src/external/ && \
sudo PCRE2_SYSTEM=yes ./install.sh
```
:::
::::

Select agent installation along with preferred actions and make sure that you define the IP address of your OSSEC server.

```shell-session:no-line-numbers{2,4}
(en/br/cn/de/el/es/fr/hu/it/jp/nl/pl/ru/sr/tr) [en]:
What kind of installation do you want (server, agent, local, hybrid or help)? agent
Choose where to install the OSSEC HIDS [/var/ossec/]:
What's the IP Address or hostname of the OSSEC HIDS server?: 192.168.0.1
Do you want to run the integrity check daemon? (y/n) [y]: y
Do you want to run the rootkit detection engine? (y/n) [y]: y
Do you want to enable active response? (y/n) [y]: y
--- Press ENTER to finish (maybe more information below). ---
```

::: details Click to view full installation process
```shell-session:no-line-numbers{14,20,26,30,34,38}
 OSSEC HIDS v3.6.0 Installation Script - http://www.ossec.net

 You are about to start the installation process of the OSSEC HIDS.
 You must have a C compiler pre-installed in your system.

  - System: Linux libellux 5.4.0-84-generic
  - User: root
  - Host: libellux


  -- Press ENTER to continue or Ctrl-C to abort. --


1- What kind of installation do you want (server, agent, local, hybrid or help)? agent

  - Agent(client) installation chosen.

2- Setting up the installation environment.

 - Choose where to install the OSSEC HIDS [/var/ossec]:

    - Installation will be made at  /var/ossec .

3- Configuring the OSSEC HIDS.

  3.1- What's the IP Address or hostname of the OSSEC HIDS server?: 192.168.0.1

   - Adding Server IP 192.168.0.1

  3.2- Do you want to run the integrity check daemon? (y/n) [y]: y

   - Running syscheck (integrity check daemon).

  3.3- Do you want to run the rootkit detection engine? (y/n) [y]: y

   - Running rootcheck (rootkit detection).

  3.4 - Do you want to enable active response? (y/n) [y]: y


  3.5- Setting the configuration to analyze the following logs:
    -- /var/log/auth.log
    -- /var/log/syslog
    -- /var/log/dpkg.log

 - If you want to monitor any other file, just change
   the ossec.conf and add a new localfile entry.
   Any questions about the configuration can be answered
   by visiting us online at http://www.ossec.net .


   --- Press ENTER to continue ---

```
:::

## Agent configuration

Edit the agent configuration file and verify that the server IP address is correct. Make sure email notifications is disabled as [Slack](#slack-integration) will be the preferred channel.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
client@rocky:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::::

```xml{3,8}
<ossec_config>
  <client>
    <server-ip>192.168.0.1</server-ip>
    <config-profile></config-profile>
  </client>

  <global>
    <email_notification>no</email_notification>
  </global>
```

Proceed and add the following lines after the rootcheck segment to enable active response and repeated offenders. You will find the agent ID when you add your agents to your OSSEC server. See the [Manage agents](#manage-agents) section.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
client@rocky:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::::

```xml{23}
<command>
  <name>firewall-drop</name>
  <executable>firewall-drop.sh</executable>
  <expect>srcip</expect>
  <timeout_allowed>yes</timeout_allowed>
</command>

<!-- Active Response Config -->
<active-response>
  <!-- Specify a comma seperated list of timeouts per
     - re-incidence (in minutes).
    -->
  <repeated_offenders>30,60,120,240,480</repeated_offenders>
</active-response>

<active-response>
  <!-- Firewall Drop response. Block the IP for
    - 600 seconds on the firewall (iptables,
    - ipfilter, etc).
    -->
  <disabled>no</disabled>
  <command>firewall-drop</command>
  <agent_id>001</agent_id>
  <location>local</location>
  <rules_id></rules_id>
  <level>6</level>
  <timeout>600</timeout>
</active-response>
```

## Manage agents

To add an agent to your OSSEC server run the command shown in the code segments below and follow the instructions.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/manage_agents
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo /var/ossec/bin/manage_agents
```
:::
::::

```shell-session:no-line-numbers{5,10,14,15,16,22}
****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   (A)dd an agent (A).
   (E)xtract key for an agent (E).
   (L)ist already added agents (L).
   (R)emove an agent (R).
   (Q)uit.
Choose your action: A,E,L,R or Q: A

- Adding a new agent (use '\q' to return to the main menu).
  Please provide the following:
   * A name for the new agent: client
   * The IP Address of the new agent: 192.168.0.2
   * An ID for the new agent[001]: 001
Agent information:
   ID:001
   Name:client
   IP Address:192.168.0.2

Confirm adding it?(y/n): y
```

Once you've added the client proceed by extracting its agent key by providing the assigned agent ID.

```shell-session:no-line-numbers{6,10,14,17}
****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   (A)dd an agent (A).
   (E)xtract key for an agent (E).
   (L)ist already added agents (L).
   (R)emove an agent (R).
   (Q)uit.
Choose your action: A,E,L,R or Q: E

Available agents: 
   ID: 001, Name: client, IP: 192.168.0.2
Provide the ID of the agent to extract the key (or '\q' to quit): 001

Agent key information for '001' is: 
523b0d579891be85956bb3da6c757455005eaf1508ef578186431efbebf5901ecb467ddd857ed5dfdeb5b2cb00e8911c6d031=

** Press ENTER to return to the main menu.
```

Copy the agent key and head back to your OSSEC client and import the agent key. Execute the command, shown in the code section below, on the client and paste the key. Validate that your agent information is correct before adding it.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
client@ubuntu:~$ sudo /var/ossec/bin/manage_agents
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
client@rocky:~$ sudo /var/ossec/bin/manage_agents
```
:::
::::

```shell-session:no-line-numbers{7,14,21}
****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   (I)mport key from the server (I).
   (Q)uit.
Choose your action: I or Q: i

* Provide the Key generated by the server.
* The best approach is to cut and paste it.
*** OBS: Do not include spaces or new lines.

Paste it here (or '\q' to quit): 
523b0d579891be85956bb3da6c757455005eaf1508ef578186431efbebf5901ecb467ddd857ed5dfdeb5b2cb00e8911c6d031=

Agent information:
   ID:001
   Name:client
   IP Address:192.168.0.2

Confirm adding it?(y/n): y
Added.
```

Finally restart the OSSEC server and the client to enable and activate OSSEC HIDS.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/ossec-control restart
client@ubuntu:~$ sudo /var/ossec/bin/ossec-control restart
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo /var/ossec/bin/ossec-control restart
client@rocky:~$ sudo /var/ossec/bin/ossec-control restart
```
:::
::::

To confirm that your agent is active, run the following command from the server.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers{1,5}
server@ubuntu:~$ sudo /var/ossec/bin/agent_control -lc

OSSEC HIDS agent_control. List of available agents:
   ID: 000, Name: server (server), IP: 127.0.0.1, Active/Local
   ID: 001, Name: client, IP: 192.168.0.2, Active
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers{1,5}
server@rocky:~$ sudo /var/ossec/bin/agent_control -lc

OSSEC HIDS agent_control. List of available agents:
   ID: 000, Name: server (server), IP: 127.0.0.1, Active/Local
   ID: 001, Name: client, IP: 192.168.0.2, Active
```
:::
::::

If the agent does not appear, make sure that the firewall settings are in place and that the correct ports are opened on both environments. See the [Firewall settings](#firewall-settings) section for more information.

## Windows agent

The following agent installation has been tested on Windows Server 2019 and Windows 10. Login to your OSSEC server and run the agent manager.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/manage_agents
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo /var/ossec/bin/manage_agents
```
:::
::::

Select option (A) to add our new Windows agent.

```shell-session:no-line-numbers{5,10}
****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   (A)dd an agent (A).
   (E)xtract key for an agent (E).
   (L)ist already added agents (L).
   (R)emove an agent (R).
   (Q)uit.
Choose your action: A,E,L,R or Q: a
```

Enter the name of our Windows agent, specify its local IP address and attach an agent ID.

```shell-session:no-line-numbers{3,4,5,11}
- Adding a new agent (use '\q' to return to the main menu).
  Please provide the following:
   * A name for the new agent: client
   * The IP Address of the new agent: 192.168.0.2
   * An ID for the new agent[001]: 001
Agent information:
   ID:001
   Name:client
   IP Address:192.168.0.2

Confirm adding it?(y/n): y
```

Once we've created our new agent proceed to extract its agent key.

```shell-session:no-line-numbers{6,10,14}
****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   (A)dd an agent (A).
   (E)xtract key for an agent (E).
   (L)ist already added agents (L).
   (R)emove an agent (R).
   (Q)uit.
Choose your action: A,E,L,R or Q: e

Available agents: 
   ID: 001, Name: client, IP: 192.168.0.2
Provide the ID of the agent to extract the key (or '\q' to quit): 001
```

Copy the agent ID as we will need it when setting up the client machine.

```shell-session:no-line-numbers{2}
Agent key information for '001' is: 
xasdEGdh321ieC1i321wMSAxOTIuMTY4Ljg4LjYwIGRjdaszcxODVmZTY3N2U1M43156dasdaE5YjgyNzg2M2fsat6421WJhMDkzNjI3MTM4ZDk3ZGFhxsaRyvfYzExMDg1YTQ=
```

Login to the Windows Server 2019 client machine and download the latest OSSEC windows agent client (in this case [3.6.0](https://updates.atomicorp.com/channels/atomic/windows/ossec-agent-win32-3.6.0-12032.exe)). Otherwise you can find the latest release [here](https://www.ossec.net/downloads/) (under the latest stable releases and *Agent Windows*). Run the executable file.

<img class="zoom-custom-imgs" :src="('/img/ossec/windows_agent_setup.png')" alt="Windows setup">

Accept the current terms and agreements and proceed with the installation. In the next step you will be able to select which components to monitor. If you run a Windows web server keep the option to scan and monitor IIS logs checked (in this tutorial we do not use it).

<img class="zoom-custom-imgs" :src="('/img/ossec/windows_agent_components.png')" alt="Windows components">

Once we've completed the installation we will be presented the OSSEC Windows Agent Manager. Add the OSSEC server IP and the Authentication key we did copy in earlier section. Press save.

<img class="zoom-custom-imgs" :src="('/img/ossec/windows_agent_manager.png')" alt="Windows manager">

Next update the firewall settings on our OSSEC server (see [Firewall Settings](https://www.libellux.com/ossec/#firewall-settings)) and add the Windows agent client IP address to the remote connection and allowed IPS section in the OSSEC server configuration file.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::::

```xml{2,7}
<global>
  <allow_list>192.168.0.2</allow_list> <!-- OSSEC client -->
</global>

<remote>
  <connection>secure</connection>
  <allowed-ips>192.168.0.2</allowed-ips> <!-- OSSEC client -->
</remote>
```

Finally, to check if our new Windows agent is active run the agent control command as following.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ /var/ossec/bin/agent_control -lc
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ /var/ossec/bin/agent_control -lc
```
:::
::::

```shell-session:no-line-numbers{3}
OSSEC HIDS agent_control. List of available agents:
   ID: 000, Name: server (server), IP: 127.0.0.1, Active/Local
   ID: 001, Name: client, IP: 192.168.0.2, Active
```

## Agentless monitoring

::: tip
The agentless monitoring has so far only been tested with VMware ESXi 6.7. The result is still not 100% but will give an overview on how to configure your agentless servers or devices.
:::

Generate SSH keys for the OSSEC user.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo -u ossec ssh-keygen
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo -u ossec ssh-keygen
```
:::
::::

If receiving `Saving key "/var/ossec/.ssh/id_rsa" failed: Permission denied` make sure that OSSEC is the directory owner of `.ssh/`.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo chown -R ossec:ossec .ssh/ && sudo -u ossec ssh-keygen
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo chown -R ossec:ossec .ssh/ && sudo -u ossec ssh-keygen
```
:::
::::

### VMware ESXi

Login as the administrator through the vSphere client. Go to the *Host*, *Manage* and Advanced settings under the *System* tab.

<img class="zoom-custom-imgs" :src="('/img/ossec/remote_syslog_settings.png')" alt="VMware syslog settings">

Filter by *syslog* and find the `Syslog.global.logHOST` parameter. Right click and select *Edit option* and set our remote OSSEC host.

<img class="zoom-custom-imgs" :src="('/img/ossec/remote_syslog_value.png')" alt="VMware syslog options">

Additionally we need to edit the `/etc/profile.local` file for our VMware ESXi SSH prompt as the agentless service expects the prompt to end with either `#` or `$`. As administrator SSH to the VMware ESXi shell and using the vi editor append the following line.

```bash
# profile.local
# This file is not used when UEFI secure boot is enabled
PS1="\e[0;41m[\u@\h \W]\$ \e[m"
```

### Enabling agentless monitoring

To enable agentless monitoring go back to your OSSEC server and execute the following command.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ /var/ossec/bin/ossec-control enable agentless
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ /var/ossec/bin/ossec-control enable agentless
```
:::
::::

Proceed to add VMware ESXi server. as agentless, using the *NOPASS* option as using SSH keys to authenticate.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ /var/ossec/agentless/register_host.sh add root@192.168.0.2 NOPASS
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ /var/ossec/agentless/register_host.sh add root@192.168.0.2 NOPASS
```
:::
::::

To test if the authentication works you can run the command below.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo -u ossec ssh root@192.168.0.2
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo -u ossec ssh root@192.168.0.2
```
:::
::::

### Configure agentless monitoring

For more information regarding setting up and configure agentless monitoring check the OSSEC documentation [here](https://www.ossec.net/docs/manual/agent/agentless-monitoring.html).

Open the OSSEC configuration file and add the VMware ESXi IP address to the remote syslog section.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo nano /var/ossec/etc/ossec.conf
```
:::
::::

```xml
  <remote>
    <connection>syslog</connection>
    <allowed-ips>192.168.0.2</allowed-ips> <!-- VMware ESXi -->
  </remote>
```

Additionally add the agentless types to our configuration.

```xml
  <agentless>
    <type>ssh_integrity_check_bsd</type>
    <frequency>36000</frequency>
    <host>root@192.168.0.2</host> <!-- VMware ESXi -->
    <state>periodic</state>
    <arguments>/bin /etc/ /sbin</arguments>
  </agentless>

  <agentless>
    <type>ssh_generic_diff</type>
    <frequency>36000</frequency>
    <host>root@192.168.0.2</host> <!-- VMware ESXi -->
    <state>periodic_diff</state>
    <arguments>ls -la /etc; cat /etc/passwd</arguments>
  </agentless>
```

Finally restart OSSEC.

:::: code-group
::: code-group-item Ubuntu
```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/ossec-control restart
```
:::
::: code-group-item Rocky
```shell-session:no-line-numbers
server@rocky:~$ sudo /var/ossec/bin/ossec-control restart
```
:::
::::

## Firewall settings

The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW [here](https://help.ubuntu.com/community/UFW).

::: details UFW Settings
```shell-session:no-line-numbers
server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
```
:::

```shell-session:no-line-numbers
server@ubuntu:~$ sudo ufw allow proto udp from 192.168.0.2 to any port 1514 comment "OSSEC client"
server@ubuntu:~$ sudo ufw allow proto udp from 192.168.0.2 to any port 514 comment "OSSEC client syslog"
```

## Slack integration

Download [OSSEC icon](/img/ossec/512x512.png) for the Slack App integration.

Add the ossec-slack command within the command section of the OSSEC configuration file.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```

To send all alerts to Slack with the pre-defined alert level, leave the expect segment blank.

```xml
<command>
  <name>ossec-slack</name>
  <executable>ossec-slack.sh</executable>
  <expect></expect> <!-- no expect args required -->
  <timeout_allowed>no</timeout_allowed>
</command>
```

In the active response section we'll set the alert level.

```xml
<active-response>
  <command>ossec-slack</command>
  <location>server</location>
  <level>6</level>
</active-response>
```

Next edit the `ossec-slack.sh` file to match our Slack App settings.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/active-response/bin/ossec-slack.sh
```

::: warning NOTE
Make sure that the log path is correct `/../` in the ossec-slack.sh file.
:::

```bash{3,10}
SLACKUSER="OSSEC"
CHANNEL="#ossec-hids"
SITE="https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXX/XXXXXXXXXXX"
SOURCE="ossec2slack"
...
# Logging
cd $LOCAL
cd ../
PWD=`pwd`
echo "`date` $0 $1 $2 $3 $4 $5 $6 $7 $8" >> ${PWD}/../logs/active-responses.log
```

Save the file and reload OSSEC and we should now start receive alerts to our defined channel.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/ossec-control reload
```

## Cloudflare integration

::: warning
The Cloudflare integration requires you to have the jq (JSON processing) tool installed. This tool is used when removing blocked IP's following the repeated offenders timeout interval.
:::

```shell-session:no-line-numbers
server@ubuntu:~$ sudo apt-get install jq
```

First add the cloudflare-ban command to the OSSEC configuration file.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```

```xml
<command>
  <name>cloudflare-ban</name>
  <executable>cloudflare-ban.sh</executable>
  <timeout_allowed>yes</timeout_allowed>
  <expect>srcip</expect>
</command>
```

As well to the active response section. Here we set to block all alerts level 6 or greater. 

```xml
<active-response>
  <command>cloudflare-ban</command>
  <location>server</location>
  <level>6</level>
  <timeout>43200</timeout>
</active-response>
```

Next proceed to update the `cloudflare-ban.sh` script and put your Cloudflare username along with your Global API key.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/active-response/bin/cloudflare-ban.sh
```

```bash{5,6}
ACTION=$1
USER=$2
IP=$3
PWD=`pwd`
TOKEN='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9ey'
USER='cloudflareuser@email.com'
MODE='block' # block or challenge
```

Save the changes and reload OSSEC.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/ossec-control reload
```

To monitor the blocked IP address within the Cloudflare account, go to Firewall, Tools and under IP Access Rules.

## Monitoring

To monitor if the OSSEC daemons are running accordingly, we use Monit to monitor the current status. Edit the Monit configuration file and add the lines below, continue with reloading the Monit daemon to apply the new monitoring rules. If working correctly we shall now receive M/Monit alerts saying processes is not running.

```shell-session:no-line-numbers
client@ubuntu:~$ sudo nano /usr/local/etc/monitrc
```

```bash
# OSSEC processes
check process ossec-agentd matching "ossec-agentd"
check process ossec-execd matching "ossec-execd"
check process ossec-logcollector matching "ossec-logcollector"
check process ossec-syscheckd matching "ossec-syscheckd"
```

Save and reload Monit.

```shell-session:no-line-numbers
client@ubuntu:~$ cd /usr/local/
client@ubuntu:~$ sudo ./bin/monit reload
```

### Monitor failed M/Monit login attempts with OSSEC

Add the M/Monit error.log path to the OSSEC monitor section (local files).

```shell-session:no-line-numbers
client@ubuntu:~$ sudo nano /var/ossec/etc/ossec.conf
```

```xml
<localfile>
    <log_format>syslog</log_format>
    <location>/usr/local/mmonit-3.7.2/logs/error.log</location>
</localfile>
```

Go to the OSSEC server and add the custom rule to the `local_rules.xml` file.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo nano /var/ossec/rules/local_rules.xml
```

```xml
<rule id="100101" level="6">
  <if_sid>2501</if_sid>
  <match>Unauthorized, authentication failed for</match>
  <group>authentication_failed,</group>
  <description>User authentication failure.</description>
</rule>
```

Save and reload the OSSEC server.

```shell-session:no-line-numbers
server@ubuntu:~$ sudo /var/ossec/bin/ossec-control reload
```

## Upgrading

To upgrade OSSEC, download the [latest release](https://github.com/ossec/ossec-hids/releases), extract the file and run the install script. The installer will tell if OSSEC is already installed and if you wish to update it.

```shell-session:no-line-numbers
server@ubuntu:~$ wget https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz
server@ubuntu:~$ tar -zxvf 3.6.0.tar.gz
server@ubuntu:~$ cd ossec-hids-3.6.0/
server@ubuntu:~$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@ubuntu:~$ tar -zxvf pcre2-10.32.tar.gz -C src/external/
server@ubuntu:~$ sudo apt-get install build-essential libssl-dev libpcre2-dev zlib1g-dev
server@ubuntu:~$ sudo PCRE2_SYSTEM=yes ./install
```

### Upgrade to OSSEC 3.3.0

To upgrade to OSSEC 3.3.0 using the pcre2 package, download the new version along with the pcre2 package, extract and upgrade OSSEC as normal.

```shell-session:no-line-numbers
server@ubuntu:~$ wget https://github.com/ossec/ossec-hids/archive/3.3.0.tar.gz
server@ubuntu:~$ tar -zxvf 3.3.0.tar.gz
server@ubuntu:~$ cd ossec-hids-3.3.0/
server@ubuntu:~$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@ubuntu:~$ tar -zxvf pcre2-10.32.tar.gz -C src/external/
server@ubuntu:~$ sudo apt-get install build-essential libssl-dev libpcre2-dev zlib1g-dev
server@ubuntu:~$ sudo PCRE2_SYSTEM=yes ./install
```

```shell-session:no-line-numbers{12}
OSSEC HIDS v2.9.3 Installation Script - http://www.ossec.net
 
You are about to start the installation process of the OSSEC HIDS.
You must have a C compiler pre-installed in your system.
 
    - System: Linux hostname 4.4.0-116-generic
    - User: root
    - Host: hostname

    -- Press ENTER to continue or Ctrl-C to abort. --

    - You already have OSSEC installed. Do you want to update it? (y/n): y
```

## Custom rules

Read more about how to create custom rules and decoders [here](https://www.ossec.net/docs/manual/rules-decoders/create-custom.html).

* [local_rules.xml](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/ossec/config/local_rules.xml)

### Ignore snap loop devices

`/var/ossec/rules/local_rules.xml`

```xml
<rule id="100100" level="0">
  <if_sid>531</if_sid>
  <regex>'df -P':\s+/dev/loop\d+\s+\d+\s+\d+\s+0\s+100%\s+/snap/\w+/\d+</regex>
  <description>Ignore full snap loop devices.</description>
</rule>
```

### Monitor failed M/Monit authentication

`/var/ossec/rules/local_rules.xml`

```xml
<rule id="100101" level="6">
  <if_sid>2501</if_sid>
  <match>Unauthorized, authentication failed for</match>
  <group>authentication_failed,</group>
  <description>User authentication failure.</description>
</rule>
```

`/var/ossec/etc/oseec.conf`

```xml
<localfile>
  <log_format>syslog</log_format>
  <location>/usr/local/mmonit-3.7.2/logs/error.log</location>
</localfile>
```

### Mute useless systemd-resolved message

`/var/ossec/rules/local_rules.xml`

```xml
<rule id="100102" level="0">
  <program_name>systemd-resolved</program_name>
  <match>Server returned error NXDOMAIN</match>
  <description>Useless systemd-resolved log message.</description>
</rule>
```

### Alert on fail2ban action

`/var/ossec/rules/local_rules.xml`

```xml
<rule id="100103" level="6">
  <match>fail2ban.actions</match>
  <group>authentication_failed,</group>
  <description>Fail2ban action taken.</description>
</rule>
```

`/var/ossec/etc/oseec.conf`

```xml
<localfile>
  <log_format>syslog</log_format>
  <location>/var/log/fail2ban.log</location>
</localfile>
```

## Command-line

Command|Description
-------|-----------
/var/ossec/bin/agent_control -lc|List all active agents
/var/ossec/bin/ossec-logtest|Logtest
/var/ossec/bin/ossec-control|start,stop,reload,restart,status,enable,disable
/var/ossec/bin/manage_agents|manage agents (e.g., add, remove)

## Troubleshooting

If you encounter any issue or having questions regarding OSSEC I recommend using their very helpful [mailing list](https://groups.google.com/forum/#!forum/ossec-list).

You can also read more about debug mode and how to view more verbose logs [here](https://www.ossec.net/docs/faq/unexpected.html).

[Questions](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), [comments](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), or [problems](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) regarding this service? Create an issue [here](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) or contact [webmaster@libellux.com](mailto:webmaster@libellux.com).

### Duplicate counter error

In the OSSEC log (/var/ossec/logs/ossec.log) you might notice that the log gets filled with warnings and errors as shown below.

```log
2019/02/21 13:33:21 ossec-remoted: WARN: Duplicate error: [...]
2019/02/21 13:33:21 ossec-remoted(1407): ERROR: Duplicated counter for [...]
```

Stop both the OSSEC manager and the agent. In the agent server go to /var/ossec/queue/rids and remove all the files within the folder. At the manager server go into /var/ossec/queue/rids and remove the file corresponding to the agents ID. Do not delete the sender_counter. Restart both.

Or disable the feature by editing `/var/ossec/etc/internal_options.conf`

```bash
# Verify msg id (set to 0 to disable it)
remoted.verify_msg_id=0
```

Save and restart.

### build-essential

If receiving build error `./install.sh: 105: make: not found` install the build-essential package `sudo apt-get install build-essential`.

### libevent-dev

If receiving the build error below, install the libevent development package `sudo apt-get install libevent-dev`.

```shell-session:no-line-numbers
os_maild/sendmail.c:12:10: fatal error: event.h: No such file or directory
12 | #include <event.h>
   |          ^~~~~~~~~
compilation terminated.
make: *** [Makefile:926: os_maild/sendmail.o] Error 1
```

### pcre2 & libpcre2-dev

If receiving the build error `./os_regex/os_regex.h:19:10: fatal error: pcre2.h: No such file or directory` download and install pcre2 package (version 10.32) found [here](https://ftp.pcre.org/pub/pcre/).

```shell-session:no-line-numbers
server@ubuntu:~$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@ubuntu:~$ tar -zxvf pcre2-10.32.tar.gz -C src/external/
```

If the build error persist, make sure to install the libpcre2 development package `sudo apt-get install libpcre2-dev`.

### zlib1g-dev

If receiving the build error `os_zlib/os_zlib.c:13:10: fatal error: zlib.h: No such file or directory` install the zlib1g development package `sudo apt-get install zlib1g-dev`.

### libssl-dev

If receiving the build error `./external/compat/includes.h:65:10: fatal error: openssl/opensslv.h: No such file or directory` install the libssl development package `sudo apt-get install libssl-dev`.

### Ignore snap partition state

If receiving multiple snap partition usage alerts, add a custom rule to local_rules.xml.

```shell-session:no-line-numbers
Rule: 531 (level 7) -> 'Partition usage reached 100% (disk space monitor).'
ossec: output: 'df -P': /dev/loop0           27776   27776         0     100% /snap/snapd/7264
```

```xml
<rule id="100100" level="0">
  <if_sid>531</if_sid>
  <regex>'df -P':\s+/dev/loop\d+\s+\d+\s+\d+\s+0\s+100%\s+/snap/\w+/\d+</regex>
  <description>Ignore full snap loop devices</description>
</rule>
```

### Server returned error NXDOMAIN

If receiving multiple systemd-resolved regarding NXDOMAIN and potential DNS violation, add a custom rule to local_rules.xml.

```shell-session:no-line-numbers
systemd-resolved[3225]: message repeated 4 times: [ Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.]
```

```xml
<rule id="100102" level="0">
  <program_name>systemd-resolved</program_name>
  <match>Server returned error NXDOMAIN</match>
  <description>Useless systemd-resolved log message.</description>
</rule>
```

### Cannot unlink /queue/rids/sender

If receiving the error message shown below.

```log
2020/08/09 20:04:17 manage_agents: ERROR: Cannot unlink /queue/rids/sender: No such file or directory
Added.
```

Proceed with creating the missing file `sudo touch /queue/rids/sender`.

## Enterprise solutions <Badge text="non-sponsored" type="tip"/>

### Atomic Enterprise OSSEC

Atomic Enterprise OSSEC is built specifically for organizations that need to leverage OSSEC in large or mission critical environments. With a dedicated management console, thousands of pre-built OSSEC rules, compliance reporting, and more, Atomic Enterprise OSSEC makes it easy to deploy, manage, and use OSSEC in any on-premise, cloud, or hybrid environment.

[Atomic Enterprise OSSEC](https://atomicorp.com/atomic-enterprise-ossec/)
