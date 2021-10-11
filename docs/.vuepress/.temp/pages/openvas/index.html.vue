<template><h1 id="greenbone-vulnerability-manager" tabindex="-1"><a class="header-anchor" href="#greenbone-vulnerability-manager" aria-hidden="true">#</a> Greenbone Vulnerability Manager <Badge text="Rev 6" type="tip"/></h1>
<p>OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.</p>
<p><a href="https://www.greenbone.net/en/vulnerability-management/" target="_blank" rel="noopener noreferrer">GVM website<OutboundLink/></a> <a href="https://www.openvas.org/" target="_blank" rel="noopener noreferrer">OpenVAS website<OutboundLink/></a> <a href="https://github.com/greenbone" target="_blank" rel="noopener noreferrer">GitHub<OutboundLink/></a> <a href="https://greenbone.github.io/docs/" target="_blank" rel="noopener noreferrer">GVM official docs<OutboundLink/></a></p>
<p>Setup and configuration have been tested on the following operating systems:</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>How-to build GVM on Rocky 8.4 from source will be added in upcoming release.</p>
</div>
<ul>
<li>Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa)</li>
<li>GVM 20.08 for Debian 10 visit <a href="https://sadsloth.net/post/install-gvm-20_08-src-on-debian/" target="_blank" rel="noopener noreferrer">sadsloth.net<OutboundLink/></a>.</li>
<li>GVM- 20.08, 20.08.1, 21.04, 21.4.2, 21.4.3, Atomicorp 21.04 (Redhat 8, CentOS 8, Fedora 32, Fedora 34)</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><OutboundLink/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The lines in the &quot;scripts&quot; below has been used for testing and successfully configure GVM 21.04 (21.4.3).
You may use the testing guide to install GVM or follow our detailed step-by-step tutorial below to install GVM 21.04.</p>
</div>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21_4_3.sh" target="_blank" rel="noopener noreferrer">GVM 21.4.3<OutboundLink/></a></li>
</ul>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Dependencies required to install GVM 21.04 (21.4.3) from source. For more detailed information regarding dependencies and their function please visit <a href="https://greenbone.github.io/docs/" target="_blank" rel="noopener noreferrer">GVM official docs<OutboundLink/></a> website.</p>
<details class="custom-container details"><summary>Dependencies for Ubuntu 20.04</summary>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>build-essential cmake pkg-config gcc-mingw-w64 gnutls-bin
libgnutls28-dev libxml2-dev libssh-dev libssl-dev libunistring-dev
libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev libglib2.0-dev
libksba-dev libical-dev libpq-dev libopenvas-dev libpopt-dev libnet1-dev
libmicrohttpd-dev redis-server libhiredis-dev doxygen xsltproc uuid-dev
graphviz bison postgresql postgresql-contrib postgresql-server-dev-all
heimdal-dev xmltoman nmap npm nodejs virtualenv gnupg rsync yarnpkg
python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil
python3-setuptools python3-packaging python3-wrapt python3-cffi python3-redis
xmlstarlet texlive-fonts-recommended texlive-latex-extra perl-base
</code></pre></div></details>
<h2 id="install-gvm-21-04-from-source" tabindex="-1"><a class="header-anchor" href="#install-gvm-21-04-from-source" aria-hidden="true">#</a> Install GVM 21.04 from source</h2>
<p>Begin to install the dependencies for GVM 21.04 (21.4.3).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y upgrade <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y build-essential <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y cmake pkg-config gcc-mingw-w64 <span class="token punctuation">\</span>
gnutls-bin libgnutls28-dev libxml2-dev libssh-dev libssl-dev libunistring-dev <span class="token punctuation">\</span>
libldap2-dev libgcrypt-dev libpcap-dev libgpgme-dev libradcli-dev libglib2.0-dev <span class="token punctuation">\</span>
libksba-dev libical-dev libpq-dev libopenvas-dev libpopt-dev libnet1-dev <span class="token punctuation">\</span>
libmicrohttpd-dev redis-server libhiredis-dev doxygen xsltproc uuid-dev <span class="token punctuation">\</span>
graphviz bison postgresql postgresql-contrib postgresql-server-dev-all <span class="token punctuation">\</span>
heimdal-dev xmltoman nmap <span class="token function">npm</span> nodejs virtualenv gnupg <span class="token function">rsync</span> yarnpkg <span class="token punctuation">\</span>
python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil <span class="token punctuation">\</span>
python3-setuptools python3-packaging python3-wrapt python3-cffi python3-redis <span class="token punctuation">\</span>
xmlstarlet texlive-fonts-recommended texlive-latex-extra perl-base
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Continue to install yarn using npm.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span>
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
<h3 id="import-gvm-signing-key" tabindex="-1"><a class="header-anchor" href="#import-gvm-signing-key" aria-hidden="true">#</a> Import GVM signing key</h3>
<p>Download the signing key from Greenbone community to validate the integrity of the source files.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">curl</span> -O https://www.greenbone.net/GBCommunitySigningKey.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --import GBCommunitySigningKey.asc
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
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg <span class="token punctuation">(</span>GnuPG<span class="token punctuation">)</span> <span class="token number">2.2</span>.19<span class="token punctuation">;</span> Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2019</span> Free Software Foundation, Inc.
This is <span class="token function">free</span> software: you are <span class="token function">free</span> to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

pub  rsa4096/9823FAA60ED1E580
     created: <span class="token number">2017</span>-09-06  expires: never       usage: SC
     trust: unknown       validity: unknown
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Greenbone Community Feed integrity key

gpg<span class="token operator">></span> trust
pub  rsa4096/9823FAA60ED1E580
     created: <span class="token number">2017</span>-09-06  expires: never       usage: SC
     trust: unknown       validity: unknown
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Greenbone Community Feed integrity key

Please decide how far you trust this user to correctly verify other <span class="token function">users</span><span class="token string">' keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don'</span>t know or won't say
  <span class="token number">2</span> <span class="token operator">=</span> I <span class="token keyword">do</span> NOT trust
  <span class="token number">3</span> <span class="token operator">=</span> I trust marginally
  <span class="token number">4</span> <span class="token operator">=</span> I trust fully
  <span class="token number">5</span> <span class="token operator">=</span> I trust ultimately
  m <span class="token operator">=</span> back to the main menu

Your decision? <span class="token number">5</span>
Do you really want to <span class="token builtin class-name">set</span> this key to ultimate trust? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y

pub  rsa4096/9823FAA60ED1E580
     created: <span class="token number">2017</span>-09-06  expires: never       usage: SC
     trust: ultimate      validity: unknown
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Greenbone Community Feed integrity key
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg<span class="token operator">></span> quit
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div></div><h3 id="build-gvm-libraries" tabindex="-1"><a class="header-anchor" href="#build-gvm-libraries" aria-hidden="true">#</a> Build GVM libraries</h3>
<p>Download and build the <a href="https://github.com/greenbone/gvm-libs" target="_blank" rel="noopener noreferrer">GVM libraries<OutboundLink/></a> version 21.04 (21.4.3). Set the GVM libraries to same version as GVM.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">GVM_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.3 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
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
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">GSA_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
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
<p>Verify the SMB module download and make sure the signature from Greenbone Community Feed is trusted.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Fri <span class="token number">25</span> Jun <span class="token number">2021</span> 06:36:43 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Next extract files and proceed with the installation.</p>
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
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">OSPD_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.1 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable">OSPD_OPENVAS_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-scanner/releases/download/v<span class="token variable">$OPENVAS_SCANNER_VERSION</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Verify the signature output.</p>
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
<p>Proceed to download <a href="https://github.com/greenbone/ospd" target="_blank" rel="noopener noreferrer">ospd<OutboundLink/></a>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">OSPD_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.1 <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable">OSPD_OPENVAS_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
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
<p>Verify signature for both files.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Wed 04 Aug <span class="token number">2021</span> 07:13:45 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
gpg: Signature made Wed 04 Aug <span class="token number">2021</span> <span class="token number">12</span>:23:19 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from <span class="token string">"Greenbone Community Feed integrity key"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Extract files and start the installation.</p>
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
<p>Before you're done upgrade <code>python3-psutil</code> to version 5.7.2 then proceed to finialize the installation of ospd-openvas and install <code>gvm-tools</code>.</p>
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
<h3 id="configure-redis" tabindex="-1"><a class="header-anchor" href="#configure-redis" aria-hidden="true">#</a> Configure Redis</h3>
<p>Next configure redis for the default GVM installation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$GVM_VERSION</span>/config/redis-openvas.conf /etc/redis/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> redis:redis /etc/redis/redis-openvas.conf <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"db_address = /run/redis-openvas/redis.sock"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/openvas/openvas.conf
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Start the redis server and enable it as an start up service.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl start redis-server@openvas.service <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> redis-server@openvas.service
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Add redis to the GVM group and set up correct permissions.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">usermod</span> -aG redis gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /var/lib/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /var/lib/openvas <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /var/log/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /run/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R g+srw /var/lib/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R g+srw /var/lib/openvas <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R g+srw /var/log/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> gvm:gvm /usr/local/sbin/gvmd <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">6750</span> /usr/local/sbin/gvmd
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>You also need to adjust the permissions for the feed synchronization.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">chown</span> gvm:gvm /usr/local/bin/greenbone-nvt-sync <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">740</span> /usr/local/sbin/greenbone-feed-sync <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> gvm:gvm /usr/local/sbin/greenbone-*-sync <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">740</span> /usr/local/sbin/greenbone-*-sync
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>OpenVAS will be launched from an ospd-openvas process. Update the secure path in the sudoers file accordingly.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> visudo
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Allow members of group sudo to execute any command</span>
%sudo   <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> ALL

<span class="token comment"># allow users of the gvm group run openvas</span>
%gvm ALL <span class="token operator">=</span> NOPASSWD: /usr/local/sbin/openvas
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="configure-postgresql-database" tabindex="-1"><a class="header-anchor" href="#configure-postgresql-database" aria-hidden="true">#</a> Configure PostgreSQL database</h3>
<p>For additional information see reference greenbone/gvmd <a href="https://github.com/greenbone/gvmd/blob/master/INSTALL.md" target="_blank" rel="noopener noreferrer">INSTALL.md<OutboundLink/></a>. First make sure that the required dependencies have been installed (see <a href="#prerequisites">Prerequisites</a>). Proceed to create a Postgres user and database.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> -u postgres <span class="token function">bash</span>
postgres@ubuntu:~$ createuser -DRS gvm <span class="token operator">&amp;&amp;</span> createdb -O gvm gvmd
postgres@ubuntu:~$ psql gvmd
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Setup correct permissions and create database extensions.</p>
<div class="language-plsql ext-plsql"><pre v-pre class="language-plsql"><code>gvmd<span class="token operator">=</span># <span class="token keyword">create</span> role dba <span class="token keyword">with</span> superuser noinherit<span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">grant</span> dba <span class="token keyword">to</span> gvm<span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">create</span> extension <span class="token string">"uuid-ossp"</span><span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">create</span> extension <span class="token string">"pgcrypto"</span><span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">exit</span>
</code></pre></div><h3 id="create-gvm-admin" tabindex="-1"><a class="header-anchor" href="#create-gvm-admin" aria-hidden="true">#</a> Create GVM admin</h3>
<p>Create the GVM administration user. Do not forget to change the password later.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Do not use special characters in the password.</p>
</div>
<p>Before you create the administrator make sure you did exit the postgres session and reload the dynamic loader cache.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>postgres@ubuntu:~$ <span class="token builtin class-name">exit</span>
server@ubuntu:~$ <span class="token function">sudo</span> ldconfig
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once you've reloaded the dynamic loader cache proceed with the user creation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> /usr/local/sbin/gvmd --create-user<span class="token operator">=</span>admin --password<span class="token operator">=</span>admin
User created.
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next lets retrieve the administrators uuid.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Use the administration uuid and modify the gvmd settings. Remember to put your uuid as the value option.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="update-network-vulnerability-tests" tabindex="-1"><a class="header-anchor" href="#update-network-vulnerability-tests" aria-hidden="true">#</a> Update Network Vulnerability Tests</h3>
<p>Update Network Vulnerability Tests (NVT) from Greenbone Community Feed.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This may take a while.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> -u gvm greenbone-nvt-sync
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="update-greenbone-feed-synchronisation" tabindex="-1"><a class="header-anchor" href="#update-greenbone-feed-synchronisation" aria-hidden="true">#</a> Update Greenbone Feed synchronisation</h3>
<p>Update the Greenbone feed synchronisation one at the time.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Only one sync per time, otherwise the source ip will be temporarily blocked.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> -u gvm greenbone-feed-sync --type GVMD_DATA
server@ubuntu:~$ <span class="token function">sudo</span> -u gvm greenbone-feed-sync --type SCAP
server@ubuntu:~$ <span class="token function">sudo</span> -u gvm greenbone-feed-sync --type CERT
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="generate-gvm-certificates" tabindex="-1"><a class="header-anchor" href="#generate-gvm-certificates" aria-hidden="true">#</a> Generate GVM certificates</h3>
<p>Once you've finished the feed synchronisation generate GVM certificates.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> -u gvm gvm-manage-certs -a
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="set-up-systemd" tabindex="-1"><a class="header-anchor" href="#set-up-systemd" aria-hidden="true">#</a> Set up systemd</h3>
<p>Next setup the startup scripts. First configure the Greenbone Manager startup script.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">></span> <span class="token variable">$BUILD_DIR</span>/gvmd.service</span>
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
EOF</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Copy the startup script from the build folder to your system manager directory.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$BUILD_DIR</span>/gvmd.service /etc/systemd/system/
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once the first startup script is saved proceed to create the script for the Greenbone Security Assistant (GSA). Remember to define your IP address for GSA.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">></span> <span class="token variable">$BUILD_DIR</span>/gsad.service</span>
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
EOF</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Copy the startup script to system directory.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$BUILD_DIR</span>/gsad.service /etc/systemd/system/
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Create the systemd service script for ospd-openvas.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">></span> <span class="token variable">$BUILD_DIR</span>/ospd-openvas.service</span>
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
EOF</span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Finally copy the last startup script to your system manager directory.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$BUILD_DIR</span>/ospd-openvas.service /etc/systemd/system/
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="enable-and-start-services" tabindex="-1"><a class="header-anchor" href="#enable-and-start-services" aria-hidden="true">#</a> Enable and start services</h3>
<p>To enable the created startup scripts reload the system control daemon.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl daemon-reload
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once you've reloaded the daemon proceed to enable each of the services.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> ospd-openvas
server@ubuntu:~$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> gvmd
server@ubuntu:~$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> gsad
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next start each service.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl start ospd-openvas
server@ubuntu:~$ <span class="token function">sudo</span> systemctl start gvmd
server@ubuntu:~$ <span class="token function">sudo</span> systemctl start gsad
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>Remember that even though the initial startup of the services are returned immediately it make take several minutes or even hours for the services to be ready. For more information visit <a href="https://greenbone.github.io/docs/gvm-21.04/index.html#starting-services-with-systemd" target="_blank" rel="noopener noreferrer">GVM official docs<OutboundLink/></a>.</p>
</div>
<p>You can check the current status of each services by running the below commands.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl status ospd-openvas.service
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>● ospd-openvas.service - OSPd Wrapper <span class="token keyword">for</span> the OpenVAS Scanner <span class="token punctuation">(</span>ospd-openvas<span class="token punctuation">)</span>
     Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/ospd-openvas.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Mon <span class="token number">2021</span>-10-11 <span class="token number">18</span>:22:39 UTC<span class="token punctuation">;</span> 5min ago
       Docs: man:ospd-openvas<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
             man:openvas<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
    Process: <span class="token number">37213</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas -<span class="token operator">></span>
   Main PID: <span class="token number">37228</span> <span class="token punctuation">(</span>ospd-openvas<span class="token punctuation">)</span>
      Tasks: <span class="token number">6</span> <span class="token punctuation">(</span>limit: <span class="token number">2278</span><span class="token punctuation">)</span>
     Memory: <span class="token number">16</span>.5M
     CGroup: /system.slice/ospd-openvas.service
             ├─37228 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/<span class="token operator">></span>
             ├─37230 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/<span class="token operator">></span>
             ├─37297 openvas --update-vt-info
             └─37300 openvas: Reloaded <span class="token number">43550</span> of <span class="token number">77138</span> NVTs <span class="token punctuation">(</span><span class="token number">56</span>% / ETA: 04:25<span class="token punctuation">)</span>

Oct <span class="token number">11</span> <span class="token number">18</span>:22:37 server@libellux systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting OSPd Wrapper <span class="token keyword">for</span> the OpenVAS Scanner <span class="token punctuation">(</span>ospd-openvas<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Oct <span class="token number">11</span> <span class="token number">18</span>:22:39 server@libellux systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started OSPd Wrapper <span class="token keyword">for</span> the OpenVAS Scanner <span class="token punctuation">(</span>ospd-openvas<span class="token punctuation">)</span>.
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl status gvmd.service
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Synchronizing the SCAP database is usually what takes a lot of time so please be patient and do not restart your server.</p>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>● gvmd.service - Greenbone Vulnerability Manager daemon <span class="token punctuation">(</span>gvmd<span class="token punctuation">)</span>
     Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/gvmd.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Mon <span class="token number">2021</span>-10-11 <span class="token number">18</span>:22:46 UTC<span class="token punctuation">;</span> 8min ago
       Docs: man:gvmd<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
    Process: <span class="token number">37240</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/sbin/gvmd --osp-vt-update<span class="token operator">=</span>/run/ospd/ospd-openvas.sock --listen-group<span class="token operator">=</span>gvm <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
   Main PID: <span class="token number">37251</span> <span class="token punctuation">(</span>gvmd<span class="token punctuation">)</span>
      Tasks: <span class="token number">3</span> <span class="token punctuation">(</span>limit: <span class="token number">2278</span><span class="token punctuation">)</span>
     Memory: <span class="token number">1</span>.6G
     CGroup: /system.slice/gvmd.service
             ├─37251 gvmd: Waiting <span class="token keyword">for</span> incoming connections
             ├─37272 gpg-agent --homedir /var/lib/gvm/gvmd/gnupg --use-standard-socket --daemon
             └─37622 gvmd: Syncing SCAP: Updating CPEs

Oct <span class="token number">11</span> <span class="token number">18</span>:22:43 server@libellux systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting Greenbone Vulnerability Manager daemon <span class="token punctuation">(</span>gvmd<span class="token punctuation">)</span><span class="token punctuation">..</span>.
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div></div><CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl status gsad.service
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>● gsad.service - Greenbone Security Assistant daemon <span class="token punctuation">(</span>gsad<span class="token punctuation">)</span>
     Loaded: loaded <span class="token punctuation">(</span>/etc/systemd/system/gsad.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Mon <span class="token number">2021</span>-10-11 <span class="token number">18</span>:50:15 UTC<span class="token punctuation">;</span> 1min 11s ago
       Docs: man:gsad<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
             https://www.greenbone.net
    Process: <span class="token number">38710</span> <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/sbin/gsad --listen<span class="token operator">=</span><span class="token number">192.168</span>.0.1 --port<span class="token operator">=</span><span class="token number">9392</span> <span class="token punctuation">(</span>code<span class="token operator">=</span>exited, <span class="token assign-left variable">status</span><span class="token operator">=</span><span class="token number">0</span>/SUCCESS<span class="token punctuation">)</span>
   Main PID: <span class="token number">38715</span>
      Tasks: <span class="token number">8</span> <span class="token punctuation">(</span>limit: <span class="token number">2278</span><span class="token punctuation">)</span>
     Memory: <span class="token number">2</span>.1M
     CGroup: /system.slice/gsad.service
             └─38714 /usr/local/sbin/gsad --listen<span class="token operator">=</span><span class="token number">192.168</span>.0.1 --port<span class="token operator">=</span><span class="token number">9392</span>

Oct <span class="token number">11</span> <span class="token number">18</span>:50:12 server@libellux systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting Greenbone Security Assistant daemon <span class="token punctuation">(</span>gsad<span class="token punctuation">)</span><span class="token punctuation">..</span>.
Oct <span class="token number">11</span> <span class="token number">18</span>:50:15 server@libellux systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started Greenbone Security Assistant daemon <span class="token punctuation">(</span>gsad<span class="token punctuation">)</span>.
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br></div></div><p>Login at your localhost e.g. <code>https://192.168.0.1:9392</code> with the username <code>admin</code> and the chosen password.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_login-2.png')" alt="GSA login">
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This may take a while.</p>
</div>
<p>Once logged in, go to the <em>Administration</em> tab and select <em>Feed Status</em>. You'll see that the update is in progress. When the status changed to <em>current</em>, go to the dashboard and it will be populated with CVEs by creation time and NVTs by severity class.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">
<p>You may also confirm the current version, go to the <em>Help</em> tab and select <em>About</em>.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_about.png')" alt="GSA about">
<p>To run basic vulnerability scans and get hands-on approach to get started with OpenVAS check the <a href="#running-vulnerability-scans">Running vulnerability scans</a> section.</p>
<h2 id="install-gvm-21-04-atomicorp" tabindex="-1"><a class="header-anchor" href="#install-gvm-21-04-atomicorp" aria-hidden="true">#</a> Install GVM 21.04 Atomicorp <Badge text="non-sponsored" type="tip"/></h2>
<p>Atomicorp GVM 21.04 package supports Redhat, Rocky, Centos or Fedora Linux platforms. <a href="https://github.com/Atomicorp/gvm" target="_blank" rel="noopener noreferrer">Atomicorp GVM package<OutboundLink/></a>.</p>
<p>Check if SELinux is enabled.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ sestatus
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
</CodeGroup>
<p>If enabled proceed to disable SELinux by running the command below.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> setenforce <span class="token number">0</span>
server@rocky:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /etc/selinux/config
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Update the SELinux configuration file and set SELINUX to disabled.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># This file controls the state of SELinux on the system.</span>
<span class="token comment"># SELINUX= can take one of these three values:</span>
<span class="token comment">#     enforcing - SELinux security policy is enforced.</span>
<span class="token comment">#     permissive - SELinux prints warnings instead of enforcing.</span>
<span class="token comment">#     disabled - No SELinux policy is loaded.</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Save and reboot the system.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> <span class="token function">shutdown</span> -r now
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once the system rebooted control that SELinux been disabled.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ sestatus
SELinux status:                 disabled
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Continue and download the Atomicorp installer.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">wget</span> -q -O - https://updates.atomicorp.com/installers/atomic <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">sh</span>

For supported software packages please contact us at: 

  sales@atomicorp.com

Do you agree to these terms? <span class="token punctuation">(</span>yes/no<span class="token punctuation">)</span> <span class="token punctuation">[</span>Default: yes<span class="token punctuation">]</span> <span class="token function">yes</span>
Enable repo by default? <span class="token punctuation">(</span>yes/no<span class="token punctuation">)</span> <span class="token punctuation">[</span>Default: yes<span class="token punctuation">]</span>: <span class="token function">yes</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
</CodeGroup>
<p>Enable PowerTools and install extra packages.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Only required for Redhat, Rocky and CentOS.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@centos:~$ <span class="token function">sudo</span> yum config-manager --set-enabled PowerTools
server@centos:~$ <span class="token function">sudo</span> yum <span class="token function">install</span> epel-release
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Proceed and install GVM.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> yum <span class="token function">install</span> gvm
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Finally run the GVM configuration script to setup GVM (this might take awhile).</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> gvm-setup
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once the GVM setup been complete proceed to set the administrator password.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Do not use special characters in the password.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>Updating OpenVAS Manager certificates: Complete

GVMD startup: Done

Set the GSAD admin <span class="token function">users</span> password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter Administrator Password:
Verify Administrator Password:

Setup complete
  Log <span class="token keyword">in</span> to GSAD at https://localhost
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Login at your localhost e.g. <code>https://192.168.0.1</code> with the username <code>admin</code> and the chosen password.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">
<h2 id="running-vulnerability-scans" tabindex="-1"><a class="header-anchor" href="#running-vulnerability-scans" aria-hidden="true">#</a> Running vulnerability scans</h2>
<p>There is several approaches on how to configure and run tasks (scans) toward your targets (hosts) in GVM. In this tutorial we will go through how to run the more basic tasks. We will do both unauthenticated scans, where we do not grant GVM SSH access to our target, and authenticated scans to help identify internal server vulnerabilites or misconfigurations.</p>
<h3 id="unauthenticated-scan" tabindex="-1"><a class="header-anchor" href="#unauthenticated-scan" aria-hidden="true">#</a> Unauthenticated scan</h3>
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
<h2 id="enterprise-solutions" tabindex="-1"><a class="header-anchor" href="#enterprise-solutions" aria-hidden="true">#</a> Enterprise solutions <Badge text="non-sponsored" type="tip"/></h2>
<h3 id="the-greenbone-security-manager" tabindex="-1"><a class="header-anchor" href="#the-greenbone-security-manager" aria-hidden="true">#</a> The Greenbone Security Manager</h3>
<p>The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.</p>
<p><a href="https://www.greenbone.net/en/product-comparison/" target="_blank" rel="noopener noreferrer">Greenbone Security Manager<OutboundLink/></a></p>
</template>
