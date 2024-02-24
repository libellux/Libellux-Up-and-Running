import{_ as u,r,o as g,c as p,a as s,d as n,b as e,w as t,e as i}from"./app-DE0HZumr.js";const h={},_={id:"greenbone-vulnerability-manager",tabindex:"-1"},m={class:"header-anchor",href:"#greenbone-vulnerability-manager"},v=s("p",null,"Greenbone is the world's most used open source vulnerability management provider. Their mission is to help you detect vulnerabilities before they can be exploited - reducing the risk and impact of cyberattacks. OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.",-1),b={href:"https://www.greenbone.net/en/vulnerability-management/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.openvas.org/",target:"_blank",rel:"noopener noreferrer"},R={href:"https://github.com/greenbone",target:"_blank",rel:"noopener noreferrer"},I={href:"https://greenbone.github.io/docs/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},E=s("img",{src:"https://ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),k=s("h2",{id:"configuration-files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuration-files"},[s("span",null,"Configuration files")])],-1),D=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"These files below have been used for testing and successfully configured Greenbone Vulnerability Manager. (Do not run these files as executable scripts).")],-1),y={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/kali-2023_3-GVM-22.4.x.sh",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu-22_04_GVM-22.4.x.sh",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu-22_04_GVM-22.4.0.sh",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu-20_04_GVM-22.4.0.sh",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.5.sh",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.4.sh",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.3.sh",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.2.sh",target:"_blank",rel:"noopener noreferrer"},x=i('<h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System requirements</span></a></h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>These minimum system requirements (for VMware ESXi) are not official recommendations but are used during the testing and building of Greenbone Vulnerability Manager (GVM) from source.</p></div><ul><li>CPU Cores: 2</li><li>Memory: 4 GB RAM</li><li>Free space: 20 GB</li></ul><h2 id="install-gvm-22-4-from-source" tabindex="-1"><a class="header-anchor" href="#install-gvm-22-4-from-source"><span>Install GVM 22.4 from source</span></a></h2><p>We&#39;ll first update our system and then install the prerequisites for GVM.</p>',5),G=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
sudo apt-get -y upgrade && \\
sudo apt-get install -y build-essential && \\
sudo apt-get install -y cmake pkg-config gcc-mingw-w64 \\
libgnutls28-dev libxml2-dev libssh-gcrypt-dev libunistring-dev \\
libldap2-dev libgcrypt20-dev libpcap-dev libglib2.0-dev libgpgme-dev libradcli-dev libjson-glib-dev \\
libksba-dev libical-dev libpq-dev libsnmp-dev libpopt-dev libnet1-dev gnupg gnutls-bin \\
libmicrohttpd-dev redis-server libhiredis-dev openssh-client xsltproc nmap \\
bison postgresql postgresql-server-dev-all smbclient fakeroot sshpass wget \\
heimdal-dev dpkg rsync zip rpm nsis socat libbsd-dev snmp uuid-dev curl gpgsm \\
python3 python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil python3-impacket \\
python3-setuptools python3-packaging python3-wrapt python3-cffi python3-redis python3-gnupg \\
xmlstarlet texlive-fonts-recommended texlive-latex-extra perl-base xml-twig-tools \\
libpaho-mqtt-dev python3-paho-mqtt mosquitto xmltoman doxygen graphviz
`)])])],-1),C=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
sudo apt-get -y upgrade && \\
sudo apt-get install -y build-essential && \\
sudo apt-get install -y cmake pkg-config gcc-mingw-w64 \\
libgnutls28-dev libxml2-dev libssh-gcrypt-dev libunistring-dev \\
libldap2-dev libgcrypt20-dev libpcap-dev libglib2.0-dev libgpgme-dev libradcli-dev libjson-glib-dev \\
libksba-dev libical-dev libpq-dev libsnmp-dev libpopt-dev libnet1-dev gnupg gnutls-bin \\
libmicrohttpd-dev redis-server libhiredis-dev openssh-client xsltproc nmap \\
bison postgresql postgresql-server-dev-all smbclient fakeroot sshpass wget \\
heimdal-dev dpkg rsync zip rpm nsis socat libbsd-dev snmp uuid-dev curl gpgsm \\
python3 python3-paramiko python3-lxml python3-defusedxml python3-pip python3-psutil python3-impacket \\
python3-setuptools python3-packaging python3-wrapt python3-cffi python3-redis python3-gnupg \\
xmlstarlet texlive-fonts-recommended texlive-latex-extra perl-base xml-twig-tools \\
libpaho-mqtt-dev python3-paho-mqtt mosquitto xmltoman doxygen
`)])])],-1),w=s("h3",{id:"set-up-gvm-with-user-defined-installation-paths",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#set-up-gvm-with-user-defined-installation-paths"},[s("span",null,"Set up GVM with user-defined installation paths")])],-1),T=s("p",null,"Create the GVM user and add it to the sudoers group without requiring login. Additionally, add your current sudo user to the GVM group so you are permitted to run gvmd.",-1),M=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"INFO"),s("p",null,"Kali Linux already includes a pre-made user and group for GVM.")],-1),P=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo useradd -r -M -U -G sudo -s /usr/sbin/nologin gvm && \\
sudo usermod -aG gvm $USER && su $USER
`)])])],-1),B=s("p",null,"Next, define the base, source, build, and installation directories.",-1),z=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PATH=$PATH:/usr/local/sbin && export INSTALL_PREFIX=/usr/local && \\
export SOURCE_DIR=$HOME/source && mkdir -p $SOURCE_DIR && \\
export BUILD_DIR=$HOME/build && mkdir -p $BUILD_DIR && \\
export INSTALL_DIR=$HOME/install && mkdir -p $INSTALL_DIR
`)])])],-1),F=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PATH=$PATH:/usr/local/sbin && export INSTALL_PREFIX=/usr/local && \\
export SOURCE_DIR=$HOME/source && mkdir -p $SOURCE_DIR && \\
export BUILD_DIR=$HOME/build && mkdir -p $BUILD_DIR && \\
export INSTALL_DIR=$HOME/install && mkdir -p $INSTALL_DIR
`)])])],-1),K=s("h3",{id:"import-gvm-signing-key",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-gvm-signing-key"},[s("span",null,"Import GVM signing key")])],-1),q=s("p",null,"Download the signing key from Greenbone community to validate the integrity of the source files.",-1),H=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -f -L https://www.greenbone.net/GBCommunitySigningKey.asc -o /tmp/GBCommunitySigningKey.asc && \\
gpg --import /tmp/GBCommunitySigningKey.asc
`)])])],-1),W=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -f -L https://www.greenbone.net/GBCommunitySigningKey.asc -o /tmp/GBCommunitySigningKey.asc && \\
gpg --import /tmp/GBCommunitySigningKey.asc
`)])])],-1),Y=s("p",null,"Edit the GVM signing key to establish ultimate trust.",-1),X=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt
`)])])],-1),Q=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt
`)])])],-1),j=s("h3",{id:"build-gvm-libraries",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-gvm-libraries"},[s("span",null,"Build GVM libraries")])],-1),J={href:"https://github.com/greenbone/gvm-libs",target:"_blank",rel:"noopener noreferrer"},Z=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVM_LIBS_VERSION=22.8.0 && \\
curl -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v$GVM_LIBS_VERSION.tar.gz -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvm-libs/releases/download/v$GVM_LIBS_VERSION/gvm-libs-v$GVM_LIBS_VERSION.tar.gz.asc -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz
`)])])],-1),ss=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVM_LIBS_VERSION=22.8.0 && \\
curl -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v$GVM_LIBS_VERSION.tar.gz -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvm-libs/releases/download/v$GVM_LIBS_VERSION/gvm-libs-v$GVM_LIBS_VERSION.tar.gz.asc -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz
`)])])],-1),es=i(`<p>Ensure that the output confirms the signature from the Greenbone Community Feed is valid.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 12:11:44 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div></div></div><p>Before proceeding with the installation of GVM libraries on Ubuntu 20.04, you&#39;ll need to install the Paho C client.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Skip this step if you&#39;re running Ubuntu 21.04 or a later version.</p></div>`,4),ns=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -f -L https://github.com/eclipse/paho.mqtt.c/archive/refs/tags/v1.3.10.tar.gz -o $SOURCE_DIR/paho-client-1.3.10.tar.gz && \\
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/paho-client-1.3.10.tar.gz && \\
mkdir -p $BUILD_DIR/paho-client && cd $BUILD_DIR/paho-client && \\
cmake $SOURCE_DIR/paho.mqtt.c-1.3.10 \\
  -DPAHO_WITH_SSL=ON && \\
sudo cmake --build $BUILD_DIR/paho-client --target install
`)])])],-1),ts=s("p",null,"Once you've confirmed that the signature is valid, proceed to install the GVM libraries.",-1),as=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gvm-libs && cd $BUILD_DIR/gvm-libs && \\
cmake $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),ls=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gvm-libs && cd $BUILD_DIR/gvm-libs && \\
cmake $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),os=s("h3",{id:"build-greenbone-vulnerability-manager",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-greenbone-vulnerability-manager"},[s("span",null,"Build Greenbone Vulnerability Manager")])],-1),is={href:"https://github.com/greenbone/gvmd",target:"_blank",rel:"noopener noreferrer"},rs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVMD_VERSION=23.2.0 && \\
curl -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v$GVMD_VERSION.tar.gz -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvmd/releases/download/v$GVMD_VERSION/gvmd-$GVMD_VERSION.tar.gz.asc -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz
`)])])],-1),ds=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVMD_VERSION=23.2.0 && \\
curl -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v$GVMD_VERSION.tar.gz -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvmd/releases/download/v$GVMD_VERSION/gvmd-$GVMD_VERSION.tar.gz.asc -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz
`)])])],-1),cs=i(`<p>Ensure that the signature from the Greenbone Community Feed is valid.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 02:28:53 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div></div><p>Extract the Greenbone Vulnerability Manager and proceed with the installation.</p>`,3),us=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gvmd && cd $BUILD_DIR/gvmd && \\
cmake $SOURCE_DIR/gvmd-$GVMD_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DLOCALSTATEDIR=/var \\
  -DSYSCONFDIR=/etc \\
  -DGVM_DATA_DIR=/var \\
  -DOPENVAS_DEFAULT_SOCKET=/run/ospd/ospd-openvas.sock \\
  -DGVM_FEED_LOCK_PATH=/var/lib/gvm/feed-update.lock \\
  -DSYSTEMD_SERVICE_DIR=/lib/systemd/system \\
  -DPostgreSQL_TYPE_INCLUDE_DIR=/usr/include/postgresql \\
  -DLOGROTATE_DIR=/etc/logrotate.d && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),gs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gvmd && cd $BUILD_DIR/gvmd && \\
cmake $SOURCE_DIR/gvmd-$GVMD_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DLOCALSTATEDIR=/var \\
  -DSYSCONFDIR=/etc \\
  -DGVM_DATA_DIR=/var \\
  -DOPENVAS_DEFAULT_SOCKET=/run/ospd/ospd-openvas.sock \\
  -DGVM_FEED_LOCK_PATH=/var/lib/gvm/feed-update.lock \\
  -DSYSTEMD_SERVICE_DIR=/lib/systemd/system \\
  -DPostgreSQL_TYPE_INCLUDE_DIR=/usr/include/postgresql \\
  -DLOGROTATE_DIR=/etc/logrotate.d && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),ps=s("h3",{id:"build-postgresql-helper-pg-gvm",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-postgresql-helper-pg-gvm"},[s("span",null,"Build PostgreSQL helper pg-gvm")])],-1),hs=s("p",null,"Proceed to download and build the latest PostgreSQL helper, pg-gvm.",-1),_s=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PG_GVM_VERSION=22.6.4 && \\
curl -f -L https://github.com/greenbone/pg-gvm/archive/refs/tags/v$PG_GVM_VERSION.tar.gz -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/pg-gvm/releases/download/v$PG_GVM_VERSION/pg-gvm-$PG_GVM_VERSION.tar.gz.asc -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz
`)])])],-1),ms=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PG_GVM_VERSION=22.6.4 && \\
curl -f -L https://github.com/greenbone/pg-gvm/archive/refs/tags/v$PG_GVM_VERSION.tar.gz -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/pg-gvm/releases/download/v$PG_GVM_VERSION/pg-gvm-$PG_GVM_VERSION.tar.gz.asc -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz
`)])])],-1),vs=s("p",null,"Build pg-gvm.",-1),bs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/pg-gvm && cd $BUILD_DIR/pg-gvm && \\
cmake $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DPostgreSQL_TYPE_INCLUDE_DIR=/usr/include/postgresql && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Ss=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/pg-gvm && cd $BUILD_DIR/pg-gvm && \\
cmake $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DPostgreSQL_TYPE_INCLUDE_DIR=/usr/include/postgresql && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Rs=s("h3",{id:"install-greenbone-security-assistant",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-greenbone-security-assistant"},[s("span",null,"Install Greenbone Security Assistant")])],-1),Is={href:"https://github.com/greenbone/gsa",target:"_blank",rel:"noopener noreferrer"},fs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSA_VERSION=23.0.0 && \\
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-dist-$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-dist-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz
`)])])],-1),Es=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSA_VERSION=23.0.0 && \\
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-dist-$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-dist-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz
`)])])],-1),ks=i(`<p>Verify the GSA download and ensure that the signature from the Greenbone Community Feed is valid.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 02:59:15 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div></div><p>Create the source directory and extract the pre-built web interface (GSA) to its designated installation target.</p>`,3),Ds=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`mkdir -p $SOURCE_DIR/gsa-$GSA_VERSION && \\
tar -C $SOURCE_DIR/gsa-$GSA_VERSION -xvzf $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
mkdir -p $INSTALL_PREFIX/share/gvm/gsad/web/ && \\
cp -rv $SOURCE_DIR/gsa-$GSA_VERSION/* $INSTALL_PREFIX/share/gvm/gsad/web/
`)])])],-1),ys=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`mkdir -p $SOURCE_DIR/gsa-$GSA_VERSION && \\
tar -C $SOURCE_DIR/gsa-$GSA_VERSION -xvzf $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
mkdir -p $INSTALL_PREFIX/share/gvm/gsad/web/ && \\
cp -rv $SOURCE_DIR/gsa-$GSA_VERSION/* $INSTALL_PREFIX/share/gvm/gsad/web/
`)])])],-1),Os=s("h3",{id:"build-greenbone-security-assistant-daemon",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-greenbone-security-assistant-daemon"},[s("span",null,"Build Greenbone Security Assistant Daemon")])],-1),Ns={href:"https://github.com/greenbone/gsad",target:"_blank",rel:"noopener noreferrer"},As=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSAD_VERSION=22.9.0 && \\
curl -f -L https://github.com/greenbone/gsad/archive/refs/tags/v$GSAD_VERSION.tar.gz -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsad/releases/download/v$GSAD_VERSION/gsad-$GSAD_VERSION.tar.gz.asc -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz
`)])])],-1),$s=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSAD_VERSION=22.9.0 && \\
curl -f -L https://github.com/greenbone/gsad/archive/refs/tags/v$GSAD_VERSION.tar.gz -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsad/releases/download/v$GSAD_VERSION/gsad-$GSAD_VERSION.tar.gz.asc -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz
`)])])],-1),Vs=s("p",null,"Once you've verified that the signature is valid, proceed to build and install GSAD.",-1),Ls=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gsad && cd $BUILD_DIR/gsad && \\
cmake $SOURCE_DIR/gsad-$GSAD_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var \\
  -DGVMD_RUN_DIR=/run/gvmd \\
  -DGSAD_RUN_DIR=/run/gsad \\
  -DLOGROTATE_DIR=/etc/logrotate.d && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Us=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gsad && cd $BUILD_DIR/gsad && \\
cmake $SOURCE_DIR/gsad-$GSAD_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var \\
  -DGVMD_RUN_DIR=/run/gvmd \\
  -DGSAD_RUN_DIR=/run/gsad \\
  -DLOGROTATE_DIR=/etc/logrotate.d && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),xs=s("h3",{id:"build-openvas-smb-module",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-openvas-smb-module"},[s("span",null,"Build OpenVAS SMB module")])],-1),Gs={href:"https://github.com/greenbone/openvas-smb",target:"_blank",rel:"noopener noreferrer"},Cs=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"The OpenVAS Samba module is updated independently, and its version tag may differ from the GVM version.")],-1),ws=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SMB_VERSION=22.5.3 && \\
curl -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v$OPENVAS_SMB_VERSION.tar.gz -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-smb/releases/download/v$OPENVAS_SMB_VERSION/openvas-smb-v$OPENVAS_SMB_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz
`)])])],-1),Ts=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SMB_VERSION=22.5.3 && \\
curl -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v$OPENVAS_SMB_VERSION.tar.gz -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-smb/releases/download/v$OPENVAS_SMB_VERSION/openvas-smb-v$OPENVAS_SMB_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz
`)])])],-1),Ms=i(`<p>Verify the SMB module download and ensure that the signature from the Greenbone Community Feed is trusted.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Fri 25 Jun 2021 06:36:43 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div></div><p>Next, extract the files and proceed with the installation.</p>`,3),Ps=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/openvas-smb && cd $BUILD_DIR/openvas-smb && \\
cmake $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Bs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/openvas-smb && cd $BUILD_DIR/openvas-smb && \\
cmake $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),zs=s("h3",{id:"build-openvas-scanner",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-openvas-scanner"},[s("span",null,"Build OpenVAS Scanner")])],-1),Fs={href:"https://github.com/greenbone/openvas",target:"_blank",rel:"noopener noreferrer"},Ks=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SCANNER_VERSION=22.7.9 && \\
curl -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v$OPENVAS_SCANNER_VERSION.tar.gz -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-scanner/releases/download/v$OPENVAS_SCANNER_VERSION/openvas-scanner-v$OPENVAS_SCANNER_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz
`)])])],-1),qs=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SCANNER_VERSION=22.7.9 && \\
curl -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v$OPENVAS_SCANNER_VERSION.tar.gz -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-scanner/releases/download/v$OPENVAS_SCANNER_VERSION/openvas-scanner-v$OPENVAS_SCANNER_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz
`)])])],-1),Hs=i(`<p>Verify the signature output to ensure its authenticity.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 12:59:52 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div></div><p>Build the OpenVAS Scanner.</p>`,3),Ws=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/openvas-scanner && cd $BUILD_DIR/openvas-scanner && \\
cmake $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var \\
  -DOPENVAS_FEED_LOCK_PATH=/var/lib/openvas/feed-update.lock \\
  -DOPENVAS_RUN_DIR=/run/ospd && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Ys=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/openvas-scanner && cd $BUILD_DIR/openvas-scanner && \\
cmake $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var \\
  -DOPENVAS_FEED_LOCK_PATH=/var/lib/openvas/feed-update.lock \\
  -DOPENVAS_RUN_DIR=/run/ospd && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Xs=s("h3",{id:"build-ospd-openvas",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-ospd-openvas"},[s("span",null,"Build ospd-openvas")])],-1),Qs={href:"https://github.com/greenbone/ospd-openvas",target:"_blank",rel:"noopener noreferrer"},js=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OSPD_OPENVAS_VERSION=22.6.2 && \\
curl -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v$OSPD_OPENVAS_VERSION.tar.gz -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/ospd-openvas/releases/download/v$OSPD_OPENVAS_VERSION/ospd-openvas-v$OSPD_OPENVAS_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
`)])])],-1),Js=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OSPD_OPENVAS_VERSION=22.6.2 && \\
curl -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v$OSPD_OPENVAS_VERSION.tar.gz -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/ospd-openvas/releases/download/v$OSPD_OPENVAS_VERSION/ospd-openvas-v$OSPD_OPENVAS_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
`)])])],-1),Zs=i(`<p>Verify signature.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Wed 04 Aug 2021 07:13:45 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div></div></div><p>Extract the files and begin the installation process.</p>`,3),se=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
cd $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION && \\
mkdir -p $INSTALL_DIR/ospd-openvas && \\
python3 -m pip install --root=$INSTALL_DIR/ospd-openvas --no-warn-script-location . && \\
sudo cp -rv $INSTALL_DIR/ospd-openvas/* /
`)])])],-1),ee=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
cd $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION && \\
mkdir -p $INSTALL_DIR/ospd-openvas && \\
python3 -m pip install --root=$INSTALL_DIR/ospd-openvas --no-warn-script-location . && \\
sudo cp -rv $INSTALL_DIR/ospd-openvas/* /
`)])])],-1),ne=s("h3",{id:"build-notus-scanner",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-notus-scanner"},[s("span",null,"Build notus-scanner")])],-1),te=s("p",null,"Download and verify the notus-scanner.",-1),ae=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export NOTUS_VERSION=22.6.2 && \\
curl -f -L https://github.com/greenbone/notus-scanner/archive/refs/tags/v$NOTUS_VERSION.tar.gz -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/notus-scanner/releases/download/v$NOTUS_VERSION/notus-scanner-v$NOTUS_VERSION.tar.gz.asc -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz
`)])])],-1),le=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export NOTUS_VERSION=22.6.2 && \\
curl -f -L https://github.com/greenbone/notus-scanner/archive/refs/tags/v$NOTUS_VERSION.tar.gz -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/notus-scanner/releases/download/v$NOTUS_VERSION/notus-scanner-v$NOTUS_VERSION.tar.gz.asc -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz
`)])])],-1),oe=s("p",null,"Once verified, proceed with the installation.",-1),ie=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
cd $SOURCE_DIR/notus-scanner-$NOTUS_VERSION && \\
mkdir -p $INSTALL_DIR/notus-scanner && \\
python3 -m pip install --root=$INSTALL_DIR/notus-scanner --no-warn-script-location . && \\
sudo cp -rv $INSTALL_DIR/notus-scanner/* /
`)])])],-1),re=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
cd $SOURCE_DIR/notus-scanner-$NOTUS_VERSION && \\
mkdir -p $INSTALL_DIR/notus-scanner && \\
python3 -m pip install --root=$INSTALL_DIR/notus-scanner --no-warn-script-location . && \\
sudo cp -rv $INSTALL_DIR/notus-scanner/* /
`)])])],-1),de=s("h3",{id:"install-gvm-tools",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-gvm-tools"},[s("span",null,"Install GVM tools")])],-1),ce=s("p",null,"Install the Greenbone Vulnerability Management Tools, a toolkit that helps remotely control the Greenbone Community Edition.",-1),ue=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`mkdir -p $INSTALL_DIR/gvm-tools && \\
python3 -m pip install --root=$INSTALL_DIR/gvm-tools --no-warn-script-location gvm-tools && \\
sudo cp -rv $INSTALL_DIR/gvm-tools/* /
`)])])],-1),ge=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`mkdir -p $INSTALL_DIR/gvm-tools && \\
python3 -m pip install --root=$INSTALL_DIR/gvm-tools --no-warn-script-location gvm-tools && \\
sudo cp -rv $INSTALL_DIR/gvm-tools/* /
`)])])],-1),pe=s("h3",{id:"set-up-the-mosquitto-broker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#set-up-the-mosquitto-broker"},[s("span",null,"Set up the Mosquitto broker")])],-1),he=s("p",null,"The Mosquitto MQTT broker facilitates communication between ospd-openvas, openvas-scanner, and notus-scanner.",-1),_e=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start mosquitto.service && \\
sudo systemctl enable mosquitto.service && \\
echo "mqtt_server_uri = localhost:1883\\ntable_driven_lsc = yes" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),me=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start mosquitto.service && \\
sudo systemctl enable mosquitto.service && \\
echo "mqtt_server_uri = localhost:1883\\ntable_driven_lsc = yes" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),ve=s("h3",{id:"configure-redis",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configure-redis"},[s("span",null,"Configure Redis")])],-1),be=s("p",null,"Next configure Redis.",-1),Se=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION/config/redis-openvas.conf /etc/redis/ && \\
sudo chown redis:redis /etc/redis/redis-openvas.conf && \\
echo "db_address = /run/redis-openvas/redis.sock" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),Re=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION/config/redis-openvas.conf /etc/redis/ && \\
sudo chown redis:redis /etc/redis/redis-openvas.conf && \\
echo "db_address = /run/redis-openvas/redis.sock" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),Ie=s("p",null,"Add Redis to the GVM group.",-1),fe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo usermod -aG redis gvm
`)])])],-1),Ee=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo usermod -aG redis _gvm
`)])])],-1),ke=s("p",null,"Start the Redis server and enable it as a startup service.",-1),De=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start redis-server@openvas.service && \\
sudo systemctl enable redis-server@openvas.service
`)])])],-1),ye=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start redis-server@openvas.service && \\
sudo systemctl enable redis-server@openvas.service
`)])])],-1),Oe=s("p",null,"Proceed to set up the correct permissions.",-1),Ne=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir -p /var/lib/notus && \\
sudo mkdir -p /run/gvmd && \\
sudo mkdir -p /var/lib/notus && \\
sudo mkdir -p /run/notus-scanner && \\
sudo mkdir -p /run/gvmd && \\
sudo chown -R gvm:gvm /var/lib/gvm && \\
sudo chown -R gvm:gvm /var/lib/openvas && \\
sudo chown -R gvm:gvm /var/lib/notus && \\
sudo chown -R gvm:gvm /var/log/gvm && \\
sudo chown -R gvm:gvm /run/gvmd && \\
sudo chmod -R g+srw /var/lib/gvm && \\
sudo chmod -R g+srw /var/lib/openvas && \\
sudo chmod -R g+srw /var/log/gvm
`)])])],-1),Ae=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir -p /var/lib/notus && \\
sudo mkdir -p /run/gvmd && \\
sudo mkdir -p /var/lib/notus && \\
sudo mkdir -p /run/notus-scanner && \\
sudo mkdir -p /run/gvmd && \\
sudo chown -R _gvm:_gvm /var/lib/gvm && \\
sudo chown -R _gvm:_gvm /var/lib/openvas && \\
sudo chown -R _gvm:_gvm /var/lib/notus && \\
sudo chown -R _gvm:_gvm /var/log/gvm && \\
sudo chown -R _gvm:_gvm /run/gvmd && \\
sudo chmod -R g+srw /var/lib/gvm && \\
sudo chmod -R g+srw /var/lib/openvas && \\
sudo chmod -R g+srw /var/log/gvm
`)])])],-1),$e=s("p",null,"You also need to adjust the permissions for feed synchronization.",-1),Ve=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo chown gvm:gvm /usr/local/sbin/gvmd && \\
sudo chmod 6750 /usr/local/sbin/gvmd
`)])])],-1),Le=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo chown _gvm:_gvm /usr/local/sbin/gvmd && \\
sudo chmod 6750 /usr/local/sbin/gvmd
`)])])],-1),Ue=s("p",null,"Feed validation.",-1),xe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GNUPGHOME=/tmp/openvas-gnupg && \\
mkdir -p $GNUPGHOME && \\
gpg --import /tmp/GBCommunitySigningKey.asc && \\
echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt && \\
export OPENVAS_GNUPG_HOME=/etc/openvas/gnupg && \\
sudo mkdir -p $OPENVAS_GNUPG_HOME && \\
sudo cp -r /tmp/openvas-gnupg/* $OPENVAS_GNUPG_HOME/ && \\
sudo chown -R gvm:gvm $OPENVAS_GNUPG_HOME
`)])])],-1),Ge=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GNUPGHOME=/tmp/openvas-gnupg && \\
mkdir -p $GNUPGHOME && \\
gpg --import /tmp/GBCommunitySigningKey.asc && \\
echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt && \\
export OPENVAS_GNUPG_HOME=/etc/openvas/gnupg && \\
sudo mkdir -p $OPENVAS_GNUPG_HOME && \\
sudo cp -r /tmp/openvas-gnupg/* $OPENVAS_GNUPG_HOME/ && \\
sudo chown -R _gvm:_gvm $OPENVAS_GNUPG_HOME
`)])])],-1),Ce=s("p",null,"Configure and add all users of the gvm group to run the openvas-scanner application as the root user via sudo.",-1),we=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo visudo
`)])])],-1),Te=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo visudo
`)])])],-1),Me=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# Allow members of group sudo to execute any command"),n(`
%sudo   `),s("span",{class:"token assign-left variable"},"ALL"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),n("ALL:ALL"),s("span",{class:"token punctuation"},")"),n(` ALL

`),s("span",{class:"token comment"},"# allow users of the gvm group run openvas"),n(`
%gvm ALL `),s("span",{class:"token operator"},"="),n(` NOPASSWD: /usr/local/sbin/openvas
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," ")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Pe=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# Allow members of group sudo to execute any command"),n(`
%sudo   `),s("span",{class:"token assign-left variable"},"ALL"),s("span",{class:"token operator"},"="),s("span",{class:"token punctuation"},"("),n("ALL:ALL"),s("span",{class:"token punctuation"},")"),n(` ALL

`),s("span",{class:"token comment"},"# allow users of the gvm group run openvas"),n(`
%_gvm ALL `),s("span",{class:"token operator"},"="),n(` NOPASSWD: /usr/local/sbin/openvas
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," ")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Be=s("h3",{id:"configure-postgresql-database",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configure-postgresql-database"},[s("span",null,"Configure PostgreSQL database")])],-1),ze=s("p",null,"Start the PostgreSQL service.",-1),Fe=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start postgresql@14-main.service
`)])])],-1),Ke=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start postgresql@15-main.service
`)])])],-1),qe=s("p",null,"Create a PostgreSQL user and database.",-1),He=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u postgres bash
cd
createuser -DRS gvm
createdb -O gvm gvmd
psql gvmd
`)])])],-1),We=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u postgres bash
createuser -DRS _gvm
createdb -O _gvm gvmd
psql gvmd
`)])])],-1),Ye=s("p",null,"Set up correct permissions and create database extensions.",-1),Xe=s("div",{class:"language-plsql","data-ext":"plsql","data-title":"plsql"},[s("pre",{class:"language-plsql"},[s("code",null,[n("gvmd"),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"create"),n(" role dba "),s("span",{class:"token keyword"},"with"),n(" superuser noinherit"),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"grant"),n(" dba "),s("span",{class:"token keyword"},"to"),n(" gvm"),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"create"),n(" extension "),s("span",{class:"token string"},'"uuid-ossp"'),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"create"),n(" extension "),s("span",{class:"token string"},'"pgcrypto"'),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"exit"),n(`
`),s("span",{class:"token keyword"},"exit"),n(`
`)])])],-1),Qe=s("div",{class:"language-plsql","data-ext":"plsql","data-title":"plsql"},[s("pre",{class:"language-plsql"},[s("code",null,[n("gvmd"),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"create"),n(" role dba "),s("span",{class:"token keyword"},"with"),n(" superuser noinherit"),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"grant"),n(" dba "),s("span",{class:"token keyword"},"to"),n(" _gvm"),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"create"),n(" extension "),s("span",{class:"token string"},'"uuid-ossp"'),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"create"),n(" extension "),s("span",{class:"token string"},'"pgcrypto"'),s("span",{class:"token punctuation"},";"),n(`
gvmd`),s("span",{class:"token operator"},"="),n("# "),s("span",{class:"token keyword"},"exit"),n(`
`),s("span",{class:"token keyword"},"exit"),n(`
`)])])],-1),je=s("h3",{id:"create-admin-user",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-admin-user"},[s("span",null,"Create Admin user")])],-1),Je=s("p",null,"Create the administration user for the Greenbone Security Assistant.",-1),Ze=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"INFO"),s("p",null,"Please change the default password by logging in using the Greenbone Security Assistant (GSA).")],-1),sn=s("p",null,"Before creating the administrator, ensure that you have exited the PostgreSQL session and reloaded the dynamic loader cache.",-1),en=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo ldconfig
`)])])],-1),nn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo ldconfig
`)])])],-1),tn=s("p",null,"Once you've reloaded the dynamic loader cache, proceed with the user creation.",-1),an=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`/usr/local/sbin/gvmd --create-user=admin --password=admin
User created.
`)])])],-1),ln=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --create-user=admin --password=admin
User created.
`)])])],-1),on=s("p",null,"Retrieve the administrator's UUID.",-1),rn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`/usr/local/sbin/gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlight-line"}," ")])],-1),dn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
`)])])],-1),cn=s("p",null,'Use the administration UUID to modify the gvmd settings. Remember to replace "UUID_HERE" with your actual UUID as the value option.',-1),un=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`/usr/local/sbin/gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE
`)])])],-1),gn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE
`)])])],-1),pn=s("h3",{id:"install-greenbone-feed-sync",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-greenbone-feed-sync"},[s("span",null,"Install greenbone-feed-sync")])],-1),hn=s("p",null,"Install the new greenbone-feed-sync, which replaces the old approach of synchronizing the data (VT, SCAP, CERT, and GVMD) individually.",-1),_n=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`mkdir -p $INSTALL_DIR/greenbone-feed-sync && \\
python3 -m pip install --root=$INSTALL_DIR/greenbone-feed-sync --no-warn-script-location greenbone-feed-sync && \\
sudo cp -rv $INSTALL_DIR/greenbone-feed-sync/* /
`)])])],-1),mn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`mkdir -p $INSTALL_DIR/greenbone-feed-sync && \\
python3 -m pip install --root=$INSTALL_DIR/greenbone-feed-sync --no-warn-script-location greenbone-feed-sync && \\
sudo cp -rv $INSTALL_DIR/greenbone-feed-sync/* /
`)])])],-1),vn=s("h3",{id:"greenbone-feed-synchronisation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#greenbone-feed-synchronisation"},[s("span",null,"Greenbone Feed synchronisation")])],-1),bn=s("p",null,"Synchronize the Greenbone Community feeds.",-1),Sn=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"This may take awhile.")],-1),Rn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo /usr/local/bin/greenbone-feed-sync
`)])])],-1),In=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo /usr/local/bin/greenbone-feed-sync
`)])])],-1),fn=s("h3",{id:"set-up-systemd",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#set-up-systemd"},[s("span",null,"Set up systemd")])],-1),En=s("p",null,"Create the systemd service script for ospd-openvas. For Ubuntu, specify the address of the MQTT broker for the server host.",-1),kn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/ospd-openvas.service
[Unit]
Description=OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
Documentation=man:ospd-openvas(8) man:openvas(8)
After=network.target networking.service redis-server@openvas.service
Wants=redis-server@openvas.service
ConditionKernelCommandLine=!recovery

[Service]
Type=exec
User=gvm
Group=gvm
RuntimeDirectory=ospd
RuntimeDirectoryMode=2775
PIDFile=/run/ospd/ospd-openvas.pid
ExecStart=/usr/local/bin/ospd-openvas --foreground --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas --socket-mode 0o770 --mqtt-broker-address 192.168.0.1 --mqtt-broker-port 1883 --notus-feed-dir /var/lib/notus/advisories
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Dn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/ospd-openvas.service
[Unit]
Description=OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
Documentation=man:ospd-openvas(8) man:openvas(8)
After=network.target networking.service redis-server@openvas.service
Wants=redis-server@openvas.service
ConditionKernelCommandLine=!recovery

[Service]
Type=exec
User=_gvm
Group=_gvm
RuntimeDirectory=ospd
RuntimeDirectoryMode=2775
PIDFile=/run/ospd/ospd-openvas.pid
ExecStart=/usr/local/bin/ospd-openvas --foreground --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas --socket-mode 0o770 --mqtt-broker-address 127.0.0.1 --mqtt-broker-port 1883 --notus-feed-dir /var/lib/notus/advisories
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),yn=s("p",null,"Copy the startup script to your system's manager directory.",-1),On=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/ospd-openvas.service /etc/systemd/system/
`)])])],-1),Nn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/ospd-openvas.service /etc/systemd/system/
`)])])],-1),An=s("p",null,"Create the systemd service script for notus-scanner.",-1),$n=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/notus-scanner.service
[Unit]
Description=Notus Scanner
Documentation=https://github.com/greenbone/notus-scanner
After=mosquitto.service
Wants=mosquitto.service
ConditionKernelCommandLine=!recovery

[Service]
Type=exec
User=gvm
RuntimeDirectory=notus-scanner
RuntimeDirectoryMode=2775
PIDFile=/run/notus-scanner/notus-scanner.pid
ExecStart=/usr/local/bin/notus-scanner --foreground --products-directory /var/lib/notus/products --log-file /var/log/gvm/notus-scanner.log
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF
`)])])],-1),Vn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/notus-scanner.service
[Unit]
Description=Notus Scanner
Documentation=https://github.com/greenbone/notus-scanner
After=mosquitto.service
Wants=mosquitto.service
ConditionKernelCommandLine=!recovery

[Service]
Type=exec
User=_gvm
RuntimeDirectory=notus-scanner
RuntimeDirectoryMode=2775
PIDFile=/run/notus-scanner/notus-scanner.pid
ExecStart=/usr/local/bin/notus-scanner --foreground --products-directory /var/lib/notus/products --log-file /var/log/gvm/notus-scanner.log
SuccessExitStatus=SIGKILL
Restart=always
RestartSec=60

[Install]
WantedBy=multi-user.target
EOF
`)])])],-1),Ln=s("p",null,"Copy the startup script to your system's manager directory.",-1),Un=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/notus-scanner.service /etc/systemd/system/
`)])])],-1),xn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/notus-scanner.service /etc/systemd/system/
`)])])],-1),Gn=s("p",null,"Create the Greenbone Manager startup script.",-1),Cn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gvmd.service
[Unit]
Description=Greenbone Vulnerability Manager daemon (gvmd)
After=network.target networking.service postgresql.service ospd-openvas.service
Wants=postgresql.service ospd-openvas.service
Documentation=man:gvmd(8)
ConditionKernelCommandLine=!recovery

[Service]
Type=exec
User=gvm
Group=gvm
PIDFile=/run/gvmd/gvmd.pid
RuntimeDirectory=gvmd
RuntimeDirectoryMode=2775
ExecStart=/usr/local/sbin/gvmd --foreground --osp-vt-update=/run/ospd/ospd-openvas.sock --listen-group=gvm
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
EOF
`)])])],-1),wn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gvmd.service
[Unit]
Description=Greenbone Vulnerability Manager daemon (gvmd)
After=network.target networking.service postgresql.service ospd-openvas.service
Wants=postgresql.service ospd-openvas.service
Documentation=man:gvmd(8)
ConditionKernelCommandLine=!recovery

[Service]
Type=exec
User=_gvm
Group=_gvm
PIDFile=/run/gvmd/gvmd.pid
RuntimeDirectory=gvmd
RuntimeDirectoryMode=2775
ExecStart=/usr/local/sbin/gvmd --foreground --osp-vt-update=/run/ospd/ospd-openvas.sock --listen-group=_gvm
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
EOF
`)])])],-1),Tn=s("p",null,"Copy the startup script to your system's manager directory.",-1),Mn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gvmd.service /etc/systemd/system/
`)])])],-1),Pn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gvmd.service /etc/systemd/system/
`)])])],-1),Bn=s("p",null,"Create the script for the web interface Greenbone Security Assistant (GSA), remembering to define your IP address for GSA.",-1),zn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gsad.service
[Unit]
Description=Greenbone Security Assistant daemon (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target gvmd.service
Wants=gvmd.service

[Service]
Type=exec
User=gvm
Group=gvm
RuntimeDirectory=gsad
RuntimeDirectoryMode=2775
PIDFile=/run/gsad/gsad.pid
ExecStart=/usr/local/sbin/gsad --foreground --listen=192.168.0.1 --port=9392 --http-only
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
Alias=greenbone-security-assistant.service
EOF
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Fn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gsad.service

[Unit]
Description=Greenbone Security Assistant daemon (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target gvmd.service
Wants=gvmd.service

[Service]
Type=exec
User=_gvm
Group=_gvm
RuntimeDirectory=gsad
RuntimeDirectoryMode=2775
PIDFile=/run/gsad/gsad.pid
ExecStart=/usr/local/sbin/gsad --foreground --listen=192.168.0.1 --port=9392 --http-only
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
Alias=greenbone-security-assistant.service
EOF
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Kn=s("p",null,"Copy the startup script to your system's manager directory.",-1),qn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gsad.service /etc/systemd/system/
`)])])],-1),Hn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gsad.service /etc/systemd/system/
`)])])],-1),Wn=s("h3",{id:"enable-and-start-services",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#enable-and-start-services"},[s("span",null,"Enable and start services")])],-1),Yn=s("p",null,"To enable the created startup scripts, reload the system control daemon.",-1),Xn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),Qn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),jn=s("p",null,"Enable each of the services.",-1),Jn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable notus-scanner
sudo systemctl enable ospd-openvas
sudo systemctl enable gvmd
sudo systemctl enable gsad
`)])])],-1),Zn=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable notus-scanner
sudo systemctl enable ospd-openvas
sudo systemctl enable gvmd
sudo systemctl enable gsad
`)])])],-1),st=s("p",null,"Next start each service.",-1),et=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,[n("If any of the services do not start for some reason, you can use, for example, "),s("code",null,"journalctl -u notus-scanner.service"),n(" to view the full trace.")])],-1),nt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start ospd-openvas
sudo systemctl start notus-scanner
sudo systemctl start gvmd
sudo systemctl start gsad
`)])])],-1),tt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start ospd-openvas
sudo systemctl start notus-scanner
sudo systemctl start gvmd
sudo systemctl start gsad
`)])])],-1),at={class:"custom-container warning"},lt=s("p",{class:"custom-container-title"},"WARNING",-1),ot={href:"https://greenbone.github.io/docs/gvm-21.04/index.html#starting-services-with-systemd",target:"_blank",rel:"noopener noreferrer"},it=s("p",null,"You can check the current status of each service by running the commands below.",-1),rt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status ospd-openvas.service
`)])])],-1),dt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status ospd-openvas.service
`)])])],-1),ct=i(`<div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">● ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
     Loaded: loaded (/etc/systemd/system/ospd-openvas.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2021-10-11 18:22:39 UTC; 5min ago
       Docs: man:ospd-openvas(8)
             man:openvas(8)
    Process: 37213 ExecStart=/usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas -&gt;
   Main PID: 37228 (ospd-openvas)
      Tasks: 6 (limit: 2278)
     Memory: 16.5M
     CGroup: /system.slice/ospd-openvas.service
             ├─37228 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/&gt;
             ├─37230 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/&gt;
             ├─37297 openvas --update-vt-info
             └─37300 openvas: Reloaded 43550 of 77138 NVTs (56% / ETA: 04:25)

Oct 11 18:22:37 server@libellux systemd[1]: Starting OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)...
Oct 11 18:22:39 server@libellux systemd[1]: Started OSPd Wrapper for the OpenVAS Scanner (ospd-openvas).
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div>`,1),ut=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gvmd.service
`)])])],-1),gt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gvmd.service
`)])])],-1),pt=i(`<p>Synchronizing the SCAP database is typically time-consuming, so please be patient and refrain from restarting your server.</p><div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">● gvmd.service - Greenbone Vulnerability Manager daemon (gvmd)
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
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br></div></div>`,2),ht=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gsad.service
`)])])],-1),_t=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gsad.service
`)])])],-1),mt=i(`<div class="language-shell-session" data-ext="shell-session" data-title="shell-session"><pre class="language-shell-session"><code><span class="token output">● gsad.service - Greenbone Security Assistant daemon (gsad)
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
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br></div></div><p>Login at your localhost, for example <code>http://192.168.0.1:9392</code> with the username <code>admin</code> and the chosen password.</p>`,2),vt=["src"],bt=s("p",null,[n("Once logged in, go to the "),s("em",null,"Administration"),n(" tab and select "),s("em",null,"Feed Status"),n(". You'll see that the update is in progress.")],-1),St=["src"],Rt=s("p",null,[n("You may check the "),s("em",null,"gvmd"),n(" logs in real-time to see what updates are being made.")],-1),It=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"tail"),n(),s("span",{class:"token parameter variable"},"-f"),n(" /var/log/gvm/gvmd.log")])]),n(`
`)])])],-1),ft=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),Et=s("p",null,[n("When the status changed to "),s("em",null,"current"),n(" in the "),s("em",null,"Feed status"),n(", go to the dashboard, and it will be populated with CVEs sorted by creation time and NVTs sorted by severity class.")],-1),kt=["src"],Dt=s("p",null,[n("You may also confirm the current version of GSA. Go to the "),s("em",null,"Help"),n(" tab and select "),s("em",null,"About"),n(".")],-1),yt=["src"],Ot=s("p",null,[n("To run basic vulnerability scans and get a feel for how OpenVAS works, check the "),s("a",{href:"#running-vulnerability-scans"},"Running vulnerability scans"),n(" section.")],-1),Nt={id:"install-gvm-21-04-atomicorp",tabindex:"-1"},At={class:"header-anchor",href:"#install-gvm-21-04-atomicorp"},$t={href:"https://github.com/Atomicorp/gvm",target:"_blank",rel:"noopener noreferrer"},Vt=s("p",null,"Check if SELinux is enabled.",-1),Lt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"sestatus")]),n(`
`),s("span",{class:"token output"},`SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," ")])],-1),Ut=s("p",null,"If enabled proceed to disable SELinux by running the command below.",-1),xt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" setenforce "),s("span",{class:"token number"},"0")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"nano"),n(" /etc/selinux/config")])]),n(`
`)])]),s("div",{class:"highlight-lines"},[s("div",{class:"highlight-line"}," "),s("br")])],-1),Gt=i(`<p>Update the SELinux configuration file and set SELINUX to disabled.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># This file controls the state of SELinux on the system.</span>
<span class="token comment"># SELINUX= can take one of these three values:</span>
<span class="token comment">#     enforcing - SELinux security policy is enforced.</span>
<span class="token comment">#     permissive - SELinux prints warnings instead of enforcing.</span>
<span class="token comment">#     disabled - No SELinux policy is loaded.</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save and reboot the system.</p>`,3),Ct=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"shutdown"),n(),s("span",{class:"token parameter variable"},"-r"),n(" now")])]),n(`
`)])])],-1),wt=s("p",null,"Once the system rebooted, make sure that SELinux has been disabled",-1),Tt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},"sestatus")]),n(`
`),s("span",{class:"token output"},`SELinux status:                 disabled
`)])])],-1),Mt=s("p",null,"Continue and download the Atomicorp installer.",-1),Pt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),n(),s("span",{class:"token parameter variable"},"-q"),n(),s("span",{class:"token parameter variable"},"-O"),n(" - https://updates.atomicorp.com/installers/atomic "),s("span",{class:"token operator"},"|"),n(),s("span",{class:"token function"},"sudo"),n(),s("span",{class:"token function"},"sh")])]),n(`

`),s("span",{class:"token output"},`For supported software packages please contact us at: 

  sales@atomicorp.com

Do you agree to these terms? (yes/no) [Default: yes] yes
Enable repo by default? (yes/no) [Default: yes]: yes
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," ")])],-1),Bt=s("p",null,"Enable PowerTools and install extra packages.",-1),zt=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"Only required for Redhat, Rocky and CentOS.")],-1),Ft=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@centos"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" yum config-manager --set-enabled PowerTools")])]),n(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@centos"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" yum "),s("span",{class:"token function"},"install"),n(" epel-release")])]),n(`
`)])])],-1),Kt=s("p",null,"Proceed and install GVM.",-1),qt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" yum "),s("span",{class:"token function"},"install"),n(" gvm")])]),n(`
`)])])],-1),Ht=s("p",null,"Finally run the GVM configuration script to setup GVM (this might take awhile).",-1),Wt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),n(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),n(" gvm-setup")])]),n(`
`)])])],-1),Yt=s("p",null,"Once the GVM setup has been complete, proceed to set the administrator password.",-1),Xt=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"Do not use special characters in the password.")],-1),Qt=s("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Updating OpenVAS Manager certificates: Complete

GVMD startup: Done

Set the GSAD admin users password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter Administrator Password:
Verify Administrator Password:

Setup complete
  Log in to GSAD at https://localhost
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")])],-1),jt=s("p",null,[n("Login at your localhost e.g. "),s("code",null,"https://192.168.0.1"),n(" with the username "),s("code",null,"admin"),n(" and the chosen password.")],-1),Jt=["src"],Zt=i('<h2 id="running-vulnerability-scans" tabindex="-1"><a class="header-anchor" href="#running-vulnerability-scans"><span>Running vulnerability scans</span></a></h2><p>There are several approaches on how to configure and run tasks (scans) toward your targets (hosts) in GVM. In this tutorial we will go through how to run the more basic tasks. We will do both unauthenticated scans, where we do not grant GVM SSH access to our target, and authenticated scans to help identify internal server vulnerabilites or misconfigurations.</p><h3 id="unauthenticated-scan" tabindex="-1"><a class="header-anchor" href="#unauthenticated-scan"><span>Unauthenticated scan</span></a></h3><p>Login to the Greenbone Security Assistant (GSA) e.g. <code>https://192.168.0.1</code>. Once logged in we will add our first target. Go the the <em>Configuration</em> menu in the top navigation and select <em>Targets</em>.</p>',4),sa=["src"],ea=s("p",null,[n("In the top left corner of the "),s("em",null,"Targets"),n(" view there's a starred document icon, click and select to create a "),s("em",null,"New Target"),n(". Fill in the name of the target server e.g. "),s("em",null,"Ubuntu Client"),n(" and its IP address "),s("code",null,"192.168.0.2"),n(". Leave the rest of the settings in default.")],-1),na=["src"],ta=s("p",null,[n("Next we will create a task for unauthenticated targets (scans without SSH access). Go the "),s("em",null,"Scans"),n(" in the top menu and select "),s("em",null,"Tasks"),n(".")],-1),aa=["src"],la=s("p",null,[n("Click the starred document icon in the top left corner of the "),s("em",null,"Tasks"),n(" view.")],-1),oa=["src"],ia=s("p",null,[n("Select a descriptive name for your task e.g. Unauthenticated scan. In the "),s("em",null,"Scan Targets"),n(" dropdown menu select your target we created before (Ubuntu Client). Leave the default settings and click save.")],-1),ra=["src"],da=s("p",null,[n("You will then be redirected back to the "),s("em",null,"Tasks"),n(" overview and our new task will be listed in the table below the graphs. To start the scan press the start button on the right side of the table.")],-1),ca=["src"],ua=s("h3",{id:"authenticated-scan",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#authenticated-scan"},[s("span",null,"Authenticated scan")])],-1),ga=s("p",null,[n("First make sure that you've generated SSH keys for your GVM client user e.g. "),s("code",null,"client@ubuntu"),n(". Add your public key to the targets authorized keys file. You may have to connect to your target host, through SSH, before running GVM vulnerability scan to add the target host to your clients machine's known hosts. Once you've established a secure connection between your client and target, proceed to configure credentials in the Greenbone Security Assistant. Go to "),s("em",null,"Configuration"),n(" and select "),s("em",null,"Credentials"),n(".")],-1),pa=["src"],ha=s("p",null,[n("Next click the starred document in the top left corner to create your new credentials. Give the credentials a desciptive name with an optional comment. In the dropdown menu "),s("em",null,"Type"),n(", select "),s("em",null,"Username + SSH key"),n(" and disallow insecure use and auto-generation. Add the username of the target host user followed by the password and upload the private key (e.g. id_rsa). Click save.")],-1),_a=["src"],ma=s("p",null,[n("Go to the "),s("em",null,"Targets"),n(" section and either edit your "),s("a",{href:"#unauthenticated-scan"},"unauthenticated scan"),n(" or create a new target. Set the host IP address and in the dropdown menu, under the "),s("em",null,"Credentials for authentication checks"),n(", select your newly created SSH credential.")],-1),va=["src"],ba=s("p",null,"Finally create a new task and select the target that we attached our credentials to and leave the default settings.",-1),Sa=["src"],Ra=s("h2",{id:"two-factor-authentication-w-privacyidea",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#two-factor-authentication-w-privacyidea"},[s("span",null,"Two-factor authentication w/ privacyIDEA")])],-1),Ia=s("h2",{id:"troubleshooting",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#troubleshooting"},[s("span",null,"Troubleshooting")])],-1),fa={href:"https://community.greenbone.net/",target:"_blank",rel:"noopener noreferrer"},Ea={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},ka={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Da={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},ya={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Oa=s("a",{href:"mailto:webmaster@libellux.com"},"webmaster@libellux.com",-1),Na={id:"enterprise-solutions",tabindex:"-1"},Aa={class:"header-anchor",href:"#enterprise-solutions"},$a=s("h3",{id:"the-greenbone-security-manager",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-greenbone-security-manager"},[s("span",null,"The Greenbone Security Manager")])],-1),Va=s("p",null,"The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.",-1),La={href:"https://www.greenbone.net/en/product-comparison/",target:"_blank",rel:"noopener noreferrer"};function Ua(xa,Ga){const d=r("Badge"),o=r("ExternalLinkIcon"),a=r("CodeGroupItem"),l=r("CodeGroup"),c=r("RouteLink");return g(),p("div",null,[s("h1",_,[s("a",m,[s("span",null,[n("Greenbone Vulnerability Manager "),e(d,{text:"Rev 13",type:"tip"})])])]),v,s("p",null,[s("a",b,[n("GVM website"),e(o)]),n(),s("a",S,[n("OpenVAS website"),e(o)]),n(),s("a",R,[n("GitHub"),e(o)]),n(),s("a",I,[n("GVM official docs"),e(o)])]),s("p",null,[s("a",f,[E,e(o)])]),k,D,s("ul",null,[s("li",null,[s("a",y,[n("GVM 22.4.x (Kali 2023.3)"),e(o)])]),s("li",null,[s("a",O,[n("GVM 22.4.x (Ubuntu 22.04)"),e(o)])]),s("li",null,[s("a",N,[n("GVM 22.4.0 (Ubuntu 22.04)"),e(o)])]),s("li",null,[s("a",A,[n("GVM 22.4.0 (Ubuntu 20.04)"),e(o)])]),s("li",null,[s("a",$,[n("GVM 21.4.5"),e(o)])]),s("li",null,[s("a",V,[n("GVM 21.4.4"),e(o)])]),s("li",null,[s("a",L,[n("GVM 21.4.3"),e(o)])]),s("li",null,[s("a",U,[n("GVM 21.4.2"),e(o)])])]),x,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[G]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[C]),_:1})]),_:1}),w,T,M,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[P]),_:1})]),_:1}),B,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[z]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[F]),_:1})]),_:1}),K,q,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[H]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[W]),_:1})]),_:1}),Y,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[X]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Q]),_:1})]),_:1}),j,s("p",null,[n("Download and build the "),s("a",J,[n("GVM libraries"),e(o)]),n(".")]),e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Z]),_:1}),e(a,{title:"Ubuntu Kali 2023.3"},{default:t(()=>[ss]),_:1})]),_:1}),es,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 20.04"},{default:t(()=>[ns]),_:1})]),_:1}),ts,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[as]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ls]),_:1})]),_:1}),os,s("p",null,[n("Next, download, verify, and build the "),s("a",is,[n("Greenbone Vulnerability Manager (GVM)"),e(o)]),n(".")]),e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[rs]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ds]),_:1})]),_:1}),cs,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[us]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[gs]),_:1})]),_:1}),ps,hs,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[_s]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ms]),_:1})]),_:1}),vs,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[bs]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Ss]),_:1})]),_:1}),Rs,s("p",null,[n("Download the web interface "),s("a",Is,[n("Greenbone Security Assistant (GSA)"),e(o)]),n(".")]),e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[fs]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Es]),_:1})]),_:1}),ks,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Ds]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ys]),_:1})]),_:1}),Os,s("p",null,[n("Download and build the HTTP Server "),s("a",Ns,[n("Greenbone Security Assistant Daemon (GSAD)"),e(o)]),n(".")]),e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[As]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[$s]),_:1})]),_:1}),Vs,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Ls]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Us]),_:1})]),_:1}),xs,s("p",null,[n("Download and build the "),s("a",Gs,[n("OpenVAS SMB module"),e(o)]),n(".")]),Cs,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[ws]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Ts]),_:1})]),_:1}),Ms,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Ps]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Bs]),_:1})]),_:1}),zs,s("p",null,[n("Download and build the "),s("a",Fs,[n("openvas-scanner (OpenVAS)"),e(o)]),n(".")]),e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Ks]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[qs]),_:1})]),_:1}),Hs,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Ws]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Ys]),_:1})]),_:1}),Xs,s("p",null,[n("Proceed to download "),s("a",Qs,[n("ospd-openvas"),e(o)]),n(".")]),e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[js]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Js]),_:1})]),_:1}),Zs,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[se]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ee]),_:1})]),_:1}),ne,te,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[ae]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[le]),_:1})]),_:1}),oe,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[ie]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[re]),_:1})]),_:1}),de,ce,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[ue]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ge]),_:1})]),_:1}),pe,he,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[_e]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[me]),_:1})]),_:1}),ve,be,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Se]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Re]),_:1})]),_:1}),Ie,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[fe]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Ee]),_:1})]),_:1}),ke,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[De]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ye]),_:1})]),_:1}),Oe,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Ne]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Ae]),_:1})]),_:1}),$e,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Ve]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Le]),_:1})]),_:1}),Ue,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[xe]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Ge]),_:1})]),_:1}),Ce,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[we]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Te]),_:1})]),_:1}),e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Me]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Pe]),_:1})]),_:1}),Be,ze,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Fe]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Ke]),_:1})]),_:1}),qe,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[He]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[We]),_:1})]),_:1}),Ye,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Xe]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Qe]),_:1})]),_:1}),je,Je,Ze,sn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[en]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[nn]),_:1})]),_:1}),tn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[an]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[ln]),_:1})]),_:1}),on,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[rn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[dn]),_:1})]),_:1}),cn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[un]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[gn]),_:1})]),_:1}),pn,hn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[_n]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[mn]),_:1})]),_:1}),vn,bn,Sn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Rn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[In]),_:1})]),_:1}),fn,En,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[kn]),_:1}),e(a,{title:"Ubuntu Kali 2023.3"},{default:t(()=>[Dn]),_:1})]),_:1}),yn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[On]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Nn]),_:1})]),_:1}),An,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[$n]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Vn]),_:1})]),_:1}),Ln,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Un]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[xn]),_:1})]),_:1}),Gn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Cn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[wn]),_:1})]),_:1}),Tn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Mn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Pn]),_:1})]),_:1}),Bn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[zn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Fn]),_:1})]),_:1}),Kn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[qn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Hn]),_:1})]),_:1}),Wn,Yn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Xn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Qn]),_:1})]),_:1}),jn,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[Jn]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[Zn]),_:1})]),_:1}),st,et,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[nt]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[tt]),_:1})]),_:1}),s("div",at,[lt,s("p",null,[n("Remember that even though the initial startup of the services are returned immediately, it make take several minutes or even hours for the services to be ready. For more information visit "),s("a",ot,[n("GVM official docs"),e(o)]),n(".")])]),it,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[rt]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[dt]),_:1})]),_:1}),ct,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[ut]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[gt]),_:1})]),_:1}),pt,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu 22.04"},{default:t(()=>[ht]),_:1}),e(a,{title:"Kali 2023.3"},{default:t(()=>[_t]),_:1})]),_:1}),mt,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-gsa_login.png",alt:"GSA login"},null,8,vt),bt,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-feed_status.png",alt:"GVM feed status"},null,8,St),Rt,e(l,null,{default:t(()=>[e(a,{title:"Ubuntu"},{default:t(()=>[It]),_:1}),e(a,{title:"Rocky"},{default:t(()=>[ft]),_:1})]),_:1}),Et,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-dashboard.png",alt:"GSA dashboard"},null,8,kt),Dt,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-gsa_about.png",alt:"GSA about"},null,8,yt),Ot,s("h2",Nt,[s("a",At,[s("span",null,[n("Install GVM 21.04 Atomicorp "),e(d,{text:"non-sponsored",type:"tip"})])])]),s("p",null,[n("Atomicorp GVM 21.04 package supports Redhat, Rocky, Centos or Fedora Linux platforms. "),s("a",$t,[n("Atomicorp GVM package"),e(o)]),n(".")]),Vt,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[Lt]),_:1})]),_:1}),Ut,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[xt]),_:1})]),_:1}),Gt,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[Ct]),_:1})]),_:1}),wt,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[Tt]),_:1})]),_:1}),Mt,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[Pt]),_:1})]),_:1}),Bt,zt,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[Ft]),_:1})]),_:1}),Kt,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[qt]),_:1})]),_:1}),Ht,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[Wt]),_:1})]),_:1}),Yt,Xt,e(l,null,{default:t(()=>[e(a,{title:"Rocky"},{default:t(()=>[Qt]),_:1})]),_:1}),jt,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_dashboard.png",alt:"GSA dashboard"},null,8,Jt),Zt,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_targets.png",alt:"GSA targets"},null,8,sa),ea,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_target.png",alt:"GSA target"},null,8,na),ta,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_tasks.png",alt:"GSA tasks"},null,8,aa),la,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_task.png",alt:"GSA task"},null,8,oa),ia,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_noauth_task.png",alt:"GSA noauth task"},null,8,ra),da,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_noauth_scan.png",alt:"GSA noauth scan"},null,8,ca),ua,ga,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_credentials.png",alt:"GSA credentials"},null,8,pa),ha,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_newcredentials.png",alt:"GSA new credentials"},null,8,_a),ma,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_auth_target.png",alt:"GSA auth target"},null,8,va),ba,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_auth_task.png",alt:"GSA auth task"},null,8,Sa),Ra,s("p",null,[n("To enforce two-factor authentication for Greenbone Security Assistant with privacyIDEA and YubiKey read the "),e(c,{to:"/privacyidea/"},{default:t(()=>[n("Two-factor authentication w/ privacyIDEA and YubiKey")]),_:1}),n(" chapter.")]),Ia,s("p",null,[n("If you encounter any issue or having questions regarding Greenbone Vulnerability Manager, I recommend using their helpful "),s("a",fa,[n("community forum"),e(o)]),n(".")]),s("p",null,[s("a",Ea,[n("Questions"),e(o)]),n(", "),s("a",ka,[n("comments"),e(o)]),n(", or "),s("a",Da,[n("problems"),e(o)]),n(" regarding this service? Create an issue "),s("a",ya,[n("here"),e(o)]),n(" or contact "),Oa,n(".")]),s("h2",Na,[s("a",Aa,[s("span",null,[n("Enterprise solutions "),e(d,{text:"non-sponsored",type:"tip"})])])]),$a,Va,s("p",null,[s("a",La,[n("Greenbone Security Manager"),e(o)])])])}const wa=u(h,[["render",Ua],["__file","index.html.vue"]]),Ta=JSON.parse('{"path":"/openvas/","title":"Greenbone Vulnerability Manager","lang":"en-US","frontmatter":{"lang":"en-US","title":"Greenbone Vulnerability Manager","description":"Greenbone is the world&#039;s most used open source vulnerability management provider. Their mission is to help you detect vulnerabilities before they can be exploited - reducing the risk and impact of cyberattacks.","head":[["link",{"rel":"canonical","href":"https://wwww.libellux.com/openvas/"}]]},"headers":[{"level":2,"title":"Configuration files","slug":"configuration-files","link":"#configuration-files","children":[]},{"level":2,"title":"System requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":2,"title":"Install GVM 22.4 from source","slug":"install-gvm-22-4-from-source","link":"#install-gvm-22-4-from-source","children":[{"level":3,"title":"Set up GVM with user-defined installation paths","slug":"set-up-gvm-with-user-defined-installation-paths","link":"#set-up-gvm-with-user-defined-installation-paths","children":[]},{"level":3,"title":"Import GVM signing key","slug":"import-gvm-signing-key","link":"#import-gvm-signing-key","children":[]},{"level":3,"title":"Build GVM libraries","slug":"build-gvm-libraries","link":"#build-gvm-libraries","children":[]},{"level":3,"title":"Build Greenbone Vulnerability Manager","slug":"build-greenbone-vulnerability-manager","link":"#build-greenbone-vulnerability-manager","children":[]},{"level":3,"title":"Build PostgreSQL helper pg-gvm","slug":"build-postgresql-helper-pg-gvm","link":"#build-postgresql-helper-pg-gvm","children":[]},{"level":3,"title":"Install Greenbone Security Assistant","slug":"install-greenbone-security-assistant","link":"#install-greenbone-security-assistant","children":[]},{"level":3,"title":"Build Greenbone Security Assistant Daemon","slug":"build-greenbone-security-assistant-daemon","link":"#build-greenbone-security-assistant-daemon","children":[]},{"level":3,"title":"Build OpenVAS SMB module","slug":"build-openvas-smb-module","link":"#build-openvas-smb-module","children":[]},{"level":3,"title":"Build OpenVAS Scanner","slug":"build-openvas-scanner","link":"#build-openvas-scanner","children":[]},{"level":3,"title":"Build ospd-openvas","slug":"build-ospd-openvas","link":"#build-ospd-openvas","children":[]},{"level":3,"title":"Build notus-scanner","slug":"build-notus-scanner","link":"#build-notus-scanner","children":[]},{"level":3,"title":"Install GVM tools","slug":"install-gvm-tools","link":"#install-gvm-tools","children":[]},{"level":3,"title":"Set up the Mosquitto broker","slug":"set-up-the-mosquitto-broker","link":"#set-up-the-mosquitto-broker","children":[]},{"level":3,"title":"Configure Redis","slug":"configure-redis","link":"#configure-redis","children":[]},{"level":3,"title":"Configure PostgreSQL database","slug":"configure-postgresql-database","link":"#configure-postgresql-database","children":[]},{"level":3,"title":"Create Admin user","slug":"create-admin-user","link":"#create-admin-user","children":[]},{"level":3,"title":"Install greenbone-feed-sync","slug":"install-greenbone-feed-sync","link":"#install-greenbone-feed-sync","children":[]},{"level":3,"title":"Greenbone Feed synchronisation","slug":"greenbone-feed-synchronisation","link":"#greenbone-feed-synchronisation","children":[]},{"level":3,"title":"Set up systemd","slug":"set-up-systemd","link":"#set-up-systemd","children":[]},{"level":3,"title":"Enable and start services","slug":"enable-and-start-services","link":"#enable-and-start-services","children":[]}]},{"level":2,"title":"Install GVM 21.04 Atomicorp","slug":"install-gvm-21-04-atomicorp","link":"#install-gvm-21-04-atomicorp","children":[]},{"level":2,"title":"Running vulnerability scans","slug":"running-vulnerability-scans","link":"#running-vulnerability-scans","children":[{"level":3,"title":"Unauthenticated scan","slug":"unauthenticated-scan","link":"#unauthenticated-scan","children":[]},{"level":3,"title":"Authenticated scan","slug":"authenticated-scan","link":"#authenticated-scan","children":[]}]},{"level":2,"title":"Two-factor authentication w/ privacyIDEA","slug":"two-factor-authentication-w-privacyidea","link":"#two-factor-authentication-w-privacyidea","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]},{"level":2,"title":"Enterprise solutions","slug":"enterprise-solutions","link":"#enterprise-solutions","children":[{"level":3,"title":"The Greenbone Security Manager","slug":"the-greenbone-security-manager","link":"#the-greenbone-security-manager","children":[]}]}],"git":{"updatedTime":1708751902000,"contributors":[{"name":"Libellux","email":"fredrik@libellux.com","commits":119},{"name":"Fredrik Hilmersson","email":"fredrik@libellux.com","commits":14}]},"filePathRelative":"openvas/README.md","readingTime":{"minutes":24.79,"words":7438}}');export{wa as comp,Ta as data};
