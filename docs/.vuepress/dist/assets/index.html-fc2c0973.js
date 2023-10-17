import{_ as u,r as i,o as d,c as p,a as s,d as e,b as n,w as a,e as r}from"./app-9bd5f875.js";const h={},b={id:"psad-intrusion-detection-with-log-analysis",tabindex:"-1"},g=s("a",{class:"header-anchor",href:"#psad-intrusion-detection-with-log-analysis","aria-hidden":"true"},"#",-1),m=s("p",null,"PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.",-1),f={href:"https://cipherdyne.org/psad/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/mrash/psad",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,"Setup and configuration have been tested on the following operating systems:",-1),v=s("ul",null,[s("li",null,"Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)"),s("li",null,"PSAD- 2.2.3 -> 2.4.6")],-1),y=s("p",null,[s("a",{href:"https://fundof.me/libellux"},[s("img",{src:"https://img.shields.io/badge/fundof-libellux-green",alt:"fundof"})])],-1),w=s("h2",{id:"configuration-files",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),e(" Configuration files")],-1),x={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/psad/config/psad.conf",target:"_blank",rel:"noopener noreferrer"},S=s("h2",{id:"prerequisites",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),e(" Prerequisites")],-1),E=s("p",null,"Dependancies when installing PSAD from source.",-1),A=s("ul",null,[s("li",null,[s("code",null,"net-tools")]),s("li",null,[s("code",null,"g++")])],-1),D=s("h2",{id:"install-psad-from-source",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#install-psad-from-source","aria-hidden":"true"},"#"),e(" Install PSAD from source")],-1),T={href:"https://github.com/mrash/psad",target:"_blank",rel:"noopener noreferrer"},P=["src"],L=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"apt-get"),e(" update "),s("span",{class:"token operator"},"&&"),e(),s("span",{class:"token punctuation"},"\\"),e(`
`),s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"apt-get"),e(),s("span",{class:"token parameter variable"},"-y"),e(" upgrade "),s("span",{class:"token operator"},"&&"),e(),s("span",{class:"token punctuation"},"\\"),e(`
`),s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"apt-get"),e(),s("span",{class:"token parameter variable"},"-y"),e(),s("span",{class:"token function"},"install"),e(" net-tools g++ "),s("span",{class:"token operator"},"&&"),e(),s("span",{class:"token punctuation"},"\\"),e(`
`),s("span",{class:"token function"},"wget"),e(" https://github.com/mrash/psad/archive/2.4.6.tar.gz "),s("span",{class:"token operator"},"&&"),e(),s("span",{class:"token punctuation"},"\\"),e(`
`),s("span",{class:"token function"},"tar"),e(),s("span",{class:"token parameter variable"},"-zxvf"),e(),s("span",{class:"token number"},"2.4"),e(".6.tar.gz "),s("span",{class:"token operator"},"&&"),e(),s("span",{class:"token builtin class-name"},"cd"),e(" psad-2.4.6/ "),s("span",{class:"token operator"},"&&"),e(),s("span",{class:"token punctuation"},"\\"),e(`
`),s("span",{class:"token function"},"sudo"),e(" ./install.pl")])]),e(`
`)])])],-1),I=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),N=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`[+] psad alerts will be sent to:

       root@localhost

[+] Would you like alerts sent to a different address ([y]/n)?  n

[+] By default, psad parses all iptables log messages for scan activity.
    However, psad can be configured to only parse those iptables messages
    that match particular strings (that are specified in your iptables
    ruleset with the --log-prefix option).

    Would you like psad to only parse specific strings in iptables
    messages (y/[n])?  n

[+] By default, psad matches Snort rules against any IP addresses, but
    psad offers the ability to restrict signature matches to specific
    networks with the HOME_NET variable (similar to Snort).  However, psad
    also offers the ability to acquire all local subnets on the local system
    by parsing the output of "ifconfig", or the subnets can be restricted
    to a limited set of networks.

    First, is it ok to leave the HOME_NET setting as "any" ([y]/n)?  y

[+] psad has the capability of sending scan data via email alerts to the
    DShield distributed intrusion detection system (www.dshield.org).  By
    default this feature is not enabled since firewall log data is sensitive,
    but submitting logs to DShield provides a valuable service and assists
    in generally enhancing internet security.  As an optional step, if you
    have a DShield user id you can edit the "DSHIELD_USER_ID" variable
    in /etc/psad/psad.conf

    Would you like to enable DShield alerts (y/[n])?  n

[+] Setting hostname to "client@ubuntu" in /etc/psad/psad.conf
[+] The latest psad signatures can be installed with "psad --sig-update"
    or installed now with install.pl.

    If you decide to answer 'y' to the next question, install.pl
    will require DNS and network access now.

    Would you like to install the latest signatures from
      http://www.cipherdyne.org/psad/signatures (y/n)?  y

[+] Enable psad at boot time ([y]/n)?  y

[+] psad has been installed.
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br")])],-1),U=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),O=s("h2",{id:"configuration",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),e(" Configuration")],-1),R=s("p",null,"The email address will be left as default (root@localhost;) as in this tutorial we'll use OSSEC to manage the alerts.",-1),C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[e("$ "),s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"nano"),e(` /etc/psad/psad.conf

`),s("span",{class:"token comment"},"### Machine hostname"),e(`
`),s("span",{class:"token environment constant"},"HOSTNAME"),e(" server@ubuntu"),s("span",{class:"token punctuation"},";"),e(`

`),s("span",{class:"token comment"},"### Specify the home and external networks.  Note that by default the"),e(`
`),s("span",{class:"token comment"},"### ENABLE_INTF_LOCAL_NETS is enabled, so psad automatically detects"),e(`
`),s("span",{class:"token comment"},"### all of the directly connected subnets and uses this information as"),e(`
`),s("span",{class:"token comment"},"### the HOME_NET variable."),e(`
HOME_NET                    `),s("span",{class:"token number"},"192.168"),e(".0.0/24"),s("span",{class:"token punctuation"},";"),e(`
EXTERNAL_NET                any`),s("span",{class:"token punctuation"},";"),e(`

IPT_SYSLOG_FILE             /var/log/syslog`),s("span",{class:"token punctuation"},";"),e(`
EXPECT_TCP_OPTIONS		    Y`),s("span",{class:"token punctuation"},";"),e(`
EMAIL_ALERT_DANGER_LEVEL	`),s("span",{class:"token number"},"3"),s("span",{class:"token punctuation"},";"),e(`

`),s("span",{class:"token comment"},"### Allow reporting methods to be enabled/restricted.  This keyword can"),e(`
`),s("span",{class:"token comment"},`### accept values of "nosyslog" (don't write any messages to syslog),`),e(`
`),s("span",{class:"token comment"},`### "noemail" (don't send any email messages), or "ALL" (to generate both`),e(`
`),s("span",{class:"token comment"},'### syslog and email messages).  "ALL" is the default.  Both "nosyslog"'),e(`
`),s("span",{class:"token comment"},'### and "noemail" can be combined with a comma to disable all logging'),e(`
`),s("span",{class:"token comment"},"### and alerting."),e(`
ALERTING_METHODS            noemail`),s("span",{class:"token punctuation"},";"),e(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),$=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`server@rocky:~$
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),F=s("p",null,"To check the status of PSAD execute the following command.",-1),M=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" psad "),s("span",{class:"token parameter variable"},"-S")])]),e(`
`)])])],-1),H=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),G=r('<h3 id="enable-psad-rules-in-ossec" tabindex="-1"><a class="header-anchor" href="#enable-psad-rules-in-ossec" aria-hidden="true">#</a> Enable PSAD rules in OSSEC</h3><p>To enable OSSEC to decode and respond to PSAD rules being triggered follow the instructions found <a href="">here</a>.</p><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>',3),W={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},B=r(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-console line-numbers-mode" data-ext="console"><pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>First enable logging using the built-in UFW command below.</p>`,2),z=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" ufw logging on")])]),e(`
`),s("span",{class:"token output"},`Logging enabled
`)])])],-1),q=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),V=s("p",null,"Once logging been enabled you'll also need to alter the UFW rules. Edit both configuration files (before.rules and before6.rules) and add the following before the COMMIT line.",-1),j=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"nano"),e(" /etc/ufw/before.rules")])]),e(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(),s("span",{class:"token function"},"nano"),e(" /etc/ufw/before6.rules")])]),e(`
`)])])],-1),X=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),Y=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token comment"},"# custom psad logging directives"),e(`
`),s("span",{class:"token parameter variable"},"-A"),e(" INPUT "),s("span",{class:"token parameter variable"},"-j"),e(` LOG
`),s("span",{class:"token parameter variable"},"-A"),e(" FORWARD "),s("span",{class:"token parameter variable"},"-j"),e(` LOG

`),s("span",{class:"token comment"},'# do not delete the "COMMIT" line or these rules wont be processed'),e(`
COMMIT
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlight-line"}," "),s("div",{class:"highlight-line"}," "),s("br"),s("br"),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),J=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,`server@rocky:~$
`)]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),K=s("p",null,"Next reload UFW and proceed to check psad with the built-in firewall analyze tool.",-1),Q=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" ufw reload")])]),e(`
`),s("span",{class:"token command"},[s("span",{class:"token info punctuation"},[s("span",{class:"token user"},"server@ubuntu"),s("span",{class:"token punctuation"},":"),s("span",{class:"token path"},"~")]),s("span",{class:"token shell-symbol important"},"$"),e(),s("span",{class:"token bash language-bash"},[s("span",{class:"token function"},"sudo"),e(" psad --fw-analyze")])]),e(`
`),s("span",{class:"token output"},`[+] Parsing INPUT chain rules.
[+] Parsing INPUT chain rules.
[+] Firewall config looks good.
[+] Completed check of firewall ruleset.
[+] Results in /var/log/psad/fw_check
[+] Exiting.
`)])])],-1),Z=s("div",{class:"language-shell-session","data-ext":"shell-session"},[s("pre",{class:"language-shell-session"},[s("code",null,[s("span",{class:"token output"},`server@rocky:~$
`)])])],-1),ss=r('<h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command-line</h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>psad -R</td><td>Restart psad</td></tr><tr><td>psad -S</td><td>psad status</td></tr><tr><td>psad --fw-analyze</td><td>Analyze the local iptables ruleset</td></tr><tr><td>psad --sig-update</td><td>Download the latest set of psad signatures</td></tr><tr><td>psad -H</td><td>Send all psad daemons a HUP signal to have them re-import configs</td></tr></tbody></table>',2);function es(ns,as){const c=i("Badge"),o=i("ExternalLinkIcon"),t=i("CodeGroupItem"),l=i("CodeGroup");return d(),p("div",null,[s("h1",b,[g,e(" PSAD Intrusion Detection with Log Analysis "),n(c,{text:"Rev 2",type:"tip"})]),m,s("p",null,[s("a",f,[e("PSAD website"),n(o)]),e(),s("a",k,[e("GitHub"),n(o)])]),_,v,y,w,s("ul",null,[s("li",null,[s("a",x,[e("psad.conf"),n(o)])])]),S,E,A,D,s("p",null,[e("Make sure you have installed the dependency packages and once complete download the lastest stable version from the "),s("a",T,[e("PSAD GitHub"),n(o)]),e(", extract and run the installation script.")]),s("img",{class:"zoom-custom-imgs",src:"/img/psad/psad_diagram.jpg",alt:"PSAD Port Scan Attack Detector"},null,8,P),n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[L]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[I]),_:1})]),_:1}),n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[N]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[U]),_:1})]),_:1}),O,R,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[C]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[$]),_:1})]),_:1}),F,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[M]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[H]),_:1})]),_:1}),G,s("p",null,[e("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),s("a",W,[e("here"),n(o)]),e(".")]),B,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[z]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[q]),_:1})]),_:1}),V,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[j]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[X]),_:1})]),_:1}),n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[Y]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[J]),_:1})]),_:1}),K,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[Q]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[Z]),_:1})]),_:1}),ss])}const ls=u(h,[["render",es],["__file","index.html.vue"]]);export{ls as default};
