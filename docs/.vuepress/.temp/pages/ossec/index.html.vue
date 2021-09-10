<template><h1 id="ossec-host-intrusion-detection-system" tabindex="-1"><a class="header-anchor" href="#ossec-host-intrusion-detection-system" aria-hidden="true">#</a> OSSEC Host Intrusion Detection System</h1>
<p>OSSEC is a full platform to monitor and control your systems. It mixes together all the aspects of HIDS (host-based intrusion detection), log monitoring and SIM/SIEM together in a simple, powerful and open source solution.</p>
<p><a href="https://www.ossec.net/" target="_blank" rel="noopener noreferrer">OSSEC website<OutboundLink/></a> <a href="https://github.com/ossec/ossec-hids" target="_blank" rel="noopener noreferrer">GitHub<OutboundLink/></a></p>
<p>Setup and configuration has been tested on the following operating systems:</p>
<ul>
<li>Ubuntu- 16.04, 18.04, 20.04, Rocky 8 Linux, Windows Server 2019, Windows 10</li>
<li>2.9.0 -&gt; 3.6.0</li>
</ul>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li><code>build-essential</code></li>
<li><code>libssl-dev</code></li>
<li><code>libpcre2-dev</code></li>
<li><code>zlib1g-dev</code></li>
<li><code>jq</code> (optional)</li>
<li><code>pcre2</code> library for version &gt;= 3.3.0 (<a href="https://ftp.pcre.org/pub/pcre/" target="_blank" rel="noopener noreferrer">ftp.pcre.org<OutboundLink/></a>)</li>
</ul>
<h2 id="server-installation" tabindex="-1"><a class="header-anchor" href="#server-installation" aria-hidden="true">#</a> Server installation</h2>
<p>To install <strong>OSSEC 3.6.0</strong> on <strong>Ubuntu 20.04</strong> or <strong>Rocky 8 Linux</strong> download the <a href="https://github.com/ossec/ossec-hids/releases" target="_blank" rel="noopener noreferrer">latest stable version<OutboundLink/></a> from ossec-hids GitHub.</p>
<h3 id="verify-file-integrity" tabindex="-1"><a class="header-anchor" href="#verify-file-integrity" aria-hidden="true">#</a> Verify file integrity</h3>
<p>It's recommended to verify the file integrity of the downloaded file. Get the key file (.asc) from ossec-hids <a href="https://github.com/ossec/ossec-hids/releases" target="_blank" rel="noopener noreferrer">GitHub<OutboundLink/></a> release.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">wget</span> https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">wget</span> https://github.com/ossec/ossec-hids/releases/download/3.6.0/ossec-hids-3.6.0.tar.gz.asc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Extract the file and run the installation script. If receiving build errors, make sure that you have installed all the required dependencies or check the <a href="#troubleshooting">troubleshooting section</a> for details.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">wget</span> https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz
server@ubuntu:~$ <span class="token function">tar</span> -zxvf <span class="token number">3.6</span>.0.tar.gz
server@ubuntu:~$ <span class="token builtin class-name">cd</span> ossec-hids-3.6.0/
server@ubuntu:~$ <span class="token function">wget</span> https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@ubuntu:~$ <span class="token function">tar</span> -zxvf pcre2-10.32.tar.gz -C src/external/
server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential libssl-dev libpcre2-dev zlib1g-dev
server@ubuntu:~$ <span class="token function">sudo</span> <span class="token assign-left variable">PCRE2_SYSTEM</span><span class="token operator">=</span>yes ./install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">wget</span> https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz
server@rocky:~$ <span class="token function">tar</span> -zxvf <span class="token number">3.6</span>.0.tar.gz
server@rocky:~$ <span class="token builtin class-name">cd</span> ossec-hids-3.6.0/
server@rocky:~$ <span class="token function">wget</span> https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@rocky:~$ <span class="token function">tar</span> -zxvf pcre2-10.32.tar.gz -C src/external/
server@rocky:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential libssl-dev libpcre2-dev zlib1g-dev
server@rocky:~$ <span class="token function">sudo</span> <span class="token assign-left variable">PCRE2_SYSTEM</span><span class="token operator">=</span>yes ./install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
</CodeGroup>
<p>In this setup we will not use e-mail notifications as we will be using Slack as our notification channel. We won't be adding IP addresses to our allow list now but in a later segment.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> password <span class="token keyword">for</span> user: <span class="token punctuation">(</span>en/br/cn/de/el/es/fr/hu/it/jp/nl/pl/ru/sr/tr<span class="token punctuation">)</span> <span class="token punctuation">[</span>en<span class="token punctuation">]</span>: ENTER
What kind of installation <span class="token keyword">do</span> you want <span class="token punctuation">(</span>server, agent, local, hybrid or <span class="token builtin class-name">help</span><span class="token punctuation">)</span>? server
Choose where to <span class="token function">install</span> the OSSEC HIDS <span class="token punctuation">[</span>/var/ossec/<span class="token punctuation">]</span>: ENTER
Do you want e-mail notification? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: n
Do you want to run the integrity check daemon? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y
Do you want to run the rootkit detection engine? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y
Do you want to <span class="token builtin class-name">enable</span> active response? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y
Do you want to <span class="token builtin class-name">enable</span> the firewall-drop response? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y
Do you want to <span class="token function">add</span> <span class="token function">more</span> IPs to the white list? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>? <span class="token punctuation">[</span>n<span class="token punctuation">]</span>: n
Do you want to <span class="token builtin class-name">enable</span> remote syslog <span class="token punctuation">(</span>port <span class="token number">514</span> udp<span class="token punctuation">)</span>? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y
--- Press ENTER to finish <span class="token punctuation">(</span>maybe <span class="token function">more</span> information below<span class="token punctuation">)</span>. ---
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="server-configuration" tabindex="-1"><a class="header-anchor" href="#server-configuration" aria-hidden="true">#</a> Server configuration</h2>
<h3 id="allow-list" tabindex="-1"><a class="header-anchor" href="#allow-list" aria-hidden="true">#</a> Allow list</h3>
<p>In the global section of the OSSEC configuration file add the IP addresses of the client(s) and services (e.g. OpenVAS) to allow.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>global</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allow_list</span><span class="token punctuation">></span></span>127.0.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allow_list</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allow_list</span><span class="token punctuation">></span></span>::1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allow_list</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allow_list</span><span class="token punctuation">></span></span>localhost.localdomain<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allow_list</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allow_list</span><span class="token punctuation">></span></span>127.0.0.53<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allow_list</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allow_list</span><span class="token punctuation">></span></span>192.168.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allow_list</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- OSSEC client --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>global</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="remote-syslog" tabindex="-1"><a class="header-anchor" href="#remote-syslog" aria-hidden="true">#</a> Remote syslog</h3>
<p>To enable the function to harvest syslog we need to establish that our remote client connection is secure and then allow it. Add the client IP address within the remote section.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>remote</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>connection</span><span class="token punctuation">></span></span>secure<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>connection</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allowed-ips</span><span class="token punctuation">></span></span>192.168.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allowed-ips</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- OSSEC client --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>remote</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="repeated-offenders" tabindex="-1"><a class="header-anchor" href="#repeated-offenders" aria-hidden="true">#</a> Repeated offenders</h3>
<p>The first time an IP is blocked it will be put on timeout for the default 600 seconds. If the IP is blocked again it will follow the defined repeated offenders list. To enable repeated offenders, add the entry in the active response config.</p>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Make sure that you add the repeated offenders entry at the top of the active response section in the ossec.conf file.</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- Active Response Config --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>active-response</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Specify a comma seperated list of timeouts per
    - re-incidence (in minutes).
    --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repeated_offenders</span><span class="token punctuation">></span></span>30,60,120,240,480<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repeated_offenders</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>active-response</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Save the config and restart OSSEC to confirm that the repeated offenders been added.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/ossec-control restart
Starting OSSEC HIDS v3.6.0<span class="token punctuation">..</span>.
<span class="token number">2020</span>/08/06 <span class="token number">14</span>:38:31 ossec-execd: INFO: Adding offenders timeout: <span class="token number">30</span> <span class="token punctuation">(</span>for <span class="token comment">#1)</span>
<span class="token number">2020</span>/08/06 <span class="token number">14</span>:38:31 ossec-execd: INFO: Adding offenders timeout: <span class="token number">60</span> <span class="token punctuation">(</span>for <span class="token comment">#2)</span>
<span class="token number">2020</span>/08/06 <span class="token number">14</span>:38:31 ossec-execd: INFO: Adding offenders timeout: <span class="token number">120</span> <span class="token punctuation">(</span>for <span class="token comment">#3)</span>
<span class="token number">2020</span>/08/06 <span class="token number">14</span>:38:31 ossec-execd: INFO: Adding offenders timeout: <span class="token number">240</span> <span class="token punctuation">(</span>for <span class="token comment">#4)</span>
<span class="token number">2020</span>/08/06 <span class="token number">14</span>:38:31 ossec-execd: INFO: Adding offenders timeout: <span class="token number">480</span> <span class="token punctuation">(</span>for <span class="token comment">#5)</span>
Started ossec-execd<span class="token punctuation">..</span>.
Started ossec-analysisd<span class="token punctuation">..</span>.
Started ossec-logcollector<span class="token punctuation">..</span>.
Started ossec-remoted<span class="token punctuation">..</span>.
Started ossec-syscheckd<span class="token punctuation">..</span>.
Started ossec-monitord<span class="token punctuation">..</span>.
Completed.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="psad-rules" tabindex="-1"><a class="header-anchor" href="#psad-rules" aria-hidden="true">#</a> PSAD rules</h3>
<p>If PSAD Intrusion Detection is to be used, make sure to include the PSAD ruleset in the configuration file (as its not defined by default).</p>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Make sure that you add the the psad rules include before the local rules.</p>
</div>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">></span></span>psad_rules.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">></span></span>local_rules.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rules</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="agent-installation" tabindex="-1"><a class="header-anchor" href="#agent-installation" aria-hidden="true">#</a> Agent installation</h2>
<p>To install OSSEC as an agent is the same approach as when installing the server. Download the <a href="https://github.com/ossec/ossec-hids/releases" target="_blank" rel="noopener noreferrer">latest stable version<OutboundLink/></a> from ossec-hids GitHub. Download and install the dependencies. Extract the OSSEC source code and run the installation script.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">wget</span> https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz
client@ubuntu:~$ <span class="token function">tar</span> -zxvf <span class="token number">3.6</span>.0.tar.gz
client@ubuntu:~$ <span class="token builtin class-name">cd</span> ossec-hids-3.6.0/
client@ubuntu:~$ <span class="token function">wget</span> https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
client@ubuntu:~$ <span class="token function">tar</span> -zxvf pcre2-10.32.tar.gz -C src/external/
client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential libssl-dev libpcre2-dev zlib1g-dev
client@ubuntu:~$ <span class="token function">sudo</span> <span class="token assign-left variable">PCRE2_SYSTEM</span><span class="token operator">=</span>yes ./install.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">1</span>- What kind of installation <span class="token keyword">do</span> you want <span class="token punctuation">(</span>server, agent, local, hybrid or <span class="token builtin class-name">help</span><span class="token punctuation">)</span>? agent

  - Agent<span class="token punctuation">(</span>client<span class="token punctuation">)</span> installation chosen.

<span class="token number">2</span>- Setting up the installation environment.

 - Choose where to <span class="token function">install</span> the OSSEC HIDS <span class="token punctuation">[</span>/var/ossec<span class="token punctuation">]</span>: 

    - Installation will be made at  /var/ossec <span class="token builtin class-name">.</span>

<span class="token number">3</span>- Configuring the OSSEC HIDS.

  <span class="token number">3.1</span>- What's the IP Address or <span class="token function">hostname</span> of the OSSEC HIDS server?: <span class="token number">192.168</span>.0.1

  <span class="token number">3.2</span>- Do you want to run the integrity check daemon? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y

   - Running syscheck <span class="token punctuation">(</span>integrity check daemon<span class="token punctuation">)</span>.

  <span class="token number">3.3</span>- Do you want to run the rootkit detection engine? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y

   - Running rootcheck <span class="token punctuation">(</span>rootkit detection<span class="token punctuation">)</span>.

  <span class="token number">3.4</span> - Do you want to <span class="token builtin class-name">enable</span> active response? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span> <span class="token punctuation">[</span>y<span class="token punctuation">]</span>: y
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="agent-configuration" tabindex="-1"><a class="header-anchor" href="#agent-configuration" aria-hidden="true">#</a> Agent configuration</h2>
<p>Edit the agent configuration file and verify that the server IP address is correct. Continue with disabling email notifications.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ossec_config</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>client</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>server-ip</span><span class="token punctuation">></span></span>192.168.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>server-ip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>config-profile</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>config-profile</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>client</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>global</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>email_notification</span><span class="token punctuation">></span></span>no<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>email_notification</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>global</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Proceed and add the following lines after the rootcheck segment to enable active response and repeated offenders.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>firewall-drop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executable</span><span class="token punctuation">></span></span>firewall-drop.sh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executable</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>expect</span><span class="token punctuation">></span></span>srcip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>expect</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeout_allowed</span><span class="token punctuation">></span></span>yes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>timeout_allowed</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- Active Response Config --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>active-response</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Specify a comma seperated list of timeouts per
     - re-incidence (in minutes).
    --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repeated_offenders</span><span class="token punctuation">></span></span>30,60,120,240,480<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repeated_offenders</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>active-response</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>active-response</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Firewall Drop response. Block the IP for
    - 600 seconds on the firewall (iptables,
    - ipfilter, etc).
    --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>disabled</span><span class="token punctuation">></span></span>no<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>disabled</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">></span></span>firewall-drop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>agent_id</span><span class="token punctuation">></span></span>001<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>agent_id</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span><span class="token punctuation">></span></span>local<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rules_id</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rules_id</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>level</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeout</span><span class="token punctuation">></span></span>600<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>timeout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>active-response</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="manage-agents" tabindex="-1"><a class="header-anchor" href="#manage-agents" aria-hidden="true">#</a> Manage agents</h2>
<p>To manage an agent we need to add the agent to our OSSEC server. Run the command shown in the code segment below and follow the instructions.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/manage_agents
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   <span class="token punctuation">(</span>A<span class="token punctuation">)</span>dd an agent <span class="token punctuation">(</span>A<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>E<span class="token punctuation">)</span>xtract key <span class="token keyword">for</span> an agent <span class="token punctuation">(</span>E<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>L<span class="token punctuation">)</span>ist already added agents <span class="token punctuation">(</span>L<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>R<span class="token punctuation">)</span>emove an agent <span class="token punctuation">(</span>R<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>Q<span class="token punctuation">)</span>uit.
Choose your action: A,E,L,R or Q: A

- Adding a new agent <span class="token punctuation">(</span>use <span class="token string">'\q'</span> to <span class="token builtin class-name">return</span> to the main menu<span class="token punctuation">)</span>.
  Please provide the following:
   * A name <span class="token keyword">for</span> the new agent: client@ubuntu
   * The IP Address of the new agent: <span class="token number">192.168</span>.0.2
   * An ID <span class="token keyword">for</span> the new agent<span class="token punctuation">[</span>001<span class="token punctuation">]</span>: 001
Agent information:
   ID:001
   Name:client@ubuntu
   IP Address:192.168.0.2

Confirm adding it?<span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>: y
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Once we added the client, proceed by extracting its agent key by providing the assigned agent ID.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   <span class="token punctuation">(</span>A<span class="token punctuation">)</span>dd an agent <span class="token punctuation">(</span>A<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>E<span class="token punctuation">)</span>xtract key <span class="token keyword">for</span> an agent <span class="token punctuation">(</span>E<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>L<span class="token punctuation">)</span>ist already added agents <span class="token punctuation">(</span>L<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>R<span class="token punctuation">)</span>emove an agent <span class="token punctuation">(</span>R<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>Q<span class="token punctuation">)</span>uit.
Choose your action: A,E,L,R or Q: E

Available agents: 
   ID: 001, Name: client@ubuntu, IP: <span class="token number">192.168</span>.0.2
Provide the ID of the agent to extract the key <span class="token punctuation">(</span>or <span class="token string">'\q'</span> to quit<span class="token punctuation">)</span>: 001

Agent key information <span class="token keyword">for</span> <span class="token string">'001'</span> is: 
<span class="token assign-left variable">523b0d579891be85956bb3da6c757455005eaf1508ef578186431efbebf5901ecb467ddd857ed5dfdeb5b2cb00e8911c6d031</span><span class="token operator">=</span>

** Press ENTER to <span class="token builtin class-name">return</span> to the main menu.
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Copy the agent key and head back to our OSSEC client and import the agent key. Execute the command, shown in the code section below, on the client and paste the key. Validate that our agent information is correct before adding it.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/manage_agents
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   <span class="token punctuation">(</span>I<span class="token punctuation">)</span>mport key from the server <span class="token punctuation">(</span>I<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>Q<span class="token punctuation">)</span>uit.
Choose your action: I or Q: i

* Provide the Key generated by the server.
* The best approach is to <span class="token function">cut</span> and <span class="token function">paste</span> it.
*** OBS: Do not include spaces or new lines.

Paste it here <span class="token punctuation">(</span>or <span class="token string">'\q'</span> to quit<span class="token punctuation">)</span>: 
<span class="token assign-left variable">523b0d579891be85956bb3da6c757455005eaf1508ef578186431efbebf5901ecb467ddd857ed5dfdeb5b2cb00e8911c6d031</span><span class="token operator">=</span>

Agent information:
   ID:001
   Name:client@ubuntu
   IP Address:192.168.0.2

Confirm adding it?<span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>: y
Added.
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>Finally restart the OSSEC server and the client to enable and activate OSSEC HIDS.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/ossec-control restart
client@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/ossec-control restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>To confirm that our agent now is active, run the following command from the server.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/agent_control -lc

OSSEC HIDS agent_control. List of available agents:
   ID: 000, Name: server@ubuntu <span class="token punctuation">(</span>server<span class="token punctuation">)</span>, IP: <span class="token number">127.0</span>.0.1, Active/Local
   ID: 001, Name: client@ubuntu, IP: <span class="token number">192.168</span>.0.2, Active
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If the agent does not appear, make sure that the firewall settings are in place and that the correct ports are opened on both environments. See the <a href="#firewall-settings">Firewall settings</a> section for more information.</p>
<h2 id="windows-agent" tabindex="-1"><a class="header-anchor" href="#windows-agent" aria-hidden="true">#</a> Windows agent</h2>
<p>The following agent installation has been tested on Windows Server 2019 and Windows 10. Login to your OSSEC server and run the agent manager.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/manage_agents
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Select option (A) to add our new Windows agent.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   <span class="token punctuation">(</span>A<span class="token punctuation">)</span>dd an agent <span class="token punctuation">(</span>A<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>E<span class="token punctuation">)</span>xtract key <span class="token keyword">for</span> an agent <span class="token punctuation">(</span>E<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>L<span class="token punctuation">)</span>ist already added agents <span class="token punctuation">(</span>L<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>R<span class="token punctuation">)</span>emove an agent <span class="token punctuation">(</span>R<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>Q<span class="token punctuation">)</span>uit.
Choose your action: A,E,L,R or Q: a
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Enter the name of our Windows agent, specify its local IP address and attach an agent ID.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>- Adding a new agent <span class="token punctuation">(</span>use <span class="token string">'\q'</span> to <span class="token builtin class-name">return</span> to the main menu<span class="token punctuation">)</span>.
  Please provide the following:
   * A name <span class="token keyword">for</span> the new agent: client@windows
   * The IP Address of the new agent: <span class="token number">192.168</span>.0.2
   * An ID <span class="token keyword">for</span> the new agent<span class="token punctuation">[</span>001<span class="token punctuation">]</span>: 001
Agent information:
   ID:001
   Name:client@windows
   IP Address:192.168.0.2

Confirm adding it?<span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>: y
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Once we've created our new agent proceed to extract its agent key.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>****************************************
* OSSEC HIDS v3.6.0 Agent manager.     *
* The following options are available: *
****************************************
   <span class="token punctuation">(</span>A<span class="token punctuation">)</span>dd an agent <span class="token punctuation">(</span>A<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>E<span class="token punctuation">)</span>xtract key <span class="token keyword">for</span> an agent <span class="token punctuation">(</span>E<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>L<span class="token punctuation">)</span>ist already added agents <span class="token punctuation">(</span>L<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>R<span class="token punctuation">)</span>emove an agent <span class="token punctuation">(</span>R<span class="token punctuation">)</span>.
   <span class="token punctuation">(</span>Q<span class="token punctuation">)</span>uit.
Choose your action: A,E,L,R or Q: e

Available agents: 
   ID: 001, Name: client@windows, IP: <span class="token number">192.168</span>.0.2
Provide the ID of the agent to extract the key <span class="token punctuation">(</span>or <span class="token string">'\q'</span> to quit<span class="token punctuation">)</span>: 001
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Copy the agent ID as we will need it when setting up the client machine.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Agent key information <span class="token keyword">for</span> <span class="token string">'001'</span> is: 
<span class="token assign-left variable">xasdEGdh321ieC1i321wMSAxOTIuMTY4Ljg4LjYwIGRjdaszcxODVmZTY3N2U1M43156dasdaE5YjgyNzg2M2fsat6421WJhMDkzNjI3MTM4ZDk3ZGFhxsaRyvfYzExMDg1YTQ</span><span class="token operator">=</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Login to the Windows Server 2019 client machine and download the latest OSSEC windows agent client (in this case <a href="https://updates.atomicorp.com/channels/atomic/windows/ossec-agent-win32-3.6.0-12032.exe" target="_blank" rel="noopener noreferrer">3.6.0<OutboundLink/></a>). Otherwise you can find the latest release <a href="https://www.ossec.net/downloads/" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a> (under the latest stable releases and <em>Agent Windows</em>). Run the executable file.</p>
<img class="zoom-custom-imgs" :src="('/img/ossec/windows_agent_setup.png')" alt="Windows setup">
<p>Accept the current terms and agreements and proceed with the installation. In the next step you will be able to select which components to monitor. If you run a Windows web server keep the option to scan and monitor IIS logs checked (in this tutorial we do not use it).</p>
<img class="zoom-custom-imgs" :src="('/img/ossec/windows_agent_components.png')" alt="Windows components">
<p>Once we've completed the installation we will be presented the OSSEC Windows Agent Manager. Add the OSSEC server IP and the Authentication key we did copy in earlier section. Press save.</p>
<img class="zoom-custom-imgs" :src="('/img/ossec/windows_agent_manager.png')" alt="Windows manager">
<p>Next update the firewall settings on our OSSEC server (see <a href="https://www.libellux.com/ossec/#firewall-settings" target="_blank" rel="noopener noreferrer">Firewall Settings<OutboundLink/></a>) and add the Windows agent client IP address to the remote connection and allowed IPS section in the OSSEC server configuration file.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>global</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allow_list</span><span class="token punctuation">></span></span>192.168.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allow_list</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- OSSEC client --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>global</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>remote</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>connection</span><span class="token punctuation">></span></span>secure<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>connection</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allowed-ips</span><span class="token punctuation">></span></span>192.168.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allowed-ips</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- OSSEC client --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>remote</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Finally, to check if our new Windows agent is active run the agent control command as following.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ /var/ossec/bin/agent_control -lc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>OSSEC HIDS agent_control. List of available agents:
   ID: 000, Name: server@ubuntu <span class="token punctuation">(</span>server<span class="token punctuation">)</span>, IP: <span class="token number">127.0</span>.0.1, Active/Local
   ID: 001, Name: client@windows, IP: <span class="token number">192.168</span>.0.2, Active
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="agentless-monitoring" tabindex="-1"><a class="header-anchor" href="#agentless-monitoring" aria-hidden="true">#</a> Agentless monitoring</h2>
<div class="custom-container tip"><p class="custom-container-title">INFO</p>
<p>The agentless monitoring has so far only been tested with VMware ESXi 6.7. The result is still not 100% but will give an overview on how to configure your agentless servers or devices.</p>
</div>
<p>Generate SSH keys for the OSSEC user.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> -u ossec ssh-keygen
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>If receiving <code>Saving key &quot;/var/ossec/.ssh/id_rsa&quot; failed: Permission denied</code> make sure that OSSEC is the directory owner of <code>.ssh/</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">chown</span> -R ossec:ossec .ssh/
server@ubuntu:~$ <span class="token function">sudo</span> -u ossec ssh-keygen
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="vmware-esxi" tabindex="-1"><a class="header-anchor" href="#vmware-esxi" aria-hidden="true">#</a> VMware ESXi</h3>
<p>Login as the administrator through the vSphere client. Go to the <em>Host</em>, <em>Manage</em> and Advanced settings under the <em>System</em> tab.</p>
<img class="zoom-custom-imgs" :src="('/img/ossec/remote_syslog_settings.png')" alt="VMware syslog settings">
<p>Filter by <em>syslog</em> and find the <code>Syslog.global.logHOST</code> parameter. Right click and select <em>Edit option</em> and set our remote OSSEC host.</p>
<img class="zoom-custom-imgs" :src="('/img/ossec/remote_syslog_value.png')" alt="VMware syslog options">
<p>Additionally we need to edit the <code>/etc/profile.local</code> file for our VMware ESXi SSH prompt as the agentless service expects the prompt to end with either <code>#</code> or <code>$</code>. As administrator SSH to the VMware ESXi shell and using the vi editor append the following line.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># profile.local</span>
<span class="token comment"># This file is not used when UEFI secure boot is enabled</span>
<span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">"<span class="token entity" title="\e">\e</span>[0;41m[\u@\h \W]\$ <span class="token entity" title="\e">\e</span>[m"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="enabling-agentless-monitoring" tabindex="-1"><a class="header-anchor" href="#enabling-agentless-monitoring" aria-hidden="true">#</a> Enabling agentless monitoring</h3>
<p>To enable agentless monitoring go back to our OSSEC server and execute the following command.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ /var/ossec/bin/ossec-control <span class="token builtin class-name">enable</span> agentless
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Proceed to add VMware ESXi server. as agentless, using the <em>NOPASS</em> option as we're using SSH keys to authenticate.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ /var/ossec/agentless/register_host.sh <span class="token function">add</span> root@192.168.0.2 NOPASS
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To test if the authentication works you can run the command below.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> -u ossec <span class="token function">ssh</span> root@192.168.0.2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="configure-agentless-monitoring" tabindex="-1"><a class="header-anchor" href="#configure-agentless-monitoring" aria-hidden="true">#</a> Configure agentless monitoring</h3>
<p>For more information regarding setting up and configure agentless monitoring check the OSSEC documentation <a href="https://www.ossec.net/docs/manual/agent/agentless-monitoring.html" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<p>Open the OSSEC configuration file and add the VMware ESXi IP address to the remote syslog section.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>remote</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>connection</span><span class="token punctuation">></span></span>syslog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>connection</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>allowed-ips</span><span class="token punctuation">></span></span>192.168.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>allowed-ips</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- VMware ESXi --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>remote</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Additionally add the agentless types to our configuration.</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>agentless</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>ssh_integrity_check_bsd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frequency</span><span class="token punctuation">></span></span>36000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frequency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>host</span><span class="token punctuation">></span></span>root@192.168.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>host</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- VMware ESXi --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>state</span><span class="token punctuation">></span></span>periodic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>state</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arguments</span><span class="token punctuation">></span></span>/bin /etc/ /sbin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>arguments</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>agentless</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>agentless</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>ssh_generic_diff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>frequency</span><span class="token punctuation">></span></span>36000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>frequency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>host</span><span class="token punctuation">></span></span>root@192.168.0.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>host</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- VMware ESXi --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>state</span><span class="token punctuation">></span></span>periodic_diff<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>state</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>arguments</span><span class="token punctuation">></span></span>ls -la /etc; cat /etc/passwd<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>arguments</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>agentless</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Finally restart OSSEC.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/ossec-control restart
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<details class="custom-container details"><summary>UFW Settings</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw default deny incoming
server@ubuntu:~$ <span class="token function">sudo</span> ufw default allow outgoing
server@ubuntu:~$ <span class="token function">sudo</span> ufw allow <span class="token number">22</span>
server@ubuntu:~$ <span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
Command may disrupt existing <span class="token function">ssh</span> connections. Proceed with operation <span class="token punctuation">(</span>y<span class="token operator">|</span>n<span class="token punctuation">)</span>? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw allow proto udp from <span class="token number">192.168</span>.0.2 to any port <span class="token number">1514</span> comment <span class="token string">"OSSEC client"</span>
server@ubuntu:~$ <span class="token function">sudo</span> ufw allow proto udp from <span class="token number">192.168</span>.0.2 to any port <span class="token number">514</span> comment <span class="token string">"OSSEC client syslog"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="slack-integration" tabindex="-1"><a class="header-anchor" href="#slack-integration" aria-hidden="true">#</a> Slack integration</h2>
<p>Download <a href="/img/ossec/512x512.png">OSSEC icon</a> for the Slack App integration.</p>
<p>Add the ossec-slack command within the command section of the OSSEC configuration file.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To send all alerts to Slack with the pre-defined alert level, leave the expect segment blank.</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>ossec-slack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executable</span><span class="token punctuation">></span></span>ossec-slack.sh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executable</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>expect</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>expect</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!-- no expect args required --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeout_allowed</span><span class="token punctuation">></span></span>no<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>timeout_allowed</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>In the active response section we'll set the alert level.</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>active-response</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">></span></span>ossec-slack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span><span class="token punctuation">></span></span>server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>level</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>active-response</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Next edit the <code>ossec-slack.sh</code> file to match our Slack App settings.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/active-response/bin/ossec-slack.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>Make sure that the log path is correct <code>/../</code> in the ossec-slack.sh file.</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">SLACKUSER</span><span class="token operator">=</span><span class="token string">"OSSEC"</span>
<span class="token assign-left variable">CHANNEL</span><span class="token operator">=</span><span class="token string">"#ossec-hids"</span>
<span class="token assign-left variable">SITE</span><span class="token operator">=</span><span class="token string">"https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXX/XXXXXXXXXXX"</span>
<span class="token assign-left variable">SOURCE</span><span class="token operator">=</span><span class="token string">"ossec2slack"</span>
<span class="token punctuation">..</span>.
<span class="token comment"># Logging</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$LOCAL</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/
<span class="token assign-left variable"><span class="token environment constant">PWD</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">pwd</span><span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">date</span><span class="token variable">`</span></span> <span class="token variable">$0</span> <span class="token variable">$1</span> <span class="token variable">$2</span> <span class="token variable">$3</span> <span class="token variable">$4</span> <span class="token variable">$5</span> <span class="token variable">$6</span> <span class="token variable">$7</span> <span class="token variable">$8</span>"</span> <span class="token operator">>></span> <span class="token variable">${<span class="token environment constant">PWD</span>}</span>/<span class="token punctuation">..</span>/logs/active-responses.log
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Save the file and reload OSSEC and we should now start receive alerts to our defined channel.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/ossec-control reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="cloudflare-integration" tabindex="-1"><a class="header-anchor" href="#cloudflare-integration" aria-hidden="true">#</a> Cloudflare integration</h2>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>The Cloudflare integration requires you to have the jq (JSON processing) tool installed. This tool is used when removing blocked IP's following the repeated offenders timeout interval.</p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jq
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>First add the cloudflare-ban command to the OSSEC configuration file.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>cloudflare-ban<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executable</span><span class="token punctuation">></span></span>cloudflare-ban.sh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executable</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeout_allowed</span><span class="token punctuation">></span></span>yes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>timeout_allowed</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>expect</span><span class="token punctuation">></span></span>srcip<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>expect</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>As well to the active response section. Here we set to block all alerts level 6 or greater.</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>active-response</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>command</span><span class="token punctuation">></span></span>cloudflare-ban<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>command</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span><span class="token punctuation">></span></span>server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>level</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>level</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>timeout</span><span class="token punctuation">></span></span>43200<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>timeout</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>active-response</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Next proceed to update the <code>cloudflare-ban.sh</code> script and put your Cloudflare username along with your Global API key.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/active-response/bin/cloudflare-ban.sh
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ACTION</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">IP</span><span class="token operator">=</span><span class="token variable">$3</span>
<span class="token assign-left variable"><span class="token environment constant">PWD</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">pwd</span><span class="token variable">`</span></span>
<span class="token assign-left variable">TOKEN</span><span class="token operator">=</span><span class="token string">'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9ey'</span>
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token string">'cloudflareuser@email.com'</span>
<span class="token assign-left variable">MODE</span><span class="token operator">=</span><span class="token string">'block'</span> <span class="token comment"># block or challenge</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Save the changes and reload OSSEC.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/ossec-control reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>To monitor the blocked IP address within the Cloudflare account, go to Firewall, Tools and under IP Access Rules.</p>
<h2 id="monitoring" tabindex="-1"><a class="header-anchor" href="#monitoring" aria-hidden="true">#</a> Monitoring</h2>
<p>To monitor if the OSSEC daemons are running accordingly, we use Monit to monitor the current status. Edit the Monit configuration file and add the lines below, continue with reloading the Monit daemon to apply the new monitoring rules. If working correctly we shall now receive M/Monit alerts saying processes is not running.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /usr/local/etc/monitrc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># OSSEC processes</span>
check process ossec-agentd matching <span class="token string">"ossec-agentd"</span>
check process ossec-execd matching <span class="token string">"ossec-execd"</span>
check process ossec-logcollector matching <span class="token string">"ossec-logcollector"</span>
check process ossec-syscheckd matching <span class="token string">"ossec-syscheckd"</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Save and reload Monit.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token builtin class-name">cd</span> /usr/local/
client@ubuntu:~$ <span class="token function">sudo</span> ./bin/monit reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="monitor-failed-m-monit-login-attempts-with-ossec" tabindex="-1"><a class="header-anchor" href="#monitor-failed-m-monit-login-attempts-with-ossec" aria-hidden="true">#</a> Monitor failed M/Monit login attempts with OSSEC</h3>
<p>Add the M/Monit error.log path to the OSSEC monitor section (local files).</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/etc/ossec.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localfile</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>log_format</span><span class="token punctuation">></span></span>syslog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>log_format</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span><span class="token punctuation">></span></span>/usr/local/mmonit-3.7.2/logs/error.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localfile</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Go to the OSSEC server and add the custom rule to the <code>local_rules.xml</code> file.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /var/ossec/rules/local_rules.xml
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100101<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if_sid</span><span class="token punctuation">></span></span>2501<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if_sid</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>match</span><span class="token punctuation">></span></span>Unauthorized, authentication failed for<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>match</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>group</span><span class="token punctuation">></span></span>authentication_failed,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>User authentication failure.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Save and reload the OSSEC server.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /var/ossec/bin/ossec-control reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="upgrading" tabindex="-1"><a class="header-anchor" href="#upgrading" aria-hidden="true">#</a> Upgrading</h2>
<p>To upgrade OSSEC, download the <a href="https://github.com/ossec/ossec-hids/releases" target="_blank" rel="noopener noreferrer">latest release<OutboundLink/></a>, extract the file and run the install script. The installer will tell if OSSEC is already installed and if you wish to update it.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">wget</span> https://github.com/ossec/ossec-hids/archive/3.6.0.tar.gz
server@ubuntu:~$ <span class="token function">tar</span> -zxvf <span class="token number">3.6</span>.0.tar.gz
server@ubuntu:~$ <span class="token builtin class-name">cd</span> ossec-hids-3.6.0/
server@ubuntu:~$ <span class="token function">wget</span> https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@ubuntu:~$ <span class="token function">tar</span> -zxvf pcre2-10.32.tar.gz -C src/external/
server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential libssl-dev libpcre2-dev zlib1g-dev
server@ubuntu:~$ <span class="token function">sudo</span> <span class="token assign-left variable">PCRE2_SYSTEM</span><span class="token operator">=</span>yes ./install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="upgrade-to-ossec-3-3-0" tabindex="-1"><a class="header-anchor" href="#upgrade-to-ossec-3-3-0" aria-hidden="true">#</a> Upgrade to OSSEC 3.3.0</h3>
<p>To upgrade to OSSEC 3.3.0 using the pcre2 package, download the new version along with the pcre2 package, extract and upgrade OSSEC as normal.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">wget</span> https://github.com/ossec/ossec-hids/archive/3.3.0.tar.gz
server@ubuntu:~$ <span class="token function">tar</span> -zxvf <span class="token number">3.3</span>.0.tar.gz
server@ubuntu:~$ <span class="token builtin class-name">cd</span> ossec-hids-3.3.0/
server@ubuntu:~$ <span class="token function">wget</span> https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@ubuntu:~$ <span class="token function">tar</span> -zxvf pcre2-10.32.tar.gz -C src/external/
server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> build-essential libssl-dev libpcre2-dev zlib1g-dev
server@ubuntu:~$ <span class="token function">sudo</span> <span class="token assign-left variable">PCRE2_SYSTEM</span><span class="token operator">=</span>yes ./install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>OSSEC HIDS v2.9.3 Installation Script - http://www.ossec.net
 
You are about to start the installation process of the OSSEC HIDS.
You must have a C compiler pre-installed <span class="token keyword">in</span> your system.
 
    - System: Linux <span class="token function">hostname</span> <span class="token number">4.4</span>.0-116-generic
    - User: root
    - Host: <span class="token function">hostname</span>

    -- Press ENTER to <span class="token builtin class-name">continue</span> or Ctrl-C to abort. --

    - You already have OSSEC installed. Do you want to update it? <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>: y
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="custom-rules" tabindex="-1"><a class="header-anchor" href="#custom-rules" aria-hidden="true">#</a> Custom rules</h2>
<p>Read more about how to create custom rules and decoders <a href="https://www.ossec.net/docs/manual/rules-decoders/create-custom.html" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/ossec/config/local_rules.xml" target="_blank" rel="noopener noreferrer">local_rules.xml<OutboundLink/></a></li>
</ul>
<h3 id="ignore-snap-loop-devices" tabindex="-1"><a class="header-anchor" href="#ignore-snap-loop-devices" aria-hidden="true">#</a> Ignore snap loop devices</h3>
<p><code>/var/ossec/rules/local_rules.xml</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100100<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if_sid</span><span class="token punctuation">></span></span>531<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if_sid</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>regex</span><span class="token punctuation">></span></span>'df -P':\s+/dev/loop\d+\s+\d+\s+\d+\s+0\s+100%\s+/snap/\w+/\d+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>regex</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>Ignore full snap loop devices.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="monitor-failed-m-monit-authentication" tabindex="-1"><a class="header-anchor" href="#monitor-failed-m-monit-authentication" aria-hidden="true">#</a> Monitor failed M/Monit authentication</h3>
<p><code>/var/ossec/rules/local_rules.xml</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100101<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if_sid</span><span class="token punctuation">></span></span>2501<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if_sid</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>match</span><span class="token punctuation">></span></span>Unauthorized, authentication failed for<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>match</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>group</span><span class="token punctuation">></span></span>authentication_failed,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>User authentication failure.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><code>/var/ossec/etc/oseec.conf</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localfile</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>log_format</span><span class="token punctuation">></span></span>syslog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>log_format</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span><span class="token punctuation">></span></span>/usr/local/mmonit-3.7.2/logs/error.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localfile</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="mute-useless-systemd-resolved-message" tabindex="-1"><a class="header-anchor" href="#mute-useless-systemd-resolved-message" aria-hidden="true">#</a> Mute useless systemd-resolved message</h3>
<p><code>/var/ossec/rules/local_rules.xml</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100102<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>program_name</span><span class="token punctuation">></span></span>systemd-resolved<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>program_name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>match</span><span class="token punctuation">></span></span>Server returned error NXDOMAIN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>match</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>Useless systemd-resolved log message.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="alert-on-fail2ban-action" tabindex="-1"><a class="header-anchor" href="#alert-on-fail2ban-action" aria-hidden="true">#</a> Alert on fail2ban action</h3>
<p><code>/var/ossec/rules/local_rules.xml</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100103<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>match</span><span class="token punctuation">></span></span>fail2ban.actions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>match</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>group</span><span class="token punctuation">></span></span>authentication_failed,<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>Fail2ban action taken.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>/var/ossec/etc/oseec.conf</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>localfile</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>log_format</span><span class="token punctuation">></span></span>syslog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>log_format</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>location</span><span class="token punctuation">></span></span>/var/log/fail2ban.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>location</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>localfile</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command-line</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>/var/ossec/bin/agent_control -lc</td>
<td>List all active agents</td>
</tr>
<tr>
<td>/var/ossec/bin/ossec-logtest</td>
<td>Logtest</td>
</tr>
<tr>
<td>/var/ossec/bin/ossec-control</td>
<td>start,stop,reload,restart,status,enable,disable</td>
</tr>
<tr>
<td>/var/ossec/bin/manage_agents</td>
<td>manage agents (e.g., add, remove)</td>
</tr>
</tbody>
</table>
<h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>
<p>If you encounter any issue or having questions regarding OSSEC I recommend using their very helpful <a href="https://groups.google.com/forum/#!forum/ossec-list" target="_blank" rel="noopener noreferrer">mailing list<OutboundLink/></a>.</p>
<p>You can also read more about debug mode and how to view more verbose logs <a href="https://www.ossec.net/docs/faq/unexpected.html" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<p><a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">Questions<OutboundLink/></a>, <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">comments<OutboundLink/></a>, or <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">problems<OutboundLink/></a> regarding this service? Create an issue <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a> or contact <a href="mailto:webmaster@libellux.com">webmaster@libellux.com</a>.</p>
<h3 id="duplicate-counter-error" tabindex="-1"><a class="header-anchor" href="#duplicate-counter-error" aria-hidden="true">#</a> Duplicate counter error</h3>
<p>In the OSSEC log (/var/ossec/logs/ossec.log) you might notice that the log gets filled with warnings and errors as shown below.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2019</span>/02/21 <span class="token number">13</span>:33:21 ossec-remoted: WARN: Duplicate error: <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token number">2019</span>/02/21 <span class="token number">13</span>:33:21 ossec-remoted<span class="token punctuation">(</span><span class="token number">1407</span><span class="token punctuation">)</span>: ERROR: Duplicated counter <span class="token keyword">for</span> <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Stop both the OSSEC manager and the agent. In the agent server go to /var/ossec/queue/rids and remove all the files within the folder. At the manager server go into /var/ossec/queue/rids and remove the file corresponding to the agents ID. Do not delete the sender_counter. Restart both.</p>
<p>Or disable the feature by editing <code>/var/ossec/etc/internal_options.conf</code></p>
<pre><code># Verify msg id (set to 0 to disable it)
remoted.verify_msg_id=0
</code></pre>
<p>Save and restart.</p>
<h3 id="build-essential" tabindex="-1"><a class="header-anchor" href="#build-essential" aria-hidden="true">#</a> build-essential</h3>
<p>If receiving build error <code>./install.sh: 105: make: not found</code> install the build-essential package <code>sudo apt-get install build-essential</code>.</p>
<h3 id="libevent-dev" tabindex="-1"><a class="header-anchor" href="#libevent-dev" aria-hidden="true">#</a> libevent-dev</h3>
<p>If receiving the build error below, install the libevent development package <code>sudo apt-get install libevent-dev</code>.</p>
<pre><code>os_maild/sendmail.c:12:10: fatal error: event.h: No such file or directory
12 | #include &lt;event.h&gt;
   |          ^~~~~~~~~
compilation terminated.
make: *** [Makefile:926: os_maild/sendmail.o] Error 1
</code></pre>
<h3 id="pcre2-libpcre2-dev" tabindex="-1"><a class="header-anchor" href="#pcre2-libpcre2-dev" aria-hidden="true">#</a> pcre2 &amp; libpcre2-dev</h3>
<p>If receiving the build error <code>./os_regex/os_regex.h:19:10: fatal error: pcre2.h: No such file or directory</code> download and install pcre2 package (version 10.32) found <a href="https://ftp.pcre.org/pub/pcre/" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">wget</span> https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
server@ubuntu:~$ <span class="token function">tar</span> -zxvf pcre2-10.32.tar.gz -C src/external/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>If the build error persist, make sure to install the libpcre2 development package <code>sudo apt-get install libpcre2-dev</code>.</p>
<h3 id="zlib1g-dev" tabindex="-1"><a class="header-anchor" href="#zlib1g-dev" aria-hidden="true">#</a> zlib1g-dev</h3>
<p>If receiving the build error <code>os_zlib/os_zlib.c:13:10: fatal error: zlib.h: No such file or directory</code> install the zlib1g development package <code>sudo apt-get install zlib1g-dev</code>.</p>
<h3 id="libssl-dev" tabindex="-1"><a class="header-anchor" href="#libssl-dev" aria-hidden="true">#</a> libssl-dev</h3>
<p>If receiving the build error <code>./external/compat/includes.h:65:10: fatal error: openssl/opensslv.h: No such file or directory</code> install the libssl development package <code>sudo apt-get install libssl-dev</code>.</p>
<h3 id="ignore-snap-partition-state" tabindex="-1"><a class="header-anchor" href="#ignore-snap-partition-state" aria-hidden="true">#</a> Ignore snap partition state</h3>
<p>If receiving multiple snap partition usage alerts, add a custom rule to local_rules.xml.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Rule: <span class="token number">531</span> <span class="token punctuation">(</span>level <span class="token number">7</span><span class="token punctuation">)</span> -<span class="token operator">></span> <span class="token string">'Partition usage reached 100% (disk space monitor).'</span>
ossec: output: <span class="token string">'df -P'</span><span class="token builtin class-name">:</span> /dev/loop0           <span class="token number">27776</span>   <span class="token number">27776</span>         <span class="token number">0</span>     <span class="token number">100</span>% /snap/snapd/7264
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100100<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if_sid</span><span class="token punctuation">></span></span>531<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if_sid</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>regex</span><span class="token punctuation">></span></span>'df -P':\s+/dev/loop\d+\s+\d+\s+\d+\s+0\s+100%\s+/snap/\w+/\d+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>regex</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>Ignore full snap loop devices<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="server-returned-error-nxdomain" tabindex="-1"><a class="header-anchor" href="#server-returned-error-nxdomain" aria-hidden="true">#</a> Server returned error NXDOMAIN</h3>
<p>If receiving multiple systemd-resolved regarding NXDOMAIN and potential DNS violation, add a custom rule to local_rules.xml.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemd-resolved<span class="token punctuation">[</span><span class="token number">3225</span><span class="token punctuation">]</span>: message repeated <span class="token number">4</span> times: <span class="token punctuation">[</span> Server returned error NXDOMAIN, mitigating potential DNS violation DVE-2018-0001, retrying transaction with reduced feature level UDP.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rule</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100102<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>program_name</span><span class="token punctuation">></span></span>systemd-resolved<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>program_name</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>match</span><span class="token punctuation">></span></span>Server returned error NXDOMAIN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>match</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>Useless systemd-resolved log message.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rule</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="cannot-unlink-queue-rids-sender" tabindex="-1"><a class="header-anchor" href="#cannot-unlink-queue-rids-sender" aria-hidden="true">#</a> Cannot unlink /queue/rids/sender</h3>
<p>If receiving the error message shown below.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">2020</span>/08/09 <span class="token number">20</span>:04:17 manage_agents: ERROR: Cannot unlink /queue/rids/sender: No such <span class="token function">file</span> or directory
Added.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Proceed with creating the missing file <code>sudo touch /queue/rids/sender</code>.</p>
<h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading <Badge text="affiliate links" type="warning"/></h2>
<ul>
<li><a href="https://amzn.to/3oDUNys" target="_blank" rel="noopener noreferrer">Instant OSSEC Host-based Intrusion Detection, Lhotsky Brad, 2013<OutboundLink/></a></li>
<li><a href="https://amzn.to/2TCKKLP" target="_blank" rel="noopener noreferrer">OSSEC Host-Based Intrusion Detection Guide, Rory Bray, 2008<OutboundLink/></a></li>
</ul>
<h2 id="enterprise-solutions" tabindex="-1"><a class="header-anchor" href="#enterprise-solutions" aria-hidden="true">#</a> Enterprise solutions <Badge text="non-sponsored" type="default"/></h2>
<h3 id="atomic-enterprise-ossec" tabindex="-1"><a class="header-anchor" href="#atomic-enterprise-ossec" aria-hidden="true">#</a> Atomic Enterprise OSSEC</h3>
<p>Atomic Enterprise OSSEC is built specifically for organizations that need to leverage OSSEC in large or mission critical environments. With a dedicated management console, thousands of pre-built OSSEC rules, compliance reporting, and more, Atomic Enterprise OSSEC makes it easy to deploy, manage, and use OSSEC in any on-premise, cloud, or hybrid environment.</p>
<p><a href="https://atomicorp.com/atomic-enterprise-ossec/" target="_blank" rel="noopener noreferrer">Atomic Enterprise OSSEC<OutboundLink/></a></p>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><OutboundLink/></a></p>
</template>
