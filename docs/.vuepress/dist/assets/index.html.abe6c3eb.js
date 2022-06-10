import{_ as u,r as i,o as p,c as d,a as s,b as a,w as e,e as n,d as c}from"./app.2dc68d06.js";const m={},h={id:"clamav-antivirus-server",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#clamav-antivirus-server","aria-hidden":"true"},"#",-1),b=n(" ClamAV Antivirus Server "),g=s("p",null,"ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.",-1),v={href:"https://www.clamav.net/",target:"_blank",rel:"noopener noreferrer"},f=n("ClamAV website"),_=n(),y={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},w=n("Source code"),x=n(),S={href:"https://docs.clamav.net/",target:"_blank",rel:"noopener noreferrer"},C=n("Offical docs"),T=s("p",null,"Setup and configuration have been tested on following OS with version:",-1),A=s("ul",null,[s("li",null,"Ubuntu- 18.04, 20.04 (Focal Fossa), Debian 11 (bullseye), Rocky 8 (Green Obsidian), Windows 10, Windows Server 2019"),s("li",null,"ClamAV- 0.102.4, 0.104.0, 0.104.1")],-1),D={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},P=s("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),E=s("h2",{id:"configuration-files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),n(" Configuration files")],-1),L={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/debian_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},M=n("Debian 11, ClamAV 0.104.1"),F={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/rocky_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},R=n("Rocky 8, ClamAV 0.104.1"),I=c(`<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li><code>net-tools</code> (optional)</li></ul><details class="custom-container details"><summary>Dependencies for Debian 11</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libmilter-dev libjson-c5 libjson-c-dev_0.15-2
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
</code></pre></div></details><details class="custom-container details"><summary>Dependencies for Rocky 8</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc gcc-c++ cmake make python3 python3-pip valgrind
bzip2-devel check-devel libcurl-devel libxml2-devel
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
</code></pre></div></details><h2 id="install-clamav-from-source" tabindex="-1"><a class="header-anchor" href="#install-clamav-from-source" aria-hidden="true">#</a> Install ClamAV from source</h2><p>In this tutorial we&#39;ll install the ClamAV Antivirus Server (<code>192.168.0.1</code>) from source as a stand-alone server with Debian 11 or Rocky 8. We&#39;ll be using the <strong>multiscan</strong> option so the more cores the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server&#39;s TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the stand-alone server. The clients wont be built from source but rather use already available repository packages (Ubuntu 20.04 and Windows 10).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For Rocky 8 install Extra Packages for Enterprise Linux (EPEL) and enable PowerTools.</p></div>`,7),O=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" epel-release "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" dnf-plugins-core "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" yum config-manager --set-enabled powertools")])]),n(`
`)])])],-1),$=s("p",null,"Once you've installed EPEL and enabled PowerTools (Rocky only) continue to install ClamAV dependencies.",-1),V=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(" update "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(" -y upgrade "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" -y gcc cmake "),s("span",{class:"token function"},"make"),n(" pkg-config python3 python3-pip python3-pytest valgrind "),s("span",{class:"token punctuation"},"\\"),n(`
check libbz2-dev libcurl4-openssl-dev libmilter-dev `),s("span",{class:"token punctuation"},"\\"),n(`
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev`)])]),n(`
`)])])],-1),N=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" yum -y "),s("span",{class:"token function"},"install"),n(" gcc gcc-c++ cmake "),s("span",{class:"token function"},"make"),n(" python3 python3-pip valgrind "),s("span",{class:"token punctuation"},"\\"),n(`
bzip2-devel check-devel libcurl-devel libxml2-devel `),s("span",{class:"token punctuation"},"\\"),n(`
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel`)])]),n(`
`)])])],-1),B=s("p",null,[n("For Debian 11 download and install "),s("code",null,"libjson-c5"),n(" and "),s("code",null,"libjson-c-dev"),n(" packages.")],-1),U=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"wget"),n(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(" dpkg -i libjson-c5_0.15-2_amd64.deb "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"sudo"),n(" dpkg -i libjson-c-dev_0.15-2_amd64.deb")])]),n(`
`)])])],-1),z=s("p",null,"Create ClamAV service group and user.",-1),W=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"groupadd"),n(" clamav "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"useradd"),n(" -g clamav -s /bin/false -c "),s("span",{class:"token string"},'"Clam Antivirus"'),n(" clamav")])]),n(`
`)])])],-1),G=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"groupadd"),n(" clamav "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"useradd"),n(" -g clamav -s /bin/false -c "),s("span",{class:"token string"},'"Clam Antivirus"'),n(" clamav")])]),n(`
`)])])],-1),j=s("h3",{id:"import-clamav-signing-key",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-clamav-signing-key","aria-hidden":"true"},"#"),n(" Import ClamAV signing key")],-1),Y={class:"custom-container tip"},q=s("p",{class:"custom-container-title"},"TIP",-1),H=n("You can find the public ClamAV key "),K={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},Q=n("here"),X=n(" under Talos PGP Public Key."),J=s("p",null,"Create a new .asc file, paste the public key and save.",-1),Z=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"touch"),n(" clamav.asc "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"nano"),n(" clamav.asc")])]),n(`
`)])])],-1),ss=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"touch"),n(" clamav.asc "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token function"},"nano"),n(" clamav.asc")])]),n(`
`)])])],-1),ns=s("p",null,[n("Once you've saved the "),s("code",null,"clamav.asc"),n(" file proceed to import the key.")],-1),as=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --import clamav.asc")]),n(`
`)])])],-1),es=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --import clamav.asc")]),n(`
`)])])],-1),ts=c(`<p>You should see that the public key <em>Talos from Cisco Systems Inc.</em> has been imported.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: key 609B024F2B3EDD07: public key &quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot; imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
</span></code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div></div><p>Now lets edit the key.</p>`,3),ls=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --edit-key 609B024F2B3EDD07")]),n(`
`)])])],-1),os=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"gpg --edit-key 609B024F2B3EDD07")]),n(`
`)])])],-1),cs=c(`<p>When you get prompted type <em>trust</em> and select option 5 (I trust ultimately).</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
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
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div></div><h3 id="build-clamav-server" tabindex="-1"><a class="header-anchor" href="#build-clamav-server" aria-hidden="true">#</a> Build ClamAV server</h3><p>Before you build ClamAV download both the source along with the signature to verify its validity.</p>`,4),is=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz`)])]),n(`
`)])])],-1),rs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"wget"),n(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz`)])]),n(`
`)])])],-1),us=c(`<p>The output should say its a good signature from Cisco.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Wed 01 Sep 2021 05:52:12 PM UTC
gpg:                using RSA key 609B024F2B3EDD07
gpg: Good signature from &quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Proceed to extract and build.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This may take a while.</p></div>`,4),ps=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"tar"),n(" -xvzf clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
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
`)])])],-1),ds=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"tar"),n(" -xvzf clamav-0.104.1.tar.gz "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
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
`)])])],-1),ms=c(`<p>The <code>ctest</code> should output the following information.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">Test project ~/clamav-0.104.1/build
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
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div></div><p>Once the test successfully passed proceed to build and install ClamAV 0.104.1.</p>`,3),hs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" cmake --build "),s("span",{class:"token builtin class-name"},"."),n(" --target "),s("span",{class:"token function"},"install")])]),n(`
`)])])],-1),ks=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" cmake --build "),s("span",{class:"token builtin class-name"},"."),n(" --target "),s("span",{class:"token function"},"install")])]),n(`
`)])])],-1),bs=s("h2",{id:"server-configuration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#server-configuration","aria-hidden":"true"},"#"),n(" Server configuration")],-1),gs=s("p",null,[n("When the installation is complete there's example configuration files created by default e.g. "),s("code",null,"/etc/clamav/clamd.conf.sample"),n(". You may read through the sample configuration files to get a better understanding on which options you prefer to enable. Otherwise feel free to use the beneath options and creation of the ClamAV daemon configuration file.")],-1),vs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
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
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),fs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
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
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),_s=s("p",null,[n("Same with ClamAV freshclam there's a sample configuration file created at "),s("code",null,"/etc/clamav/freshclam.conf.sample"),n(". You may also use the following configuration file for freshclam to keep your signature database up-to-date.")],-1),ys=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
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
`)])])],-1),ws=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
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
`)])])],-1),xs=s("p",null,"Before we'll create the system files for both the ClamAV daemon and freshclam create the required directories and adjust the owner permissions.",-1),Ss=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"mkdir"),n(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"chown"),n(" clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/")])]),n(`
`)])])],-1),Cs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"mkdir"),n(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),s("span",{class:"token operator"},"&&"),n(),s("span",{class:"token punctuation"},"\\"),n(`
`),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"chown"),n(" clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/")])]),n(`
`)])])],-1),Ts=s("p",null,"Next create the service file for freshclam.",-1),As=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
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
`)])])],-1),Ds=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
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
`)])])],-1),Ps=s("p",null,"Proceed to create the ClamAV daemon service file.",-1),Es=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@debian"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
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
`)])])],-1),Ls=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"bash"),n(" -c "),s("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
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
`)])])],-1),Ms=s("p",null,"To enable the created startup scripts, reload the system control daemon.",-1),Fs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl daemon-reload")])]),n(`
`)])])],-1),Rs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl daemon-reload")])]),n(`
`)])])],-1),Is=s("p",null,"Once you've reloaded the daemon proceed to enable each of the services.",-1),Os=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-daemon.service")])]),n(`
`)])])],-1),$s=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl "),s("span",{class:"token builtin class-name"},"enable"),n(" clamav-daemon.service")])]),n(`
`)])])],-1),Vs=s("p",null,"Next start each service.",-1),Ns=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-daemon.service")])]),n(`
`)])])],-1),Bs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-daemon.service")])]),n(`
`)])])],-1),Us=s("p",null,"To check that your ClamAV daemon is listening to both the local unix socket and the TCP port 3310 run the following command.",-1),zs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),n(" -lnp "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" -E "),s("span",{class:"token string"},'"(clam|3310)"')])]),n(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br")])],-1),Ws=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),n(" -lnp "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" -E "),s("span",{class:"token string"},'"(clam|3310)"')])]),n(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     320610   -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br")])],-1),Gs=s("h2",{id:"install-from-repository",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-from-repository","aria-hidden":"true"},"#"),n(" Install from repository")],-1),js=s("p",null,"You may also install ClamAV Antivirus Server directly from the repository. Download the ClamAV scanner and the ClamAV daemon.",-1),Ys=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" clamav clamav-daemon")])]),n(`
`)])])],-1),qs=s("p",null,"Proceed to stop freshclam the automatic database update tool for ClamAV.",-1),Hs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl stop clamav-freshclam")])]),n(`
`)])])],-1),Ks=s("p",null,"Next run freshclam to update to the latest definition database.",-1),Qs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" freshclam")])]),n(`
`)])])],-1),Xs=s("p",null,[n("Once you've ran the freshclam command you can check the log "),s("code",null,"/var/log/clamav/freshclam.log"),n(" for the current status and then start freshclam again.")],-1),Js=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"cat"),n(" /var/log/clamav/freshclam.log")])]),n(`
`),s("span",{class:"token output"},`Sat Apr 10 17:51:37 2021 -> daily.cvd database is up to date (version: 26136, sigs: 3969743, f-level: 63, builder: raynman)
Sat Apr 10 17:51:37 2021 -> main.cvd database is up to date (version: 59, sigs: 4564902, f-level: 60, builder: sigmgr)
Sat Apr 10 17:51:37 2021 -> bytecode.cvd database is up to date (version: 333, sigs: 92, f-level: 63, builder: awillia2)
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl start clamav-freshclam")])]),n(`
`)])]),s("div",{class:"highlight-lines"},[s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0")])],-1),Zs=s("p",null,"Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.",-1),sn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"nano"),n(" /etc/clamav/clamd.conf")])]),n(`
`)])])],-1),nn=c(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>You will need to comment out the line &quot;Example&quot; in the clamd.conf configuration file, else the ClamAV daemon will consider the configuration invalid.</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Restart ClamAV to apply the new changes.</p>`,3),an=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl restart clamav-daemon.service")])]),n(`
`)])])],-1),en=s("p",null,[n("To confirm that ClamAV listen to TCP port 3310 run the command below (requires "),s("code",null,"net-tools"),n(").")],-1),tn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),n(" -lnp "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"grep"),n(" -E "),s("span",{class:"token string"},'"(clam|3310)"')])]),n(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.ctl
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br")])],-1),ln=s("p",null,[n("Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the "),s("a",{href:"#firewall-settings"},"Firewall settings"),n(" section for more information.")],-1),on=s("h3",{id:"keep-virus-definitions-up-to-date",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#keep-virus-definitions-up-to-date","aria-hidden":"true"},"#"),n(" Keep virus definitions up-to-date")],-1),cn=s("p",null,"To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.",-1),rn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"nano"),n(" /etc/clamav/freshclam.conf")])]),n(`
`)])])],-1),un=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Check for new database 24 times a day</span>
Checks <span class="token number">24</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use the <code>clamdtop</code> command-line tool when you&#39;ve installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.</p>`,2),pn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"clamdtop")]),n(`

`),s("span",{class:"token output"},`  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ \`/ __ \`__ \\/ __  / __/ __ \\/ __ \\
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
\\___/_/\\__,_/_/ /_/ /_/\\__,_/\\__/\\____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
`)])])],-1),dn=s("h2",{id:"linux-client",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#linux-client","aria-hidden":"true"},"#"),n(" Linux client")],-1),mn=s("p",null,"Install ClamAV on Ubuntu 20.04.",-1),hn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"apt-get"),n(),s("span",{class:"token function"},"install"),n(" clamav clamav-daemon")])]),n(`
`)])])],-1),kn=s("p",null,"Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well.",-1),bn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl stop clamav-daemon.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl stop clamav-freshclam.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl disable clamav-daemon.service")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" systemctl disable clamav-freshclam.service")])]),n(`
`)])])],-1),gn=s("p",null,[n("Continue to configure the "),s("code",null,"clamdscan"),n(" which share configuration file with the ClamAV daemon.")],-1),vn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"nano"),n(" /etc/clamav/clamd.conf")])]),n(`
`)])])],-1),fn=c(`<p>Comment the <code>LocalSocket /var/run/clamav/clamd.ctl</code> line and add the <code>TCPSocket 3310</code> along with the server <code>TCPAddr</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When running a scan use the <code>multiscan</code> option to enable multihread reading. You can also set it to <code>quiet</code> if you&#39;re going to use the <code>log</code> option. You can also create a <code>file list</code> for all the directories to scan.</p>`,3),_n=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" clamdscan --multiscan --quiet --file-list"),s("span",{class:"token operator"},"="),n(" --log"),s("span",{class:"token operator"},"=")])]),n(`
`)])])],-1),yn=s("h2",{id:"windows-client",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows-client","aria-hidden":"true"},"#"),n(" Windows client")],-1),wn=n("First download the "),xn={href:"http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe",target:"_blank",rel:"noopener noreferrer"},Sn=n("ClamAV Windows Installer"),Cn=n(" (version 0.102.4). Right-click the executable file "),Tn=s("code",null,"ClamAV-0.102.4.exe",-1),An=n(" and select "),Dn=s("code",null,"Run as Administrator",-1),Pn=n("."),En=["src"],Ln=s("p",null,"Select destination location.",-1),Mn=["src"],Fn=s("p",null,[n("Proceed to click the "),s("code",null,"Install"),n(" button.")],-1),Rn=["src"],In=s("p",null,[n("Once the installation is complete click the "),s("code",null,"Finish"),n(" button.")],-1),On=["src"],$n=s("p",null,[n("Run PowerShell as administrator and make sure you're in the correct path "),s("code",null,"C:\\WINDOWS\\system32"),n(". Navigate to the ClamAV directory by entering "),s("code",null,"cd 'C:\\Program Files\\ClamAV\\"),n(".")],-1),Vn=["src"],Nn=s("p",null,[n("Now copy the ClamAV daeomon configuration and rename it to "),s("code",null,"clamd.conf"),n(" and open the file in WordPad.")],-1),Bn=s("div",{class:"language-powershell ext-powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[n("client@windows:~"),s("span",{class:"token function"},"PS"),n("$ "),s("span",{class:"token function"},"copy"),n(),s("span",{class:"token punctuation"},"."),n("\\conf_examples\\clamd"),s("span",{class:"token punctuation"},"."),n("conf"),s("span",{class:"token punctuation"},"."),n("sample "),s("span",{class:"token punctuation"},"."),n("\\clamd"),s("span",{class:"token punctuation"},"."),n(`conf
client@windows:~`),s("span",{class:"token function"},"PS"),n("$ "),s("span",{class:"token function"},"write"),s("span",{class:"token punctuation"},"."),n("exe "),s("span",{class:"token punctuation"},"."),n("\\clamd"),s("span",{class:"token punctuation"},"."),n(`conf
`)])])],-1),Un=["src"],zn=c(`<p>Comment the <code>Example</code> line and add the <code>TCPSocket</code> along with the server <code>TCPAddr</code> and save.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may fast test the configuration running a scan in the current directory.</p>`,3),Wn=["src"],Gn=s("p",null,[n("Running a more complete scan, like during the Ubuntu set up, use the "),s("code",null,"multiscan"),n(" option to enable multithread reading. Set the output to "),s("code",null,"quiet"),n(" in case you will use the "),s("code",null,"log"),n(" option. As priorly mentioned you may also define a "),s("code",null,"file list"),n(" of all the directories you wish to include in the scan.")],-1),jn=s("div",{class:"language-powershell ext-powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[n("client@windows:~"),s("span",{class:"token function"},"PS"),n("$ "),s("span",{class:"token punctuation"},"."),n("\\clamdscan"),s("span",{class:"token punctuation"},"."),n("exe  "),s("span",{class:"token operator"},"--"),n("multiscan "),s("span",{class:"token operator"},"--"),n("quiet "),s("span",{class:"token operator"},"--"),n("file-list= "),s("span",{class:"token operator"},"--"),n(`log=
`)])])],-1),Yn=s("h2",{id:"firewall-settings",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#firewall-settings","aria-hidden":"true"},"#"),n(" Firewall settings")],-1),qn=n("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),Hn={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},Kn=n("here"),Qn=n("."),Xn=c(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw default deny incoming</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw default allow outgoing</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw allow <span class="token number">22</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span></span></span>
<span class="token output">Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</span></code></pre></div></details>`,1),Jn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),n(".0.2 to any port "),s("span",{class:"token number"},"3310"),n(" comment "),s("span",{class:"token string"},'"ClamAV client 1"')])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),n(".0.3 to any port "),s("span",{class:"token number"},"3310"),n(" comment "),s("span",{class:"token string"},'"ClamAV client 2"')])]),n(`
`)])])],-1),Zn=s("p",null,"If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.",-1),sa=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),n(".0.0/24 to any port "),s("span",{class:"token number"},"3310"),n(" comment "),s("span",{class:"token string"},'"ClamAV clients"')])]),n(`
`)])])],-1),na=s("h2",{id:"troubleshooting",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),n(" Troubleshooting")],-1),aa=n("In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at "),ea={href:"https://lists.clamav.net/mailman/listinfo/clamav-users",target:"_blank",rel:"noopener noreferrer"},ta=n("ClamAV users"),la=n("."),oa={id:"enterprise-solutions",tabindex:"-1"},ca=s("a",{class:"header-anchor",href:"#enterprise-solutions","aria-hidden":"true"},"#",-1),ia=n(" Enterprise solutions "),ra=s("h3",{id:"atomic-protector",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#atomic-protector","aria-hidden":"true"},"#"),n(" Atomic Protector")],-1),ua=s("p",null,"Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.",-1),pa={href:"https://atomicorp.com/atomic-protector/",target:"_blank",rel:"noopener noreferrer"},da=n("Atomic Protector");function ma(ha,ka){const r=i("Badge"),o=i("ExternalLinkIcon"),t=i("CodeGroupItem"),l=i("CodeGroup");return p(),d("div",null,[s("h1",h,[k,b,a(r,{text:"Rev 3",type:"tip"})]),g,s("p",null,[s("a",v,[f,a(o)]),_,s("a",y,[w,a(o)]),x,s("a",S,[C,a(o)])]),T,A,s("p",null,[s("a",D,[P,a(o)])]),E,s("ul",null,[s("li",null,[s("a",L,[M,a(o)])]),s("li",null,[s("a",F,[R,a(o)])])]),I,a(l,null,{default:e(()=>[a(t,{title:"Rocky"},{default:e(()=>[O]),_:1})]),_:1}),$,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[V]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[N]),_:1})]),_:1}),B,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[U]),_:1})]),_:1}),z,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[W]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[G]),_:1})]),_:1}),j,s("div",Y,[q,s("p",null,[H,s("a",K,[Q,a(o)]),X])]),J,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[Z]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[ss]),_:1})]),_:1}),ns,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[as]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[es]),_:1})]),_:1}),ts,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[ls]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[os]),_:1})]),_:1}),cs,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[is]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[rs]),_:1})]),_:1}),us,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[ps]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[ds]),_:1})]),_:1}),ms,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[hs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[ks]),_:1})]),_:1}),bs,gs,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[vs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[fs]),_:1})]),_:1}),_s,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[ys]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[ws]),_:1})]),_:1}),xs,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[Ss]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Cs]),_:1})]),_:1}),Ts,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[As]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Ds]),_:1})]),_:1}),Ps,a(l,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[Es]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Ls]),_:1})]),_:1}),Ms,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Fs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Rs]),_:1})]),_:1}),Is,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Os]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[$s]),_:1})]),_:1}),Vs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Ns]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Bs]),_:1})]),_:1}),Us,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[zs]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Ws]),_:1})]),_:1}),Gs,js,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Ys]),_:1})]),_:1}),qs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Hs]),_:1})]),_:1}),Ks,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Qs]),_:1})]),_:1}),Xs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Js]),_:1})]),_:1}),Zs,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[sn]),_:1})]),_:1}),nn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[an]),_:1})]),_:1}),en,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[tn]),_:1})]),_:1}),ln,on,cn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[rn]),_:1})]),_:1}),un,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[pn]),_:1})]),_:1}),dn,mn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[hn]),_:1})]),_:1}),kn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[bn]),_:1})]),_:1}),gn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[vn]),_:1})]),_:1}),fn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[_n]),_:1})]),_:1}),yn,s("p",null,[wn,s("a",xn,[Sn,a(o)]),Cn,Tn,An,Dn,Pn]),s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client1.png",alt:"Windows 10 setup 1"},null,8,En),Ln,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client2.png",alt:"Windows 10 setup 2"},null,8,Mn),Fn,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client3.png",alt:"Windows 10 setup 3"},null,8,Rn),In,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client4.png",alt:"Windows 10 setup 4"},null,8,On),$n,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client5.png",alt:"Windows 10 setup 5"},null,8,Vn),Nn,a(l,null,{default:e(()=>[a(t,{title:"Windows"},{default:e(()=>[Bn]),_:1})]),_:1}),s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client6.png",alt:"Windows 10 setup 6"},null,8,Un),zn,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client7.png",alt:"Windows 10 setup 7"},null,8,Wn),Gn,a(l,null,{default:e(()=>[a(t,{title:"Windows"},{default:e(()=>[jn]),_:1})]),_:1}),Yn,s("p",null,[qn,s("a",Hn,[Kn,a(o)]),Qn]),Xn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Jn]),_:1})]),_:1}),Zn,a(l,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[sa]),_:1})]),_:1}),na,s("p",null,[aa,s("a",ea,[ta,a(o)]),la]),s("h2",oa,[ca,ia,a(r,{text:"non-sponsored",type:"tip"})]),ra,ua,s("p",null,[s("a",pa,[da,a(o)])])])}var ga=u(m,[["render",ma],["__file","index.html.vue"]]);export{ga as default};
