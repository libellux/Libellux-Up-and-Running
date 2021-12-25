import{r,o as u,c as p,a as n,b as s,w as e,F as d,d as a,e as l}from"./app.b0b3f2d8.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const b={},h={id:"clamav-antivirus-server",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#clamav-antivirus-server","aria-hidden":"true"},"#",-1),k=a(" ClamAV Antivirus Server "),v=n("p",null,"ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.",-1),f={href:"https://www.clamav.net/",target:"_blank",rel:"noopener noreferrer"},_=a("ClamAV website"),y=a(),w={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},x=a("Source code"),S=a(),C={href:"https://docs.clamav.net/",target:"_blank",rel:"noopener noreferrer"},A=a("Offical docs"),T=n("p",null,"Setup and configuration have been tested on following OS with version:",-1),D=n("ul",null,[n("li",null,"Ubuntu- 18.04, 20.04 (Focal Fossa), Debian 11 (bullseye), Rocky 8 (Green Obsidian), Windows 10, Windows Server 2019"),n("li",null,"ClamAV- 0.102.4, 0.104.0, 0.104.1")],-1),P={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},M=n("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),E=n("h2",{id:"configuration-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),a(" Configuration files")],-1),L={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/debian_.104.1.sh",target:"_blank",rel:"noopener noreferrer"},F=a("Debian 11, ClamAV 0.104.1"),R={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/rocky_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},I=a("Rocky 8, ClamAV 0.104.1"),O=l(`<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><ul><li><code>net-tools</code> (optional)</li></ul><details class="custom-container details"><summary>Dependencies for Debian 11</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libmilter-dev libjson-c5 libjson-c-dev_0.15-2
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
</code></pre></div></details><details class="custom-container details"><summary>Dependencies for Rocky 8</summary><div class="language-text ext-text"><pre class="language-text"><code>gcc gcc-c++ cmake make python3 python3-pip valgrind
bzip2-devel check-devel libcurl-devel libxml2-devel
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
</code></pre></div></details>`,4),V={id:"install-clamav-from-source",tabindex:"-1"},$=n("a",{class:"header-anchor",href:"#install-clamav-from-source","aria-hidden":"true"},"#",-1),B=a(" Install ClamAV from source "),U=l('<p>In this tutorial we&#39;ll install the ClamAV Antivirus Server (<code>192.168.0.1</code>) from source as a stand-alone server with Debian 11 or Rocky 8. We&#39;ll be using the <strong>multiscan</strong> option so the more cores the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server&#39;s TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the stand-alone server. The clients wont be built from source but rather use already available repository packages (Ubuntu 20.04 and Windows 10).</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For Rocky 8 install Extra Packages for Enterprise Linux (EPEL) and enable PowerTools.</p></div>',2),N=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(" yum -y "),n("span",{class:"token function"},"install"),a(" epel-release "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(" yum -y "),n("span",{class:"token function"},"install"),a(" dnf-plugins-core "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(" yum -y "),n("span",{class:"token function"},"install"),a(" https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(` yum config-manager --set-enabled powertools
`)])])],-1),z=n("p",null,"Once you've installed EPEL and enabled PowerTools (Rocky only) continue to install ClamAV dependencies.",-1),W=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"apt-get"),a(" update "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"apt-get"),a(" -y upgrade "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"apt-get"),a(),n("span",{class:"token function"},"install"),a(" -y gcc cmake "),n("span",{class:"token function"},"make"),a(" pkg-config python3 python3-pip python3-pytest valgrind "),n("span",{class:"token punctuation"},"\\"),a(`
check libbz2-dev libcurl4-openssl-dev libmilter-dev `),n("span",{class:"token punctuation"},"\\"),a(`
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
`)])])],-1),G=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(" yum -y "),n("span",{class:"token function"},"install"),a(" gcc gcc-c++ cmake "),n("span",{class:"token function"},"make"),a(" python3 python3-pip valgrind "),n("span",{class:"token punctuation"},"\\"),a(`
bzip2-devel check-devel libcurl-devel libxml2-devel `),n("span",{class:"token punctuation"},"\\"),a(`
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
`)])])],-1),j=n("p",null,[a("For Debian 11 download and install "),n("code",null,"libjson-c5"),a(" and "),n("code",null,"libjson-c-dev"),a(" packages.")],-1),H=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"wget"),a(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"wget"),a(" http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(" dpkg -i libjson-c5_0.15-2_amd64.deb "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"sudo"),a(` dpkg -i libjson-c-dev_0.15-2_amd64.deb
`)])])],-1),q=n("p",null,"Create ClamAV service group and user.",-1),Y=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"groupadd"),a(" clamav "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"useradd"),a(" -g clamav -s /bin/false -c "),n("span",{class:"token string"},'"Clam Antivirus"'),a(` clamav
`)])])],-1),K=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"groupadd"),a(" clamav "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"useradd"),a(" -g clamav -s /bin/false -c "),n("span",{class:"token string"},'"Clam Antivirus"'),a(` clamav
`)])])],-1),Q=n("h3",{id:"import-clamav-signing-key",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#import-clamav-signing-key","aria-hidden":"true"},"#"),a(" Import ClamAV signing key")],-1),X={class:"custom-container tip"},J=n("p",{class:"custom-container-title"},"TIP",-1),Z=a("You can find the public ClamAV key "),nn={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},an=a("here"),sn=a(" under Talos PGP Public Key."),en=n("p",null,"Create a new .asc file, paste the public key and save.",-1),tn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"touch"),a(" clamav.asc "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"nano"),a(` clamav.asc
`)])])],-1),on=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"touch"),a(" clamav.asc "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token function"},"nano"),a(` clamav.asc
`)])])],-1),ln=n("p",null,[a("Once you've saved the "),n("code",null,"clamav.asc"),a(" file proceed to import the key.")],-1),cn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@debian:~$ gpg --import clamav.asc
`)])],-1),rn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$ gpg --import clamav.asc
`)])],-1),un=l(`<p>You should see that the public key <em>Talos from Cisco Systems Inc.</em> has been imported.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gpg: key 609B024F2B3EDD07: public key <span class="token string">&quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot;</span> imported
gpg: Total number processed: <span class="token number">1</span>
gpg:               imported: <span class="token number">1</span>
gpg: no ultimately trusted keys found
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div></div><p>Now lets edit the key.</p>`,3),pn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@debian:~$ gpg --edit-key 609B024F2B3EDD07
`)])],-1),dn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$ gpg --edit-key 609B024F2B3EDD07
`)])],-1),mn=l(`<p>When you get prompted type <em>trust</em> and select option 5 (I trust ultimately).</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gpg <span class="token punctuation">(</span>GnuPG<span class="token punctuation">)</span> <span class="token number">2.2</span>.19<span class="token punctuation">;</span> Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2019</span> Free Software Foundation, Inc.
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div></div><h3 id="build-clamav-server" tabindex="-1"><a class="header-anchor" href="#build-clamav-server" aria-hidden="true">#</a> Build ClamAV server</h3><p>Before you build ClamAV download both the source along with the signature to verify its validity.</p>`,4),bn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"wget"),a(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"wget"),a(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
`)])])],-1),hn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"wget"),a(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"wget"),a(" https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
`)])])],-1),gn=l(`<p>The output should say its a good signature from Cisco.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>gpg: Signature made Wed 01 Sep <span class="token number">2021</span> 05:52:12 PM UTC
gpg:                using RSA key 609B024F2B3EDD07
gpg: Good signature from <span class="token string">&quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot;</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Proceed to extract and build.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This may take a while.</p></div>`,4),kn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"tar"),a(" -xvzf clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token builtin class-name"},"cd"),a(" clamav-0.104.1/ "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"mkdir"),a(" -p build "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token builtin class-name"},"cd"),a(" build "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
cmake `),n("span",{class:"token punctuation"},".."),a(),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_PREFIX"),n("span",{class:"token operator"},"="),a("/usr "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_LIBDIR"),n("span",{class:"token operator"},"="),a("lib "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"APP_CONFIG_DIRECTORY"),n("span",{class:"token operator"},"="),a("/etc/clamav "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"DATABASE_DIRECTORY"),n("span",{class:"token operator"},"="),a("/var/lib/clamav "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"ENABLE_JSON_SHARED"),n("span",{class:"token operator"},"="),a("OFF "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
cmake --build `),n("span",{class:"token builtin class-name"},"."),a(),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
ctest
`)])])],-1),vn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"tar"),a(" -xvzf clamav-0.104.1.tar.gz "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token builtin class-name"},"cd"),a(" clamav-0.104.1/ "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"mkdir"),a(" -p build "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token builtin class-name"},"cd"),a(" build "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
cmake `),n("span",{class:"token punctuation"},".."),a(),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_PREFIX"),n("span",{class:"token operator"},"="),a("/usr "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"CMAKE_INSTALL_LIBDIR"),n("span",{class:"token operator"},"="),a("lib "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"APP_CONFIG_DIRECTORY"),n("span",{class:"token operator"},"="),a("/etc/clamav "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"DATABASE_DIRECTORY"),n("span",{class:"token operator"},"="),a("/var/lib/clamav "),n("span",{class:"token punctuation"},"\\"),a(`
  -D `),n("span",{class:"token assign-left variable"},"ENABLE_JSON_SHARED"),n("span",{class:"token operator"},"="),a("ON "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
cmake --build `),n("span",{class:"token builtin class-name"},"."),a(),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
ctest
`)])])],-1),fn=l(`<p>The <code>ctest</code> should output the following information.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>Test project ~/clamav-0.104.1/build
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div></div><p>Once the test successfully passed proceed to build and install ClamAV 0.104.1.</p>`,3),_n=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(" cmake --build "),n("span",{class:"token builtin class-name"},"."),a(" --target "),n("span",{class:"token function"},"install"),a(`
`)])])],-1),yn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(" cmake --build "),n("span",{class:"token builtin class-name"},"."),a(" --target "),n("span",{class:"token function"},"install"),a(`
`)])])],-1),wn=n("h2",{id:"server-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#server-configuration","aria-hidden":"true"},"#"),a(" Server configuration")],-1),xn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
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
EOF'`),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),Sn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/clamd.conf
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
EOF'`),a(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),Cn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'`),a(`
`)])])],-1),An=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'`),a(`
`)])])],-1),Tn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"mkdir"),a(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"chown"),a(` clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),Dn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"mkdir"),a(" /var/log/clamav/ /var/lib/clamav /var/run/clamav/ "),n("span",{class:"token operator"},"&&"),a(),n("span",{class:"token punctuation"},"\\"),a(`
`),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"chown"),a(` clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),Pn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
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
EOF'`),a(`
`)])])],-1),Mn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-freshclam.service
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
EOF'`),a(`
`)])])],-1),En=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@debian:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
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
EOF'`),a(`
`)])])],-1),Ln=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@rocky:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"bash"),a(" -c "),n("span",{class:"token string"},`'cat << EOF > /etc/systemd/system/clamav-daemon.service
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
EOF'`),a(`
`)])])],-1),Fn=l('<p>Freshclam https://docs.clamav.net/manual/Usage/Configuration.html#freshclamconf</p><p>ClamAV daemon http://manpages.ubuntu.com/manpages/bionic/man5/clamd.conf.5.html https://docs.clamav.net/manual/Usage/Configuration.html#clamdconf</p><h2 id="install-from-repository" tabindex="-1"><a class="header-anchor" href="#install-from-repository" aria-hidden="true">#</a> Install from repository</h2><p>In this tutorial we will install the ClamAV Antivirus Server (the clamav-daemon <code>192.168.0.1</code>) as a own server/virtual machine. We&#39;ll also use the multiscan option, so the more cores the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server&#39;s TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the master server.</p><h2 id="clamav-server" tabindex="-1"><a class="header-anchor" href="#clamav-server" aria-hidden="true">#</a> ClamAV server</h2><p>First download the ClamAV scanner and the ClamAV daemon.</p>',6),Rn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"apt-get"),a(),n("span",{class:"token function"},"install"),a(` clamav clamav-daemon
`)])])],-1),In=n("p",null,"Proceed to stop freshclam the automatic database update tool for ClamAV.",-1),On=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(` systemctl stop clamav-freshclam
`)])])],-1),Vn=n("p",null,"Next run freshclam to update to the latest definition database.",-1),$n=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(` freshclam
`)])])],-1),Bn=n("p",null,[a("Once you've ran the freshclam command you can check the log "),n("code",null,"/var/log/clamav/freshclam.log"),a(" for the current status and then start freshclam again.")],-1),Un=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"cat"),a(` /var/log/clamav/freshclam.log
Sat Apr `),n("span",{class:"token number"},"10"),a(),n("span",{class:"token number"},"17"),a(":51:37 "),n("span",{class:"token number"},"2021"),a(" -"),n("span",{class:"token operator"},">"),a(" daily.cvd database is up to "),n("span",{class:"token function"},"date"),a(),n("span",{class:"token punctuation"},"("),a("version: "),n("span",{class:"token number"},"26136"),a(", sigs: "),n("span",{class:"token number"},"3969743"),a(", f-level: "),n("span",{class:"token number"},"63"),a(", builder: raynman"),n("span",{class:"token punctuation"},")"),a(`
Sat Apr `),n("span",{class:"token number"},"10"),a(),n("span",{class:"token number"},"17"),a(":51:37 "),n("span",{class:"token number"},"2021"),a(" -"),n("span",{class:"token operator"},">"),a(" main.cvd database is up to "),n("span",{class:"token function"},"date"),a(),n("span",{class:"token punctuation"},"("),a("version: "),n("span",{class:"token number"},"59"),a(", sigs: "),n("span",{class:"token number"},"4564902"),a(", f-level: "),n("span",{class:"token number"},"60"),a(", builder: sigmgr"),n("span",{class:"token punctuation"},")"),a(`
Sat Apr `),n("span",{class:"token number"},"10"),a(),n("span",{class:"token number"},"17"),a(":51:37 "),n("span",{class:"token number"},"2021"),a(" -"),n("span",{class:"token operator"},">"),a(" bytecode.cvd database is up to "),n("span",{class:"token function"},"date"),a(),n("span",{class:"token punctuation"},"("),a("version: "),n("span",{class:"token number"},"333"),a(", sigs: "),n("span",{class:"token number"},"92"),a(", f-level: "),n("span",{class:"token number"},"63"),a(", builder: awillia2"),n("span",{class:"token punctuation"},")"),a(`
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),a(` systemctl start clamav-freshclam
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0")])],-1),Nn=n("p",null,"Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.",-1),zn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"nano"),a(` /etc/clamav/clamd.conf
`)])])],-1),Wn=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Restart ClamAV to apply the new changes.</p>`,2),Gn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(` systemctl restart clamav-daemon.service
`)])])],-1),jn=n("p",null,[a("To confirm that ClamAV listen to TCP port 3310 run the command below (requires "),n("code",null,"net-tools"),a(").")],-1),Hn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"netstat"),a(" -lnp "),n("span",{class:"token operator"},"|"),a(),n("span",{class:"token function"},"grep"),a(" -E "),n("span",{class:"token string"},'"(clam|3310)"'),a(`
`),n("span",{class:"token punctuation"},"("),a(`Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.`),n("span",{class:"token punctuation"},")"),a(`
tcp        `),n("span",{class:"token number"},"0"),a("      "),n("span",{class:"token number"},"0"),a(),n("span",{class:"token number"},"0.0"),a(".0.0:3310            "),n("span",{class:"token number"},"0.0"),a(`.0.0:*               LISTEN      -
tcp6       `),n("span",{class:"token number"},"0"),a("      "),n("span",{class:"token number"},"0"),a(` :::3310                 :::*                    LISTEN      -
unix  `),n("span",{class:"token number"},"2"),a("      "),n("span",{class:"token punctuation"},"["),a(" ACC "),n("span",{class:"token punctuation"},"]"),a("     STREAM     LISTENING     "),n("span",{class:"token number"},"73674"),a(`    -                    /var/run/clamav/clamd.ctl
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")])],-1),qn=n("p",null,[a("Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the "),n("a",{href:"#firewall-settings"},"Firewall settings"),a(" section for more information.")],-1),Yn=n("h3",{id:"keep-virus-definitions-up-to-date",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#keep-virus-definitions-up-to-date","aria-hidden":"true"},"#"),a(" Keep virus definitions up-to-date")],-1),Kn=n("p",null,"To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.",-1),Qn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"nano"),a(` /etc/clamav/freshclam.conf
`)])])],-1),Xn=l(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Check for new database 24 times a day</span>
Checks <span class="token number">24</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You can use the <code>clamdtop</code> command-line tool when you&#39;ve installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.</p>`,2),Jn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a(`server@ubuntu:~$ clamdtop

  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ `),n("span",{class:"token variable"},[n("span",{class:"token variable"},"`"),a("/ __ "),n("span",{class:"token variable"},"`")]),a("__ "),n("span",{class:"token punctuation"},"\\"),a("/ __  / __/ __ "),n("span",{class:"token punctuation"},"\\"),a("/ __ "),n("span",{class:"token punctuation"},"\\"),a(`
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
`),n("span",{class:"token punctuation"},"\\"),a("___/_/"),n("span",{class:"token punctuation"},"\\"),a("__,_/_/ /_/ /_/"),n("span",{class:"token punctuation"},"\\"),a("__,_/"),n("span",{class:"token punctuation"},"\\"),a("__/"),n("span",{class:"token punctuation"},"\\"),a(`____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
`)])])],-1),Zn=n("h2",{id:"ubuntu-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ubuntu-client","aria-hidden":"true"},"#"),a(" Ubuntu client")],-1),na=n("p",null,"Install ClamAV on Ubuntu 20.04.",-1),aa=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"apt-get"),a(),n("span",{class:"token function"},"install"),a(` clamav clamav-daemon
`)])])],-1),sa=n("p",null,"Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well.",-1),ea=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(` systemctl stop clamav-daemon.service
client@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),a(` systemctl stop clamav-freshclam.service
client@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),a(` systemctl disable clamav-daemon.service
client@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),a(` systemctl disable clamav-freshclam.service
`)])])],-1),ta=n("p",null,[a("Continue to configure the "),n("code",null,"clamdscan"),a(" which share configuration file with the ClamAV daemon.")],-1),oa=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(),n("span",{class:"token function"},"nano"),a(` /etc/clamav/clamd.conf
`)])])],-1),la=l(`<p>Comment the <code>LocalSocket /var/run/clamav/clamd.ctl</code> line and add the <code>TCPSocket 3310</code> along with the server <code>TCPAddr</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>When running a scan use the <code>multiscan</code> option to enable multihread reading. You can also set it to <code>quiet</code> if you&#39;re going to use the <code>log</code> option. You can also create a <code>file list</code> for all the directories to scan.</p>`,3),ca=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("client@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(" clamdscan --multiscan --quiet --file-list"),n("span",{class:"token operator"},"="),a(" --log"),n("span",{class:"token operator"},"="),a(`
`)])])],-1),ra=n("h2",{id:"windows-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows-client","aria-hidden":"true"},"#"),a(" Windows client")],-1),ia=a("First download the "),ua={href:"http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe",target:"_blank",rel:"noopener noreferrer"},pa=a("ClamAV Windows Installer"),da=a(" (version 0.102.4). Right-click the executable file "),ma=n("code",null,"ClamAV-0.102.4.exe",-1),ba=a(" and select "),ha=n("code",null,"Run as Administrator",-1),ga=a("."),ka=["src"],va=n("p",null,"Select destination location.",-1),fa=["src"],_a=n("p",null,[a("Proceed to click the "),n("code",null,"Install"),a(" button.")],-1),ya=["src"],wa=n("p",null,[a("Once the installation is complete click the "),n("code",null,"Finish"),a(" button.")],-1),xa=["src"],Sa=n("p",null,[a("Run PowerShell as administrator and make sure you're in the correct path "),n("code",null,"C:\\WINDOWS\\system32"),a(". Navigate to the ClamAV directory by entering "),n("code",null,"cd 'C:\\Program Files\\ClamAV\\"),a(".")],-1),Ca=["src"],Aa=n("p",null,[a("Now copy the ClamAV daeomon configuration and rename it to "),n("code",null,"clamd.conf"),a(" and open the file in WordPad.")],-1),Ta=n("div",{class:"language-powershell ext-powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[a("client@windows:~"),n("span",{class:"token function"},"PS"),a("$ "),n("span",{class:"token function"},"copy"),a(),n("span",{class:"token punctuation"},"."),a("\\conf_examples\\clamd"),n("span",{class:"token punctuation"},"."),a("conf"),n("span",{class:"token punctuation"},"."),a("sample "),n("span",{class:"token punctuation"},"."),a("\\clamd"),n("span",{class:"token punctuation"},"."),a(`conf
client@windows:~`),n("span",{class:"token function"},"PS"),a("$ "),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"."),a("exe "),n("span",{class:"token punctuation"},"."),a("\\clamd"),n("span",{class:"token punctuation"},"."),a(`conf
`)])])],-1),Da=["src"],Pa=l(`<p>Comment the <code>Example</code> line and add the <code>TCPSocket</code> along with the server <code>TCPAddr</code> and save.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">##</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>You may fast test the configuration running a scan in the current directory.</p>`,3),Ma=["src"],Ea=n("p",null,[a("Running a more complete scan, like during the Ubuntu set up, use the "),n("code",null,"multiscan"),a(" option to enable multithread reading. Set the output to "),n("code",null,"quiet"),a(" in case you will use the "),n("code",null,"log"),a(" option. As priorly mentioned you may also define a "),n("code",null,"file list"),a(" of all the directories you wish to include in the scan.")],-1),La=n("div",{class:"language-powershell ext-powershell"},[n("pre",{class:"language-powershell"},[n("code",null,[a("client@windows:~"),n("span",{class:"token function"},"PS"),a("$ "),n("span",{class:"token punctuation"},"."),a("\\clamdscan"),n("span",{class:"token punctuation"},"."),a("exe  "),n("span",{class:"token operator"},"--"),a("multiscan "),n("span",{class:"token operator"},"--"),a("quiet "),n("span",{class:"token operator"},"--"),a("file"),n("span",{class:"token operator"},"-"),a("list= "),n("span",{class:"token operator"},"--"),a(`log=
`)])])],-1),Fa=n("h2",{id:"firewall-settings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#firewall-settings","aria-hidden":"true"},"#"),a(" Firewall settings")],-1),Ra=a("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),Ia={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},Oa=a("here"),Va=a("."),$a=l(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-bash ext-sh"><pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw default deny incoming
server@ubuntu:~$ <span class="token function">sudo</span> ufw default allow outgoing
server@ubuntu:~$ <span class="token function">sudo</span> ufw allow <span class="token number">22</span>
server@ubuntu:~$ <span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
Command may disrupt existing <span class="token function">ssh</span> connections. Proceed with operation <span class="token punctuation">(</span>y<span class="token operator">|</span>n<span class="token punctuation">)</span>? y
Firewall is active and enabled on system startup
</code></pre></div></details>`,1),Ba=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(" ufw allow proto tcp from "),n("span",{class:"token number"},"192.168"),a(".0.2 to any port "),n("span",{class:"token number"},"3310"),a(" comment "),n("span",{class:"token string"},'"ClamAV client 1"'),a(`
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),a(" ufw allow proto tcp from "),n("span",{class:"token number"},"192.168"),a(".0.3 to any port "),n("span",{class:"token number"},"3310"),a(" comment "),n("span",{class:"token string"},'"ClamAV client 2"'),a(`
`)])])],-1),Ua=n("p",null,"If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.",-1),Na=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),a(" ufw allow proto tcp from "),n("span",{class:"token number"},"192.168"),a(".0.0/24 to any port "),n("span",{class:"token number"},"3310"),a(" comment "),n("span",{class:"token string"},'"ClamAV clients"'),a(`
`)])])],-1),za=n("h2",{id:"troubleshooting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#troubleshooting","aria-hidden":"true"},"#"),a(" Troubleshooting")],-1),Wa=a("In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at "),Ga={href:"https://lists.clamav.net/mailman/listinfo/clamav-users",target:"_blank",rel:"noopener noreferrer"},ja=a("ClamAV users"),Ha=a("."),qa={id:"enterprise-solutions",tabindex:"-1"},Ya=n("a",{class:"header-anchor",href:"#enterprise-solutions","aria-hidden":"true"},"#",-1),Ka=a(" Enterprise solutions "),Qa=n("h3",{id:"atomic-protector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#atomic-protector","aria-hidden":"true"},"#"),a(" Atomic Protector")],-1),Xa=n("p",null,"Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.",-1),Ja={href:"https://atomicorp.com/atomic-protector/",target:"_blank",rel:"noopener noreferrer"},Za=a("Atomic Protector");function ns(as,ss){const i=r("Badge"),c=r("ExternalLinkIcon"),t=r("CodeGroupItem"),o=r("CodeGroup");return u(),p(d,null,[n("h1",h,[g,k,s(i,{text:"Rev 3",type:"tip"})]),v,n("p",null,[n("a",f,[_,s(c)]),y,n("a",w,[x,s(c)]),S,n("a",C,[A,s(c)])]),T,D,n("p",null,[n("a",P,[M,s(c)])]),E,n("ul",null,[n("li",null,[n("a",L,[F,s(c)])]),n("li",null,[n("a",R,[I,s(c)])])]),O,n("h2",V,[$,B,s(i,{text:"dev",type:"warning"})]),U,s(o,null,{default:e(()=>[s(t,{title:"Rocky"},{default:e(()=>[N]),_:1})]),_:1}),z,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[W]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[G]),_:1})]),_:1}),j,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[H]),_:1})]),_:1}),q,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[Y]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[K]),_:1})]),_:1}),Q,n("div",X,[J,n("p",null,[Z,n("a",nn,[an,s(c)]),sn])]),en,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[tn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[on]),_:1})]),_:1}),ln,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[cn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[rn]),_:1})]),_:1}),un,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[pn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[dn]),_:1})]),_:1}),mn,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[bn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[hn]),_:1})]),_:1}),gn,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[kn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[vn]),_:1})]),_:1}),fn,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[_n]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[yn]),_:1})]),_:1}),wn,s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[xn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[Sn]),_:1})]),_:1}),s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[Cn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[An]),_:1})]),_:1}),s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[Tn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[Dn]),_:1})]),_:1}),s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[Pn]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[Mn]),_:1})]),_:1}),s(o,null,{default:e(()=>[s(t,{title:"Debian"},{default:e(()=>[En]),_:1}),s(t,{title:"Rocky"},{default:e(()=>[Ln]),_:1})]),_:1}),Fn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Rn]),_:1})]),_:1}),In,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[On]),_:1})]),_:1}),Vn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[$n]),_:1})]),_:1}),Bn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Un]),_:1})]),_:1}),Nn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[zn]),_:1})]),_:1}),Wn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Gn]),_:1})]),_:1}),jn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Hn]),_:1})]),_:1}),qn,Yn,Kn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Qn]),_:1})]),_:1}),Xn,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Jn]),_:1})]),_:1}),Zn,na,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[aa]),_:1})]),_:1}),sa,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[ea]),_:1})]),_:1}),ta,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[oa]),_:1})]),_:1}),la,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[ca]),_:1})]),_:1}),ra,n("p",null,[ia,n("a",ua,[pa,s(c)]),da,ma,ba,ha,ga]),n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client1.png",alt:"Windows 10 setup 1"},null,8,ka),va,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client2.png",alt:"Windows 10 setup 2"},null,8,fa),_a,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client3.png",alt:"Windows 10 setup 3"},null,8,ya),wa,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client4.png",alt:"Windows 10 setup 4"},null,8,xa),Sa,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client5.png",alt:"Windows 10 setup 5"},null,8,Ca),Aa,s(o,null,{default:e(()=>[s(t,{title:"Windows"},{default:e(()=>[Ta]),_:1})]),_:1}),n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client6.png",alt:"Windows 10 setup 6"},null,8,Da),Pa,n("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client7.png",alt:"Windows 10 setup 7"},null,8,Ma),Ea,s(o,null,{default:e(()=>[s(t,{title:"Windows"},{default:e(()=>[La]),_:1})]),_:1}),Fa,n("p",null,[Ra,n("a",Ia,[Oa,s(c)]),Va]),$a,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Ba]),_:1})]),_:1}),Ua,s(o,null,{default:e(()=>[s(t,{title:"Ubuntu"},{default:e(()=>[Na]),_:1})]),_:1}),za,n("p",null,[Wa,n("a",Ga,[ja,s(c)]),Ha]),n("h2",qa,[Ya,Ka,s(i,{text:"non-sponsored",type:"tip"})]),Qa,Xa,n("p",null,[n("a",Ja,[Za,s(c)])])],64)}var os=m(b,[["render",ns]]);export{os as default};
