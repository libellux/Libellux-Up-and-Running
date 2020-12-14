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

::: warning NOTE
Berkeley DB version 6.0.20 and later uses a software license that is incompatible with LDAP technology and should not be used with OpenLDAP.
:::

## Configuration files

## Prerequisites

* `libldap-2.4-2`
* `slapd`
* `ldap-utils`

## Installation <Badge text="Rev 1" type="default"/>

::: tip INFO
When creating [naming attributes](https://ldapwiki.com/wiki/Best%20Practices%20For%20LDAP%20Naming%20Attributes) and [password composition](https://ldapwiki.com/wiki/Password%20Character%20Composition) in LDAP its recommended to avoid any non alphanumeric and special characters. Follow the links for more detailed information.
:::

```
server@ubuntu:~$ sudo apt-get install libldap-2.4-2 slapd ldap-utils
```

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

```
server@ubuntu:~ sudo dpkg-reconfigure slapd
```

If you enable this option, no initial configuration or database will be created for you.

Omit OpenLDAP server configuration? no

The DNS domain name is used to construct the base DN of the LDAP directory. For example, 'foo.example.org' will create the directory with 'dc=foo, dc=example, dc=org' as base DN. 

DNS domain e.g. = ldap.libellux.com

Please ennter the name of the organization to use in the base DN of your LDAP directory.

ORG name = Libellux Systems

Please enter the password for the admin entry in your LDAP directory.

Please enter the admin password for your LDAP directory again to verify that you have typed it correctly.

Admin password

Do you want the database to be removed when slapd is purged?

database to be purged = no

There are still files in /var/lib/ldap which will probably break the configuration process. If you enable this option, the maintainer scripts will move the old database files out of the way before creating a new database.

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

View root DN.

```
server@ubuntu:~$ sudo ldapsearch -H ldapi:/// -Y EXTERNAL -b "cn=config" -LLL -Q | grep olcRootDN:
```

Add base dn for Users and Groups

basedn.ldif

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
