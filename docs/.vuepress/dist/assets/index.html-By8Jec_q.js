import{_ as d,r as i,o as u,c as p,a as e,d as s,b as n,w as a,e as r}from"./app-9TPHRPLo.js";const h={},b={id:"psad-intrusion-detection-with-log-analysis",tabindex:"-1"},m={class:"header-anchor",href:"#psad-intrusion-detection-with-log-analysis"},g=e("p",null,"PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.",-1),f={href:"https://cipherdyne.org/psad/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/mrash/psad",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"Setup and configuration have been tested on the following operating systems:",-1),v=e("ul",null,[e("li",null,"Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)"),e("li",null,"PSAD- 2.2.3 -> 2.4.6")],-1),y=e("p",null,[e("a",{href:"https://fundof.me/libellux"},[e("img",{src:"https://img.shields.io/badge/fundof-libellux-green",alt:"fundof"})])],-1),w=e("h2",{id:"configuration-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-files"},[e("span",null,"Configuration files")])],-1),S={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/psad/config/psad.conf",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites"},[e("span",null,"Prerequisites")])],-1),A=e("p",null,"Dependancies when installing PSAD from source.",-1),D=e("ul",null,[e("li",null,[e("code",null,"net-tools")]),e("li",null,[e("code",null,"g++")])],-1),P=e("h2",{id:"install-psad-from-source",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-psad-from-source"},[e("span",null,"Install PSAD from source")])],-1),E={href:"https://github.com/mrash/psad",target:"_blank",rel:"noopener noreferrer"},T=["src"],L=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token command"},[e("span",{class:"token info punctuation"},[e("span",{class:"token user"},"server@ubuntu"),e("span",{class:"token punctuation"},":"),e("span",{class:"token path"},"~")]),e("span",{class:"token shell-symbol important"},"$"),s(),e("span",{class:"token bash language-bash"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt-get"),s(" update "),e("span",{class:"token operator"},"&&"),s(),e("span",{class:"token punctuation"},"\\"),s(`
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt-get"),s(),e("span",{class:"token parameter variable"},"-y"),s(" upgrade "),e("span",{class:"token operator"},"&&"),s(),e("span",{class:"token punctuation"},"\\"),s(`
`),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"apt-get"),s(),e("span",{class:"token parameter variable"},"-y"),s(),e("span",{class:"token function"},"install"),s(" net-tools g++ "),e("span",{class:"token operator"},"&&"),s(),e("span",{class:"token punctuation"},"\\"),s(`
`),e("span",{class:"token function"},"wget"),s(" https://github.com/mrash/psad/archive/2.4.6.tar.gz "),e("span",{class:"token operator"},"&&"),s(),e("span",{class:"token punctuation"},"\\"),s(`
`),e("span",{class:"token function"},"tar"),s(),e("span",{class:"token parameter variable"},"-zxvf"),s(),e("span",{class:"token number"},"2.4"),s(".6.tar.gz "),e("span",{class:"token operator"},"&&"),s(),e("span",{class:"token builtin class-name"},"cd"),s(" psad-2.4.6/ "),e("span",{class:"token operator"},"&&"),s(),e("span",{class:"token punctuation"},"\\"),s(`
`),e("span",{class:"token function"},"sudo"),s(" ./install.pl")])]),s(`
`)])])],-1),U=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token output"},`server@rocky:~$
`)])])],-1),C=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token output"},`[+] psad alerts will be sent to:

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
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br")])],-1),I=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token output"},`server@rocky:~$
`)])])],-1),N=e("h2",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration"},[e("span",null,"Configuration")])],-1),O=e("p",null,"The email address will be left as default (root@localhost;) as in this tutorial we'll use OSSEC to manage the alerts.",-1),R=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[s("$ "),e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"nano"),s(` /etc/psad/psad.conf

`),e("span",{class:"token comment"},"### Machine hostname"),s(`
`),e("span",{class:"token environment constant"},"HOSTNAME"),s(" server@ubuntu"),e("span",{class:"token punctuation"},";"),s(`

`),e("span",{class:"token comment"},"### Specify the home and external networks.  Note that by default the"),s(`
`),e("span",{class:"token comment"},"### ENABLE_INTF_LOCAL_NETS is enabled, so psad automatically detects"),s(`
`),e("span",{class:"token comment"},"### all of the directly connected subnets and uses this information as"),s(`
`),e("span",{class:"token comment"},"### the HOME_NET variable."),s(`
HOME_NET                    `),e("span",{class:"token number"},"192.168"),s(".0.0/24"),e("span",{class:"token punctuation"},";"),s(`
EXTERNAL_NET                any`),e("span",{class:"token punctuation"},";"),s(`

IPT_SYSLOG_FILE             /var/log/syslog`),e("span",{class:"token punctuation"},";"),s(`
EXPECT_TCP_OPTIONS		    Y`),e("span",{class:"token punctuation"},";"),s(`
EMAIL_ALERT_DANGER_LEVEL	`),e("span",{class:"token number"},"3"),e("span",{class:"token punctuation"},";"),s(`

`),e("span",{class:"token comment"},"### Allow reporting methods to be enabled/restricted.  This keyword can"),s(`
`),e("span",{class:"token comment"},`### accept values of "nosyslog" (don't write any messages to syslog),`),s(`
`),e("span",{class:"token comment"},`### "noemail" (don't send any email messages), or "ALL" (to generate both`),s(`
`),e("span",{class:"token comment"},'### syslog and email messages).  "ALL" is the default.  Both "nosyslog"'),s(`
`),e("span",{class:"token comment"},'### and "noemail" can be combined with a comma to disable all logging'),s(`
`),e("span",{class:"token comment"},"### and alerting."),s(`
ALERTING_METHODS            noemail`),e("span",{class:"token punctuation"},";"),s(`
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),F=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`server@rocky:~$
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),$=e("p",null,"To check the status of PSAD execute the following command.",-1),M=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token command"},[e("span",{class:"token info punctuation"},[e("span",{class:"token user"},"server@ubuntu"),e("span",{class:"token punctuation"},":"),e("span",{class:"token path"},"~")]),e("span",{class:"token shell-symbol important"},"$"),s(),e("span",{class:"token bash language-bash"},[e("span",{class:"token function"},"sudo"),s(" psad "),e("span",{class:"token parameter variable"},"-S")])]),s(`
`)])])],-1),H=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token output"},`server@rocky:~$
`)])])],-1),G=r('<h3 id="enable-psad-rules-in-ossec" tabindex="-1"><a class="header-anchor" href="#enable-psad-rules-in-ossec"><span>Enable PSAD rules in OSSEC</span></a></h3><p>To enable OSSEC to decode and respond to PSAD rules being triggered follow the instructions found <a href="">here</a>.</p><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings"><span>Firewall settings</span></a></h2>',3),W={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},z=r(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-console line-numbers-mode" data-ext="console" data-title="console"><pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>First enable logging using the built-in UFW command below.</p>`,2),B=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token command"},[e("span",{class:"token info punctuation"},[e("span",{class:"token user"},"server@ubuntu"),e("span",{class:"token punctuation"},":"),e("span",{class:"token path"},"~")]),e("span",{class:"token shell-symbol important"},"$"),s(),e("span",{class:"token bash language-bash"},[e("span",{class:"token function"},"sudo"),s(" ufw logging on")])]),s(`
`),e("span",{class:"token output"},`Logging enabled
`)])])],-1),q=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token output"},`server@rocky:~$
`)])])],-1),V=e("p",null,"Once logging been enabled you'll also need to alter the UFW rules. Edit both configuration files (before.rules and before6.rules) and add the following before the COMMIT line.",-1),j=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token command"},[e("span",{class:"token info punctuation"},[e("span",{class:"token user"},"server@ubuntu"),e("span",{class:"token punctuation"},":"),e("span",{class:"token path"},"~")]),e("span",{class:"token shell-symbol important"},"$"),s(),e("span",{class:"token bash language-bash"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"nano"),s(" /etc/ufw/before.rules")])]),s(`
`),e("span",{class:"token command"},[e("span",{class:"token info punctuation"},[e("span",{class:"token user"},"server@ubuntu"),e("span",{class:"token punctuation"},":"),e("span",{class:"token path"},"~")]),e("span",{class:"token shell-symbol important"},"$"),s(),e("span",{class:"token bash language-bash"},[e("span",{class:"token function"},"sudo"),s(),e("span",{class:"token function"},"nano"),s(" /etc/ufw/before6.rules")])]),s(`
`)])])],-1),Z=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token output"},`server@rocky:~$
`)])])],-1),X=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# custom psad logging directives"),s(`
`),e("span",{class:"token parameter variable"},"-A"),s(" INPUT "),e("span",{class:"token parameter variable"},"-j"),s(` LOG
`),e("span",{class:"token parameter variable"},"-A"),s(" FORWARD "),e("span",{class:"token parameter variable"},"-j"),s(` LOG

`),e("span",{class:"token comment"},'# do not delete the "COMMIT" line or these rules wont be processed'),s(`
COMMIT
`)])]),e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlight-line"}," "),e("div",{class:"highlight-line"}," "),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`server@rocky:~$
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),J=e("p",null,"Next reload UFW and proceed to check psad with the built-in firewall analyze tool.",-1),K=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token command"},[e("span",{class:"token info punctuation"},[e("span",{class:"token user"},"server@ubuntu"),e("span",{class:"token punctuation"},":"),e("span",{class:"token path"},"~")]),e("span",{class:"token shell-symbol important"},"$"),s(),e("span",{class:"token bash language-bash"},[e("span",{class:"token function"},"sudo"),s(" ufw reload")])]),s(`
`),e("span",{class:"token command"},[e("span",{class:"token info punctuation"},[e("span",{class:"token user"},"server@ubuntu"),e("span",{class:"token punctuation"},":"),e("span",{class:"token path"},"~")]),e("span",{class:"token shell-symbol important"},"$"),s(),e("span",{class:"token bash language-bash"},[e("span",{class:"token function"},"sudo"),s(" psad --fw-analyze")])]),s(`
`),e("span",{class:"token output"},`[+] Parsing INPUT chain rules.
[+] Parsing INPUT chain rules.
[+] Firewall config looks good.
[+] Completed check of firewall ruleset.
[+] Results in /var/log/psad/fw_check
[+] Exiting.
`)])])],-1),Q=e("div",{class:"language-shell-session","data-ext":"shell-session","data-title":"shell-session"},[e("pre",{class:"language-shell-session"},[e("code",null,[e("span",{class:"token output"},`server@rocky:~$
`)])])],-1),ee=r('<h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line"><span>Command-line</span></a></h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>psad -R</td><td>Restart psad</td></tr><tr><td>psad -S</td><td>psad status</td></tr><tr><td>psad --fw-analyze</td><td>Analyze the local iptables ruleset</td></tr><tr><td>psad --sig-update</td><td>Download the latest set of psad signatures</td></tr><tr><td>psad -H</td><td>Send all psad daemons a HUP signal to have them re-import configs</td></tr></tbody></table>',2);function se(ne,ae){const c=i("Badge"),o=i("ExternalLinkIcon"),t=i("CodeGroupItem"),l=i("CodeGroup");return u(),p("div",null,[e("h1",b,[e("a",m,[e("span",null,[s("PSAD Intrusion Detection with Log Analysis "),n(c,{text:"Rev 2",type:"tip"})])])]),g,e("p",null,[e("a",f,[s("PSAD website"),n(o)]),s(),e("a",k,[s("GitHub"),n(o)])]),_,v,y,w,e("ul",null,[e("li",null,[e("a",S,[s("psad.conf"),n(o)])])]),x,A,D,P,e("p",null,[s("Make sure you have installed the dependency packages and once complete download the lastest stable version from the "),e("a",E,[s("PSAD GitHub"),n(o)]),s(", extract and run the installation script.")]),e("img",{class:"zoom-custom-imgs",src:"/img/psad/psad_diagram.jpg",alt:"PSAD Port Scan Attack Detector"},null,8,T),n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[L]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[U]),_:1})]),_:1}),n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[C]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[I]),_:1})]),_:1}),N,O,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[R]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[F]),_:1})]),_:1}),$,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[M]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[H]),_:1})]),_:1}),G,e("p",null,[s("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),e("a",W,[s("here"),n(o)]),s(".")]),z,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[B]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[q]),_:1})]),_:1}),V,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[j]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[Z]),_:1})]),_:1}),n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[X]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[Y]),_:1})]),_:1}),J,n(l,null,{default:a(()=>[n(t,{title:"Ubuntu"},{default:a(()=>[K]),_:1}),n(t,{title:"Rocky"},{default:a(()=>[Q]),_:1})]),_:1}),ee])}const le=d(h,[["render",se],["__file","index.html.vue"]]),oe=JSON.parse('{"path":"/psad/","title":"PSAD Port Scan Attack Detector","lang":"en-US","frontmatter":{"lang":"en-US","title":"PSAD Port Scan Attack Detector","description":"PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.","head":[["link",{"rel":"canonical","href":"https://wwww.libellux.com/psad/"}],["meta",{"property":"og:url","content":"https://libellux.com/psad/"}],["meta",{"property":"og:site_name","content":"Libellux"}],["meta",{"property":"og:title","content":"PSAD Port Scan Attack Detector"}],["meta",{"property":"og:description","content":"PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-06T23:35:21.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-06T23:35:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PSAD Port Scan Attack Detector\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-06T23:35:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configuration files","slug":"configuration-files","link":"#configuration-files","children":[]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Install PSAD from source","slug":"install-psad-from-source","link":"#install-psad-from-source","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Enable PSAD rules in OSSEC","slug":"enable-psad-rules-in-ossec","link":"#enable-psad-rules-in-ossec","children":[]}]},{"level":2,"title":"Firewall settings","slug":"firewall-settings","link":"#firewall-settings","children":[]},{"level":2,"title":"Command-line","slug":"command-line","link":"#command-line","children":[]}],"git":{"updatedTime":1696635321000,"contributors":[{"name":"Libellux","email":"fredrik@libellux.com","commits":24},{"name":"Fredrik Hilmersson","email":"fredrik@libellux.com","commits":2}]},"filePathRelative":"psad/README.md"}');export{le as comp,oe as data};