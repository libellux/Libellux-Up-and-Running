---
title: Universal 2nd Factor with YubiKey
meta:
  - name: description
    content: Universal 2nd Factor (U2F) is an open standard that strengthens and simplifies two-factor authentication (2FA) using specialized Universal Serial Bus (USB) or near-field communication (NFC) devices based on similar security technology found in smart cards. While initially developed by Google and Yubico, with contribution from NXP Semiconductors, the standard is now hosted by the FIDO Alliance.
noGlobalSocialShare: true
tags: [""]
---

# Universal 2nd Factor with YubiKey <Badge text="In development" type="warning"/>

<TagLinks />

Universal 2nd Factor (U2F) is an open standard that strengthens and simplifies two-factor authentication (2FA) using specialized Universal Serial Bus (USB) or near-field communication (NFC) devices based on similar security technology found in smart cards. While initially developed by Google and Yubico, with contribution from NXP Semiconductors, the standard is now hosted by the FIDO Alliance.

[Yubico website](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) <Badge text="affiliate links" type="warning"/>

Setup and configuration has been tested on the following operating systems:

* Ubuntu 20.04
* [KeePassXC](https://keepassxc.org/)

Here you can see all the services and software that's directly supported by [YubiKey](https://www.yubico.com/works-with-yubikey/catalog/).

## Prerequisites

* [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK)

## Security Key by Yubico <Badge text="affiliate links" type="warning"/>

In this tutorial we use the [YubiKey 5 NFC from Yubico](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK). The reason we use it, besides the reasonable pricing, is that its not only compatible with PrivacyIDEA (authentication server) but supports plenty services e.g. KeePassXC, GitHub, GitLab, Cloudflare, AWS, CentOS, Ubuntu etc.

## KeePassXC Cross-platform Password Manager

KeePassXC is a cross-platform password manager (Windows, MacOS and Linux) which support YubiKey in HMAC (hash-based authentication) mode. In this tutorial we use two [YubiKey 5 NFC](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK) and program it to have the same secret, in case of losing our primary key.

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

Yubico offers enterprise solutions and can easily procure and distribute YubiKey authentication solutions for employees at scale.

[Yubico](https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
