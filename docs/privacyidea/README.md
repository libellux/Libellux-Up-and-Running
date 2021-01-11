---
title: privacyIDEA Authentication Server
meta:
  - name: description
    content: privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two factor authentication.
noGlobalSocialShare: true
tags: [""]
---

# privacyIDEA Authentication Server w/ FreeRADIUS <Badge text="In development" type="warning"/>

<TagLinks />

privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two factor authentication.HEN

[privacyIDEA website](https://www.privacyidea.org/) [GitHub](https://github.com/privacyidea/privacyidea)  
[FreeRADIUS website](https://freeradius.org/) [GitHub](https://github.com/FreeRADIUS)

Setup and configuration has been tested on the following operating systems:

* Ubuntu 18.04
* PrivacyIDEA 3.0+, FreeRADIUS 3.0.20

## Configuration files

## Install community edition <Badge text="Rev 1" type="default"/>

First download the signed key.

```
server@ubuntu:~$ wget https://lancelot.netknights.it/NetKnights-Release.asc
```

Next import the signed key.

```
server@ubuntu:~$ sudo gpg --import --import-options show-only --with-fingerprint NetKnights-Release.asc
pub rsa4096 2017-05-16  NetKnights GmbH <release@netknights.it>
Key fingerprint = 0940 4ABB EDB3 586D EDE4  AD22 00F7 0D62 AE25 0082
```

Continue by adding the key to our system.

```
server@ubuntu:~$ sudo apt-key add NetKnights-Release.asc
OK
```

Now we need to add the repository for the specific release (in this case 18.04).

```
server@ubuntu:~$ sudo add-apt-repository http://lancelot.netknights.it/community/bionic/stable
```

::: tip INFO
If you prefer to use the Apache version you can install `apt-get privacyidea-apache2`
:::

Once we update the repository we can install PrivacyIDEA.

```
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install privacyidea-nginx
             _                    _______  _______
   ___  ____(_)  _____ _______ __/  _/ _ \/ __/ _ |
  / _ \/ __/ / |/ / _ `/ __/ // // // // / _// __ |
 / .__/_/ /_/|___/\_,_/\__/\_, /___/____/___/_/ |_|
/_/                       /___/

Running online
```

### Administrator account

```
server@ubuntu:~$ sudo pi-manage admin add admin -e admin@localhost
Admin admin was registered successfully.
```

Once you've added the administrator account and followed the [firewall settings](#firewall-settings) you should be able to reach the web interface from `https://192.168.0.1` and login as the admin user with your password.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea_login.png')" alt="PrivacyIDEA login">

## Install FreeRADIUS

```
server@ubuntu:~$ sudo apt-get install freeradius
```

```{3}
server@ubuntu:~$ freeradius -v
radiusd: FreeRADIUS Version 3.0.20, for host x86_64-pc-linux-gnu, built on Jan 25 2020 at 06:11:13
FreeRADIUS Version 3.0.20
Copyright (C) 1999-2019 The FreeRADIUS server project and contributors
There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE
You may redistribute copies of FreeRADIUS under the terms of the
GNU General Public License
For more information about these matters, see the file named COPYRIGHT
```

```{2}
server@ubuntu:~$ sudo freeradius -CX
Configuration appears to be OK
```

```
server@ubuntu:~$ sudo -i
root@ubuntu:~$ cd /etc/freeradius/3.0/
```

Next, we need to make sure that $INCLUDE clients.conf appears in the configuration file. You can put it on any non-commented line in the config file. The clients.conf file basically holds the list of all the services that will allow this server to authenticate the users.

```
root@ubuntu:~$ nano radiusd.conf
```

```bash{14}
# CLIENTS CONFIGURATION
#
#  Client configuration is defined in "clients.conf".
#

#  The 'clients.conf' file contains all of the information from the old
#  'clients' and 'naslist' configuration files.  We recommend that you
#  do NOT use 'client's or 'naslist', although they are still
#  supported.
#
#  Anything listed in 'clients.conf' will take precedence over the
#  information from the old-style configuration files.
#
$INCLUDE clients.conf
```

The next step is to add the clients (the devices that will use this RADIUS server to authenticate users):

::: tip INFO
In this example we will create the client for GVM (OpenVAS). To enable Radius for GVM read here.
:::

root@ubuntu:~$ nano clients.conf

```bash{8}
#
#  The transport protocol.
#
#  If unspecified, defaults to "udp", which is the traditional
#  RADIUS transport.  It may also be "tcp", in which case the
#  server will accept connections from this client ONLY over TCP.
#
proto = *
```

```bash{28}
#
#  The shared secret use to "encrypt" and "sign" packets between
#  the NAS and FreeRADIUS.  You MUST change this secret from the
#  default, otherwise it's not a secret any more!
#
#  The secret can be any string, up to 8k characters in length.
#
#  Control codes can be entered vi octal encoding,
#       e.g. "\101\102" == "AB"
#  Quotation marks can be entered by escaping them,
#       e.g. "foo\"bar"
#
#  A note on security:  The security of the RADIUS protocol
#  depends COMPLETELY on this secret!  We recommend using a
#  shared secret that is composed of:
#
#       upper case letters
#       lower case letters
#       numbers
#
#  And is at LEAST 8 characters long, preferably 16 characters in
#  length.  The secret MUST be random, and should not be words,
#  phrase, or anything else that is recognisable.
#
#  The default secret below is only for testing, and should
#  not be used in any real environment.
#
secret = SECRET
```

```bash
#client private-network-2 {
#       ipaddr          = 198.51.100.0/24
#       secret          = testing123-2
#}

client GVM {
ipaddr = 192.168.0.2
secret = SECRET
}
```

Now that we are done with that part, we will start adding users. We do that by editing the users file:

root@ubuntu:~$ nano users

```bash{7}
#
# Default for SLIP: dynamic IP address, SLIP mode.
#
DEFAULT Hint == "SLIP"
        Framed-Protocol = SLIP

libellux Cleartext-Password := PASSWORD
```

admin is the username followed by the type of password we want and the password itself.

Once that is done, we start the FreeRADIUS server using the command below:

root@ubuntu:~$ exit
server@ubuntu:~$ sudo freeradius -CX

server@ubuntu:~$ sudo systemctl restart freeradius.service

## Install PrivacyIDEA FreeRADIUS plugin

```
server@ubuntu:~$ sudo apt-get install privacyidea-radius
```

### Create first realm

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
server@ubuntu:~$ sudo ufw allow 443 comment "PrivacyIDEA"
```

## Recommended reading <Badge text="affiliate links" type="warning"/>

* [FreeRADIUS Beginner's Guide, van der Walt Dirk](https://amzn.to/3aXFTP4)

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### privacyIDEA Enterprise Edition

privacyIDEA is a modular solution for two factor authentication especially with OTP tokens. It is multi-tenency- and multi-instance-capable. Due to the modular structure privacyIDEA can be quickly and easily adapted and enhanced. E.g. adding new token types is as simple as writing a new lean python module. You do not need to modify your network for privacyIDEA, it does not write to existing databases or user stores. It only needs read access to your user stores like LDAP, Active Directory, SQL, SCIM-service or flat files. Existing workflows can be enhanced without the need to modify them. Using its simple REST like API it can be automated and smoothly be integrated.

[NetKnights](https://netknights.it/en/produkte/privacyidea/)

### NetworkRADIUS

[NetworkRADIUS](https://networkradius.com/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
