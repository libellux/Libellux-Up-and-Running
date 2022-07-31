<template><div><h1 id="greenbone-vulnerability-manager" tabindex="-1"><a class="header-anchor" href="#greenbone-vulnerability-manager" aria-hidden="true">#</a> Greenbone Vulnerability Manager <Badge text="Rev 9" type="tip"/></h1>
<p>Greenbone is the world's most used open source vulnerability management provider. Their mission is to help you detect vulnerabilities before they can be exploited - reducing the risk and impact of cyberattacks. OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.</p>
<p><a href="https://www.greenbone.net/en/vulnerability-management/" target="_blank" rel="noopener noreferrer">GVM website<ExternalLinkIcon/></a> <a href="https://www.openvas.org/" target="_blank" rel="noopener noreferrer">OpenVAS website<ExternalLinkIcon/></a> <a href="https://github.com/greenbone" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a> <a href="https://greenbone.github.io/docs/" target="_blank" rel="noopener noreferrer">GVM official docs<ExternalLinkIcon/></a></p>
<p>Setup and configuration have been tested on the following operating systems:</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>How-to build GVM on Rocky 8.4 from source will be added in upcoming release.</p>
</div>
<ul>
<li>Ubuntu- 16.04, 18.04, 20.04, 22.04 (Jammy Jellyfish)</li>
<li>GVM 20.08 for Debian 10 visit <a href="https://sadsloth.net/post/install-gvm-20_08-src-on-debian/" target="_blank" rel="noopener noreferrer">sadsloth.net<ExternalLinkIcon/></a>.</li>
<li>GVM- 20.08, 20.08.1, 21.04 (21.4.2, 21.4.3, 21.4.4, 21.4.5), 22.4.0, Atomicorp 21.04 (Redhat 8, CentOS 8, Fedora 32, Fedora 34)</li>
</ul>
<p><a href="https://fundof.me/libellux"><img src="https://img.shields.io/badge/fundof-libellux-green" alt="fundof"></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The lines in the &quot;scripts&quot; below has been used for testing and successfully configured GVM.
You may use the testing guide to install GVM or follow our detailed step-by-step tutorial below to install GVM 22.4.0.</p>
</div>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_22.4.0.sh" target="_blank" rel="noopener noreferrer">GVM 22.4.0<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.5.sh" target="_blank" rel="noopener noreferrer">GVM 21.4.5<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.4.sh" target="_blank" rel="noopener noreferrer">GVM 21.4.4<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.3.sh" target="_blank" rel="noopener noreferrer">GVM 21.4.3<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.2.sh" target="_blank" rel="noopener noreferrer">GVM 21.4.2<ExternalLinkIcon/></a></li>
</ul>
<h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System requirements</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>These minimum system requirements (VMware ESXi) are in no way official recommendations but used when testing and building GVM from source.</p>
</div>
<ul>
<li>Memory: 4 GB RAM</li>
<li>Free space: 20 GB</li>
</ul>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Dependencies required to install GVM 22.4.0 from source. For more detailed information regarding dependencies and their function please visit <a href="https://greenbone.github.io/docs/" target="_blank" rel="noopener noreferrer">GVM official docs<ExternalLinkIcon/></a> website. It is also recommended if you want to keep yourself up-to-date to read <a href="https://greenbone.github.io/docs/changelog.html" target="_blank" rel="noopener noreferrer">Greenbone's changelog<ExternalLinkIcon/></a>.</p>
<details class="custom-container details"><summary>Dependencies for Ubuntu 22.04</summary>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>build-essential cmake pkg-config gcc-mingw-w64
libgnutls28-dev libxml2-dev libssh-gcrypt-dev libunistring-dev
libldap2-dev libgcrypt20-dev libpcap-dev libglib2.0-dev libgpgme-dev libradcli-dev libjson-glib-dev
libksba-dev libical-dev libpq-dev libsnmp-dev libpopt-dev libnet1-dev gnupg gnutls-bin
libmicrohttpd-dev redis-server libhiredis-dev openssh-client xsltproc nmap
bison postgresql postgresql-server-dev-all smbclient fakeroot sshpass wget
heimdal-dev dpkg rsync zip rpm nsis socat libbsd-dev snmp uuid-dev curl gpgsm
python3 python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil python3-impacket
python3-setuptools python3-packaging python3-wrapt python3-cffi python3-redis python3-gnupg
xmlstarlet texlive-fonts-recommended texlive-latex-extra perl-base xml-twig-tools
libpaho-mqtt-dev python3-paho-mqtt mosquitto xmltoman doxygen
</code></pre></div></details>
<h2 id="install-gvm-22-4-0-from-source" tabindex="-1"><a class="header-anchor" href="#install-gvm-22-4-0-from-source" aria-hidden="true">#</a> Install GVM 22.4.0 from source</h2>
<p>Begin to install the dependencies for GVM 22.4.0.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y upgrade <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y build-essential <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y cmake pkg-config gcc-mingw-w64 <span class="token punctuation">\</span>
libgnutls28-dev libxml2-dev libssh-gcrypt-dev libunistring-dev <span class="token punctuation">\</span>
libldap2-dev libgcrypt20-dev libpcap-dev libglib2.0-dev libgpgme-dev libradcli-dev libjson-glib-dev <span class="token punctuation">\</span>
libksba-dev libical-dev libpq-dev libsnmp-dev libpopt-dev libnet1-dev gnupg gnutls-bin <span class="token punctuation">\</span>
libmicrohttpd-dev redis-server libhiredis-dev openssh-client xsltproc nmap <span class="token punctuation">\</span>
bison postgresql postgresql-server-dev-all smbclient fakeroot sshpass <span class="token function">wget</span> <span class="token punctuation">\</span>
heimdal-dev dpkg <span class="token function">rsync</span> <span class="token function">zip</span> <span class="token function">rpm</span> nsis socat libbsd-dev snmp uuid-dev <span class="token function">curl</span> gpgsm <span class="token punctuation">\</span>
python3 python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil python3-impacket <span class="token punctuation">\</span>
python3-setuptools python3-packaging python3-wrapt python3-cffi python3-redis python3-gnupg <span class="token punctuation">\</span>
xmlstarlet texlive-fonts-recommended texlive-latex-extra perl-base xml-twig-tools <span class="token punctuation">\</span>
libpaho-mqtt-dev python3-paho-mqtt mosquitto xmltoman doxygen</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Continue to install yarn using npm.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span></span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="set-up-gvm-user-define-installation-paths" tabindex="-1"><a class="header-anchor" href="#set-up-gvm-user-define-installation-paths" aria-hidden="true">#</a> Set up GVM user define installation paths</h3>
<p>Create the GVM user and add it to sudoers group without login. Also add your current sudo user to the GVM group so you're allowed to run <em>gvmd</em>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">useradd</span> -r -M -U -G <span class="token function">sudo</span> -s /usr/sbin/nologin gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -aG gvm <span class="token environment constant">$USER</span> <span class="token operator">&amp;&amp;</span> <span class="token function">su</span> <span class="token environment constant">$USER</span></span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next define base, source, build and installation directories.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/sbin <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable">INSTALL_PREFIX</span><span class="token operator">=</span>/usr/local <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">SOURCE_DIR</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/source <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$SOURCE_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">BUILD_DIR</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/build <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">INSTALL_DIR</span><span class="token operator">=</span><span class="token environment constant">$HOME</span>/install <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$INSTALL_DIR</span></span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="import-gvm-signing-key" tabindex="-1"><a class="header-anchor" href="#import-gvm-signing-key" aria-hidden="true">#</a> Import GVM signing key</h3>
<p>Download the signing key from Greenbone community to validate the integrity of the source files.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">curl</span> -f -L https://www.greenbone.net/GBCommunitySigningKey.asc -o /tmp/GBCommunitySigningKey.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --import /tmp/GBCommunitySigningKey.asc</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Edit GVM signing key to trust ultimately.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">echo</span> <span class="token string">"8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:"</span> <span class="token operator">></span> /tmp/ownertrust.txt <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --import-ownertrust <span class="token operator">&lt;</span> /tmp/ownertrust.txt</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-gvm-libraries" tabindex="-1"><a class="header-anchor" href="#build-gvm-libraries" aria-hidden="true">#</a> Build GVM libraries</h3>
<p>Download and build the <a href="https://github.com/greenbone/gvm-libs" target="_blank" rel="noopener noreferrer">GVM libraries<ExternalLinkIcon/></a>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GVM_VERSION</span><span class="token operator">=</span><span class="token number">22.4</span>.0</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Download and verify the specified GVM libraries.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GVM_LIBS_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gvm-libs/releases/download/v<span class="token variable">$GVM_LIBS_VERSION</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Make sure the output says that the signature from Greenbone Community Feed is good.</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 12:11:44 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Once you've confirmed that the signature is good, proceed to install GVM libraries.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/gvm-libs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/gvm-libs <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/gvm-libs-<span class="token variable">$GVM_LIBS_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
  -DLOCALSTATEDIR<span class="token operator">=</span>/var <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-greenbone-vulnerability-manager" tabindex="-1"><a class="header-anchor" href="#build-the-greenbone-vulnerability-manager" aria-hidden="true">#</a> Build the Greenbone Vulnerability Manager</h3>
<p>Next download, verify and build the <a href="https://github.com/greenbone/gvmd" target="_blank" rel="noopener noreferrer">Greenbone Vulnerability Manager (GVM)<ExternalLinkIcon/></a> version 22.4.0.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GVMD_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v<span class="token variable">$GVMD_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gvmd/releases/download/v<span class="token variable">$GVMD_VERSION</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Make sure the signature from Greenbone Community Feed is good.</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 02:28:53 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Extract the downloaded GVMD file and proceed with the installation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/gvmd <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/gvmd <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/gvmd-<span class="token variable">$GVMD_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DLOCALSTATEDIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
  -DGVM_DATA_DIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DOPENVAS_DEFAULT_SOCKET<span class="token operator">=</span>/run/ospd/ospd-openvas.sock <span class="token punctuation">\</span>
  -DGVM_FEED_LOCK_PATH<span class="token operator">=</span>/var/lib/gvm/feed-update.lock <span class="token punctuation">\</span>
  -DSYSTEMD_SERVICE_DIR<span class="token operator">=</span>/lib/systemd/system <span class="token punctuation">\</span>
  -DPostgreSQL_TYPE_INCLUDE_DIR<span class="token operator">=</span>/usr/include/postgresql <span class="token punctuation">\</span>
  -DLOGROTATE_DIR<span class="token operator">=</span>/etc/logrotate.d <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-postgresql-helper-pg-gvm" tabindex="-1"><a class="header-anchor" href="#build-the-postgresql-helper-pg-gvm" aria-hidden="true">#</a> Build the PostgreSQL helper pg-gvm</h3>
<p>Proceed to download and build the latest PostgreSQL helper pg-gvm version 22.4.0.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">PG_GVM_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span></span></span>
<span class="token output">curl -f -L https://github.com/greenbone/pg-gvm/archive/refs/tags/v$PG_GVM_VERSION.tar.gz -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz &amp;&amp; \
curl -f -L https://github.com/greenbone/pg-gvm/releases/download/v$PG_GVM_VERSION/pg-gvm-$PG_GVM_VERSION.tar.gz.asc -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc &amp;&amp; \
gpg --verify $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Proceed with the installation of the PostgreSQL helper.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/pg-gvm-<span class="token variable">$PG_GVM_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/pg-gvm <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/pg-gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/pg-gvm-<span class="token variable">$PG_GVM_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DPostgreSQL_TYPE_INCLUDE_DIR<span class="token operator">=</span>/usr/include/postgresql <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="install-nodejs-and-yarn" tabindex="-1"><a class="header-anchor" href="#install-nodejs-and-yarn" aria-hidden="true">#</a> Install NodeJS and yarn</h3>
<p>Install the required NodeJS version 14.x.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_VERSION</span><span class="token operator">=</span>node_14.x <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">KEYRING</span><span class="token operator">=</span>/usr/share/keyrings/nodesource.gpg <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DISTRIBUTION</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">$(</span>lsb_release -s -c<span class="token variable">)</span></span>"</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key <span class="token operator">|</span> gpg --dearmor <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token string">"<span class="token variable">$KEYRING</span>"</span> <span class="token operator">></span>/dev/null <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --no-default-keyring --keyring <span class="token string">"<span class="token variable">$KEYRING</span>"</span> --list-keys <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"deb [signed-by=<span class="token variable">$KEYRING</span>] https://deb.nodesource.com/<span class="token variable">$NODE_VERSION</span> <span class="token variable">$DISTRIBUTION</span> main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/nodesource.list <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"deb-src [signed-by=<span class="token variable">$KEYRING</span>] https://deb.nodesource.com/<span class="token variable">$NODE_VERSION</span> <span class="token variable">$DISTRIBUTION</span> main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/apt/sources.list.d/nodesource.list <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y nodejs</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
<p>Once installed NodeJS proceed to install yarn.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">curl</span> -sS https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> - <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"deb https://dl.yarnpkg.com/debian/ stable main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> -y <span class="token function">yarn</span></span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
<h3 id="build-the-greenbone-security-assistant" tabindex="-1"><a class="header-anchor" href="#build-the-greenbone-security-assistant" aria-hidden="true">#</a> Build the Greenbone Security Assistant</h3>
<p>Proceed to download and build the <a href="https://github.com/greenbone/gsa" target="_blank" rel="noopener noreferrer">Greenbone Security Assistant (GSA)<ExternalLinkIcon/></a> version 22.4.0.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GSA_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsa/archive/refs/tags/v<span class="token variable">$GSA_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsa/releases/download/v<span class="token variable">$GSA_VERSION</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
</CodeGroup>
</CodeGroup>
<p>Once complete, verify the GSA downloads and make sure the signature from Greenbone Community Feed is good.</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 02:59:15 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Proceed with the installation of GSA.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This may take a while.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$SOURCE_DIR</span>/gsa-<span class="token variable">$GSA_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf build <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">yarn</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> build <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p <span class="token variable">$INSTALL_PREFIX</span>/share/gvm/gsad/web/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -r build/* <span class="token variable">$INSTALL_PREFIX</span>/share/gvm/gsad/web/</span></span>
</code></pre></div></CodeGroupItem>
<p>export PG_GVM_VERSION=$GVM_VERSION
curl -f -L https://github.com/greenbone/pg-gvm/archive/refs/tags/v$PG_GVM_VERSION.tar.gz -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz &amp;&amp; <br>
curl -f -L https://github.com/greenbone/pg-gvm/releases/download/v$PG_GVM_VERSION/pg-gvm-$PG_GVM_VERSION.tar.gz.asc -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc &amp;&amp; <br>
gpg --verify $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz::: code-group-item Rocky</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div><p>:::</p>
</CodeGroup>
<h3 id="build-the-greenbone-security-assistant-daemon" tabindex="-1"><a class="header-anchor" href="#build-the-greenbone-security-assistant-daemon" aria-hidden="true">#</a> Build the Greenbone Security Assistant Daemon</h3>
<p>Proceed to download and build the <a href="https://github.com/greenbone/gsad" target="_blank" rel="noopener noreferrer">Greenbone Security Assistant Daemon (GSAD)<ExternalLinkIcon/></a> version 22.4.0.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span>  <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GSAD_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsad/archive/refs/tags/v<span class="token variable">$GSAD_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/gsad-<span class="token variable">$GSAD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/gsad/releases/download/v<span class="token variable">$GSAD_VERSION</span>/gsad-<span class="token variable">$GSAD_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/gsad-<span class="token variable">$GSAD_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/gsad-<span class="token variable">$GSAD_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/gsad-<span class="token variable">$GSAD_VERSION</span>.tar.gz</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once you've verified that the signature is good proceed build and install GSAD.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/gsad-<span class="token variable">$GSAD_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/gsad <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/gsad <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/gsad-<span class="token variable">$GSAD_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token punctuation">\</span>
  -DSYSCONFDIR<span class="token operator">=</span>/etc <span class="token punctuation">\</span>
  -DLOCALSTATEDIR<span class="token operator">=</span>/var <span class="token punctuation">\</span>
  -DGVMD_RUN_DIR<span class="token operator">=</span>/run/gvmd <span class="token punctuation">\</span>
  -DGSAD_RUN_DIR<span class="token operator">=</span>/run/gsad <span class="token punctuation">\</span>
  -DLOGROTATE_DIR<span class="token operator">=</span>/etc/logrotate.d <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-openvas-samba-module" tabindex="-1"><a class="header-anchor" href="#build-the-openvas-samba-module" aria-hidden="true">#</a> Build the OpenVAS Samba module</h3>
<p>Download and build the <a href="https://github.com/greenbone/openvas-smb" target="_blank" rel="noopener noreferrer">OpenVAS SMB module<ExternalLinkIcon/></a>.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>The OpenVAS Samba module is independently updated and its version tag may differ from the GVM version.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">OPENVAS_SMB_VERSION</span><span class="token operator">=</span><span class="token number">21.4</span>.0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-smb/releases/download/v<span class="token variable">$OPENVAS_SMB_VERSION</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Verify the SMB module download and make sure the signature from Greenbone Community Feed is trusted.</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">gpg: Signature made Fri 25 Jun 2021 06:36:43 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Next extract files and proceed with the installation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$BUILD_DIR</span>/openvas-smb <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$BUILD_DIR</span>/openvas-smb <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token variable">$SOURCE_DIR</span>/openvas-smb-<span class="token variable">$OPENVAS_SMB_VERSION</span> <span class="token punctuation">\</span>
  -DCMAKE_INSTALL_PREFIX<span class="token operator">=</span><span class="token variable">$INSTALL_PREFIX</span> <span class="token punctuation">\</span>
  -DCMAKE_BUILD_TYPE<span class="token operator">=</span>Release <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">make</span> <span class="token assign-left variable">DESTDIR</span><span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-the-openvas-scanner" tabindex="-1"><a class="header-anchor" href="#build-the-openvas-scanner" aria-hidden="true">#</a> Build the OpenVAS Scanner</h3>
<p>Download and build the <a href="https://github.com/greenbone/openvas" target="_blank" rel="noopener noreferrer">openvas-scanner (OpenVAS)<ExternalLinkIcon/></a>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">OPENVAS_SCANNER_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/openvas-scanner/releases/download/v<span class="token variable">$OPENVAS_SCANNER_VERSION</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Verify the signature output.</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 12:59:52 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$OPENVAS_SCANNER_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
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
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-ospd-openvas" tabindex="-1"><a class="header-anchor" href="#build-ospd-openvas" aria-hidden="true">#</a> Build ospd-openvas</h3>
<p>Proceed to download <a href="https://github.com/greenbone/ospd-openvas" target="_blank" rel="noopener noreferrer">ospd-openvas<ExternalLinkIcon/></a>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">OSPD_OPENVAS_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/ospd-openvas/releases/download/v<span class="token variable">$OSPD_OPENVAS_VERSION</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz.asc -o <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz.asc <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Verify signature.</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">gpg: Signature made Wed 04 Aug 2021 07:13:45 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from "Greenbone Community Feed integrity key" [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div><p>Extract files and start the installation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$SOURCE_DIR</span>/ospd-openvas-<span class="token variable">$OSPD_OPENVAS_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> python3 -m pip <span class="token function">install</span> <span class="token builtin class-name">.</span> --prefix /usr --no-warn-script-location --no-dependencies <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-notus-scanner" tabindex="-1"><a class="header-anchor" href="#build-notus-scanner" aria-hidden="true">#</a> Build notus-scanner</h3>
<p>First download and verify the new notus-scanner.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">NOTUS_VERSION</span><span class="token operator">=</span><span class="token variable">$GVM_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">curl</span> -f -L https://github.com/greenbone/notus-scanner/archive/refs/tags/v<span class="token variable">$NOTUS_VERSION</span>.tar.gz -o <span class="token variable">$SOURCE_DIR</span>/notus-scanner-<span class="token variable">$NOTUS_VERSION</span>.tar.gz</span></span>
<span class="token output">curl -f -L https://github.com/greenbone/notus-scanner/releases/download/v$NOTUS_VERSION/notus-scanner-$NOTUS_VERSION.tar.gz.asc -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc &amp;&amp; \
gpg --verify $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once verified proceed and install.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">tar</span> -C <span class="token variable">$SOURCE_DIR</span> -xvzf <span class="token variable">$SOURCE_DIR</span>/notus-scanner-<span class="token variable">$NOTUS_VERSION</span>.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$SOURCE_DIR</span>/notus-scanner-<span class="token variable">$NOTUS_VERSION</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> python3 -m pip <span class="token function">install</span> <span class="token builtin class-name">.</span> --prefix /usr --no-warn-script-location --no-dependencies <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="install-the-tomli-module" tabindex="-1"><a class="header-anchor" href="#install-the-tomli-module" aria-hidden="true">#</a> Install the tomli module</h3>
<p>Install the tomli module which is a required dependency for the notus-scanner.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> python3 -m pip <span class="token function">install</span> tomli</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="install-gvm-tools" tabindex="-1"><a class="header-anchor" href="#install-gvm-tools" aria-hidden="true">#</a> Install GVM tools</h3>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> python3 -m pip <span class="token function">install</span> --prefix /usr --no-warn-script-location --no-dependencies gvm-tools <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -rv <span class="token variable">$INSTALL_DIR</span>/* / <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/*</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="set-up-the-mosquitto-broker" tabindex="-1"><a class="header-anchor" href="#set-up-the-mosquitto-broker" aria-hidden="true">#</a> Set up the Mosquitto broker</h3>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span>  <span class="token bash language-bash"><span class="token function">sudo</span> systemctl start mosquitto.service <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> mosquitto.service <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"mqtt_server_uri = localhost:1883"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/openvas/openvas.conf</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="configure-redis" tabindex="-1"><a class="header-anchor" href="#configure-redis" aria-hidden="true">#</a> Configure Redis</h3>
<p>Next configure redis for the default GVM installation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$SOURCE_DIR</span>/openvas-scanner-<span class="token variable">$GVM_VERSION</span>/config/redis-openvas.conf /etc/redis/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> redis:redis /etc/redis/redis-openvas.conf <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"db_address = /run/redis-openvas/redis.sock"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> -a /etc/openvas/openvas.conf</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Start the redis server and enable it as a start up service.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl start redis-server@openvas.service <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> redis-server@openvas.service</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Add redis to the GVM group and set up correct permissions.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">mkdir</span> -p /var/lib/notus <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /run/notus-scanner <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /run/gvmd <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> -aG redis gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /var/lib/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /var/lib/openvas <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /var/lib/notus <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /var/log/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /run/gvmd <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm /run/notus-scanner <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R g+srw /var/lib/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R g+srw /var/lib/openvas <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> -R g+srw /var/log/gvm <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> gvm:gvm /usr/local/sbin/gvmd <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">6750</span> /usr/local/sbin/gvmd</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>You also need to adjust the permissions for the feed synchronization.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">chown</span> gvm:gvm /usr/local/bin/greenbone-nvt-sync <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">740</span> /usr/local/sbin/greenbone-feed-sync <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> gvm:gvm /usr/local/sbin/greenbone-*-sync <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">740</span> /usr/local/sbin/greenbone-*-sync</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Feed validation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GNUPGHOME</span><span class="token operator">=</span>/tmp/openvas-gnupg <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p <span class="token variable">$GNUPGHOME</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --import /tmp/GBCommunitySigningKey.asc <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:"</span> <span class="token operator">></span> /tmp/ownertrust.txt <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --import-ownertrust <span class="token operator">&lt;</span> /tmp/ownertrust.txt <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">OPENVAS_GNUPG_HOME</span><span class="token operator">=</span>/etc/openvas/gnupg <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p <span class="token variable">$OPENVAS_GNUPG_HOME</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">cp</span> -r /tmp/openvas-gnupg/* <span class="token variable">$OPENVAS_GNUPG_HOME</span>/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">chown</span> -R gvm:gvm <span class="token variable">$OPENVAS_GNUPG_HOME</span></span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>OpenVAS will be launched from an ospd-openvas process. Update the secure path in the sudoers file accordingly.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> visudo</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Allow members of group sudo to execute any command</span>
%sudo   <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> ALL

<span class="token comment"># allow users of the gvm group run openvas</span>
%gvm ALL <span class="token operator">=</span> NOPASSWD: /usr/local/sbin/openvas
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configure-postgresql-database" tabindex="-1"><a class="header-anchor" href="#configure-postgresql-database" aria-hidden="true">#</a> Configure PostgreSQL database</h3>
<p>For additional information see reference greenbone/gvmd <a href="https://github.com/greenbone/gvmd/blob/master/INSTALL.md" target="_blank" rel="noopener noreferrer">INSTALL.md<ExternalLinkIcon/></a>. First make sure that the required dependencies have been installed (see <a href="#prerequisites">Prerequisites</a>). Before we can add the PostgreSQL user make sure that the service is up and running.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">sudo systemctl start postgresql@14-main.service
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Proceed to create a Postgres user and database.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> -u postgres <span class="token function">bash</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">postgres@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash">createuser -DRS gvm <span class="token operator">&amp;&amp;</span> createdb -O gvm gvmd</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">postgres@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash">psql gvmd</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
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
<p>Before you create the administrator, make sure you did exit the postgres session and reloaded the dynamic loader cache.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">postgres@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">exit</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ldconfig</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once you've reloaded the dynamic loader cache proceed with the user creation.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> gvmd --create-user<span class="token operator">=</span>admin --password<span class="token operator">=</span>admin</span></span>
<span class="token output">User created.
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next lets retrieve the administrators uuid.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> gvmd --get-users --verbose</span></span>
<span class="token output">admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
</span></code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Use the administration uuid and modify the gvmd settings. Remember to put your uuid as the value option.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="update-network-vulnerability-tests" tabindex="-1"><a class="header-anchor" href="#update-network-vulnerability-tests" aria-hidden="true">#</a> Update Network Vulnerability Tests</h3>
<p>Update Network Vulnerability Tests (NVT) from Greenbone Community Feed.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This may take a while.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> -u gvm greenbone-nvt-sync</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="update-greenbone-feed-synchronisation" tabindex="-1"><a class="header-anchor" href="#update-greenbone-feed-synchronisation" aria-hidden="true">#</a> Update Greenbone Feed synchronisation</h3>
<p>Update the Greenbone feed synchronisation one at the time.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Only one sync per time, otherwise the source ip will be temporarily blocked.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> -u gvm greenbone-feed-sync --type GVMD_DATA</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> -u gvm greenbone-feed-sync --type SCAP</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> -u gvm greenbone-feed-sync --type CERT</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>To keep the Greenbone feed up-to-date you may create a <a href="#scheduled-jobs">scheduled job</a> using crontab.</p>
<h3 id="generate-gvm-certificates" tabindex="-1"><a class="header-anchor" href="#generate-gvm-certificates" aria-hidden="true">#</a> Generate GVM certificates</h3>
<p>Once you've finished the feed synchronisation, generate GVM certificates.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> -u gvm gvm-manage-certs -a</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="set-up-systemd" tabindex="-1"><a class="header-anchor" href="#set-up-systemd" aria-hidden="true">#</a> Set up systemd</h3>
<p>Next setup the startup scripts. First configure the Greenbone Manager startup script.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">cat &lt;&lt; EOF > $BUILD_DIR/gvmd.service
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
PIDFile=/run/gvmd/gvmd.pid
RuntimeDirectory=gvmd
RuntimeDirectoryMode=2775
ExecStart=/usr/local/sbin/gvmd --osp-vt-update=/run/ospd/ospd-openvas.sock --listen-group=gvm
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
EOF
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Copy the startup script from the build folder to your system manager directory.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$BUILD_DIR</span>/gvmd.service /etc/systemd/system/</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once the first startup script is saved proceed to create the script for the Greenbone Security Assistant (GSA). Remember to define your IP address for GSA.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">cat &lt;&lt; EOF > $BUILD_DIR/gsad.service
[Unit]
Description=Greenbone Security Assistant daemon (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target gvmd.service
Wants=gvmd.service

[Service]
Type=forking
User=gvm
Group=gvm
RuntimeDirectory=gsad
RuntimeDirectoryMode=2775
PIDFile=/run/gsad/gsad.pid
ExecStart=/usr/local/sbin/gsad --listen=192.168.0.1 --port=9392
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
Alias=greenbone-security-assistant.service
EOF
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Copy the startup script to system directory.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$BUILD_DIR</span>/gsad.service /etc/systemd/system/</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Create the systemd service script for ospd-openvas.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">cat &lt;&lt; EOF > $BUILD_DIR/ospd-openvas.service
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
ExecStart=/usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas --socket-mode 0o770 --mqtt-broker-address localhost --mqtt-broker-port 1883 --notus-feed-dir /var/lib/notus/advisories
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Finally copy the last startup script to your system manager directory.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$BUILD_DIR</span>/ospd-openvas.service /etc/systemd/system/</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Create the systemd service script for notus-scanner.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">cat &lt;&lt; EOF > $BUILD_DIR/notus-scanner.service
[Unit]
Description=Notus Scanner
Documentation=https://github.com/greenbone/notus-scanner
After=mosquitto.service
Wants=mosquitto.service
ConditionKernelCommandLine=!recovery

[Service]
Type=forking
User=gvm
RuntimeDirectory=notus-scanner
RuntimeDirectoryMode=2775
PIDFile=/run/notus-scanner/notus-scanner.pid
ExecStart=/usr/local/bin/notus-scanner --products-directory /var/lib/notus/products --log-file /var/log/gvm/notus-scanner.log
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Finally copy the last startup script to your system manager directory.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">cp</span> <span class="token variable">$BUILD_DIR</span>/notus-scanner.service /etc/systemd/system/</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="enable-and-start-services" tabindex="-1"><a class="header-anchor" href="#enable-and-start-services" aria-hidden="true">#</a> Enable and start services</h3>
<p>To enable the created startup scripts, reload the system control daemon.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl daemon-reload</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once you've reloaded the daemon proceed to enable each of the services.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> notus-scanner</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> ospd-openvas</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> gvmd</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> gsad</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next start each service.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl start notus-scanner</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl start ospd-openvas</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl start gvmd</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl start gsad</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>Remember that even though the initial startup of the services are returned immediately, it make take several minutes or even hours for the services to be ready. For more information visit <a href="https://greenbone.github.io/docs/gvm-21.04/index.html#starting-services-with-systemd" target="_blank" rel="noopener noreferrer">GVM official docs<ExternalLinkIcon/></a>.</p>
</div>
<p>You can check the current status of each of the services by running the commands below.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl status ospd-openvas.service</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">● ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
     Loaded: loaded (/etc/systemd/system/ospd-openvas.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2021-10-11 18:22:39 UTC; 5min ago
       Docs: man:ospd-openvas(8)
             man:openvas(8)
    Process: 37213 ExecStart=/usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas ->
   Main PID: 37228 (ospd-openvas)
      Tasks: 6 (limit: 2278)
     Memory: 16.5M
     CGroup: /system.slice/ospd-openvas.service
             ├─37228 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/>
             ├─37230 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/>
             ├─37297 openvas --update-vt-info
             └─37300 openvas: Reloaded 43550 of 77138 NVTs (56% / ETA: 04:25)

Oct 11 18:22:37 server@libellux systemd[1]: Starting OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)...
Oct 11 18:22:39 server@libellux systemd[1]: Started OSPd Wrapper for the OpenVAS Scanner (ospd-openvas).
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl status gvmd.service</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Synchronizing the SCAP database is usually what takes a lot of time so please be patient and do not restart your server.</p>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">● gvmd.service - Greenbone Vulnerability Manager daemon (gvmd)
     Loaded: loaded (/etc/systemd/system/gvmd.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2021-10-11 18:22:46 UTC; 8min ago
       Docs: man:gvmd(8)
    Process: 37240 ExecStart=/usr/local/sbin/gvmd --osp-vt-update=/run/ospd/ospd-openvas.sock --listen-group=gvm (code=exited, status=0/SUCCESS)
   Main PID: 37251 (gvmd)
      Tasks: 3 (limit: 2278)
     Memory: 1.6G
     CGroup: /system.slice/gvmd.service
             ├─37251 gvmd: Waiting for incoming connections
             ├─37272 gpg-agent --homedir /var/lib/gvm/gvmd/gnupg --use-standard-socket --daemon
             └─37622 gvmd: Syncing SCAP: Updating CPEs

Oct 11 18:22:43 server@libellux systemd[1]: Starting Greenbone Vulnerability Manager daemon (gvmd)...
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div></div><CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl status gsad.service</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">● gsad.service - Greenbone Security Assistant daemon (gsad)
     Loaded: loaded (/etc/systemd/system/gsad.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2021-10-11 18:50:15 UTC; 1min 11s ago
       Docs: man:gsad(8)
             https://www.greenbone.net
    Process: 38710 ExecStart=/usr/local/sbin/gsad --listen=192.168.0.1 --port=9392 (code=exited, status=0/SUCCESS)
   Main PID: 38715
      Tasks: 8 (limit: 2278)
     Memory: 2.1M
     CGroup: /system.slice/gsad.service
             └─38714 /usr/local/sbin/gsad --listen=192.168.0.1 --port=9392

Oct 11 18:50:12 server@libellux systemd[1]: Starting Greenbone Security Assistant daemon (gsad)...
Oct 11 18:50:15 server@libellux systemd[1]: Started Greenbone Security Assistant daemon (gsad).
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br></div></div><p>Login at your localhost e.g. <code v-pre>https://192.168.0.1:9392</code> with the username <code v-pre>admin</code> and the chosen password.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gvm-22_4_0-gsa_login.png')" alt="GSA login">
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This may take a while.</p>
</div>
<p>Once logged in, go to the <em>Administration</em> tab and select <em>Feed Status</em>. You'll see that the update is in progress.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gvm-22_4_0-feed_status.png')" alt="GVM feed status">
<p>You may check the <em>gvmd</em> logs in real-time to see what updates are being made.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">tail</span> -f /var/log/gvm/gvmd.log</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>When the status changed to <em>current</em> in the <em>Feed status</em> go to the dashboard and it will be populated with CVEs by creation time and NVTs by severity class.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gvm-22_4_0-dashboard.png')" alt="GSA dashboard">
<p>You may also confirm the current version of GSA. Go to the <em>Help</em> tab and select <em>About</em>.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gvm-22_4_0-gsa_about.png')" alt="GSA about">
<p>To run basic vulnerability scans and get a feel for how OpenVAS works, check the <a href="#running-vulnerability-scans">Running vulnerability scans</a> section.</p>
<h2 id="install-gvm-21-04-atomicorp" tabindex="-1"><a class="header-anchor" href="#install-gvm-21-04-atomicorp" aria-hidden="true">#</a> Install GVM 21.04 Atomicorp <Badge text="non-sponsored" type="tip"/></h2>
<p>Atomicorp GVM 21.04 package supports Redhat, Rocky, Centos or Fedora Linux platforms. <a href="https://github.com/Atomicorp/gvm" target="_blank" rel="noopener noreferrer">Atomicorp GVM package<ExternalLinkIcon/></a>.</p>
<p>Check if SELinux is enabled.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash">sestatus</span></span>
<span class="token output">SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
</span></code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
</CodeGroup>
<p>If enabled proceed to disable SELinux by running the command below.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> setenforce <span class="token number">0</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/selinux/config</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Update the SELinux configuration file and set SELINUX to disabled.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># This file controls the state of SELinux on the system.</span>
<span class="token comment"># SELINUX= can take one of these three values:</span>
<span class="token comment">#     enforcing - SELinux security policy is enforced.</span>
<span class="token comment">#     permissive - SELinux prints warnings instead of enforcing.</span>
<span class="token comment">#     disabled - No SELinux policy is loaded.</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save and reboot the system.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">shutdown</span> -r now</span></span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once the system rebooted, make sure that SELinux has been disabled</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash">sestatus</span></span>
<span class="token output">SELinux status:                 disabled
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Continue and download the Atomicorp installer.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">wget</span> -q -O - https://updates.atomicorp.com/installers/atomic <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">sh</span></span></span>

<span class="token output">For supported software packages please contact us at: 

  sales@atomicorp.com

Do you agree to these terms? (yes/no) [Default: yes] yes
Enable repo by default? (yes/no) [Default: yes]: yes
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
</CodeGroup>
<p>Enable PowerTools and install extra packages.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Only required for Redhat, Rocky and CentOS.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@centos</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> yum config-manager --set-enabled PowerTools</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@centos</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> yum <span class="token function">install</span> epel-release</span></span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Proceed and install GVM.</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> yum <span class="token function">install</span> gvm</span></span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Finally run the GVM configuration script to setup GVM (this might take awhile).</p>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> gvm-setup</span></span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once the GVM setup has been complete, proceed to set the administrator password.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Do not use special characters in the password.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">Updating OpenVAS Manager certificates: Complete

GVMD startup: Done

Set the GSAD admin users password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter Administrator Password:
Verify Administrator Password:

Setup complete
  Log in to GSAD at https://localhost
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Login at your localhost e.g. <code v-pre>https://192.168.0.1</code> with the username <code v-pre>admin</code> and the chosen password.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_dashboard.png')" alt="GSA dashboard">
<h2 id="running-vulnerability-scans" tabindex="-1"><a class="header-anchor" href="#running-vulnerability-scans" aria-hidden="true">#</a> Running vulnerability scans</h2>
<p>There are several approaches on how to configure and run tasks (scans) toward your targets (hosts) in GVM. In this tutorial we will go through how to run the more basic tasks. We will do both unauthenticated scans, where we do not grant GVM SSH access to our target, and authenticated scans to help identify internal server vulnerabilites or misconfigurations.</p>
<h3 id="unauthenticated-scan" tabindex="-1"><a class="header-anchor" href="#unauthenticated-scan" aria-hidden="true">#</a> Unauthenticated scan</h3>
<p>Login to the Greenbone Security Assistant (GSA) e.g. <code v-pre>https://192.168.0.1</code>. Once logged in we will add our first target. Go the the <em>Configuration</em> menu in the top navigation and select <em>Targets</em>.</p>
<img class="zoom-custom-imgs" :src="('/img/openvas/gsa_targets.png')" alt="GSA targets">
<p>In the top left corner of the <em>Targets</em> view there's a starred document icon, click and select to create a <em>New Target</em>. Fill in the name of the target server e.g. <em>Ubuntu Client</em> and its IP address <code v-pre>192.168.0.2</code>. Leave the rest of the settings in default.</p>
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
<p>First make sure that you've generated SSH keys for your GVM client user e.g. <code v-pre>client@ubuntu</code>. Add your public key to the targets authorized keys file. You may have to connect to your target host, through SSH, before running GVM vulnerability scan to add the target host to your clients machine's known hosts. Once you've established a secure connection between your client and target, proceed to configure credentials in the Greenbone Security Assistant. Go to <em>Configuration</em> and select <em>Credentials</em>.</p>
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
<p>To keep the community feed up-to-date create a file and add the Greenbone feed commands to check for daily updates using crontab.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">touch</span> /usr/local/bin/openvas-update</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Make sure the file is owned by the gvm user.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">chown</span> gvm:gvm /usr/local/bin/openvas-update</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Make the file executable.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">chmod</span> a+x /usr/local/bin/openvas-update</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next open the file in your favorite text editor.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">nano</span> /usr/local/bin/openvas-update</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Enter the Greenbone feed commands below to keep the community feed up-to-date.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session line-numbers-mode"><pre v-pre class="language-shell-session"><code><span class="token output">/usr/local/bin/greenbone-nvt-sync
/usr/local/sbin/greenbone-feed-sync --type GVMD_DATA
/usr/local/sbin/greenbone-feed-sync --type SCAP
/usr/local/sbin/greenbone-feed-sync --type CERT
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session line-numbers-mode"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>Switch to root and edit crontab to add the file you created to check for daily updates.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">su</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">crontab</span> -e</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Edit this file to introduce tasks to be run by cron.</span>
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

<span class="token number">0</span> <span class="token number">0</span> * * * <span class="token function">sudo</span> -u gvm /usr/local/bin/openvas-update
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>
<p>If you encounter any issue or having questions regarding Greenbone Vulnerability Manager, I recommend using their helpful <a href="https://community.greenbone.net/" target="_blank" rel="noopener noreferrer">community forum<ExternalLinkIcon/></a>.</p>
<p><a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">Questions<ExternalLinkIcon/></a>, <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">comments<ExternalLinkIcon/></a>, or <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">problems<ExternalLinkIcon/></a> regarding this service? Create an issue <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> or contact <a href="mailto:webmaster@libellux.com">webmaster@libellux.com</a>.</p>
<h2 id="enterprise-solutions" tabindex="-1"><a class="header-anchor" href="#enterprise-solutions" aria-hidden="true">#</a> Enterprise solutions <Badge text="non-sponsored" type="tip"/></h2>
<h3 id="the-greenbone-security-manager" tabindex="-1"><a class="header-anchor" href="#the-greenbone-security-manager" aria-hidden="true">#</a> The Greenbone Security Manager</h3>
<p>The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.</p>
<p><a href="https://www.greenbone.net/en/product-comparison/" target="_blank" rel="noopener noreferrer">Greenbone Security Manager<ExternalLinkIcon/></a></p>
</div></template>
