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
