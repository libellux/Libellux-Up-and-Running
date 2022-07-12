import{_ as u,r as i,o as p,c as d,a as s,b as a,w as e,e as n,d as c}from"./app.d947362a.js";const m={},h={id:"clamav-antivirus-server",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#clamav-antivirus-server","aria-hidden":"true"},"#",-1),b=n(" ClamAV Antivirus Server "),g=s("p",null,"ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.",-1),v={href:"https://www.clamav.net/",target:"_blank",rel:"noopener noreferrer"},f=n("ClamAV website"),_=n(),y={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},x=n("Source code"),S=n(),w={href:"https://docs.clamav.net/",target:"_blank",rel:"noopener noreferrer"},C=n("Offical docs"),T=s("p",null,"Setup and configuration have been tested on following OS with version:",-1),D=s("ul",null,[s("li",null,"Ubuntu- 18.04, 20.04, 22.04 (Jammy Jellyfish), Debian 11 (bullseye), Rocky 8 (Green Obsidian), Windows 10, Windows Server 2019"),s("li",null,"ClamAV- 0.102.4, 0.104.0, 0.104.1, 0.105.0")],-1),A=s("p",null,[s("a",{href:"https://fundof.me/libellux"},[s("img",{src:"https://img.shields.io/badge/fundof-libellux-green",alt:"fundof"})])],-1),M=s("h2",{id:"configuration-files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),n(" Configuration files")],-1),L={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/ubuntu_0.105.0.sh",target:"_blank",rel:"noopener noreferrer"},P=n("Ubuntu 22.04, ClamAV 0.105.0"),E={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/debian_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},F=n("Debian 11, ClamAV 0.104.1"),R={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/rocky_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},I=n("Rocky 8, ClamAV 0.104.1"),O=c(`<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li><code>net-tools</code> (optional)</li></ul><details class="custom-container details"><summary>Dependencies for Ubuntu 22.04</summary><div class="language-text ext-text"><pre class="language-text"><code>build-essential make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev cmake rust-all cargo
</code></pre></div></details><details class="custom-container details"><summary>Dependencies for Debian 11</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libmilter-dev libjson-c5 libjson-c-dev_0.15-2
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
</code></pre></div></details><details class="custom-container details"><summary>Dependencies for Rocky 8</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc gcc-c++ cmake make python3 python3-pip valgrind
bzip2-devel check-devel libcurl-devel libxml2-devel
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
</code></pre></div></details><h2 id="install-clamav-from-source" tabindex="-1"><a class="header-anchor" href="#install-clamav-from-source" aria-hidden="true">#</a> Install ClamAV from source</h2><p>In this tutorial we&#39;ll install the ClamAV Antivirus Server (<code>192.168.0.1</code>) from source as a stand-alone server with Ubuntu 22.04, Debian 11 or Rocky 8. We&#39;ll be using the <strong>multiscan</strong> option so the more threads the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server&#39;s TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the stand-alone server. The clients wont be built from source but rather use already available repository packages (Ubuntu 20.04 and Windows 10).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For Rocky 8 install Extra Packages for Enterprise Linux (EPEL) and enable PowerTools.</p></div>`,8),$=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" epel-release "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" dnf-plugins-core "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" yum config-manager --set-enabled powertools")])]),n(`
`)])])],-1),U=s("p",null,"Once you've installed EPEL and enabled PowerTools (Rocky only) continue to install ClamAV dependencies.",-1),N=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(" update "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(" -y upgrade "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" -y build-essential "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" -y "),s("span",{class:"token function"},"make"),n(" pkg-config python3 python3-pip python3-pytest valgrind "),s("span",{class:"token punctuation"},"\\"),n(`
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev `),s("span",{class:"token punctuation"},"\\"),n(`
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev cmake rust-all cargo`)])]),n(`
`)])])],-1),V=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(" update "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(" -y upgrade "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" -y gcc cmake "),s("span",{class:"token function"},"make"),n(" pkg-config python3 python3-pip python3-pytest valgrind "),s("span",{class:"token punctuation"},"\\"),n(`
check libbz2-dev libcurl4-openssl-dev libmilter-dev `),s("span",{class:"token punctuation"},"\\"),n(`
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev`)])]),n(`
`)])])],-1),B=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" gcc gcc-c++ cmake "),s("span",{class:"token function"},"make"),n(" python3 python3-pip valgrind "),s("span",{class:"token punctuation"},"\\"),n(`
bzip2-devel check-devel libcurl-devel libxml2-devel `),s("span",{class:"token punctuation"},"\\"),n(`
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel`)])]),n(`
`)])])],-1),z=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"Only install libjson-c5 and libjson-c-dev for Debian 11 when compiling ClamAV 0.104.1.")],-1),W=s("p",null,[n("For ClamAV 0.104.1 and Debian 11 proceed to install packages "),s("code",null,"libjson-c5"),n(" and "),s("code",null,"libjson-c-dev"),n(".")],-1),G=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"wget"),n(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" dpkg -i libjson-c5_0.15-2_amd64.deb "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"sudo"),n(" dpkg -i libjson-c-dev_0.15-2_amd64.deb")])]),n(`
`)])])],-1),j=s("p",null,"Create ClamAV service group and user.",-1),H=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"groupadd"),n(" clamav "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"useradd"),n(" -g clamav -s /bin/false -c "),s("span",{class:"token string"},'"Clam Antivirus"'),n(" clamav")])]),n(`
`)])])],-1),Y=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"groupadd"),n(" clamav "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"useradd"),n(" -g clamav -s /bin/false -c "),s("span",{class:"token string"},'"Clam Antivirus"'),n(" clamav")])]),n(`
`)])])],-1),q=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"groupadd"),n(" clamav "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"useradd"),n(" -g clamav -s /bin/false -c "),s("span",{class:"token string"},'"Clam Antivirus"'),n(" clamav")])]),n(`
`)])])],-1),K=s("h3",{id:"import-clamav-signing-key",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-clamav-signing-key","aria-hidden":"true"},"#"),n(" Import ClamAV signing key")],-1),Q={class:"custom-container tip"},X=s("p",{class:"custom-container-title"},"TIP",-1),J=n("You can find the public ClamAV key "),Z={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},ss=n("here"),ns=n(" under Talos PGP Public Key."),as=s("p",null,"Create a new .asc file, paste the public key and save.",-1),es=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"touch"),n(" clamav.asc "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"nano"),n(" clamav.asc")])]),n(`
`)])])],-1),ts=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"touch"),n(" clamav.asc "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"nano"),n(" clamav.asc")])]),n(`
`)])])],-1),ls=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"touch"),n(" clamav.asc "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"nano"),n(" clamav.asc")])]),n(`
`)])])],-1),os=s("p",null,[n("Once you've saved the "),s("code",null,"clamav.asc"),n(" file proceed to import the key.")],-1),cs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --import clamav.asc")]),n(`
`)])])],-1),is=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --import clamav.asc")]),n(`
`)])])],-1),rs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --import clamav.asc")]),n(`
`)])])],-1),us=c(`<p>You should see that the public key <em>Talos from Cisco Systems Inc.</em> has been imported.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: key 609B024F2B3EDD07: public key &quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot; imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
</span></code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div></div><p>Now lets edit the key.</p>`,3),ps=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --edit-key 609B024F2B3EDD07")]),n(`
`)])])],-1),ds=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --edit-key 609B024F2B3EDD07")]),n(`
`)])])],-1),ms=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --edit-key 609B024F2B3EDD07")]),n(`
`)])])],-1),hs=c(`<p>When you get prompted type <em>trust</em> and select option 5 (I trust ultimately).</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

pub  rsa4096/609B024F2B3EDD07
     created: 2021-03-30  expires: 2023-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: 2021-03-30  expires: 2023-03-30  usage: E
[ unknown] (1). Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;

gpg&gt; trust
pub  rsa4096/609B024F2B3EDD07
     created: 2021-03-30  expires: 2023-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: 2021-03-30  expires: 2023-03-30  usage: E
[ unknown] (1). Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;

Please decide how far you trust this user to correctly verify other users&#39; keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don&#39;t know or won&#39;t say
  2 = I do NOT trust
  3 = I trust marginally
  4 = I trust fully
  5 = I trust ultimately
  m = back to the main menu

Your decision? 5
Do you really want to set this key to ultimate trust? (y/N) y

pub  rsa4096/609B024F2B3EDD07
     created: 2021-03-30  expires: 2023-03-30  usage: SC
     trust: ultimate      validity: unknown
sub  rsa4096/73966F3B446077EC
     created: 2021-03-30  expires: 2023-03-30  usage: E
[ unknown] (1). Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg&gt; quit
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div></div><h3 id="build-clamav-server" tabindex="-1"><a class="header-anchor" href="#build-clamav-server" aria-hidden="true">#</a> Build ClamAV server</h3><p>Before you build ClamAV download both the source along with the signature to verify its validity.</p>`,4),ks=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.105.0.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.105.0.tar.gz.sig "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
gpg --verify clamav-0.105.0.tar.gz.sig clamav-0.105.0.tar.gz`)])]),n(`
`)])])],-1),bs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz`)])]),n(`
`)])])],-1),gs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz`)])]),n(`
`)])])],-1),vs=c(`<p>The output should say its a good signature from Cisco.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Wed 01 Sep 2021 05:52:12 PM UTC
gpg:                using RSA key 609B024F2B3EDD07
gpg: Good signature from &quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Proceed to extract and build.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This may take a while.</p></div>`,4),fs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"tar"),n(" -xvzf clamav-0.105.0.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token builtin class-name"},"cd"),n(" clamav-0.105.0/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"mkdir"),n(" -p build "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token builtin class-name"},"cd"),n(" build "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
cmake `),s("span",{class:"token punctuation"},".."),n(),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"CMAKE_INSTALL_PREFIX"),s("span",{class:"token operator"},"="),n("/usr "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"CMAKE_INSTALL_LIBDIR"),s("span",{class:"token operator"},"="),n("lib "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"APP_CONFIG_DIRECTORY"),s("span",{class:"token operator"},"="),n("/etc/clamav "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"DATABASE_DIRECTORY"),s("span",{class:"token operator"},"="),n("/var/lib/clamav "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"ENABLE_JSON_SHARED"),s("span",{class:"token operator"},"="),n("OFF "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
cmake --build `),s("span",{class:"token builtin class-name"},"."),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
ctest`)])]),n(`
`)])])],-1),_s=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"tar"),n(" -xvzf clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token builtin class-name"},"cd"),n(" clamav-0.104.1/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"mkdir"),n(" -p build "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token builtin class-name"},"cd"),n(" build "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
cmake `),s("span",{class:"token punctuation"},".."),n(),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"CMAKE_INSTALL_PREFIX"),s("span",{class:"token operator"},"="),n("/usr "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"CMAKE_INSTALL_LIBDIR"),s("span",{class:"token operator"},"="),n("lib "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"APP_CONFIG_DIRECTORY"),s("span",{class:"token operator"},"="),n("/etc/clamav "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"DATABASE_DIRECTORY"),s("span",{class:"token operator"},"="),n("/var/lib/clamav "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"ENABLE_JSON_SHARED"),s("span",{class:"token operator"},"="),n("OFF "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
cmake --build `),s("span",{class:"token builtin class-name"},"."),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
ctest`)])]),n(`
`)])])],-1),ys=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"tar"),n(" -xvzf clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token builtin class-name"},"cd"),n(" clamav-0.104.1/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"mkdir"),n(" -p build "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token builtin class-name"},"cd"),n(" build "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
cmake `),s("span",{class:"token punctuation"},".."),n(),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"CMAKE_INSTALL_PREFIX"),s("span",{class:"token operator"},"="),n("/usr "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"CMAKE_INSTALL_LIBDIR"),s("span",{class:"token operator"},"="),n("lib "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"APP_CONFIG_DIRECTORY"),s("span",{class:"token operator"},"="),n("/etc/clamav "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"DATABASE_DIRECTORY"),s("span",{class:"token operator"},"="),n("/var/lib/clamav "),s("span",{class:"token punctuation"},"\\"),n(`
  -D `),s("span",{class:"token assign-left variable"},"ENABLE_JSON_SHARED"),s("span",{class:"token operator"},"="),n("ON "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
cmake --build `),s("span",{class:"token builtin class-name"},"."),n(),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
ctest`)])]),n(`
`)])])],-1),xs=s("p",null,[n("The "),s("code",null,"ctest"),n(" should output the following information.")],-1),Ss=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Test project ~/clamav-0.105.0/build
      Start  1: libclamav
 1/11 Test  #1: libclamav ........................   Passed   19.97 sec
      Start  2: libclamav_valgrind
 2/11 Test  #2: libclamav_valgrind ...............   Passed  255.57 sec
      Start  3: libclamav_rust
 3/11 Test  #3: libclamav_rust ...................   Passed  787.73 sec
      Start  4: clamscan
 4/11 Test  #4: clamscan .........................   Passed    6.44 sec
      Start  5: clamscan_valgrind
 5/11 Test  #5: clamscan_valgrind ................   Passed  151.66 sec
      Start  6: clamd
 6/11 Test  #6: clamd ............................   Passed   21.74 sec
      Start  7: clamd_valgrind
 7/11 Test  #7: clamd_valgrind ...................   Passed  103.19 sec
      Start  8: freshclam
 8/11 Test  #8: freshclam ........................   Passed    2.93 sec
      Start  9: freshclam_valgrind
 9/11 Test  #9: freshclam_valgrind ...............   Passed   70.33 sec
      Start 10: sigtool
10/11 Test #10: sigtool ..........................   Passed    1.25 sec
      Start 11: sigtool_valgrind
11/11 Test #11: sigtool_valgrind .................   Passed    3.81 sec

100% tests passed, 0 tests failed out of 11

Total Test time (real) = 1424.64 sec
`)])])],-1),ws=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Test project ~/clamav-0.104.1/build
      Start  1: libclamav
 1/10 Test  #1: libclamav ........................   Passed   14.78 sec
      Start  2: libclamav_valgrind
 2/10 Test  #2: libclamav_valgrind ...............   Passed  138.25 sec
      Start  3: clamscan
 3/10 Test  #3: clamscan .........................   Passed    4.21 sec
      Start  4: clamscan_valgrind
 4/10 Test  #4: clamscan_valgrind ................   Passed   63.91 sec
      Start  5: clamd
 5/10 Test  #5: clamd ............................   Passed   15.90 sec
      Start  6: clamd_valgrind
 6/10 Test  #6: clamd_valgrind ...................   Passed   63.48 sec
      Start  7: freshclam
 7/10 Test  #7: freshclam ........................   Passed    6.80 sec
      Start  8: freshclam_valgrind
 8/10 Test  #8: freshclam_valgrind ...............   Passed   37.96 sec
      Start  9: sigtool
 9/10 Test  #9: sigtool ..........................   Passed    0.30 sec
      Start 10: sigtool_valgrind
10/10 Test #10: sigtool_valgrind .................   Passed    1.42 sec

100% tests passed, 0 tests failed out of 10

Total Test time (real) = 347.01 sec
`)])])],-1),Cs=s("p",null,"Once the test successfully passed proceed to build and install ClamAV 0.105.0 (or 0.104.1).",-1),Ts=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" cmake --build "),s("span",{class:"token builtin class-name"},"."),n(" --target "),s("span",{class:"token function"},"install")])]),n(`
`)])])],-1),Ds=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" cmake --build "),s("span",{class:"token builtin class-name"},"."),n(" --target "),s("span",{class:"token function"},"install")])]),n(`
`)])])],-1),As=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" cmake --build "),s("span",{class:"token builtin class-name"},"."),n(" --target "),s("span",{class:"token function"},"install")])]),n(`
`)])])],-1),Ms=s("h2",{id:"server-configuration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#server-configuration","aria-hidden":"true"},"#"),n(" Server configuration")],-1),Ls=s("p",null,[n("When the installation is complete there's example configuration files created by default e.g. "),s("code",null,"/etc/clamav/clamd.conf.sample"),n(". You may read through the sample configuration files to get a better understanding on which options you prefer to enable. Otherwise feel free to use the beneath options and creation of the ClamAV daemon configuration file.")],-1),Ps=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket true
LocalSocketGroup clamav
LocalSocketMode 666
User clamav
TCPSocket 3310
ScanMail true
ScanArchive true
ArchiveBlockEncrypted false
MaxDirectoryRecursion 15
FollowDirectorySymlinks false
FollowFileSymlinks false
ReadTimeout 180
MaxThreads 12
MaxConnectionQueueLength 15
LogSyslog false
LogRotate true
LogFacility LOG_LOCAL6
LogClean false
LogVerbose false
PreludeEnable no
PreludeAnalyzerName ClamAV
DatabaseDirectory /var/lib/clamav
OfficialDatabaseOnly false
SelfCheck 3600
Foreground false
Debug false
ScanPE true
MaxEmbeddedPE 10M
ScanOLE2 true
ScanPDF true
ScanHTML true
MaxHTMLNormalize 10M
MaxHTMLNoTags 2M
MaxScriptNormalize 5M
MaxZipTypeRcg 1M
ScanSWF true
ExitOnOOM false
LeaveTemporaryFiles false
AlgorithmicDetection true
ScanELF true
IdleTimeout 30
CrossFilesystems true
PhishingSignatures true
PhishingScanURLs true
PhishingAlwaysBlockSSLMismatch false
PhishingAlwaysBlockCloak false
PartitionIntersection false
DetectPUA false
ScanPartialMessages false
HeuristicScanPrecedence false
StructuredDataDetection false
CommandReadTimeout 30
SendBufTimeout 200
MaxQueue 100
ExtendedDetectionInfo true
OLE2BlockMacros false
AllowAllMatchScan true
ForceToDisk false
DisableCertCheck false
DisableCache false
MaxScanTime 120000
MaxScanSize 100M
MaxFileSize 25M
MaxRecursion 16
MaxFiles 10000
MaxPartitions 50
MaxIconsPE 100
PCREMatchLimit 10000
PCRERecMatchLimit 5000
PCREMaxFileSize 25M
ScanXMLDOCS true
ScanHWP3 true
MaxRecHWP3 16
StreamMaxLength 25M
LogFile /var/log/clamav/clamav.log
LogTime true
LogFileUnlock false
LogFileMaxSize 0
Bytecode true
BytecodeSecurity TrustSigned
BytecodeTimeout 60000
OnAccessMaxFileSize 5M
EOF'`)])]),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Es=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket true
LocalSocketGroup clamav
LocalSocketMode 666
User clamav
TCPSocket 3310
ScanMail true
ScanArchive true
ArchiveBlockEncrypted false
MaxDirectoryRecursion 15
FollowDirectorySymlinks false
FollowFileSymlinks false
ReadTimeout 180
MaxThreads 12
MaxConnectionQueueLength 15
LogSyslog false
LogRotate true
LogFacility LOG_LOCAL6
LogClean false
LogVerbose false
PreludeEnable no
PreludeAnalyzerName ClamAV
DatabaseDirectory /var/lib/clamav
OfficialDatabaseOnly false
SelfCheck 3600
Foreground false
Debug false
ScanPE true
MaxEmbeddedPE 10M
ScanOLE2 true
ScanPDF true
ScanHTML true
MaxHTMLNormalize 10M
MaxHTMLNoTags 2M
MaxScriptNormalize 5M
MaxZipTypeRcg 1M
ScanSWF true
ExitOnOOM false
LeaveTemporaryFiles false
AlgorithmicDetection true
ScanELF true
IdleTimeout 30
CrossFilesystems true
PhishingSignatures true
PhishingScanURLs true
PhishingAlwaysBlockSSLMismatch false
PhishingAlwaysBlockCloak false
PartitionIntersection false
DetectPUA false
ScanPartialMessages false
HeuristicScanPrecedence false
StructuredDataDetection false
CommandReadTimeout 30
SendBufTimeout 200
MaxQueue 100
ExtendedDetectionInfo true
OLE2BlockMacros false
AllowAllMatchScan true
ForceToDisk false
DisableCertCheck false
DisableCache false
MaxScanTime 120000
MaxScanSize 100M
MaxFileSize 25M
MaxRecursion 16
MaxFiles 10000
MaxPartitions 50
MaxIconsPE 100
PCREMatchLimit 10000
PCRERecMatchLimit 5000
PCREMaxFileSize 25M
ScanXMLDOCS true
ScanHWP3 true
MaxRecHWP3 16
StreamMaxLength 25M
LogFile /var/log/clamav/clamav.log
LogTime true
LogFileUnlock false
LogFileMaxSize 0
Bytecode true
BytecodeSecurity TrustSigned
BytecodeTimeout 60000
OnAccessMaxFileSize 5M
EOF'`)])]),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Fs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket true
LocalSocketGroup clamav
LocalSocketMode 666
User clamav
TCPSocket 3310
ScanMail true
ScanArchive true
ArchiveBlockEncrypted false
MaxDirectoryRecursion 15
FollowDirectorySymlinks false
FollowFileSymlinks false
ReadTimeout 180
MaxThreads 12
MaxConnectionQueueLength 15
LogSyslog false
LogRotate true
LogFacility LOG_LOCAL6
LogClean false
LogVerbose false
PreludeEnable no
PreludeAnalyzerName ClamAV
DatabaseDirectory /var/lib/clamav
OfficialDatabaseOnly false
SelfCheck 3600
Foreground false
Debug false
ScanPE true
MaxEmbeddedPE 10M
ScanOLE2 true
ScanPDF true
ScanHTML true
MaxHTMLNormalize 10M
MaxHTMLNoTags 2M
MaxScriptNormalize 5M
MaxZipTypeRcg 1M
ScanSWF true
ExitOnOOM false
LeaveTemporaryFiles false
AlgorithmicDetection true
ScanELF true
IdleTimeout 30
CrossFilesystems true
PhishingSignatures true
PhishingScanURLs true
PhishingAlwaysBlockSSLMismatch false
PhishingAlwaysBlockCloak false
PartitionIntersection false
DetectPUA false
ScanPartialMessages false
HeuristicScanPrecedence false
StructuredDataDetection false
CommandReadTimeout 30
SendBufTimeout 200
MaxQueue 100
ExtendedDetectionInfo true
OLE2BlockMacros false
AllowAllMatchScan true
ForceToDisk false
DisableCertCheck false
DisableCache false
MaxScanTime 120000
MaxScanSize 100M
MaxFileSize 25M
MaxRecursion 16
MaxFiles 10000
MaxPartitions 50
MaxIconsPE 100
PCREMatchLimit 10000
PCRERecMatchLimit 5000
PCREMaxFileSize 25M
ScanXMLDOCS true
ScanHWP3 true
MaxRecHWP3 16
StreamMaxLength 25M
LogFile /var/log/clamav/clamav.log
LogTime true
LogFileUnlock false
LogFileMaxSize 0
Bytecode true
BytecodeSecurity TrustSigned
BytecodeTimeout 60000
OnAccessMaxFileSize 5M
EOF'`)])]),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Rs=s("p",null,[n("Same with ClamAV freshclam there's a sample configuration file created at "),s("code",null,"/etc/clamav/freshclam.conf.sample"),n(". You may also use the following configuration file for freshclam to keep your signature database up-to-date.")],-1),Is=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
DatabaseOwner clamav
UpdateLogFile /var/log/clamav/freshclam.log
LogVerbose false
LogSyslog false
LogFacility LOG_LOCAL6
LogFileMaxSize 0
LogRotate true
LogTime true
Foreground false
Debug false
MaxAttempts 5
DatabaseDirectory /var/lib/clamav
DNSDatabaseInfo current.cvd.clamav.net
ConnectTimeout 30
ReceiveTimeout 0
TestDatabases yes
ScriptedUpdates yes
CompressLocalDatabase no
Bytecode true
NotifyClamd /etc/clamav/clamd.conf
Checks 24
DatabaseMirror db.local.clamav.net
DatabaseMirror database.clamav.net
EOF'`)])]),n(`
`)])])],-1),Os=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
DatabaseOwner clamav
UpdateLogFile /var/log/clamav/freshclam.log
LogVerbose false
LogSyslog false
LogFacility LOG_LOCAL6
LogFileMaxSize 0
LogRotate true
LogTime true
Foreground false
Debug false
MaxAttempts 5
DatabaseDirectory /var/lib/clamav
DNSDatabaseInfo current.cvd.clamav.net
ConnectTimeout 30
ReceiveTimeout 0
TestDatabases yes
ScriptedUpdates yes
CompressLocalDatabase no
Bytecode true
NotifyClamd /etc/clamav/clamd.conf
Checks 24
DatabaseMirror db.local.clamav.net
DatabaseMirror database.clamav.net
EOF'`)])]),n(`
`)])])],-1),$s=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
DatabaseOwner clamav
UpdateLogFile /var/log/clamav/freshclam.log
LogVerbose false
LogSyslog false
LogFacility LOG_LOCAL6
LogFileMaxSize 0
LogRotate true
LogTime true
Foreground false
Debug false
MaxAttempts 5
DatabaseDirectory /var/lib/clamav
DNSDatabaseInfo current.cvd.clamav.net
ConnectTimeout 30
ReceiveTimeout 0
TestDatabases yes
ScriptedUpdates yes
CompressLocalDatabase no
Bytecode true
NotifyClamd /etc/clamav/clamd.conf
Checks 24
DatabaseMirror db.local.clamav.net
DatabaseMirror database.clamav.net
EOF'`)])]),n(`
`)])])],-1),Us=s("p",null,"Before we'll create the system files for both the ClamAV daemon and freshclam create the required directories and adjust the owner permissions.",-1),Ns=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"mkdir"),n(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"chown"),n(" clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/")])]),n(`
`)])])],-1),Vs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"mkdir"),n(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"chown"),n(" clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/")])]),n(`
`)])])],-1),Bs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"mkdir"),n(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"chown"),n(" clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/")])]),n(`
`)])])],-1),zs=s("p",null,"Next create the service file for freshclam.",-1),Ws=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
# If user wants it run from cron, dont start the daemon.
ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'`)])]),n(`
`)])])],-1),Gs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
# If user wants it run from cron, dont start the daemon.
ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'`)])]),n(`
`)])])],-1),js=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
# If user wants it run from cron, dont start the daemon.
ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'`)])]),n(`
`)])])],-1),Hs=s("p",null,"Proceed to create the ClamAV daemon service file.",-1),Ys=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
# Check for database existence
ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
# Reload the database
ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'`)])]),n(`
`)])])],-1),qs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
# Check for database existence
ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
# Reload the database
ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'`)])]),n(`
`)])])],-1),Ks=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
# Check for database existence
ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
# Reload the database
ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'`)])]),n(`
`)])])],-1),Qs=s("p",null,"To enable the created startup scripts, reload the system control daemon.",-1),Xs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl daemon-reload")])]),n(`
`)])])],-1),Js=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl daemon-reload")])]),n(`
`)])])],-1),Zs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl daemon-reload")])]),n(`
`)])])],-1),sn=s("p",null,"Once you've reloaded the daemon proceed to enable each of the services.",-1),nn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-daemon.service")])]),n(`
`)])])],-1),an=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-daemon.service")])]),n(`
`)])])],-1),en=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-daemon.service")])]),n(`
`)])])],-1),tn=s("p",null,"Next start each service.",-1),ln=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"If the ClamAV daemon wont start just restart the service once freshclam downloaded the latest virus definitions.")],-1),on=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-daemon.service")])]),n(`
`)])])],-1),cn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-daemon.service")])]),n(`
`)])])],-1),rn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-daemon.service")])]),n(`
`)])])],-1),un=s("p",null,"To check that your ClamAV daemon is listening to both the local unix socket and the TCP port 3310 run the following command.",-1),pn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),n(" -lnp "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" -E "),s("span",{class:"token string"},'"(clam|3310)"')])]),n(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br")])],-1),dn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),n(" -lnp "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" -E "),s("span",{class:"token string"},'"(clam|3310)"')])]),n(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br")])],-1),mn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),n(" -lnp "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" -E "),s("span",{class:"token string"},'"(clam|3310)"')])]),n(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     320610   -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br")])],-1),hn=s("h2",{id:"install-from-repository",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-from-repository","aria-hidden":"true"},"#"),n(" Install from repository")],-1),kn=s("p",null,"You may also install ClamAV Antivirus Server directly from the repository. Download the ClamAV scanner and the ClamAV daemon.",-1),bn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" clamav clamav-daemon")])]),n(`
`)])])],-1),gn=s("p",null,"Proceed to stop freshclam the automatic database update tool for ClamAV.",-1),vn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl stop clamav-freshclam")])]),n(`
`)])])],-1),fn=s("p",null,"Next run freshclam to update to the latest definition database.",-1),_n=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" freshclam")])]),n(`
`)])])],-1),yn=s("p",null,[n("Once you've ran the freshclam command you can check the log "),s("code",null,"/var/log/clamav/freshclam.log"),n(" for the current status and then start freshclam again.")],-1),xn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"cat"),n(" /var/log/clamav/freshclam.log")])]),n(`
`),s("span",{class:"token output"},`Sat Apr 10 17:51:37 2021 -> daily.cvd database is up to date (version: 26136, sigs: 3969743, f-level: 63, builder: raynman)
Sat Apr 10 17:51:37 2021 -> main.cvd database is up to date (version: 59, sigs: 4564902, f-level: 60, builder: sigmgr)
Sat Apr 10 17:51:37 2021 -> bytecode.cvd database is up to date (version: 333, sigs: 92, f-level: 63, builder: awillia2)
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-freshclam")])]),n(`
`)])]),s("div",{class:"highlight-lines"},[s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0")])],-1),Sn=s("p",null,"Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.",-1),wn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"nano"),n(" /etc/clamav/clamd.conf")])]),n(`
`)])])],-1),Cn=c(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>You will need to comment out the line &quot;Example&quot; in the clamd.conf configuration file, else the ClamAV daemon will consider the configuration invalid.</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
<span class="token comment">#To reconfigure clamd run #dpkg-reconfigure clamav-daemon</span>
<span class="token comment">#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details</span>
LocalSocket /var/run/clamav/clamd.socket
FixStaleSocket <span class="token function">yes</span>
LocalSocketGroup clamav
LocalSocketMode <span class="token number">666</span>
<span class="token comment"># TemporaryDirectory is not set to its default /tmp here to make overriding</span>
<span class="token comment"># the default with environment variables TMPDIR/TMP/TEMP possible</span>
User clamav
TCPSocket <span class="token number">3310</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Restart ClamAV to apply the new changes.</p>`,3),Tn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl restart clamav-daemon.service")])]),n(`
`)])])],-1),Dn=s("p",null,[n("To confirm that ClamAV listen to TCP port 3310 run the command below (requires "),s("code",null,"net-tools"),n(").")],-1),An=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),n(" -lnp "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" -E "),s("span",{class:"token string"},'"(clam|3310)"')])]),n(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.ctl
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br")])],-1),Mn=s("p",null,[n("Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the "),s("a",{href:"#firewall-settings"},"Firewall settings"),n(" section for more information.")],-1),Ln=s("h3",{id:"keep-virus-definitions-up-to-date",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#keep-virus-definitions-up-to-date","aria-hidden":"true"},"#"),n(" Keep virus definitions up-to-date")],-1),Pn=s("p",null,"To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.",-1),En=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"nano"),n(" /etc/clamav/freshclam.conf")])]),n(`
`)])])],-1),Fn=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Check for new database 24 times a day</span>
Checks <span class="token number">24</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use the <code>clamdtop</code> command-line tool when you&#39;ve installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.</p>`,2),Rn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"clamdtop")]),n(`

`),s("span",{class:"token output"},`  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ \`/ __ \`__ \\/ __  / __/ __ \\/ __ \\
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
\\___/_/\\__,_/_/ /_/ /_/\\__,_/\\__/\\____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
`)])])],-1),In=s("h2",{id:"linux-client",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#linux-client","aria-hidden":"true"},"#"),n(" Linux client")],-1),On=s("p",null,"Install ClamAV on Ubuntu 20.04.",-1),$n=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" clamav clamav-daemon")])]),n(`
`)])])],-1),Un=s("p",null,"Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well.",-1),Nn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl stop clamav-daemon.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl stop clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl disable clamav-daemon.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl disable clamav-freshclam.service")])]),n(`
`)])])],-1),Vn=s("p",null,[n("Continue to configure the "),s("code",null,"clamdscan"),n(" which share configuration file with the ClamAV daemon.")],-1),Bn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"nano"),n(" /etc/clamav/clamd.conf")])]),n(`
`)])])],-1),zn=c(`<p>Comment the <code>LocalSocket /var/run/clamav/clamd.ctl</code> line and add the <code>TCPSocket 3310</code> along with the server <code>TCPAddr</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
<span class="token comment">#To reconfigure clamd run #dpkg-reconfigure clamav-daemon</span>
<span class="token comment">#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details</span>
<span class="token comment">#LocalSocket /var/run/clamav/clamd.ctl</span>
FixStaleSocket <span class="token boolean">true</span>
LocalSocketGroup clamav
LocalSocketMode <span class="token number">666</span>
<span class="token comment"># TemporaryDirectory is not set to its default /tmp here to make overriding</span>
<span class="token comment"># the default with environment variables TMPDIR/TMP/TEMP possible</span>
User clamav
TCPSocket <span class="token number">3310</span>
TCPAddr <span class="token number">192.168</span>.0.1
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When running a scan use the <code>multiscan</code> option to enable multihread reading. You can also set it to <code>quiet</code> if you&#39;re going to use the <code>log</code> option. You can also create a <code>file list</code> for all the directories to scan.</p>`,3),Wn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" clamdscan --multiscan --quiet --file-list"),s("span",{class:"token operator"},"="),n(" --log"),s("span",{class:"token operator"},"=")])]),n(`
`)])])],-1),Gn=s("h2",{id:"windows-client",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows-client","aria-hidden":"true"},"#"),n(" Windows client")],-1),jn=n("First download the "),Hn={href:"http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe",target:"_blank",rel:"noopener noreferrer"},Yn=n("ClamAV Windows Installer"),qn=n(" (version 0.102.4). Right-click the executable file "),Kn=s("code",null,"ClamAV-0.102.4.exe",-1),Qn=n(" and select "),Xn=s("code",null,"Run as Administrator",-1),Jn=n("."),Zn=["src"],sa=s("p",null,"Select destination location.",-1),na=["src"],aa=s("p",null,[n("Proceed to click the "),s("code",null,"Install"),n(" button.")],-1),ea=["src"],ta=s("p",null,[n("Once the installation is complete click the "),s("code",null,"Finish"),n(" button.")],-1),la=["src"],oa=s("p",null,[n("Run PowerShell as administrator and make sure you're in the correct path "),s("code",null,"C:\\WINDOWS\\system32"),n(". Navigate to the ClamAV directory by entering "),s("code",null,"cd 'C:\\Program Files\\ClamAV\\"),n(".")],-1),ca=["src"],ia=s("p",null,[n("Now copy the ClamAV daeomon configuration and rename it to "),s("code",null,"clamd.conf"),n(" and open the file in WordPad.")],-1),ra=s("div",{class:"language-powershell ext-powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[n("client@windows:~"),s("span",{class:"token function"},"PS"),n("$ "),s("span",{class:"token function"},"copy"),n(),s("span",{class:"token punctuation"},"."),n("\\conf_examples\\clamd"),s("span",{class:"token punctuation"},"."),n("conf"),s("span",{class:"token punctuation"},"."),n("sample "),s("span",{class:"token punctuation"},"."),n("\\clamd"),s("span",{class:"token punctuation"},"."),n(`conf
client@windows:~`),s("span",{class:"token function"},"PS"),n("$ "),s("span",{class:"token function"},"write"),s("span",{class:"token punctuation"},"."),n("exe "),s("span",{class:"token punctuation"},"."),n("\\clamd"),s("span",{class:"token punctuation"},"."),n(`conf
`)])])],-1),ua=["src"],pa=c(`<p>Comment the <code>Example</code> line and add the <code>TCPSocket</code> along with the server <code>TCPAddr</code> and save.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##</span>
<span class="token comment">## Example config file for the Clam AV daemon</span>
<span class="token comment">## Please read the clamd.conf(5) manual before editing this file.</span>
<span class="token comment">##</span>

<span class="token comment"># Comment or remove the line below.</span>
<span class="token comment">#Example</span>

<span class="token comment"># The daemon on Windows only supports unsecured TCP sockets.</span>
<span class="token comment"># Due to security reasons make sure that your IP &amp; port is not</span>
<span class="token comment"># exposed to the open internet.</span>

<span class="token comment"># TCP port address.</span>
<span class="token comment"># Default: no</span>
TCPSocket <span class="token number">3310</span>

<span class="token comment"># TCP address.</span>
<span class="token comment"># By default we bind to INADDR_ANY, probably not wise.</span>
<span class="token comment"># Enable the following to provide some degree of protection</span>
<span class="token comment"># from the outside world. This option can be specified multiple</span>
<span class="token comment"># times if you want to listen on multiple IPs. IPv6 is now supported.</span>
<span class="token comment"># Default: no</span>
TCPAddr <span class="token number">192.168</span>.0.1
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may fast test the configuration running a scan in the current directory.</p>`,3),da=["src"],ma=s("p",null,[n("Running a more complete scan, like during the Ubuntu set up, use the "),s("code",null,"multiscan"),n(" option to enable multithread reading. Set the output to "),s("code",null,"quiet"),n(" in case you will use the "),s("code",null,"log"),n(" option. As priorly mentioned you may also define a "),s("code",null,"file list"),n(" of all the directories you wish to include in the scan.")],-1),ha=s("div",{class:"language-powershell ext-powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[n("client@windows:~"),s("span",{class:"token function"},"PS"),n("$ "),s("span",{class:"token punctuation"},"."),n("\\clamdscan"),s("span",{class:"token punctuation"},"."),n("exe  "),s("span",{class:"token operator"},"--"),n("multiscan "),s("span",{class:"token operator"},"--"),n("quiet "),s("span",{class:"token operator"},"--"),n("file-list= "),s("span",{class:"token operator"},"--"),n(`log=
`)])])],-1),ka=s("h2",{id:"firewall-settings",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#firewall-settings","aria-hidden":"true"},"#"),n(" Firewall settings")],-1),ba=n("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),ga={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},va=n("here"),fa=n("."),_a=c(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw default deny incoming</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw default allow outgoing</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw allow <span class="token number">22</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span></span></span>
<span class="token output">Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</span></code></pre></div></details>`,1),ya=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),n(".0.2 to any port "),s("span",{class:"token number"},"3310"),n(" comment "),s("span",{class:"token string"},'"ClamAV client 1"')])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),n(".0.3 to any port "),s("span",{class:"token number"},"3310"),n(" comment "),s("span",{class:"token string"},'"ClamAV client 2"')])]),n(`
`)])])],-1),xa=s("p",null,"If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.",-1),Sa=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),n(".0.0/24 to any port "),s("span",{class:"token number"},"3310"),n(" comment "),s("span",{class:"token string"},'"ClamAV clients"')])]),n(`
`)])])],-1),wa=s("h2",{id:"troubleshooting",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),n(" Troubleshooting")],-1),Ca=n("In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at "),Ta={href:"https://lists.clamav.net/mailman/listinfo/clamav-users",target:"_blank",rel:"noopener noreferrer"},Da=n("ClamAV users"),Aa=n("."),Ma={id:"enterprise-solutions",tabindex:"-1"},La=s("a",{class:"header-anchor",href:"#enterprise-solutions","aria-hidden":"true"},"#",-1),Pa=n(" Enterprise solutions "),Ea=s("h3",{id:"atomic-protector",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#atomic-protector","aria-hidden":"true"},"#"),n(" Atomic Protector")],-1),Fa=s("p",null,"Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.",-1),Ra={href:"https://atomicorp.com/atomic-protector/",target:"_blank",rel:"noopener noreferrer"},Ia=n("Atomic Protector");function Oa($a,Ua){const r=i("Badge"),o=i("ExternalLinkIcon"),t=i("CodeGroupItem"),l=i("CodeGroup");return p(),d("div",null,[s("h1",h,[k,b,a(r,{text:"Rev 4",type:"tip"})]),g,s("p",null,[s("a",v,[f,a(o)]),_,s("a",y,[x,a(o)]),S,s("a",w,[C,a(o)])]),T,D,A,M,s("ul",null,[s("li",null,[s("a",L,[P,a(o)])]),s("li",null,[s("a",E,[F,a(o)])]),s("li",null,[s("a",R,[I,a(o)])])]),O,a(l,null,{default:e(()=>[a(t,{title:"Rocky"},{default:e(()=>[$]),_:1})]),_:1}),U,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[N]),_:1}),a(t,{title:"Debian"},{default:e(()=>[V]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[B]),_:1})]),_:1}),z,W,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[G]),_:1})]),_:1}),j,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[H]),_:1}),a(t,{title:"Debian"},{default:e(()=>[Y]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[q]),_:1})]),_:1}),K,s("div",Q,[X,s("p",null,[J,s("a",Z,[ss,a(o)]),ns])]),as,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[es]),_:1}),a(t,{title:"Debian"},{default:e(()=>[ts]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[ls]),_:1})]),_:1}),os,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[cs]),_:1}),a(t,{title:"Debian"},{default:e(()=>[is]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[rs]),_:1})]),_:1}),us,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ps]),_:1}),a(t,{title:"Debian"},{default:e(()=>[ds]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[ms]),_:1})]),_:1}),hs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ks]),_:1}),a(t,{title:"Debian"},{default:e(()=>[bs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[gs]),_:1})]),_:1}),vs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[fs]),_:1}),a(t,{title:"Debian"},{default:e(()=>[_s]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[ys]),_:1})]),_:1}),xs,a(l,null,{default:e(()=>[a(t,{title:"0.105.0"},{default:e(()=>[Ss]),_:1}),a(t,{title:"0.104.1"},{default:e(()=>[ws]),_:1})]),_:1}),Cs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Ts]),_:1}),a(t,{title:"Debian"},{default:e(()=>[Ds]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[As]),_:1})]),_:1}),Ms,Ls,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Ps]),_:1}),a(t,{title:"Debian"},{default:e(()=>[Es]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Fs]),_:1})]),_:1}),Rs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Is]),_:1}),a(t,{title:"Debian"},{default:e(()=>[Os]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[$s]),_:1})]),_:1}),Us,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Ns]),_:1}),a(t,{title:"Debian"},{default:e(()=>[Vs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Bs]),_:1})]),_:1}),zs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Ws]),_:1}),a(t,{title:"Debian"},{default:e(()=>[Gs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[js]),_:1})]),_:1}),Hs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Ys]),_:1}),a(t,{title:"Debian"},{default:e(()=>[qs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Ks]),_:1})]),_:1}),Qs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Xs]),_:1}),a(t,{title:"Debian"},{default:e(()=>[Js]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Zs]),_:1})]),_:1}),sn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[nn]),_:1}),a(t,{title:"Debian"},{default:e(()=>[an]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[en]),_:1})]),_:1}),tn,ln,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[on]),_:1}),a(t,{title:"Debian"},{default:e(()=>[cn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[rn]),_:1})]),_:1}),un,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[pn]),_:1}),a(t,{title:"Debian"},{default:e(()=>[dn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[mn]),_:1})]),_:1}),hn,kn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[bn]),_:1})]),_:1}),gn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[vn]),_:1})]),_:1}),fn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[_n]),_:1})]),_:1}),yn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[xn]),_:1})]),_:1}),Sn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[wn]),_:1})]),_:1}),Cn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Tn]),_:1})]),_:1}),Dn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[An]),_:1})]),_:1}),Mn,Ln,Pn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[En]),_:1})]),_:1}),Fn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Rn]),_:1})]),_:1}),In,On,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[$n]),_:1})]),_:1}),Un,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Nn]),_:1})]),_:1}),Vn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Bn]),_:1})]),_:1}),zn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Wn]),_:1})]),_:1}),Gn,s("p",null,[jn,s("a",Hn,[Yn,a(o)]),qn,Kn,Qn,Xn,Jn]),s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client1.png",alt:"Windows 10 setup 1"},null,8,Zn),sa,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client2.png",alt:"Windows 10 setup 2"},null,8,na),aa,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client3.png",alt:"Windows 10 setup 3"},null,8,ea),ta,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client4.png",alt:"Windows 10 setup 4"},null,8,la),oa,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client5.png",alt:"Windows 10 setup 5"},null,8,ca),ia,a(l,null,{default:e(()=>[a(t,{title:"Windows"},{default:e(()=>[ra]),_:1})]),_:1}),s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client6.png",alt:"Windows 10 setup 6"},null,8,ua),pa,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client7.png",alt:"Windows 10 setup 7"},null,8,da),ma,a(l,null,{default:e(()=>[a(t,{title:"Windows"},{default:e(()=>[ha]),_:1})]),_:1}),ka,s("p",null,[ba,s("a",ga,[va,a(o)]),fa]),_a,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ya]),_:1})]),_:1}),xa,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Sa]),_:1})]),_:1}),wa,s("p",null,[Ca,s("a",Ta,[Da,a(o)]),Aa]),s("h2",Ma,[La,Pa,a(r,{text:"non-sponsored",type:"tip"})]),Ea,Fa,s("p",null,[s("a",Ra,[Ia,a(o)])])])}var Va=u(m,[["render",Oa],["__file","index.html.vue"]]);export{Va as default};
