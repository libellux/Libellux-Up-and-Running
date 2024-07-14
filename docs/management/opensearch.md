---
title: OpenSeach
---

# OpenSearch

OpenSearch is an open-source, distributed search and analytics engine. It offers powerful search capabilities, including full-text search, real-time analytics, and visualization tools. With its modular architecture and extensive plugin ecosystem, OpenSearch is widely used for log analytics, monitoring, and other data-intensive applications in diverse industries.


<a href='https://ko-fi.com/B0B31BJU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Install OpenSearch

We will set up OpenSearch and its dashboard, integrating Fluentd into our OSSEC server to seamlessly forward alerts for comprehensive analysis. Our main emphasis will be on the efficient integration of Fluentd into our OSSEC server for alert forwarding to OpenSearch, rather than extensive exploration of OpenSearch itself.

::: info
Supported distributions:

* Ubuntu 22.04 (Jammy Jellyfish)
:::

::: tip
For a more comprehensive guide on how to install and configure OpenSearch visit the official [website](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/index/).
:::

sudo apt-get update --assume-yes

```shellsession
wget https://artifacts.opensearch.org/releases/bundle/opensearch/2.12.0/opensearch-2.12.0-linux-x64.deb
```

::: info
Password must be minimum 10 characters long and must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
:::

```
sudo env OPENSEARCH_INITIAL_ADMIN_PASSWORD="<PASSWORD>" dpkg -i opensearch-2.12.0-linux-x64.deb
```

sudo systemctl enable opensearch

sudo systemctl start opensearch

## Install OpenSearch Dashboard

::: tip
For a more comprehensive guide on how to install and configure OpenSearch Dashboard visit the official [website](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/index/).
:::

## fail2ban temp

Open the Fail2Ban configuration file. Typically, this file is located at /etc/fail2ban/jail.conf or /etc/fail2ban/jail.local.

Search for the section related to the jail you want to modify. Jails are defined with square brackets, for example [sshd] for the SSH jail.

Within the jail definition, look for the banaction parameter. This parameter specifies the action to take when a rule is triggered. The default action is usually iptables-multiport or similar.

Change the value of the banaction parameter to %(banaction_allports)s, which is a non-blocking action that only logs the intrusion attempt without taking any active response.

Save the file and close it.

Restart the Fail2Ban service to apply the changes. You can do this by running:

## Install Fluent Bit

```xml
<match debug.**>
  @type stdout
  @id output_stdout
</match>
<source>
  @type tail
  path /var/ossec/logs/alerts/alerts.json
  pos_file /var/ossec/tmp/pos.alerts.json
  tag ossec_alert
  emit_unmatched_lines true
  <parse>
    @type json
  </parse>
</source>
<match ossec_alert>
 @type opensearch
 @id out_os
 @log_level info
  host "opensearch-node1"
  port "9200"
  scheme "https"
  ssl_verify "false"
  suppress_type_name true
  retry_limit False
  reconnect_on_error true
  reload_on_failure true
  include_timestamp true
  logstash_format true
  logstash_prefix atomicorp-alerts-4.0
  user admin
  password ADMIN_PASSWORD
  <buffer>
    @type file
    path /var/log/calyptia-fluentd/buffer
  </buffer>
</match>
```

wget https://artifacts.opensearch.org/releases/bundle/opensearch-dashboards/2.12.0/opensearch-dashboards-2.12.0-linux-x64.tar.gz
tar -zxf opensearch-dashboards-2.12.0-linux-x64.tar.gz

cd opensearch-dashboards-2.12.0/
./bin/opensearch-dashboards

##

wget https://artifacts.opensearch.org/releases/bundle/opensearch/2.12.0/opensearch-2.12.0-linux-x64.tar.gz

tar -xvf opensearch-2.12.0-linux-x64.tar.gz

sudo swapoff -a

sudo nano /etc/sysctl.conf

vm.max_map_count=262144

sudo sysctl -p

cat /proc/sys/vm/max_map_count

nano opensearch-2.12.0/config/opensearch.yml

nano opensearch-2.12.0/config/jvm.options

cd opensearch-2.12.0/config/

openssl genrsa -out root-ca-key.pem 2048
openssl req -new -x509 -sha256 -key root-ca-key.pem -subj "/C=CA/ST=ONTARIO/L=TORONTO/O=ORG/OU=UNIT/CN=ROOT" -out root-ca.pem -days 730

openssl genrsa -out admin-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in admin-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out admin-key.pem

openssl req -new -key admin-key.pem -subj "/C=CA/ST=ONTARIO/L=TORONTO/O=ORG/OU=UNIT/CN=A" -out admin.csr
openssl x509 -req -in admin.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out admin.pem -days 730

openssl genrsa -out node1-key-temp.pem 2048
openssl pkcs8 -inform PEM -outform PEM -in node1-key-temp.pem -topk8 -nocrypt -v1 PBE-SHA1-3DES -out node1-key.pem

openssl req -new -key node1-key.pem -subj "/C=CA/ST=ONTARIO/L=TORONTO/O=ORG/OU=UNIT/CN=node1.dns.a-record" -out node1.csr

echo 'subjectAltName=DNS:node1.dns.a-record' > node1.ext
openssl x509 -req -in node1.csr -CA root-ca.pem -CAkey root-ca-key.pem -CAcreateserial -sha256 -out node1.pem -days 730 -extfile node1.ext

rm *temp.pem *csr *ext

#! /bin/bash

# Before running this script, make sure to replace the /path/to your OpenSearch directory,
# and remember to replace the CN in the node's distinguished name with a real
# DNS A record.

echo "plugins.security.ssl.transport.pemcert_filepath: /home/toothpick/opensearch-2.12.0/config/node1.pem" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.ssl.transport.pemkey_filepath: /home/toothpick/opensearch-2.12.0/config/node1-key.pem" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.ssl.transport.pemtrustedcas_filepath: /home/toothpick/opensearch-2.12.0/config/root-ca.pem" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.ssl.http.enabled: true" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.ssl.http.pemcert_filepath: /home/toothpick/opensearch-2.12.0/config/node1.pem" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.ssl.http.pemkey_filepath: /home/toothpick/opensearch-2.12.0/config/node1-key.pem" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.ssl.http.pemtrustedcas_filepath: /home/toothpick/opensearch-2.12.0/config/root-ca.pem" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.allow_default_init_securityindex: true" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.authcz.admin_dn:" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "  - 'CN=A,OU=UNIT,O=ORG,L=TORONTO,ST=ONTARIO,C=CA'" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.nodes_dn:" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "  - 'CN=node1.dns.a-record,OU=UNIT,O=ORG,L=TORONTO,ST=ONTARIO,C=CA'" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.audit.type: internal_opensearch" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.enable_snapshot_restore_privilege: true" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.check_snapshot_restore_write_privileges: true" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml
echo "plugins.security.restapi.roles_enabled: [\"all_access\", \"security_rest_api_access\"]" | sudo tee -a /home/toothpick/opensearch-2.12.0/config/opensearch.yml

chmod 755 ~/opensearch-2.12.0/plugins/opensearch-security/tools/*.sh

OPENSEARCH_JAVA_HOME=~/opensearch-2.12.0/jdk ./hash.sh

**************************************************************************
** This tool will be deprecated in the next major release of OpenSearch **
** https://github.com/opensearch-project/security/issues/1755           **
**************************************************************************
[Password:]
$2y$12$qzZAKdSDdjntgS9EMzo7r.C0tEvdS/oR87bjWGYhXHN5ovlYIK3yq

nano ~/opensearch-2.12.0/config/opensearch-security/internal_users.yml

---
# This is the internal user database
# The hash value is a bcrypt hash and can be generated with plugin/tools/hash.sh

_meta:
   type: "internalusers"
   config_version: 2

# Define your internal users here

admin:
   hash: "$2y$1EXAMPLEQqwS8TUcoEXAMPLEeZ3lEHvkEXAMPLERqjyh1icEXAMPLE."
   reserved: true
   backend_roles:
   - "admin"
   description: "Admin user"


cd ~/opensearch-2.12.0/bin

./opensearch

cd ~/opensearch-2.12.0/plugins/opensearch-security/tools

OPENSEARCH_JAVA_HOME=~/opensearch-2.12.0/jdk ./securityadmin.sh -cd ~/opensearch-2.12.0/config/opensearch-security/ -cacert ~/opensearch-2.12.0/config/root-ca.pem -cert ~/opensearch-2.12.0/config/admin.pem -key ~/opensearch-2.12.0/config/admin-key.pem -icl -nhnv

## Install Filebeat

## Install Vector

Install Vector as an agent.

bash -c "$(curl -L https://setup.vector.dev)"

sudo dnf install --assume-yes vector

::: info
Supported distributions:

* Ubuntu 22.04 (Jammy Jellyfish)
* Debian 12 (Bookworm)
* Rocky Linux 9 (Blue Onyx)
:::

::: code-group
```shellsession [Ubuntu/Debian]
sudo apt-get update --assume-yes
```
```shellsession [Rocky Linux]
sudo dnf update --assumeyes
sudo dnf install --assumeyes dnf-utils
sudo dnf install --assumeyes epel-release
sudo dnf install --assumeyes epel-next-release
sudo dnf upgrade --assumeyes
sudo yum config-manager --set-enabled powertools
```
:::

<a target="_blank" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
