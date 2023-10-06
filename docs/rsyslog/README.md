---
lang: en-US
title: Rsyslog Syslog Processing
head:
  - - link
    - rel: canonical
      href: https://wwww.libellux.com/rsyslog/
---

# Rsyslog Syslog Processing

In this example the central rsyslog server will receive encrypted TCP trafic from remote server(s) and upload the syslog data locally through UDP to our Graylog server.

Setup and configuration has been tested on following OS with version:

* Ubuntu- 16.04, Ubuntu 18.04
* Rsyslog- 8.16.0, 8.32.0

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

## Configuration files

## Prerequisites

* OpenSSL

## Setup Rsyslog

### Generate CA key and certificate

::: tip
See script for self-signed SSL certificates 
:::

    openssl genrsa -out ca.key 2048
    openssl req -x509 -new -nodes -key ca.key -sha256 -days 1024 -out ca.pem

### Create server certificate

    openssl genrsa -out server.key 2048
    openssl req -new -key server.key -out server.csr

### Sign server certificate

    openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out server.pem -days 1024 -sha256

### Create client certificate

    openssl genrsa -out client.key 2048
    openssl req -new -key client.key -out client.csr

### Sign client certificate

    openssl x509 -req -in client.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out client.pem -days 1024 -sha256

### Setup TCP listener on Rsyslog server

We will retrieve our syslogs listening to TCP port 10514 and require x509 encryption certificate. We will also forward all the logs locally to our Graylog server on UDP port 10514.

    $ sudo nano /etc/rsyslog.conf
    ...
    $ModLoad imtcp # TCP listener

    # make gtls driver the default
    $DefaultNetstreamDriver gtls

    # certificate files
    $DefaultNetstreamDriverCAFile /home/user/certs/ca.pem
    $DefaultNetstreamDriverCertFile /home/user/certs/server.pem
    $DefaultNetstreamDriverKeyFile /home/user/certs/server.key

    $InputTCPServerStreamDriverAuthMode x509/name
    $InputTCPServerStreamDriverPermittedPeer *.libellux.com
    $InputTCPServerStreamDriverMode 1 # run driver in TLS-only mode
    $InputTCPServerRun 10514 # start up listener at port 10514

    *.* @127.0.0.1:10514 # forward everything to graylog

### Setup TCP forwarding on Rsyslog client

    # make gtls driver the default
    $DefaultNetstreamDriver gtls

    # certificate files
    $DefaultNetstreamDriverCAFile /home/user/certs/ca.pem
    $DefaultNetstreamDriverCertFile /home/user/certs/client.pem
    $DefaultNetstreamDriverKeyFile /home/user/certs/client.key

    $ActionSendStreamDriverAuthMode x509/name
    $ActionSendStreamDriverPermittedPeer *.libellux.com
    $ActionSendStreamDriverMode 1 # run driver in TLS-only mode
    *.* @@[rsyslog-server IP]:10514 # forward everything to remote server

## Firewall settings

    $ sudo ufw allow proto tcp from [remote IP] to any port 10514 comment "Client X syslog"

## Check if TCP listener is encrypted

To generate a syslog message on client simply type from cli `$ logger test`

    $ sudo tcpdump -i eth1 port 10514 -vv -x

## Generate Self-Signed SSL Certificates for Rsyslog

Forked from [kingkool68/generate-ssl-certs-for-local-development](https://github.com/kingkool68/generate-ssl-certs-for-local-development/), and modified to be used for encrypting communication between central rsyslog server and its clients.

1. Edit `options.conf` and `ca-options.conf` to match your setup.
2. Run the script `sudo ./generate-ssl.sh client.libellux.com`

The script creates a self-signed certificate authority and signs your generated certificate(s). Browse the `certs/` folder and copy the new client folder to your remote machine.

```
# options.conf
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names

[alt_names]
# Local hosts
DNS.1 = localhost
DNS.2 = 127.0.0.1
DNS.3 = ::1

# List your domain names here
DNS.4 = local.dev
# DNS.5 = another-domain.dev
# DNS.6 = yet-another-domain.dev
```

```
#ca-options.conf
[req]
prompt = no
distinguished_name = req_distinguished_name

[req_distinguished_name]
C = SE
ST = Kalmar
L = Kalmar
O = Libellux Systems, Inc.
OU = Libellux Systems, Inc.
# emailAddress = info@example.com
CN = client.libellux.com
```

``` bash
#!/bin/bash
#
# Forked from https://github.com/kingkool68/generate-ssl-certs-for-local-development
# Modified to use for local rsyslog server
#
# Fredrik Hilmersson <fredrik@libellux.com>
#

# Make sure this script is run as sudo
if [ "$EUID" -ne 0 ] ; then
        echo "Insufficient privileges!"
    exit
fi

function command_exists () {
    type "$1" &> /dev/null ;
}

# Make sure openssl exists
if ! command_exists openssl ; then
        echo "Missing dependency: OpenSSL"
    exit
fi

name=$1
if [ -z "$name" ]; then
        echo "Missing argument!"
        echo "Try ./generate-ssl.sh client.libellux.com"
    exit
fi

## Make sure the certs/ directory exists
if [ ! -d "certs" ]; then
    mkdir certs/
fi

## Make sure the ~/certs/tmp/ directory exists
if [ ! -d "tmp" ]; then
    mkdir tmp/
fi

# Cleanup files from previous runs
rm tmp/* &> /dev/null

# Remove any lines that start with CN
sed -i '/^CN/d' ca-options.conf
# Modify the conf file to set CN = ${name}
echo "CN = ${name}" >> ca-options.conf

if [ ! -e "certs/ca.key" ] || [ ! -e "certs/ca.pem" ]; then
    # Remove remaining ca file(s)
    rm certs/ca.* &> /dev/null

    # Generate Certificate Authority
    openssl genrsa -out "certs/ca.key" 2048
    openssl req -x509 -config ca-options.conf -new -nodes -key "certs/ca.key" -sha256 -days 1024 -out "certs/ca.pem"
fi

if [ ! -d "certs/${name}" ]; then
    mkdir certs/${name}
fi

# Generate CA-signed Certificate
openssl genrsa -out "certs/${name}/${name}.key" 2048
openssl req -new -config ca-options.conf -key "certs/${name}/${name}.key" -out "tmp/${name}.csr"

# Generate SSL Certificate
openssl x509 -req -in "tmp/${name}.csr" -CA "certs/ca.pem" -CAkey "certs/ca.key" -CAcreateserial -out "certs/${name}/${name}.crt" -days 1024 -sha256 -extfile options.conf

# Create CA certificate copy
cp certs/ca.pem certs/${name}/

# Set user permissions
chmod 400 certs/ca.key
chmod 400 certs/${name}/${name}.key
chown syslog:syslog certs/${name}/${name}.key

# Cleanup stray file
rm certs/*.srl &> /dev/null

echo "Complete"
```
