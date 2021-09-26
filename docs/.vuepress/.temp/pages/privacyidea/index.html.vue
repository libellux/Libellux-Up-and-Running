<template><h1 id="two-factor-authentication-w-privacyidea-and-yubikey" tabindex="-1"><a class="header-anchor" href="#two-factor-authentication-w-privacyidea-and-yubikey" aria-hidden="true">#</a> Two-factor authentication w/ privacyIDEA and YubiKey <Badge text="Rev 1" type="tip"/></h1>
<p>privacyIDEA is a modular authentication server that can be used to enhance the security of your existing applications like local login, VPN, remote access, SSH connections, access to web sites or web portals with two-factor authentication.</p>
<p><a href="https://www.privacyidea.org/" target="_blank" rel="noopener noreferrer">privacyIDEA website<OutboundLink/></a> <a href="https://github.com/privacyidea/privacyidea" target="_blank" rel="noopener noreferrer">GitHub<OutboundLink/></a><br>
<a href="https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK" target="_blank" rel="noopener noreferrer">Yubico website<OutboundLink/></a> <Badge text="affiliate links" type="warning"/></p>
<p>Setup and configuration has been tested on the following operating systems:</p>
<ul>
<li>Ubuntu 20.04 (Focal Fossa)</li>
<li>privacyIDEA- 3.5.2</li>
<li><a href="https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK" target="_blank" rel="noopener noreferrer">YubiKey 5 NFC<OutboundLink/></a></li>
</ul>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><OutboundLink/></a></p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li><a href="https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK" target="_blank" rel="noopener noreferrer">YubiKey 5 NFC<OutboundLink/></a> (optional)</li>
<li><a href="https://www.yubico.com/support/download/yubikey-personalization-tools/" target="_blank" rel="noopener noreferrer">YubiKey Personalization Tool<OutboundLink/></a> (optional)</li>
</ul>
<h2 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h2>
<h2 id="install-community-edition" tabindex="-1"><a class="header-anchor" href="#install-community-edition" aria-hidden="true">#</a> Install community edition</h2>
<p>We will use privacyIDEA and their FreeRADIUS plugin together with <a href="https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK" target="_blank" rel="noopener noreferrer">YubiKey 5 NFC<OutboundLink/></a> (from Yubico) to enforce two-factor authentication and apply an role-based access control approach (RBAC). We will simplify the user accounting by fetching the users from the local <code>/etc/passwd</code> file and use it as the privacyIDEA resolver (instead of e.g. LDAP, SQL. You can read more about resolvers <a href="https://privacyidea.readthedocs.io/en/latest/configuration/useridresolvers.html#useridresolvers" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>). To get an hands-on experience we will use the privacyIDEA authentication server to access the <RouterLink to="/openvas/">Greenbone Vulnerability Manager's</RouterLink> user interface.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is the first revision for privacyIDEA. We will write more about the different modular options e.g. LDAP as resolver in future releases. If there's any particular configuration you would like us to cover feel free to create a new <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">Feature request<OutboundLink/></a>.</p>
</div>
<p>To get started download the signed key.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ wget https://lancelot.netknights.it/NetKnights-Release.asc
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Next import the signed key.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo gpg --import --import-options show-only --with-fingerprint NetKnights-Release.asc
pub rsa4096 2017-05-16  NetKnights GmbH &lt;release@netknights.it>
Key fingerprint = 0940 4ABB EDB3 586D EDE4  AD22 00F7 0D62 AE25 0082
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Continue by adding the key to our system.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo apt-key add NetKnights-Release.asc
OK
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Now we need to add the repository for the specific release (in this case Ubuntu 20.04).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo add-apt-repository http://lancelot.netknights.it/community/focal/stable
server@ubuntu:~$ sudo apt-get update
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you prefer to use the nginx version you can install <code>apt-get privacyidea-nginx</code></p>
</div>
<p>Once we updated the package manager we can install PrivacyIDEA.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo apt-get update
server@ubuntu:~$ sudo apt-get install privacyidea-apache2
             _                    _______  _______
   ___  ____(_)  _____ _______ __/  _/ _ \/ __/ _ |
  / _ \/ __/ / |/ / _ `/ __/ // // // // / _// __ |
 / .__/_/ /_/|___/\_,_/\__/\_, /___/____/___/_/ |_|
/_/                       /___/

Running online
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Let's create the administration account.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo pi-manage admin add admin -e admin@localhost
Admin admin was registered successfully.
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Once you've added the administrator account and followed the <a href="#firewall-settings">firewall settings</a> you should be able to reach the web interface from <code>https://192.168.0.1</code> and login as the admin user with your password.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea_login.png')" alt="PrivacyIDEA login">
<h2 id="privacyidea-freeradius-plugin" tabindex="-1"><a class="header-anchor" href="#privacyidea-freeradius-plugin" aria-hidden="true">#</a> privacyIDEA FreeRADIUS plugin</h2>
<p>Now we will install the privacyIDEA freeRADIUS plugin, which we will be using to enable RADIUS for <RouterLink to="/openvas/">Greenbone Vulnerability Manager</RouterLink>.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo apt-get install privacyidea-radius
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>In the <code>clients.conf</code> we will add our client(s), which in this case is our <RouterLink to="/openvas/">Greenbone Vulnerability Manager</RouterLink>. Define the IP address of the <RouterLink to="/openvas/">Greenbone Vulnerability Manager</RouterLink> and set the secret (do not use the default secret).</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ sudo -i
root@ubuntu:~$ sudo nano /etc/freeradius/3.0/clients.conf
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#client example.org {</span>
<span class="token comment">#       ipaddr          = radius.example.org</span>
<span class="token comment">#       secret          = testing123</span>
<span class="token comment">#}</span>
client GVM <span class="token punctuation">{</span>
        ipaddr <span class="token operator">=</span> <span class="token number">192.168</span>.0.3
        secret <span class="token operator">=</span> testing123
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>In the <code>sites-enabled</code> folder you will find the default authentication settings for privacyIDEA. Leave the default <code>perl-privacyidea</code> type.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:~$ cd /etc/freeradius/3.0/sites-enabled/
root@ubuntu:~$ cat privacyidea
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server {
    authorize {
        #files
        perl-privacyidea
        if (ok || updated) {
            update control {
                Auth-Type := Perl
            }
        }
    }
    listen {
        type = auth
        ipaddr = *
        port = 0
    }
    authenticate {
        Auth-Type Perl {
            perl-privacyidea
        }
    }
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>The authentication type which is an enabled mod is located in the <code>mods-enabled</code> directory and you will see the <code>privacyidea_radius.pm</code> module file. Leave the default settings.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:~$ cd /etc/freeradius/3.0/mods-enabled/
root@ubuntu:~$ cat mods-perl-privacyidea
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>perl perl-privacyidea {
    filename = /usr/share/privacyidea/freeradius/privacyidea_radius.pm
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="configure-privacyidea" tabindex="-1"><a class="header-anchor" href="#configure-privacyidea" aria-hidden="true">#</a> Configure privacyIDEA</h2>
<p>As we configured the local freeRADIUS plugin and added <RouterLink to="/openvas/">Greenbone Vulnerability Manager</RouterLink> as a client we will now configure the privacyIDEA authentication server. The freeRADIUS plugin doesn't have to be installed on the same server as privacyIDEA. You can define this in the <code>rlm_perl.ini</code> file. In this tutorial we will leave the default localhost as our domain.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>root@ubuntu:~$ exit
server@ubuntu:~$ sudo nano /etc/privacyidea/rlm_perl.ini
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[Default]
URL = https://localhost/validate/check
#REALM = someRealm
#RESCONF = someResolver
SSL_CHECK = false
#DEBUG = true
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="configure-yubikey-for-privacyidea" tabindex="-1"><a class="header-anchor" href="#configure-yubikey-for-privacyidea" aria-hidden="true">#</a> Configure YubiKey for privacyIDEA</h2>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>privacyIDEA requires <a href="https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK" target="_blank" rel="noopener noreferrer">YubiKey 5 NFC<OutboundLink/></a>.</p>
</div>
<p>Start YubiKey Personalization Tool. Go to Settings. In the <code>Logging Settings</code> select <code>Flexible format</code> and add <code>{serial}, {secretKeyTxt}</code> variables in the form field.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/yubikey-settings.png')" alt="yubikey settings">
<p>Next click the <code>OATH-HOTP</code> tab. Select which slot you wish to write your configuration to. Uncheck <code>OATH Token Identifier</code> and create the secret key by pressing the <code>Generate</code> button. Complete the build by clicking the <code>Write Configuration</code> button and save the CSV file.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/yubikey-hotp.png')" alt="yubikey hotp">
<h2 id="enroll-token-w-yubikey" tabindex="-1"><a class="header-anchor" href="#enroll-token-w-yubikey" aria-hidden="true">#</a> Enroll token w/ YubiKey</h2>
<p>Before we enroll the token with YubiKey we will create a resolver and realm and select the first user. Login to privacyIDEA at e.g. <code>https://192.168.0.1</code>. In the top menu click <code>Config</code>. Next click the <code>Users</code> tab and select <code>New passwdresolver</code>. Once you've given the resolver a name click the <code>Save Resolver</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-resolver.png')" alt="privacyidea resolver">
<p>Next we will create the realm. Click the tab <code>Realms</code>. Give the realm a name and check the passwdresolver we just created. Click <code>Create Realm</code>.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-realm.png')" alt="privacyidea realm">
<p>Now lets select the first user. In the top menu click <code>Users</code>. Select the realm we just created in the left dropdown menu. This will show the list of all users from the <code>/etc/passwd</code> file. You can select any user from the list. We will go with the user <code>mail</code> for this example.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-users.png')" alt="privacyidea users">
<p>Once you've decided which user you will connect to the YubiKey you can now assign your first token to a user. In the top menu click <code>Token</code> and select <code>Import Tokens</code> in the left menu. Select authentication method <code>OATH CSV</code> and realm. Click the <code>Select file and import</code> button and upload the file that you created earlier from the YubiKey configuration.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-token.png')" alt="privacyidea assign token">
<p>Go back to <code>All tokens</code> in the left menu and you will see your newly enrolled token. Click the serial number for further details.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-token-2.png')" alt="privacyidea token">
<p>Here you will see the specific settings and details for the newly enrolled token. Now we will assign this token to the user. In the <code>Assign User</code> section select the <code>Realm</code>, fill in the <code>Username</code> you selected from the resolver list and finally set a <code>PIN</code> (in this example we used <code>mail</code> as the PIN). Click the <code>Assign User</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-assign-token.png')" alt="privacyidea assign token">
<p>Next lets test if the token works. Above the <code>Assign User</code> section, in the form field next to the test token button, type your selected <code>PIN</code> and click your <a href="https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK" target="_blank" rel="noopener noreferrer">YubiKey 5 NFC<OutboundLink/></a> button and hit the <code>Test token</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-test-token.png')" alt="privacyidea test token">
<p>You can also test if privacyIDEA grants access to the freeRADIUS client directly from the command-line. Fill in your <code>User-Name</code>, insert your <code>PIN</code> within the <code>User-Password</code> variable and hit your YubiKey button to output the token. Make sure to also define your secret.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>server@ubuntu:~$ echo "User-Name=mail, User-Password=mail123456" | radclient -x -s localhost auth testing123
Sent Access-Request Id 61 from 0.0.0.0:59998 to 127.0.0.1:1812 length 44
        User-Name = "mail123456"
        User-Password = "mail123456"
        Cleartext-Password = "mail123456"
Received Access-Accept Id 61 from 127.0.0.1:1812 to 127.0.0.1:59998 length 48
        Reply-Message = "privacyIDEA access granted"
Packet summary:
        Accepted      : 1
        Rejected      : 0
        Lost          : 0
        Passed filter : 1
        Failed filter : 0
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Now go to the <code>Config</code> menu and select the <code>System</code> tab. In the <code>System Config</code> add <code>127.0.0.1</code> in the <code>Override Authorization Clients</code> field to enable the validation check against the local subnet (e.g. <code>192.168.0.3</code>). Click the <code>Save System Config</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/privacyidea-override-authentication.png')" alt="privacyidea override authentication">
<h2 id="enable-2fa-for-greenbone-vulnerability-manager" tabindex="-1"><a class="header-anchor" href="#enable-2fa-for-greenbone-vulnerability-manager" aria-hidden="true">#</a> Enable 2FA for Greenbone Vulnerability Manager</h2>
<p>Login to your Greenbone Security Assistant at e.g. <code>https://192.168.0.3/login</code>. Once you've logged in select <code>Administration</code> and <code>RADIUS</code> in the top menu. Click the <code>Edit Radius Authentication</code> button. Check the <code>Enabled</code> box, add the RADIUS host IP address e.g. <code>192.168.0.1</code> and your secret key. Click the <code>Save</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/greenbone-radius.png')" alt="greenbone security assistant radius">
<p>Next lets add the user to the Greebone Security Assistant (GSA). Select <code>Administration</code> and <code>Users</code> in the top menu. Click the <code>New User</code> button. Check <code>RADIUS Authentication Only</code>, select preferred user role and/or group. Add the privacyIDEA IP address in the <code>Host Access</code> field (e.g. <code>192.168.0.1</code>) and check <code>Deny all and allow</code>. If you want to lock access for the local subnet to GSA you can check <code>Deny all and allow</code> in the <code>Interface Access</code> and enter <code>192.168.0.0/24</code>. Once done click the <code>Save</code> button.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/greenbone-user.png')" alt="greenbone security assistant user">
<p>Logout as administrator from the Greenbone Security Assistant. Add the <code>Username</code> of your newly created user. In the <code>Password</code> field type the <code>PIN</code> and hit the YubiKey button (do not click the Sign In button) and you should successfully be authenticated.</p>
<img class="zoom-custom-imgs" :src="('/img/privacyidea/greenbone-login.png')" alt="greenbone security assistant login">
<h2 id="firewall-settings" tabindex="-1"><a class="header-anchor" href="#firewall-settings" aria-hidden="true">#</a> Firewall settings</h2>
<p>The firewall being used is UFW (Uncomplicated Firewall). It is set by default to deny incoming traffic, allow outgoing traffic and allow port 22 (OpenSSH). Read more about UFW <a href="https://help.ubuntu.com/community/UFW" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</p>
<details class="custom-container details"><summary>UFW Settings</summary>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw default deny incoming
server@ubuntu:~$ sudo ufw default allow outgoing
server@ubuntu:~$ sudo ufw allow 22
server@ubuntu:~$ sudo ufw enable
Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
Firewall is active and enabled on system startup
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>server@ubuntu:~$ sudo ufw allow 443 comment &quot;privacyIDEA&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="command-line" tabindex="-1"><a class="header-anchor" href="#command-line" aria-hidden="true">#</a> Command-line</h2>
<table>
<thead>
<tr>
<th>Command</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>pi-manage admin</td>
<td>Add or edit existing admin account</td>
</tr>
</tbody>
</table>
<h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2>
<p>If you encounter any issue or having questions regarding privacyIDEA I recommend using their very helpful <a href="https://community.privacyidea.org/" target="_blank" rel="noopener noreferrer">community forum<OutboundLink/></a>.</p>
<h2 id="enterprise-solutions" tabindex="-1"><a class="header-anchor" href="#enterprise-solutions" aria-hidden="true">#</a> Enterprise solutions <Badge text="non-sponsored" type="tip"/></h2>
<h3 id="netknights-privacyidea-enterprise-edition" tabindex="-1"><a class="header-anchor" href="#netknights-privacyidea-enterprise-edition" aria-hidden="true">#</a> NetKnights privacyIDEA Enterprise Edition</h3>
<p>privacyIDEA is a modular solution for two factor authentication especially with OTP tokens. It is multi-tenency- and multi-instance-capable. Due to the modular structure privacyIDEA can be quickly and easily adapted and enhanced. E.g. adding new token types is as simple as writing a new lean python module. You do not need to modify your network for privacyIDEA, it does not write to existing databases or user stores. It only needs read access to your user stores like LDAP, Active Directory, SQL, SCIM-service or flat files. Existing workflows can be enhanced without the need to modify them. Using its simple REST like API it can be automated and smoothly be integrated.</p>
<p><a href="https://netknights.it/en/produkte/privacyidea/" target="_blank" rel="noopener noreferrer">NetKnights<OutboundLink/></a></p>
<h3 id="yubienterprise" tabindex="-1"><a class="header-anchor" href="#yubienterprise" aria-hidden="true">#</a> YubiEnterprise  <Badge text="affiliate links" type="warning"/></h3>
<p>Yubico offers enterprise solutions and can easily procure and distribute YubiKey authentication solutions for employees at scale.</p>
<p><a href="https://www.pntrs.com/t/TUJGR0dNRkJHRk1NR0ZCRk5GSkxK" target="_blank" rel="noopener noreferrer">Yubico<OutboundLink/></a></p>
</template>
