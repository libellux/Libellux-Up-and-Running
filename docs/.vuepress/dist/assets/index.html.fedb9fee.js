import{r,o as p,c as l,a as n,b as a,F as o,d as s,e as t}from"./app.b31150f8.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"rsyslog-syslog-processing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rsyslog-syslog-processing","aria-hidden":"true"},"#"),s(" Rsyslog Syslog Processing")],-1),m=n("p",null,"In this example the central rsyslog server will receive encrypted TCP trafic from remote server(s) and upload the syslog data locally through UDP to our Graylog server.",-1),b=n("p",null,"Setup and configuration has been tested on following OS with version:",-1),d=n("ul",null,[n("li",null,"Ubuntu- 16.04, Ubuntu 18.04"),n("li",null,"Rsyslog- 8.16.0, 8.32.0")],-1),k={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},h=n("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),f=t(`<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li>OpenSSL</li></ul><h2 id="setup-rsyslog" tabindex="-1"><a class="header-anchor" href="#setup-rsyslog" aria-hidden="true">#</a> Setup Rsyslog</h2><h3 id="generate-ca-key-and-certificate" tabindex="-1"><a class="header-anchor" href="#generate-ca-key-and-certificate" aria-hidden="true">#</a> Generate CA key and certificate</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>See script for self-signed SSL certificates</p></div><pre><code>openssl genrsa -out ca.key 2048
openssl req -x509 -new -nodes -key ca.key -sha256 -days 1024 -out ca.pem
</code></pre><h3 id="create-server-certificate" tabindex="-1"><a class="header-anchor" href="#create-server-certificate" aria-hidden="true">#</a> Create server certificate</h3><pre><code>openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr
</code></pre><h3 id="sign-server-certificate" tabindex="-1"><a class="header-anchor" href="#sign-server-certificate" aria-hidden="true">#</a> Sign server certificate</h3><pre><code>openssl x509 -req -in server.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out server.pem -days 1024 -sha256
</code></pre><h3 id="create-client-certificate" tabindex="-1"><a class="header-anchor" href="#create-client-certificate" aria-hidden="true">#</a> Create client certificate</h3><pre><code>openssl genrsa -out client.key 2048
openssl req -new -key client.key -out client.csr
</code></pre><h3 id="sign-client-certificate" tabindex="-1"><a class="header-anchor" href="#sign-client-certificate" aria-hidden="true">#</a> Sign client certificate</h3><pre><code>openssl x509 -req -in client.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out client.pem -days 1024 -sha256
</code></pre><h3 id="setup-tcp-listener-on-rsyslog-server" tabindex="-1"><a class="header-anchor" href="#setup-tcp-listener-on-rsyslog-server" aria-hidden="true">#</a> Setup TCP listener on Rsyslog server</h3><p>We will retrieve our syslogs listening to TCP port 10514 and require x509 encryption certificate. We will also forward all the logs locally to our Graylog server on UDP port 10514.</p><pre><code>$ sudo nano /etc/rsyslog.conf
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
</code></pre><h3 id="setup-tcp-forwarding-on-rsyslog-client" tabindex="-1"><a class="header-anchor" href="#setup-tcp-forwarding-on-rsyslog-client" aria-hidden="true">#</a> Setup TCP forwarding on Rsyslog client</h3><pre><code># make gtls driver the default
$DefaultNetstreamDriver gtls

# certificate files
$DefaultNetstreamDriverCAFile /home/user/certs/ca.pem
$DefaultNetstreamDriverCertFile /home/user/certs/client.pem
$DefaultNetstreamDriverKeyFile /home/user/certs/client.key

$ActionSendStreamDriverAuthMode x509/name
$ActionSendStreamDriverPermittedPeer *.libellux.com
$ActionSendStreamDriverMode 1 # run driver in TLS-only mode
*.* @@[rsyslog-server IP]:10514 # forward everything to remote server
</code></pre><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2><pre><code>$ sudo ufw allow proto tcp from [remote IP] to any port 10514 comment &quot;Client X syslog&quot;
</code></pre><h2 id="check-if-tcp-listener-is-encrypted" tabindex="-1"><a class="header-anchor" href="#check-if-tcp-listener-is-encrypted" aria-hidden="true">#</a> Check if TCP listener is encrypted</h2><p>To generate a syslog message on client simply type from cli <code>$ logger test</code></p><pre><code>$ sudo tcpdump -i eth1 port 10514 -vv -x
</code></pre><h2 id="generate-self-signed-ssl-certificates-for-rsyslog" tabindex="-1"><a class="header-anchor" href="#generate-self-signed-ssl-certificates-for-rsyslog" aria-hidden="true">#</a> Generate Self-Signed SSL Certificates for Rsyslog</h2>`,26),g=s("Forked from "),y={href:"https://github.com/kingkool68/generate-ssl-certs-for-local-development/",target:"_blank",rel:"noopener noreferrer"},v=s("kingkool68/generate-ssl-certs-for-local-development"),q=s(", and modified to be used for encrypting communication between central rsyslog server and its clients."),x=t(`<ol><li>Edit <code>options.conf</code> and <code>ca-options.conf</code> to match your setup.</li><li>Run the script <code>sudo ./generate-ssl.sh client.libellux.com</code></li></ol><p>The script creates a self-signed certificate authority and signs your generated certificate(s). Browse the <code>certs/</code> folder and copy the new client folder to your remote machine.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># options.conf
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#ca-options.conf
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#</span>
<span class="token comment"># Forked from https://github.com/kingkool68/generate-ssl-certs-for-local-development</span>
<span class="token comment"># Modified to use for local rsyslog server</span>
<span class="token comment">#</span>
<span class="token comment"># Fredrik Hilmersson &lt;fredrik@libellux.com&gt;</span>
<span class="token comment">#</span>

<span class="token comment"># Make sure this script is run as sudo</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token environment constant">$EUID</span>&quot;</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Insufficient privileges!&quot;</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token keyword">function</span> <span class="token function-name function">command_exists</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">type</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token operator">&amp;&gt;</span> /dev/null <span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Make sure openssl exists</span>
<span class="token keyword">if</span> <span class="token operator">!</span> command_exists openssl <span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Missing dependency: OpenSSL&quot;</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Missing argument!&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;Try ./generate-ssl.sh client.libellux.com&quot;</span>
    <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token comment">## Make sure the certs/ directory exists</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">&quot;certs&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> certs/
<span class="token keyword">fi</span>

<span class="token comment">## Make sure the ~/certs/tmp/ directory exists</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">&quot;tmp&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> tmp/
<span class="token keyword">fi</span>

<span class="token comment"># Cleanup files from previous runs</span>
<span class="token function">rm</span> tmp/* <span class="token operator">&amp;&gt;</span> /dev/null

<span class="token comment"># Remove any lines that start with CN</span>
<span class="token function">sed</span> -i <span class="token string">&#39;/^CN/d&#39;</span> ca-options.conf
<span class="token comment"># Modify the conf file to set CN = \${name}</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;CN = <span class="token variable">\${name}</span>&quot;</span> <span class="token operator">&gt;&gt;</span> ca-options.conf

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -e <span class="token string">&quot;certs/ca.key&quot;</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -e <span class="token string">&quot;certs/ca.pem&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token comment"># Remove remaining ca file(s)</span>
    <span class="token function">rm</span> certs/ca.* <span class="token operator">&amp;&gt;</span> /dev/null

    <span class="token comment"># Generate Certificate Authority</span>
    openssl genrsa -out <span class="token string">&quot;certs/ca.key&quot;</span> <span class="token number">2048</span>
    openssl req -x509 -config ca-options.conf -new -nodes -key <span class="token string">&quot;certs/ca.key&quot;</span> -sha256 -days <span class="token number">1024</span> -out <span class="token string">&quot;certs/ca.pem&quot;</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">&quot;certs/<span class="token variable">\${name}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> certs/<span class="token variable">\${name}</span>
<span class="token keyword">fi</span>

<span class="token comment"># Generate CA-signed Certificate</span>
openssl genrsa -out <span class="token string">&quot;certs/<span class="token variable">\${name}</span>/<span class="token variable">\${name}</span>.key&quot;</span> <span class="token number">2048</span>
openssl req -new -config ca-options.conf -key <span class="token string">&quot;certs/<span class="token variable">\${name}</span>/<span class="token variable">\${name}</span>.key&quot;</span> -out <span class="token string">&quot;tmp/<span class="token variable">\${name}</span>.csr&quot;</span>

<span class="token comment"># Generate SSL Certificate</span>
openssl x509 -req -in <span class="token string">&quot;tmp/<span class="token variable">\${name}</span>.csr&quot;</span> -CA <span class="token string">&quot;certs/ca.pem&quot;</span> -CAkey <span class="token string">&quot;certs/ca.key&quot;</span> -CAcreateserial -out <span class="token string">&quot;certs/<span class="token variable">\${name}</span>/<span class="token variable">\${name}</span>.crt&quot;</span> -days <span class="token number">1024</span> -sha256 -extfile options.conf

<span class="token comment"># Create CA certificate copy</span>
<span class="token function">cp</span> certs/ca.pem certs/<span class="token variable">\${name}</span>/

<span class="token comment"># Set user permissions</span>
<span class="token function">chmod</span> <span class="token number">400</span> certs/ca.key
<span class="token function">chmod</span> <span class="token number">400</span> certs/<span class="token variable">\${name}</span>/<span class="token variable">\${name}</span>.key
<span class="token function">chown</span> syslog:syslog certs/<span class="token variable">\${name}</span>/<span class="token variable">\${name}</span>.key

<span class="token comment"># Cleanup stray file</span>
<span class="token function">rm</span> certs/*.srl <span class="token operator">&amp;&gt;</span> /dev/null

<span class="token builtin class-name">echo</span> <span class="token string">&quot;Complete&quot;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br></div></div>`,5);function w(S,_){const e=r("ExternalLinkIcon");return p(),l(o,null,[u,m,b,d,n("p",null,[n("a",k,[h,a(e)])]),f,n("p",null,[g,n("a",y,[v,a(e)]),q]),x],64)}var D=c(i,[["render",w]]);export{D as default};
