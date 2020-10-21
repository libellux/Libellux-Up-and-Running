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
* 3.6.0 -> 3.7.5

### Monit
* Ubuntu- 16.04, 18.04, 20.04
* 5.16.0 -> 5.27.0

::: warning NOTE
M/Monit is a non-free software to montior and manage all Monit enabled hosts. 30 days free trial.
:::

## Configuration files

* [server.xml](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/mmonit/config/server.xml)
* [monitrc](https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/mmonit/config/monitrc)

## Prerequisites

Dependancies when building or upgrading Monit from source. 

* `zlib1g-dev`
* `libssl-dev`
* `libpam0g-dev`
* `ruby-full` (optional)

## M/Monit Installation

For additional information see reference [M/Monit documentation](https://mmonit.com/documentation/mmonit_manual.pdf).

To download the latest version of M/Monit visit the [official website](https://mmonit.com/download/). Continue to extract the file and move it to `/usr/local/mmonit/`.

```
server@ubuntu:~$ wget https://mmonit.com/dist/mmonit-3.7.5-linux-x64.tar.gz
server@ubuntu:~$ tar -zxvf mmonit-3.7.5-linux-x64.tar.gz
server@ubuntu:~$ rm mmonit-3.7.5-linux-x64.tar.gz
server@ubuntu:~$ sudo mv mmonit-3.7.5/ /usr/local/mmonit/
```

Now you can visit M/Monit at `http://192.168.0.1:8080` if executing the command `sudo ./mmonit` from `/usr/local/mmonit-3.7.5/bin/` (Dont forget to check [Firewall settings](#firewall-settings)). However, we strongly recommend to run M/Monit with TLS support.

### Enable TLS

To enable M/Monit to run with TLS comment out the port 8080 connector and uncomment the SSL/TLS connector to listen on port 8443. Proceed to update the host section and define the server IP address along with the certificate path.

```
server@ubuntu:~$ sudo nano /usr/local/mmonit/conf/server.xml
```

```xml{6,12}
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

To simplify the process to start and stop M/Monit add it to the systemd. First create a mmonit.service file, paste the below and save.

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
ExecStart = /usr/local/mmonit/bin/mmonit -i
ExecStop = /usr/local/mmonit/bin/mmonit stop
PIDFile = /usr/local/mmonit/logs/mmonit.pid
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

Go to your browser and visit `https://192.168.0.1:8443`. Login using the default credentials user `admin` with the default password `swordfish`. Click the **Admin** tab select **Users** and edit (default admin accout) or add a new user account and grant administration privileges to overwrite the default credentials.

<img class="zoom-custom-imgs" :src="('/img/mmonit/mmonit_login.png')" alt="mmonit login">

## Monit Installation

First install the PAM development package to enable Pluggable Authentication Modules (PAM) support.

```
client@ubuntu:~$ sudo apt-get install libpam0g-dev
```

Next install the latest version of Monit as an agent for M/Monit enter the commands below.

```
client@ubuntu:~$ wget https://bitbucket.org/tildeslash/monit/downloads/monit-5.27.0.tar.gz
client@ubuntu:~$ tar -zxvf monit-5.27.0.tar.gz
client@ubuntu:~$ cd monit-5.27.0/
client@ubuntu:~$ sudo ./configure
client@ubuntu:~$ sudo make && sudo make install
```

### TLS/SSL settings

Create a TLS certificate for Monit to enable secure transmission to M/Monit.

```
client@ubuntu:~$ sudo openssl req -new -newkey rsa:2048 -x509 -days 730 -nodes -out /etc/monit/monit.pem -keyout /etc/monit/monit.pem
client@ubuntu:~$ sudo chmod 700 /etc/monit/monit.pem
```

## Configuration

Copy the default Monit configuration file and create an backup.

```
client@ubuntu:~$ sudo cp monitrc /usr/local/etc/
client@ubuntu:~$ cd /usr/local/etc
client@ubuntu:~$ sudo cp monitrc monitrc_bak
```

Next edit the Monit configuration file to enable communication with M/Monit over TLS/SSL.

```
client@ubuntu:~$ sudo nano monitrc
```

```bash
## Set global SSL options (just most common options showed, see manual for
## full list).
#
set ssl {
     verify: enable
     selfsigned: allow
}

set mmonit https://USERNAME:PASSWORD@192.168.0.1:8443/collector
#     # with timeout 30 seconds              # Default timeout is 5 seconds
#     # and register without credentials     # Don't register credentials

#
set httpd port 2812 and
    #use address localhost      # only accept connection from localhost (drop if you use M/Monit)
    allow localhost             # allow localhost to connect to the server and
    allow 192.168.0.1           # allow M/Monit
    allow USERNAME:PASSWORD     # require user 'admin' with password 'monit'
    with ssl {                  # enable SSL/TLS and set path to server certificate
        pemfile: /etc/monit/monit.pem
        version: TLSv12
        ciphers: "ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384"
    }
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

::: tip INFO
For non SSL/TLS allow port 8080.
:::

```console
server@ubuntu:~$ sudo ufw allow 8443 comment "Monit"
```

```console
client@ubuntu:~$ sudo ufw allow from 192.168.0.1 to any port 2812 comment "M/Monit"
```

Start Monit.

```
client@ubuntu:~$ sudo /usr/local/bin/monit start
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

Download [M/Monit icons](https://bitbucket.org/tildeslash/monit/downloads/Monit-Icons.zip) for the Slack App integration.

Start with installing Ruby to send our notifications.

```
server@ubuntu:~$ sudo apt-get install ruby-full
```

Proceed to go to Slack and the section for managing apps and select *Build*. Give your new App an name e.g. M/Monit and connect it to an workspace. Then you'll be presented multiple options select, *Incoming Webhooks* under the *Add features and functionality section*. Activate Incoming Webhooks. Click the button *Add New Webhook to Workspace*.

<img class="zoom-custom-imgs" :src="('/img/mmonit/slack_incoming_webhook.png')" alt="mmonit slack incoming webhook">

Next you will be able to select to which channel you want the notifications to be sent to (works with private channels as well). Select your preferred channel and you will get redirected back and presented with the applications webhook URL. Copy the webhook URL for later.

Head back to M/Monit and in the menu under *Admin* click the *Alerts* option (`https://192.168.0.1.8443/admin/alerts/`). Create a new alert with the following conditions: *Any Host*, *Any Service*, *Any State*, *Any Event* and then select *Execute program* as the action. In the input field besides the *Execute program* paste the Ruby code with correct webhook URL and specified channel.

::: warning NOTE
Make sure to add line breaks as in the code segment below
:::

```ruby{4,8}
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

Next run the test to see if the integration is working correctly. You should receive test output ok and a test notification should be sent to your specific Slack channel.

<img class="zoom-custom-imgs" :src="('/img/mmonit/slack_alert.png')" alt="mmonit slack alert">

If you do not use M/Monit you can also configure the individual Monit instance to create Slack notifications. Read more at [Tideslash Wiki](https://mmonit.com/wiki/MMonit/SlackNotification).

## Upgrading

Upgrading M/Monit without overwriting configuration files and databases can be done using the built-in upgrade command.

```
server@ubuntu:~$ cd /usr/local/
server@ubuntu:~$ wget https://mmonit.com/dist/mmonit-3.7.0-linux-x64.tar.gz
server@ubuntu:~$ tar -zxvf mmonit-3.7.0-linux-x64.tar.gz
server@ubuntu:~$ cd /usr/local/mmonit-3.6.2/bin/
server@ubuntu:~$ sudo ./mmonit stop
server@ubuntu:~$ /usr/local/mmonit-3.7.0/upgrade/upgrade -p /usr/local/mmonit-3.6.2/
server@ubuntu:~$ cd /usr/local/mmonit-3.7.0/bin/
server@ubuntu:~$ sudo ./mmonit
```

## Command-line

## Troubleshooting

[Questions](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), [comments](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose), or [problems](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) regarding this service? Create an issue [here](https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose) or contact [webmaster@libellux.com](mailto:webmaster@libellux.com).

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

If you receive `configure: error: PAM enabled but headers or library not found`, install the PAM development support or run configure --without-pam to build without PAM.

```
server@ubuntu:~$ libpam0g-dev
server@ubuntu:~$ sudo ./configure --without-pam
```

If you get the error `SSL server certificate verification error: self signed certificate is not allowed, please use a trusted certificate or use the 'selfsigned: allow' SSL option` update the monit configuration file to allow self-signed certificates.

```
client@ubuntu:~$ sudo nano /usr/local/etc/monitrc
```

```bash{3}
set ssl {
    verify: enable
    selfsigned: allow
}
```

If receiving the error that the sever certificate has expired you can either re-generate a new self-signed certificate for your M/Monit server or simply disable the SSL verification at the client side.

```
Cannot connect to [192.168.0.1]:8443 -- SSL server certificate verification error: certificate has expired
```

```
client@ubuntu:~$ sudo nano /usr/local/etc/monitrc
```

```bash{2}
set ssl {
    #verify: enable
    selfsigned: allow
}
```

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### M/Monit Enterprise

The M/Monit Enterprise License is a perpetual license and allows you to install and run an unlimited number of M/Monit instances for monitoring an unlimited number of hosts in-house. 

[M/Monit](https://mmonit.com/shop/)

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B31BJU3)

<social-share />
