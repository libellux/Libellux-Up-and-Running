<template><h1 id="ansible-provisioning-configuration-management-and-application-deployment-tool" tabindex="-1"><a class="header-anchor" href="#ansible-provisioning-configuration-management-and-application-deployment-tool" aria-hidden="true">#</a> Ansible provisioning, configuration management, and application-deployment tool <Badge text="dev" type="warning"/></h1>
<p>Ansible is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code.</p>
<p><a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">Ansible website<ExternalLinkIcon/></a> <a href="https://github.com/ansible/ansible" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<p>Setup and configuration have been tested on the following operating systems:</p>
<ul>
<li>Ubuntu 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)</li>
<li>Ansible 2.9.6</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><ExternalLinkIcon/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<p>Prerequisites for Ansible.</p>
<h2 id="install-ansible" tabindex="-1"><a class="header-anchor" href="#install-ansible" aria-hidden="true">#</a> Install Ansible</h2>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y upgrade <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y ansible
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> yum -y update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> yum -y upgrade <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> -y ansible
</code></pre></div></CodeGroupItem>
</CodeGroup>
<h2 id="server-configuration" tabindex="-1"><a class="header-anchor" href="#server-configuration" aria-hidden="true">#</a> Server configuration</h2>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /etc/ansible/hosts
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> <span class="token function">nano</span> /etc/ansible/hosts
</code></pre></div></CodeGroupItem>
</CodeGroup>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>servers<span class="token punctuation">]</span>
server1 <span class="token assign-left variable">ansible_host</span><span class="token operator">=</span><span class="token number">192.168</span>.0.2
server2 <span class="token assign-left variable">ansible_host</span><span class="token operator">=</span><span class="token number">192.168</span>.0.3
server3 <span class="token assign-left variable">ansible_host</span><span class="token operator">=</span><span class="token number">192.168</span>.0.4

<span class="token punctuation">[</span>all:vars<span class="token punctuation">]</span>
<span class="token assign-left variable">ansible_python_interpreter</span><span class="token operator">=</span>/usr/bin/python3
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>servers<span class="token punctuation">]</span>
server1 <span class="token assign-left variable">ansible_host</span><span class="token operator">=</span><span class="token number">192.168</span>.0.2
server2 <span class="token assign-left variable">ansible_host</span><span class="token operator">=</span><span class="token number">192.168</span>.0.3
server3 <span class="token assign-left variable">ansible_host</span><span class="token operator">=</span><span class="token number">192.168</span>.0.4
</code></pre></div></CodeGroupItem>
</CodeGroup>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ ansible all -m <span class="token function">ping</span> -u ansible
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ ansible all -m <span class="token function">ping</span> -u ansible
</code></pre></div></CodeGroupItem>
</CodeGroup>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>Output
server1 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
server2 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
server3 <span class="token operator">|</span> SUCCESS <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token string">"changed"</span><span class="token builtin class-name">:</span> false, 
    <span class="token string">"ping"</span><span class="token builtin class-name">:</span> <span class="token string">"pong"</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
<details class="custom-container details"><summary>UFW Settings</summary>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>
<h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command-line</h2>
</template>
