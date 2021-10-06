<template><h1 id="greenbone-vulnerability-manager" tabindex="-1"><a class="header-anchor" href="#greenbone-vulnerability-manager" aria-hidden="true">#</a> Greenbone Vulnerability Manager <Badge text="Rev 6" type="tip"/></h1>
<p>OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.</p>
<p><a href="https://www.greenbone.net/en/vulnerability-management/" target="_blank" rel="noopener noreferrer">GVM website<OutboundLink/></a> <a href="https://www.openvas.org/" target="_blank" rel="noopener noreferrer">OpenVAS website<OutboundLink/></a> <a href="https://github.com/greenbone/openvas" target="_blank" rel="noopener noreferrer">GitHub<OutboundLink/></a> <a href="https://greenbone.github.io/docs/" target="_blank" rel="noopener noreferrer">GVM official docs<OutboundLink/></a></p>
<p>Setup and configuration have been tested on the following operating systems:</p>
<ul>
<li>Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)</li>
<li>GVM 20.08 for Debian 10 visit <a href="https://sadsloth.net/post/install-gvm-20_08-src-on-debian/" target="_blank" rel="noopener noreferrer">sadsloth.net<OutboundLink/></a>.</li>
<li>GVM-9 (OpenVAS-9), Atomicorp 20.08 (RHEL 8, CentOS 8, Fedora 32), GVM- 20.08, 20.08.1, 21.04, 21.4.2</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><OutboundLink/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The lines in the &quot;scripts&quot; below has been used for testing and successfully configure GVM 20.08 (20.08.1) and 21.04 (21.4.2).
You may use the testing guide to install GVM or follow our detailed step-by-step tutorial below to install GVM 21.04.</p>
</div>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/21_4_2.sh" target="_blank" rel="noopener noreferrer">21.4.2<OutboundLink/></a></li>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/20_08_1.sh" target="_blank" rel="noopener noreferrer">20.08.1<OutboundLink/></a></li>
</ul>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Dependencies required to install GVM 21.04 (21.4.2) from source. For more detailed information regarding dependencies and their function please visit <a href="https://greenbone.github.io/docs/" target="_blank" rel="noopener noreferrer">GVM official docs<OutboundLink/></a> website.</p>
<details class="custom-container details"><summary>Dependencies for Ubuntu 20.04</summary>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>build-essential cmake gnutls-bin pkg-config glib2.0
libgnutls28-dev libssh-dev libssl-dev libhiredis-dev
redis-server libxml2-dev doxygen xsltproc libldap2-dev
libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev
graphviz bison libksba-dev libical-dev libpq-dev
postgresql postgresql-contrib postgresql-server-dev-all
libopenvas-dev heimdal-dev libpopt-dev xmltoman
gcc-mingw-w64 nmap <span class="token function">npm</span> nodejs libpthread-stubs0-dev
clang-format libmicrohttpd-dev <span class="token function">yarn</span> virtualenv
python3-paramiko python3-lxml python3-defusedxml
python3-pip python3-psutil libnet1-dev libunistring-dev
xmlstarlet texlive-fonts-recommended texlive-latex-extra
</code></pre></div></details>
<h2 id="install-gvm-21-04-from-source" tabindex="-1"><a class="header-anchor" href="#install-gvm-21-04-from-source" aria-hidden="true">#</a> Install GVM 21.04 from source</h2>
<p>Begin to install the dependencies for GVM 21.04 (21.4.2).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y upgrade <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y build-essential <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y cmake pkg-config glib2.0 gcc-mingw-w64 <span class="token punctuation">\</span>
gnutls-bin libgnutls28-dev libxml2-dev libssh-dev libssl-dev libunistring-dev <span class="token punctuation">\</span>
libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev <span class="token punctuation">\</span>
libksba-dev libical-dev libpq-dev libopenvas-dev libpopt-dev libnet1-dev <span class="token punctuation">\</span>
libmicrohttpd-dev redis-server libhiredis-dev doxygen xsltproc <span class="token punctuation">\</span>
graphviz bison postgresql postgresql-contrib postgresql-server-dev-all <span class="token punctuation">\</span>
heimdal-dev xmltoman nmap <span class="token function">npm</span> nodejs virtualenv <span class="token punctuation">\</span>
python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil <span class="token punctuation">\</span>
xmlstarlet texlive-fonts-recommended texlive-latex-extra
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Continue to install yarn using npm with the specified installation path.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span> --prefix /usr/
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="set-up-gvm-user-define-installation-paths" tabindex="-1"><a class="header-anchor" href="#set-up-gvm-user-define-installation-paths" aria-hidden="true">#</a> Set up GVM user define installation paths</h3>
<p>Create the GVM user and add it to sudoers group without login. Also add your current sudo user to the GVM group so you're allowed to run <em>gvmd</em>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">useradd</span> -r -M -U -G <span class="token function">sudo</span> -s /usr/sbin/nologin gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -aG gvm <span class="token environment constant">$USER</span> <span class="token operator">&amp;&amp;</span> <span class="token function">su</span> <span class="token environment constant">$USER</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">bash</span> -c <span class="token string">'cat &lt;&lt; EOF > /etc/ld.so.conf.d/gvm.conf
# gmv libs location
/usr/local/lib/
EOF'</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next define base, source, build and installation directories.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/sbin <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable">INSTALL_PREFIX</span><span class="token operator">=</span>/usr/local <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">SOURCE_DIR</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/source <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$SOURCE_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">BUILD_DIR</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/build <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INSTALL_DIR</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/install <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$INSTALL_DIR</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="import-gvm-signing-key-to-validate-the-integrity-of-the-source-files" tabindex="-1"><a class="header-anchor" href="#import-gvm-signing-key-to-validate-the-integrity-of-the-source-files" aria-hidden="true">#</a> Import GVM signing key to validate the integrity of the source files</h3>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">curl</span> -O https://www.greenbone.net/GBCommunitySigningKey.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --import GBCommunitySigningKey.asc
gpg --edit-key 9823FAA60ED1E580
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Edit GVM signing key to trust ultimately</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ gpg --edit-key 9823FAA60ED1E580
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>When you get prompted type <em>trust</em> and select option 5 (I trust ultimately).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

pub  rsa4096/9823FAA60ED1E580
     created: 2017-09-06  expires: never       usage: SC
     trust: unknown       validity: unknown
[ unknown] (1). Greenbone Community Feed integrity key

gpg> trust
pub  rsa4096/9823FAA60ED1E580
     created: 2017-09-06  expires: never       usage: SC
     trust: unknown       validity: unknown
[ unknown] (1). Greenbone Community Feed integrity key

Please decide how far you trust this user to correctly verify other users' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don't know or won't say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5
Do you really want to set this key to ultimate trust? (y/N) y

pub  rsa4096/9823FAA60ED1E580
     created: 2017-09-06  expires: never       usage: SC
     trust: ultimate      validity: unknown
[ unknown] (1). Greenbone Community Feed integrity key
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg> quit
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="build-gvm-libraries" tabindex="-1"><a class="header-anchor" href="#build-gvm-libraries" aria-hidden="true">#</a> Build GVM libraries</h3>
<p>Download and build the <a href="https://github.com/greenbone/gvm-libs" target="_blank" rel="noopener noreferrer">GVM libraries<OutboundLink/></a> version 21.04 (21.4.2). Set the GVM libraries to same version as GVM.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">GVM_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GVM_LIBS_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Download and verify the specified GVM libraries.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">curl</span> -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gvm-libs/releases/download/v<span class="token variable">$GVM_LIBS_VERSION</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Make sure the output says that the signature from Greenbone Community Feed is good.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Tue 03 Aug <span class="token number">2021</span> <span class="token number">12</span>:11:44 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: checking the trustdb
gpg: marginals needed: <span class="token number">3</span>  completes needed: <span class="token number">1</span>  trust model: pgp
gpg: depth: <span class="token number">0</span>  valid:   <span class="token number">1</span>  signed:   <span class="token number">0</span>  trust: <span class="token number">0</span>-, 0q, 0n, 0m, 0f, 1u
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Once you've confirmed that the signature is good proceed to install GVM libraries.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/gvm-libs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/gvm-libs <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
  -DLOCALSTATEDIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DGVM_PID_DIR<span class="token operator">=</span>/run/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-greenbone-vulnerability-manager" tabindex="-1"><a class="header-anchor" href="#build-the-greenbone-vulnerability-manager" aria-hidden="true">#</a> Build the Greenbone Vulnerability Manager</h3>
<p>Next download, verify and build the <a href="https://github.com/greenbone/gvmd" target="_blank" rel="noopener noreferrer">Greenbone Vulnerability Manager (GVM)<OutboundLink/></a> version 21.04 (21.4.3). Set the GVMD version to the latest realese 21.4.3.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">GVMD_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.3 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v<span class="token variable">$GVMD_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gvmd/releases/download/v<span class="token variable">$GVMD_VERSION</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Make sure the signature from Greenbone Community Feed is good.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Tue 03 Aug <span class="token number">2021</span> 02:28:53 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Extract the downloaded GVMD file and proceed with the installation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/gvmd <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/gvmd <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DLOCALSTATEDIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
  -DGVM_DATA_DIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DGVM_RUN_DIR<span class="token operator">=</span>/run/gvm <span class="token punctuation">\</span>
  -DOPENVAS_DEFAULT_SOCKET<span class="token operator">=</span>/run/ospd/ospd-openvas.sock <span class="token punctuation">\</span>
  -DGVM_FEED_LOCK_PATH<span class="token operator">=</span>/var/lib/gvm/feed-update.lock <span class="token punctuation">\</span>
  -DSYSTEMD_SERVICE_DIR<span class="token operator">=</span>/lib/systemd/system <span class="token punctuation">\</span>
  -DDEFAULT_CONFIG_DIR<span class="token operator">=</span>/etc/default <span class="token punctuation">\</span>
  -DLOGROTATE_DIR<span class="token operator">=</span>/etc/logrotate.d <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-greenbone-security-assistant" tabindex="-1"><a class="header-anchor" href="#build-the-greenbone-security-assistant" aria-hidden="true">#</a> Build the Greenbone Security Assistant</h3>
<p>Proceed to download and build the <a href="https://github.com/greenbone/gsa" target="_blank" rel="noopener noreferrer">Greenbone Security Assistant (GSA)<OutboundLink/></a> version 21.04 (21.4.2) and its node modules.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">GSA_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsa/archive/refs/tags/v<span class="token variable">$GSA_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsa/releases/download/v<span class="token variable">$GSA_VERSION</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsa/releases/download/v<span class="token variable">$GSA_VERSION</span>/gsa-node-modules-<span class="token variable">$GSA_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gsa-node-modules-<span class="token variable">$GSA_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsa/releases/download/v<span class="token variable">$GSA_VERSION</span>/gsa-node-modules-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gsa-node-modules-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gsa-node-modules-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gsa-node-modules-<span class="token variable">$GSA_VERSION</span>.tar.gz
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once complete verify the GSA downloads and make sure the signature from Greenbone Community Feed is good.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Tue 03 Aug <span class="token number">2021</span> 02:59:15 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
gpg: Signature made Tue 03 Aug <span class="token number">2021</span> 02:54:19 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Proceed with the installation of GSA.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This may take a while.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>/gsa -xvzf <span class="token variable">$SOURCE_DIR</span>/gsa-node-modules-<span class="token variable">$GSA_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/gsa <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/gsa <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
  -DLOCALSTATEDIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DGVM_RUN_DIR<span class="token operator">=</span>/run/gvm <span class="token punctuation">\</span>
  -DGSAD_PID_DIR<span class="token operator">=</span>/run/gvm <span class="token punctuation">\</span>
  -DLOGROTATE_DIR<span class="token operator">=</span>/etc/logrotate.d <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-openvas-samba-module" tabindex="-1"><a class="header-anchor" href="#build-the-openvas-samba-module" aria-hidden="true">#</a> Build the OpenVAS Samba module</h3>
<p>Download and build the <a href="https://github.com/greenbone/openvas-smb" target="_blank" rel="noopener noreferrer">OpenVAS SMB module<OutboundLink/></a> version 21.04.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">OPENVAS_SMB_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-smb/releases/download/v<span class="token variable">$OPENVAS_SMB_VERSION</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Fri <span class="token number">25</span> Jun <span class="token number">2021</span> 06:36:43 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Extract files.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/openvas-smb <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/openvas-smb <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-openvas-scanner" tabindex="-1"><a class="header-anchor" href="#build-the-openvas-scanner" aria-hidden="true">#</a> Build the OpenVAS Scanner</h3>
<p>Download and build the <a href="https://github.com/greenbone/openvas" target="_blank" rel="noopener noreferrer">openvas-scanner (OpenVAS)<OutboundLink/></a> version 21.04 (21.4.1).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">OPENVAS_SCANNER_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-scanner/releases/download/v<span class="token variable">$OPENVAS_SCANNER_VERSION</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Tue 03 Aug <span class="token number">2021</span> <span class="token number">12</span>:59:52 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/openvas-scanner <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/openvas-scanner <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
  -DLOCALSTATEDIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DOPENVAS_FEED_LOCK_PATH<span class="token operator">=</span>/var/lib/openvas/feed-update.lock <span class="token punctuation">\</span>
  -DOPENVAS_RUN_DIR<span class="token operator">=</span>/run/ospd <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-ospd-and-ospd-openvas" tabindex="-1"><a class="header-anchor" href="#build-ospd-and-ospd-openvas" aria-hidden="true">#</a> Build ospd and ospd-openvas</h3>
<p>Proceed to download and install <a href="https://github.com/greenbone/ospd" target="_blank" rel="noopener noreferrer">ospd<OutboundLink/></a>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">OSPD_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.3 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable">OSPD_OPENVAS_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/ospd/archive/refs/tags/v<span class="token variable">$OSPD_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/ospd-<span class="token variable">$OSPD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/ospd/releases/download/v<span class="token variable">$OSPD_VERSION</span>/ospd-<span class="token variable">$OSPD_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/ospd-<span class="token variable">$OSPD_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/ospd-openvas/releases/download/v<span class="token variable">$OSPD_OPENVAS_VERSION</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/ospd-<span class="token variable">$OSPD_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/ospd-<span class="token variable">$OSPD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/ospd-<span class="token variable">$OSPD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$SOURCE_DIR</span>/ospd-<span class="token variable">$OSPD_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
python3 -m pip <span class="token function">install</span> <span class="token builtin class-name">.</span> --prefix<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> --root<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ pip <span class="token function">install</span> --upgrade <span class="token assign-left variable">psutil</span><span class="token operator">==</span><span class="token number">5.7</span>.2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
python3 -m pip <span class="token function">install</span> <span class="token builtin class-name">.</span> --prefix<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> --root<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> --no-warn-script-location <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
python3 -m pip <span class="token function">install</span> --user gvm-tools <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Continue by extracting both files.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-$OSPD_VERSION.tar.gz
server@ubuntu:~$ tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Before you install ospd and ospd-openvas make sure that you've got the required version of python3-psutil (5.7.2).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ pip install --upgrade psutil==5.7.2

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Once you've installed Python3-psutil 5.7.2 go to the source directory of ospd.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ cd $SOURCE_DIR/ospd-$OSPD_VERSION
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Run the installation.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ python3 -m pip install . --prefix=$INSTALL_PREFIX --root=$INSTALL_DIR
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Successfully built ospd wrapt
Installing collected packages: wrapt, deprecated, ospd
Successfully installed deprecated-1.2.12 ospd-21.4.3 wrapt-1.12.1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Proceed to install ospd-openvas and go to its source directory.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ cd $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Run the ospd-openvas installation.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ python3 -m pip install . --prefix=$INSTALL_PREFIX --root=$INSTALL_DIR --no-warn-script-location
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Clean up.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo cp -rv $INSTALL_DIR/* /
server@ubuntu:~$ rm -rf $INSTALL_DIR/*
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="build-the-gvm-tools" tabindex="-1"><a class="header-anchor" href="#build-the-gvm-tools" aria-hidden="true">#</a> Build the GVM tools</h3>
<p>Install <a href="https://github.com/greenbone/gvm-tools" target="_blank" rel="noopener noreferrer">GVM tools<OutboundLink/></a> version 21.04 (21.6.1).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ python3 -m pip install --user gvm-tools
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="configure-redis" tabindex="-1"><a class="header-anchor" href="#configure-redis" aria-hidden="true">#</a> Configure Redis</h3>
<p>Next configure redis for the default GVM installation.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo cp $SOURCE_DIR/openvas-scanner-$GVM_VERSION/config/redis-openvas.conf /etc/redis/
server@ubuntu:~$ sudo chown redis:redis /etc/redis/redis-openvas.conf
server@ubuntu:~$ echo "db_address = /run/redis-openvas/redis.sock" | sudo tee -a /etc/openvas/openvas.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Start the redis server and enable it as an start up service.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo systemctl start redis-server@openvas.service
server@ubuntu:~$ sudo systemctl enable redis-server@openvas.service
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Add redis to the GVM group.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo usermod -aG redis gvm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="set-up-gvm-user-permissions" tabindex="-1"><a class="header-anchor" href="#set-up-gvm-user-permissions" aria-hidden="true">#</a> Set up GVM user permissions</h3>
<p>Make sure that the GVM user and the GVM group has correct permissions.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo chown -R gvm:gvm /var/lib/gvm
server@ubuntu:~$ sudo chown -R gvm:gvm /var/lib/openvas
server@ubuntu:~$ sudo chown -R gvm:gvm /var/log/gvm
server@ubuntu:~$ sudo chown -R gvm:gvm /run/gvm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo chmod -R g+srw /var/lib/gvm
server@ubuntu:~$ sudo chmod -R g+srw /var/lib/openvas
server@ubuntu:~$ sudo chmod -R g+srw /var/log/gvm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo chown gvm:gvm /usr/local/sbin/gvmd
server@ubuntu:~$ sudo chmod 6750 /usr/local/sbin/gvmd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You also need to adjust the permissions for the feed synchronization.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo chown gvm:gvm /usr/local/bin/greenbone-nvt-sync
server@ubuntu:~$ sudo chmod 740 /usr/local/sbin/greenbone-feed-sync
server@ubuntu:~$ sudo chown gvm:gvm /usr/local/sbin/greenbone-*-sync
server@ubuntu:~$ sudo chmod 740 /usr/local/sbin/greenbone-*-sync
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>OpenVAS will be launched from an ospd-openvas process. The process need to be executed using root. Update the secure path in the sudoers file accordingly.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL

# allow users of the gvm group run openvas
%gvm ALL = NOPASSWD: /usr/local/sbin/openvas
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="configure-postgresql-database" tabindex="-1"><a class="header-anchor" href="#configure-postgresql-database" aria-hidden="true">#</a> Configure PostgreSQL database</h3>
<p>For additional information see reference greenbone/gvmd <a href="https://github.com/greenbone/gvmd/blob/master/INSTALL.md" target="_blank" rel="noopener noreferrer">INSTALL.md<OutboundLink/></a>.</p>
<p>First make sure that the required dependencies have been installed (see <a href="#prerequisites">Prerequisites</a>). Proceed to create a Postgres user and database.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo -u postgres bash
postgres@ubuntu:/home/server$ createuser -DRS gvm
postgres@ubuntu:/home/server$ createdb -O gvm gvmd
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Setup correct permissions.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>postgres@ubuntu:/home/server$ psql gvmd
gvmd=# create role dba with superuser noinherit;
gvmd=# grant dba to gvm;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Create database extensions.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gvmd=# create extension "uuid-ossp";
gvmd=# create extension "pgcrypto";
gvmd=# exit
postgres@ubuntu:/home/server$ exit
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="create-gvm-admin" tabindex="-1"><a class="header-anchor" href="#create-gvm-admin" aria-hidden="true">#</a> Create GVM admin</h3>
<p>Create the GVM administration user. Do not forget to change the password later.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Do not use special characters in the password.</p>
</div>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo /usr/local/sbin/gvmd --create-user=admin --password=admin
User created.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Next, lets retrieve our administrators uuid.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Use the administration uuid and modify the gvmd settings. Remember to put your uuid as the value option.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="update-network-vulnerability-tests" tabindex="-1"><a class="header-anchor" href="#update-network-vulnerability-tests" aria-hidden="true">#</a> Update Network Vulnerability Tests</h3>
<p>Update Network Vulnerability Tests (NVT) from Greenbone Community Feed (this might take awhile).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo -u gvm greenbone-nvt-sync
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="update-greenbone-feed-synchronisation" tabindex="-1"><a class="header-anchor" href="#update-greenbone-feed-synchronisation" aria-hidden="true">#</a> Update Greenbone Feed synchronisation</h3>
<p>Update the Greenbone feed synchronisation one at the time (this might take awhile).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo -u gvm greenbone-feed-sync --type GVMD_DATA
server@ubuntu:~$ sudo -u gvm greenbone-feed-sync --type SCAP
server@ubuntu:~$ sudo -u gvm greenbone-feed-sync --type CERT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="generate-gvm-certificates" tabindex="-1"><a class="header-anchor" href="#generate-gvm-certificates" aria-hidden="true">#</a> Generate GVM certificates</h3>
<p>Once we've finished the feed synchronisation generate GVM certificates.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo -u gvm gvm-manage-certs -a
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="set-up-systemd" tabindex="-1"><a class="header-anchor" href="#set-up-systemd" aria-hidden="true">#</a> Set up systemd</h3>
<p>Next setup the startup scripts. First, configure the Greenbone Manager startup script.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat &lt;&lt; EOF > $BUILD_DIR/gvmd.service
[Unit]
Description=Greenbone Vulnerability Manager daemon (gvmd)
After=network.target networking.service postgresql.service ospd-openvas.service
Wants=postgresql.service ospd-openvas.service
Documentation=man:gvmd(8)
ConditionKernelCommandLine=!recovery

[Service]
Type=forking
User=gvm
Group=gvm
PIDFile=/run/gvm/gvmd.pid
RuntimeDirectory=gvm
RuntimeDirectoryMode=2775
ExecStart=/usr/local/sbin/gvmd --osp-vt-update=/run/ospd/ospd-openvas.sock --listen-group=gvm
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo cp $BUILD_DIR/gvmd.service /etc/systemd/system/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Once the first startup script is saved, proceed to create the script for the Greenbone Security Assistant (GSA).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat &lt;&lt; EOF > $BUILD_DIR/gsad.service
[Unit]
Description=Greenbone Security Assistant daemon (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target gvmd.service
Wants=gvmd.service

[Service]
Type=forking
User=gvm
Group=gvm
PIDFile=/run/gvm/gsad.pid
ExecStart=/usr/local/sbin/gsad --listen=192.168.0.1 --port=9392
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
Alias=greenbone-security-assistant.service
EOF
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo cp $BUILD_DIR/gsad.service /etc/systemd/system/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Create the systemd service script for ospd-openvas.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cat &lt;&lt; EOF > $BUILD_DIR/ospd-openvas.service
[Unit]
Description=OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
Documentation=man:ospd-openvas(8) man:openvas(8)
After=network.target networking.service redis-server@openvas.service
Wants=redis-server@openvas.service
ConditionKernelCommandLine=!recovery

[Service]
Type=forking
User=gvm
Group=gvm
RuntimeDirectory=ospd
RuntimeDirectoryMode=2775
PIDFile=/run/ospd/ospd-openvas.pid
ExecStart=/usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas --socket-mode 0o770
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo cp $BUILD_DIR/ospd-openvas.service /etc/systemd/system/
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="modify-scanner" tabindex="-1"><a class="header-anchor" href="#modify-scanner" aria-hidden="true">#</a> Modify scanner</h3>
<p>Before running vulnerability scans, also known as tasks, you need to modify the default OpenVAS scanner. Get the pre-exisiting scanners by running command below. Copy the UUID from the OpenVAS Default Scanner.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo gvmd --get-scanners
6acd0832-df90-11e4-b9d5-28d24461215b  CVE    0  CVE
08b69003-5fc2-4037-a479-93b440211c73  OpenVAS  /opt/gvm/var/run/ospd.sock  0  OpenVAS Default
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Next run the modification command and attach the UUID to the scanner host socket.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo gvmd --modify-scanner=08b69003-5fc2-4037-a479-93b440211c73 --scanner-host=/run/ospd/ospd-openvas.sock
Scanner modified.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="enable-and-start-services" tabindex="-1"><a class="header-anchor" href="#enable-and-start-services" aria-hidden="true">#</a> Enable and start services</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo systemctl daemon-reload
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo systemctl enable ospd-openvas
server@ubuntu:~$ sudo systemctl enable gvmd
server@ubuntu:~$ sudo systemctl enable gsad
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo systemctl start ospd-openvas
server@ubuntu:~$ sudo systemctl start gvmd
server@ubuntu:~$ sudo systemctl start gsad
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Next check that all the services are running.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo systemctl status gvmd
● gvmd.service - Greenbone Vulnerability Manager daemon (gvmd)
     Loaded: loaded (/etc/systemd/system/gvmd.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-08-28 20:23:46 UTC; 54min ago
server@ubuntu:~$ sudo systemctl status gsad
● gsad.service - Greenbone Security Assistant daemon (gsad)
     Loaded: loaded (/etc/systemd/system/gsad.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-08-28 20:50:09 UTC; 28min ago
server@ubuntu:~$ sudo systemctl status ospd-openvas
● ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
     Loaded: loaded (/etc/systemd/system/ospd-openvas.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-08-28 20:48:04 UTC; 31min ago
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Login at your localhost e.g. <code>https://192.168.0.1:9392</code> with the username <code>admin</code> and the chosen password.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_login-2.png')" alt="GSA login">
<p>Once logged in, go to the <em>Administration</em> tab and select <em>Feed Status</em>. You'll see that the update is in progress (this might take awhile). When the status changed to <em>current</em>, go to the dashboard and it will be populated with CVEs by creation time and NVTs by severity class.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">
<p>You may also confirm the current version, go to the <em>Help</em> tab and select <em>About</em>.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_about.png')" alt="GSA about">
<p>To run basic vulnerability scans and get hands-on approach to get started with OpenVAS check the <a href="#running-vulnerability-scans">Running vulnerability scans</a> section.</p>
<h2 id="install-gvm-20-08-centos" tabindex="-1"><a class="header-anchor" href="#install-gvm-20-08-centos" aria-hidden="true">#</a> Install GVM 20.08 CentOS</h2>
<p><a href="https://github.com/Atomicorp/openvas" target="_blank" rel="noopener noreferrer">Atomicorp GVM package<OutboundLink/></a> <Badge text="non-sponsored" type="tip"/></p>
<p>Check if SELinux is enabled.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>If enabled proceed to disable SELinux by running the command below and update the SELinux configuration file.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ sudo setenforce 0
server@centos:~$ sudo nano /etc/selinux/config

# This file controls the state of SELinux on the system.
# SELINUX= can take one of these three values:
#     enforcing - SELinux security policy is enforced.
#     permissive - SELinux prints warnings instead of enforcing.
#     disabled - No SELinux policy is loaded.
SELINUX=disabled
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Save and reboot the system.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ sudo shutdown -r now
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Once the system rebooted control that SELinux been disabled.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ sestatus
SELinux status:                 disabled
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Continue and download the Atomicorp installer.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ wget -q -O - https://updates.atomicorp.com/installers/atomic | sudo sh

For supported software packages please contact us at: 

  sales@atomicorp.com

Do you agree to these terms? (yes/no) [Default: yes] yes
Enable repo by default? (yes/no) [Default: yes]: yes
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Enable PowerTools and install extra packages.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ sudo yum config-manager --set-enabled PowerTools
server@centos:~$ sudo yum install epel-release
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Proceed and install GVM.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ sudo yum install gvm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Finally run the GVM configuration script to setup GVM (this might take awhile).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@centos:~$ sudo gvm-setup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Once the GVM setup been complete proceed to set the administrator password.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Do not use special characters in the password.</p>
</div>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Updating OpenVAS Manager certificates: Complete

GVMD startup: Done

Set the GSAD admin users password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter Administrator Password:
Verify Administrator Password:

Setup complete
  Log in to GSAD at https://localhost
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Login at your localhost e.g. <code>https://192.168.0.1</code> with the username <code>admin</code> and the chosen password.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">
<h2 id="running-vulnerability-scans" tabindex="-1"><a class="header-anchor" href="#running-vulnerability-scans" aria-hidden="true">#</a> Running vulnerability scans</h2>
<p>There is several approaches on how to configure and run tasks (scans) toward your targets (hosts) in GVM. In this tutorial we will go through how to run the more basic tasks. We will do both unauthenticated scans, where we do not grant GVM SSH access to our target, and authenticated scans to help identify internal server vulnerabilites or misconfigurations.</p>
<h3 id="unauthenticated-scan" tabindex="-1"><a class="header-anchor" href="#unauthenticated-scan" aria-hidden="true">#</a> Unauthenticated scan</h3>
<br/>
<p align="center">
  <video width="600" controls poster="/img/icons/video.png" style="witdth:100%;height:auto;">
    <source src="/vids/openvas/unauthenticated_scan.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</p>
<p>Login to the Greenbone Security Assistant (GSA) e.g. <code>https://192.168.0.1</code>. Once logged in we will add our first target. Go the the <em>Configuration</em> menu in the top navigation and select <em>Targets</em>.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_targets.png')" alt="GSA targets">
<p>In the top left corner of the <em>Targets</em> view there's a starred document icon, click and select to create a <em>New Target</em>. Fill in the name of the target server e.g. <em>Ubuntu Client</em> and its IP address <code>192.168.0.2</code>. Leave the rest of the settings in default.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_target.png')" alt="GSA target">
<p>Next we will create a task for unauthenticated targets (scans without SSH access). Go the <em>Scans</em> in the top menu and select <em>Tasks</em>.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_tasks.png')" alt="GSA tasks">
<p>Click the starred document icon in the top left corner of the <em>Tasks</em> view.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_task.png')" alt="GSA task">
<p>Select a descriptive name for your task e.g. Unauthenticated scan. In the <em>Scan Targets</em> dropdown menu select your target we created before (Ubuntu Client). Leave the default settings and click save.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_noauth_task.png')" alt="GSA noauth task">
<p>You will then be redirected back to the <em>Tasks</em> overview and our new task will be listed in the table below the graphs. To start the scan press the start button on the right side of the table.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_noauth_scan.png')" alt="GSA noauth scan">
<h3 id="authenticated-scan" tabindex="-1"><a class="header-anchor" href="#authenticated-scan" aria-hidden="true">#</a> Authenticated scan</h3>
<p>First make sure that you've generated SSH keys for your GVM client user e.g. <code>client@ubuntu</code>. Add your public key to the targets authorized keys file. You may have to connect to your target host, through SSH, before running GVM vulnerability scan to add the target host to your clients machine known hosts. Once you've established a secure communication between your client and target, proceed to configure credentials in the Greenbone Security Assistant. Go to <em>Configuration</em> and select <em>Credentials</em>.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_credentials.png')" alt="GSA credentials">
<p>Next click the starred document in the top left corner to create your new credentials. Give the credentials a desciptive name with an optional comment. In the dropdown menu <em>Type</em>, select <em>Username + SSH key</em> and disallow insecure use and auto-generation. Add the username of the target host user followed by the password and upload the private key (e.g. id_rsa). Click save.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_newcredentials.png')" alt="GSA new credentials">
<p>Go to the <em>Targets</em> section and either edit your <a href="#unauthenticated-scan">unauthenticated scan</a> or create a new target. Set the host IP address and in the dropdown menu, under the <em>Credentials for authentication checks</em>, select your newly created SSH credential.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_auth_target.png')" alt="GSA auth target">
<p>Finally create a new task and select the target that we attached our credentials to and leave the default settings.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_auth_task.png')" alt="GSA auth task">
<h2 id="two-factor-authentication-w-privacyidea" tabindex="-1"><a class="header-anchor" href="#two-factor-authentication-w-privacyidea" aria-hidden="true">#</a> Two-factor authentication w/ privacyIDEA</h2>
<p>To enforce two-factor authentication for Greenbone Security Assistant with privacyIDEA and YubiKey read the <RouterLink to="/privacyidea/">Two-factor authentication w/ privacyIDEA and YubiKey</RouterLink> chapter.</p>
<h2 id="scheduled-jobs" tabindex="-1"><a class="header-anchor" href="#scheduled-jobs" aria-hidden="true">#</a> Scheduled jobs</h2>
<p>To keep the community feed up-to-date, first login as your GVM user.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo su - gvm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Create the file that we will populate with the required commands.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gvm@ubuntu:~$ touch /opt/gvm/bin/openvas-update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Make the file executable.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gvm@ubuntu:~$ chmod a+x /opt/gvm/bin/openvas-update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Enter the commands that we will run daily.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gvm@ubuntu:~$ nano /opt/gvm/bin/openvas-update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/opt/gvm/bin/greenbone-nvt-sync
/opt/gvm/sbin/greenbone-feed-sync --type GVMD_DATA
/opt/gvm/sbin/greenbone-feed-sync --type SCAP
/opt/gvm/sbin/greenbone-feed-sync --type CERT
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Edit the GVM users crontab and add the script we created to check for daily updates.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>gvm@ubuntu:~$ crontab -e
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Edit this file to introduce tasks to be run by cron.</span>
<span class="token comment">#</span>
<span class="token comment"># Each task to run has to be defined through a single line</span>
<span class="token comment"># indicating with different fields when the task will be run</span>
<span class="token comment"># and what command to run for the task</span>
<span class="token comment">#</span>
<span class="token comment"># To define the time you can provide concrete values for</span>
<span class="token comment"># minute (m), hour (h), day of month (dom), month (mon),</span>
<span class="token comment"># and day of week (dow) or use '*' in these fields (for 'any').</span>
<span class="token comment">#</span>
<span class="token comment"># Notice that tasks will be started based on the cron's system</span>
<span class="token comment"># daemon's notion of time and timezones.</span>
<span class="token comment">#</span>
<span class="token comment"># Output of the crontab jobs (including errors) is sent through</span>
<span class="token comment"># email to the user the crontab file belongs to (unless redirected).</span>
<span class="token comment">#</span>
<span class="token comment"># For example, you can run a backup of all your user accounts</span>
<span class="token comment"># at 5 a.m every week with:</span>
<span class="token comment"># 0 5 * * 1 tar -zcf /var/backups/home.tgz /home/</span>
<span class="token comment">#</span>
<span class="token comment"># For more information see the manual pages of crontab(5) and cron(8)</span>
<span class="token comment">#</span>
<span class="token comment"># m h  dom mon dow   command</span>

<span class="token number">0</span> <span class="token number">0</span> * * * /opt/gvm/bin/openvas-update
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>
<p>If you encounter any issue or having questions regarding Greenbone Vulnerability Manager, I recommend using their helpful <a href="https://community.greenbone.net/" target="_blank" rel="noopener noreferrer">community forum<OutboundLink/></a>.</p>
<p><a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">Questions<OutboundLink/></a>, <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">comments<OutboundLink/></a>, or <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">problems<OutboundLink/></a> regarding this service? Create an issue <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a> or contact <a href="mailto:webmaster@libellux.com">webmaster@libellux.com</a>.</p>
<h3 id="sec-error-inadequate-key-usage" tabindex="-1"><a class="header-anchor" href="#sec-error-inadequate-key-usage" aria-hidden="true">#</a> SEC_ERROR_INADEQUATE_KEY_USAGE</h3>
<p>If receiving <code>SEC_ERROR_INADEQUATE_KEY_USAGE</code> and the browser blocks access to the local GVM server, proceed with removing the certificate. For example, in Firefox go to <code>about:preferences#privacy</code> and the certificate section. Select Show certificates, click the Servers tab and remove the certificates found under GVM Users.</p>
<h3 id="failed-to-find-interpreter-for-python-3-7" tabindex="-1"><a class="header-anchor" href="#failed-to-find-interpreter-for-python-3-7" aria-hidden="true">#</a> Failed to find interpreter for Python 3.7</h3>
<p>If receiving <code>RuntimeError: failed to find interpreter for Builtin discover of python_spec='python3.7'</code> make sure you've followed the instructions to install the required 3.7 packages.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo add-apt-repository ppa:deadsnakes/ppa
server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install python3.7 python3.7-dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="enterprise-solutions" tabindex="-1"><a class="header-anchor" href="#enterprise-solutions" aria-hidden="true">#</a> Enterprise solutions <Badge text="non-sponsored" type="tip"/></h2>
<h3 id="the-greenbone-security-manager" tabindex="-1"><a class="header-anchor" href="#the-greenbone-security-manager" aria-hidden="true">#</a> The Greenbone Security Manager</h3>
<p>The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.</p>
<p><a href="https://www.greenbone.net/en/product-comparison/" target="_blank" rel="noopener noreferrer">Greenbone Security Manager<OutboundLink/></a></p>
</template>
