<template><div><h1 id="psad-intrusion-detection-with-log-analysis" tabindex="-1"><a class="header-anchor" href="#psad-intrusion-detection-with-log-analysis" aria-hidden="true">#</a> PSAD Intrusion Detection with Log Analysis <Badge text="Rev 2" type="tip"/></h1>
<p>PSAD (Port Scan Attack Detector) is a collection of three lightweight system daemons (two main daemons and one helper daemon) that run on Linux machines and analyze iptables log messages to detect port scans and other suspicious traffic. A typical deployment is to run PSAD on the iptables firewall where it has the fastest access to log data.</p>
<p><a href="https://cipherdyne.org/psad/" target="_blank" rel="noopener noreferrer">PSAD website<ExternalLinkIcon/></a> <a href="https://github.com/mrash/psad" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<p>Setup and configuration have been tested on the following operating systems:</p>
<ul>
<li>Ubuntu- 16.04, 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)</li>
<li>PSAD- 2.2.3 -&gt; 2.4.6</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><ExternalLinkIcon/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/psad/config/psad.conf" target="_blank" rel="noopener noreferrer">psad.conf<ExternalLinkIcon/></a></li>
</ul>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Dependancies when installing PSAD from source.</p>
<ul>
<li><code v-pre>net-tools</code></li>
<li><code v-pre>g++</code></li>
</ul>
<h2 id="install-psad-from-source" tabindex="-1"><a class="header-anchor" href="#install-psad-from-source" aria-hidden="true">#</a> Install PSAD from source</h2>
<p>Make sure you have installed the dependency packages and once complete download the lastest stable version from the <a href="https://github.com/mrash/psad" target="_blank" rel="noopener noreferrer">PSAD GitHub<ExternalLinkIcon/></a>, extract and run the installation script.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y upgrade <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y <span class="token function">install</span> net-tools g++ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">wget</span> https://github.com/mrash/psad/archive/2.4.6.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">tar</span> -zxvf <span class="token number">2.4</span>.6.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> psad-2.4.6/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> ./install.pl</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">[+] psad alerts will be sent to:

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
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>
<p>The email address will be left as default (root@localhost;) as in this tutorial we'll use OSSEC to manage the alerts.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">nano</span> /etc/psad/psad.conf

<span class="token comment">### Machine hostname</span>
<span class="token environment constant">HOSTNAME</span> server@ubuntu<span class="token punctuation">;</span>

<span class="token comment">### Specify the home and external networks.  Note that by default the</span>
<span class="token comment">### ENABLE_INTF_LOCAL_NETS is enabled, so psad automatically detects</span>
<span class="token comment">### all of the directly connected subnets and uses this information as</span>
<span class="token comment">### the HOME_NET variable.</span>
HOME_NET                    <span class="token number">192.168</span>.0.0/24<span class="token punctuation">;</span>
EXTERNAL_NET                any<span class="token punctuation">;</span>

IPT_SYSLOG_FILE             /var/log/syslog<span class="token punctuation">;</span>
EXPECT_TCP_OPTIONS		    Y<span class="token punctuation">;</span>
EMAIL_ALERT_DANGER_LEVEL	<span class="token number">3</span><span class="token punctuation">;</span>

<span class="token comment">### Allow reporting methods to be enabled/restricted.  This keyword can</span>
<span class="token comment">### accept values of "nosyslog" (don't write any messages to syslog),</span>
<span class="token comment">### "noemail" (don't send any email messages), or "ALL" (to generate both</span>
<span class="token comment">### syslog and email messages).  "ALL" is the default.  Both "nosyslog"</span>
<span class="token comment">### and "noemail" can be combined with a comma to disable all logging</span>
<span class="token comment">### and alerting.</span>
ALERTING_METHODS            noemail<span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>To check the status of PSAD execute the following command.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> psad -S</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h3 id="enable-psad-rules-in-ossec" tabindex="-1"><a class="header-anchor" href="#enable-psad-rules-in-ossec" aria-hidden="true">#</a> Enable PSAD rules in OSSEC</h3>
<p>To enable OSSEC to decode and respond to PSAD rules being triggered follow the instructions found <a href="">here</a>.</p>
<h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
<details class="custom-container details"><summary>UFW Settings</summary>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>First enable logging using the built-in UFW command below.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw logging on</span></span>
<span class="token output">Logging enabled
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Once logging been enabled you'll also need to alter the UFW rules. Edit both configuration files (before.rules and before6.rules) and add the following before the COMMIT line.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/ufw/before.rules</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/ufw/before6.rules</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># custom psad logging directives</span>
-A INPUT -j LOG
-A FORWARD -j LOG

<span class="token comment"># do not delete the "COMMIT" line or these rules wont be processed</span>
COMMIT
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>Next reload UFW and proceed to check psad with the built-in firewall analyze tool.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> ufw reload</span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> psad --fw-analyze</span></span>
<span class="token output">[+] Parsing INPUT chain rules.
[+] Parsing INPUT chain rules.
[+] Firewall config looks good.
[+] Completed check of firewall ruleset.
[+] Results in /var/log/psad/fw_check
[+] Exiting.
</span></code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session ext-shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command-line</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>psad -R</td>
<td>Restart psad</td>
</tr>
<tr>
<td>psad -S</td>
<td>psad status</td>
</tr>
<tr>
<td>psad --fw-analyze</td>
<td>Analyze the local iptables ruleset</td>
</tr>
<tr>
<td>psad --sig-update</td>
<td>Download the latest set of psad signatures</td>
</tr>
<tr>
<td>psad -H</td>
<td>Send all psad daemons a HUP signal to have them re-import configs</td>
</tr>
</tbody>
</table>
</div></template>
