---
title: M/Monit System Monitoring
meta:
  - name: description
    content: Monit is a small popular Open Source utility for managing and monitoring Unix systems. M/Monit builds on Monit's capabilities and provides monitoring and management of all your Monit enabled hosts via a modern, clean and well designed user interface which also works on mobile devices.
noGlobalSocialShare: true
tags: ["monitoring", "automation"]
---

# M/Monit System Monitoring

<TagLinks />

Monit is a small popular Open Source utility for managing and monitoring Unix systems. M/Monit builds on Monit's capabilities and provides monitoring and management of all your Monit enabled hosts via a modern, clean and well designed user interface which also works on mobile devices.

[M/Monit website](https://mmonit.com/) [Monit website](https://mmonit.com/monit/) [Git](https://bitbucket.org/tildeslash/monit/src/master/)

Setup and configuration has been tested on following OS with version:

### M/Monit
* Ubuntu- 16.04, 18.04, 20.04
* 3.6.0 -> 3.7.4

### Monit
* Ubuntu- 16.04, 18.04, 20.04
* 5.16.0 -> 5.27.0

::: warning NOTE
M/Monit is a non-free software to montior and manage all Monit enabled hosts. 30 days free trial.
:::

## Configuration files

* [server.xml](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/mmonit/config/server.xml)

## Prerequisites

Dependancies when building Monit from source. 

* `zlib1g-dev`
* `libssl-dev`

## M/Monit Installation

For additional information see reference [M/Monit documentation](https://mmonit.com/documentation/mmonit_manual.pdf).

To download the latest version of M/Monit visit the [official website](https://mmonit.com/download/).

```
server@ubuntu:~$ cd /opt/
server@ubuntu:~$ wget https://mmonit.com/dist/mmonit-3.7.4_1-linux-x64.tar.gz
```

Proceed to unpack the downloaded tar gzip package.

```
server@ubuntu:~$ tar -zxvf mmonit-3.7.4_1-linux-x64.tar.gz
server@ubuntu:~$ rm mmonit-3.7.4_1-linux-x64.tar.gz
server@ubuntu:~$ mv /opt/mmonit-3.7.3-linux-x64 /opt/mmonit
```

Now you can visit M/Monit at `http://192.168.0.1:8080` if executing the command `sudo ./mmonit` from `/opt/mmonit/bin/` (Dont forget to check [Firewall settings](#firewall-settings)). However, we strongly recommend to run M/Monit with TLS support.

### Enable TLS

To enable M/Monit to run with TLS comment out the port 8080 connector and uncomment the SSL/TLS connector to listen on port 8443. Proceed to update the host section and define the server IP address along with the certificate path.

```
server@ubuntu:~$ nano /opt/mmonit/conf/server.xml
```

```xml{5,11}
        <!--
        <Connector address="*" port="8080" processors="10" />
        -->
        <!-- Define a SSL/TLS HTTP/1.1 Connector on port 8443 -->
        <Connector scheme="https" address="*" port="8443" processors="10" secure="true" />

        <!--
            Define the default virtual host which name must match the
            Engine defaultHost attribute
        -->
        <Host name="localhost" appBase="." address="192.168.0.1" certificate="conf/mmonit.pem">
```

### Add M/Monit to systemd

To simplify the process to start and stop M/Monit add it to the systemd. First create a mmonit.service file, past the below and save.

```
server@ubuntu:~$ sudo nano /etc/systemd/system/mmonit.service
```

```bash
[Unit]
Description = Easy, proactive monitoring of Unix systems, network and cloud services
After = network.target
Documentation= https://mmonit.com/documentation/ 

[Service]
Type=simple
KillMode=process
ExecStart = /opt/mmonit/bin/mmonit -i
ExecStop = /opt/mmonit/bin/mmonit stop
PIDFile = /opt/mmonit/logs/mmonit.pid
Restart = on-abnormal

[Install]
WantedBy = multi-user.target
```

Next reload the systemd daemon, enable our newly configured M/Monit service and then start it. 

```
server@ubuntu:~$ sudo systemctl daemon-reload
server@ubuntu:~$ sudo systemctl enable mmonit
server@ubuntu:~$ sudo systemctl start mmonit
```

Go to your browser and visit `https://192.168.0.1:8443`. Login using the default credentials user `admin` with the default password `swordfish`.

<img class="zoom-custom-imgs" :src="('/img/mmonit/mmonit_login.png')" alt="mmonit login">

Click the **Admin** tab select **Users** and edit or add a new user then delete the Administrator account to overwrite the default credentials.

## Monit Installation

To install the latest version of Monit as an agent for M/Monit enter the commands below.

```
client@ubuntu:~$ wget https://bitbucket.org/tildeslash/monit/downloads/monit-5.27.0.tar.gz
client@ubuntu:~$ tar -zxvf monit-5.27.0.tar.gz
client@ubuntu:~$ cd monit-5.27.0/
client@ubuntu:~$ sudo ./configure --without-pam
client@ubuntu:~$ sudo make && sudo make install
client@ubuntu:~$ sudo cp monitrc /usr/local/etc/
client@ubuntu:~$ cd /usr/local/etc
client@ubuntu:~$ sudo cp monitrc monitrc_bak
client@ubuntu:~$ sudo nano monitrc
client@ubuntu:~$ cd /usr/local/
client@ubuntu:~$ sudo ./bin/monit
```

## Configuration

```
client@ubuntu:~$ sudo openssl req -new -x509 -days 365 -nodes -out /etc/monit/monit.pem -keyout /etc/monit/monit.pem
client@ubuntu:~$ sudo chmod 700 /etc/monit/monit.pem
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

::: tip INFO
For non SSL/TLS allow port 8080.
:::

```console
server@ubuntu:~$ sudo ufw allow 8443 comment "M/Monit"
```

```console
client@ubuntu:~$ sudo ufw allow from 192.168.0.1 to any port 2812 comment "M/Monit"
```

## M/Monit behind NGINX Proxy

```nginx
location / {
    proxy_set_header   Host             $http_host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   REMOTE_HOST      $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
    proxy_set_header   X-FORWARDED-PROTOCOL $scheme;
    rewrite ^/(.*) /$1 break;
    proxy_pass http://127.0.0.1:8080;
    proxy_redirect http://192.168.0.1:8080 /;
    proxy_cookie_path / /;
}
```

## Slack notifications

```ruby
ruby -e "
    require 'net/https'
    require 'json'
    uri = URI.parse('https://hooks.slack.com/services/XXXXXXXXX/YYYYYYYYY/ZZZZZZZZZZZZZZZZZZZZZZZZ')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    request = Net::HTTP::Post.new(uri.request_uri, {'Content-Type' => 'application/json'})
    request.body = { \"channel\"  => \"#general\", \"username\" => \"mmonit\", \"text\" => \"[#{ENV['MONIT_HOST']}] #{ENV['MONIT_SERVICE']} - #{ENV['MONIT_DESCRIPTION']}\" }.to_json
    response = http.request(request)
    puts response.body
"
```

If you do not use M/Monit you can also configure the individual Monit instance to create Slack notifications. Read more at [Tideslash Wiki](https://mmonit.com/wiki/MMonit/SlackNotification).

## Upgrading

Upgrading M/Monit without overwriting configuration files and databases can be done using the built-in upgrade command.

```
$ cd /usr/local/
$ wget https://mmonit.com/dist/mmonit-3.7.0-linux-x64.tar.gz
$ tar -zxvf mmonit-3.7.0-linux-x64.tar.gz
$ cd /usr/local/mmonit-3.6.2/bin/
$ sudo ./mmonit stop
$ /usr/local/mmonit-3.7.0/upgrade/upgrade -p /usr/local/mmonit-3.6.2/
$ cd /usr/local/mmonit-3.7.0/bin/
$ sudo ./mmonit
```

## Command-line

## Troubleshooting

[OpenVAS](https://www.libellux.com/openvas/) reports monit to be using weak ciphers accepted through TLS1.0,1.1,1.2 protocol. Add following lines within the ssl section.

```nginx
with ssl {
    pemfile:
    version: TLSv12
    ciphers: "ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384"
}
```

Resolving the issue if libcrypto.so.1.0.x been removed using the auto remove/clean command, is to reinstall the libssl1.0.x and libssl-dev package.

```
server@ubuntu:~$ sudo apt-get install libssl1.0.x libssl-dev --reinstall
```

If package you get configure error: libz not found, solve that by installing the zlib1g-dev package.

```
server@ubuntu:~$ sudo apt-get install zlib1g-dev
```

In case you get the configure error: Couldn’t find your SSL header files. Proceed with install the libssl-dev package.

```
server@ubuntu:~$ sudo apt-get install libssl-dev
```

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### M/Monit Enterprise

The M/Monit Enterprise License is a perpetual license and allows you to install and run an unlimited number of M/Monit instances for monitoring an unlimited number of hosts in-house. 

[M/Monit](https://mmonit.com/shop/)

<social-share />
