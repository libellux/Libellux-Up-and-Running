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

* Ubuntu 18.04
* FreeRADIUS 3.0.16

## FreeRADIUS Installation

The reason we use FreeRADIUS as an accounting management server in this project is to use the PrivacyIDEA FreeRADIUS plugin for our centralized authentication server (PrivacyIDEA). This guide will require you to read both this chapter and the PrivacyIDEA documentation found here. We will also be using a security key, YubiKey 5 NFC, from Yubico to enforce two-factor authentication (2FA). However, you can use any preferred option to enforce stronger client authentication.

```
server@ubuntu:~$ sudo apt-get install freeradius
```

To check the current version of FreeRADIUS execute the command below.

```{2}
server@ubuntu:~$ freeradius -v
FreeRADIUS Version 3.0.16
Copyright (C) 1999-2017 The FreeRADIUS server project and contributors
There is NO warranty; not even for MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE
You may redistribute copies of FreeRADIUS under the terms of the
GNU General Public License
For more information about these matters, see the file named COPYRIGHT
```

To change the name of your running FreeRADIUS server switch to the root user and edit the radiusd.conf file.

```
server@ubuntu:~$ sudo -i
root@ubuntu:~$ nano /etc/freeradius/3.0/radiusd.conf

```bash{3}
#
#  name of the running server.  See also the "-n" command-line option.
name = freeradius
```

## Client configuration

Switch to the root user and go to the FreeRADIUS directory.

```
server@ubuntu:~$ sudo -i
root@ubuntu:~$ cd /etc/freeradius/3.0/
```

Read the FreeRADIUS configuration file to make sure that we incluce the clients configuration file.

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

The next step is to add the clients or devices that will use this FreeRADIUS server to authenticate its users. We also need to define a secret which preferably should be 16 characters in length and randomized.

::: warning NOTE
Do not use special characters in the secret.
:::

```
root@ubuntu:~$ nano clients.conf
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

In this example we will create the client for Greenbone Vulnerability Manager (GVM). Open the clients configuration file and add the GVM server IP address along with the created secret.

::: tip INFO
To enable FreeRADIUS for GVM read more here.
:::

```
root@ubuntu:~$ nano clients.conf
```

```bash{7,8}
#client private-network-2 {
#       ipaddr          = 198.51.100.0/24
#       secret          = testing123-2
#}

client GVM {
  ipaddr = 192.168.0.2
  secret = SECRET
}
```

## Add users

Now that we are done with the client part, we will start adding users. We do that by editing the users file:

```
root@ubuntu:~$ nano users
```

```bash{7}
#
# Default for SLIP: dynamic IP address, SLIP mode.
#
DEFAULT Hint == "SLIP"
        Framed-Protocol = SLIP

freeradius Cleartext-Password := PASSWORD
```

admin is the username followed by the type of password we want and the password itself.

Once that is done, we start the FreeRADIUS server using the command below:

root@ubuntu:~$ exit
server@ubuntu:~$ sudo freeradius -CX

server@ubuntu:~$ sudo systemctl restart freeradius.service

```{2}
server@ubuntu:~$ sudo freeradius -CX
Configuration appears to be OK
```

## Install PrivacyIDEA FreeRADIUS plugin

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

Finally update the repository and proceed to install the PrivacyIDEA FreeRADIUS plugin.

```
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install privacyidea-radius
```

Once you've installed the PrivacyIDEA FreeRADIUS plugin you will see the new enabled mod `mods-perl-privacyidea` if you go to the location below.

```
server@ubuntu:~$ sudo -i
server@ubuntu:~$ cd /etc/freeradius/3.0/mods-enabled/
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

## Recommended reading <Badge text="affiliate links" type="warning"/>

* [FreeRADIUS Beginner's Guide, van der Walt Dirk, 2011](https://amzn.to/3aXFTP4)

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### NetworkRADIUS

[NetworkRADIUS](https://networkradius.com/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
