---
title: M/Monit System Monitoring
meta:
  - name: description
    content: Monit is a free, open-source process supervision tool for Unix and Linux
noGlobalSocialShare: true
tags: ["monitoring"]
---

# M/Monit System Monitoring

<TagLinks />

Monit is a small popular Open Source utility for managing and monitoring Unix systems. M/Monit builds on Monit's capabilities and provides monitoring and management of all your Monit enabled hosts via a modern, clean and well designed user interface which also works on mobile devices.

[M/Monit website](https://mmonit.com/) [Monit website](https://mmonit.com/monit/) [Git](https://bitbucket.org/tildeslash/monit/src/master/)

Setup and configuration has been tested on following OS with version:

### M/Monit
* Ubuntu- 16.04, 18.04, 20.04
* 3.6.0 -> 3.7.3

### Monit
* Ubuntu- 16.04, 18.04, 20.04
* 5.16.0 -> 5.27.0

::: warning NOTE
M/Monit is a non-free software to montior and manage all Monit enabled hosts.
:::

## Configuration files

* [monitrc](https://github.com/featzor/docs/blob/master/conf/mmonit/monitrc)

## Prerequisites

Dependancies when building Monit from source. 

* `zlib1g-dev`
* `libssl-dev`

## M/Monit Installation

To download the latest version of M/Monit visit the [official website](https://mmonit.com/download/).

```
foo@bar:~$ wget https://mmonit.com/dist/mmonit-3.7.3-linux-x64.tar.gz
```

Proceed to unpack the downloaded tar gzip package.

```
foo@bar:~$ tar -zxvf mmonit-3.7.3-linux-x64.tar.gz
```

Now execute the M/Monit program located in the bin directory.

```
foo@bar:~$ cd mmonit-3.7.3-linux-x64/bin/
foo@bar:~$ sudo ./mmonit
```

Go to your browser and visit `http://localhost:8080`. Login using the default credentials user **admin** with password **swordfish**.

<img class="zoom-custom-imgs" :src="('/img/mmonit/mmonit1.png')" alt="mmonit login">

Click the **Admin** tab select **Users** and edit or add a new user then delete the Administrator account to overwrite the default credentials.

## Monit Installation

To install the latest version of Monit as an agent for M/Monit enter the commands below.

```
$ wget https://bitbucket.org/tildeslash/monit/downloads/monit-5.27.0.tar.gz
$ tar -zxvf monit-5.27.0.tar.gz
$ cd monit-5.27.0/
$ sudo ./configure --without-pam
$ sudo make && sudo make install
$ sudo cp monitrc /usr/local/etc/
$ cd /usr/local/etc
$ sudo cp monitrc monitrc_bak
$ sudo nano monitrc
$ cd /usr/local/
$ sudo ./bin/monit
```

## Configuration

```
$ sudo openssl req -new -x509 -days 365 -nodes -out /etc/monit/monit.pem -keyout /etc/monit/monit.pem
$ sudo chmod 700 /etc/monit/monit.pem
```

## Firewall settings

```
$ sudo ufw allow from M/MONIT to any port 2812 comment "M/Monit"
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

OpenVAS reports monit to be using weak ciphers accepted through TLS1.0,1.1,1.2 protocol. Add following lines within the ssl section.

```nginx
with ssl {
    pemfile:
    version: TLSv12
    ciphers: "ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384"
}
```

Resolving the issue if libcrypto.so.1.0.x been removed using the auto remove/clean command, is to reinstall the libssl1.0.x and libssl-dev package.

```
$ sudo apt-get install libssl1.0.x libssl-dev --reinstall
```

If package you get configure: error: libz not found, solve that by installing the zlib1g-dev package.

```
$ sudo apt-get install zlib1g-dev
```

In case you get the configure error: Couldn’t find your SSL header files. Proceed with install the libssl-dev package.

```
$ sudo apt-get install libssl-dev
```

## Enterprise solutions <Badge text="non-sponsored" type="default"/>

### M/Monit Licenses <Badge text="non-affiliate" type="default"/>

[M/Monit](https://mmonit.com/shop/)

<social-share />
