<template><div><h1 id="wireguard-secure-vpn-tunnel" tabindex="-1"><a class="header-anchor" href="#wireguard-secure-vpn-tunnel" aria-hidden="true">#</a> WireGuard Secure VPN Tunnel <Badge text="Rev 2" type="tip"/></h1>
<p>WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable.</p>
<p><a href="https://www.wireguard.com/" target="_blank" rel="noopener noreferrer">WireGuard website<ExternalLinkIcon/></a> <a href="https://www.wireguard.com/repositories/" target="_blank" rel="noopener noreferrer">Git<ExternalLinkIcon/></a> <a href="https://www.wireguard.com/quickstart/" target="_blank" rel="noopener noreferrer">Quick start guide<ExternalLinkIcon/></a></p>
<p>Setup and configuration have been tested on following OS with version:</p>
<ul>
<li>Ubuntu- 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)</li>
<li>WireGuard- 1.0.2~</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><ExternalLinkIcon/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_server" target="_blank" rel="noopener noreferrer">wg0.conf<ExternalLinkIcon/></a> (server)</li>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_client" target="_blank" rel="noopener noreferrer">wg0.conf<ExternalLinkIcon/></a> (client)</li>
</ul>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li><code v-pre>epel-release</code> (Rocky)</li>
<li><code v-pre>elrepo-release</code> (Rocky)</li>
<li><code v-pre>net-tools</code> (optional)</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>In this example we will be configuring WireGuard on our servers to communicate securely over an encrypted virtual private network (VPN). This approach can be useful to secure communication in both cloud environments or any non-trusted network. We will set up one so called master server (<code v-pre>192.168.8.1</code>) along with two client servers (<code v-pre>192.168.8.2</code>, <code v-pre>192.168.8.3</code>). The public subnet (endpoint) is <code v-pre>192.168.0.0/24</code>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>WireGuard is now included in the Linux kernel since the 5.6 release.</p>
</div>
<h2 id="master-server" tabindex="-1"><a class="header-anchor" href="#master-server" aria-hidden="true">#</a> Master server</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>WireGuard are not available on the default <strong>Rocky 8.4</strong> repositories. To install them EPEL repositories are required.</p>
</div>
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> epel-release <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> elrepo-release</span></span>
</code></pre></div><p>Next proceed to install WireGuard on <strong>Ubuntu 20.04</strong> (Focal Fossa) or <strong>Rocky 8.4</strong> (Green Obsidian).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> wireguard</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> kmod-wireguard wireguard-tools</span></span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Generate a private and public key as root user for the WireGuard server.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token parameter variable">-i</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> /etc/wireguard/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
wg genkey <span class="token operator">|</span> <span class="token function">tee</span> private.key <span class="token operator">|</span> wg pubkey <span class="token operator">></span> public.key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">chmod</span> 077 private.key public.key</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token parameter variable">-i</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">root@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> /etc/wireguard/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
wg genkey <span class="token operator">|</span> <span class="token function">tee</span> private.key <span class="token operator">|</span> wg pubkey <span class="token operator">></span> public.key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">chmod</span> 077 private.key public.key</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Copy the private key and create the WireGuard configuration file (wg0.conf) as root.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">cat</span> private.key</span></span>
<span class="token output">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=
</span><span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">nano</span> wg0.conf</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">cat</span> private.key</span></span>
<span class="token output">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=
</span><span class="token command"><span class="token info punctuation"><span class="token user">root@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">nano</span> wg0.conf</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
</CodeGroup>
<p>In the configuration file proceed and define the subnet, port and private key for the VPN network.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">10.0</span>.0.1/24
ListenPort <span class="token operator">=</span> <span class="token number">51820</span>
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proceed to enable WireGuard on boot and start it.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">exit</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> wg-quick@wg0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl start wg-quick@wg0</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">exit</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> wg-quick@wg0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl start wg-quick@wg0</span></span>
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next check if the interface is up using <code v-pre>ifconfig</code> (requires <code v-pre>net-tools</code>) or <code v-pre>ip</code>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">ifconfig</span> <span class="token parameter variable">-a</span> wg0</span></span>
<span class="token output">wg0: flags=209&lt;UP,POINTOPOINT,RUNNING,NOARP>  mtu 1420
        inet 10.0.0.1  netmask 255.255.255.0  destination 10.0.0.1
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 1000  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
</span></code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">server@rocky</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">ifconfig</span> <span class="token parameter variable">-a</span> wg0</span></span>
<span class="token output">wg0: flags=209&lt;UP,POINTOPOINT,RUNNING,NOARP>  mtu 1420
        inet 10.0.0.1  netmask 255.255.255.0  destination 10.0.0.1
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 1000  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
</span></code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="client-servers" tabindex="-1"><a class="header-anchor" href="#client-servers" aria-hidden="true">#</a> Client servers</h2>
<p>Install WireGuard at the first client machine.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">client@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> wireguard</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>As root generate the private and public key.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">client@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> <span class="token parameter variable">-i</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">cd</span> /etc/wireguard/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
wg genkey <span class="token operator">|</span> <span class="token function">tee</span> private.key <span class="token operator">|</span> wg pubkey <span class="token operator">></span> public.key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">chmod</span> 077 private.key public.key</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Copy the private key and create the WireGuard configuration file.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">cat</span> private.key</span></span>
<span class="token output">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ=
</span><span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">nano</span> wg0.conf</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>In the configuration file proceed and define the IP address and private key for the VPN client. In the peer section define the public key (<code v-pre>cat public.key</code>) from the master server along with the subnet and public endpoint.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/24
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> <span class="token assign-left variable">R688QTGKkMCGpJpwrHJ9yXBY5CxriqLGQLy6Agse2DE</span><span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.0/24
Endpoint <span class="token operator">=</span> <span class="token number">192.168</span>.0.1:51820
PersistentKeepalive <span class="token operator">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next copy the public key from the client machine and update the master server's WireGuard configuration (<code v-pre>wg0.conf</code>).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">cat</span> public.key</span></span>
<span class="token output">J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00=
</span></code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>In the master server's configuration file at the public key of the client machine under its peer section.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24
ListenPort <span class="token operator">=</span> <span class="token number">51820</span>
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proceed to enable WireGuard on boot and start it.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token command"><span class="token info punctuation"><span class="token user">root@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token builtin class-name">exit</span></span></span>
<span class="token command"><span class="token info punctuation"><span class="token user">client@ubuntu</span><span class="token punctuation">:</span><span class="token path">~</span></span><span class="token shell-symbol important">$</span> <span class="token bash language-bash"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> wg-quick@wg0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl start wg-quick@wg0</span></span>
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-shell-session" data-ext="shell-session"><pre v-pre class="language-shell-session"><code><span class="token output">server@rocky:~$
</span></code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Before we add the second client machine you can quickly test if the set up is working by sending a ping (ICMP) request between the client and server and vice versa. First make sure that you did open the required ports in your firewall (see <a href="#firewall-settings">Firewall settings</a>).</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>client@ubuntu:~$ ping 192.168.8.1
PING 192.168.8.1 (192.168.8.1) 56(84) bytes of data.
64 bytes from 192.168.8.1: icmp_seq=1 ttl=64 time=0.646 ms
server@ubuntu:~$ ping 192.168.8.2
PING 192.168.8.2 (192.168.8.2) 56(84) bytes of data.
64 bytes from 192.168.8.2: icmp_seq=1 ttl=64 time=0.424 ms
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you've confirmed that the connection between the master server and client works, proceed to set up your second client using the same approach as for the first client. Make sure to add the new client (peer) under the master server's WireGuard configuration.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24
ListenPort <span class="token operator">=</span> <span class="token number">51820</span>
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> l2+KjJXJDKN8UbLadlz3U4rBxU1JOdahXFfqpRi0QrP<span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.3/32
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</p>
<details class="custom-container details"><summary>UFW Settings</summary>
<div class="language-console line-numbers-mode" data-ext="console"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<div class="language-console line-numbers-mode" data-ext="console"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.0/32 to any port 51820 comment &quot;WireGuard&quot;
client@ubuntu:~§ sudo ufw allow proto udp from 192.168.8.1 to any port 51820 comment &quot;WireGuard server&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>
<p>In case you'll need help troubleshooting your WireGuard set up you can always ask help at the <code v-pre>#wireguard</code> IRC channel on <a href="https://webchat.freenode.net/#wireguard" target="_blank" rel="noopener noreferrer">Freenode<ExternalLinkIcon/></a>.</p>
<h2 id="recommended-services" tabindex="-1"><a class="header-anchor" href="#recommended-services" aria-hidden="true">#</a> Recommended services</h2>
<h3 id="mullvad-vpn" tabindex="-1"><a class="header-anchor" href="#mullvad-vpn" aria-hidden="true">#</a> Mullvad VPN <Badge text="non-affiliate" type="tip"/></h3>
<p>Mullvad is a VPN service that helps keep your online activity, identity, and location private. They keep no activity logs, do not ask for personal information, and even encourage anonymous payments via cash or one of the cryptocurrencies they accept. Your IP address is replaced by one of theirs, ensuring that your device's activity and location are not linked to you.</p>
<p><a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN<ExternalLinkIcon/></a></p>
<p>What we like about <a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN<ExternalLinkIcon/></a> is how easy it is to select which VPN protocol you prefer to use e.g. WireGuard and set custom DNS servers along with a very resonable price of only 5 EUR per month. It's also a great product and probably cheaper and faster than an internet provider where you'll still have to pay for your data.</p>
<img class="zoom-custom-imgs" :src="('/img/wireguard/mullvad.png')" alt="mullvad">
</div></template>


