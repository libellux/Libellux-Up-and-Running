---
title: Open Lightweight Directory Access Protocol
meta:
  - name: description
    content: OpenLDAP is a free, open-source implementation of the Lightweight Directory Access Protocol developed by the OpenLDAP Project. It is released under its own BSD-style license called the OpenLDAP Public License. LDAP is a platform-independent protocol.
noGlobalSocialShare: true
tags: [""]
---

# OpenLDAP Lightweight Directory Access <Badge text="In development" type="warning"/>

<TagLinks />

OpenLDAP is a free, open-source implementation of the Lightweight Directory Access Protocol developed by the OpenLDAP Project. It is released under its own BSD-style license called the OpenLDAP Public License. LDAP is a platform-independent protocol.

[OpenLDAP website](https://www.openldap.org/) [GitHub](https://github.com/openldap/openldap)

Setup and configuration has been tested on the following operating systems:

* Ubuntu 20.04
* 

The OpenLDAP Software 2.4 Administrator's Guide can be read [here](https://www.openldap.org/doc/admin24/).

https://www.openldap.org/software/download/OpenLDAP/openldap-release/openldap-2.4.53.tgz

::: warning NOTE
Berkeley DB version 6.0.20 and later uses a software license that is incompatible with LDAP technology and should not be used with OpenLDAP.
:::

## Configuration files

## Prerequisites

## Installation

```
server@ubuntu:~$ sudo apt-get install libldap-2.4-2 slapd ldap-utils
```

Administration password (special characters?)

Backup original configuration file

sudo mv /etc/ldap/slapd.conf /etc/ldap/slapd.conf_bak (?)

```{1}
server@ubuntu:~$ sudo slapcat
dn: dc=nodomain
objectClass: top
objectClass: dcObject
objectClass: organization
o: nodomain
dc: nodomain
structuralObjectClass: organization
entryUUID: 0c08d556-aff3-103a-90db-7bd3172db0bb
creatorsName: cn=admin,dc=nodomain
createTimestamp: 20201031183133Z
entryCSN: 20201031183133.803677Z#000000#000#000000
modifiersName: cn=admin,dc=nodomain
modifyTimestamp: 20201031183133Z

dn: cn=admin,dc=nodomain
objectClass: simpleSecurityObject
objectClass: organizationalRole
cn: admin
description: LDAP administrator
userPassword:: 
structuralObjectClass: organizationalRole
entryUUID: 0c090742-aff3-103a-90dc-7bd3172db0bb
creatorsName: cn=admin,dc=nodomain
createTimestamp: 20201031183133Z
entryCSN: 20201031183133.805001Z#000000#000#000000
modifiersName: cn=admin,dc=nodomain
modifyTimestamp: 20201031183133Z
```

sudo dpkg-reconfigure slapd

Omit OpenLDAP server config = no

DNS domain e.g. = ldap.libellux.com

ORG name = Libellux

Admin password

database to be purged = no

move old database = yes

```{1}
server@ubuntu:~$ sudo slapcat
dn: dc=ldap,dc=libellux,dc=com
objectClass: top
objectClass: dcObject
objectClass: organization
o: Libellux
dc: ldap
structuralObjectClass: organization
entryUUID: 367d48c2-aff7-103a-9ed7-c37913345f20
creatorsName: cn=admin,dc=ldap,dc=libellux,dc=com
createTimestamp: 20201031190123Z
entryCSN: 20201031190123.018070Z#000000#000#000000
modifiersName: cn=admin,dc=ldap,dc=libellux,dc=com
modifyTimestamp: 20201031190123Z

dn: cn=admin,dc=ldap,dc=libellux,dc=com
objectClass: simpleSecurityObject
objectClass: organizationalRole
cn: admin
description: LDAP administrator
userPassword:: 
structuralObjectClass: organizationalRole
entryUUID: 367d80b2-aff7-103a-9ed8-c37913345f20
creatorsName: cn=admin,dc=ldap,dc=libellux,dc=com
createTimestamp: 20201031190123Z
entryCSN: 20201031190123.019553Z#000000#000#000000
modifiersName: cn=admin,dc=ldap,dc=libellux,dc=com
modifyTimestamp: 20201031190123Z
```

check status

sudo systemctl status slapd

sudo ufw allow ldap port 389 external access

```{2}
server@ubuntu:~$ ldapwhoami -H ldap:// -x
anonymous
```

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

```console
server@ubuntu:~$ sudo ufw allow ldap comment "LDAP"
```

## Recommended reading <Badge text="affiliate links" type="warning"/>

* [Mastering OpenLDAP: Configuring, Securing and Integrating Directory, Butcher Matt, 2007](https://amzn.to/2TGW8Gh)

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### Symas OpenLDAP

Symas OpenLDAP comes as pre-compiled and fully tested libraries and installs using native OS installation tools. It’s streamlined for easy setup and administration, and supports secure authentication methods, encryption and replication. To give you greater deployment flexibility and to help you maintain "as is" legacy environments, Symas OpenLDAP offers a choice of high-performance transaction-oriented databases, including an "old-school" database based on Oracle Berkeley DB, as well as a high-performance memory-mapped database (Symas Lightning Memory-mapped Database), based on our new open source memory-mapped b-tree technology. Both of these databases allow hot backups and automatically recover after power failures or system crashes.

[Symas](https://symas.com/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
