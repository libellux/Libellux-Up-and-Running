<template><div><h1 id="rsyslog-syslog-processing" tabindex="-1"><a class="header-anchor" href="#rsyslog-syslog-processing" aria-hidden="true">#</a> Rsyslog Syslog Processing</h1>
<p>In this example the central rsyslog server will receive encrypted TCP trafic from remote server(s) and upload the syslog data locally through UDP to our Graylog server.</p>
<p>Setup and configuration has been tested on following OS with version:</p>
<ul>
<li>Ubuntu- 16.04, Ubuntu 18.04</li>
<li>Rsyslog- 8.16.0, 8.32.0</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><ExternalLinkIcon/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li>OpenSSL</li>
</ul>
<h2 id="setup-rsyslog" tabindex="-1"><a class="header-anchor" href="#setup-rsyslog" aria-hidden="true">#</a> Setup Rsyslog</h2>
<h3 id="generate-ca-key-and-certificate" tabindex="-1"><a class="header-anchor" href="#generate-ca-key-and-certificate" aria-hidden="true">#</a> Generate CA key and certificate</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>See script for self-signed SSL certificates</p>
</div>
<pre><code>openssl genrsa -out ca.key 2048
openssl req -x509 -new -nodes -key ca.key -sha256 -days 1024 -out ca.pem
</code></pre>
<h3 id="create-server-certificate" tabindex="-1"><a class="header-anchor" href="#create-server-certificate" aria-hidden="true">#</a> Create server certificate</h3>
<pre><code>openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr
</code></pre>
<h3 id="sign-server-certificate" tabindex="-1"><a class="header-anchor" href="#sign-server-certificate" aria-hidden="true">#</a> Sign server certificate</h3>
<pre><code>openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out server.pem -days 1024 -sha256
</code></pre>
<h3 id="create-client-certificate" tabindex="-1"><a class="header-anchor" href="#create-client-certificate" aria-hidden="true">#</a> Create client certificate</h3>
<pre><code>openssl genrsa -out client.key 2048
openssl req -new -key client.key -out client.csr
</code></pre>
<h3 id="sign-client-certificate" tabindex="-1"><a class="header-anchor" href="#sign-client-certificate" aria-hidden="true">#</a> Sign client certificate</h3>
<pre><code>openssl x509 -req -in client.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out client.pem -days 1024 -sha256
</code></pre>
<h3 id="setup-tcp-listener-on-rsyslog-server" tabindex="-1"><a class="header-anchor" href="#setup-tcp-listener-on-rsyslog-server" aria-hidden="true">#</a> Setup TCP listener on Rsyslog server</h3>
<p>We will retrieve our syslogs listening to TCP port 10514 and require x509 encryption certificate. We will also forward all the logs locally to our Graylog server on UDP port 10514.</p>
<pre><code>$ sudo nano /etc/rsyslog.conf
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
</code></pre>
<h3 id="setup-tcp-forwarding-on-rsyslog-client" tabindex="-1"><a class="header-anchor" href="#setup-tcp-forwarding-on-rsyslog-client" aria-hidden="true">#</a> Setup TCP forwarding on Rsyslog client</h3>
<pre><code># make gtls driver the default
$DefaultNetstreamDriver gtls

# certificate files
$DefaultNetstreamDriverCAFile /home/user/certs/ca.pem
$DefaultNetstreamDriverCertFile /home/user/certs/client.pem
$DefaultNetstreamDriverKeyFile /home/user/certs/client.key

$ActionSendStreamDriverAuthMode x509/name
$ActionSendStreamDriverPermittedPeer *.libellux.com
$ActionSendStreamDriverMode 1 # run driver in TLS-only mode
*.* @@[rsyslog-server IP]:10514 # forward everything to remote server
</code></pre>
<h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<pre><code>$ sudo ufw allow proto tcp from [remote IP] to any port 10514 comment &quot;Client X syslog&quot;
</code></pre>
<h2 id="check-if-tcp-listener-is-encrypted" tabindex="-1"><a class="header-anchor" href="#check-if-tcp-listener-is-encrypted" aria-hidden="true">#</a> Check if TCP listener is encrypted</h2>
<p>To generate a syslog message on client simply type from cli <code v-pre>$ logger test</code></p>
<pre><code>$ sudo tcpdump -i eth1 port 10514 -vv -x
</code></pre>
<h2 id="generate-self-signed-ssl-certificates-for-rsyslog" tabindex="-1"><a class="header-anchor" href="#generate-self-signed-ssl-certificates-for-rsyslog" aria-hidden="true">#</a> Generate Self-Signed SSL Certificates for Rsyslog</h2>
<p>Forked from <a href="https://github.com/kingkool68/generate-ssl-certs-for-local-development/" target="_blank" rel="noopener noreferrer">kingkool68/generate-ssl-certs-for-local-development<ExternalLinkIcon/></a>, and modified to be used for encrypting communication between central rsyslog server and its clients.</p>
<ol>
<li>Edit <code v-pre>options.conf</code> and <code v-pre>ca-options.conf</code> to match your setup.</li>
<li>Run the script <code v-pre>sudo ./generate-ssl.sh client.libellux.com</code></li>
</ol>
<p>The script creates a self-signed certificate authority and signs your generated certificate(s). Browse the <code v-pre>certs/</code> folder and copy the new client folder to your remote machine.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># options.conf
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>#ca-options.conf
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment"># Forked from https://github.com/kingkool68/generate-ssl-certs-for-local-development</span>
<span class="token comment"># Modified to use for local rsyslog server</span>
<span class="token comment">#</span>
<span class="token comment"># Fredrik Hilmersson &lt;fredrik@libellux.com></span>
<span class="token comment">#</span>

<span class="token comment"># Make sure this script is run as sudo</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token environment constant">$EUID</span>"</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Insufficient privileges!"</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token keyword">function</span> <span class="token function-name function">command_exists</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">type</span> <span class="token string">"<span class="token variable">$1</span>"</span> <span class="token operator">&amp;></span> /dev/null <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Make sure openssl exists</span>
<span class="token keyword">if</span> <span class="token operator">!</span> command_exists openssl <span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Missing dependency: OpenSSL"</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$name</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Missing argument!"</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Try ./generate-ssl.sh client.libellux.com"</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token comment">## Make sure the certs/ directory exists</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">"certs"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> certs/
<span class="token keyword">fi</span>

<span class="token comment">## Make sure the ~/certs/tmp/ directory exists</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">"tmp"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> tmp/
<span class="token keyword">fi</span>

<span class="token comment"># Cleanup files from previous runs</span>
<span class="token function">rm</span> tmp/* <span class="token operator">&amp;></span> /dev/null

<span class="token comment"># Remove any lines that start with CN</span>
<span class="token function">sed</span> -i <span class="token string">'/^CN/d'</span> ca-options.conf
<span class="token comment"># Modify the conf file to set CN = ${name}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"CN = <span class="token variable">${name}</span>"</span> <span class="token operator">>></span> ca-options.conf

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -e <span class="token string">"certs/ca.key"</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -e <span class="token string">"certs/ca.pem"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># Remove remaining ca file(s)</span>
    <span class="token function">rm</span> certs/ca.* <span class="token operator">&amp;></span> /dev/null

    <span class="token comment"># Generate Certificate Authority</span>
    openssl genrsa -out <span class="token string">"certs/ca.key"</span> <span class="token number">2048</span>
    openssl req -x509 -config ca-options.conf -new -nodes -key <span class="token string">"certs/ca.key"</span> -sha256 -days <span class="token number">1024</span> -out <span class="token string">"certs/ca.pem"</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">"certs/<span class="token variable">${name}</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> certs/<span class="token variable">${name}</span>
<span class="token keyword">fi</span>

<span class="token comment"># Generate CA-signed Certificate</span>
openssl genrsa -out <span class="token string">"certs/<span class="token variable">${name}</span>/<span class="token variable">${name}</span>.key"</span> <span class="token number">2048</span>
openssl req -new -config ca-options.conf -key <span class="token string">"certs/<span class="token variable">${name}</span>/<span class="token variable">${name}</span>.key"</span> -out <span class="token string">"tmp/<span class="token variable">${name}</span>.csr"</span>

<span class="token comment"># Generate SSL Certificate</span>
openssl x509 -req -in <span class="token string">"tmp/<span class="token variable">${name}</span>.csr"</span> -CA <span class="token string">"certs/ca.pem"</span> -CAkey <span class="token string">"certs/ca.key"</span> -CAcreateserial -out <span class="token string">"certs/<span class="token variable">${name}</span>/<span class="token variable">${name}</span>.crt"</span> -days <span class="token number">1024</span> -sha256 -extfile options.conf

<span class="token comment"># Create CA certificate copy</span>
<span class="token function">cp</span> certs/ca.pem certs/<span class="token variable">${name}</span>/

<span class="token comment"># Set user permissions</span>
<span class="token function">chmod</span> <span class="token number">400</span> certs/ca.key
<span class="token function">chmod</span> <span class="token number">400</span> certs/<span class="token variable">${name}</span>/<span class="token variable">${name}</span>.key
<span class="token function">chown</span> syslog:syslog certs/<span class="token variable">${name}</span>/<span class="token variable">${name}</span>.key

<span class="token comment"># Cleanup stray file</span>
<span class="token function">rm</span> certs/*.srl <span class="token operator">&amp;></span> /dev/null

<span class="token builtin class-name">echo</span> <span class="token string">"Complete"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
