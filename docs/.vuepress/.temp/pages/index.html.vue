<template><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1>
<p>Libellux: Up &amp; Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats.</p>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><OutboundLink/></a></p>
<p><img src="/img/icons/1500x500.svg" alt="Banner"></p>
<div class="custom-container warning"><p class="custom-container-title">DISCLAIMER</p>
<p>It is understood that this documentation, and any configurations may contain errors and are provided for education purposes only. The documentation, and any configurations are provided &quot;as is&quot; without warranty of any kind, whether express, implied, statutory, or otherwise.</p>
</div>
<h2 id="credits" tabindex="-1"><a class="header-anchor" href="#credits" aria-hidden="true">#</a> Credits</h2>
<table>
<thead>
<tr>
<th>Role</th>
<th>Names</th>
</tr>
</thead>
<tbody>
<tr>
<td>Lead Authors:</td>
<td>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<OutboundLink/></a></td>
</tr>
<tr>
<td>Contributors:</td>
<td>Damir Kucic <a href="https://github.com/dkucic" target="_blank" rel="noopener noreferrer">@dkucic<OutboundLink/></a></td>
</tr>
<tr>
<td>Reviewers:</td>
<td>Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<OutboundLink/></a>, Cornelius Kölbel <a href="https://github.com/cornelinux" target="_blank" rel="noopener noreferrer">@cornelinux<OutboundLink/></a>, Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnsta<OutboundLink/></a>, Björn Ricks <a href="https://github.com/bjoernricks" target="_blank" rel="noopener noreferrer">@bjoernricks<OutboundLink/></a></td>
</tr>
<tr>
<td>Supporters:</td>
<td><a href="https://hyperqube.io/" target="_blank" rel="noopener noreferrer">HyperQube<OutboundLink/></a>, <a href="https://atomisystems.com/activepresenter/" target="_blank" rel="noopener noreferrer">Atomi Systems<OutboundLink/></a>, <a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN<OutboundLink/></a>, <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">JetBrains<OutboundLink/></a></td>
</tr>
</tbody>
</table>
<details class="custom-container details"><summary>Conventions</summary>
<table>
<thead>
<tr>
<th>Type</th>
<th>Convention</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Environment</td>
<td>server@ubuntu</td>
<td>Suffix determine operating system</td>
</tr>
<tr>
<td>Server CLI</td>
<td>server@rocky</td>
<td>Commands executed from server command-line</td>
</tr>
<tr>
<td>Client CLI</td>
<td>client@ubuntu</td>
<td>Commands executed from client command-line</td>
</tr>
<tr>
<td>Server IP</td>
<td>192.168.0.1</td>
<td>Server IP address</td>
</tr>
<tr>
<td>Client IP</td>
<td>192.168.0.2</td>
<td>Client IP address</td>
</tr>
<tr>
<td>VPN server</td>
<td>192.168.8.1</td>
<td>WireGuard VPN server IP address</td>
</tr>
<tr>
<td>VPN client</td>
<td>192.168.8.2</td>
<td>WireGuard VPN client IP address</td>
</tr>
</tbody>
</table>
</details>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>
<h4 id="part-1-zero-trust-network" tabindex="-1"><a class="header-anchor" href="#part-1-zero-trust-network" aria-hidden="true">#</a> PART 1: ZERO TRUST NETWORK</h4>
<ul>
<li><RouterLink to="/wireguard/">1.0: WireGuard Secure VPN Tunnel</RouterLink> <Badge text="stable" type="tip"/></li>
<li><RouterLink to="/privacyidea/">1.1: Two-factor authentication w/ privacyIDEA and YubiKey</RouterLink> <Badge text="stable" type="tip"/></li>
<li><a href="">1.2: Universal 2nd Factor with YubiKey</a> <Badge text="incomplete" type="warning"/></li>
</ul>
<h4 id="part-2-intrustion-detection-and-prevention" tabindex="-1"><a class="header-anchor" href="#part-2-intrustion-detection-and-prevention" aria-hidden="true">#</a> PART 2: INTRUSTION DETECTION AND PREVENTION</h4>
<ul>
<li><RouterLink to="/ossec/">2.0: OSSEC Host Intrusion Detection System</RouterLink> <Badge text="stable" type="tip"/></li>
<li><RouterLink to="/psad/">2.1: PSAD Intrusion Detection with Log Analysis</RouterLink> <Badge text="stable" type="tip"/></li>
<li><RouterLink to="/openvas/">2.2: Greenbone Vulnerability Manager</RouterLink> <Badge text="stable" type="default"/></li>
<li>2.3: Snort Network Intrusion Detection &amp; Prevention System <Badge text="TBA" type="warning"/></li>
<li><RouterLink to="/clamav/">2.4: ClamAV Antivirus Server</RouterLink> <Badge text="stable" type="tip"/></li>
</ul>
<h4 id="part-3-monitoring-and-management" tabindex="-1"><a class="header-anchor" href="#part-3-monitoring-and-management" aria-hidden="true">#</a> PART 3: MONITORING AND MANAGEMENT</h4>
<ul>
<li>3.0: AWX Ansible Tower <Badge text="TBA" type="warning"/></li>
<li><RouterLink to="/mmonit/">3.1: M/Monit System Monitoring</RouterLink> <Badge text="stable" type="tip"/></li>
<li><a href="">3.2: Performance Co-Pilot Grafana</a> <Badge text="incomplete" type="warning"/></li>
<li><RouterLink to="/rsyslog/">3.3: Rsyslog Log Processing</RouterLink> <Badge text="incomplete" type="warning"/></li>
<li><RouterLink to="/graylog/">3.4: Graylog Centralized Log Management</RouterLink> <Badge text="incomplete" type="warning"/></li>
</ul>
<h2 id="feedback" tabindex="-1"><a class="header-anchor" href="#feedback" aria-hidden="true">#</a> Feedback</h2>
<p><a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">Questions<OutboundLink/></a>, <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">comments<OutboundLink/></a>, or <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">problems<OutboundLink/></a> regarding this service? Create an issue <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a> or contact <a href="mailto:webmaster@libellux.com">webmaster@libellux.com</a>.</p>
<h2 id="road-map" tabindex="-1"><a class="header-anchor" href="#road-map" aria-hidden="true">#</a> Road map</h2>
<p>To follow the process and prioritization check out the project <a href="https://github.com/libellux/Libellux-Up-and-Running/projects/1" target="_blank" rel="noopener noreferrer">road map<OutboundLink/></a>. Feel free to create a <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">feature request<OutboundLink/></a> if there's any documentation or software you would like us to cover.</p>
<h2 id="release-notes" tabindex="-1"><a class="header-anchor" href="#release-notes" aria-hidden="true">#</a> Release notes</h2>
<p><strong>Libellux: Up and Running changelog (2.0.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson @libellux</p>
<p><strong>Contributors on this release</strong></p>
<p>Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<OutboundLink/></a><br>
Björn Ricks <a href="https://github.com/bjoernricks" target="_blank" rel="noopener noreferrer">@bjoernricks<OutboundLink/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnst<OutboundLink/></a></p>
<p><strong>Release notes</strong></p>
<p>Special thanks on this release go out to:</p>
<ul>
<li>Full credit to Greenbone's official documentation. For more details please visit and read the documentation <a href="https://greenbone.github.io/docs/gvm-21.04/index.html" target="_blank" rel="noopener noreferrer">here<OutboundLink/></a>.</li>
<li><a href="https://mullvad.net/en" target="_blank" rel="noopener noreferrer">Mullvad VPN<OutboundLink/></a> letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy.</li>
<li><a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">JetBrains<OutboundLink/></a> for enabling us to use their Open Source development license.</li>
</ul>
<p>This is a <em>major</em> release where we've upgraded the framework to VuePress Next (v2). So far we've updated all the sections under Intrusion Detection and Prevention to make it easier for readers to copy &amp; paste segments. We also updated documentation for the latest version of the Greebone Vulnerability Manager (GVM) community edition. OSSEC has also be revisted and now cover source build on Rocky 8.4.</p>
<p><strong>What's New:</strong></p>
<p>Migration from VuePress v1.x to VuePress Next (v2.x)  with PWA support<br>
Greenbone Vulnerability Manager (GVM) revision 6. Latest GVM release (21.4.2) for Ubuntu 20.04 (Focal Fossa)<br>
OSSEC Host Intrusion Detection System revision 2. Updated documentation for both Ubuntu 20.04 (Focal Fossa) and Rocky 8.4 (Green Obsidian)<br>
WireGuard revision 2.<br>
ClamAV Antivirus Server revision 2. Updated documentation for Ubuntu 20.04 (Focal Fossa) and how to build from source.<br>
PSAD Intrusion Detection revision 2. Updated documentation for Ubuntu 20.04 (Focal Fossa).</p>
<p><strong>General</strong></p>
<ul>
<li><a href="https://github.com/Kri5h123" target="_blank" rel="noopener noreferrer">@Kri5h123<OutboundLink/></a> <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/18#issuecomment-921301089" target="_blank" rel="noopener noreferrer">921301089<OutboundLink/></a> and <a href="https://github.com/johndoeisavailable" target="_blank" rel="noopener noreferrer">@johndoeisavailable<OutboundLink/></a> <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/50" target="_blank" rel="noopener noreferrer">#50<OutboundLink/></a></li>
</ul>
<details class="custom-container details"><summary>Prior releases</summary>
<p><strong>Libellux: Up and Running changelog (1.1.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<OutboundLink/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Cornelius Kölbel <a href="https://github.com/cornelinux" target="_blank" rel="noopener noreferrer">@cornelinux<OutboundLink/></a><br>
Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<OutboundLink/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnst<OutboundLink/></a></p>
<p><strong>Release notes</strong></p>
<p>Special thanks on this release go out to:</p>
<ul>
<li><a href="https://hyperqube.io/" target="_blank" rel="noopener noreferrer">HyperQube<OutboundLink/></a> for providing their great software to replicate entire cloud networks with the click of a button.</li>
<li><a href="https://atomisystems.com/" target="_blank" rel="noopener noreferrer">Atomi Systems<OutboundLink/></a> for giving access to their powerful screen recording software ActivePresenter.</li>
<li><a href="https://mullvad.net/en" target="_blank" rel="noopener noreferrer">Mullvad VPN<OutboundLink/></a> letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy.</li>
<li>Cornelius Kölbel <a href="https://github.com/cornelinux" target="_blank" rel="noopener noreferrer">@cornelinux<OutboundLink/></a> from <a href="https://netknights.it/en/" target="_blank" rel="noopener noreferrer">NetKnights<OutboundLink/></a>.</li>
</ul>
<p>This is the first <em>minor</em> release of Libellux: Up and Running. Where we start combining the services to enhance the security in the Zero Trust Network. We added documentation how-to set up a virtual private network (VPN) using WireGuard. privacyIDEA will act as our central authentication server to both enforce two-factor authentication (using YubiKey 5 NFC) but also to apply an role-based access control (RBAC) approach. We also added a new section on how-to set up a server/client relationship with ClamAV Antivirus. Additionally we added the possiblity to comment using Gitalk.</p>
<p><strong>What's New:</strong></p>
<p>Two-factor authentiction w/ PrivacyIDEA FreeRADIUS plugin and YubiKey 5 NFC<br>
Greenbone Vulnerability Manager (GVM) revision 5 w/ update for latest GVM release (21.04)<br>
WireGuard Secure VPN Tunnel<br>
ClamAV Antivirus Server<br>
Scheduled jobs for GVM 21.04 to keep community feed up-to-date<br>
Comments with Gitalk</p>
<hr>
<p><strong>Libellux: Up and Running changelog (1.0.1) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<OutboundLink/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<OutboundLink/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnsta<OutboundLink/></a></p>
<p><strong>Release notes</strong></p>
<p>The second release of Libellux: Up and Running mostly contain updates to already existing chapters. There is a few new additions to each chapter e.g. Agentless monitoring and Windows Server 2019 agent installation for OSSEC. The OpenVAS chapter has also been revised and updated with new features such as basic vulnerability scans to give a first hands-on experience. We've also completed the first revision for M/Monit System Monitoring.</p>
<p><strong>What's New:</strong></p>
<p>M/Monit System Monitoring (3.7.5) with Monit (5.27.0)<br>
Agentless monitoring chapter to OSSEC Host Intrusion Detection (3.6.0)<br>
Windows Server 2019 agent installation (OSSEC 3.6.0)<br>
Basic authenticated and unauthenticated scan to OpenVAS Vulnerability Scanner (OpenVAS 20.08)</p>
<hr>
<p><strong>Libellux: Up and Running changelog (1.0.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<OutboundLink/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Damir Kucic <a href="https://github.com/dkucic" target="_blank" rel="noopener noreferrer">@dkucic<OutboundLink/></a><br>
Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<OutboundLink/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnsta<OutboundLink/></a><br>
Zeny Palac <a href="https://twitter.com/doczenzen" target="_blank" rel="noopener noreferrer">@doczenzen<OutboundLink/></a><br>
Falk <a href="https://github.com/falkowich" target="_blank" rel="noopener noreferrer">@falkowich<OutboundLink/></a></p>
<p><strong>Release notes</strong></p>
<p>This is the first release of Libellux: Up and Running. The initial release contain documentation and configuration for the software specified below (see What's New). Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.</p>
<p><strong>What's New:</strong></p>
<p>OSSEC Host Intrusion Detection (3.6.0)<br>
PSAD Intrusion Detection (2.4.6)<br>
OpenVAS Vulnerability Scanner (OpenVAS 20.08, Atomicorp 20.08)</p>
</details>
</template>
