---
title: Jira Software | Libellux
tags: ["jira", "atlassian", "helpdesk", "tickets"]
---

# Jira Service Desk

<TagLinks />

Setup and configuration has been tested on following OS with version:

- Ubuntu 18.04
- 4.7.1

## Configuration files

- dbconfig.xml [/conf/dbconfig.xml]

## Prerequisites

## Installation

![Ubuntu](/img/ubuntu.png)

```
sudo apt-get update
```

```
wget https://www.atlassian.com/software/jira/downloads/binary/atlassian-servicedesk-4.7.1-x64.bin
```

```
chmod a+x atlassian-servicedesk-4.7.1-x64.bin
```

```
sudo ./atlassian-servicedesk-4.7.1-x64.bin
```

```
We couldn't find fontconfig, which is required to use OpenJDK. Press [y, Enter] to install it.
For more info, see https://confluence.atlassian.com/x/PRCEOQ

y
```

```
This will install Jira Service Desk 4.7.1 on your computer.
OK [o, Enter], Cancel [c]

o
```

```
Choose the appropriate installation or upgrade option.
Please choose one of the following:
Express Install (use default settings) [1], Custom Install (recommended for advanced users) [2, Enter], Upgrade an existing Jira installation [3]

1
```

```
Details on where Jira Service Desk will be installed and the settings that will be used.
Installation Directory: /opt/atlassian/jira 
Home Directory: /var/atlassian/application-data/jira 
HTTP Port: 8080 
RMI Port: 8005 
Install as service: Yes 
Install [i, Enter], Exit [e]

i
```

```
Installation of Jira Service Desk 4.7.1 is complete
Start Jira Service Desk 4.7.1 now?
Yes [y, Enter], No [n]

y
```

```
Please wait a few moments while Jira Service Desk starts up.
Launching Jira Service Desk ...

Installation of Jira Service Desk 4.7.1 is complete
Your installation of Jira Service Desk 4.7.1 is now ready and can be
accessed via your browser.
Jira Service Desk 4.7.1 can be accessed at http://localhost:8080
Finishing installation ...
```

## Troubleshooting

### Missing dbconfig.xml

``` xml
<?xml version="1.0" encoding="UTF-8"?>

<jira-database-config>
  <name>defaultDS</name>
  <delegator-name>default</delegator-name>
  <database-type>h2</database-type>
  <schema-name>PUBLIC</schema-name>
  <jdbc-datasource>
    <url>jdbc:h2:file:/var/atlassian/application-data/jira/database/h2db</url>
    <driver-class>org.h2.Driver</driver-class>
    <username>sa</username>
    <password></password>
    <pool-min-size>20</pool-min-size>
    <pool-max-size>20</pool-max-size>
    <pool-max-wait>30000</pool-max-wait>
    <min-evictable-idle-time-millis>4000</min-evictable-idle-time-millis>
    <time-between-eviction-runs-millis>5000</time-between-eviction-runs-millis>
    <pool-max-idle>20</pool-max-idle>
    <pool-remove-abandoned>true</pool-remove-abandoned>
    <pool-remove-abandoned-timeout>300</pool-remove-abandoned-timeout>
  </jdbc-datasource>
</jira-database-config>
```

https://community.atlassian.com/t5/Jira-questions/Missing-dbconfig-xml/qaq-p/177310
https://confluence.atlassian.com/jirakb/jira-fails-to-start-with-error-parsing-database-configuration-file-317194935.html

### XSRF Security Token Missing

secure="false"

https://confluence.atlassian.com/bitbucketserverkb/xsrf-security-token-missing-779171343.html

### Process owner

chown -R jira:jira /opt/atlassian/jira



https://community.atlassian.com/t5/Confluence-questions/Unable-to-create-directory-for-deployment-opt-atlassian-jira/qaq-p/1077790





