---
title: FreeRADIUS Account Management Server
meta:
  - name: description
    content: The world's leading RADIUS server. The project includes a GPL AAA server, BSD licensed client and PAM and Apache modules. Full support is available from NetworkRADIUS.
noGlobalSocialShare: true
tags: [""]
---

# FreeRADIUS server <Badge text="In development" type="warning"/>

<TagLinks />

The world's leading RADIUS server. The project includes a GPL AAA server, BSD licensed client and PAM and Apache modules. Full support is available from [NetworkRADIUS](https://networkradius.com/).

[FreeRADIUS website](https://freeradius.org/) [GitHub](https://github.com/FreeRADIUS)

Setup and configuration has been tested on the following operating systems:

* Ubuntu 20.04
* FreeRADIUS 3.0.20

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

## Recommended reading <Badge text="affiliate links" type="warning"/>

* [FreeRADIUS Beginner's Guide, van der Walt Dirk](https://amzn.to/3aXFTP4)

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### NetworkRADIUS

[NetworkRADIUS](https://networkradius.com/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
