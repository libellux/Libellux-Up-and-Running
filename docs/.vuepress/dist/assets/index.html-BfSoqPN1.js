import{_ as u,r as c,o as d,c as p,a as s,d as e,b as a,w as n,e as i}from"./app-Dy_FPZR7.js";const m={},h={id:"clamav-antivirus-server",tabindex:"-1"},g={class:"header-anchor",href:"#clamav-antivirus-server"},b=s("p",null,"ClamAV is an open source (GPL) anti-virus engine used in a variety of situations including email scanning, web scanning, and end point security. It provides a number of utilities including a flexible and scalable multi-threaded daemon, a command line scanner and an advanced tool for automatic database updates.",-1),v={href:"https://www.clamav.net/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},_={href:"https://docs.clamav.net/",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"Setup and configuration have been tested on following OS with version:",-1),y=s("ul",null,[s("li",null,"Ubuntu- 18.04, 20.04, 22.04 (Jammy Jellyfish), Debian 11 (bullseye), Rocky 8 (Green Obsidian), Windows 10, Windows Server 2019"),s("li",null,"ClamAV- 0.102.4, 0.104.0, 0.104.1, 0.105.0, 1.0.0-rc, 1.2.0")],-1),S={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},x=s("img",{src:"https://ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),w=s("h2",{id:"configuration-files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuration-files"},[s("span",null,"Configuration files")])],-1),C=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,'The lines in the "scripts" below has been used for testing and successfully configure ClamAV (do not run the files as a executable script but line by line). You may use the testing guide to install ClamAV or follow our detailed step-by-step tutorial below.')],-1),T={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/ubuntu-22_04_clamav-1.2.0.sh",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/ubuntu_1.0.0-rc.sh",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/ubuntu_0.105.0.sh",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/debian_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/clamav/config/rocky_0.104.1.sh",target:"_blank",rel:"noopener noreferrer"},M=i(`<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites"><span>Prerequisites</span></a></h2><ul><li><code>net-tools</code> (optional)</li></ul><details class="custom-container details"><summary>Dependencies for Ubuntu 22.04</summary><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>build-essential make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev cmake rust-all cargo
</code></pre></div></details><details class="custom-container details"><summary>Dependencies for Debian 11</summary><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind
check libbz2-dev libcurl4-openssl-dev libmilter-dev libjson-c5 libjson-c-dev_0.15-2
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
</code></pre></div></details><details class="custom-container details"><summary>Dependencies for Rocky 8</summary><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>gcc gcc-c++ cmake make python3 python3-pip valgrind
bzip2-devel check-devel libcurl-devel libxml2-devel
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
</code></pre></div></details><h2 id="install-clamav-from-source" tabindex="-1"><a class="header-anchor" href="#install-clamav-from-source"><span>Install ClamAV from source</span></a></h2><p>In this tutorial we&#39;ll install the ClamAV Antivirus Server (<code>192.168.0.1</code>) from source as a stand-alone server with Ubuntu 22.04, Debian 11 or Rocky 8. We&#39;ll be using the <strong>multiscan</strong> option so the more CPU threads the faster your scans will perform. The clients (<code>192.168.0.2</code>, <code>192.168.0.3</code>) will not use the regular <code>clamavscan</code> but rather the <code>clamdscan</code> and listen to the ClamAV Antivirus Server&#39;s TCP socket instead of the local clients unix socket. This approach will also enable us to only keep the ClamAV defintion database up-to-date on the stand-alone server. The clients wont be built from source but rather use already available repository packages (Ubuntu 20.04 and Windows 10).</p>`,7),E=["src"],F=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"For Rocky 8 install Extra Packages for Enterprise Linux (EPEL) and enable PowerTools.")],-1),R=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo yum -y install epel-release && \\
sudo yum -y install dnf-plugins-core && \\
sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm && \\
sudo yum config-manager --set-enabled powertools
`)])])],-1),I=s("p",null,"Once you've installed EPEL and enabled PowerTools (Rocky only) continue to install ClamAV dependencies.",-1),O=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"INFO"),s("p",null,"Our ClamAV release candidate (1.0.0-rc) guide is only available for Ubuntu 22.04.")],-1),U=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
sudo apt-get -y upgrade && \\
sudo apt-get install -y build-essential && \\
sudo apt-get install -y make pkg-config python3 python3-pip python3-pytest valgrind \\
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev \\
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev cmake rust-all cargo
`)])])],-1),N=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
sudo apt-get -y upgrade && \\
sudo apt-get install -y build-essential && \\
sudo apt-get install -y make pkg-config python3 python3-pip python3-pytest valgrind \\
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev \\
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev cmake rust-all cargo
`)])])],-1),z=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
sudo apt-get -y upgrade && \\
sudo apt-get install -y build-essential && \\
sudo apt-get install -y make pkg-config python3 python3-pip python3-pytest valgrind \\
check libbz2-dev libcurl4-openssl-dev libjson-c-dev libmilter-dev \\
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev cmake rust-all cargo
`)])])],-1),B=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
sudo apt-get -y upgrade && \\
sudo apt-get install -y gcc cmake make pkg-config python3 python3-pip python3-pytest valgrind \\
check libbz2-dev libcurl4-openssl-dev libmilter-dev \\
libncurses5-dev libpcre2-dev libssl-dev libxml2-dev zlib1g-dev
`)])])],-1),V=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo yum -y install gcc gcc-c++ cmake make python3 python3-pip valgrind \\
bzip2-devel check-devel libcurl-devel libxml2-devel \\
ncurses-devel openssl-devel pcre2-devel sendmail-devel zlib-devel json-c-devel
`)])])],-1),W=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"Only install libjson-c5 and libjson-c-dev for Debian 11 when compiling ClamAV 0.104.1.")],-1),G=s("p",null,[e("For ClamAV 0.104.1 and Debian 11 proceed to install packages "),s("code",null,"libjson-c5"),e(" and "),s("code",null,"libjson-c-dev"),e(".")],-1),H=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c5_0.15-2_amd64.deb && \\
wget http://ftp.se.debian.org/debian/pool/main/j/json-c/libjson-c-dev_0.15-2_amd64.deb && \\
sudo dpkg -i libjson-c5_0.15-2_amd64.deb && sudo dpkg -i libjson-c-dev_0.15-2_amd64.deb
`)])])],-1),$=s("p",null,"Create ClamAV service group and user.",-1),j=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
`)])])],-1),Y=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
`)])])],-1),q=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
`)])])],-1),K=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
`)])])],-1),J=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo groupadd clamav && sudo useradd -g clamav -s /bin/false -c "Clam Antivirus" clamav
`)])])],-1),X=s("h3",{id:"import-clamav-signing-key",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-clamav-signing-key"},[s("span",null,"Import ClamAV signing key")])],-1),Q={class:"custom-container tip"},Z=s("p",{class:"custom-container-title"},"TIP",-1),ss={href:"https://www.clamav.net/downloads",target:"_blank",rel:"noopener noreferrer"},es=s("p",null,"Create a new .asc file, paste the public key and save.",-1),as=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`touch clamav.asc && nano clamav.asc
`)])])],-1),ns=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`touch clamav.asc && nano clamav.asc
`)])])],-1),ls=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`touch clamav.asc && nano clamav.asc
`)])])],-1),ts=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`touch clamav.asc && nano clamav.asc
`)])])],-1),os=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`touch clamav.asc && nano clamav.asc
`)])])],-1),is=s("p",null,[e("Once you've saved the "),s("code",null,"clamav.asc"),e(" file proceed to import the key.")],-1),cs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --import clamav.asc
`)])])],-1),rs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --import clamav.asc
`)])])],-1),us=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --import clamav.asc
`)])])],-1),ds=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --import clamav.asc
`)])])],-1),ps=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --import clamav.asc
`)])])],-1),ms=i(`<p>You should see that the public key <em>Talos from Cisco Systems Inc.</em> has been imported.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: key 609B024F2B3EDD07: public key &quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot; imported
gpg: Total number processed: 1
gpg:               imported: 1
gpg: no ultimately trusted keys found
</span></code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br></div></div><p>Now lets edit the key.</p>`,3),hs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --edit-key CCE0DFD21EC1A9BF
`)])])],-1),gs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --edit-key 609B024F2B3EDD07
`)])])],-1),bs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --edit-key 609B024F2B3EDD07
`)])])],-1),vs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`gpg --edit-key 609B024F2B3EDD07
`)])])],-1),fs=i(`<p>When you get prompted type <em>trust</em> and select option 5 (I trust ultimately).</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
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
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div></div><h3 id="build-clamav-server" tabindex="-1"><a class="header-anchor" href="#build-clamav-server"><span>Build ClamAV server</span></a></h3><p>Before you build ClamAV download both the source along with the signature to verify its validity.</p>`,4),_s=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`wget https://www.clamav.net/downloads/production/clamav-1.2.0.tar.gz && \\
wget https://www.clamav.net/downloads/production/clamav-1.2.0.tar.gz.sig && \\
gpg --verify clamav-1.2.0.tar.gz.sig clamav-1.2.0.tar.gz
`)])])],-1),ks=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`wget https://www.clamav.net/downloads/production/clamav-1.0.0-rc.tar.gz && \\
wget https://www.clamav.net/downloads/production/clamav-1.0.0-rc.tar.gz.sig && \\
gpg --verify clamav-1.0.0-rc.tar.gz.sig clamav-1.0.0-rc.tar.gz
`)])])],-1),ys=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`wget https://www.clamav.net/downloads/production/clamav-0.105.0.tar.gz && \\
wget https://www.clamav.net/downloads/production/clamav-0.105.0.tar.gz.sig && \\
gpg --verify clamav-0.105.0.tar.gz.sig clamav-0.105.0.tar.gz
`)])])],-1),Ss=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz && \\
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig && \\
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
`)])])],-1),xs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz && \\
wget https://www.clamav.net/downloads/production/clamav-0.104.1.tar.gz.sig && \\
gpg --verify clamav-0.104.1.tar.gz.sig clamav-0.104.1.tar.gz
`)])])],-1),ws=i(`<p>The output should say its a good signature from Cisco.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Wed 01 Sep 2021 05:52:12 PM UTC
gpg:                using RSA key 609B024F2B3EDD07
gpg: Good signature from &quot;Talos (Talos, Cisco Systems Inc.) &lt;research@sourcefire.com&gt;&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div></div><p>Proceed to extract and build.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This may take a while.</p></div>`,4),Cs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -xvzf clamav-1.2.0.tar.gz && \\
cd clamav-1.2.0/ && \\
mkdir -p build && cd build && \\
cmake .. \\
  -D CMAKE_INSTALL_PREFIX=/usr \\
  -D CMAKE_INSTALL_LIBDIR=lib \\
  -D APP_CONFIG_DIRECTORY=/etc/clamav \\
  -D DATABASE_DIRECTORY=/var/lib/clamav \\
  -D ENABLE_JSON_SHARED=OFF && \\
cmake --build . && \\
ctest
`)])])],-1),Ts=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -xvzf clamav-1.0.0-rc.tar.gz && \\
cd clamav-1.0.0-rc/ && \\
mkdir -p build && cd build && \\
cmake .. \\
  -D CMAKE_INSTALL_PREFIX=/usr \\
  -D CMAKE_INSTALL_LIBDIR=lib \\
  -D APP_CONFIG_DIRECTORY=/etc/clamav \\
  -D DATABASE_DIRECTORY=/var/lib/clamav \\
  -D ENABLE_JSON_SHARED=OFF && \\
cmake --build . && \\
ctest
`)])])],-1),As=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -xvzf clamav-0.105.0.tar.gz && \\
cd clamav-0.105.0/ && \\
mkdir -p build && cd build && \\
cmake .. \\
  -D CMAKE_INSTALL_PREFIX=/usr \\
  -D CMAKE_INSTALL_LIBDIR=lib \\
  -D APP_CONFIG_DIRECTORY=/etc/clamav \\
  -D DATABASE_DIRECTORY=/var/lib/clamav \\
  -D ENABLE_JSON_SHARED=OFF && \\
cmake --build . && \\
ctest
`)])])],-1),Ds=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -xvzf clamav-0.104.1.tar.gz && \\
cd clamav-0.104.1/ && \\
mkdir -p build && cd build && \\
cmake .. \\
  -D CMAKE_INSTALL_PREFIX=/usr \\
  -D CMAKE_INSTALL_LIBDIR=lib \\
  -D APP_CONFIG_DIRECTORY=/etc/clamav \\
  -D DATABASE_DIRECTORY=/var/lib/clamav \\
  -D ENABLE_JSON_SHARED=OFF && \\
cmake --build . && \\
ctest
`)])])],-1),Ls=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -xvzf clamav-0.104.1.tar.gz && \\
cd clamav-0.104.1/ && \\
mkdir -p build && cd build && \\
cmake .. \\
  -D CMAKE_INSTALL_PREFIX=/usr \\
  -D CMAKE_INSTALL_LIBDIR=lib \\
  -D APP_CONFIG_DIRECTORY=/etc/clamav \\
  -D DATABASE_DIRECTORY=/var/lib/clamav \\
  -D ENABLE_JSON_SHARED=ON && \\
cmake --build . && \\
ctest
`)])])],-1),Ps=s("p",null,[e("The "),s("code",null,"ctest"),e(" should output the following information.")],-1),Ms=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Test project ~/clamav-1.2.0/build
      Start  1: libclamav
 1/11 Test  #1: libclamav ........................   Passed   17.95 sec
      Start  2: libclamav_valgrind
 2/11 Test  #2: libclamav_valgrind ...............   Passed  159.68 sec
      Start  3: libclamav_rust
 3/11 Test  #3: libclamav_rust ...................   Passed   59.85 sec
      Start  4: clamscan
 4/11 Test  #4: clamscan .........................   Passed    9.90 sec
      Start  5: clamscan_valgrind
 5/11 Test  #5: clamscan_valgrind ................   Passed  272.86 sec
      Start  6: clamd
 6/11 Test  #6: clamd ............................   Passed   23.70 sec
      Start  7: clamd_valgrind
 7/11 Test  #7: clamd_valgrind ...................   Passed  113.01 sec
      Start  8: freshclam
 8/11 Test  #8: freshclam ........................   Passed   43.15 sec
      Start  9: freshclam_valgrind
 9/11 Test  #9: freshclam_valgrind ...............   Passed   80.14 sec
      Start 10: sigtool
10/11 Test #10: sigtool ..........................   Passed    1.32 sec
      Start 11: sigtool_valgrind
11/11 Test #11: sigtool_valgrind .................   Passed   24.31 sec

100% tests passed, 0 tests failed out of 11

Total Test time (real) = 805.88 sec
`)])])],-1),Es=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Test project ~/clamav-1.0.0-rc/build
      Start  1: libclamav
 1/11 Test  #1: libclamav ........................   Passed   17.88 sec
      Start  2: libclamav_valgrind
 2/11 Test  #2: libclamav_valgrind ...............   Passed  162.41 sec
      Start  3: libclamav_rust
 3/11 Test  #3: libclamav_rust ...................   Passed   52.26 sec
      Start  4: clamscan
 4/11 Test  #4: clamscan .........................   Passed    9.07 sec
      Start  5: clamscan_valgrind
 5/11 Test  #5: clamscan_valgrind ................   Passed  264.67 sec
      Start  6: clamd
 6/11 Test  #6: clamd ............................   Passed   21.70 sec
      Start  7: clamd_valgrind
 7/11 Test  #7: clamd_valgrind ...................   Passed   88.80 sec
      Start  8: freshclam
 8/11 Test  #8: freshclam ........................   Passed    2.64 sec
      Start  9: freshclam_valgrind
 9/11 Test  #9: freshclam_valgrind ...............   Passed   66.21 sec
      Start 10: sigtool
10/11 Test #10: sigtool ..........................   Passed    1.18 sec
      Start 11: sigtool_valgrind
11/11 Test #11: sigtool_valgrind .................   Passed    3.60 sec

100% tests passed, 0 tests failed out of 11

Total Test time (real) = 690.45 sec
`)])])],-1),Fs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Test project ~/clamav-0.105.0/build
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
`)])])],-1),Rs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Test project ~/clamav-0.104.1/build
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
`)])])],-1),Is=s("p",null,"Once the test successfully passed proceed to build and install ClamAV.",-1),Os=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cmake --build . --target install
`)])])],-1),Us=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cmake --build . --target install
`)])])],-1),Ns=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cmake --build . --target install
`)])])],-1),zs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cmake --build . --target install
`)])])],-1),Bs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cmake --build . --target install
`)])])],-1),Vs=s("h2",{id:"server-configuration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#server-configuration"},[s("span",null,"Server configuration")])],-1),Ws=s("p",null,[e("When the installation is complete there's example configuration files created by default e.g. "),s("code",null,"/etc/clamav/clamd.conf.sample"),e(". You may read through the sample configuration files to get a better understanding on which options you prefer to enable. Otherwise feel free to use the beneath options and creation of the ClamAV daemon configuration file.")],-1),Gs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/clamd.conf
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
EOF'
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Hs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/clamd.conf
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
EOF'
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),$s=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/clamd.conf
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
EOF'
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),js=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/clamd.conf
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
EOF'
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Ys=s("p",null,[e("Same with ClamAV freshclam there's a sample configuration file created at "),s("code",null,"/etc/clamav/freshclam.conf.sample"),e(". You may also use the following configuration file for freshclam to keep your signature database up-to-date.")],-1),qs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'
`)])])],-1),Ks=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'
`)])])],-1),Js=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'
`)])])],-1),Xs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/clamav/freshclam.conf
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
EOF'
`)])])],-1),Qs=s("p",null,"Before we'll create the system files for both the ClamAV daemon and freshclam create the required directories and adjust the owner permissions.",-1),Zs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir /var/log/clamav/ /var/lib/clamav /var/run/clamav/ && \\
sudo chown clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),se=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir /var/log/clamav/ /var/lib/clamav /var/run/clamav/ && \\
sudo chown clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),ee=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir /var/log/clamav/ /var/lib/clamav /var/run/clamav/ && \\
sudo chown clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),ae=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir /var/log/clamav/ /var/lib/clamav /var/run/clamav/ && \\
sudo chown clamav:clamav /var/log/clamav/ /var/lib/clamav /var/run/clamav/
`)])])],-1),ne=s("p",null,"Next create the service file for freshclam.",-1),le=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"If user wants it run from cron, dont start the daemon.")]),e(`
`),s("span",{class:"token output"},`ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),te=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"If user wants it run from cron, dont start the daemon.")]),e(`
`),s("span",{class:"token output"},`ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),oe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"If user wants it run from cron, dont start the daemon.")]),e(`
`),s("span",{class:"token output"},`ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),ie=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-freshclam.service
[Unit]
Description=ClamAV virus database updater
Documentation=man:freshclam(1) man:freshclam.conf(5) https://www.clamav.net/documents
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"If user wants it run from cron, dont start the daemon.")]),e(`
`),s("span",{class:"token output"},`ConditionPathExists=!/etc/cron.d/clamav-freshclam
Wants=network-online.target
After=network-online.target

[Service]
User=clamav
Group=clamav
ExecStart=/usr/bin/freshclam -d --foreground=true
StandardOutput=syslog

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),ce=s("p",null,"Proceed to create the ClamAV daemon service file.",-1),re=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},[e("Check "),s("span",{class:"token keyword"},"for"),e(" database existence")])]),e(`
`),s("span",{class:"token output"},`ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"Reload the database")]),e(`
`),s("span",{class:"token output"},`ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),ue=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},[e("Check "),s("span",{class:"token keyword"},"for"),e(" database existence")])]),e(`
`),s("span",{class:"token output"},`ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"Reload the database")]),e(`
`),s("span",{class:"token output"},`ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),de=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},[e("Check "),s("span",{class:"token keyword"},"for"),e(" database existence")])]),e(`
`),s("span",{class:"token output"},`ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"Reload the database")]),e(`
`),s("span",{class:"token output"},`ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),pe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo bash -c 'cat << EOF > /etc/systemd/system/clamav-daemon.service
[Unit]
Description=Clam AntiVirus userspace daemon
Documentation=man:clamd(8) man:clamd.conf(5) https://www.clamav.net/documents/
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},[e("Check "),s("span",{class:"token keyword"},"for"),e(" database existence")])]),e(`
`),s("span",{class:"token output"},`ConditionPathExistsGlob=/var/lib/clamav/main.{c[vl]d,inc}
ConditionPathExistsGlob=/var/lib/clamav/daily.{c[vl]d,inc}

[Service]
User=clamav
Group=clamav
ExecStart=/usr/sbin/clamd --foreground=true
`),s("span",{class:"token command"},[s("span",{class:"token shell-symbol important"},"#"),e(),s("span",{class:"token bash language-bash"},"Reload the database")]),e(`
`),s("span",{class:"token output"},`ExecReload=/bin/kill -USR2 $MAINPID
StandardOutput=syslog
TimeoutStartSec=420

[Install]
WantedBy=multi-user.target
EOF'
`)])])],-1),me=s("p",null,"To enable the created startup scripts, reload the system control daemon.",-1),he=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),ge=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),be=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),ve=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),fe=s("p",null,"Once you've reloaded the daemon proceed to enable each of the services.",-1),_e=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable clamav-freshclam.service
sudo systemctl enable clamav-daemon.service
`)])])],-1),ke=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable clamav-freshclam.service
sudo systemctl enable clamav-daemon.service
`)])])],-1),ye=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable clamav-freshclam.service
sudo systemctl enable clamav-daemon.service
`)])])],-1),Se=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable clamav-freshclam.service
sudo systemctl enable clamav-daemon.service
`)])])],-1),xe=s("p",null,"Next start each service.",-1),we=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"If the ClamAV daemon wont start just restart the service once freshclam downloaded the latest virus definitions.")],-1),Ce=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start clamav-freshclam.service
sudo systemctl start clamav-daemon.service
`)])])],-1),Te=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start clamav-freshclam.service
sudo systemctl start clamav-daemon.service
`)])])],-1),Ae=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start clamav-freshclam.service
sudo systemctl start clamav-daemon.service
`)])])],-1),De=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start clamav-freshclam.service
sudo systemctl start clamav-daemon.service
`)])])],-1),Le=s("p",null,"To check that your ClamAV daemon is listening to both the local unix socket and the TCP port 3310 run the following command.",-1),Pe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`netstat -lnp | grep -E "(clam|3310)"
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),Me=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`netstat -lnp | grep -E "(clam|3310)"
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),Ee=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`netstat -lnp | grep -E "(clam|3310)"
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),Fe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`netstat -lnp | grep -E "(clam|3310)"
(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     320610   -                    /var/run/clamav/clamd.socket
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),Re=s("h2",{id:"install-from-repository",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-from-repository"},[s("span",null,"Install from repository")])],-1),Ie=s("p",null,"You may also install ClamAV Antivirus Server directly from the repository. Download the ClamAV scanner and the ClamAV daemon.",-1),Oe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"apt-get"),e(),s("span",{class:"token function"},"install"),e(" clamav clamav-daemon")])]),e(`
`)])])],-1),Ue=s("p",null,"Proceed to stop freshclam the automatic database update tool for ClamAV.",-1),Ne=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" systemctl stop clamav-freshclam")])]),e(`
`)])])],-1),ze=s("p",null,"Next run freshclam to update to the latest definition database.",-1),Be=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" freshclam")])]),e(`
`)])])],-1),Ve=s("p",null,[e("Once you've ran the freshclam command you can check the log "),s("code",null,"/var/log/clamav/freshclam.log"),e(" for the current status and then start freshclam again.")],-1),We=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"cat"),e(" /var/log/clamav/freshclam.log")])]),e(`
`),s("span",{class:"token output"},`Sat Apr 10 17:51:37 2021 -> daily.cvd database is up to date (version: 26136, sigs: 3969743, f-level: 63, builder: raynman)
Sat Apr 10 17:51:37 2021 -> main.cvd database is up to date (version: 59, sigs: 4564902, f-level: 60, builder: sigmgr)
Sat Apr 10 17:51:37 2021 -> bytecode.cvd database is up to date (version: 333, sigs: 92, f-level: 63, builder: awillia2)
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" systemctl start clamav-freshclam")])]),e(`
`)])]),s("div",{class:"highlight-lines"},[s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," ")])],-1),Ge=s("p",null,"Now we'll update the ClamAV daemon configuration to make the server listen to TCP socket 3310.",-1),He=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"nano"),e(" /etc/clamav/clamd.conf")])]),e(`
`)])])],-1),$e=i(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>You will need to comment out the line &quot;Example&quot; in the clamd.conf configuration file, else the ClamAV daemon will consider the configuration invalid.</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Restart ClamAV to apply the new changes.</p>`,3),je=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" systemctl restart clamav-daemon.service")])]),e(`
`)])])],-1),Ye=s("p",null,[e("To confirm that ClamAV listen to TCP port 3310 run the command below (requires "),s("code",null,"net-tools"),e(").")],-1),qe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"netstat"),e(),s("span",{class:"token parameter variable"},"-lnp"),e(),s("span",{class:"token operator"},"|"),e(),s("span",{class:"token function"},"grep"),e(),s("span",{class:"token parameter variable"},"-E"),e(),s("span",{class:"token string"},'"(clam|3310)"')])]),e(`
`),s("span",{class:"token output"},`(Not all processes could be identified, non-owned process info
 will not be shown, you would have to be root to see it all.)
tcp        0      0 0.0.0.0:3310            0.0.0.0:*               LISTEN      -
tcp6       0      0 :::3310                 :::*                    LISTEN      -
unix  2      [ ACC ]     STREAM     LISTENING     73674    -                    /var/run/clamav/clamd.ctl
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),Ke=s("p",null,[e("Make sure that the firewall settings are in place and that the correct ports are opened for any ClamAV client. See the "),s("a",{href:"#firewall-settings"},"Firewall settings"),e(" section for more information.")],-1),Je=s("h3",{id:"keep-virus-definitions-up-to-date",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#keep-virus-definitions-up-to-date"},[s("span",null,"Keep virus definitions up-to-date")])],-1),Xe=s("p",null,"To keep the ClamAV Antivirus Server definition database up-to-date you can configure freshclam when to check for new definitions. The default is set to 24 times per day. If you want to edit this you can define the times per day for freshclam to check for new updates.",-1),Qe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"nano"),e(" /etc/clamav/freshclam.conf")])]),e(`
`)])])],-1),Ze=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Check for new database 24 times a day</span>
Checks <span class="token number">24</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use the <code>clamdtop</code> command-line tool when you&#39;ve installed ClamAV on your clients. This tool enables you to monitor the ClamAV daemon performance and client connections during scan.</p>`,2),sa=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},"clamdtop")]),e(`

`),s("span",{class:"token output"},`  _____/ /___ _____ ___  ____/ / /_____  ____
 / ___/ / __ \`/ __ \`__ \\/ __  / __/ __ \\/ __ \\
/ /__/ / /_/ / / / / / / /_/ / /_/ /_/ / /_/ /
\\___/_/\\__,_/_/ /_/ /_/\\__,_/\\__/\\____/ .___/
                                     /_/
Connecting to: /var/run/clamav/clamd.ctl
`)])])],-1),ea=s("h2",{id:"linux-client",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#linux-client"},[s("span",null,"Linux client")])],-1),aa=s("p",null,"Install ClamAV on Ubuntu 20.04.",-1),na=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"apt-get"),e(),s("span",{class:"token function"},"install"),e(" clamav clamav-daemon")])]),e(`
`)])])],-1),la=s("p",null,"Next stop and disable the ClamAV daemon (as we will forward the traffic to the ClamAV server). The virus definitions database is managed on the server so you need to stop and disable the freshclam service as well.",-1),ta=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" systemctl stop clamav-daemon.service")])]),e(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" systemctl stop clamav-freshclam.service")])]),e(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" systemctl disable clamav-daemon.service")])]),e(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" systemctl disable clamav-freshclam.service")])]),e(`
`)])])],-1),oa=s("p",null,[e("Continue to configure the "),s("code",null,"clamdscan"),e(" which share configuration file with the ClamAV daemon.")],-1),ia=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"nano"),e(" /etc/clamav/clamd.conf")])]),e(`
`)])])],-1),ca=i(`<p>Comment the <code>LocalSocket /var/run/clamav/clamd.ctl</code> line and add the <code>TCPSocket 3310</code> along with the server <code>TCPAddr</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#Automatically Generated by clamav-daemon postinst</span>
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
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When running a scan use the <code>multiscan</code> option to enable multihread reading. You can also set it to <code>quiet</code> if you&#39;re going to use the <code>log</code> option. You can also create a <code>file list</code> for all the directories to scan.</p>`,3),ra=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"client@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" clamdscan "),s("span",{class:"token parameter variable"},"--multiscan"),e(),s("span",{class:"token parameter variable"},"--quiet"),e(" --file-list"),s("span",{class:"token operator"},"="),e(),s("span",{class:"token parameter variable"},"--log"),s("span",{class:"token operator"},"=")])]),e(`
`)])])],-1),ua=s("h2",{id:"windows-client",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows-client"},[s("span",null,"Windows client")])],-1),da={href:"http://www.clamav.net/downloads/production/ClamAV-0.102.4.exe",target:"_blank",rel:"noopener noreferrer"},pa=s("code",null,"ClamAV-0.102.4.exe",-1),ma=s("code",null,"Run as Administrator",-1),ha=["src"],ga=s("p",null,"Select destination location.",-1),ba=["src"],va=s("p",null,[e("Proceed to click the "),s("code",null,"Install"),e(" button.")],-1),fa=["src"],_a=s("p",null,[e("Once the installation is complete click the "),s("code",null,"Finish"),e(" button.")],-1),ka=["src"],ya=s("p",null,[e("Run PowerShell as administrator and make sure you're in the correct path "),s("code",null,"C:\\WINDOWS\\system32"),e(". Navigate to the ClamAV directory by entering "),s("code",null,"cd 'C:\\Program Files\\ClamAV\\"),e(".")],-1),Sa=["src"],xa=s("p",null,[e("Now copy the ClamAV daeomon configuration and rename it to "),s("code",null,"clamd.conf"),e(" and open the file in WordPad.")],-1),wa=s("div",{class:"language-powershell","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[e("client@windows:~"),s("span",{class:"token function"},"PS"),e("$ "),s("span",{class:"token function"},"copy"),e(),s("span",{class:"token punctuation"},"."),e("\\conf_examples\\clamd"),s("span",{class:"token punctuation"},"."),e("conf"),s("span",{class:"token punctuation"},"."),e("sample "),s("span",{class:"token punctuation"},"."),e("\\clamd"),s("span",{class:"token punctuation"},"."),e(`conf
client@windows:~`),s("span",{class:"token function"},"PS"),e("$ "),s("span",{class:"token function"},"write"),s("span",{class:"token punctuation"},"."),e("exe "),s("span",{class:"token punctuation"},"."),e("\\clamd"),s("span",{class:"token punctuation"},"."),e(`conf
`)])])],-1),Ca=["src"],Ta=i(`<p>Comment the <code>Example</code> line and add the <code>TCPSocket</code> along with the server <code>TCPAddr</code> and save.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">##</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may fast test the configuration running a scan in the current directory.</p>`,3),Aa=["src"],Da=s("p",null,[e("Running a more complete scan, like during the Ubuntu set up, use the "),s("code",null,"multiscan"),e(" option to enable multithread reading. Set the output to "),s("code",null,"quiet"),e(" in case you will use the "),s("code",null,"log"),e(" option. As priorly mentioned you may also define a "),s("code",null,"file list"),e(" of all the directories you wish to include in the scan.")],-1),La=s("div",{class:"language-powershell","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[e("client@windows:~"),s("span",{class:"token function"},"PS"),e("$ "),s("span",{class:"token punctuation"},"."),e("\\clamdscan"),s("span",{class:"token punctuation"},"."),e("exe  "),s("span",{class:"token operator"},"--"),e("multiscan "),s("span",{class:"token operator"},"--"),e("quiet "),s("span",{class:"token operator"},"--"),e("file-list= "),s("span",{class:"token operator"},"--"),e(`log=
`)])])],-1),Pa=s("h2",{id:"firewall-settings",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#firewall-settings"},[s("span",null,"Firewall settings")])],-1),Ma={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},Ea=i(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw default deny incoming</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw default allow outgoing</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw allow <span class="token number">22</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw <span class="token builtin class-name">enable</span></span></span>
<span class="token output">Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</span></code></pre></div></details>`,1),Fa=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),e(".0.2 to any port "),s("span",{class:"token number"},"3310"),e(" comment "),s("span",{class:"token string"},'"ClamAV client 1"')])]),e(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),e(".0.3 to any port "),s("span",{class:"token number"},"3310"),e(" comment "),s("span",{class:"token string"},'"ClamAV client 2"')])]),e(`
`)])])],-1),Ra=s("p",null,"If you want to allow TCP connection to port 3310 for the entire subnet apply the following UFW rule.",-1),Ia=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" ufw allow proto tcp from "),s("span",{class:"token number"},"192.168"),e(".0.0/24 to any port "),s("span",{class:"token number"},"3310"),e(" comment "),s("span",{class:"token string"},'"ClamAV clients"')])]),e(`
`)])])],-1),Oa=s("h2",{id:"troubleshooting",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#troubleshooting"},[s("span",null,"Troubleshooting")])],-1),Ua={href:"https://lists.clamav.net/mailman/listinfo/clamav-users",target:"_blank",rel:"noopener noreferrer"},Na={id:"enterprise-solutions",tabindex:"-1"},za={class:"header-anchor",href:"#enterprise-solutions"},Ba=s("h3",{id:"atomic-protector",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#atomic-protector"},[s("span",null,"Atomic Protector")])],-1),Va=s("p",null,"Atomic Protector, is an upgrade from Atomic Secured Linux and Atomic Workload Protection products, provides maximum security and compliance for systems in on-premise, cloud and hybrid environments all in a single pane of glass you can run anywhere. Features include compliance and vulnerability management, reporting, intrusion prevention, file integrity monitoring, memory protection and exploit prevention, vulnerability shielding, web application and API protection, application control, and more.",-1),Wa={href:"https://atomicorp.com/atomic-protector/",target:"_blank",rel:"noopener noreferrer"};function Ga(Ha,$a){const r=c("Badge"),o=c("ExternalLinkIcon"),l=c("CodeGroupItem"),t=c("CodeGroup");return d(),p("div",null,[s("h1",h,[s("a",g,[s("span",null,[e("ClamAV Antivirus Server "),a(r,{text:"Rev 5",type:"tip"})])])]),b,s("p",null,[s("a",v,[e("ClamAV website"),a(o)]),e(),s("a",f,[e("Source code"),a(o)]),e(),s("a",_,[e("Offical docs"),a(o)])]),k,y,s("p",null,[s("a",S,[x,a(o)])]),w,C,s("ul",null,[s("li",null,[s("a",T,[e("Ubuntu 22.04, ClamAV 1.2.0"),a(o)])]),s("li",null,[s("a",A,[e("Ubuntu 22.04, ClamAV 1.0.0-rc"),a(o)])]),s("li",null,[s("a",D,[e("Ubuntu 22.04, ClamAV 0.105.0"),a(o)])]),s("li",null,[s("a",L,[e("Debian 11, ClamAV 0.104.1"),a(o)])]),s("li",null,[s("a",P,[e("Rocky 8, ClamAV 0.104.1"),a(o)])])]),M,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/clamav_diagram.jpg",alt:"ClamAV Antivirus Server Diagram"},null,8,E),F,a(t,null,{default:n(()=>[a(l,{title:"Rocky"},{default:n(()=>[R]),_:1})]),_:1}),I,O,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[U]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[N]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[z]),_:1}),a(l,{title:"Debian"},{default:n(()=>[B]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[V]),_:1})]),_:1}),W,G,a(t,null,{default:n(()=>[a(l,{title:"Debian"},{default:n(()=>[H]),_:1})]),_:1}),$,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[j]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[Y]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[q]),_:1}),a(l,{title:"Debian"},{default:n(()=>[K]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[J]),_:1})]),_:1}),X,s("div",Q,[Z,s("p",null,[e("You can find the public ClamAV key "),s("a",ss,[e("here"),a(o)]),e(" under Talos PGP Public Key.")])]),es,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[as]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[ns]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[ls]),_:1}),a(l,{title:"Debian"},{default:n(()=>[ts]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[os]),_:1})]),_:1}),is,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[cs]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[rs]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[us]),_:1}),a(l,{title:"Debian"},{default:n(()=>[ds]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[ps]),_:1})]),_:1}),ms,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[hs]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[gs]),_:1}),a(l,{title:"Debian"},{default:n(()=>[bs]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[vs]),_:1})]),_:1}),fs,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[_s]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[ks]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[ys]),_:1}),a(l,{title:"Debian"},{default:n(()=>[Ss]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[xs]),_:1})]),_:1}),ws,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[Cs]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[Ts]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[As]),_:1}),a(l,{title:"Debian"},{default:n(()=>[Ds]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[Ls]),_:1})]),_:1}),Ps,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[Ms]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[Es]),_:1}),a(l,{title:"0.105.0"},{default:n(()=>[Fs]),_:1}),a(l,{title:"0.104.1"},{default:n(()=>[Rs]),_:1})]),_:1}),Is,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[Os]),_:1}),a(l,{title:"1.0.0-rc"},{default:n(()=>[Us]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[Ns]),_:1}),a(l,{title:"Debian"},{default:n(()=>[zs]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[Bs]),_:1})]),_:1}),Vs,Ws,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[Gs]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[Hs]),_:1}),a(l,{title:"Debian"},{default:n(()=>[$s]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[js]),_:1})]),_:1}),Ys,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[qs]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[Ks]),_:1}),a(l,{title:"Debian"},{default:n(()=>[Js]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[Xs]),_:1})]),_:1}),Qs,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[Zs]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[se]),_:1}),a(l,{title:"Debian"},{default:n(()=>[ee]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[ae]),_:1})]),_:1}),ne,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[le]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[te]),_:1}),a(l,{title:"Debian"},{default:n(()=>[oe]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[ie]),_:1})]),_:1}),ce,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[re]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[ue]),_:1}),a(l,{title:"Debian"},{default:n(()=>[de]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[pe]),_:1})]),_:1}),me,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[he]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[ge]),_:1}),a(l,{title:"Debian"},{default:n(()=>[be]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[ve]),_:1})]),_:1}),fe,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[_e]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[ke]),_:1}),a(l,{title:"Debian"},{default:n(()=>[ye]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[Se]),_:1})]),_:1}),xe,we,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu 22.04"},{default:n(()=>[Ce]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[Te]),_:1}),a(l,{title:"Debian"},{default:n(()=>[Ae]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[De]),_:1})]),_:1}),Le,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[Pe]),_:1}),a(l,{title:"Ubuntu"},{default:n(()=>[Me]),_:1}),a(l,{title:"Debian"},{default:n(()=>[Ee]),_:1}),a(l,{title:"Rocky"},{default:n(()=>[Fe]),_:1})]),_:1}),Re,Ie,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[Oe]),_:1})]),_:1}),Ue,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[Ne]),_:1})]),_:1}),ze,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[Be]),_:1})]),_:1}),Ve,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[We]),_:1})]),_:1}),Ge,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[He]),_:1})]),_:1}),$e,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[je]),_:1})]),_:1}),Ye,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[qe]),_:1})]),_:1}),Ke,Je,Xe,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[Qe]),_:1})]),_:1}),Ze,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[sa]),_:1})]),_:1}),ea,aa,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[na]),_:1})]),_:1}),la,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[ta]),_:1})]),_:1}),oa,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[ia]),_:1})]),_:1}),ca,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[ra]),_:1})]),_:1}),ua,s("p",null,[e("First download the "),s("a",da,[e("ClamAV Windows Installer"),a(o)]),e(" (version 0.102.4). Right-click the executable file "),pa,e(" and select "),ma,e(".")]),s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client1.png",alt:"Windows 10 setup 1"},null,8,ha),ga,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client2.png",alt:"Windows 10 setup 2"},null,8,ba),va,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client3.png",alt:"Windows 10 setup 3"},null,8,fa),_a,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client4.png",alt:"Windows 10 setup 4"},null,8,ka),ya,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client5.png",alt:"Windows 10 setup 5"},null,8,Sa),xa,a(t,null,{default:n(()=>[a(l,{title:"Windows"},{default:n(()=>[wa]),_:1})]),_:1}),s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client6.png",alt:"Windows 10 setup 6"},null,8,Ca),Ta,s("img",{class:"zoom-custom-imgs",src:"/img/clamav/win10client7.png",alt:"Windows 10 setup 7"},null,8,Aa),Da,a(t,null,{default:n(()=>[a(l,{title:"Windows"},{default:n(()=>[La]),_:1})]),_:1}),Pa,s("p",null,[e("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),s("a",Ma,[e("here"),a(o)]),e(".")]),Ea,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[Fa]),_:1})]),_:1}),Ra,a(t,null,{default:n(()=>[a(l,{title:"Ubuntu"},{default:n(()=>[Ia]),_:1})]),_:1}),Oa,s("p",null,[e("In case you'll need help troubleshooting or support for ClamAV you can sign up for their mailing list at "),s("a",Ua,[e("ClamAV users"),a(o)]),e(".")]),s("h2",Na,[s("a",za,[s("span",null,[e("Enterprise solutions "),a(r,{text:"non-sponsored",type:"tip"})])])]),Ba,Va,s("p",null,[s("a",Wa,[e("Atomic Protector"),a(o)])])])}const Ya=u(m,[["render",Ga],["__file","index.html.vue"]]),qa=JSON.parse('{"path":"/clamav/","title":"ClamAV Antivirus Server","lang":"en-US","frontmatter":{"lang":"en-US","title":"ClamAV Antivirus Server","description":"ClamAV is an open source antivirus engine for detecting trojans, viruses, malware & other malicious threats.","head":[["link",{"rel":"canonical","href":"https://wwww.libellux.com/clamav/"}]]},"headers":[{"level":2,"title":"Configuration files","slug":"configuration-files","link":"#configuration-files","children":[]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Install ClamAV from source","slug":"install-clamav-from-source","link":"#install-clamav-from-source","children":[{"level":3,"title":"Import ClamAV signing key","slug":"import-clamav-signing-key","link":"#import-clamav-signing-key","children":[]},{"level":3,"title":"Build ClamAV server","slug":"build-clamav-server","link":"#build-clamav-server","children":[]}]},{"level":2,"title":"Server configuration","slug":"server-configuration","link":"#server-configuration","children":[]},{"level":2,"title":"Install from repository","slug":"install-from-repository","link":"#install-from-repository","children":[{"level":3,"title":"Keep virus definitions up-to-date","slug":"keep-virus-definitions-up-to-date","link":"#keep-virus-definitions-up-to-date","children":[]}]},{"level":2,"title":"Linux client","slug":"linux-client","link":"#linux-client","children":[]},{"level":2,"title":"Windows client","slug":"windows-client","link":"#windows-client","children":[]},{"level":2,"title":"Firewall settings","slug":"firewall-settings","link":"#firewall-settings","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]},{"level":2,"title":"Enterprise solutions","slug":"enterprise-solutions","link":"#enterprise-solutions","children":[{"level":3,"title":"Atomic Protector","slug":"atomic-protector","link":"#atomic-protector","children":[]}]}],"git":{"updatedTime":1696786775000,"contributors":[{"name":"Libellux","email":"fredrik@libellux.com","commits":31},{"name":"Fredrik Hilmersson","email":"fredrik@libellux.com","commits":4}]},"filePathRelative":"clamav/README.md"}');export{Ya as comp,qa as data};
