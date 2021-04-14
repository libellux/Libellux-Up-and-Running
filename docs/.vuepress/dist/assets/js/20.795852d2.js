(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{400:function(e,t,a){"use strict";a.r(t);var s=a(11),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"two-factor-authentication-w-privacyidea-and-yubikey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#two-factor-authentication-w-privacyidea-and-yubikey"}},[e._v("#")]),e._v(" Two-factor authentication w/ privacyIDEA and YubiKey "),a("Badge",{attrs:{text:"In development",type:"warning"}})],1),e._v(" "),a("TagLinks"),e._v(" "),a("p",[e._v("privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two-factor authentication.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.privacyidea.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacyIDEA website"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/privacyidea/privacyidea",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),a("br"),e._v(" "),a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yubico website"),a("OutboundLink")],1),e._v(" "),a("Badge",{attrs:{text:"affiliate links",type:"warning"}})],1),e._v(" "),a("p",[e._v("Setup and configuration has been tested on the following operating systems:")]),e._v(" "),a("ul",[a("li",[e._v("Ubuntu 20.04")]),e._v(" "),a("li",[e._v("privacyIDEA 3.0+")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1),e._v(" (optional)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.yubico.com/support/download/yubikey-personalization-tools/",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey Personalization Tool"),a("OutboundLink")],1),e._v(" (optional)")])]),e._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration files")]),e._v(" "),a("h2",{attrs:{id:"install-community-edition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-community-edition"}},[e._v("#")]),e._v(" Install community edition "),a("Badge",{attrs:{text:"Rev 1",type:"default"}})],1),e._v(" "),a("p",[e._v("We will use privacyIDEA and their FreeRADIUS plugin together with "),a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("YubiKey 5 NFC"),a("OutboundLink")],1),e._v(" (from Yubico) to enforce two-factor authentication and apply an role-based access control approach (RBAC). We will simplify the user accounting by fetching the users from the local "),a("code",[e._v("/etc/passwd")]),e._v(" file and use it as the privacyIDEA resolver (instead of e.g. LDAP, SQL etc). To get an hands-on experience we will use the privacyIDEA authentication server to access the "),a("a",{attrs:{href:""}},[e._v("Greenbone Vulnerability Manager's")]),e._v(" user interface.")]),e._v(" "),a("p",[e._v("To get started download the signed key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ wget https://lancelot.netknights.it/NetKnights-Release.asc\n")])])]),a("p",[e._v("Next import the signed key.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo gpg --import --import-options show-only --with-fingerprint NetKnights-Release.asc\npub rsa4096 2017-05-16  NetKnights GmbH <release@netknights.it>\nKey fingerprint = 0940 4ABB EDB3 586D EDE4  AD22 00F7 0D62 AE25 0082\n")])])]),a("p",[e._v("Continue by adding the key to our system.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo apt-key add NetKnights-Release.asc\nOK\n")])])]),a("p",[e._v("Now we need to add the repository for the specific release (in this case 20.04).")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo add-apt-repository http://lancelot.netknights.it/community/focal/stable\nserver@ubuntu:~$ sudo apt-get update\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("INFO")]),e._v(" "),a("p",[e._v("If you prefer to use the nginx version you can install "),a("code",[e._v("apt-get privacyidea-nginx")])])]),e._v(" "),a("p",[e._v("Once we updated the package manager we can install PrivacyIDEA.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo apt-get update\nserver@ubuntu:~$ sudo apt-get install privacyidea-apache2\n             _                    _______  _______\n   ___  ____(_)  _____ _______ __/  _/ _ \\/ __/ _ |\n  / _ \\/ __/ / |/ / _ `/ __/ // // // // / _// __ |\n / .__/_/ /_/|___/\\_,_/\\__/\\_, /___/____/___/_/ |_|\n/_/                       /___/\n\nRunning online\n")])])]),a("p",[e._v("Let's create the administration account.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo pi-manage admin add admin -e admin@localhost\nAdmin admin was registered successfully.\n")])])]),a("p",[e._v("Once you've added the administrator account and followed the "),a("a",{attrs:{href:"#firewall-settings"}},[e._v("firewall settings")]),e._v(" you should be able to reach the web interface from "),a("code",[e._v("https://192.168.0.1")]),e._v(" and login as the admin user with your password.")]),e._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/privacyidea/privacyidea_login.png",alt:"PrivacyIDEA login"}}),e._v(" "),a("h2",{attrs:{id:"privacyidea-freeradius-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#privacyidea-freeradius-plugin"}},[e._v("#")]),e._v(" privacyIDEA FreeRADIUS plugin")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo apt-get install privacyidea-radius\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo -i\nroot@ubuntu:~$ sudo nano /etc/freeradius/3.0/clients.conf\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  The default secret below is only for testing, and should")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  not be used in any real environment.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\nsecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" testing123\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#client example.org {")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       ipaddr          = radius.example.org")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#       secret          = testing123")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#}")]),e._v("\nclient GVM "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        ipaddr "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.3\n        secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" testing123\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@ubuntu:~$ cd /etc/freeradius/3.0/sites-enabled/\nroot@ubuntu:~$ cat privacyidea\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server {\n    authorize {\n        #files\n        perl-privacyidea\n        if (ok || updated) {\n            update control {\n                Auth-Type := Perl\n            }\n        }\n    }\n    listen {\n        type = auth\n        ipaddr = *\n        port = 0\n    }\n    authenticate {\n        Auth-Type Perl {\n            perl-privacyidea\n        }\n    }\n}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@ubuntu:~$ cd /etc/freeradius/3.0/mods-enabled/\nroot@ubuntu:~$ cat mods-perl-privacyidea\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("perl perl-privacyidea {\n    filename = /usr/share/privacyidea/freeradius/privacyidea_radius.pm\n}\n")])])]),a("h2",{attrs:{id:"configure-privacyidea"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-privacyidea"}},[e._v("#")]),e._v(" Configure privacyIDEA")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("root@ubuntu:~$ exit\nserver@ubuntu:~$ sudo nano /etc/privacyidea/rlm_perl.ini\n")])])]),a("div",{staticClass:"language- extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[Default]\nURL = https://localhost/validate/check\n#REALM = someRealm\n#RESCONF = someResolver\nSSL_CHECK = false\n#DEBUG = true\n")])])]),a("h3",{attrs:{id:"create-first-realm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-first-realm"}},[e._v("#")]),e._v(" Create first realm")]),e._v(" "),a("h2",{attrs:{id:"firewall-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[e._v("#")]),e._v(" Firewall settings")]),e._v(" "),a("p",[e._v("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),a("a",{attrs:{href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("UFW Settings")]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("server@ubuntu:~$ sudo ufw default deny incoming\nserver@ubuntu:~$ sudo ufw default allow outgoing\nserver@ubuntu:~$ sudo ufw allow 22\nserver@ubuntu:~$ sudo ufw enable\nCommand may disrupt existing ssh connections. Proceed with operation (y|n)? y\nFirewall is active and enabled on system startup\n")])])])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('server@ubuntu:~$ sudo ufw allow 443 comment "privacyIDEA"\n')])])]),a("h2",{attrs:{id:"command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[e._v("#")]),e._v(" Command-line")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Command")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("pi-manage admin")]),e._v(" "),a("td",[e._v("Add or edit existing admin account")])])])]),e._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("p",[e._v("If you encounter any issue or having questions regarding privacyIDEA I recommend using their very helpful "),a("a",{attrs:{href:"https://community.privacyidea.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community forum"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"recommended-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recommended-reading"}},[e._v("#")]),e._v(" Recommended reading")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://privacyidea.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("privacyIDEA documentation"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"enterprise-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enterprise-solutions"}},[e._v("#")]),e._v(" Enterprise solutions "),a("Badge",{attrs:{text:"non-sponsored",type:"default"}})],1),e._v(" "),a("h3",{attrs:{id:"netnights-privacyidea-enterprise-edition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netnights-privacyidea-enterprise-edition"}},[e._v("#")]),e._v(" NetNights privacyIDEA Enterprise Edition")]),e._v(" "),a("p",[e._v("privacyIDEA is a modular solution for two factor authentication especially with OTP tokens. It is multi-tenency- and multi-instance-capable. Due to the modular structure privacyIDEA can be quickly and easily adapted and enhanced. E.g. adding new token types is as simple as writing a new lean python module. You do not need to modify your network for privacyIDEA, it does not write to existing databases or user stores. It only needs read access to your user stores like LDAP, Active Directory, SQL, SCIM-service or flat files. Existing workflows can be enhanced without the need to modify them. Using its simple REST like API it can be automated and smoothly be integrated.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://netknights.it/en/produkte/privacyidea/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NetNights"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"yubienterprise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yubienterprise"}},[e._v("#")]),e._v(" YubiEnterprise  "),a("Badge",{attrs:{text:"affiliate links",type:"warning"}})],1),e._v(" "),a("p",[e._v("Yubico offers enterprise solutions and can easily procure and distribute YubiKey authentication solutions for employees at scale.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yubico"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"}}),a("OutboundLink")],1)]),e._v(" "),a("social-share")],1)}),[],!1,null,null,null);t.default=r.exports}}]);