**Libellux: Up and Running changelog (2.0.2) <fredrik@libellux.com>**

**Release Maintainers**

Fredrik Hilmersson [@libellux](https://github.com/libellux)

**Release notes**

Special thanks on this release go out to:  

* [Better Stack](https://betterstack.com/) for providing support. Their product helps you to set up on-call teams to handle your incidents, provide post-mortems, incident reports and maintenance information. Besides that you can also create monitors and heartbeats to create status pages. They support software integrations e.g. Slack, Datadog, Logtail with data importing and exporting.

This is a *smaller* release with updates to Greenbone Vulnerability Manager (rev 8) with *bug* fixes and corrections founds by readers. We've also updated the OSSEC chapter on how-to install OSSEC 3.7.0 server on Ubuntu 22.04 (Jammy Jellyfish).

**What's New:**

Greenbone Vulnerability Manager (GVM) revision 8.  
OSSEC Host Intrusion Detection System 3.7.0 server installation on Ubuntu 22.04 (Jammy Jellyfish).  
New tipping service, [fundof](https://fundof.me/libellux) for those who want to support the Libellux: Up & Running project.

**General**

* [@adamgourley](https://github.com/adamgourley) [#100](https://github.com/libellux/Libellux-Up-and-Running/issues/100) and [@innertruth](https://github.com/innertruth) [#99](https://github.com/libellux/Libellux-Up-and-Running/issues/99) 

**Libellux: Up and Running changelog (2.0.1) <fredrik@libellux.com>**

**Release Maintainers**

Fredrik Hilmersson @libellux 

**Contributors on this release**

Scott Shinn [@atomicturtle](https://github.com/atomicturtle)

**Release notes**

This is a *patch* release with updates to Greenbone Vulnerability Manager (rev 7), ClamAV Antivirus Server (rev 3) and other smaller fixes. We've also added [Algolia Search](https://www.algolia.com/products/search-and-discovery/hosted-search-api/) to our website. We've also migrated from Netlify and now using Cloudflare pages. As we progress we'll also try to include [Rocky Linux](https://rockylinux.org/) more and more in our documentation as the default Enterprise Linux solution.

**What's New:**

Greenbone Vulnerability Manager (GVM) revision 7. Latest GVM release (21.4.4) for Ubuntu 20.04 (Focal Fossa).  
ClamAV Antivirus Server revision 3. Updated documentation for Ubuntu 20.04 (Focal Fossa) and how to build from source. 

**Libellux: Up and Running changelog (2.0.0) <fredrik@libellux.com>**

**Release Maintainers**

Fredrik Hilmersson @libellux 

**Contributors on this release**

Scott Shinn @atomicturtle
Björn Ricks @bjoernricks
Adam Hilmersson @cnsta

**Release notes**

Special thanks on this release go out to:  

* Full credit to Greenbone's official documentation. For more details please visit and read the documentation [here](https://greenbone.github.io/docs/gvm-21.04/index.html).
* [Mullvad VPN](https://mullvad.net/en) letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy.
* [JetBrains](https://www.jetbrains.com/) for enabling us to use their Open Source development license.

This is a *major* release where we've upgraded the framework to VuePress Next (v2). So far we've updated all the sections under Intrusion Detection and Prevention to make it easier for readers to copy & paste segments. We also updated documentation for the latest version of the Greebone Vulnerability Manager (GVM) community edition. OSSEC has also be revisted and now cover source build on Rocky 8.4.

**What's New:**

Migration from VuePress v1.x to VuePress Next (v2.x)  with PWA support  
Greenbone Vulnerability Manager (GVM) revision 6. Latest GVM release (21.4.2) for Ubuntu 20.04 (Focal Fossa)  
OSSEC Host Intrusion Detection System revision 2. Updated documentation for both Ubuntu 20.04 (Focal Fossa) and Rocky 8.4 (Green Obsidian)  
WireGuard revision 2.  
ClamAV Antivirus Server revision 2. Updated documentation for Ubuntu 20.04 (Focal Fossa) and how to build from source.  
PSAD Intrusion Detection revision 2. Updated documentation for Ubuntu 20.04 (Focal Fossa).  

**General**

* [@Kri5h123](https://github.com/Kri5h123) [921301089](https://github.com/libellux/Libellux-Up-and-Running/issues/18#issuecomment-921301089) and [@johndoeisavailable](https://github.com/johndoeisavailable) [#50](https://github.com/libellux/Libellux-Up-and-Running/issues/50) 

**Libellux: Up and Running changelog (1.1.0) <fredrik@libellux.com>**

**Release Maintainers**

Fredrik Hilmersson [@libellux](https://github.com/libellux)

**Contributors on this release**

Cornelius Kölbel [@cornelinux](https://github.com/cornelinux)  
Scott Shinn [@atomicturtle](https://github.com/atomicturtle)  
Adam Hilmersson [@cnst](https://github.com/cnsta)

**Release notes**

Special thanks on this release go out to:  

* [HyperQube](https://hyperqube.io/) for providing their great software to replicate entire cloud networks with the click of a button.
* [Atomi Systems](https://atomisystems.com/) for giving access to their powerful screen recording software ActivePresenter.  
* [Mullvad VPN](https://mullvad.net/en) letting us use their fast, trustworthy and easy-to-use VPN with a focus on privacy.
* Cornelius Kölbel [@cornelinux](https://github.com/cornelinux) from [NetKnights](https://netknights.it/en/).

This is the first *minor* release of Libellux: Up and Running. Where we start combining the services to enhance the security in the Zero Trust Network. We added documentation how-to set up a virtual private network (VPN) using WireGuard. privacyIDEA will act as our central authentication server to both enforce two-factor authentication (using YubiKey 5 NFC) but also to apply an role-based access control (RBAC) approach. We also added a new section on how-to set up a server/client relationship with ClamAV Antivirus. Additionally we added the possiblity to comment using Gitalk.

What's New:

Two-factor authentiction w/ PrivacyIDEA FreeRADIUS plugin and YubiKey 5 NFC  
Greenbone Vulnerability Manager (GVM) revision 5 w/ update for latest GVM release (21.04)  
WireGuard Secure VPN Tunnel  
ClamAV Antivirus Server  
Scheduled jobs for GVM 21.04 to keep community feed up-to-date  
Comments with Gitalk

**Libellux: Up and Running changelog (1.0.1) <fredrik@libellux.com>**

**Release Maintainers**

Fredrik Hilmersson [@libellux](https://github.com/libellux)

**Contributors on this release**

Scott Shinn [@atomicturtle](https://github.com/atomicturtle)  
Adam Hilmersson [@cnsta](https://github.com/cnsta)

**Release notes**

The second release of Libellux: Up and Running mostly contain updates to already existing chapters. There is a few new additions to each chapter e.g. Agentless monitoring and Windows Server 2019 agent installation for OSSEC. The OpenVAS chapter has also been revised and updated with new features such as basic vulnerability scans to give a first hands-on experience. We've also completed the first revision for M/Monit System Monitoring.  

What's New:

M/Monit System Monitoring (3.7.5) with Monit (5.27.0)  
Agentless monitoring chapter to OSSEC Host Intrusion Detection (3.6.0)  
Windows Server 2019 agent installation (OSSEC 3.6.0)  
Basic authenticated and unauthenticated scan to OpenVAS Vulnerability Scanner (OpenVAS 20.08)

**Libellux: Up and Running changelog (1.0.0) <fredrik@libellux.com>**

**Release Maintainers**

Fredrik Hilmersson [@libellux](https://github.com/libellux)

**Contributors on this release**

Damir Kucic [@dkucic](https://github.com/dkucic)  
Scott Shinn [@atomicturtle](https://github.com/atomicturtle)  
Adam Hilmersson [@cnsta](https://github.com/cnsta)  
Zeny Palac [@doczenzen](https://twitter.com/doczenzen)  
Falk [@falkowich](https://github.com/falkowich)

**Release notes**

This is the first release of Libellux: Up and Running. The initial release contain documentation and configuration for the following softwares (see What's New). The goal with this project is to introduce people who has an interest in building their own secure environments using the Zero Trust Network approach. In future releases we will continue to document and configure software to manage authentication across all our different systems.

What's New:

OSSEC Host Intrusion Detection (3.6.0)  
PSAD Intrusion Detection (2.4.6)  
OpenVAS Vulnerability Scanner (OpenVAS 20.08, Atomicorp 20.08)
