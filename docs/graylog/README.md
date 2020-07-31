---
title: Graylog Centralized Log Management | Libellux
tags: ["graylog", "logging", "log"]
---

# Graylog Centralized Log Management

<TagLinks />

Graylog is a leading centralized log management solution built to open standards for capturing, storing, and enabling real-time analysis of terabytes of machine data.

[Graylog website](https://www.graylog.org/) [GitHub](https://github.com/Graylog2/graylog2-server)

Setup and configuration has been tested on following OS with version:

* Ubuntu 16.04
* 3.0

## Configuration files

## Prerequisites

* mongodb
* apt-transport-https
* openjdk-8-jre-headless
* uuid-runtime
* pwgen

## Setup Graylog

First download and install all dependencies.

    $ sudo apt-get install apt-transport-https openjdk-8-jre-headless uuid-runtime pwgen

## MongoDB

    $Â sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
    $ echo "deb [ arch=amd64 ] https://ressh forge@85.229.113.176po.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
    $ sudo apt-get update
    $ sudo apt-get install -y mongodb-org

    $ sudo systemctl daemon-reload
    $ sudo systemctl enable mongod.service
    $ sudo systemctl restart mongod.service

## Elasticsearch

    $ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
    $ echo "deb https://artifacts.elastic.co/packages/oss-6.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-6.x.list
    $ sudo apt-get update && sudo apt-get install elasticsearch-oss

    $ sudo nano /etc/elasticsearch/elasticsearch.yml
    # ---------------------------------- Cluster -----------------------------------
    #
    # Use a descriptive name for your cluster:
    #
    cluster.name: graylog  
    action.auto_create_index: false

    $ sudo systemctl daemon-reload
    $ sudo systemctl enable elasticsearch.service
    $ sudo systemctl restart elasticsearch.service

    $ echo -n "Enter Password: " && head -1 </dev/stdin | tr -d '\n' | sha256sum | cut -d" " -f1
    Enter Password:

    $ sudo nano /etc/graylog/server/server.conf
    # You MUST set a secret to secure/pepper the stored user passwords here. Use at least 64 characters.
    # Generate one by using for example: pwgen -N 1 -s 96
    password_secret = PASSWORD

    # You MUST specify a hash password for the root user (which you only need to initially set up the
    # system and in case you lose connectivity to your authentication backend)
    # This password cannot be changed using the API or via the web interface. If you need to change it,
    # modify it in this file.
    # Create one by using for example: echo -n yourpassword | shasum -a 256
    # and put the resulting hash value into the following line
    root_password_sha2 = HASHED PASSWORD

Next download latest Graylog package and proceed with installation.

    $ wget https://packages.graylog2.org/repo/packages/graylog-3.0-repository_latest.deb
    $ sudo dpkg -i graylog-3.0-repository_latest.deb
    $ sudo apt-get update
    $ sudo apt-get install graylog-server
    $ sudo systemctl start graylog-server

## Graylog behind NGINX proxy

``` nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name graylog.example.com;

    location / {
        proxy_set_header Host $http_host;  
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Graylog-Server-URL https://$server_name/;
        proxy_pass       http://127.0.0.1:9000;
    }
```

## Send OSSEC logs to Graylog with CEF input


Download the latest plugin release: [Graylog2/graylog-plugin-cef](https://github.com/Graylog2/graylog-plugin-cef/releases).

    $ wget https://github.com/Graylog2/graylog-plugin-cef/archive/2.5.2.tar.gz
    $ tar -zxvf 2.5.2.tar.gz
    $ cd /graylog-plugin-cef-2.5.2
    $ sudo apt-get install maven
    $ sudo nvm package
    $ sudo mv /graylog-plugin-cef-2.5.2.jar /usr/share/graylog-server/plugin/
    $ sudo systemctl restart graylog-server.service

### Configuring OSSEC server

Set the server IP address of receiving Graylog server and the port specified for the CEF input. We set the severity level to 7 (optional).

    $ sudo nano /var/ossec/etc/ossec.conf
    <syslog_output>
        <server>192.168.0.12</server>
        <port>12000</port>
        <level>7</port>
        <format>cef</format>
    </syslog_output>

Enable OSSEC client syslog.

    $ sudo /var/ossec/bin/ossec-control enable client-syslog
    $ sudo /var/ossec/bin/ossec-control reload

### Firewall settings

Update the UFW firewall settings on Graylog server to allow incoming logs from OSSEC on specified UDP port.

    $ sudo ufw allow proto udp from [OSSEC LOCAL IP] to any port 12000 comment "Graylog: OSSEC CEF input"

### Encrypt rsyslog with SSL/TLS

Reference: [Encrypting Syslog Traffic with TLS (SSL)](https://www.rsyslog.com/doc/v8-stable/tutorials/tls_cert_summary.html)

### Create private key and self-signed CA certificate

    **First create the CA's private key**

    $ certtool --generate-privkey --outfile ca-key.pem --sec-param medium

    **Generate the CA certificate**

    $ certtool --generate-self-signed --load-privkey ca-key.pem --outfile ca.pem

    Generating a self signed certificate...
    Please enter the details of the certificate's distinguished name. Just press enter to ignore a field.
    Common name: graylog.example.com
    Organizational unit name: Libellux Systems Inc
    Organization name: Libellux Systems Inc
    Locality name: Stockholm
    State or province name: Stockholm
    Country name (2 chars): SE

    Activation/Expiration time.
    The certificate will expire in (days): 3650

    Extensions.
    Does the certificate belong to an authority? (y/N): y
    Will the certificate be used to sign other certificates? (y/N): y
    X.509 Certificate Information:
        Version: 3
        Serial Number (hex): 485a365e
        Validity:
            Not Before: Thu Jun 19 10:35:12 UTC 2008
            Not After: Sun Jun 17 10:35:25 UTC 2018
        Subject: C=US,O=SomeOrg,OU=SomeOU,L=Somewhere,ST=CA,CN=someName (not necessarily DNS!)
        Subject Public Key Algorithm: RSA
            Modulus (bits 2048):
                d9:9c:82:46:24:7f:34:8f:60:cf:05:77:71:82:61:66
                05:13:28:06:7a:70:41:bf:32:85:12:5c:25:a7:1a:5a
                28:11:02:1a:78:c1:da:34:ee:b4:7e:12:9b:81:24:70
                ff:e4:89:88:ca:05:30:0a:3f:d7:58:0b:38:24:a9:b7
                2e:a2:b6:8a:1d:60:53:2f:ec:e9:38:36:3b:9b:77:93
                5d:64:76:31:07:30:a5:31:0c:e2:ec:e3:8d:5d:13:01
                11:3d:0b:5e:3c:4a:32:d8:f3:b3:56:22:32:cb:de:7d
                64:9a:2b:91:d9:f0:0b:82:c1:29:d4:15:2c:41:0b:97
            Exponent:
                01:00:01
        Extensions:
            Basic Constraints (critical):
                Certificate Authority (CA): TRUE
            Subject Alternative Name (not critical):
                RFC822name: someone@example.net
            Key Usage (critical):
                Certificate signing.
            Subject Key Identifier (not critical):
                fbfe968d10a73ae5b70d7b434886c8f872997b89
    Other Information:
        Public Key Id:
            fbfe968d10a73ae5b70d7b434886c8f872997b89

    Is the above information ok? (y/N): y

    Signing certificate...

    $ chmod 400 ca-key.pem

    **Generate Graylog client certificate**

    $ certtool --generate-privkey --outfile graylog-key.pem --sec-param medium

    $Â certtool --generate-request --load-privkey graylog-key.pem --outfile request.pem

    Generating a PKCS #10 certificate request...
    Common name: log.libellux.com
    Organizational unit name: Graylog
    Organization name: Graylog
    Locality name: Stockholm
    State or province name: Stockholm
    Country name (2 chars): SE
    Does the certificate belong to an authority? (y/N): n
    Is this a TLS web client certificate? (y/N): y
    Is this a TLS web server certificate? (y/N): y
    Self signature: verified

    $ certtool --generate-certificate --load-request request.pem --outfile graylog-cert.pem --load-ca-certificate ca.pem --load-ca-privkey ca-key.pem

    Generating a signed certificate...

    Activation/Expiration time.
    The certificate will expire in (days): 1000
    Does the certificate belong to an authority? (y/N): n
    Is this a TLS web client certificate? (y/N): y
    Is this a TLS web server certificate? (y/N): y
    Enter a dnsName of the subject of the certificate: log.libellux.com


::: warning NOTE!
It seems to be an issue when adding the dnsName, however input it once then proceed leaving it blank and it should save the dnsName (verify it before submitting the information in later stage).
:::

    Subject Alternative Name (not critical):
    DNSname: **log.libellux.com**

    Enter a dnsName of the subject of the certificate:

    ...

    Is the above information ok? (y/N): y

    $ rm -f request.pem

   **Generate OSSEC client certificate**

Redo the procedure when generating the Graylog client certificate but with OSSEC information.

   $ certtool --generate-privkey --outfile ossec-key.pem --sec-param medium
   $ certtool --generate-request --load-privkey ossec-key.pem --outfile request.pem
   $ certtool --generate-certificate --load-request request.pem --outfile ossec-cert.pem --load-ca-certificate ca.pem --load-ca-privkey ca-key.pem

   **Distribute certificates files**

Provide Graylog and OSSEC machine with:

1. Copy of /etc/rsyslog.d/ca.pem
2. /etc/rsyslog.d/ossec-cert.pem
3. /etc/rsyslog.d/ossec-key.pem

::: warning NOTE
Set each of the file to read-only (chmod 400) and ensure that no user except root can access them.
:::


### Set up Graylog to only accept messages via TLS


Now lets set up Graylog as the central log server and only accept messages via TLS protected tcp syslog from those clients that are explicity permitted to send to it.

    $ sudo apt-get update
    $ sudo apt-get install rsyslog-gnutls
    $ sudo nano /etc/rsyslog.conf

    # make gtls driver the default
    $DefaultNetstreamDriver gtls

    # certificate files
    $DefaultNetstreamDriverCAFile /etc/rsyslog.d/ca.pem
    $DefaultNetstreamDriverCertFile /etc/rsyslog.d/graylog-cert.pem
    $DefaultNetstreamDriverKeyFile /etc/rsyslog.d/graylog-key.pem

    # provides TCP syslog reception with encryption
    module(load="imtcp" StreamDriver.Name="gtls" StreamDriver.Mode="1" StreamDriver.AuthMode="anon")
    input(type="imtcp" port="10514" )

    $ sudo systemctl restart rsyslog.service


## Upgrading

Download the latest package and run.

    $ wget https://packages.graylog2.org/repo/packages/graylog-3.0-repository_latest.deb
    $ sudo dpkg -i graylog-3.0-repository_latest.deb
    $ sudo apt-get update
    $ sudo apt-get install graylog-server

    Configuration file '/etc/graylog/server/server.conf'
    ==> Modified (by you or by a script) since installation.
    ==> Package distributor has shipped an updated version.
    What would you like to do about it ?  Your options are:
        Y or I  : install the package maintainer's version
        N or O  : keep your currently-installed version
        D     : show the differences between the versions
        Z     : start a shell to examine the situation
    The default action is to keep your current version.
    *** server.conf (Y/I/N/O/D/Z) [default=N] ?

::: warning NOTE
We wont overwrite our server.conf - however, make sure that there's no new paramaters updated parameters in latest release.
:::

## Troubleshooting

Using certool:

    rsyslogd-2083: gnutls returned error on handshake: An unexpected TLS packet was received
