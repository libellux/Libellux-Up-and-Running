---
title: WireGuard Secure VPN Tunnel
meta:
  - name: description
    content: WireGuard fast, modern, secure VPN tunnel
noGlobalSocialShare: true
tags: ["security", "virtual-private-network", "zero-trust-network"]
---

# WireGuard Secure VPN Tunnel

<TagLinks />

WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable.

[WireGuard website](https://www.wireguard.com/) [Git](https://www.wireguard.com/repositories/)

Setup and configuration has been tested on following OS with version:

* Ubuntu- 18.04, 20.04
* WireGuard 1.0.2~

## Configuration files

* [wg0.conf](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_server) (server)

## Prerequisites

* `net-tools` (optional)
* `wireshark` (optional)

## Installation

In this example we will be configuring WireGuard on our servers to communicate securely over an encrypted virtual private network (VPN). This approach can be useful to secure communication in both cloud environments or any non-trusted network. We will set up one so called master server (`192.168.8.1/24`) along with two client servers (`192.168.8.2/24`, `192.168.8.3/24`).

::: tip NOTE
WireGuard is now included in the Linux kernel since the 5.6 release.
:::

## Master server

First install WireGuard.

```
server@ubuntu:~$ sudo apt-get install wireguard
```

Next generate a private and public key for the WireGuard server.

```{3}
server@ubuntu:~$ sudo -i
root@ubuntu:~$ cd /etc/wireguard/
root@ubuntu:~$ wg genkey | tee private.key | wg pubkey > public.key
root@ubuntu:~$ chmod 077 private.key public.key
```

Copy the private key and create the WireGuard configuration file (wg0.conf).

```{2}
root@ubuntu:~$ cat private.key
INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=
root@ubuntu:~$ nano wg0.conf
```

In the configuration file proceed and define the subnet, port and private key for the VPN network.

```bash{2,3,4}
[Interface]
Address = 192.168.8.1/24
ListenPort = 51820
PrivateKey = INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=

[Peer]
PublicKey = 
AllowedIPs = 192.168.8.2/32

[Peer]
PublicKey = 
AllowedIPs = 192.168.8.3/32
```

Proceed to enable WireGuard on boot and start it.

```
root@ubuntu:~$ exit
server@ubuntu:~$ sudo systemctl enable wg-quick@wg0
server@ubuntu:~$ sudo systemctl start wg-quick@wg0
```

Next check if the interface is up using `ifconfig` (requires net-tools) or `ip`.

```{1,2,9,10}
server@ubuntu:~$ sudo ifconfig -a wg0
wg0: flags=209<UP,POINTOPOINT,RUNNING,NOARP>  mtu 1420
        inet 192.168.8.1  netmask 255.255.255.0  destination 192.168.8.1
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 1000  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
server@ubuntu:~$ sudo ip a show wg0
3: wg0: <POINTOPOINT,NOARP,UP,LOWER_UP> mtu 1420 qdisc noqueue state UNKNOWN group default qlen 1000
    link/none
    inet 192.168.8.1/24 scope global wg0
       valid_lft forever preferred_lft forever
```

## Client servers

```
client@ubuntu:~$ sudo apt-get install wireguard
```

```
client@ubuntu:~$ sudo -i
root@ubuntu:~$ cd /etc/wireguard/
root@ubuntu:~$ wg genkey | tee private.key | wg pubkey > public.key
root@ubuntu:~$ chmod 077 private.key public.key
```

```{2}
root@ubuntu:~$ cat private.key
INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=
root@ubuntu:~$ nano wg0.conf
```

```bash
[Interface]
Address = 192.168.8.2/24
PrivateKey = INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=

[Peer]
PublicKey = 
AllowedIPs = 192.168.8.0/24
Endpoint = 192.168.0.1:51820
PersistentKeepalive = 15
```

```
root@ubuntu:~$ exit
server@ubuntu:~$ sudo systemctl enable wg-quick@wg0
server@ubuntu:~$ sudo systemctl start wg-quick@wg0
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
server@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.2 to any port 51820 comment "WireGuard client 1"
server@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.3 to any port 51820 comment "WireGuard client 2"
```

## Confirm connection

We will use Wireshark to confirm that our connection between the master server and client servers is encrypted.

## Recommended services <Badge text="non-sponsored" type="default"/>

### Mullvad VPN <Badge text="non-affiliate" type="default"/>

Mullvad is a VPN service that helps keep your online activity, identity, and location private. They keep no activity logs, do not ask for personal information, and even encourage anonymous payments via cash or one of the cryptocurrencies they accept. Your IP address is replaced by one of theirs, ensuring that your device's activity and location are not linked to you. 

[Mullvad VPN](https://mullvad.net/en/)

What we like about [Mullvad VPN](https://mullvad.net/en/) is how easy it is to select which VPN protocol you prefer to use e.g. WireGuard and set custom DNS servers along with a very resonable price of only 5 EUR per month. It's also a great product and probably cheaper and faster than an internet provider where you'll still have to pay for your data.

<img class="zoom-custom-imgs" :src="('/img/wireguard/mullvad.png')" alt="mullvad">

<social-share />
