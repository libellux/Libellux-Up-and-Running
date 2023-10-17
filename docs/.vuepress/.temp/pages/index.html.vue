<template><div><h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1>
<p>Libellux: Up &amp; Running provides documentation on how-to install open-source software from source. The focus is Zero Trust Network to enhance the security for existing applications or install tools to detect and prevent threats.</p>
<p><a href="https://ko-fi.com/B0B31BJU3" target="_blank" rel="noopener noreferrer"><img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi"><ExternalLinkIcon/></a></p>
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
<td>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>Contributors:</td>
<td>Damir Kucic <a href="https://github.com/dkucic" target="_blank" rel="noopener noreferrer">@dkucic<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>Reviewers:</td>
<td>Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<ExternalLinkIcon/></a>, Cornelius Kölbel <a href="https://github.com/cornelinux" target="_blank" rel="noopener noreferrer">@cornelinux<ExternalLinkIcon/></a>, Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnsta<ExternalLinkIcon/></a>, Björn Ricks <a href="https://github.com/bjoernricks" target="_blank" rel="noopener noreferrer">@bjoernricks<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td>Supporters:</td>
<td><a href="https://hyperqube.io/" target="_blank" rel="noopener noreferrer">HyperQube<ExternalLinkIcon/></a>, <a href="https://atomisystems.com/activepresenter/" target="_blank" rel="noopener noreferrer">Atomi Systems<ExternalLinkIcon/></a>, <a href="https://mullvad.net/en/" target="_blank" rel="noopener noreferrer">Mullvad VPN<ExternalLinkIcon/></a>, <a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">JetBrains<ExternalLinkIcon/></a>, <a href="https://betterstack.com/" target="_blank" rel="noopener noreferrer">Better Stack<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2>
<h4 id="part-1-zero-trust-network" tabindex="-1"><a class="header-anchor" href="#part-1-zero-trust-network" aria-hidden="true">#</a> PART 1: ZERO TRUST NETWORK</h4>
<ul>
<li><RouterLink to="/wireguard/">1.0: WireGuard Secure VPN Tunnel</RouterLink> <Badge text="stable" type="tip"/></li>
<li><RouterLink to="/privacyidea/">1.1: Two-factor authentication w/ privacyIDEA and YubiKey</RouterLink> <Badge text="deprecated" type="warning"/></li>
</ul>
<h4 id="part-2-intrustion-detection-and-prevention" tabindex="-1"><a class="header-anchor" href="#part-2-intrustion-detection-and-prevention" aria-hidden="true">#</a> PART 2: INTRUSTION DETECTION AND PREVENTION</h4>
<ul>
<li><RouterLink to="/ossec/">2.0: OSSEC Host Intrusion Detection System</RouterLink> <Badge text="stable" type="tip"/></li>
<li><RouterLink to="/psad/">2.1: PSAD Intrusion Detection with Log Analysis</RouterLink> <Badge text="stable" type="tip"/></li>
<li><RouterLink to="/openvas/">2.2: Greenbone Vulnerability Manager</RouterLink> <Badge text="stable" type="tip"/></li>
<li>2.3: Snort Network Intrusion Detection &amp; Prevention System <Badge text="TBA" type="warning"/></li>
<li><RouterLink to="/clamav/">2.4: ClamAV Antivirus Server</RouterLink> <Badge text="stable" type="tip"/></li>
</ul>
<h4 id="part-3-monitoring-and-management" tabindex="-1"><a class="header-anchor" href="#part-3-monitoring-and-management" aria-hidden="true">#</a> PART 3: MONITORING AND MANAGEMENT</h4>
<ul>
<li><RouterLink to="/ansible/">3.0: Ansible</RouterLink> <Badge text="incomplete" type="warning"/></li>
<li><RouterLink to="/mmonit/">3.1: M/Monit System Monitoring</RouterLink> <Badge text="stable" type="tip"/></li>
<li><a href="">3.2: Performance Co-Pilot Grafana</a> <Badge text="incomplete" type="warning"/></li>
<li><RouterLink to="/rsyslog/">3.3: Rsyslog Log Processing</RouterLink> <Badge text="incomplete" type="warning"/></li>
</ul>
<h2 id="feedback" tabindex="-1"><a class="header-anchor" href="#feedback" aria-hidden="true">#</a> Feedback</h2>
<p><a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">Questions<ExternalLinkIcon/></a>, <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">comments<ExternalLinkIcon/></a>, or <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">problems<ExternalLinkIcon/></a> regarding this service? Create an issue <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> or contact <a href="mailto:webmaster@libellux.com">webmaster@libellux.com</a>.</p>
<h2 id="road-map" tabindex="-1"><a class="header-anchor" href="#road-map" aria-hidden="true">#</a> Road map</h2>
<p>To follow the process and prioritization check out the project <a href="https://github.com/users/libellux/projects/1" target="_blank" rel="noopener noreferrer">road map<ExternalLinkIcon/></a>. Feel free to create a <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/new/choose" target="_blank" rel="noopener noreferrer">feature request<ExternalLinkIcon/></a> if there's any documentation or software you would like us to cover.</p>
<h2 id="release-notes" tabindex="-1"><a class="header-anchor" href="#release-notes" aria-hidden="true">#</a> Release notes</h2>
<p><strong>Libellux: Up and Running changelog (2.0.2) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<ExternalLinkIcon/></a></p>
<p><strong>Release notes</strong></p>
<p>Special thanks on this release go out to:</p>
<ul>
<li><a href="https://betterstack.com/" target="_blank" rel="noopener noreferrer">Better Stack<ExternalLinkIcon/></a> for providing support. Their product helps you to set up on-call teams to handle your incidents, provide post-mortems, incident reports and maintenance information. Besides that you can also create monitors and heartbeats to create status pages. They support software integrations e.g. Slack, Datadog, Logtail with data importing and exporting.</li>
</ul>
<p>This is a <em>smaller</em> release with updates to Greenbone Vulnerability Manager (rev 8) with <em>bug</em> fixes and corrections founds by readers. We've also updated the OSSEC chapter on how-to install OSSEC 3.7.0 server on Ubuntu 22.04 (Jammy Jellyfish).</p>
<p><strong>What's New:</strong></p>
<p>Greenbone Vulnerability Manager (GVM) revision 8.<br>
OSSEC Host Intrusion Detection System 3.7.0 server installation on Ubuntu 22.04 (Jammy Jellyfish).<br>
New tipping service, <a href="https://fundof.me/libellux" target="_blank" rel="noopener noreferrer">fundof<ExternalLinkIcon/></a> for those who want to support the Libellux: Up &amp; Running project.</p>
<p><strong>General</strong></p>
<ul>
<li><a href="https://github.com/adamgourley" target="_blank" rel="noopener noreferrer">@adamgourley<ExternalLinkIcon/></a> <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/100" target="_blank" rel="noopener noreferrer">#100<ExternalLinkIcon/></a> and <a href="https://github.com/innertruth" target="_blank" rel="noopener noreferrer">@innertruth<ExternalLinkIcon/></a> <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/99" target="_blank" rel="noopener noreferrer">#99<ExternalLinkIcon/></a></li>
</ul>
<details class="custom-container details"><summary>Prior releases</summary>
<p><strong>Libellux: Up and Running changelog (2.0.1) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<ExternalLinkIcon/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<ExternalLinkIcon/></a></p>
<p><strong>Release notes</strong></p>
<p>This is a <em>patch</em> release with updates to Greenbone Vulnerability Manager (rev 7), ClamAV Antivirus Server (rev 3) and other smaller fixes. We've also added <a href="https://www.algolia.com/products/search-and-discovery/hosted-search-api/" target="_blank" rel="noopener noreferrer">Algolia Search<ExternalLinkIcon/></a> to our website. We've also migrated from Netlify and now using Cloudflare pages. As we progress we'll also try to include <a href="https://rockylinux.org/" target="_blank" rel="noopener noreferrer">Rocky Linux<ExternalLinkIcon/></a> more and more in our documentation as the default Enterprise Linux solution.</p>
<p><strong>What's New:</strong></p>
<p>Greenbone Vulnerability Manager (GVM) revision 7. Latest GVM release (21.4.4) for Ubuntu 20.04 (Focal Fossa).<br>
ClamAV Antivirus Server revision 3. Updated documentation for Ubuntu 20.04 (Focal Fossa) and how to build from source.</p>
<hr>
<p><strong>Libellux: Up and Running changelog (2.0.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<ExternalLinkIcon/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<ExternalLinkIcon/></a><br>
Björn Ricks <a href="https://github.com/bjoernricks" target="_blank" rel="noopener noreferrer">@bjoernricks<ExternalLinkIcon/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnsta<ExternalLinkIcon/></a></p>
<p><strong>Release notes</strong></p>
<p>Special thanks on this release go out to:</p>
<ul>
<li>Full credit to Greenbone's official documentation. For more details please visit and read the documentation <a href="https://greenbone.github.io/docs/gvm-21.04/index.html" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a>.</li>
<li><a href="https://mullvad.net/en" target="_blank" rel="noopener noreferrer">Mullvad VPN<ExternalLinkIcon/></a> letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy.</li>
<li><a href="https://www.jetbrains.com/" target="_blank" rel="noopener noreferrer">JetBrains<ExternalLinkIcon/></a> for enabling us to use their Open Source development license.</li>
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
<li><a href="https://github.com/Kri5h123" target="_blank" rel="noopener noreferrer">@Kri5h123<ExternalLinkIcon/></a> <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/18#issuecomment-921301089" target="_blank" rel="noopener noreferrer">921301089<ExternalLinkIcon/></a> and <a href="https://github.com/johndoeisavailable" target="_blank" rel="noopener noreferrer">@johndoeisavailable<ExternalLinkIcon/></a> <a href="https://github.com/libellux/Libellux-Up-and-Running/issues/50" target="_blank" rel="noopener noreferrer">#50<ExternalLinkIcon/></a></li>
</ul>
<hr>
<p><strong>Libellux: Up and Running changelog (1.1.0) <a href="mailto:fredrik@libellux.com">fredrik@libellux.com</a></strong></p>
<p><strong>Release Maintainers</strong></p>
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<ExternalLinkIcon/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Cornelius Kölbel <a href="https://github.com/cornelinux" target="_blank" rel="noopener noreferrer">@cornelinux<ExternalLinkIcon/></a><br>
Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<ExternalLinkIcon/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnst<ExternalLinkIcon/></a></p>
<p><strong>Release notes</strong></p>
<p>Special thanks on this release go out to:</p>
<ul>
<li><a href="https://hyperqube.io/" target="_blank" rel="noopener noreferrer">HyperQube<ExternalLinkIcon/></a> for providing their great software to replicate entire cloud networks with the click of a button.</li>
<li><a href="https://atomisystems.com/" target="_blank" rel="noopener noreferrer">Atomi Systems<ExternalLinkIcon/></a> for giving access to their powerful screen recording software ActivePresenter.</li>
<li><a href="https://mullvad.net/en" target="_blank" rel="noopener noreferrer">Mullvad VPN<ExternalLinkIcon/></a> letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy.</li>
<li>Cornelius Kölbel <a href="https://github.com/cornelinux" target="_blank" rel="noopener noreferrer">@cornelinux<ExternalLinkIcon/></a> from <a href="https://netknights.it/en/" target="_blank" rel="noopener noreferrer">NetKnights<ExternalLinkIcon/></a>.</li>
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
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<ExternalLinkIcon/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<ExternalLinkIcon/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnsta<ExternalLinkIcon/></a></p>
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
<p>Fredrik Hilmersson <a href="https://github.com/libellux" target="_blank" rel="noopener noreferrer">@libellux<ExternalLinkIcon/></a></p>
<p><strong>Contributors on this release</strong></p>
<p>Damir Kucic <a href="https://github.com/dkucic" target="_blank" rel="noopener noreferrer">@dkucic<ExternalLinkIcon/></a><br>
Scott Shinn <a href="https://github.com/atomicturtle" target="_blank" rel="noopener noreferrer">@atomicturtle<ExternalLinkIcon/></a><br>
Adam Hilmersson <a href="https://github.com/cnsta" target="_blank" rel="noopener noreferrer">@cnsta<ExternalLinkIcon/></a><br>
Zeny Palac <a href="https://twitter.com/doczenzen" target="_blank" rel="noopener noreferrer">@doczenzen<ExternalLinkIcon/></a><br>
Falk <a href="https://github.com/falkowich" target="_blank" rel="noopener noreferrer">@falkowich<ExternalLinkIcon/></a></p>
<p><strong>Release notes</strong></p>
<p>This is the first release of Libellux: Up and Running. The initial release contain documentation and configuration for the software specified below (see What's New). Libellux: Up and Running is a collection of personal notes and documentation regarding open-source software configuration. The focus is to build a so called Zero Trust Network using a central authentication server to enhance the security for our existing applications. We will manage our network using an open-source software tool for provisioning and configuration management to automate and speed up productivity.</p>
<p><strong>What's New:</strong></p>
<p>OSSEC Host Intrusion Detection (3.6.0)<br>
PSAD Intrusion Detection (2.4.6)<br>
OpenVAS Vulnerability Scanner (OpenVAS 20.08, Atomicorp 20.08)</p>
</details>
<p><a target="_blank" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a></p>
</div></template>


