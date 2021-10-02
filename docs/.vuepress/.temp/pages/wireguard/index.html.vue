<template><h1 id="wireguard-secure-vpn-tunnel" tabindex="-1"><a class="header-anchor" href="#wireguard-secure-vpn-tunnel" aria-hidden="true">#</a> WireGuard Secure VPN Tunnel <Badge text="Rev 2" type="tip"/></h1>
<p>WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable.</p>
<p><a href="https://www.wireguard.com/" target="_blank" rel="noopener noreferrer">WireGuard website<OutboundLink/></a> <a href="https://www.wireguard.com/repositories/" target="_blank" rel="noopener noreferrer">Git<OutboundLink/></a></p>
<p>Setup and configuration have been tested on following OS with version:</p>
<ul>
<li>Ubuntu- 18.04, 20.04 (Focal Fossa), Rocky 8.4 (Green Obsidian)</li>
<li>WireGuard- 1.0.2~</li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><OutboundLink/></a></p>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<ul>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_server" target="_blank" rel="noopener noreferrer">wg0.conf<OutboundLink/></a> (server)</li>
<li><a href="https://github.com/libellux/Libellux-Up-and-Running/blob/master/docs/wireguard/config/wg0.conf_client" target="_blank" rel="noopener noreferrer">wg0.conf<OutboundLink/></a> (client)</li>
</ul>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li><code>epel-release</code> (Rocky)</li>
<li><code>elrepo-release</code> (Rocky)</li>
<li><code>net-tools</code> (optional)</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>In this example we will be configuring WireGuard on our servers to communicate securely over an encrypted virtual private network (VPN). This approach can be useful to secure communication in both cloud environments or any non-trusted network. We will set up one so called master server (<code>192.168.8.1</code>) along with two client servers (<code>192.168.8.2</code>, <code>192.168.8.3</code>). The public subnet (endpoint) is <code>192.168.0.0/24</code>.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>WireGuard is now included in the Linux kernel since the 5.6 release.</p>
</div>
<h2 id="master-server" tabindex="-1"><a class="header-anchor" href="#master-server" aria-hidden="true">#</a> Master server</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>WireGuard are not available on the default <strong>Rocky 8.4</strong> repositories. To install them EPEL repositories are required.</p>
</div>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> yum -y <span class="token function">install</span> epel-release <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> yum -y <span class="token function">install</span> elrepo-release
</code></pre></div><p>Next proceed to install WireGuard on <strong>Ubuntu 20.04</strong> (Focal Fossa) or <strong>Rocky 8.4</strong> (Green Obsidian).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> wireguard
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> yum -y <span class="token function">install</span> kmod-wireguard wireguard-tools
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Generate a private and public key as root user for the WireGuard server.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">sudo</span> -i
root@ubuntu:~$ <span class="token builtin class-name">cd</span> /etc/wireguard/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
wg genkey <span class="token operator">|</span> <span class="token function">tee</span> private.key <span class="token operator">|</span> wg pubkey <span class="token operator">></span> public.key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">chmod</span> 077 private.key public.key
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">sudo</span> -i
root@rocky:~$ <span class="token builtin class-name">cd</span> /etc/wireguard/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
wg genkey <span class="token operator">|</span> <span class="token function">tee</span> private.key <span class="token operator">|</span> wg pubkey <span class="token operator">></span> public.key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">chmod</span> 077 private.key public.key
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br></div></div></CodeGroupItem>
</CodeGroup>
<p>Copy the private key and create the WireGuard configuration file (wg0.conf) as root.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>root@ubuntu:~$ <span class="token function">cat</span> private.key
<span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>
root@ubuntu:~$ <span class="token function">nano</span> wg0.conf
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>root@rocky:~$ <span class="token function">cat</span> private.key
<span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>
root@rocky:~$ <span class="token function">nano</span> wg0.conf
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
</CodeGroup>
<p>In the configuration file proceed and define the subnet, port and private key for the VPN network.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">10.0</span>.0.1/24
ListenPort <span class="token operator">=</span> <span class="token number">51820</span>
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Proceed to enable WireGuard on boot and start it.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>root@ubuntu:~$ <span class="token builtin class-name">exit</span>
server@ubuntu:~$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> wg-quick@wg0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl start wg-quick@wg0
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>root@rocky:~$ <span class="token builtin class-name">exit</span>
server@rocky:~$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> wg-quick@wg0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl start wg-quick@wg0
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Next check if the interface is up using <code>ifconfig</code> (requires <code>net-tools</code>) or <code>ip</code>.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@ubuntu:~$ <span class="token function">ifconfig</span> -a wg0
wg0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">20</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,POINTOPOINT,RUNNING,NOARP<span class="token operator">></span>  mtu <span class="token number">1420</span>
        inet <span class="token number">10.0</span>.0.1  netmask <span class="token number">255.255</span>.255.0  destination <span class="token number">10.0</span>.0.1
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>UNSPEC<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$ <span class="token function">ifconfig</span> -a wg0
wg0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">20</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,POINTOPOINT,RUNNING,NOARP<span class="token operator">></span>  mtu <span class="token number">1420</span>
        inet <span class="token number">10.0</span>.0.1  netmask <span class="token number">255.255</span>.255.0  destination <span class="token number">10.0</span>.0.1
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>UNSPEC<span class="token punctuation">)</span>
        RX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">0</span>  bytes <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">0.0</span> B<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="client-servers" tabindex="-1"><a class="header-anchor" href="#client-servers" aria-hidden="true">#</a> Client servers</h2>
<p>Install WireGuard at the first client machine.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> wireguard
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>As root generate the private and public key.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>client@ubuntu:~$ <span class="token function">sudo</span> -i
root@ubuntu:~$ <span class="token builtin class-name">cd</span> /etc/wireguard/ <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
wg genkey <span class="token operator">|</span> <span class="token function">tee</span> private.key <span class="token operator">|</span> wg pubkey <span class="token operator">></span> public.key <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">chmod</span> 077 private.key public.key
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Copy the private key and create the WireGuard configuration file.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>root@ubuntu:~$ <span class="token function">cat</span> private.key
<span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>
root@ubuntu:~$ <span class="token function">nano</span> wg0.conf
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>In the configuration file proceed and define the IP address and private key for the VPN client. In the peer section define the public key (<code>cat public.key</code>) from the master server along with the subnet and public endpoint.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/24
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> <span class="token assign-left variable">R688QTGKkMCGpJpwrHJ9yXBY5CxriqLGQLy6Agse2DE</span><span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.0/24
Endpoint <span class="token operator">=</span> <span class="token number">192.168</span>.0.1:51820
PersistentKeepalive <span class="token operator">=</span> <span class="token number">15</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Next copy the public key from the client machine and update the master server's WireGuard configuration (<code>wg0.conf</code>).</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>root@ubuntu:~$ <span class="token function">cat</span> public.key
J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>In the master server's configuration file at the public key of the client machine under its peer section.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24
ListenPort <span class="token operator">=</span> <span class="token number">51820</span>
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Proceed to enable WireGuard on boot and start it.</p>
<CodeGroup>
<CodeGroupItem title="Ubuntu">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>root@ubuntu:~$ <span class="token builtin class-name">exit</span>
client@ubuntu:~$ <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> wg-quick@wg0 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
<span class="token function">sudo</span> systemctl start wg-quick@wg0
</code></pre></div></CodeGroupItem>
<CodeGroupItem title="Rocky">
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code>server@rocky:~$
</code></pre></div></CodeGroupItem>
</CodeGroup>
<p>Before we add the second client machine you can quickly test if the set up is working by sending a ping (ICMP) request between the client and server and vice versa. First make sure that you did open the required ports in your firewall (see <a href="#firewall-settings">Firewall settings</a>).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>client@ubuntu:~$ ping 192.168.8.1
PING 192.168.8.1 (192.168.8.1) 56(84) bytes of data.
64 bytes from 192.168.8.1: icmp_seq=1 ttl=64 time=0.646 ms
server@ubuntu:~$ ping 192.168.8.2
PING 192.168.8.2 (192.168.8.2) 56(84) bytes of data.
64 bytes from 192.168.8.2: icmp_seq=1 ttl=64 time=0.424 ms
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Once you've confirmed that the connection between the master server and client works, proceed to set up your second client using the same approach as for the first client. Make sure to add the new client (peer) under the master server's WireGuard configuration.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>Interface<span class="token punctuation">]</span>
Address <span class="token operator">=</span> <span class="token number">192.168</span>.8.1/24
ListenPort <span class="token operator">=</span> <span class="token number">51820</span>
PrivateKey <span class="token operator">=</span> <span class="token assign-left variable">INroRZ79Rx7mWg8f7MrocxyK2SzTN4GHGw5jOvtpDOQ</span><span class="token operator">=</span>

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> J3+KjJXJDKN9UVLpdlo3UBrBVU1JOdahGQYqpRxbe00<span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.2/32

<span class="token punctuation">[</span>Peer<span class="token punctuation">]</span>
PublicKey <span class="token operator">=</span> l2+KjJXJDKN8UbLadlz3U4rBxU1JOdahXFfqpRi0QrP<span class="token operator">=</span>
AllowedIPs <span class="token operator">=</span> <span class="token number">192.168</span>.8.3/32
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<details class="custom-container details"><summary>UFW Settings</summary>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw allow proto udp from 192.168.8.0/32 to any port 51820 comment &quot;WireGuard&quot;
client@ubuntu:~§ sudo ufw allow proto udp from 192.168.8.1 to any port 51820 comment &quot;WireGuard server&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>
<p>In case you'll need help troubleshooting your WireGuard set up you can always ask help at the <code>#wireguard</code> IRC channel on <a href="https://webchat.freenode.net/#wireguard" target="_blank" rel="noopener noreferrer">Freenode<OutboundLink/></a>.</p>
<h2 id="recommended-services" tabindex="-1"><a class="header-anchor" href="#recommended-services" aria-hidden="true">#</a> Recommended services</h2>
<h3 id="mullvad-vpn" tabindex="-1"><a class="header-anchor" href="#mullvad-vpn" aria-hidden="true">#</a> Mullvad VPN <Badge text="non-affiliate" type="tip"/></h3>
<p>Mullvad is a VPN service that helps keep your online activity, identity, and location private. They keep no activity logs, do not ask for personal information, and even encourage anonymous payments via cash or one of the cryptocurrencies they accept. Your IP address is replaced by one of theirs, ensuring that your device's activity and location are not linked to you.</p>
<p><a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN<OutboundLink/></a></p>
<p>What we like about <a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN<OutboundLink/></a> is how easy it is to select which VPN protocol you prefer to use e.g. WireGuard and set custom DNS servers along with a very resonable price of only 5 EUR per month. It's also a great product and probably cheaper and faster than an internet provider where you'll still have to pay for your data.</p>
<img class="zoom-custom-imgs" :src="('/img/wireguard/mullvad.png')" alt="mullvad">
</template>
