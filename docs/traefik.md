---
title: Traefik
description: Traefik is an open-source application proxy
---

# Traefik

<a href='https://ko-fi.com/B0B31BJU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Install

::: info Supported distributions:

- Ubuntu 24.04.3 (Noble Numbat)
- Debian 13.2.0 (Trixie) :::

## Prerequisites

::: code-group

```shellsession [Ubuntu/Debian]
curl -L -O https://github.com/traefik/traefik/releases/download/v3.6.5/traefik_v3.6.5_linux_amd64.tar.gz
tar xzf traefik_v3.6.5_linux_amd64.tar.gz
sudo mv traefik /usr/local/bin/
sudo chmod +x /usr/local/bin/traefik
```

:::

::: code-group

```shellsession [Ubuntu/Debian]
sudo useradd --system --no-create-home --shell /usr/sbin/nologin traefik
sudo mkdir -p /etc/traefik /var/log/traefik /var/lib/traefik/acme
sudo chown -R traefik:traefik /etc/traefik /var/log/traefik /var/lib/traefik
```

:::

sudo nano /etc/traefik/traefik.yml

```yaml
# /etc/traefik/traefik.yml
log:
  level: INFO
  filePath: "/var/log/traefik/traefik.log"

entryPoints:
  web:
    address: ":80"
  websecure:
    address: ":443"

certificatesResolvers:
  letsencrypt:
    acme:
      email: your-email@example.com
      storage: /var/lib/traefik/acme/acme.json
      caServer: https://acme-v02.api.letsencrypt.org/directory
      httpChallenge:
        entryPoint: web
```

sudo mkdir -p /etc/traefik/dynamic sudo chown -R traefik:traefik
/etc/traefik/dynamic

sudo setcap 'cap_net_bind_service=+ep' /usr/local/bin/traefik

sudo nano /etc/systemd/system/traefik.service

```shellsession
[Unit]
After=network.target
Description=Traefik application proxy
StartLimitBurst=5
StartLimitIntervalSec=86400
Wants=network-online.target

[Service]
User=traefik
Group=traefik
AmbientCapabilities=cap_net_bind_service
CapabilityBoundingSet=cap_net_bind_service
ExecStart=/usr/local/bin/traefik --configFile=/etc/traefik/traefik.yml
LimitNOFILE=1048576
LimitNPROC=64
NoNewPrivileges=true
PrivateDevices=true
PrivateTmp=true
ProtectHome=true
ProtectSystem=full
ReadWritePaths=/var/lib/traefik
Restart=on-failure
RuntimeDirectory=traefik
Type=simple
WorkingDirectory=/var/lib/traefik

[Install]
WantedBy=multi-user.target
```

sudo systemctl daemon-reload sudo systemctl enable --now traefik sudo systemctl
status traefik

<a target="_blank" class="dark-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
<a target="_blank" class="light-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/light.png" /></a>
