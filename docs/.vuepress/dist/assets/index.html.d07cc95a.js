import{_ as d,o as p,c as g,a as s,b as e,w as n,e as t,d as i,r}from"./app.b2d35d67.js";const h={},_={id:"greenbone-vulnerability-manager",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#greenbone-vulnerability-manager","aria-hidden":"true"},"#",-1),v=t(" Greenbone Vulnerability Manager "),b=s("p",null,"Greenbone is the world's most used open source vulnerability management provider. Their mission is to help you detect vulnerabilities before they can be exploited - reducing the risk and impact of cyberattacks. OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.",-1),S={href:"https://www.greenbone.net/en/vulnerability-management/",target:"_blank",rel:"noopener noreferrer"},f=t("GVM website"),R=t(),I={href:"https://www.openvas.org/",target:"_blank",rel:"noopener noreferrer"},E=t("OpenVAS website"),k=t(),y={href:"https://github.com/greenbone",target:"_blank",rel:"noopener noreferrer"},D=t("GitHub"),O=t(),N={href:"https://greenbone.github.io/docs/",target:"_blank",rel:"noopener noreferrer"},$=t("GVM official docs"),V=s("p",null,"Setup and configuration have been tested on the following operating systems:",-1),A={class:"custom-container tip"},U=s("p",{class:"custom-container-title"},"NOTE",-1),x=t("GVM revision 10 is the last release that will guide you on how-to build GVM (Ubuntu 22.04 and 20.04) from source. The new focus will be to create deb packages. Information on how-to install GVM through repository will of course be available from this page. For future reference on building GVM from source visit "),L={href:"https://greenbone.github.io/docs/latest/",target:"_blank",rel:"noopener noreferrer"},G=t("Greenbone Community Edition Documentation"),C=t("."),w=s("li",null,"Ubuntu- 16.04, 18.04, 20.04, 22.04 (Jammy Jellyfish)",-1),T=t("GVM 20.08 for Debian 10 visit "),M={href:"https://sadsloth.net/post/install-gvm-20_08-src-on-debian/",target:"_blank",rel:"noopener noreferrer"},P=t("sadsloth.net"),B=t("."),z=s("li",null,"GVM- 20.08, 20.08.1, 21.04 (21.4.2, 21.4.3, 21.4.4, 21.4.5), 22.4.0, Atomicorp 21.04 (Redhat 8, CentOS 8, Fedora 32, Fedora 34)",-1),F=i('<p><a href="https://fundof.me/libellux"><img src="https://img.shields.io/badge/fundof-libellux-green" alt="fundof"></a></p><h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The lines in the &quot;scripts&quot; below has been used for testing and successfully configured GVM. You may use the testing guide to install GVM or follow our detailed step-by-step tutorial below to install GVM 22.4.0.</p></div>',3),q={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu-22_04_GVM-22.4.0.sh",target:"_blank",rel:"noopener noreferrer"},K=t("GVM 22.4.0 (Ubuntu 22.04)"),Y={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu-20_04_GVM-22.4.0.sh",target:"_blank",rel:"noopener noreferrer"},H=t("GVM 22.4.0 (Ubuntu 20.04)"),W={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.5.sh",target:"_blank",rel:"noopener noreferrer"},X=t("GVM 21.4.5"),j={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.4.sh",target:"_blank",rel:"noopener noreferrer"},Q=t("GVM 21.4.4"),J={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.3.sh",target:"_blank",rel:"noopener noreferrer"},Z=t("GVM 21.4.3"),ss={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/openvas/config/ubuntu_21.4.2.sh",target:"_blank",rel:"noopener noreferrer"},es=t("GVM 21.4.2"),ns=i('<h2 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements" aria-hidden="true">#</a> System requirements</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>These minimum system requirements (VMware ESXi) are in no way official recommendations but used when testing and building GVM from source.</p></div><ul><li>Memory: 4 GB RAM</li><li>Free space: 20 GB</li></ul><h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>',4),ts=t("Dependencies required to install GVM 22.4.0 from source. For more detailed information regarding dependencies and their function please visit "),as={href:"https://greenbone.github.io/docs/",target:"_blank",rel:"noopener noreferrer"},os=t("GVM official docs"),ls=t(" website. It is also recommended if you want to keep yourself up-to-date to read "),is={href:"https://greenbone.github.io/docs/changelog.html",target:"_blank",rel:"noopener noreferrer"},rs=t("Greenbone's changelog"),us=t("."),cs=s("h2",{id:"install-gvm-22-4-0-from-source",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-gvm-22-4-0-from-source","aria-hidden":"true"},"#"),t(" Install GVM 22.4.0 from source")],-1),ds=s("p",null,"Begin to install the dependencies for GVM 22.4.0.",-1),ps=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
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
`)])])],-1),gs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo apt-get update && \\
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
python3-paho-mqtt mosquitto xmltoman doxygen
`)])])],-1),hs=s("h3",{id:"set-up-gvm-user-define-installation-paths",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#set-up-gvm-user-define-installation-paths","aria-hidden":"true"},"#"),t(" Set up GVM user define installation paths")],-1),_s=s("p",null,[t("Create the GVM user and add it to sudoers group without login. Also add your current sudo user to the GVM group so you're allowed to run "),s("em",null,"gvmd"),t(".")],-1),ms=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo useradd -r -M -U -G sudo -s /usr/sbin/nologin gvm && \\
sudo usermod -aG gvm $USER && su $USER
`)])])],-1),vs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo useradd -r -M -U -G sudo -s /usr/sbin/nologin gvm && \\
sudo usermod -aG gvm $USER && su $USER
`)])])],-1),bs=s("p",null,"Next define base, source, build and installation directories.",-1),Ss=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PATH=$PATH:/usr/local/sbin && export INSTALL_PREFIX=/usr/local && \\
export SOURCE_DIR=$HOME/source && mkdir -p $SOURCE_DIR && \\
export BUILD_DIR=$HOME/build && mkdir -p $BUILD_DIR && \\
export INSTALL_DIR=$HOME/install && mkdir -p $INSTALL_DIR
`)])])],-1),fs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PATH=$PATH:/usr/local/sbin && export INSTALL_PREFIX=/usr/local && \\
export SOURCE_DIR=$HOME/source && mkdir -p $SOURCE_DIR && \\
export BUILD_DIR=$HOME/build && mkdir -p $BUILD_DIR && \\
export INSTALL_DIR=$HOME/install && mkdir -p $INSTALL_DIR
`)])])],-1),Rs=s("h3",{id:"import-gvm-signing-key",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#import-gvm-signing-key","aria-hidden":"true"},"#"),t(" Import GVM signing key")],-1),Is=s("p",null,"Download the signing key from Greenbone community to validate the integrity of the source files.",-1),Es=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -f -L https://www.greenbone.net/GBCommunitySigningKey.asc -o /tmp/GBCommunitySigningKey.asc && \\
gpg --import /tmp/GBCommunitySigningKey.asc
`)])])],-1),ks=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -f -L https://www.greenbone.net/GBCommunitySigningKey.asc -o /tmp/GBCommunitySigningKey.asc && \\
gpg --import /tmp/GBCommunitySigningKey.asc
`)])])],-1),ys=s("p",null,"Edit GVM signing key to trust ultimately.",-1),Ds=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt
`)])])],-1),Os=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt
`)])])],-1),Ns=s("h3",{id:"build-gvm-libraries",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-gvm-libraries","aria-hidden":"true"},"#"),t(" Build GVM libraries")],-1),$s=t("Download and build the "),Vs={href:"https://github.com/greenbone/gvm-libs",target:"_blank",rel:"noopener noreferrer"},As=t("GVM libraries"),Us=t("."),xs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVM_VERSION=22.4.0
`)])])],-1),Ls=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVM_VERSION=22.4.0
`)])])],-1),Gs=s("p",null,"Download and verify the specified GVM libraries.",-1),Cs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVM_LIBS_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v$GVM_LIBS_VERSION.tar.gz -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvm-libs/releases/download/v$GVM_LIBS_VERSION/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz
`)])])],-1),ws=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVM_LIBS_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gvm-libs/archive/refs/tags/v$GVM_LIBS_VERSION.tar.gz -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvm-libs/releases/download/v$GVM_LIBS_VERSION/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc -o $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz.asc $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz
`)])])],-1),Ts=i(`<p>Make sure the output says that the signature from Greenbone Community Feed is good.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 12:11:44 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div></div></div><p>Before we can continue to install GVM libs (on Ubuntu 20.04) you&#39;ll need to install Paho C client.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Skip this step if you&#39;re running Ubuntu 21.04 or later.</p></div>`,4),Ms=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -f -L https://github.com/eclipse/paho.mqtt.c/archive/refs/tags/v1.3.10.tar.gz -o $SOURCE_DIR/paho-client-1.3.10.tar.gz && \\
tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/paho-client-1.3.10.tar.gz && \\
mkdir -p $BUILD_DIR/paho-client && cd $BUILD_DIR/paho-client && \\
cmake $SOURCE_DIR/paho.mqtt.c-1.3.10 \\
  -DPAHO_WITH_SSL=ON && \\
sudo cmake --build $BUILD_DIR/paho-client --target install
`)])])],-1),Ps=s("p",null,"Once you've confirmed that the signature is good, proceed to install GVM libraries.",-1),Bs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gvm-libs && cd $BUILD_DIR/gvm-libs && \\
cmake $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),zs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/gvm-libs && cd $BUILD_DIR/gvm-libs && \\
cmake $SOURCE_DIR/gvm-libs-$GVM_LIBS_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DSYSCONFDIR=/etc \\
  -DLOCALSTATEDIR=/var && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Fs=s("h3",{id:"build-the-greenbone-vulnerability-manager",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-the-greenbone-vulnerability-manager","aria-hidden":"true"},"#"),t(" Build the Greenbone Vulnerability Manager")],-1),qs=t("Next download, verify and build the "),Ks={href:"https://github.com/greenbone/gvmd",target:"_blank",rel:"noopener noreferrer"},Ys=t("Greenbone Vulnerability Manager (GVM)"),Hs=t(" version 22.4.0."),Ws=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVMD_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v$GVMD_VERSION.tar.gz -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvmd/releases/download/v$GVMD_VERSION/gvmd-$GVMD_VERSION.tar.gz.asc -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz
`)])])],-1),Xs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GVMD_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gvmd/archive/refs/tags/v$GVMD_VERSION.tar.gz -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gvmd/releases/download/v$GVMD_VERSION/gvmd-$GVMD_VERSION.tar.gz.asc -o $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz.asc $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz
`)])])],-1),js=i(`<p>Make sure the signature from Greenbone Community Feed is good.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 02:28:53 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Extract the downloaded GVMD file and proceed with the installation.</p>`,3),Qs=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
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
`)])])],-1),Js=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gvmd-$GVMD_VERSION.tar.gz && \\
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
`)])])],-1),Zs=s("h3",{id:"build-the-postgresql-helper-pg-gvm",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-the-postgresql-helper-pg-gvm","aria-hidden":"true"},"#"),t(" Build the PostgreSQL helper pg-gvm")],-1),se=s("p",null,"Proceed to download and build the latest PostgreSQL helper pg-gvm version 22.4.0.",-1),ee=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PG_GVM_VERSION=$GVM_VERSION
curl -f -L https://github.com/greenbone/pg-gvm/archive/refs/tags/v$PG_GVM_VERSION.tar.gz -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/pg-gvm/releases/download/v$PG_GVM_VERSION/pg-gvm-$PG_GVM_VERSION.tar.gz.asc -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz
`)])])],-1),ne=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export PG_GVM_VERSION=$GVM_VERSION
curl -f -L https://github.com/greenbone/pg-gvm/archive/refs/tags/v$PG_GVM_VERSION.tar.gz -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/pg-gvm/releases/download/v$PG_GVM_VERSION/pg-gvm-$PG_GVM_VERSION.tar.gz.asc -o $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz.asc $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz
`)])])],-1),te=s("p",null,"Proceed with the installation of the PostgreSQL helper.",-1),ae=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/pg-gvm && cd $BUILD_DIR/pg-gvm && \\
cmake $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DPostgreSQL_TYPE_INCLUDE_DIR=/usr/include/postgresql && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),oe=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/pg-gvm && cd $BUILD_DIR/pg-gvm && \\
cmake $SOURCE_DIR/pg-gvm-$PG_GVM_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release \\
  -DPostgreSQL_TYPE_INCLUDE_DIR=/usr/include/postgresql && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),le=s("h3",{id:"install-nodejs-and-yarn",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-nodejs-and-yarn","aria-hidden":"true"},"#"),t(" Install NodeJS and yarn")],-1),ie=s("p",null,"Install the required NodeJS version 14.x.",-1),re=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export NODE_VERSION=node_14.x && \\
export KEYRING=/usr/share/keyrings/nodesource.gpg && \\
export DISTRIBUTION="$(lsb_release -s -c)" && \\
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | sudo tee "$KEYRING" >/dev/null && \\
gpg --no-default-keyring --keyring "$KEYRING" --list-keys && \\
echo "deb [signed-by=$KEYRING] https://deb.nodesource.com/$NODE_VERSION $DISTRIBUTION main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \\
echo "deb-src [signed-by=$KEYRING] https://deb.nodesource.com/$NODE_VERSION $DISTRIBUTION main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list && \\
sudo apt update && \\
sudo apt install -y nodejs
`)])])],-1),ue=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export NODE_VERSION=node_14.x && \\
export KEYRING=/usr/share/keyrings/nodesource.gpg && \\
export DISTRIBUTION="$(lsb_release -s -c)" && \\
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | sudo tee "$KEYRING" >/dev/null && \\
gpg --no-default-keyring --keyring "$KEYRING" --list-keys && \\
echo "deb [signed-by=$KEYRING] https://deb.nodesource.com/$NODE_VERSION $DISTRIBUTION main" | sudo tee /etc/apt/sources.list.d/nodesource.list && \\
echo "deb-src [signed-by=$KEYRING] https://deb.nodesource.com/$NODE_VERSION $DISTRIBUTION main" | sudo tee -a /etc/apt/sources.list.d/nodesource.list && \\
sudo apt update && \\
sudo apt install -y nodejs
`)])])],-1),ce=s("p",null,"Once installed NodeJS proceed to install yarn.",-1),de=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \\
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \\
sudo apt update && \\
sudo apt install -y yarn
`)])])],-1),pe=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \\
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \\
sudo apt update && \\
sudo apt install -y yarn
`)])])],-1),ge=s("h3",{id:"build-the-greenbone-security-assistant",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-the-greenbone-security-assistant","aria-hidden":"true"},"#"),t(" Build the Greenbone Security Assistant")],-1),he=t("Proceed to download and build the "),_e={href:"https://github.com/greenbone/gsa",target:"_blank",rel:"noopener noreferrer"},me=t("Greenbone Security Assistant (GSA)"),ve=t(" version 22.4.0."),be=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSA_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gsa/archive/refs/tags/v$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz
`)])])],-1),Se=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSA_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gsa/archive/refs/tags/v$GSA_VERSION.tar.gz -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsa/releases/download/v$GSA_VERSION/gsa-$GSA_VERSION.tar.gz.asc -o $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz.asc $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz
`)])])],-1),fe=i(`<p>Once complete, verify the GSA downloads and make sure the signature from Greenbone Community Feed is good.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 02:59:15 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Proceed with the installation of GSA.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This may take a while.</p></div>`,4),Re=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
cd $SOURCE_DIR/gsa-$GSA_VERSION && rm -rf build && \\
yarn && yarn build && \\
sudo mkdir -p $INSTALL_PREFIX/share/gvm/gsad/web/ && \\
sudo cp -r build/* $INSTALL_PREFIX/share/gvm/gsad/web/
`)])])],-1),Ie=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsa-$GSA_VERSION.tar.gz && \\
cd $SOURCE_DIR/gsa-$GSA_VERSION && rm -rf build && \\
yarn && yarn build && \\
sudo mkdir -p $INSTALL_PREFIX/share/gvm/gsad/web/ && \\
sudo cp -r build/* $INSTALL_PREFIX/share/gvm/gsad/web/
`)])])],-1),Ee=s("h3",{id:"build-the-greenbone-security-assistant-daemon",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-the-greenbone-security-assistant-daemon","aria-hidden":"true"},"#"),t(" Build the Greenbone Security Assistant Daemon")],-1),ke=t("Proceed to download and build the "),ye={href:"https://github.com/greenbone/gsad",target:"_blank",rel:"noopener noreferrer"},De=t("Greenbone Security Assistant Daemon (GSAD)"),Oe=t(" version 22.4.0."),Ne=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSAD_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gsad/archive/refs/tags/v$GSAD_VERSION.tar.gz -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsad/releases/download/v$GSAD_VERSION/gsad-$GSAD_VERSION.tar.gz.asc -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz
`)])])],-1),$e=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GSAD_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/gsad/archive/refs/tags/v$GSAD_VERSION.tar.gz -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/gsad/releases/download/v$GSAD_VERSION/gsad-$GSAD_VERSION.tar.gz.asc -o $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz.asc $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz
`)])])],-1),Ve=s("p",null,"Once you've verified that the signature is good proceed build and install GSAD.",-1),Ae=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
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
`)])])],-1),Ue=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/gsad-$GSAD_VERSION.tar.gz && \\
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
`)])])],-1),xe=s("h3",{id:"build-the-openvas-samba-module",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-the-openvas-samba-module","aria-hidden":"true"},"#"),t(" Build the OpenVAS Samba module")],-1),Le=t("Download and build the "),Ge={href:"https://github.com/greenbone/openvas-smb",target:"_blank",rel:"noopener noreferrer"},Ce=t("OpenVAS SMB module"),we=t("."),Te=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"The OpenVAS Samba module is independently updated and its version tag may differ from the GVM version.")],-1),Me=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SMB_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v$OPENVAS_SMB_VERSION.tar.gz -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-smb/releases/download/v$OPENVAS_SMB_VERSION/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz
`)])])],-1),Pe=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SMB_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/openvas-smb/archive/refs/tags/v$OPENVAS_SMB_VERSION.tar.gz -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-smb/releases/download/v$OPENVAS_SMB_VERSION/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz.asc $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz
`)])])],-1),Be=i(`<p>Verify the SMB module download and make sure the signature from Greenbone Community Feed is trusted.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Fri 25 Jun 2021 06:36:43 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Next extract files and proceed with the installation.</p>`,3),ze=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/openvas-smb && cd $BUILD_DIR/openvas-smb && \\
cmake $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),Fe=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION.tar.gz && \\
mkdir -p $BUILD_DIR/openvas-smb && cd $BUILD_DIR/openvas-smb && \\
cmake $SOURCE_DIR/openvas-smb-$OPENVAS_SMB_VERSION \\
  -DCMAKE_INSTALL_PREFIX=$INSTALL_PREFIX \\
  -DCMAKE_BUILD_TYPE=Release && \\
make DESTDIR=$INSTALL_DIR install && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),qe=s("h3",{id:"build-the-openvas-scanner",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-the-openvas-scanner","aria-hidden":"true"},"#"),t(" Build the OpenVAS Scanner")],-1),Ke=t("Download and build the "),Ye={href:"https://github.com/greenbone/openvas",target:"_blank",rel:"noopener noreferrer"},He=t("openvas-scanner (OpenVAS)"),We=t("."),Xe=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SCANNER_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v$OPENVAS_SCANNER_VERSION.tar.gz -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-scanner/releases/download/v$OPENVAS_SCANNER_VERSION/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz
`)])])],-1),je=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OPENVAS_SCANNER_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/openvas-scanner/archive/refs/tags/v$OPENVAS_SCANNER_VERSION.tar.gz -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/openvas-scanner/releases/download/v$OPENVAS_SCANNER_VERSION/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc -o $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz.asc $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz
`)])])],-1),Qe=i(`<p>Verify the signature output.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Tue 03 Aug 2021 12:59:52 PM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div>`,2),Je=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
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
`)])])],-1),Ze=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/openvas-scanner-$OPENVAS_SCANNER_VERSION.tar.gz && \\
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
`)])])],-1),sn=s("h3",{id:"build-ospd-openvas",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-ospd-openvas","aria-hidden":"true"},"#"),t(" Build ospd-openvas")],-1),en=t("Proceed to download "),nn={href:"https://github.com/greenbone/ospd-openvas",target:"_blank",rel:"noopener noreferrer"},tn=t("ospd-openvas"),an=t("."),on=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OSPD_OPENVAS_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v$OSPD_OPENVAS_VERSION.tar.gz -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/ospd-openvas/releases/download/v$OSPD_OPENVAS_VERSION/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
`)])])],-1),ln=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export OSPD_OPENVAS_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/ospd-openvas/archive/refs/tags/v$OSPD_OPENVAS_VERSION.tar.gz -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/ospd-openvas/releases/download/v$OSPD_OPENVAS_VERSION/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc -o $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz.asc $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz
`)])])],-1),rn=i(`<p>Verify signature.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">gpg: Signature made Wed 04 Aug 2021 07:13:45 AM UTC
gpg:                using RSA key 8AE4BE429B60A59B311C2E739823FAA60ED1E580
gpg: Good signature from &quot;Greenbone Community Feed integrity key&quot; [ultimate]
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div></div></div><p>Extract files and start the installation.</p>`,3),un=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
cd $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION && \\
sudo python3 -m pip install . --prefix /usr --no-warn-script-location --no-dependencies && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),cn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION.tar.gz && \\
cd $SOURCE_DIR/ospd-openvas-$OSPD_OPENVAS_VERSION && \\
sudo python3 -m pip install . --prefix /usr/local --no-warn-script-location --no-dependencies && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),dn=s("h3",{id:"build-notus-scanner",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#build-notus-scanner","aria-hidden":"true"},"#"),t(" Build notus-scanner")],-1),pn=s("p",null,"First download and verify the new notus-scanner.",-1),gn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export NOTUS_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/notus-scanner/archive/refs/tags/v$NOTUS_VERSION.tar.gz -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/notus-scanner/releases/download/v$NOTUS_VERSION/notus-scanner-$NOTUS_VERSION.tar.gz.asc -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz
`)])])],-1),hn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export NOTUS_VERSION=$GVM_VERSION && \\
curl -f -L https://github.com/greenbone/notus-scanner/archive/refs/tags/v$NOTUS_VERSION.tar.gz -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
curl -f -L https://github.com/greenbone/notus-scanner/releases/download/v$NOTUS_VERSION/notus-scanner-$NOTUS_VERSION.tar.gz.asc -o $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc && \\
gpg --verify $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz.asc $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz
`)])])],-1),_n=s("p",null,"Once verified proceed and install.",-1),mn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
cd $SOURCE_DIR/notus-scanner-$NOTUS_VERSION && \\
sudo python3 -m pip install . --prefix /usr --no-warn-script-location --no-dependencies && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),vn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`tar -C $SOURCE_DIR -xvzf $SOURCE_DIR/notus-scanner-$NOTUS_VERSION.tar.gz && \\
cd $SOURCE_DIR/notus-scanner-$NOTUS_VERSION && \\
sudo python3 -m pip install . --prefix /usr/local --no-warn-script-location --no-dependencies && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),bn=s("h3",{id:"install-the-tomli-module",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-the-tomli-module","aria-hidden":"true"},"#"),t(" Install the tomli module")],-1),Sn=s("p",null,"Install the tomli module which is a required dependency for the notus-scanner.",-1),fn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo python3 -m pip install tomli
`)])])],-1),Rn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo python3 -m pip install tomli
`)])])],-1),In=s("h3",{id:"install-gvm-tools",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-gvm-tools","aria-hidden":"true"},"#"),t(" Install GVM tools")],-1),En=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo python3 -m pip install --prefix /usr --no-warn-script-location --no-dependencies gvm-tools && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),kn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo python3 -m pip install --prefix /usr/local --no-warn-script-location --no-dependencies gvm-tools && \\
sudo cp -rv $INSTALL_DIR/* / && \\
rm -rf $INSTALL_DIR/*
`)])])],-1),yn=s("h3",{id:"set-up-the-mosquitto-broker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#set-up-the-mosquitto-broker","aria-hidden":"true"},"#"),t(" Set up the Mosquitto broker")],-1),Dn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start mosquitto.service && \\
sudo systemctl enable mosquitto.service && \\
echo "mqtt_server_uri = localhost:1883" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),On=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start mosquitto.service && \\
sudo systemctl enable mosquitto.service && \\
echo "mqtt_server_uri = localhost:1883" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),Nn=s("h3",{id:"configure-redis",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configure-redis","aria-hidden":"true"},"#"),t(" Configure Redis")],-1),$n=s("p",null,"Next configure redis for the default GVM installation.",-1),Vn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $SOURCE_DIR/openvas-scanner-$GVM_VERSION/config/redis-openvas.conf /etc/redis/ && \\
sudo chown redis:redis /etc/redis/redis-openvas.conf && \\
echo "db_address = /run/redis-openvas/redis.sock" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),An=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $SOURCE_DIR/openvas-scanner-$GVM_VERSION/config/redis-openvas.conf /etc/redis/ && \\
sudo chown redis:redis /etc/redis/redis-openvas.conf && \\
echo "db_address = /run/redis-openvas/redis.sock" | sudo tee -a /etc/openvas/openvas.conf
`)])])],-1),Un=s("p",null,"Start the redis server and enable it as a start up service.",-1),xn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start redis-server@openvas.service && \\
sudo systemctl enable redis-server@openvas.service
`)])])],-1),Ln=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start redis-server@openvas.service && \\
sudo systemctl enable redis-server@openvas.service
`)])])],-1),Gn=s("p",null,"Add redis to the GVM group and set up correct permissions.",-1),Cn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir -p /var/lib/notus && \\
sudo mkdir -p /run/notus-scanner && \\
sudo mkdir -p /run/gvmd && \\
sudo usermod -aG redis gvm && \\
sudo chown -R gvm:gvm /var/lib/gvm && \\
sudo chown -R gvm:gvm /var/lib/openvas && \\
sudo chown -R gvm:gvm /var/lib/notus && \\
sudo chown -R gvm:gvm /var/log/gvm && \\
sudo chown -R gvm:gvm /run/gvmd && \\
sudo chown -R gvm:gvm /run/notus-scanner && \\
sudo chmod -R g+srw /var/lib/gvm && \\
sudo chmod -R g+srw /var/lib/openvas && \\
sudo chmod -R g+srw /var/log/gvm && \\
sudo chown gvm:gvm /usr/local/sbin/gvmd && \\
sudo chmod 6750 /usr/local/sbin/gvmd
`)])])],-1),wn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo mkdir -p /var/lib/notus && \\
sudo mkdir -p /run/notus-scanner && \\
sudo mkdir -p /run/gvmd && \\
sudo usermod -aG redis gvm && \\
sudo chown -R gvm:gvm /var/lib/gvm && \\
sudo chown -R gvm:gvm /var/lib/openvas && \\
sudo chown -R gvm:gvm /var/lib/notus && \\
sudo chown -R gvm:gvm /var/log/gvm && \\
sudo chown -R gvm:gvm /run/gvmd && \\
sudo chown -R gvm:gvm /run/notus-scanner && \\
sudo chmod -R g+srw /var/lib/gvm && \\
sudo chmod -R g+srw /var/lib/openvas && \\
sudo chmod -R g+srw /var/log/gvm && \\
sudo chown gvm:gvm /usr/local/sbin/gvmd && \\
sudo chmod 6750 /usr/local/sbin/gvmd
`)])])],-1),Tn=s("p",null,"You also need to adjust the permissions for the feed synchronization.",-1),Mn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo chown gvm:gvm /usr/local/bin/greenbone-nvt-sync && \\
sudo chmod 740 /usr/local/sbin/greenbone-feed-sync && \\
sudo chown gvm:gvm /usr/local/sbin/greenbone-*-sync && \\
sudo chmod 740 /usr/local/sbin/greenbone-*-sync
`)])])],-1),Pn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo chown gvm:gvm /usr/local/bin/greenbone-nvt-sync && \\
sudo chmod 740 /usr/local/sbin/greenbone-feed-sync && \\
sudo chown gvm:gvm /usr/local/sbin/greenbone-*-sync && \\
sudo chmod 740 /usr/local/sbin/greenbone-*-sync
`)])])],-1),Bn=s("p",null,"Feed validation.",-1),zn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GNUPGHOME=/tmp/openvas-gnupg && \\
mkdir -p $GNUPGHOME && \\
gpg --import /tmp/GBCommunitySigningKey.asc && \\
echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt && \\
export OPENVAS_GNUPG_HOME=/etc/openvas/gnupg && \\
sudo mkdir -p $OPENVAS_GNUPG_HOME && \\
sudo cp -r /tmp/openvas-gnupg/* $OPENVAS_GNUPG_HOME/ && \\
sudo chown -R gvm:gvm $OPENVAS_GNUPG_HOME
`)])])],-1),Fn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`export GNUPGHOME=/tmp/openvas-gnupg && \\
mkdir -p $GNUPGHOME && \\
gpg --import /tmp/GBCommunitySigningKey.asc && \\
echo "8AE4BE429B60A59B311C2E739823FAA60ED1E580:6:" > /tmp/ownertrust.txt && \\
gpg --import-ownertrust < /tmp/ownertrust.txt && \\
export OPENVAS_GNUPG_HOME=/etc/openvas/gnupg && \\
sudo mkdir -p $OPENVAS_GNUPG_HOME && \\
sudo cp -r /tmp/openvas-gnupg/* $OPENVAS_GNUPG_HOME/ && \\
sudo chown -R gvm:gvm $OPENVAS_GNUPG_HOME
`)])])],-1),qn=s("p",null,"OpenVAS will be launched from an ospd-openvas process. Update the secure path in the sudoers file accordingly.",-1),Kn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo visudo
`)])])],-1),Yn=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo visudo
`)])])],-1),Hn=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Allow members of group sudo to execute any command</span>
%sudo   <span class="token assign-left variable">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span>ALL:ALL<span class="token punctuation">)</span> ALL

<span class="token comment"># allow users of the gvm group run openvas</span>
%gvm ALL <span class="token operator">=</span> NOPASSWD: /usr/local/sbin/openvas
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configure-postgresql-database" tabindex="-1"><a class="header-anchor" href="#configure-postgresql-database" aria-hidden="true">#</a> Configure PostgreSQL database</h3>`,2),Wn=t("For additional information see reference greenbone/gvmd "),Xn={href:"https://github.com/greenbone/gvmd/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"},jn=t("INSTALL.md"),Qn=t(". First make sure that the required dependencies have been installed (see "),Jn=s("a",{href:"#prerequisites"},"Prerequisites",-1),Zn=t("). Before we can add the PostgreSQL user make sure that the service is up and running."),st=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start postgresql@14-main.service
`)])])],-1),et=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start postgresql@12-main.service
`)])])],-1),nt=s("p",null,"Proceed to create a Postgres user and database.",-1),tt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u postgres bash
createuser -DRS gvm && createdb -O gvm gvmd
psql gvmd
`)])])],-1),at=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u postgres bash
createuser -DRS gvm && createdb -O gvm gvmd
psql gvmd
`)])])],-1),ot=i(`<p>Setup correct permissions and create database extensions.</p><div class="language-plsql ext-plsql"><pre class="language-plsql"><code>gvmd<span class="token operator">=</span># <span class="token keyword">create</span> role dba <span class="token keyword">with</span> superuser noinherit<span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">grant</span> dba <span class="token keyword">to</span> gvm<span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">create</span> extension <span class="token string">&quot;uuid-ossp&quot;</span><span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">create</span> extension <span class="token string">&quot;pgcrypto&quot;</span><span class="token punctuation">;</span>
gvmd<span class="token operator">=</span># <span class="token keyword">exit</span>
<span class="token keyword">exit</span>
</code></pre></div><h3 id="create-gvm-admin" tabindex="-1"><a class="header-anchor" href="#create-gvm-admin" aria-hidden="true">#</a> Create GVM admin</h3><p>Create the GVM administration user. Do not forget to change the password later.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Do not use special characters in the password.</p></div><p>Before you create the administrator, make sure you did exit the postgres session and reloaded the dynamic loader cache.</p>`,6),lt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo ldconfig
`)])])],-1),it=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo ldconfig
`)])])],-1),rt=s("p",null,"Once you've reloaded the dynamic loader cache proceed with the user creation.",-1),ut=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --create-user=admin --password=admin
User created.
`)])])],-1),ct=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --create-user=admin --password=admin
User created.
`)])])],-1),dt=s("p",null,"Next lets retrieve the administrators uuid.",-1),pt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlight-line"},"\xA0")])],-1),gt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --get-users --verbose
admin 0279ba6c-391a-472f-8cbd-1f6eb808823b
`)])])],-1),ht=s("p",null,"Use the administration uuid and modify the gvmd settings. Remember to put your uuid as the value option.",-1),_t=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE
`)])])],-1),mt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo gvmd --modify-setting 78eceaec-3385-11ea-b237-28d24461215b --value UUID_HERE
`)])])],-1),vt=s("h3",{id:"update-network-vulnerability-tests",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-network-vulnerability-tests","aria-hidden":"true"},"#"),t(" Update Network Vulnerability Tests")],-1),bt=s("p",null,"Update Network Vulnerability Tests (NVT) from Greenbone Community Feed.",-1),St=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"This may take a while.")],-1),ft=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u gvm greenbone-nvt-sync
`)])])],-1),Rt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u gvm greenbone-nvt-sync
`)])])],-1),It=s("h3",{id:"update-greenbone-feed-synchronisation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#update-greenbone-feed-synchronisation","aria-hidden":"true"},"#"),t(" Update Greenbone Feed synchronisation")],-1),Et=s("p",null,"Update the Greenbone feed synchronisation one at the time.",-1),kt=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"Only one sync per time, otherwise the source ip will be temporarily blocked.")],-1),yt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u gvm greenbone-feed-sync --type GVMD_DATA
sudo -u gvm greenbone-feed-sync --type SCAP
sudo -u gvm greenbone-feed-sync --type CERT
`)])])],-1),Dt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u gvm greenbone-feed-sync --type GVMD_DATA
sudo -u gvm greenbone-feed-sync --type SCAP
sudo -u gvm greenbone-feed-sync --type CERT
`)])])],-1),Ot=s("p",null,[t("To keep the Greenbone feed up-to-date you may create a "),s("a",{href:"#scheduled-jobs"},"scheduled job"),t(" using crontab.")],-1),Nt=s("h3",{id:"generate-gvm-certificates",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#generate-gvm-certificates","aria-hidden":"true"},"#"),t(" Generate GVM certificates")],-1),$t=s("p",null,"Once you've finished the feed synchronisation, generate GVM certificates.",-1),Vt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u gvm gvm-manage-certs -a
`)])])],-1),At=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo -u gvm gvm-manage-certs -a
`)])])],-1),Ut=s("h3",{id:"set-up-systemd",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#set-up-systemd","aria-hidden":"true"},"#"),t(" Set up systemd")],-1),xt=s("p",null,"Next setup the startup scripts. First configure the Greenbone Manager startup script.",-1),Lt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gvmd.service
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
`)])])],-1),Gt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gvmd.service
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
`)])])],-1),Ct=s("p",null,"Copy the startup script from the build folder to your system manager directory.",-1),wt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gvmd.service /etc/systemd/system/
`)])])],-1),Tt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gvmd.service /etc/systemd/system/
`)])])],-1),Mt=s("p",null,"Once the first startup script is saved proceed to create the script for the Greenbone Security Assistant (GSA). Remember to define your IP address for GSA.",-1),Pt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gsad.service
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
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")])],-1),Bt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/gsad.service
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
`)])])],-1),zt=s("p",null,"Copy the startup script to system directory.",-1),Ft=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gsad.service /etc/systemd/system/
`)])])],-1),qt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/gsad.service /etc/systemd/system/
`)])])],-1),Kt=s("p",null,"Create the systemd service script for ospd-openvas.",-1),Yt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/ospd-openvas.service
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
`)])])],-1),Ht=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/ospd-openvas.service
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
`)])])],-1),Wt=s("p",null,"Finally copy the last startup script to your system manager directory.",-1),Xt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/ospd-openvas.service /etc/systemd/system/
`)])])],-1),jt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/ospd-openvas.service /etc/systemd/system/
`)])])],-1),Qt=s("p",null,"Create the systemd service script for notus-scanner.",-1),Jt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/notus-scanner.service
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
`)])])],-1),Zt=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`cat << EOF > $BUILD_DIR/notus-scanner.service
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
`)])])],-1),sa=s("p",null,"Finally copy the last startup script to your system manager directory.",-1),ea=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/notus-scanner.service /etc/systemd/system/
`)])])],-1),na=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo cp $BUILD_DIR/notus-scanner.service /etc/systemd/system/
`)])])],-1),ta=s("h3",{id:"enable-and-start-services",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#enable-and-start-services","aria-hidden":"true"},"#"),t(" Enable and start services")],-1),aa=s("p",null,"To enable the created startup scripts, reload the system control daemon.",-1),oa=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),la=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl daemon-reload
`)])])],-1),ia=s("p",null,"Once you've reloaded the daemon proceed to enable each of the services.",-1),ra=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable notus-scanner
sudo systemctl enable ospd-openvas
sudo systemctl enable gvmd
sudo systemctl enable gsad
`)])])],-1),ua=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl enable notus-scanner
sudo systemctl enable ospd-openvas
sudo systemctl enable gvmd
sudo systemctl enable gsad
`)])])],-1),ca=s("p",null,"Next start each service.",-1),da=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,[t("If any of the service for some reason to do not start you can use for e.g. "),s("code",null,"journalctl -u notus-scanner.service"),t(" to view the full trace.")])],-1),pa=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start notus-scanner
sudo systemctl start ospd-openvas
sudo systemctl start gvmd
sudo systemctl start gsad
`)])])],-1),ga=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl start notus-scanner
sudo systemctl start ospd-openvas
sudo systemctl start gvmd
sudo systemctl start gsad
`)])])],-1),ha={class:"custom-container danger"},_a=s("p",{class:"custom-container-title"},"DANGER",-1),ma=t("Remember that even though the initial startup of the services are returned immediately, it make take several minutes or even hours for the services to be ready. For more information visit "),va={href:"https://greenbone.github.io/docs/gvm-21.04/index.html#starting-services-with-systemd",target:"_blank",rel:"noopener noreferrer"},ba=t("GVM official docs"),Sa=t("."),fa=s("p",null,"You can check the current status of each of the services by running the commands below.",-1),Ra=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status ospd-openvas.service
`)])])],-1),Ia=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status ospd-openvas.service
`)])])],-1),Ea=i(`<div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">\u25CF ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
     Loaded: loaded (/etc/systemd/system/ospd-openvas.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2021-10-11 18:22:39 UTC; 5min ago
       Docs: man:ospd-openvas(8)
             man:openvas(8)
    Process: 37213 ExecStart=/usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/openvas -&gt;
   Main PID: 37228 (ospd-openvas)
      Tasks: 6 (limit: 2278)
     Memory: 16.5M
     CGroup: /system.slice/ospd-openvas.service
             \u251C\u250037228 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/&gt;
             \u251C\u250037230 /usr/bin/python3 /usr/local/bin/ospd-openvas --unix-socket /run/ospd/ospd-openvas.sock --pid-file /run/ospd/ospd-openvas.pid --log-file /var/log/gvm/ospd-openvas.log --lock-file-dir /var/lib/&gt;
             \u251C\u250037297 openvas --update-vt-info
             \u2514\u250037300 openvas: Reloaded 43550 of 77138 NVTs (56% / ETA: 04:25)

Oct 11 18:22:37 server@libellux systemd[1]: Starting OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)...
Oct 11 18:22:39 server@libellux systemd[1]: Started OSPd Wrapper for the OpenVAS Scanner (ospd-openvas).
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div>`,1),ka=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gvmd.service
`)])])],-1),ya=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gvmd.service
`)])])],-1),Da=i(`<p>Synchronizing the SCAP database is usually what takes a lot of time so please be patient and do not restart your server.</p><div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">\u25CF gvmd.service - Greenbone Vulnerability Manager daemon (gvmd)
     Loaded: loaded (/etc/systemd/system/gvmd.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2021-10-11 18:22:46 UTC; 8min ago
       Docs: man:gvmd(8)
    Process: 37240 ExecStart=/usr/local/sbin/gvmd --osp-vt-update=/run/ospd/ospd-openvas.sock --listen-group=gvm (code=exited, status=0/SUCCESS)
   Main PID: 37251 (gvmd)
      Tasks: 3 (limit: 2278)
     Memory: 1.6G
     CGroup: /system.slice/gvmd.service
             \u251C\u250037251 gvmd: Waiting for incoming connections
             \u251C\u250037272 gpg-agent --homedir /var/lib/gvm/gvmd/gnupg --use-standard-socket --daemon
             \u2514\u250037622 gvmd: Syncing SCAP: Updating CPEs

Oct 11 18:22:43 server@libellux systemd[1]: Starting Greenbone Vulnerability Manager daemon (gvmd)...
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div></div>`,2),Oa=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gsad.service
`)])])],-1),Na=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`sudo systemctl status gsad.service
`)])])],-1),$a=i(`<div class="language-shell-session ext-shell-session"><pre class="language-shell-session"><code><span class="token output">\u25CF gsad.service - Greenbone Security Assistant daemon (gsad)
     Loaded: loaded (/etc/systemd/system/gsad.service; enabled; vendor preset: enabled)
     Active: active (running) since Mon 2021-10-11 18:50:15 UTC; 1min 11s ago
       Docs: man:gsad(8)
             https://www.greenbone.net
    Process: 38710 ExecStart=/usr/local/sbin/gsad --listen=192.168.0.1 --port=9392 (code=exited, status=0/SUCCESS)
   Main PID: 38715
      Tasks: 8 (limit: 2278)
     Memory: 2.1M
     CGroup: /system.slice/gsad.service
             \u2514\u250038714 /usr/local/sbin/gsad --listen=192.168.0.1 --port=9392

Oct 11 18:50:12 server@libellux systemd[1]: Starting Greenbone Security Assistant daemon (gsad)...
Oct 11 18:50:15 server@libellux systemd[1]: Started Greenbone Security Assistant daemon (gsad).
</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div></div><p>Login at your localhost e.g. <code>https://192.168.0.1:9392</code> with the username <code>admin</code> and the chosen password.</p>`,2),Va=["src"],Aa=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"This may take a while.")],-1),Ua=s("p",null,[t("Once logged in, go to the "),s("em",null,"Administration"),t(" tab and select "),s("em",null,"Feed Status"),t(". You'll see that the update is in progress.")],-1),xa=["src"],La=s("p",null,[t("You may check the "),s("em",null,"gvmd"),t(" logs in real-time to see what updates are being made.")],-1),Ga=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"tail"),t(" -f /var/log/gvm/gvmd.log")])]),t(`
`)])])],-1),Ca=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),wa=s("p",null,[t("When the status changed to "),s("em",null,"current"),t(" in the "),s("em",null,"Feed status"),t(" go to the dashboard and it will be populated with CVEs by creation time and NVTs by severity class.")],-1),Ta=["src"],Ma=s("p",null,[t("You may also confirm the current version of GSA. Go to the "),s("em",null,"Help"),t(" tab and select "),s("em",null,"About"),t(".")],-1),Pa=["src"],Ba=s("p",null,[t("To run basic vulnerability scans and get a feel for how OpenVAS works, check the "),s("a",{href:"#running-vulnerability-scans"},"Running vulnerability scans"),t(" section.")],-1),za={id:"install-gvm-21-04-atomicorp",tabindex:"-1"},Fa=s("a",{class:"header-anchor",href:"#install-gvm-21-04-atomicorp","aria-hidden":"true"},"#",-1),qa=t(" Install GVM 21.04 Atomicorp "),Ka=t("Atomicorp GVM 21.04 package supports Redhat, Rocky, Centos or Fedora Linux platforms. "),Ya={href:"https://github.com/Atomicorp/gvm",target:"_blank",rel:"noopener noreferrer"},Ha=t("Atomicorp GVM package"),Wa=t("."),Xa=s("p",null,"Check if SELinux is enabled.",-1),ja=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},"sestatus")]),t(`
`),s("span",{class:"token output"},`SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0")])],-1),Qa=s("p",null,"If enabled proceed to disable SELinux by running the command below.",-1),Ja=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(" setenforce "),s("span",{class:"token number"},"0")])]),t(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"nano"),t(" /etc/selinux/config")])]),t(`
`)])]),s("div",{class:"highlight-lines"},[s("div",{class:"highlight-line"},"\xA0"),s("br")])],-1),Za=i(`<p>Update the SELinux configuration file and set SELINUX to disabled.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># This file controls the state of SELinux on the system.</span>
<span class="token comment"># SELINUX= can take one of these three values:</span>
<span class="token comment">#     enforcing - SELinux security policy is enforced.</span>
<span class="token comment">#     permissive - SELinux prints warnings instead of enforcing.</span>
<span class="token comment">#     disabled - No SELinux policy is loaded.</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save and reboot the system.</p>`,3),so=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"shutdown"),t(" -r now")])]),t(`
`)])])],-1),eo=s("p",null,"Once the system rebooted, make sure that SELinux has been disabled",-1),no=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},"sestatus")]),t(`
`),s("span",{class:"token output"},`SELinux status:                 disabled
`)])])],-1),to=s("p",null,"Continue and download the Atomicorp installer.",-1),ao=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"wget"),t(" -q -O - https://updates.atomicorp.com/installers/atomic "),s("span",{class:"token operator"},"|"),t(),s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"sh")])]),t(`

`),s("span",{class:"token output"},`For supported software packages please contact us at: 

  sales@atomicorp.com

Do you agree to these terms? (yes/no) [Default: yes] yes
Enable repo by default? (yes/no) [Default: yes]: yes
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("div",{class:"highlight-line"},"\xA0")])],-1),oo=s("p",null,"Enable PowerTools and install extra packages.",-1),lo=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,"Only required for Redhat, Rocky and CentOS.")],-1),io=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@centos"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(" yum config-manager --set-enabled PowerTools")])]),t(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@centos"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(" yum "),s("span",{class:"token function"},"install"),t(" epel-release")])]),t(`
`)])])],-1),ro=s("p",null,"Proceed and install GVM.",-1),uo=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(" yum "),s("span",{class:"token function"},"install"),t(" gvm")])]),t(`
`)])])],-1),co=s("p",null,"Finally run the GVM configuration script to setup GVM (this might take awhile).",-1),po=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@rocky"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(" gvm-setup")])]),t(`
`)])])],-1),go=s("p",null,"Once the GVM setup has been complete, proceed to set the administrator password.",-1),ho=s("div",{class:"custom-container warning"},[s("p",{class:"custom-container-title"},"WARNING"),s("p",null,"Do not use special characters in the password.")],-1),_o=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`Updating OpenVAS Manager certificates: Complete

GVMD startup: Done

Set the GSAD admin users password.
The admin user is used to configure accounts,
Update NVT's manually, and manage roles.

Enter Administrator Password:
Verify Administrator Password:

Setup complete
  Log in to GSAD at https://localhost
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"},"\xA0"),s("div",{class:"highlight-line"},"\xA0"),s("br"),s("br"),s("br")])],-1),mo=s("p",null,[t("Login at your localhost e.g. "),s("code",null,"https://192.168.0.1"),t(" with the username "),s("code",null,"admin"),t(" and the chosen password.")],-1),vo=["src"],bo=i('<h2 id="running-vulnerability-scans" tabindex="-1"><a class="header-anchor" href="#running-vulnerability-scans" aria-hidden="true">#</a> Running vulnerability scans</h2><p>There are several approaches on how to configure and run tasks (scans) toward your targets (hosts) in GVM. In this tutorial we will go through how to run the more basic tasks. We will do both unauthenticated scans, where we do not grant GVM SSH access to our target, and authenticated scans to help identify internal server vulnerabilites or misconfigurations.</p><h3 id="unauthenticated-scan" tabindex="-1"><a class="header-anchor" href="#unauthenticated-scan" aria-hidden="true">#</a> Unauthenticated scan</h3><p>Login to the Greenbone Security Assistant (GSA) e.g. <code>https://192.168.0.1</code>. Once logged in we will add our first target. Go the the <em>Configuration</em> menu in the top navigation and select <em>Targets</em>.</p>',4),So=["src"],fo=s("p",null,[t("In the top left corner of the "),s("em",null,"Targets"),t(" view there's a starred document icon, click and select to create a "),s("em",null,"New Target"),t(". Fill in the name of the target server e.g. "),s("em",null,"Ubuntu Client"),t(" and its IP address "),s("code",null,"192.168.0.2"),t(". Leave the rest of the settings in default.")],-1),Ro=["src"],Io=s("p",null,[t("Next we will create a task for unauthenticated targets (scans without SSH access). Go the "),s("em",null,"Scans"),t(" in the top menu and select "),s("em",null,"Tasks"),t(".")],-1),Eo=["src"],ko=s("p",null,[t("Click the starred document icon in the top left corner of the "),s("em",null,"Tasks"),t(" view.")],-1),yo=["src"],Do=s("p",null,[t("Select a descriptive name for your task e.g. Unauthenticated scan. In the "),s("em",null,"Scan Targets"),t(" dropdown menu select your target we created before (Ubuntu Client). Leave the default settings and click save.")],-1),Oo=["src"],No=s("p",null,[t("You will then be redirected back to the "),s("em",null,"Tasks"),t(" overview and our new task will be listed in the table below the graphs. To start the scan press the start button on the right side of the table.")],-1),$o=["src"],Vo=s("h3",{id:"authenticated-scan",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#authenticated-scan","aria-hidden":"true"},"#"),t(" Authenticated scan")],-1),Ao=s("p",null,[t("First make sure that you've generated SSH keys for your GVM client user e.g. "),s("code",null,"client@ubuntu"),t(". Add your public key to the targets authorized keys file. You may have to connect to your target host, through SSH, before running GVM vulnerability scan to add the target host to your clients machine's known hosts. Once you've established a secure connection between your client and target, proceed to configure credentials in the Greenbone Security Assistant. Go to "),s("em",null,"Configuration"),t(" and select "),s("em",null,"Credentials"),t(".")],-1),Uo=["src"],xo=s("p",null,[t("Next click the starred document in the top left corner to create your new credentials. Give the credentials a desciptive name with an optional comment. In the dropdown menu "),s("em",null,"Type"),t(", select "),s("em",null,"Username + SSH key"),t(" and disallow insecure use and auto-generation. Add the username of the target host user followed by the password and upload the private key (e.g. id_rsa). Click save.")],-1),Lo=["src"],Go=s("p",null,[t("Go to the "),s("em",null,"Targets"),t(" section and either edit your "),s("a",{href:"#unauthenticated-scan"},"unauthenticated scan"),t(" or create a new target. Set the host IP address and in the dropdown menu, under the "),s("em",null,"Credentials for authentication checks"),t(", select your newly created SSH credential.")],-1),Co=["src"],wo=s("p",null,"Finally create a new task and select the target that we attached our credentials to and leave the default settings.",-1),To=["src"],Mo=s("h2",{id:"two-factor-authentication-w-privacyidea",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#two-factor-authentication-w-privacyidea","aria-hidden":"true"},"#"),t(" Two-factor authentication w/ privacyIDEA")],-1),Po=t("To enforce two-factor authentication for Greenbone Security Assistant with privacyIDEA and YubiKey read the "),Bo=t("Two-factor authentication w/ privacyIDEA and YubiKey"),zo=t(" chapter."),Fo=s("h2",{id:"scheduled-jobs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#scheduled-jobs","aria-hidden":"true"},"#"),t(" Scheduled jobs")],-1),qo=s("p",null,"To keep the community feed up-to-date create a file and add the Greenbone feed commands to check for daily updates using crontab.",-1),Ko=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"touch"),t(" /usr/local/bin/openvas-update")])]),t(`
`)])])],-1),Yo=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),Ho=s("p",null,"Make sure the file is owned by the gvm user.",-1),Wo=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"chown"),t(" gvm:gvm /usr/local/bin/openvas-update")])]),t(`
`)])])],-1),Xo=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),jo=s("p",null,"Make the file executable.",-1),Qo=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"chmod"),t(" a+x /usr/local/bin/openvas-update")])]),t(`
`)])])],-1),Jo=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),Zo=s("p",null,"Next open the file in your favorite text editor.",-1),sl=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"nano"),t(" /usr/local/bin/openvas-update")])]),t(`
`)])])],-1),el=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),nl=s("p",null,"Enter the Greenbone feed commands below to keep the community feed up-to-date.",-1),tl=s("div",{class:"language-shell-session ext-shell-session line-numbers-mode"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`/usr/local/bin/greenbone-nvt-sync
/usr/local/sbin/greenbone-feed-sync --type GVMD_DATA
/usr/local/sbin/greenbone-feed-sync --type SCAP
/usr/local/sbin/greenbone-feed-sync --type CERT
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),al=s("div",{class:"language-shell-session ext-shell-session line-numbers-mode"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),ol=s("p",null,"Switch to root and edit crontab to add the file you created to check for daily updates.",-1),ll=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),t(),s("span",{class:"token function"},"su")])]),t(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"root@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),t(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"crontab"),t(" -e")])]),t(`
`)])])],-1),il=s("div",{class:"language-shell-session ext-shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),rl=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Edit this file to introduce tasks to be run by cron.</span>
<span class="token comment">#</span>
<span class="token comment"># Each task to run has to be defined through a single line</span>
<span class="token comment"># indicating with different fields when the task will be run</span>
<span class="token comment"># and what command to run for the task</span>
<span class="token comment">#</span>
<span class="token comment"># To define the time you can provide concrete values for</span>
<span class="token comment"># minute (m), hour (h), day of month (dom), month (mon),</span>
<span class="token comment"># and day of week (dow) or use &#39;*&#39; in these fields (for &#39;any&#39;).</span>
<span class="token comment">#</span>
<span class="token comment"># Notice that tasks will be started based on the cron&#39;s system</span>
<span class="token comment"># daemon&#39;s notion of time and timezones.</span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>`,2),ul=t("If you encounter any issue or having questions regarding Greenbone Vulnerability Manager, I recommend using their helpful "),cl={href:"https://community.greenbone.net/",target:"_blank",rel:"noopener noreferrer"},dl=t("community forum"),pl=t("."),gl={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},hl=t("Questions"),_l=t(", "),ml={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},vl=t("comments"),bl=t(", or "),Sl={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},fl=t("problems"),Rl=t(" regarding this service? Create an issue "),Il={href:"https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},El=t("here"),kl=t(" or contact "),yl=s("a",{href:"mailto:webmaster@libellux.com"},"webmaster@libellux.com",-1),Dl=t("."),Ol={id:"enterprise-solutions",tabindex:"-1"},Nl=s("a",{class:"header-anchor",href:"#enterprise-solutions","aria-hidden":"true"},"#",-1),$l=t(" Enterprise solutions "),Vl=s("h3",{id:"the-greenbone-security-manager",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#the-greenbone-security-manager","aria-hidden":"true"},"#"),t(" The Greenbone Security Manager")],-1),Al=s("p",null,"The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.",-1),Ul={href:"https://www.greenbone.net/en/product-comparison/",target:"_blank",rel:"noopener noreferrer"},xl=t("Greenbone Security Manager");function Ll(Gl,Cl){const u=r("Badge"),l=r("ExternalLinkIcon"),a=r("CodeGroupItem"),o=r("CodeGroup"),c=r("RouterLink");return p(),g("div",null,[s("h1",_,[m,v,e(u,{text:"Rev 10",type:"tip"})]),b,s("p",null,[s("a",S,[f,e(l)]),R,s("a",I,[E,e(l)]),k,s("a",y,[D,e(l)]),O,s("a",N,[$,e(l)])]),V,s("div",A,[U,s("p",null,[x,s("a",L,[G,e(l)]),C])]),s("ul",null,[w,s("li",null,[T,s("a",M,[P,e(l)]),B]),z]),F,s("ul",null,[s("li",null,[s("a",q,[K,e(l)])]),s("li",null,[s("a",Y,[H,e(l)])]),s("li",null,[s("a",W,[X,e(l)])]),s("li",null,[s("a",j,[Q,e(l)])]),s("li",null,[s("a",J,[Z,e(l)])]),s("li",null,[s("a",ss,[es,e(l)])])]),ns,s("p",null,[ts,s("a",as,[os,e(l)]),ls,s("a",is,[rs,e(l)]),us]),cs,ds,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ps]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[gs]),_:1})]),_:1}),hs,_s,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ms]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[vs]),_:1})]),_:1}),bs,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Ss]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[fs]),_:1})]),_:1}),Rs,Is,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Es]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ks]),_:1})]),_:1}),ys,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Ds]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Os]),_:1})]),_:1}),Ns,s("p",null,[$s,s("a",Vs,[As,e(l)]),Us]),e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[xs]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ls]),_:1})]),_:1}),Gs,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Cs]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ws]),_:1})]),_:1}),Ts,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ms]),_:1})]),_:1}),Ps,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Bs]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[zs]),_:1})]),_:1}),Fs,s("p",null,[qs,s("a",Ks,[Ys,e(l)]),Hs]),e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Ws]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Xs]),_:1})]),_:1}),js,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Qs]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Js]),_:1})]),_:1}),Zs,se,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ee]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ne]),_:1})]),_:1}),te,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ae]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[oe]),_:1})]),_:1}),le,ie,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[re]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ue]),_:1})]),_:1}),ce,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[de]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[pe]),_:1})]),_:1}),ge,s("p",null,[he,s("a",_e,[me,e(l)]),ve]),e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[be]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Se]),_:1})]),_:1}),fe,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Re]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ie]),_:1})]),_:1}),Ee,s("p",null,[ke,s("a",ye,[De,e(l)]),Oe]),e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Ne]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[$e]),_:1})]),_:1}),Ve,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Ae]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ue]),_:1})]),_:1}),xe,s("p",null,[Le,s("a",Ge,[Ce,e(l)]),we]),Te,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Me]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Pe]),_:1})]),_:1}),Be,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ze]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Fe]),_:1})]),_:1}),qe,s("p",null,[Ke,s("a",Ye,[He,e(l)]),We]),e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Xe]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[je]),_:1})]),_:1}),Qe,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Je]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ze]),_:1})]),_:1}),sn,s("p",null,[en,s("a",nn,[tn,e(l)]),an]),e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[on]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ln]),_:1})]),_:1}),rn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[un]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[cn]),_:1})]),_:1}),dn,pn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[gn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[hn]),_:1})]),_:1}),_n,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[mn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[vn]),_:1})]),_:1}),bn,Sn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[fn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Rn]),_:1})]),_:1}),In,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[En]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[kn]),_:1})]),_:1}),yn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Dn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[On]),_:1})]),_:1}),Nn,$n,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Vn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[An]),_:1})]),_:1}),Un,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[xn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ln]),_:1})]),_:1}),Gn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Cn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[wn]),_:1})]),_:1}),Tn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Mn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Pn]),_:1})]),_:1}),Bn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[zn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Fn]),_:1})]),_:1}),qn,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Kn]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Yn]),_:1})]),_:1}),Hn,s("p",null,[Wn,s("a",Xn,[jn,e(l)]),Qn,Jn,Zn]),e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[st]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[et]),_:1})]),_:1}),nt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[tt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[at]),_:1})]),_:1}),ot,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[lt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[it]),_:1})]),_:1}),rt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ut]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ct]),_:1})]),_:1}),dt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[pt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[gt]),_:1})]),_:1}),ht,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[_t]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[mt]),_:1})]),_:1}),vt,bt,St,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ft]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Rt]),_:1})]),_:1}),It,Et,kt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[yt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Dt]),_:1})]),_:1}),Ot,Nt,$t,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Vt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[At]),_:1})]),_:1}),Ut,xt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Lt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Gt]),_:1})]),_:1}),Ct,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[wt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Tt]),_:1})]),_:1}),Mt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Pt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Bt]),_:1})]),_:1}),zt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Ft]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[qt]),_:1})]),_:1}),Kt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Yt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ht]),_:1})]),_:1}),Wt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Xt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[jt]),_:1})]),_:1}),Qt,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Jt]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Zt]),_:1})]),_:1}),sa,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ea]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[na]),_:1})]),_:1}),ta,aa,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[oa]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[la]),_:1})]),_:1}),ia,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ra]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ua]),_:1})]),_:1}),ca,da,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[pa]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ga]),_:1})]),_:1}),s("div",ha,[_a,s("p",null,[ma,s("a",va,[ba,e(l)]),Sa])]),fa,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Ra]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Ia]),_:1})]),_:1}),Ea,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[ka]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[ya]),_:1})]),_:1}),Da,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu 22.04"},{default:n(()=>[Oa]),_:1}),e(a,{title:"Ubuntu 20.04"},{default:n(()=>[Na]),_:1})]),_:1}),$a,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-gsa_login.png",alt:"GSA login"},null,8,Va),Aa,Ua,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-feed_status.png",alt:"GVM feed status"},null,8,xa),La,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu"},{default:n(()=>[Ga]),_:1}),e(a,{title:"Rocky"},{default:n(()=>[Ca]),_:1})]),_:1}),wa,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-dashboard.png",alt:"GSA dashboard"},null,8,Ta),Ma,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gvm-22_4_0-gsa_about.png",alt:"GSA about"},null,8,Pa),Ba,s("h2",za,[Fa,qa,e(u,{text:"non-sponsored",type:"tip"})]),s("p",null,[Ka,s("a",Ya,[Ha,e(l)]),Wa]),Xa,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[ja]),_:1})]),_:1}),Qa,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[Ja]),_:1})]),_:1}),Za,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[so]),_:1})]),_:1}),eo,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[no]),_:1})]),_:1}),to,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[ao]),_:1})]),_:1}),oo,lo,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[io]),_:1})]),_:1}),ro,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[uo]),_:1})]),_:1}),co,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[po]),_:1})]),_:1}),go,ho,e(o,null,{default:n(()=>[e(a,{title:"Rocky"},{default:n(()=>[_o]),_:1})]),_:1}),mo,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_dashboard.png",alt:"GSA dashboard"},null,8,vo),bo,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_targets.png",alt:"GSA targets"},null,8,So),fo,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_target.png",alt:"GSA target"},null,8,Ro),Io,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_tasks.png",alt:"GSA tasks"},null,8,Eo),ko,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_task.png",alt:"GSA task"},null,8,yo),Do,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_noauth_task.png",alt:"GSA noauth task"},null,8,Oo),No,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_noauth_scan.png",alt:"GSA noauth scan"},null,8,$o),Vo,Ao,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_credentials.png",alt:"GSA credentials"},null,8,Uo),xo,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_newcredentials.png",alt:"GSA new credentials"},null,8,Lo),Go,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_auth_target.png",alt:"GSA auth target"},null,8,Co),wo,s("img",{class:"zoom-custom-imgs",src:"/img/openvas/gsa_auth_task.png",alt:"GSA auth task"},null,8,To),Mo,s("p",null,[Po,e(c,{to:"/privacyidea/"},{default:n(()=>[Bo]),_:1}),zo]),Fo,qo,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu"},{default:n(()=>[Ko]),_:1}),e(a,{title:"Rocky"},{default:n(()=>[Yo]),_:1})]),_:1}),Ho,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu"},{default:n(()=>[Wo]),_:1}),e(a,{title:"Rocky"},{default:n(()=>[Xo]),_:1})]),_:1}),jo,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu"},{default:n(()=>[Qo]),_:1}),e(a,{title:"Rocky"},{default:n(()=>[Jo]),_:1})]),_:1}),Zo,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu"},{default:n(()=>[sl]),_:1}),e(a,{title:"Rocky"},{default:n(()=>[el]),_:1})]),_:1}),nl,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu"},{default:n(()=>[tl]),_:1}),e(a,{title:"Rocky"},{default:n(()=>[al]),_:1})]),_:1}),ol,e(o,null,{default:n(()=>[e(a,{title:"Ubuntu"},{default:n(()=>[ll]),_:1}),e(a,{title:"Rocky"},{default:n(()=>[il]),_:1})]),_:1}),rl,s("p",null,[ul,s("a",cl,[dl,e(l)]),pl]),s("p",null,[s("a",gl,[hl,e(l)]),_l,s("a",ml,[vl,e(l)]),bl,s("a",Sl,[fl,e(l)]),Rl,s("a",Il,[El,e(l)]),kl,yl,Dl]),s("h2",Ol,[Nl,$l,e(u,{text:"non-sponsored",type:"tip"})]),Vl,Al,s("p",null,[s("a",Ul,[xl,e(l)])])])}var Tl=d(h,[["render",Ll],["__file","index.html.vue"]]);export{Tl as default};
