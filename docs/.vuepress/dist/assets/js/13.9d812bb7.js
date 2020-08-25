(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{378:function(t,s,e){"use strict";e.r(s);var a=e(12),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"openvas-vulnerability-assessment-scanner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openvas-vulnerability-assessment-scanner"}},[t._v("#")]),t._v(" OpenVAS Vulnerability Assessment Scanner")]),t._v(" "),e("TagLinks"),t._v(" "),e("p",[t._v("OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.openvas.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenVAS website"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/greenbone/openvas",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Setup and configuration has been tested on following OS with version:")]),t._v(" "),e("ul",[e("li",[t._v("Ubuntu- 16.04, 18.04, 20.04, CentOS 8, VMware ESXi 6.7.0")]),t._v(" "),e("li",[t._v("GVM-9 (OpenVAS-9), OpenVAS 20.8.0, Atomicorp 20.8.0 (RHEL 8, CentOS 8, Fedora 32) GCE 6.0.10 (Virtual Appliance)")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("GVM-9 (OpenVAS-9) reached end-of-life support. GVM 10 and 11 will reach end-of-life support in the end of 2020.")])]),t._v(" "),e("h2",{attrs:{id:"configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("p",[t._v("Dependencies for GVM-20.08 (Source Edition):")]),t._v(" "),e("ul",[e("li",[t._v("libssh-dev")]),t._v(" "),e("li",[t._v("libssl-dev")]),t._v(" "),e("li",[t._v("libgnutls28-dev")]),t._v(" "),e("li",[t._v("glib2.0")]),t._v(" "),e("li",[t._v("pkg-config")]),t._v(" "),e("li",[t._v("CMake\nsqlite3 libsqlite3-dev libpcap0.8-dev")])]),t._v(" "),e("h2",{attrs:{id:"virtual-appliance-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-appliance-installation"}},[t._v("#")]),t._v(" Virtual Appliance installation")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.greenbone.net/en/install_use_gce/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download the latest version"),e("OutboundLink")],1),t._v(" of GCE (Greenbone Community Edition).")]),t._v(" "),e("h3",{attrs:{id:"minimum-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements"}},[t._v("#")]),t._v(" Minimum requirements")]),t._v(" "),e("ul",[e("li",[t._v("2 CPU")]),t._v(" "),e("li",[t._v("4096 MB memory")]),t._v(" "),e("li",[t._v("18 GB storage")]),t._v(" "),e("li",[t._v("Guest OS: Other 3.x Linux (64-bit)")])]),t._v(" "),e("h3",{attrs:{id:"virtual-machine-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-machine-settings"}},[t._v("#")]),t._v(" Virtual machine settings")]),t._v(" "),e("p",[t._v("Upload the latest version of the GCE to our VMware ESXi datastore. Create a new virtual machine (VM) using "),e("em",[t._v("ESXi 6.7 Virtual machine")]),t._v(", Guest OS family "),e("em",[t._v("Linux")]),t._v(" and OS version "),e("em",[t._v("Other 3.x Linux (64-bit)")]),t._v(". Next customize the VM, in this example we will be using the minimum requirements. Mount the datastore ISO file of GCE to the CD/DVD drive and continue.")]),t._v(" "),e("h3",{attrs:{id:"setup-gce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-gce"}},[t._v("#")]),t._v(" Setup GCE")]),t._v(" "),e("p",[t._v("Once the new virtual machine is powered on, you will be presented a menu, select "),e("em",[t._v("Setup")]),t._v(". The system will say that you are about to install GSM-CE and that all our data on the disk will be formatted. As we are using a virtual drive select "),e("em",[t._v("Yes")]),t._v(" to continue. Next we will be asked to select a username and password for our administrative user. Select something else then the standard admin username together with a strong password.")]),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h2",{attrs:{id:"install-openvas-20-8-0-from-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-openvas-20-8-0-from-source"}},[t._v("#")]),t._v(" Install OpenVAS 20.8.0 from source")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo apt-get install cmake\nserver@ubuntu:~$ sudo apt-get install pkg-config\nserver@ubuntu:~$ sudo apt-get install glib2.0\nserver@ubuntu:~$ sudo apt-get install libgnutls28-dev\nserver@ubuntu:~$ sudo apt-get install libssh-dev\nserver@ubuntu:~$ sudo apt-get install libssl-dev\nserver@ubuntu:~$ sudo apt-get install libhiredis-dev\nsudo apt-get install libxml2-dev\n libgcrypt-dev\n sudo apt-get install libldap2-dev\n\n sudo apt-get install doxygen\n \n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget https://fossies.org/linux/misc/openvas/gvm-libs-20.8.0.tar.gz\ntar -zxvf gvm-libs-20.8.0.tar.gz\nmkdir build\ncd build\nsudo cmake ..\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ wget https://github.com/greenbone/openvas/archive/v20.8.0.tar.gz\nserver@ubuntu:~$ tar -zxvf v20.8.0.tar.gz\nserver@ubuntu:~$ cd openvas-20.8.0/\nserver@ubuntu:~$ mkdir build\nserver@ubuntu:~$ cd build\nserver@ubuntu:~$ sudo cmake ..\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ cd v20.8.0/\nserver@ubuntu:~$ sudo cmake -DCMAKE_INSTALL_PREFIX=/usr/local\nserver@ubuntu:~$ sudo make install\n")])])]),e("h2",{attrs:{id:"install-openvas-20-8-0-centos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-openvas-20-8-0-centos"}},[t._v("#")]),t._v(" Install OpenVAS 20.8.0 CentOS")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Atomicorp/openvas",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atomicorp OpenVAS package"),e("OutboundLink")],1),t._v(" "),e("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),t._v(" "),e("h2",{attrs:{id:"install-openvas-9-from-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-openvas-9-from-repository"}},[t._v("#")]),t._v(" Install OpenVAS-9 from repository "),e("Badge",{attrs:{text:"deprecated",type:"warning"}})],1),t._v(" "),e("p",[t._v("First add the OpenVAS PPA repository to our server.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo add-apt-repository ppa:mrazavi/openvas\n")])])]),e("p",[t._v("Next we need to update and install the main packages.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo apt-get update\nserver@ubuntu:~$ sudo apt-get install openvas9\n")])])]),e("p",[t._v("We will also install the OpenVAS9 dev package so we can run single OpenVAS nasl scripts, for fast troubleshooting. Additionaly we will also be adding the vulnerability data by syncing with the Greenbone feeds.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo apt-get install libopenvas9-dev\nserver@ubuntu:~$ sudo greenbone-nvt-sync\nserver@ubuntu:~$ sudo greenbone-scapdata-sync\nserver@ubuntu:~$ sudo greenbone-certdata-sync\n")])])]),e("p",[t._v("To keep OpenVAS up-to-date to run the latest tests, we need to sync the nvt, scap and cert data regularly. To achieve this we will create a script and add it to our cron.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo nano /usr/local/bin/openvas-update\n")])])]),e("p",[t._v("Add the following content to the openvas-update file.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("/usr/sbin/greenbone-nvt-sync\n/usr/sbin/greenbone-certdata-sync\n/usr/sbin/greenbone-scapdata-sync\n/usr/sbin/openvasmd --update --verbose --progress\n/etc/init.d/openvas-manager restart\n/etc/init.d/openvas-scanner restart\n")])])]),e("p",[t._v("Save the file and make it executable.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo chmod a+x /usr/local/bin/openvas-update\n")])])]),e("p",[t._v("We will add the update script to cron with a nightly frequency.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Nightly 0 0 * * * root /usr/local/bin/openvas-update\n")])])]),e("h2",{attrs:{id:"openvas-behind-nginx-proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openvas-behind-nginx-proxy"}},[t._v("#")]),t._v(" OpenVAS behind NGINX Proxy")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo nano /etc/default/openvas-gsa\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Defaults for Greenbone Security Assistant initscript")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sourced by /etc/init.d/openvas-gsa")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# installed at /etc/default/openvas-gsa by the maintainer scripts")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To disable HTTPS:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#HTTP_ONLY=1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To allow <host> as hostname/address part of a Host header:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALLOW_HEADER_HOST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("openvas.example.com\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To enable http redirection:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTP_REDIRECT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To set listening address:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("LISTEN_ADDRESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To set listening port number:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PORT_NUMBER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),t._v("\n")])])]),e("p",[t._v("Restart openvas-gsa "),e("code",[t._v("sudo systemctl restart openvas-gsa")]),t._v(". Edit the NGINX configuration to fit the environment.")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" http2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" openvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SSL CERTIFICATES")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_certificate_key")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_protocols")]),t._v(" TLSv1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_ciphers")]),t._v(" ECDHE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA512"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DHE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA512"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("DHE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("GCM"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ECDHE"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("RSA"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("AES256"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SHA384"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_prefer_server_ciphers")]),t._v(" on"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl_dhparam")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dhparams"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Frame"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Options "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SAMEORIGIN"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("XSS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Protection "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1; mode=block"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" X"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Content"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Options "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nosniff"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("charset")]),t._v(" utf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host             "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP        "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   REMOTE_HOST      "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For  "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("FORWARDED"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROTOCOL")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("https")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("favicon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ico "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("log_not_found")]),t._v(" off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("robots"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("txt  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("log_not_found")]),t._v(" off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" off"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_log")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log error"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("well"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("known"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deny")]),t._v(" all"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("server@ubuntu:~$ sudo systemctl reload nginx.service\n")])])]),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("h3",{attrs:{id:"sec-error-inadequate-key-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sec-error-inadequate-key-usage"}},[t._v("#")]),t._v(" SEC_ERROR_INADEQUATE_KEY_USAGE")]),t._v(" "),e("p",[t._v("If receving "),e("code",[t._v("SEC_ERROR_INADEQUATE_KEY_USAGE")]),t._v(" and the browser blocks access to the local GVM server, proceed with removing the certificate. For example in Firefox go to "),e("code",[t._v("about:preferences#privacy")]),t._v(" and the certificate section. Select Show certificates, click the Servers tab and remove the certificates found under GVM Users.")]),t._v(" "),e("h2",{attrs:{id:"enterprise-solutions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[t._v("#")]),t._v(" Enterprise solutions "),e("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),t._v(" "),e("h3",{attrs:{id:"the-greenbone-security-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-greenbone-security-manager"}},[t._v("#")]),t._v(" The Greenbone Security Manager")]),t._v(" "),e("p",[t._v("The Greenbone Security Manager (GSM) is an appliance for vulnerability scanning and management. It is offered in various performance levels and basically supports an unlimited number of target systems. The actually achievable number depends on the scan pattern and scan targets. For finding the right model for your purpose, we provide reference values for the number of target IP addresses below, assuming a common scenario with a scan every 24 hours.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.greenbone.net/en/product-comparison/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Greenbone Security Manager"),e("OutboundLink")],1)]),t._v(" "),e("social-share")],1)}),[],!1,null,null,null);s.default=n.exports}}]);