---
title: Two-factor authentication w/ privacyIDEA and YubiKey
meta:
  - name: description
    content: privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two factor authentication.
noGlobalSocialShare: true
tags: ["two-factor-authentication", "security", "access-control", "zero-trust-network"]
---

# Two-factor authentication w/ privacyIDEA and YubiKey

<TagLinks />

privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two-factor authentication.

[privacyIDEA website](https://www.privacyidea.org/) [GitHub](https://github.com/privacyidea/privacyidea)  
[Yubico website](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) <Badge text="affiliate links" type="warning"/>  

Setup and configuration has been tested on the following operating systems:

* Ubuntu 20.04
* privacyIDEA 3.0+
* [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK)

## Prerequisites

* [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) (optional)  
* [YubiKey Personalization Tool](https://www.yubico.com/support/download/yubikey-personalization-tools/) (optional)

## Configuration files

## Install community edition <Badge text="Rev 1" type="default"/>

We will use privacyIDEA and their FreeRADIUS plugin together with [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) (from Yubico) to enforce two-factor authentication and apply an role-based access control approach (RBAC). We will simplify the user accounting by fetching the users from the local `/etc/passwd` file and use it as the privacyIDEA resolver (instead of e.g. LDAP, SQL etc). To get an hands-on experience we will use the privacyIDEA authentication server to access the [Greenbone Vulnerability Manager's](../openvas/README.md) user interface.

::: tip INFO
This is the first revision for privacyIDEA. We will write more about the different modular options e.g. LDAP as resolver in future releases. If there's any particular configuration you would like us to cover feel free to create a new [Feature request](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose).
:::

To get started download the signed key.

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

Now we need to add the repository for the specific release (in this case Ubuntu 20.04).

```
server@ubuntu:~$ sudo add-apt-repository http://lancelot.netknights.it/community/focal/stable
server@ubuntu:~$ sudo apt-get update
```

::: tip INFO
If you prefer to use the nginx version you can install `apt-get privacyidea-nginx`
:::

Once we updated the package manager we can install PrivacyIDEA.

```
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install privacyidea-apache2
             _                    _______  _______
   ___  ____(_)  _____ _______ __/  _/ _ \/ __/ _ |
  / _ \/ __/ / |/ / _ `/ __/ // // // // / _// __ |
 / .__/_/ /_/|___/\_,_/\__/\_, /___/____/___/_/ |_|
/_/                       /___/

Running online
```

Let's create the administration account.

```
server@ubuntu:~$ sudo pi-manage admin add admin -e admin@localhost
Admin admin was registered successfully.
```

Once you've added the administrator account and followed the [firewall settings](#firewall-settings) you should be able to reach the web interface from `https://192.168.0.1` and login as the admin user with your password.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea_login.png')" alt="PrivacyIDEA login">

## privacyIDEA FreeRADIUS plugin

Now we will install the privacyIDEA freeRADIUS plugin, which we will be using to enable RADIUS for [Greenbone Vulnerability Manager](../openvas/README.md).

```
server@ubuntu:~$ sudo apt-get install privacyidea-radius
```

Next update the RADIUS secret. Do not leave the default for security reasons.

```
server@ubuntu:~$ sudo -i
root@ubuntu:~$ sudo nano /etc/freeradius/3.0/clients.conf
```

```bash{4}
#  The default secret below is only for testing, and should
#  not be used in any real environment.
#
secret = testing123
```

In the `clients.conf` we will also add our client, which in this case is our [Greenbone Vulnerability Manager](../openvas/README.md). Define the IP address of the [Greenbone Vulnerability Manager](../openvas/README.md) and set the secret.

```bash{6,7}
#client example.org {
#       ipaddr          = radius.example.org
#       secret          = testing123
#}
client GVM {
        ipaddr = 192.168.0.3
        secret = testing123
}
```

In the `sites-enabled` folder you will find the default authentication settings for privacyIDEA. Leave the default `perl-privacyidea` type.

```
root@ubuntu:~$ cd /etc/freeradius/3.0/sites-enabled/
root@ubuntu:~$ cat privacyidea
```

```{18}
server {
    authorize {
        #files
        perl-privacyidea
        if (ok || updated) {
            update control {
                Auth-Type := Perl
            }
        }
    }
    listen {
        type = auth
        ipaddr = *
        port = 0
    }
    authenticate {
        Auth-Type Perl {
            perl-privacyidea
        }
    }
}
```

The authentication type which is an enabled mod is located in the `mods-enabled` directory and you will see the `privacyidea_radius.pm` module file. Leave the default settings.

```
root@ubuntu:~$ cd /etc/freeradius/3.0/mods-enabled/
root@ubuntu:~$ cat mods-perl-privacyidea
```

```
perl perl-privacyidea {
    filename = /usr/share/privacyidea/freeradius/privacyidea_radius.pm
}
```

## Configure privacyIDEA

As we did configure the local freeRADIUS plugin and added [Greenbone Vulnerability Manager](../openvas/README.md) as a client we will now configure the privacyIDEA authentication server. The freeRADIUS plugin doesn't have to be installed on the same server as privacyIDEA. You can define this in the `rlm_perl.ini` file. In this tutorial we will leave the default localhost as our domain.

```
root@ubuntu:~$ exit
server@ubuntu:~$ sudo nano /etc/privacyidea/rlm_perl.ini
```

```{2}
[Default]
URL = https://localhost/validate/check
#REALM = someRealm
#RESCONF = someResolver
SSL_CHECK = false
#DEBUG = true
```

## Configure YubiKey for privacyIDEA

::: warning NOTE
privacyIDEA requires [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK).
:::

Start YubiKey Personalization Tool. Go to Settings. In the `Logging Settings` select `Flexible format` and add `{serial}, {secretKeyTxt}` variables in the form field.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/yubikey-settings.png')" alt="yubikey settings">

Next click the `OATH-HOTP` tab. Select which slot you wish to write your configuration to. Uncheck `OATH Token Identifier` and create the secret key by pressing the `Generate` button. Complete the build by clicking the `Write Configuration` button and save the CSV file.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/yubikey-hotp.png')" alt="yubikey hotp">

## Enroll token w/ YubiKey

Before we enroll the token with YubiKey we will create a resolver and realm and select the first user. Login to privacyIDEA at e.g. `https://192.168.0.1`. In the top menu click `Config`. Next click the `Users` tab and select `New passwdresolver`. Once you've gave the resolver a name click the `Save Resolver` button.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-resolver.png')" alt="privacyidea resolver">

Next we will create the realm. Click the tab `Realms`. Give the realm a name and check the passwdresolver we just created. Click `Create Realm`.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-realm.png')" alt="privacyidea realm">

Now lets select the first user. In the top menu click `Users`. Select the realm we just created in the left dropdown menu. This will show the list of all users from the `/etc/passwd` file. You can select any user from the list. We will go with the mail user for this example.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-users.png')" alt="privacyidea users">

Once you've decided which user you will connect to the YubiKey you can now enroll the first token. In the top menu click `Token` and select `Import Tokens` in the left menu. Select authentication method `OATH CSV` and realm. Click the `Select file and import` button and upload the file that you created earlier from the YubiKey configuration.

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-token.png')" alt="privacyidea enroll token">

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-token-2.png')" alt="privacyidea token">

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-assign-token.png')" alt="privacyidea assign token">

<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-test-token.png')" alt="privacyidea test token">

## Enable RADIUS for Greenbone Vulnerability Manager

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
server@ubuntu:~$ sudo ufw allow 443 comment "privacyIDEA"
```

## Command-line

Command|Description
-------|-----------
pi-manage admin|Add or edit existing admin account

## Troubleshooting

If you encounter any issue or having questions regarding privacyIDEA I recommend using their very helpful [community forum](https://community.privacyidea.org/).

## Recommended reading

* [privacyIDEA documentation](https://privacyidea.readthedocs.io/en/latest/)
* [privacyIDEA YouTube channel](https://www.youtube.com/c/privacyIDEA/videos)

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### NetKnights privacyIDEA Enterprise Edition

privacyIDEA is a modular solution for two factor authentication especially with OTP tokens. It is multi-tenency- and multi-instance-capable. Due to the modular structure privacyIDEA can be quickly and easily adapted and enhanced. E.g. adding new token types is as simple as writing a new lean python module. You do not need to modify your network for privacyIDEA, it does not write to existing databases or user stores. It only needs read access to your user stores like LDAP, Active Directory, SQL, SCIM-service or flat files. Existing workflows can be enhanced without the need to modify them. Using its simple REST like API it can be automated and smoothly be integrated.

[NetKnights](https://netknights.it/en/produkte/privacyidea/)

### YubiEnterprise  <Badge text="affiliate links" type="warning"/>

Yubico offers enterprise solutions and can easily procure and distribute YubiKey authentication solutions for employees at scale.

[Yubico](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK)  

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
