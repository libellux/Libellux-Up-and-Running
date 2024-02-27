import{_ as i,r as o,o as l,c,a as e,d as t,b as n,e as s}from"./app-BMo6SaBv.js";const p={},d=e("h1",{id:"graylog-centralized-log-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graylog-centralized-log-management"},[e("span",null,"Graylog Centralized Log Management")])],-1),g=e("p",null,"Graylog is a leading centralized log management solution built to open standards for capturing, storing, and enabling real-time analysis of terabytes of machine data.",-1),u={href:"https://www.graylog.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/Graylog2/graylog2-server",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"Setup and configuration has been tested on following OS with version:",-1),y=e("ul",null,[e("li",null,"Ubuntu- 16.04, 20.04 (Focal Fossa), VMware ESXi 6.7.0"),e("li",null,"Graylog- 3.0, 3.3.4, 3.3.4-1 (Virtual Appliance)")],-1),f={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),b=s(`<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files"><span>Configuration files</span></a></h2><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><ul><li><code>mongodb</code></li><li><code>apt-transport-https</code></li><li><code>openjdk-8-jre-headless</code></li><li><code>uuid-runtime</code></li><li><code>pwgen</code></li></ul><h2 id="virtual-appliance-installation" tabindex="-1"><a class="header-anchor" href="#virtual-appliance-installation"><span>Virtual Appliance installation</span></a></h2><h3 id="minimum-requirements" tabindex="-1"><a class="header-anchor" href="#minimum-requirements"><span>Minimum requirements</span></a></h3><ul><li>2 CPU</li><li>4096 MB memory</li><li>20 GB storage</li></ul><h2 id="setup-graylog" tabindex="-1"><a class="header-anchor" href="#setup-graylog"><span>Setup Graylog</span></a></h2><p>First download and install all dependencies.</p><pre><code>$ sudo apt-get install apt-transport-https openjdk-8-jre-headless uuid-runtime pwgen
</code></pre><h2 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>MongoDB</span></a></h2><pre><code>$Â sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
$ echo &quot;deb [ arch=amd64 ] https://ressh forge@85.229.113.176po.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse&quot; | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org

$ sudo systemctl daemon-reload
$ sudo systemctl enable mongod.service
$ sudo systemctl restart mongod.service
</code></pre><h2 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>Elasticsearch</span></a></h2><pre><code>$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
$ echo &quot;deb https://artifacts.elastic.co/packages/oss-6.x/apt stable main&quot; | sudo tee -a /etc/apt/sources.list.d/elastic-6.x.list
$ sudo apt-get update &amp;&amp; sudo apt-get install elasticsearch-oss

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

$ echo -n &quot;Enter Password: &quot; &amp;&amp; head -1 &lt;/dev/stdin | tr -d &#39;\\n&#39; | sha256sum | cut -d&quot; &quot; -f1
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
</code></pre><p>Next download latest Graylog package and proceed with installation.</p><pre><code>$ wget https://packages.graylog2.org/repo/packages/graylog-3.0-repository_latest.deb
$ sudo dpkg -i graylog-3.0-repository_latest.deb
$ sudo apt-get update
$ sudo apt-get install graylog-server
$ sudo systemctl start graylog-server
</code></pre><h2 id="graylog-behind-nginx-proxy" tabindex="-1"><a class="header-anchor" href="#graylog-behind-nginx-proxy"><span>Graylog behind NGINX proxy</span></a></h2><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">listen</span> [::]:443 ssl http2</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> graylog.example.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>  
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Server <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Graylog-Server-URL https://<span class="token variable">$server_name/</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>       http://127.0.0.1:9000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="send-ossec-logs-to-graylog-with-cef-input" tabindex="-1"><a class="header-anchor" href="#send-ossec-logs-to-graylog-with-cef-input"><span>Send OSSEC logs to Graylog with CEF input</span></a></h2>`,18),k={href:"https://github.com/Graylog2/graylog-plugin-cef/releases",target:"_blank",rel:"noopener noreferrer"},w=s(`<pre><code>$ wget https://github.com/Graylog2/graylog-plugin-cef/archive/2.5.2.tar.gz
$ tar -zxvf 2.5.2.tar.gz
$ cd /graylog-plugin-cef-2.5.2
$ sudo apt-get install maven
$ sudo nvm package
$ sudo mv /graylog-plugin-cef-2.5.2.jar /usr/share/graylog-server/plugin/
$ sudo systemctl restart graylog-server.service
</code></pre><h3 id="configuring-ossec-server" tabindex="-1"><a class="header-anchor" href="#configuring-ossec-server"><span>Configuring OSSEC server</span></a></h3><p>Set the server IP address of receiving Graylog server and the port specified for the CEF input. We set the severity level to 7 (optional).</p><pre><code>$ sudo nano /var/ossec/etc/ossec.conf
&lt;syslog_output&gt;
    &lt;server&gt;192.168.0.12&lt;/server&gt;
    &lt;port&gt;12000&lt;/port&gt;
    &lt;level&gt;7&lt;/port&gt;
    &lt;format&gt;cef&lt;/format&gt;
&lt;/syslog_output&gt;
</code></pre><p>Enable OSSEC client syslog.</p><pre><code>$ sudo /var/ossec/bin/ossec-control enable client-syslog
$ sudo /var/ossec/bin/ossec-control reload
</code></pre><h3 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings"><span>Firewall settings</span></a></h3><p>Update the UFW firewall settings on Graylog server to allow incoming logs from OSSEC on specified UDP port.</p><pre><code>$ sudo ufw allow proto udp from [OSSEC LOCAL IP] to any port 12000 comment &quot;Graylog: OSSEC CEF input&quot;
</code></pre><h3 id="encrypt-rsyslog-with-ssl-tls" tabindex="-1"><a class="header-anchor" href="#encrypt-rsyslog-with-ssl-tls"><span>Encrypt rsyslog with SSL/TLS</span></a></h3>`,10),S={href:"https://www.rsyslog.com/doc/v8-stable/tutorials/tls_cert_summary.html",target:"_blank",rel:"noopener noreferrer"},_=s(`<h3 id="create-private-key-and-self-signed-ca-certificate" tabindex="-1"><a class="header-anchor" href="#create-private-key-and-self-signed-ca-certificate"><span>Create private key and self-signed CA certificate</span></a></h3><pre><code>**First create the CA&#39;s private key**

$ certtool --generate-privkey --outfile ca-key.pem --sec-param medium

**Generate the CA certificate**

$ certtool --generate-self-signed --load-privkey ca-key.pem --outfile ca.pem

Generating a self signed certificate...
Please enter the details of the certificate&#39;s distinguished name. Just press enter to ignore a field.
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
</code></pre><div class="custom-container warning"><p class="custom-container-title">NOTE!</p><p>It seems to be an issue when adding the dnsName, however input it once then proceed leaving it blank and it should save the dnsName (verify it before submitting the information in later stage).</p></div><pre><code>Subject Alternative Name (not critical):
DNSname: **log.libellux.com**

Enter a dnsName of the subject of the certificate:

...

Is the above information ok? (y/N): y

$ rm -f request.pem
</code></pre><p><strong>Generate OSSEC client certificate</strong></p><p>Redo the procedure when generating the Graylog client certificate but with OSSEC information.</p><p>$ certtool --generate-privkey --outfile ossec-key.pem --sec-param medium $ certtool --generate-request --load-privkey ossec-key.pem --outfile request.pem $ certtool --generate-certificate --load-request request.pem --outfile ossec-cert.pem --load-ca-certificate ca.pem --load-ca-privkey ca-key.pem</p><p><strong>Distribute certificates files</strong></p><p>Provide Graylog and OSSEC machine with:</p><ol><li>Copy of /etc/rsyslog.d/ca.pem</li><li>/etc/rsyslog.d/ossec-cert.pem</li><li>/etc/rsyslog.d/ossec-key.pem</li></ol><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Set each of the file to read-only (chmod 400) and ensure that no user except root can access them.</p></div><h3 id="set-up-graylog-to-only-accept-messages-via-tls" tabindex="-1"><a class="header-anchor" href="#set-up-graylog-to-only-accept-messages-via-tls"><span>Set up Graylog to only accept messages via TLS</span></a></h3><p>Now lets set up Graylog as the central log server and only accept messages via TLS protected tcp syslog from those clients that are explicity permitted to send to it.</p><pre><code>$ sudo apt-get update
$ sudo apt-get install rsyslog-gnutls
$ sudo nano /etc/rsyslog.conf

# make gtls driver the default
$DefaultNetstreamDriver gtls

# certificate files
$DefaultNetstreamDriverCAFile /etc/rsyslog.d/ca.pem
$DefaultNetstreamDriverCertFile /etc/rsyslog.d/graylog-cert.pem
$DefaultNetstreamDriverKeyFile /etc/rsyslog.d/graylog-key.pem

# provides TCP syslog reception with encryption
module(load=&quot;imtcp&quot; StreamDriver.Name=&quot;gtls&quot; StreamDriver.Mode=&quot;1&quot; StreamDriver.AuthMode=&quot;anon&quot;)
input(type=&quot;imtcp&quot; port=&quot;10514&quot; )

$ sudo systemctl restart rsyslog.service
</code></pre><h2 id="upgrading" tabindex="-1"><a class="header-anchor" href="#upgrading"><span>Upgrading</span></a></h2><p>Download the latest package and run.</p><pre><code>$ wget https://packages.graylog2.org/repo/packages/graylog-3.0-repository_latest.deb
$ sudo dpkg -i graylog-3.0-repository_latest.deb
$ sudo apt-get update
$ sudo apt-get install graylog-server

Configuration file &#39;/etc/graylog/server/server.conf&#39;
==&gt; Modified (by you or by a script) since installation.
==&gt; Package distributor has shipped an updated version.
What would you like to do about it ?  Your options are:
    Y or I  : install the package maintainer&#39;s version
    N or O  : keep your currently-installed version
    D     : show the differences between the versions
    Z     : start a shell to examine the situation
The default action is to keep your current version.
*** server.conf (Y/I/N/O/D/Z) [default=N] ?
</code></pre><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>We wont overwrite our server.conf - however, make sure that there&#39;s no new paramaters updated parameters in latest release.</p></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2><p>Using certool:</p><pre><code>rsyslogd-2083: gnutls returned error on handshake: An unexpected TLS packet was received
</code></pre>`,21),x={id:"enterprise-solutions",tabindex:"-1"},$={class:"header-anchor",href:"#enterprise-solutions"},C=e("h3",{id:"graylog",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#graylog"},[e("span",null,"Graylog")])],-1),E=e("p",null,"Graylog is a leading centralized log management solution built to open standards for capturing, storing, and enabling real-time analysis of terabytes of machine data.",-1),G={href:"https://www.graylog.org/products/enterprise",target:"_blank",rel:"noopener noreferrer"};function N(q,D){const a=o("ExternalLinkIcon"),r=o("Badge");return l(),c("div",null,[d,g,e("p",null,[e("a",u,[t("Graylog website"),n(a)]),t(),e("a",h,[t("GitHub"),n(a)])]),m,y,e("p",null,[e("a",f,[v,n(a)])]),b,e("p",null,[t("Download the latest plugin release: "),e("a",k,[t("Graylog2/graylog-plugin-cef"),n(a)]),t(".")]),w,e("p",null,[t("Reference: "),e("a",S,[t("Encrypting Syslog Traffic with TLS (SSL)"),n(a)])]),_,e("h2",x,[e("a",$,[e("span",null,[t("Enterprise solutions "),n(r,{text:"non-sponsored",type:"tip"})])])]),C,E,e("p",null,[e("a",G,[t("Graylog Enterprise"),n(a)])])])}const T=i(p,[["render",N],["__file","index.html.vue"]]),L=JSON.parse('{"path":"/graylog/","title":"Graylog Centralized Log Management","lang":"en-US","frontmatter":{"lang":"en-US","title":"Graylog Centralized Log Management","description":"Graylog is a leading centralized log management solution"},"headers":[{"level":2,"title":"Configuration files","slug":"configuration-files","link":"#configuration-files","children":[]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Virtual Appliance installation","slug":"virtual-appliance-installation","link":"#virtual-appliance-installation","children":[{"level":3,"title":"Minimum requirements","slug":"minimum-requirements","link":"#minimum-requirements","children":[]}]},{"level":2,"title":"Setup Graylog","slug":"setup-graylog","link":"#setup-graylog","children":[]},{"level":2,"title":"MongoDB","slug":"mongodb","link":"#mongodb","children":[]},{"level":2,"title":"Elasticsearch","slug":"elasticsearch","link":"#elasticsearch","children":[]},{"level":2,"title":"Graylog behind NGINX proxy","slug":"graylog-behind-nginx-proxy","link":"#graylog-behind-nginx-proxy","children":[]},{"level":2,"title":"Send OSSEC logs to Graylog with CEF input","slug":"send-ossec-logs-to-graylog-with-cef-input","link":"#send-ossec-logs-to-graylog-with-cef-input","children":[{"level":3,"title":"Configuring OSSEC server","slug":"configuring-ossec-server","link":"#configuring-ossec-server","children":[]},{"level":3,"title":"Firewall settings","slug":"firewall-settings","link":"#firewall-settings","children":[]},{"level":3,"title":"Encrypt rsyslog with SSL/TLS","slug":"encrypt-rsyslog-with-ssl-tls","link":"#encrypt-rsyslog-with-ssl-tls","children":[]},{"level":3,"title":"Create private key and self-signed CA certificate","slug":"create-private-key-and-self-signed-ca-certificate","link":"#create-private-key-and-self-signed-ca-certificate","children":[]},{"level":3,"title":"Set up Graylog to only accept messages via TLS","slug":"set-up-graylog-to-only-accept-messages-via-tls","link":"#set-up-graylog-to-only-accept-messages-via-tls","children":[]}]},{"level":2,"title":"Upgrading","slug":"upgrading","link":"#upgrading","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]},{"level":2,"title":"Enterprise solutions","slug":"enterprise-solutions","link":"#enterprise-solutions","children":[{"level":3,"title":"Graylog","slug":"graylog","link":"#graylog","children":[]}]}],"git":{"updatedTime":1632682452000,"contributors":[{"name":"Libellux","email":"fredrik@libellux.com","commits":8}]},"filePathRelative":"graylog/README.md"}');export{T as comp,L as data};
