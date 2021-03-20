---
title: Two-factor authentication w/ FreeRADIUS and YubiKey
meta:
  - name: description
    content: The world's leading RADIUS server. The project includes a GPL AAA server, BSD licensed client and PAM and Apache modules. Full support is available from NetworkRADIUS.
noGlobalSocialShare: true
tags: [""]
---

# Two-factor authentication w/ FreeRADIUS and YubiKey <Badge text="In development" type="warning"/>

<TagLinks />

The world's leading RADIUS server. The project includes a GPL AAA server, BSD licensed client and PAM and Apache modules. Full support is available from [NetworkRADIUS](https://networkradius.com/).

[FreeRADIUS website](https://freeradius.org/) [GitHub](https://github.com/FreeRADIUS)  
[Yubico website](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) <Badge text="affiliate links" type="warning"/>

Setup and configuration has been tested on the following operating systems:

* Ubuntu- 18.04, 20.04
* FreeRADIUS- 3.0.16, 3.0.20

## Prerequisites

In this tutorial we use the [YubiKey 5 NFC from Yubico](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK). The reason we use it, besides the reasonable pricing, is that its not only compatible with FreeRADIUS but supports plenty services e.g. KeePassXC, GitHub, GitLab, Cloudflare, AWS, CentOS, Ubuntu etc.

* [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) <Badge text="affiliate links" type="warning"/>
* `build-essential`
* `libpam0g-dev`
* `libykclient3` ???
* `libykclient-dev`

## FreeRADIUS Installation

The reason we use FreeRADIUS as an account management system in this project is to use the Yubico FreeRADIUS module. We will be using a security key, [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK), from Yubico to enforce two-factor authentication (2FA) via PAM (Pluggable Authentication Module).


libykclient (ykclient.h, libykclient.so) and libpam-dev (security/pam_appl.h, libpam.so) libyubikey. a2x (asciidoc-base) https://developers.yubico.com/yubikey-personalization/Releases/ykpers-1.20.0.tar.gz, libusb-dev

git clone https://github.com/Yubico/yubico-c.git
cd yubico-c/

```bash
PASS: selftest
============================================================================
Testsuite summary for libyubikey 1.14
============================================================================
# TOTAL: 1
# PASS:  1
# SKIP:  0
# XFAIL: 0
# FAIL:  0
# XPASS: 0
# ERROR: 0
============================================================================
```


==================
All 5 tests passed
==================


```bash
============================================================================
Testsuite summary for yubikey-personalization 1.20.0
============================================================================
# TOTAL: 7
# PASS:  7
# SKIP:  0
# XFAIL: 0
# FAIL:  0
# XPASS: 0
# ERROR: 0
============================================================================
```

```
server@ubuntu:~$ sudo apt-get install freeradius
```

To check the current version of FreeRADIUS execute the command below.

```{1}
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

Go to the FreeRADIUS directory as root.

```
server@ubuntu:~$ sudo -i
root@ubuntu:~$ cd /etc/freeradius/3.0/
```

Read the FreeRADIUS configuration file to make sure that we incluce the clients configuration file for our services.

```
root@ubuntu:~$ nano clients.conf
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

The next step is to add the clients (devices or services) that will use this FreeRADIUS server to authenticate its users. We also need to define a secret which preferably should be 16 characters in length and randomized.

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

In this example we will create the client for Greenbone Vulnerability Manager (GVM). Open the clients configuration file and add the GVM server IP address along with a secret.

::: tip INFO
To enable FreeRADIUS for GVM read more here.
:::

Once we've checked so the clients configuration is included in the radius configuration lets add our first client.

```
root@ubuntu:~$ nano clients.conf
```

```bash{7,8}
#client example.org {
#       ipaddr          = radius.example.org
#       secret          = testing123
#}

client GVM {
        ipaddr          = 192.168.0.2
        secret          = SECRET
}
```

$ sudo add-apt-repository ppa:yubico/stable
$ sudo apt-get update
$ sudo apt-get install libpam-yubico


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

User Cleartext-Password := "PASSWORD"
```

Next make sure that your FreeRADIUS configuration file is ok. To do this execute the command below.

```
root@ubuntu:~$ freeradius -CX
Configuration appears to be OK
```

Once we made sure the configuration file is ok lets restart the FreeRADIUS server.

```
root@ubuntu:~$ exit
server@ubuntu:~$ sudo systemctl restart freeradius.service
```

## FreeRADIUS authentication test

## Install Yubico PAM module

First install required dependencies.

```
server@ubuntu:~$ sudo apt-get install build-essential
server@ubuntu:~$ sudo apt-get install autoconf libtool
```

Next download the latest version of the Yubico PAM module.

```
server@ubuntu:~$ wget https://github.com/Yubico/yubico-pam/archive/2.26.tar.gz
server@ubuntu:~$ tar -zxvf 2.26.tar.gz
server@ubuntu:~$ cd yubico-pam-2.26
server@ubuntu:~$ sudo autoreconf --install
```


sudo ln -s /usr/local/lib/security/pam_yubico.so /lib/x86_64-linux-gnu/security


Now insert your [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) security key and press the button and the public ID, for the specific YubiKey, will be printed directly to the command-line interface (you might need to hold it for some seconds).

```{1}
server@ubuntu:~$ envevtljjoootjiljltruyrdklffgadglgvlkfvtretyyg
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
* [Yubico Developers](https://developers.yubico.com/yubico-pam/)

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### NetworkRADIUS

NetworkRADIUS provide software packages for popular Linux distributions such as RedHat and Ubuntu. Using these packages will mean your systems can be up-to-date with the most recent release of FreeRADIUS, rather than having to wait for your operating system distribution to provide updates, or compiling from source.

[NetworkRADIUS](https://networkradius.com/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
