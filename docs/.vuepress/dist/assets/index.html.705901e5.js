import{r,o as u,c as p,a as n,b as a,w as e,F as d,d as s,e as c}from"./app.80438d39.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const b={},h={id:"clamav-antivirus-server",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#clamav-antivirus-server","aria-hidden":"true"},"#",-1),k=s(" ClamAV Antivirus Server "),f=n("p",null,"ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.",-1),v={href:"https://www.clamav.net/",target:"_blank",rel:"noopener noreferrer"},_=s("ClamAV website"),y=s(),w={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},x=s("Source code"),S=s(),C={href:"https://docs.clamav.net/",target:"_blank",rel:"noopener noreferrer"},T=s("Offical docs"),A=n("p",null,"Setup and configuration have been tested on following OS with version:",-1),D=n("ul",null,[n("li",null,"Ubuntu- 18.04, 20.04 (Focal Fossa), Debian 11 (bullseye), Rocky 8 (Green Obsidian), Windows 10, Windows Server 2019"),n("li",null,"ClamAV- 0.102.4, 0.104.0, 0.104.1")],-1),P={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},E=n("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),L=n("h2",{id:"configuration-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),s(" Configuration files")],-1),M={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/debian_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},F=s("Debian 11, ClamAV 0.104.1"),R={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/rocky_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},I=s("Rocky 8, ClamAV 0.104.1"),O=c(`<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li><code>net-tools</code> (optional)</li></ul><details class="custom-container details"><summary>Dependencies for Debian 11</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libmilter-dev libjson-c5 libjson-c-dev_0.15-2
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
</code></pre></div></details><details class="custom-container details"><summary>Dependencies for Rocky 8</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc gcc-c++ cmake make python3 python3-pip valgrind
bzip2-devel check-devel libcurl-devel libxml2-devel
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
</code></pre></div></details><h2 id="install-clamav-from-source" tabindex="-1"><a class="header-anchor" href="#install-clamav-from-source" aria-hidden="true">#</a> Install ClamAV from source</h2><p>In this tutorial we&#39;ll install the ClamAV Antivirus Server (<code>192.168.0.1</code>) from source as a stand-alone server with Debian 11 or Rocky 8. We&#39;ll be using the <strong>multiscan</strong> option so the more cores the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server&#39;s TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the stand-alone server. The clients wont be built from source but rather use already available repository packages (Ubuntu 20.04 and Windows 10).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For Rocky 8 install Extra Packages for Enterprise Linux (EPEL) and enable PowerTools.</p></div>`,7),$=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(" yum -y "),n("span",{class:"token function"},"install"),s(" epel-release "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(" yum -y "),n("span",{class:"token function"},"install"),s(" dnf-plugins-core "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(" yum -y "),n("span",{class:"token function"},"install"),s(" https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(` yum config-manager --set-enabled powertools
`)])])],-1),V=n("p",null,"Once you've installed EPEL and enabled PowerTools (Rocky only) continue to install ClamAV dependencies.",-1),N=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(" update "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(" -y upgrade "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(),n("span",{class:"token function"},"install"),s(" -y gcc cmake "),n("span",{class:"token function"},"make"),s(" pkg-config python3 python3-pip python3-pytest valgrind "),n("span",{class:"token punctuation"},"\\"),s(`
check libbz2-dev libcurl4-openssl-dev libmilter-dev `),n("span",{class:"token punctuation"},"\\"),s(`
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
`)])])],-1),B=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(" yum -y "),n("span",{class:"token function"},"install"),s(" gcc gcc-c++ cmake "),n("span",{class:"token function"},"make"),s(" python3 python3-pip valgrind "),n("span",{class:"token punctuation"},"\\"),s(`
bzip2-devel check-devel libcurl-devel libxml2-devel `),n("span",{class:"token punctuation"},"\\"),s(`
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
`)])])],-1),U=n("p",null,[s("For Debian 11 download and install "),n("code",null,"libjson-c5"),s(" and "),n("code",null,"libjson-c-dev"),s(" packages.")],-1),z=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"wget"),s(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"wget"),s(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(" dpkg -i libjson-c5_0.15-2_amd64.deb "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"sudo"),s(` dpkg -i libjson-c-dev_0.15-2_amd64.deb
`)])])],-1),W=n("p",null,"Create ClamAV service group and user.",-1),G=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"groupadd"),s(" clamav "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"useradd"),s(" -g clamav -s /bin/false -c "),n("span",{class:"token string"},'"Clam Antivirus"'),s(` clamav
`)])])],-1),j=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"groupadd"),s(" clamav "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"useradd"),s(" -g clamav -s /bin/false -c "),n("span",{class:"token string"},'"Clam Antivirus"'),s(` clamav
`)])])],-1),Y=n("h3",{id:"import-clamav-signing-key",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-clamav-signing-key","aria-hidden":"true"},"#"),s(" Import ClamAV signing key")],-1),q={class:"custom-container tip"},H=n("p",{class:"custom-container-title"},"TIP",-1),K=s("You can find the public ClamAV key "),Q={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},X=s("here"),J=s(" under Talos PGP Public Key."),Z=n("p",null,"Create a new .asc file, paste the public key and save.",-1),nn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"touch"),s(" clamav.asc "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"nano"),s(` clamav.asc
`)])])],-1),sn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"touch"),s(" clamav.asc "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token function"},"nano"),s(` clamav.asc
`)])])],-1),an=n("p",null,[s("Once you've saved the "),n("code",null,"clamav.asc"),s(" file proceed to import the key.")],-1),en=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@debian:~$ gpg --import clamav.asc
`)])],-1),tn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$ gpg --import clamav.asc
`)])],-1),on=c(`<p>You should see that the public key <em>Talos from Cisco Systems Inc.</em> has been imported.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gpg: key 609B024F2B3EDD07: public key <span class="token string">&quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot;</span> imported
gpg: Total number processed: <span class="token number">1</span>
gpg:               imported: <span class="token number">1</span>
gpg: no ultimately trusted keys found
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div></div><p>Now lets edit the key.</p>`,3),ln=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@debian:~$ gpg --edit-key 609B024F2B3EDD07
`)])],-1),cn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$ gpg --edit-key 609B024F2B3EDD07
`)])],-1),rn=c(`<p>When you get prompted type <em>trust</em> and select option 5 (I trust ultimately).</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gpg <span class="token punctuation">(</span>GnuPG<span class="token punctuation">)</span> <span class="token number">2.2</span>.19<span class="token punctuation">;</span> Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2019</span> Free Software Foundation, Inc.
This is <span class="token function">free</span> software: you are <span class="token function">free</span> to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

pub  rsa4096/609B024F2B3EDD07
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: E
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Talos <span class="token punctuation">(</span>Talos, Cisco Systems Inc.<span class="token punctuation">)</span> <span class="token operator">&lt;</span>research@sourcefire.com<span class="token operator">&gt;</span>

gpg<span class="token operator">&gt;</span> trust
pub  rsa4096/609B024F2B3EDD07
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: E
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Talos <span class="token punctuation">(</span>Talos, Cisco Systems Inc.<span class="token punctuation">)</span> <span class="token operator">&lt;</span>research@sourcefire.com<span class="token operator">&gt;</span>

Please decide how far you trust this user to correctly verify other <span class="token function">users</span><span class="token string">&#39; keys
(by looking at passports, checking fingerprints from different sources, etc.)

  1 = I don&#39;</span>t know or won&#39;t say
  <span class="token number">2</span> <span class="token operator">=</span> I <span class="token keyword">do</span> NOT trust
  <span class="token number">3</span> <span class="token operator">=</span> I trust marginally
  <span class="token number">4</span> <span class="token operator">=</span> I trust fully
  <span class="token number">5</span> <span class="token operator">=</span> I trust ultimately
  m <span class="token operator">=</span> back to the main menu

Your decision? <span class="token number">5</span>
Do you really want to <span class="token builtin class-name">set</span> this key to ultimate trust? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y

pub  rsa4096/609B024F2B3EDD07
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: SC
     trust: ultimate      validity: unknown
sub  rsa4096/73966F3B446077EC
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: E
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Talos <span class="token punctuation">(</span>Talos, Cisco Systems Inc.<span class="token punctuation">)</span> <span class="token operator">&lt;</span>research@sourcefire.com<span class="token operator">&gt;</span>
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg<span class="token operator">&gt;</span> quit
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div></div><h3 id="build-clamav-server" tabindex="-1"><a class="header-anchor" href="#build-clamav-server" aria-hidden="true">#</a> Build ClamAV server</h3><p>Before you build ClamAV download both the source along with the signature to verify its validity.</p>`,4),un=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"wget"),s(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"wget"),s(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
`)])])],-1),pn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"wget"),s(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"wget"),s(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
`)])])],-1),dn=c(`<p>The output should say its a good signature from Cisco.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gpg: Signature made Wed 01 Sep <span class="token number">2021</span> 05:52:12 PM UTC
gpg:                using RSA key 609B024F2B3EDD07
gpg: Good signature from <span class="token string">&quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot;</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Proceed to extract and build.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This may take a while.</p></div>`,4),mn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"tar"),s(" -xvzf clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token builtin class-name"},"cd"),s(" clamav-0.104.1/ "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"mkdir"),s(" -p build "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"cd"),s(" build "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
cmake `),n("span",{class:"token punctuation"},".."),s(),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_PREFIX"),n("span",{class:"token operator"},"="),s("/usr "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_LIBDIR"),n("span",{class:"token operator"},"="),s("lib "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"APP_CONFIG_DIRECTORY"),n("span",{class:"token operator"},"="),s("/etc/clamav "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"DATABASE_DIRECTORY"),n("span",{class:"token operator"},"="),s("/var/lib/clamav "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"ENABLE_JSON_SHARED"),n("span",{class:"token operator"},"="),s("OFF "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
cmake --build `),n("span",{class:"token builtin class-name"},"."),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
ctest
`)])])],-1),bn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"tar"),s(" -xvzf clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token builtin class-name"},"cd"),s(" clamav-0.104.1/ "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"mkdir"),s(" -p build "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"cd"),s(" build "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
cmake `),n("span",{class:"token punctuation"},".."),s(),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_PREFIX"),n("span",{class:"token operator"},"="),s("/usr "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_LIBDIR"),n("span",{class:"token operator"},"="),s("lib "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"APP_CONFIG_DIRECTORY"),n("span",{class:"token operator"},"="),s("/etc/clamav "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"DATABASE_DIRECTORY"),n("span",{class:"token operator"},"="),s("/var/lib/clamav "),n("span",{class:"token punctuation"},"\\"),s(`
  -D `),n("span",{class:"token assign-left variable"},"ENABLE_JSON_SHARED"),n("span",{class:"token operator"},"="),s("ON "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
cmake --build `),n("span",{class:"token builtin class-name"},"."),s(),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
ctest
`)])])],-1),hn=c(`<p>The <code>ctest</code> should output the following information.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Test project ~/clamav-0.104.1/build
      Start  <span class="token number">1</span>: libclamav
 <span class="token number">1</span>/10 Test  <span class="token comment">#1: libclamav ........................   Passed   14.78 sec</span>
      Start  <span class="token number">2</span>: libclamav_valgrind
 <span class="token number">2</span>/10 Test  <span class="token comment">#2: libclamav_valgrind ...............   Passed  138.25 sec</span>
      Start  <span class="token number">3</span>: clamscan
 <span class="token number">3</span>/10 Test  <span class="token comment">#3: clamscan .........................   Passed    4.21 sec</span>
      Start  <span class="token number">4</span>: clamscan_valgrind
 <span class="token number">4</span>/10 Test  <span class="token comment">#4: clamscan_valgrind ................   Passed   63.91 sec</span>
      Start  <span class="token number">5</span>: clamd
 <span class="token number">5</span>/10 Test  <span class="token comment">#5: clamd ............................   Passed   15.90 sec</span>
      Start  <span class="token number">6</span>: clamd_valgrind
 <span class="token number">6</span>/10 Test  <span class="token comment">#6: clamd_valgrind ...................   Passed   63.48 sec</span>
      Start  <span class="token number">7</span>: freshclam
 <span class="token number">7</span>/10 Test  <span class="token comment">#7: freshclam ........................   Passed    6.80 sec</span>
      Start  <span class="token number">8</span>: freshclam_valgrind
 <span class="token number">8</span>/10 Test  <span class="token comment">#8: freshclam_valgrind ...............   Passed   37.96 sec</span>
      Start  <span class="token number">9</span>: sigtool
 <span class="token number">9</span>/10 Test  <span class="token comment">#9: sigtool ..........................   Passed    0.30 sec</span>
      Start <span class="token number">10</span>: sigtool_valgrind
<span class="token number">10</span>/10 Test <span class="token comment">#10: sigtool_valgrind .................   Passed    1.42 sec</span>

<span class="token number">100</span>% tests passed, <span class="token number">0</span> tests failed out of <span class="token number">10</span>

Total Test <span class="token function">time</span> <span class="token punctuation">(</span>real<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">347.01</span> sec
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div></div><p>Once the test successfully passed proceed to build and install ClamAV 0.104.1.</p>`,3),gn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(" cmake --build "),n("span",{class:"token builtin class-name"},"."),s(" --target "),n("span",{class:"token function"},"install"),s(`
`)])])],-1),kn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(" cmake --build "),n("span",{class:"token builtin class-name"},"."),s(" --target "),n("span",{class:"token function"},"install"),s(`
`)])])],-1),fn=n("h2",{id:"server-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#server-configuration","aria-hidden":"true"},"#"),s(" Server configuration")],-1),vn=n("p",null,[s("When the installation is complete there's example configuration files created by default e.g. "),n("code",null,"/etc/clamav/clamd.conf.sample"),s(". You may read through the sample configuration files to get a better understanding on which options you prefer to enable. Otherwise feel free to use the beneath options and creation of the ClamAV daemon configuration file.")],-1),_n=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
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
EOF'`),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),yn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
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
EOF'`),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),wn=n("p",null,[s("Same with ClamAV freshclam there's a sample configuration file created at "),n("code",null,"/etc/clamav/freshclam.conf.sample"),s(". You may also use the following configuration file for freshclam to keep your signature database up-to-date.")],-1),xn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'`),s(`
`)])])],-1),Sn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'`),s(`
`)])])],-1),Cn=n("p",null,"Before we'll create the system files for both the ClamAV daemon and freshclam create the required directories and adjust the owner permissions.",-1),Tn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"mkdir"),s(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"chown"),s(` clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),An=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"mkdir"),s(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"chown"),s(` clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),Dn=n("p",null,"Next create the service file for freshclam.",-1),Pn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
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
EOF'`),s(`
`)])])],-1),En=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
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
EOF'`),s(`
`)])])],-1),Ln=n("p",null,"Proceed to create the ClamAV daemon service file.",-1),Mn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@debian:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
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
EOF'`),s(`
`)])])],-1),Fn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"bash"),s(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
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
EOF'`),s(`
`)])])],-1),Rn=n("p",null,"To enable the created startup scripts, reload the system control daemon.",-1),In=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` systemctl daemon-reload
`)])])],-1),On=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(` systemctl daemon-reload
`)])])],-1),$n=n("p",null,"Once you've reloaded the daemon proceed to enable each of the services.",-1),Vn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(" systemctl "),n("span",{class:"token builtin class-name"},"enable"),s(` clamav-freshclam.service
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(" systemctl "),n("span",{class:"token builtin class-name"},"enable"),s(` clamav-daemon.service
`)])])],-1),Nn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(" systemctl "),n("span",{class:"token builtin class-name"},"enable"),s(` clamav-freshclam.service
server@rocky:~$ `),n("span",{class:"token function"},"sudo"),s(" systemctl "),n("span",{class:"token builtin class-name"},"enable"),s(` clamav-daemon.service
`)])])],-1),Bn=n("p",null,"Next start each service.",-1),Un=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` systemctl start clamav-freshclam.service
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(` systemctl start clamav-daemon.service
`)])])],-1),zn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),s(` systemctl start clamav-freshclam.service
server@rocky:~$ `),n("span",{class:"token function"},"sudo"),s(` systemctl start clamav-daemon.service
`)])])],-1),Wn=n("p",null,"To check that your ClamAV daemon is listening to both the local unix socket and the TCP port 3310 run the following command.",-1),Gn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"netstat"),s(" -lnp "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" -E "),n("span",{class:"token string"},'"(clam|3310)"'),s(`
`),n("span",{class:"token punctuation"},"("),s(`Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.`),n("span",{class:"token punctuation"},")"),s(`
tcp        `),n("span",{class:"token number"},"0"),s("      "),n("span",{class:"token number"},"0"),s(),n("span",{class:"token number"},"0.0"),s(".0.0:3310            "),n("span",{class:"token number"},"0.0"),s(`.0.0:*               LISTEN      -
tcp6       `),n("span",{class:"token number"},"0"),s("      "),n("span",{class:"token number"},"0"),s(` :::3310                 :::*                    LISTEN      -
unix  `),n("span",{class:"token number"},"2"),s("      "),n("span",{class:"token punctuation"},"["),s(" ACC "),n("span",{class:"token punctuation"},"]"),s("     STREAM     LISTENING     "),n("span",{class:"token number"},"73674"),s(`    -                    /var/run/clamav/clamd.socket
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")])],-1),jn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@rocky:~$ "),n("span",{class:"token function"},"netstat"),s(" -lnp "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" -E "),n("span",{class:"token string"},'"(clam|3310)"'),s(`
`),n("span",{class:"token punctuation"},"("),s(`Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.`),n("span",{class:"token punctuation"},")"),s(`
tcp        `),n("span",{class:"token number"},"0"),s("      "),n("span",{class:"token number"},"0"),s(),n("span",{class:"token number"},"0.0"),s(".0.0:3310            "),n("span",{class:"token number"},"0.0"),s(`.0.0:*               LISTEN      -
tcp6       `),n("span",{class:"token number"},"0"),s("      "),n("span",{class:"token number"},"0"),s(` :::3310                 :::*                    LISTEN      -
unix  `),n("span",{class:"token number"},"2"),s("      "),n("span",{class:"token punctuation"},"["),s(" ACC "),n("span",{class:"token punctuation"},"]"),s("     STREAM     LISTENING     "),n("span",{class:"token number"},"320610"),s(`   -                    /var/run/clamav/clamd.socket
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")])],-1),Yn=n("h2",{id:"install-from-repository",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install-from-repository","aria-hidden":"true"},"#"),s(" Install from repository")],-1),qn=n("p",null,"You may also install ClamAV Antivirus Server directly from the repository. Download the ClamAV scanner and the ClamAV daemon.",-1),Hn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(),n("span",{class:"token function"},"install"),s(` clamav clamav-daemon
`)])])],-1),Kn=n("p",null,"Proceed to stop freshclam the automatic database update tool for ClamAV.",-1),Qn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` systemctl stop clamav-freshclam
`)])])],-1),Xn=n("p",null,"Next run freshclam to update to the latest definition database.",-1),Jn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` freshclam
`)])])],-1),Zn=n("p",null,[s("Once you've ran the freshclam command you can check the log "),n("code",null,"/var/log/clamav/freshclam.log"),s(" for the current status and then start freshclam again.")],-1),ns=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"cat"),s(` /var/log/clamav/freshclam.log
Sat Apr `),n("span",{class:"token number"},"10"),s(),n("span",{class:"token number"},"17"),s(":51:37 "),n("span",{class:"token number"},"2021"),s(" -"),n("span",{class:"token operator"},">"),s(" daily.cvd database is up to "),n("span",{class:"token function"},"date"),s(),n("span",{class:"token punctuation"},"("),s("version: "),n("span",{class:"token number"},"26136"),s(", sigs: "),n("span",{class:"token number"},"3969743"),s(", f-level: "),n("span",{class:"token number"},"63"),s(", builder: raynman"),n("span",{class:"token punctuation"},")"),s(`
Sat Apr `),n("span",{class:"token number"},"10"),s(),n("span",{class:"token number"},"17"),s(":51:37 "),n("span",{class:"token number"},"2021"),s(" -"),n("span",{class:"token operator"},">"),s(" main.cvd database is up to "),n("span",{class:"token function"},"date"),s(),n("span",{class:"token punctuation"},"("),s("version: "),n("span",{class:"token number"},"59"),s(", sigs: "),n("span",{class:"token number"},"4564902"),s(", f-level: "),n("span",{class:"token number"},"60"),s(", builder: sigmgr"),n("span",{class:"token punctuation"},")"),s(`
Sat Apr `),n("span",{class:"token number"},"10"),s(),n("span",{class:"token number"},"17"),s(":51:37 "),n("span",{class:"token number"},"2021"),s(" -"),n("span",{class:"token operator"},">"),s(" bytecode.cvd database is up to "),n("span",{class:"token function"},"date"),s(),n("span",{class:"token punctuation"},"("),s("version: "),n("span",{class:"token number"},"333"),s(", sigs: "),n("span",{class:"token number"},"92"),s(", f-level: "),n("span",{class:"token number"},"63"),s(", builder: awillia2"),n("span",{class:"token punctuation"},")"),s(`
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(` systemctl start clamav-freshclam
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0")])],-1),ss=n("p",null,"Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.",-1),as=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"nano"),s(` /etc/clamav/clamd.conf
`)])])],-1),es=c(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>You will need to comment out the line &quot;Example&quot; in the clamd.conf configuration file, else the ClamAV daemon will consider the configuration invalid.</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Restart ClamAV to apply the new changes.</p>`,3),ts=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` systemctl restart clamav-daemon.service
`)])])],-1),os=n("p",null,[s("To confirm that ClamAV listen to TCP port 3310 run the command below (requires "),n("code",null,"net-tools"),s(").")],-1),ls=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"netstat"),s(" -lnp "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"grep"),s(" -E "),n("span",{class:"token string"},'"(clam|3310)"'),s(`
`),n("span",{class:"token punctuation"},"("),s(`Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.`),n("span",{class:"token punctuation"},")"),s(`
tcp        `),n("span",{class:"token number"},"0"),s("      "),n("span",{class:"token number"},"0"),s(),n("span",{class:"token number"},"0.0"),s(".0.0:3310            "),n("span",{class:"token number"},"0.0"),s(`.0.0:*               LISTEN      -
tcp6       `),n("span",{class:"token number"},"0"),s("      "),n("span",{class:"token number"},"0"),s(` :::3310                 :::*                    LISTEN      -
unix  `),n("span",{class:"token number"},"2"),s("      "),n("span",{class:"token punctuation"},"["),s(" ACC "),n("span",{class:"token punctuation"},"]"),s("     STREAM     LISTENING     "),n("span",{class:"token number"},"73674"),s(`    -                    /var/run/clamav/clamd.ctl
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")])],-1),cs=n("p",null,[s("Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the "),n("a",{href:"#firewall-settings"},"Firewall settings"),s(" section for more information.")],-1),rs=n("h3",{id:"keep-virus-definitions-up-to-date",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#keep-virus-definitions-up-to-date","aria-hidden":"true"},"#"),s(" Keep virus definitions up-to-date")],-1),is=n("p",null,"To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.",-1),us=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"nano"),s(` /etc/clamav/freshclam.conf
`)])])],-1),ps=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Check for new database 24 times a day</span>
Checks <span class="token number">24</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You can use the <code>clamdtop</code> command-line tool when you&#39;ve installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.</p>`,2),ds=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s(`server@ubuntu:~$ clamdtop

  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ `),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),s("/ __ "),n("span",{class:"token variable"},"`")]),s("__ "),n("span",{class:"token punctuation"},"\\"),s("/ __  / __/ __ "),n("span",{class:"token punctuation"},"\\"),s("/ __ "),n("span",{class:"token punctuation"},"\\"),s(`
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
`),n("span",{class:"token punctuation"},"\\"),s("___/_/"),n("span",{class:"token punctuation"},"\\"),s("__,_/_/ /_/ /_/"),n("span",{class:"token punctuation"},"\\"),s("__,_/"),n("span",{class:"token punctuation"},"\\"),s("__/"),n("span",{class:"token punctuation"},"\\"),s(`____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
`)])])],-1),ms=n("h2",{id:"linux-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-client","aria-hidden":"true"},"#"),s(" Linux client")],-1),bs=n("p",null,"Install ClamAV on Ubuntu 20.04.",-1),hs=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(),n("span",{class:"token function"},"install"),s(` clamav clamav-daemon
`)])])],-1),gs=n("p",null,"Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well.",-1),ks=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` systemctl stop clamav-daemon.service
client@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(` systemctl stop clamav-freshclam.service
client@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(` systemctl disable clamav-daemon.service
client@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(` systemctl disable clamav-freshclam.service
`)])])],-1),fs=n("p",null,[s("Continue to configure the "),n("code",null,"clamdscan"),s(" which share configuration file with the ClamAV daemon.")],-1),vs=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"nano"),s(` /etc/clamav/clamd.conf
`)])])],-1),_s=c(`<p>Comment the <code>LocalSocket /var/run/clamav/clamd.ctl</code> line and add the <code>TCPSocket 3310</code> along with the server <code>TCPAddr</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>When running a scan use the <code>multiscan</code> option to enable multihread reading. You can also set it to <code>quiet</code> if you&#39;re going to use the <code>log</code> option. You can also create a <code>file list</code> for all the directories to scan.</p>`,3),ys=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(" clamdscan --multiscan --quiet --file-list"),n("span",{class:"token operator"},"="),s(" --log"),n("span",{class:"token operator"},"="),s(`
`)])])],-1),ws=n("h2",{id:"windows-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows-client","aria-hidden":"true"},"#"),s(" Windows client")],-1),xs=s("First download the "),Ss={href:"http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe",target:"_blank",rel:"noopener noreferrer"},Cs=s("ClamAV Windows Installer"),Ts=s(" (version 0.102.4). Right-click the executable file "),As=n("code",null,"ClamAV-0.102.4.exe",-1),Ds=s(" and select "),Ps=n("code",null,"Run as Administrator",-1),Es=s("."),Ls=["src"],Ms=n("p",null,"Select destination location.",-1),Fs=["src"],Rs=n("p",null,[s("Proceed to click the "),n("code",null,"Install"),s(" button.")],-1),Is=["src"],Os=n("p",null,[s("Once the installation is complete click the "),n("code",null,"Finish"),s(" button.")],-1),$s=["src"],Vs=n("p",null,[s("Run PowerShell as administrator and make sure you're in the correct path "),n("code",null,"C:\\WINDOWS\\system32"),s(". Navigate to the ClamAV directory by entering "),n("code",null,"cd 'C:\\Program Files\\ClamAV\\"),s(".")],-1),Ns=["src"],Bs=n("p",null,[s("Now copy the ClamAV daeomon configuration and rename it to "),n("code",null,"clamd.conf"),s(" and open the file in WordPad.")],-1),Us=n("div",{class:"language-powershell ext-powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("client@windows:~"),n("span",{class:"token function"},"PS"),s("$ "),n("span",{class:"token function"},"copy"),s(),n("span",{class:"token punctuation"},"."),s("\\conf_examples\\clamd"),n("span",{class:"token punctuation"},"."),s("conf"),n("span",{class:"token punctuation"},"."),s("sample "),n("span",{class:"token punctuation"},"."),s("\\clamd"),n("span",{class:"token punctuation"},"."),s(`conf
client@windows:~`),n("span",{class:"token function"},"PS"),s("$ "),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"."),s("exe "),n("span",{class:"token punctuation"},"."),s("\\clamd"),n("span",{class:"token punctuation"},"."),s(`conf
`)])])],-1),zs=["src"],Ws=c(`<p>Comment the <code>Example</code> line and add the <code>TCPSocket</code> along with the server <code>TCPAddr</code> and save.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>You may fast test the configuration running a scan in the current directory.</p>`,3),Gs=["src"],js=n("p",null,[s("Running a more complete scan, like during the Ubuntu set up, use the "),n("code",null,"multiscan"),s(" option to enable multithread reading. Set the output to "),n("code",null,"quiet"),s(" in case you will use the "),n("code",null,"log"),s(" option. As priorly mentioned you may also define a "),n("code",null,"file list"),s(" of all the directories you wish to include in the scan.")],-1),Ys=n("div",{class:"language-powershell ext-powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[s("client@windows:~"),n("span",{class:"token function"},"PS"),s("$ "),n("span",{class:"token punctuation"},"."),s("\\clamdscan"),n("span",{class:"token punctuation"},"."),s("exe  "),n("span",{class:"token operator"},"--"),s("multiscan "),n("span",{class:"token operator"},"--"),s("quiet "),n("span",{class:"token operator"},"--"),s("file-list= "),n("span",{class:"token operator"},"--"),s(`log=
`)])])],-1),qs=n("h2",{id:"firewall-settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#firewall-settings","aria-hidden":"true"},"#"),s(" Firewall settings")],-1),Hs=s("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),Ks={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},Qs=s("here"),Xs=s("."),Js=c(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-bash ext-sh"><pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw default deny incoming
server@ubuntu:~$ <span class="token function">sudo</span> ufw default allow outgoing
server@ubuntu:~$ <span class="token function">sudo</span> ufw allow <span class="token number">22</span>
server@ubuntu:~$ <span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
Command may disrupt existing <span class="token function">ssh</span> connections. Proceed with operation <span class="token punctuation">(</span>y<span class="token operator">|</span>n<span class="token punctuation">)</span>? y
Firewall is active and enabled on system startup
</code></pre></div></details>`,1),Zs=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(" ufw allow proto tcp from "),n("span",{class:"token number"},"192.168"),s(".0.2 to any port "),n("span",{class:"token number"},"3310"),s(" comment "),n("span",{class:"token string"},'"ClamAV client 1"'),s(`
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(" ufw allow proto tcp from "),n("span",{class:"token number"},"192.168"),s(".0.3 to any port "),n("span",{class:"token number"},"3310"),s(" comment "),n("span",{class:"token string"},'"ClamAV client 2"'),s(`
`)])])],-1),na=n("p",null,"If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.",-1),sa=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(" ufw allow proto tcp from "),n("span",{class:"token number"},"192.168"),s(".0.0/24 to any port "),n("span",{class:"token number"},"3310"),s(" comment "),n("span",{class:"token string"},'"ClamAV clients"'),s(`
`)])])],-1),aa=n("h2",{id:"troubleshooting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),s(" Troubleshooting")],-1),ea=s("In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at "),ta={href:"https://lists.clamav.net/mailman/listinfo/clamav-users",target:"_blank",rel:"noopener noreferrer"},oa=s("ClamAV users"),la=s("."),ca={id:"enterprise-solutions",tabindex:"-1"},ra=n("a",{class:"header-anchor",href:"#enterprise-solutions","aria-hidden":"true"},"#",-1),ia=s(" Enterprise solutions "),ua=n("h3",{id:"atomic-protector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#atomic-protector","aria-hidden":"true"},"#"),s(" Atomic Protector")],-1),pa=n("p",null,"Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.",-1),da={href:"https://atomicorp.com/atomic-protector/",target:"_blank",rel:"noopener noreferrer"},ma=s("Atomic Protector");function ba(ha,ga){const i=r("Badge"),l=r("ExternalLinkIcon"),t=r("CodeGroupItem"),o=r("CodeGroup");return u(),p(d,null,[n("h1",h,[g,k,a(i,{text:"Rev 3",type:"tip"})]),f,n("p",null,[n("a",v,[_,a(l)]),y,n("a",w,[x,a(l)]),S,n("a",C,[T,a(l)])]),A,D,n("p",null,[n("a",P,[E,a(l)])]),L,n("ul",null,[n("li",null,[n("a",M,[F,a(l)])]),n("li",null,[n("a",R,[I,a(l)])])]),O,a(o,null,{default:e(()=>[a(t,{title:"Rocky"},{default:e(()=>[$]),_:1})]),_:1}),V,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[N]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[B]),_:1})]),_:1}),U,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[z]),_:1})]),_:1}),W,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[G]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[j]),_:1})]),_:1}),Y,n("div",q,[H,n("p",null,[K,n("a",Q,[X,a(l)]),J])]),Z,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[nn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[sn]),_:1})]),_:1}),an,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[en]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[tn]),_:1})]),_:1}),on,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[ln]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[cn]),_:1})]),_:1}),rn,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[un]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[pn]),_:1})]),_:1}),dn,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[mn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[bn]),_:1})]),_:1}),hn,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[gn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[kn]),_:1})]),_:1}),fn,vn,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[_n]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[yn]),_:1})]),_:1}),wn,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[xn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Sn]),_:1})]),_:1}),Cn,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[Tn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[An]),_:1})]),_:1}),Dn,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[Pn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[En]),_:1})]),_:1}),Ln,a(o,null,{default:e(()=>[a(t,{title:"Debian"},{default:e(()=>[Mn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Fn]),_:1})]),_:1}),Rn,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[In]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[On]),_:1})]),_:1}),$n,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Vn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[Nn]),_:1})]),_:1}),Bn,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Un]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[zn]),_:1})]),_:1}),Wn,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Gn]),_:1}),a(t,{title:"Rocky"},{default:e(()=>[jn]),_:1})]),_:1}),Yn,qn,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Hn]),_:1})]),_:1}),Kn,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Qn]),_:1})]),_:1}),Xn,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Jn]),_:1})]),_:1}),Zn,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ns]),_:1})]),_:1}),ss,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[as]),_:1})]),_:1}),es,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ts]),_:1})]),_:1}),os,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ls]),_:1})]),_:1}),cs,rs,is,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[us]),_:1})]),_:1}),ps,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ds]),_:1})]),_:1}),ms,bs,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[hs]),_:1})]),_:1}),gs,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ks]),_:1})]),_:1}),fs,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[vs]),_:1})]),_:1}),_s,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[ys]),_:1})]),_:1}),ws,n("p",null,[xs,n("a",Ss,[Cs,a(l)]),Ts,As,Ds,Ps,Es]),n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client1.png",alt:"Windows 10 setup 1"},null,8,Ls),Ms,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client2.png",alt:"Windows 10 setup 2"},null,8,Fs),Rs,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client3.png",alt:"Windows 10 setup 3"},null,8,Is),Os,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client4.png",alt:"Windows 10 setup 4"},null,8,$s),Vs,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client5.png",alt:"Windows 10 setup 5"},null,8,Ns),Bs,a(o,null,{default:e(()=>[a(t,{title:"Windows"},{default:e(()=>[Us]),_:1})]),_:1}),n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client6.png",alt:"Windows 10 setup 6"},null,8,zs),Ws,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client7.png",alt:"Windows 10 setup 7"},null,8,Gs),js,a(o,null,{default:e(()=>[a(t,{title:"Windows"},{default:e(()=>[Ys]),_:1})]),_:1}),qs,n("p",null,[Hs,n("a",Ks,[Qs,a(l)]),Xs]),Js,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[Zs]),_:1})]),_:1}),na,a(o,null,{default:e(()=>[a(t,{title:"Ubuntu"},{default:e(()=>[sa]),_:1})]),_:1}),aa,n("p",null,[ea,n("a",ta,[oa,a(l)]),la]),n("h2",ca,[ra,ia,a(i,{text:"non-sponsored",type:"tip"})]),ua,pa,n("p",null,[n("a",da,[ma,a(l)])])],64)}var va=m(b,[["render",ba]]);export{va as default};
