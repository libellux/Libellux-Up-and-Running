import{r as i,o as u,c as d,a as n,b as e,w as a,F as p,e as s,d as c}from"./app.88a053b9.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const b={},g={id:"psad-intrusion-detection-with-log-analysis",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#psad-intrusion-detection-with-log-analysis","aria-hidden":"true"},"#",-1),k=s(" PSAD Intrusion Detection with Log Analysis "),f=n("p",null,"PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.",-1),_={href:"https://cipherdyne.org/psad/",target:"_blank",rel:"noopener noreferrer"},y=s("PSAD website"),v=s(),w={href:"https://github.com/mrash/psad",target:"_blank",rel:"noopener noreferrer"},x=s("GitHub"),S=n("p",null,"Setup and configuration have been tested on the following operating systems:",-1),E=n("ul",null,[n("li",null,"Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)"),n("li",null,"PSAD- 2.2.3 -> 2.4.6")],-1),A={href:"https://ko-fi.com/B0B31BJU3",target:"_blank",rel:"noopener noreferrer"},T=n("img",{src:"https://www.ko-fi.com/img/githubbutton_sm.svg",alt:"ko-fi"},null,-1),D=n("h2",{id:"configuration-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration-files","aria-hidden":"true"},"#"),s(" Configuration files")],-1),P={href:"https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/psad/config/psad.conf",target:"_blank",rel:"noopener noreferrer"},L=s("psad.conf"),U=n("h2",{id:"prerequisites",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),s(" Prerequisites")],-1),I=n("p",null,"Dependancies when installing PSAD from source.",-1),N=n("ul",null,[n("li",null,[n("code",null,"net-tools")]),n("li",null,[n("code",null,"g++")])],-1),O=n("h2",{id:"install-psad-from-source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#install-psad-from-source","aria-hidden":"true"},"#"),s(" Install PSAD from source")],-1),R=s("Make sure you have installed the dependency packages and once complete download the lastest stable version from the "),C={href:"https://github.com/mrash/psad",target:"_blank",rel:"noopener noreferrer"},F=s("PSAD GitHub"),$=s(", extract and run the installation script."),M=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(" update "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(" -y upgrade "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(" -y "),n("span",{class:"token function"},"install"),s(" net-tools g++ "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"wget"),s(" https://github.com/mrash/psad/archive/2.4.6.tar.gz "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"tar"),s(" -zxvf "),n("span",{class:"token number"},"2.4"),s(".6.tar.gz "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token builtin class-name"},"cd"),s(" psad-2.4.6/ "),n("span",{class:"token operator"},"&&"),s(),n("span",{class:"token punctuation"},"\\"),s(`
`),n("span",{class:"token function"},"sudo"),s(` ./install.pl
`)])])],-1),H=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)])],-1),B=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` psad alerts will be sent to:

       root@localhost

`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(" Would you like alerts sent to a different address "),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("y"),n("span",{class:"token punctuation"},"]"),s("/n"),n("span",{class:"token punctuation"},")"),s(`?  n

`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(" By default, psad parses all iptables log messages "),n("span",{class:"token keyword"},"for"),s(` scan activity.
    However, psad can be configured to only parse those iptables messages
    that match particular strings `),n("span",{class:"token punctuation"},"("),s("that are specified "),n("span",{class:"token keyword"},"in"),s(` your iptables
    ruleset with the --log-prefix option`),n("span",{class:"token punctuation"},")"),s(`.

    Would you like psad to only parse specific strings `),n("span",{class:"token keyword"},"in"),s(` iptables
    messages `),n("span",{class:"token punctuation"},"("),s("y/"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`?  n

`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` By default, psad matches Snort rules against any IP addresses, but
    psad offers the ability to restrict signature matches to specific
    networks with the HOME_NET variable `),n("span",{class:"token punctuation"},"("),s("similar to Snort"),n("span",{class:"token punctuation"},")"),s(`.  However, psad
    also offers the ability to acquire all `),n("span",{class:"token builtin class-name"},"local"),s(" subnets on the "),n("span",{class:"token builtin class-name"},"local"),s(` system
    by parsing the output of `),n("span",{class:"token string"},'"ifconfig"'),s(`, or the subnets can be restricted
    to a limited `),n("span",{class:"token builtin class-name"},"set"),s(` of networks.

    First, is it ok to leave the HOME_NET setting as `),n("span",{class:"token string"},'"any"'),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("y"),n("span",{class:"token punctuation"},"]"),s("/n"),n("span",{class:"token punctuation"},")"),s(`?  y

`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` psad has the capability of sending scan data via email alerts to the
    DShield distributed intrusion detection system `),n("span",{class:"token punctuation"},"("),s("www.dshield.org"),n("span",{class:"token punctuation"},")"),s(`.  By
    default this feature is not enabled since firewall log data is sensitive,
    but submitting logs to DShield provides a valuable `),n("span",{class:"token function"},"service"),s(` and assists
    `),n("span",{class:"token keyword"},"in"),s(" generally enhancing internet security.  As an optional step, "),n("span",{class:"token keyword"},"if"),s(` you
    have a DShield user `),n("span",{class:"token function"},"id"),s(" you can edit the "),n("span",{class:"token string"},'"DSHIELD_USER_ID"'),s(` variable
    `),n("span",{class:"token keyword"},"in"),s(` /etc/psad/psad.conf

    Would you like to `),n("span",{class:"token builtin class-name"},"enable"),s(" DShield alerts "),n("span",{class:"token punctuation"},"("),s("y/"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`?  n

`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(" Setting "),n("span",{class:"token function"},"hostname"),s(" to "),n("span",{class:"token string"},'"client@ubuntu"'),s(),n("span",{class:"token keyword"},"in"),s(` /etc/psad/psad.conf
`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(" The latest psad signatures can be installed with "),n("span",{class:"token string"},'"psad --sig-update"'),s(`
    or installed now with install.pl.

    If you decide to answer `),n("span",{class:"token string"},"'y'"),s(` to the next question, install.pl
    will require DNS and network access now.

    Would you like to `),n("span",{class:"token function"},"install"),s(` the latest signatures from
      http://www.cipherdyne.org/psad/signatures `),n("span",{class:"token punctuation"},"("),s("y/n"),n("span",{class:"token punctuation"},")"),s(`?  y

`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(" Enable psad at boot "),n("span",{class:"token function"},"time"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("y"),n("span",{class:"token punctuation"},"]"),s("/n"),n("span",{class:"token punctuation"},")"),s(`?  y

`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` psad has been installed.
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br")])],-1),G=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)])],-1),W=n("h2",{id:"configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),s(" Configuration")],-1),z=n("p",null,"The email address will be left as default (root@localhost;) as in this tutorial we'll use OSSEC to manage the alerts.",-1),q=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[s("$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"nano"),s(` /etc/psad/psad.conf

`),n("span",{class:"token comment"},"### Machine hostname"),s(`
`),n("span",{class:"token environment constant"},"HOSTNAME"),s(" server@ubuntu"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"### Specify the home and external networks.  Note that by default the"),s(`
`),n("span",{class:"token comment"},"### ENABLE_INTF_LOCAL_NETS is enabled, so psad automatically detects"),s(`
`),n("span",{class:"token comment"},"### all of the directly connected subnets and uses this information as"),s(`
`),n("span",{class:"token comment"},"### the HOME_NET variable."),s(`
HOME_NET                    `),n("span",{class:"token number"},"192.168"),s(".0.0/24"),n("span",{class:"token punctuation"},";"),s(`
EXTERNAL_NET                any`),n("span",{class:"token punctuation"},";"),s(`

IPT_SYSLOG_FILE             /var/log/syslog`),n("span",{class:"token punctuation"},";"),s(`
EXPECT_TCP_OPTIONS		    Y`),n("span",{class:"token punctuation"},";"),s(`
EMAIL_ALERT_DANGER_LEVEL	`),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"### Allow reporting methods to be enabled/restricted.  This keyword can"),s(`
`),n("span",{class:"token comment"},`### accept values of "nosyslog" (don't write any messages to syslog),`),s(`
`),n("span",{class:"token comment"},`### "noemail" (don't send any email messages), or "ALL" (to generate both`),s(`
`),n("span",{class:"token comment"},'### syslog and email messages).  "ALL" is the default.  Both "nosyslog"'),s(`
`),n("span",{class:"token comment"},'### and "noemail" can be combined with a comma to disable all logging'),s(`
`),n("span",{class:"token comment"},"### and alerting."),s(`
ALERTING_METHODS            noemail`),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br")])],-1),V=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),j=n("p",null,"To check the status of PSAD execute the following command.",-1),X=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` psad -S
`)])])],-1),Y=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)])],-1),J=c('<h3 id="enable-psad-rules-in-ossec" tabindex="-1"><a class="header-anchor" href="#enable-psad-rules-in-ossec" aria-hidden="true">#</a> Enable PSAD rules in OSSEC</h3><p>To enable OSSEC to decode and respond to PSAD rules being triggered follow the instructions found <a href="">here</a>.</p><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>',3),K=s("The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW "),Q={href:"https://help.ubuntu.com/community/UFW",target:"_blank",rel:"noopener noreferrer"},Z=s("here"),nn=s("."),sn=c(`<details class="custom-container details"><summary>UFW Settings</summary><div class="language-console ext-console line-numbers-mode"><pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><p>First enable logging using the built-in UFW command below.</p>`,2),en=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` ufw logging on
Logging enabled
`)])])],-1),an=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)])],-1),tn=n("p",null,"Once logging been enabled you'll also need to alter the UFW rules. Edit both configuration files (before.rules and before6.rules) and add the following before the COMMIT line.",-1),on=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"nano"),s(` /etc/ufw/before.rules
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"nano"),s(` /etc/ufw/before6.rules
`)])])],-1),ln=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)])],-1),cn=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# custom psad logging directives"),s(`
-A INPUT -j LOG
-A FORWARD -j LOG

`),n("span",{class:"token comment"},'# do not delete the "COMMIT" line or these rules wont be processed'),s(`
COMMIT
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br")])],-1),rn=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br")])],-1),un=n("p",null,"Next reload UFW and proceed to check psad with the built-in firewall analyze tool.",-1),dn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("server@ubuntu:~$ "),n("span",{class:"token function"},"sudo"),s(` ufw reload
server@ubuntu:~$ `),n("span",{class:"token function"},"sudo"),s(` psad --fw-analyze
`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` Parsing INPUT chain rules.
`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` Parsing INPUT chain rules.
`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` Firewall config looks good.
`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` Completed check of firewall ruleset.
`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(" Results "),n("span",{class:"token keyword"},"in"),s(` /var/log/psad/fw_check
`),n("span",{class:"token punctuation"},"["),s("+"),n("span",{class:"token punctuation"},"]"),s(` Exiting.
`)])])],-1),pn=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,`server@rocky:~$
`)])],-1),hn=c('<h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command-line</h2><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td>psad -R</td><td>Restart psad</td></tr><tr><td>psad -S</td><td>psad status</td></tr><tr><td>psad --fw-analyze</td><td>Analyze the local iptables ruleset</td></tr><tr><td>psad --sig-update</td><td>Download the latest set of psad signatures</td></tr><tr><td>psad -H</td><td>Send all psad daemons a HUP signal to have them re-import configs</td></tr></tbody></table>',2);function bn(gn,mn){const r=i("Badge"),l=i("ExternalLinkIcon"),t=i("CodeGroupItem"),o=i("CodeGroup");return u(),d(p,null,[n("h1",g,[m,k,e(r,{text:"Rev 2",type:"tip"})]),f,n("p",null,[n("a",_,[y,e(l)]),v,n("a",w,[x,e(l)])]),S,E,n("p",null,[n("a",A,[T,e(l)])]),D,n("ul",null,[n("li",null,[n("a",P,[L,e(l)])])]),U,I,N,O,n("p",null,[R,n("a",C,[F,e(l)]),$]),e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[M]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[H]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[B]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[G]),_:1})]),_:1}),W,z,e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[q]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[V]),_:1})]),_:1}),j,e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[X]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[Y]),_:1})]),_:1}),J,n("p",null,[K,n("a",Q,[Z,e(l)]),nn]),sn,e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[en]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[an]),_:1})]),_:1}),tn,e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[on]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[ln]),_:1})]),_:1}),e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[cn]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[rn]),_:1})]),_:1}),un,e(o,null,{default:a(()=>[e(t,{title:"Ubuntu"},{default:a(()=>[dn]),_:1}),e(t,{title:"Rocky"},{default:a(()=>[pn]),_:1})]),_:1}),hn],64)}var _n=h(b,[["render",bn]]);export{_n as default};
