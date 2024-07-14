---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Libellux
titleTemplate: Up and Running
description: Install Greenbone Vulnerability Manager from source

hero:
  name: "Libellux"
  text: "Up and Running"
  tagline: Install open-source software from source to focus on Zero Trust Network principles, enhancing security for existing applications, and deploying tools for threat detection and prevention.
  image:
    src: /img/hero.svg
    alt: My logo
  actions:
    - theme: brand
      text: Get started
      link: /getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/libellux/Libellux-Up-and-Running

features:
  - icon:
      src: /img/greenbone.svg
    title: Greenbone Vulnerability Manager
    details: Build Greenbone Vulnerability Manager Community Edition from source
    link: /intrusion-detection/greenbone-vulnerability-manager
  - icon:
      src: /img/ossec.png
    title: OSSEC Host Intrustion Detection System
    details: Install OSSEC from source and manage agents and active response
    link: /intrusion-detection/ossec
  - icon:
      src: /img/clamav.png
    title: ClamAV Anti-virus Engine
    details: Install ClamAV Anti-virus Engine to function as a centralized server and read data from ClamAV clients
    link: /intrusion-detection/clamav
  - icon:
      src: /img/snort.png
    title: Snort Network Intrusion Detection
    details: Install Snort as a network-based intrusion detection system (NIDS)
    link: /intrusion-detection/snort
  - icon:
      src: /img/opensearch.svg
    title: OpenSearch
    details: Coming soon! Install OpenSearch and forward OSSEC alerts to its Dashboard for analysis
    link: /
---
