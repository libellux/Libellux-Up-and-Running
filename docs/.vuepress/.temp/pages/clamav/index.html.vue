<template><h1 id="clamav-antivirus-server" tabindex="-1"><a class="header-anchor" href="#clamav-antivirus-server" aria-hidden="true">#</a> ClamAV Antivirus Server <Badge text="Rev 2" type="tip"/></h1>
<p>ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.</p>
<p><a href="https://www.clamav.net/" target="_blank" rel="noopener noreferrer">ClamAV website<OutboundLink/></a> <a href="https://www.clamav.net/downloads" target="_blank" rel="noopener noreferrer">Source code<OutboundLink/></a> <a href="https://docs.clamav.net/" target="_blank" rel="noopener noreferrer">Offical docs<OutboundLink/></a></p>
<p>Setup and configuration have been tested on following OS with version:</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>How-to build ClamAV from source will be added in upcoming release.</p>
</div>
<ul>
<li>Ubuntu- 18.04, 20.04 (Focal Fossa), Debian 11 (bullseye), Windows 10, Windows Server 2019</li>
<li>ClamAV- 0.102.4, 0.104.0</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><OutboundLink/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/ubuntu_0.104.sh" target="_blank" rel="noopener noreferrer">ClamAV 0.104.0<OutboundLink/></a></li>
</ul>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li><code>net-tools</code> (optional)</li>
</ul>
<details class="custom-container details"><summary>Dependencies for Debian 11</summary>
<div class="language-text ext-text"><pre v-pre class="language-text"><code>gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libmilter-dev libjson-c5 libjson-c-dev_0.15-2
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
</code></pre></div></details>
<h2 id="install-clamav-from-source" tabindex="-1"><a class="header-anchor" href="#install-clamav-from-source" aria-hidden="true">#</a> Install ClamAV from source <Badge text="dev" type="warning"/></h2>
<p>In this tutorial we'll install the ClamAV Antivirus Server (<code>192.168.0.1</code>) from source as a own server/virtual machine using Debian 11. We'll be using the <strong>multiscan</strong> option so the more cores the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server's TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the master server. The clients wont be built from source but rather use already available repository packages (Ubuntu 20.04 and Windows 10).</p>
<p>First install the required dependencies.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y upgrade <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y gcc cmake <span class="token function">make</span> pkg-config python3 python3-pip python3-pytest valgrind <span class="token punctuation">\</span>
check libbz2-dev libcurl4-openssl-dev libmilter-dev <span class="token punctuation">\</span>
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Download and install <code>libjson-c5</code> and <code>libjson-c-dev</code> package.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ <span class="token function">wget</span> http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">wget</span> http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> dpkg -i libjson-c5_0.15-2_amd64.deb <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> dpkg -i libjson-c-dev_0.15-2_amd64.deb
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Create ClamAV service group and user.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ <span class="token function">sudo</span> <span class="token function">groupadd</span> clamav <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">useradd</span> -g clamav -s /bin/false -c <span class="token string">"Clam Antivirus"</span> clamav
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="import-clamav-signing-key" tabindex="-1"><a class="header-anchor" href="#import-clamav-signing-key" aria-hidden="true">#</a> Import ClamAV signing key</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can find the public ClamAV key <a href="https://www.clamav.net/downloads" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a> under Talos PGP Public Key.</p>
</div>
<p>Create a new .asc file, paste the public key and save.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ <span class="token function">touch</span> clamav.asc <span class="token operator">&amp;&amp;</span> <span class="token function">nano</span> clamav.asc
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once you've saved the <code>clamav.asc</code> file proceed to import the key.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ gpg --import clamav.asc
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>You should see that the public key <em>Talos from Cisco Systems Inc.</em> has been imported.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: key 609B024F2B3EDD07: public key <span class="token string">"Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com>"</span> imported
gpg: Total number processed: <span class="token number">1</span>
gpg:               imported: <span class="token number">1</span>
gpg: no ultimately trusted keys found
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Now lets edit the key.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ gpg --edit-key 609B024F2B3EDD07
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>When you get prompted type <em>trust</em> and select option 5 (I trust ultimately).</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg <span class="token punctuation">(</span>GnuPG<span class="token punctuation">)</span> <span class="token number">2.2</span>.19<span class="token punctuation">;</span> Copyright <span class="token punctuation">(</span>C<span class="token punctuation">)</span> <span class="token number">2019</span> Free Software Foundation, Inc.
This is <span class="token function">free</span> software: you are <span class="token function">free</span> to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

pub  rsa4096/609B024F2B3EDD07
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: E
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Talos <span class="token punctuation">(</span>Talos, Cisco Systems Inc.<span class="token punctuation">)</span> <span class="token operator">&lt;</span>research@sourcefire.com<span class="token operator">></span>

gpg<span class="token operator">></span> trust
pub  rsa4096/609B024F2B3EDD07
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: SC
     trust: unknown       validity: unknown
sub  rsa4096/73966F3B446077EC
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: E
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Talos <span class="token punctuation">(</span>Talos, Cisco Systems Inc.<span class="token punctuation">)</span> <span class="token operator">&lt;</span>research@sourcefire.com<span class="token operator">></span>

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

pub  rsa4096/609B024F2B3EDD07
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: SC
     trust: ultimate      validity: unknown
sub  rsa4096/73966F3B446077EC
     created: <span class="token number">2021</span>-03-30  expires: <span class="token number">2023</span>-03-30  usage: E
<span class="token punctuation">[</span> unknown<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>. Talos <span class="token punctuation">(</span>Talos, Cisco Systems Inc.<span class="token punctuation">)</span> <span class="token operator">&lt;</span>research@sourcefire.com<span class="token operator">></span>
Please note that the shown key validity is not necessarily correct
unless you restart the program.

gpg<span class="token operator">></span> quit
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="build-clamav-server" tabindex="-1"><a class="header-anchor" href="#build-clamav-server" aria-hidden="true">#</a> Build ClamAV server</h3>
<p>Before you build ClamAV download both the source along with the signature to verify its validity.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ <span class="token function">wget</span> https://www.clamav.net/downloads/production/clamav-0.104.0.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">wget</span> https://www.clamav.net/downloads/production/clamav-0.104.0.tar.gz.sig <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
gpg --verify clamav-0.104.0.tar.gz.sig clamav-0.104.0.tar.gz
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>The output should say its a good signature from Cisco.</p>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>gpg: Signature made Wed 01 Sep <span class="token number">2021</span> 05:52:12 PM UTC
gpg:                using RSA key 609B024F2B3EDD07
gpg: Good signature from <span class="token string">"Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com>"</span> <span class="token punctuation">[</span>ultimate<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
</CodeGroup>
<p>Proceed to extract and build.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This may take a while.</p>
</div>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@debian:~$ <span class="token function">tar</span> -xvzf clamav-0.104.0.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">cd</span> clamav-0.104.0/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">mkdir</span> -p build <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> build <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake <span class="token punctuation">..</span> <span class="token punctuation">\</span>
  -D <span class="token assign-left variable">CMAKE_INSTALL_PREFIX</span><span class="token operator">=</span>/usr <span class="token punctuation">\</span>
  -D <span class="token assign-left variable">CMAKE_INSTALL_LIBDIR</span><span class="token operator">=</span>lib <span class="token punctuation">\</span>
  -D <span class="token assign-left variable">APP_CONFIG_DIRECTORY</span><span class="token operator">=</span>/etc/clamav <span class="token punctuation">\</span>
  -D <span class="token assign-left variable">DATABASE_DIRECTORY</span><span class="token operator">=</span>/var/lib/clamav <span class="token punctuation">\</span>
  -D <span class="token assign-left variable">ENABLE_JSON_SHARED</span><span class="token operator">=</span>OFF <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
cmake --build <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
ctest <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> cmake --build <span class="token builtin class-name">.</span> --target <span class="token function">install</span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>The <code>ctest</code> should output the following information.</p>
<ul>
<li>Fix valgrind leaks/errors (80% complete)</li>
</ul>
<ul>
<li>[ ] Check Debian 11 versions of installed/required packages</li>
<li>[ ] Downgrade packages to Debian 11 version</li>
<li>[ ] libclamav_valgrind</li>
<li>[ ] clamd_valgrind</li>
</ul>
<CodeGroup>
<CodeGroupItem title="Debian">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>Test project ~/clamav-0.104.0/build
      Start  <span class="token number">1</span>: libclamav
 <span class="token number">1</span>/10 Test  <span class="token comment">#1: libclamav ........................   Passed   16.87 sec</span>
      Start  <span class="token number">2</span>: libclamav_valgrind
 <span class="token number">2</span>/10 Test  <span class="token comment">#2: libclamav_valgrind ...............   Passed  143.88 sec</span>
      Start  <span class="token number">3</span>: clamscan
 <span class="token number">3</span>/10 Test  <span class="token comment">#3: clamscan .........................   Passed    5.65 sec</span>
      Start  <span class="token number">4</span>: clamscan_valgrind
 <span class="token number">4</span>/10 Test  <span class="token comment">#4: clamscan_valgrind ................   Passed   71.85 sec</span>
      Start  <span class="token number">5</span>: clamd
 <span class="token number">5</span>/10 Test  <span class="token comment">#5: clamd ............................   Passed   21.53 sec</span>
      Start  <span class="token number">6</span>: clamd_valgrind
 <span class="token number">6</span>/10 Test  <span class="token comment">#6: clamd_valgrind ...................   Passed   79.26 sec</span>
      Start  <span class="token number">7</span>: freshclam
 <span class="token number">7</span>/10 Test  <span class="token comment">#7: freshclam ........................   Passed    2.53 sec</span>
      Start  <span class="token number">8</span>: freshclam_valgrind
 <span class="token number">8</span>/10 Test  <span class="token comment">#8: freshclam_valgrind ...............   Passed   40.89 sec</span>
      Start  <span class="token number">9</span>: sigtool
 <span class="token number">9</span>/10 Test  <span class="token comment">#9: sigtool ..........................   Passed    1.14 sec</span>
      Start <span class="token number">10</span>: sigtool_valgrind
<span class="token number">10</span>/10 Test <span class="token comment">#10: sigtool_valgrind .................   Passed    2.71 sec</span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="install-from-repository" tabindex="-1"><a class="header-anchor" href="#install-from-repository" aria-hidden="true">#</a> Install from repository</h2>
<p>In this tutorial we will install the ClamAV Antivirus Server (the clamav-daemon <code>192.168.0.1</code>) as a own server/virtual machine. We'll also use the multiscan option, so the more cores the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server's TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the master server.</p>
<h2 id="clamav-server" tabindex="-1"><a class="header-anchor" href="#clamav-server" aria-hidden="true">#</a> ClamAV server</h2>
<p>First download the ClamAV scanner and the ClamAV daemon.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> clamav clamav-daemon
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Proceed to stop freshclam the automatic database update tool for ClamAV.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl stop clamav-freshclam
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next run freshclam to update to the latest definition database.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> freshclam
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once you've ran the freshclam command you can check the log <code>/var/log/clamav/freshclam.log</code> for the current status and then start freshclam again.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">cat</span> /var/log/clamav/freshclam.log
Sat Apr <span class="token number">10</span> <span class="token number">17</span>:51:37 <span class="token number">2021</span> -<span class="token operator">></span> daily.cvd database is up to <span class="token function">date</span> <span class="token punctuation">(</span>version: <span class="token number">26136</span>, sigs: <span class="token number">3969743</span>, f-level: <span class="token number">63</span>, builder: raynman<span class="token punctuation">)</span>
Sat Apr <span class="token number">10</span> <span class="token number">17</span>:51:37 <span class="token number">2021</span> -<span class="token operator">></span> main.cvd database is up to <span class="token function">date</span> <span class="token punctuation">(</span>version: <span class="token number">59</span>, sigs: <span class="token number">4564902</span>, f-level: <span class="token number">60</span>, builder: sigmgr<span class="token punctuation">)</span>
Sat Apr <span class="token number">10</span> <span class="token number">17</span>:51:37 <span class="token number">2021</span> -<span class="token operator">></span> bytecode.cvd database is up to <span class="token function">date</span> <span class="token punctuation">(</span>version: <span class="token number">333</span>, sigs: <span class="token number">92</span>, f-level: <span class="token number">63</span>, builder: awillia2<span class="token punctuation">)</span>
server@ubuntu:~$ <span class="token function">sudo</span> systemctl start clamav-freshclam
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
</CodeGroup>
<p>Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /etc/clamav/clamd.conf
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
<span class="token comment">#To reconfigure clamd run #dpkg-reconfigure clamav-daemon</span>
<span class="token comment">#Please read /usr/share/doc/clamav-daemon/README.Debian.gz for details</span>
LocalSocket /var/run/clamav/clamd.ctl
FixStaleSocket <span class="token boolean">true</span>
LocalSocketGroup clamav
LocalSocketMode <span class="token number">666</span>
<span class="token comment"># TemporaryDirectory is not set to its default /tmp here to make overriding</span>
<span class="token comment"># the default with environment variables TMPDIR/TMP/TEMP possible</span>
User clamav
TCPSocket <span class="token number">3310</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Restart ClamAV to apply the new changes.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> systemctl restart clamav-daemon.service
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>To confirm that ClamAV listen to TCP port 3310 run the command below (requires <code>net-tools</code>).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">netstat</span> -lnp <span class="token operator">|</span> <span class="token function">grep</span> -E <span class="token string">"(clam|3310)"</span>
<span class="token punctuation">(</span>Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.<span class="token punctuation">)</span>
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:3310            <span class="token number">0.0</span>.0.0:*               LISTEN      -
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::3310                 :::*                    LISTEN      -
unix  <span class="token number">2</span>      <span class="token punctuation">[</span> ACC <span class="token punctuation">]</span>     STREAM     LISTENING     <span class="token number">73674</span>    -                    /var/run/clamav/clamd.ctl
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the <a href="#firewall-settings">Firewall settings</a> section for more information.</p>
<h3 id="keep-virus-definitions-up-to-date" tabindex="-1"><a class="header-anchor" href="#keep-virus-definitions-up-to-date" aria-hidden="true">#</a> Keep virus definitions up-to-date</h3>
<p>To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /etc/clamav/freshclam.conf
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Check for new database 24 times a day</span>
Checks <span class="token number">24</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You can use the <code>clamdtop</code> command-line tool when you've installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ clamdtop

  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ <span class="token variable"><span class="token variable">`</span>/ __ <span class="token variable">`</span></span>__ <span class="token punctuation">\</span>/ __  / __/ __ <span class="token punctuation">\</span>/ __ <span class="token punctuation">\</span>
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
<span class="token punctuation">\</span>___/_/<span class="token punctuation">\</span>__,_/_/ /_/ /_/<span class="token punctuation">\</span>__,_/<span class="token punctuation">\</span>__/<span class="token punctuation">\</span>____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="ubuntu-client" tabindex="-1"><a class="header-anchor" href="#ubuntu-client" aria-hidden="true">#</a> Ubuntu client</h2>
<p>Install ClamAV on Ubuntu 20.04.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> clamav clamav-daemon
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> systemctl stop clamav-daemon.service
client@ubuntu:~$ <span class="token function">sudo</span> systemctl stop clamav-freshclam.service
client@ubuntu:~$ <span class="token function">sudo</span> systemctl disable clamav-daemon.service
client@ubuntu:~$ <span class="token function">sudo</span> systemctl disable clamav-freshclam.service
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Continue to configure the <code>clamdscan</code> which share configuration file with the ClamAV daemon.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /etc/clamav/clamd.conf
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Comment the <code>LocalSocket /var/run/clamav/clamd.ctl</code> line and add the <code>TCPSocket 3310</code> along with the server <code>TCPAddr</code>.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>When running a scan use the <code>multiscan</code> option to enable multihread reading. You can also set it to <code>quiet</code> if you're going to use the <code>log</code> option. You can also create a <code>file list</code> for all the directories to scan.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> clamdscan --multiscan --quiet --file-list<span class="token operator">=</span> --log<span class="token operator">=</span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="windows-client" tabindex="-1"><a class="header-anchor" href="#windows-client" aria-hidden="true">#</a> Windows client</h2>
<p>First download the <a href="http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe" target="_blank" rel="noopener noreferrer">ClamAV Windows Installer<OutboundLink/></a> (version 0.102.4). Right-click the executable file <code>ClamAV-0.102.4.exe</code> and select <code>Run as Administrator</code>.</p>
<img class="zoom-custom-imgs" :src="('/img/clamav/win10client1.png')" alt="Windows 10 setup 1">
<p>Select destination location.</p>
<img class="zoom-custom-imgs" :src="('/img/clamav/win10client2.png')" alt="Windows 10 setup 2">
<p>Proceed to click the <code>Install</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/clamav/win10client3.png')" alt="Windows 10 setup 3">
<p>Once the installation is complete click the <code>Finish</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/clamav/win10client4.png')" alt="Windows 10 setup 4">
<p>Run PowerShell as administrator and make sure you're in the correct path <code>C:\WINDOWS\system32</code>. Navigate to the ClamAV directory by entering <code>cd 'C:\Program Files\ClamAV\</code>.</p>
<img class="zoom-custom-imgs" :src="('/img/clamav/win10client5.png')" alt="Windows 10 setup 5">
<p>Now copy the ClamAV daeomon configuration and rename it to <code>clamd.conf</code> and open the file in WordPad.</p>
<CodeGroup>
<CodeGroupItem title="Windows">
<div class="language-powershell ext-powershell"><pre v-pre class="language-powershell"><code>client@windows:~<span class="token function">PS</span>$ <span class="token function">copy</span> <span class="token punctuation">.</span>\conf_examples\clamd<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>sample <span class="token punctuation">.</span>\clamd<span class="token punctuation">.</span>conf
client@windows:~<span class="token function">PS</span>$ <span class="token function">write</span><span class="token punctuation">.</span>exe <span class="token punctuation">.</span>\clamd<span class="token punctuation">.</span>conf
</code></pre></div></CodeGroupItem>
</CodeGroup>
<img class="zoom-custom-imgs" :src="('/img/clamav/win10client6.png')" alt="Windows 10 setup 6">
<p>Comment the <code>Example</code> line and add the <code>TCPSocket</code> along with the server <code>TCPAddr</code> and save.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">##</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>You may fast test the configuration running a scan in the current directory.</p>
<img class="zoom-custom-imgs" :src="('/img/clamav/win10client7.png')" alt="Windows 10 setup 7">
<p>Running a more complete scan, like during the Ubuntu set up, use the <code>multiscan</code> option to enable multithread reading. Set the output to <code>quiet</code> in case you will use the <code>log</code> option. As priorly mentioned you may also define a <code>file list</code> of all the directories you wish to include in the scan.</p>
<CodeGroup>
<CodeGroupItem title="Windows">
<div class="language-powershell ext-powershell"><pre v-pre class="language-powershell"><code>client@windows:~<span class="token function">PS</span>$ <span class="token punctuation">.</span>\clamdscan<span class="token punctuation">.</span>exe  <span class="token operator">--</span>multiscan <span class="token operator">--</span>quiet <span class="token operator">--</span>file<span class="token operator">-</span>list= <span class="token operator">--</span>log=
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<details class="custom-container details"><summary>UFW Settings</summary>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw default deny incoming
server@ubuntu:~$ <span class="token function">sudo</span> ufw default allow outgoing
server@ubuntu:~$ <span class="token function">sudo</span> ufw allow <span class="token number">22</span>
server@ubuntu:~$ <span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span>
Command may disrupt existing <span class="token function">ssh</span> connections. Proceed with operation <span class="token punctuation">(</span>y<span class="token operator">|</span>n<span class="token punctuation">)</span>? y
Firewall is active and enabled on system startup
</code></pre></div></details>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw allow proto tcp from <span class="token number">192.168</span>.0.2 to any port <span class="token number">3310</span> comment <span class="token string">"ClamAV client 1"</span>
server@ubuntu:~$ <span class="token function">sudo</span> ufw allow proto tcp from <span class="token number">192.168</span>.0.3 to any port <span class="token number">3310</span> comment <span class="token string">"ClamAV client 2"</span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> ufw allow proto tcp from <span class="token number">192.168</span>.0.0/24 to any port <span class="token number">3310</span> comment <span class="token string">"ClamAV clients"</span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>
<p>In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at <a href="https://lists.clamav.net/mailman/listinfo/clamav-users" target="_blank" rel="noopener noreferrer">ClamAV users<OutboundLink/></a>.</p>
<h2 id="enterprise-solutions" tabindex="-1"><a class="header-anchor" href="#enterprise-solutions" aria-hidden="true">#</a> Enterprise solutions <Badge text="non-sponsored" type="tip"/></h2>
<h3 id="atomic-protector" tabindex="-1"><a class="header-anchor" href="#atomic-protector" aria-hidden="true">#</a> Atomic Protector</h3>
<p>Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.</p>
<p><a href="https://atomicorp.com/atomic-protector/" target="_blank" rel="noopener noreferrer">Atomic Protector<OutboundLink/></a></p>
</template>
