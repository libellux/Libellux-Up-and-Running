import comp from "/home/toothpick/fuck/Libellux-Up-and-Running/docs/.vuepress/.temp/pages/ossec/index.html.vue"
const data = JSON.parse("{\"path\":\"/ossec/\",\"title\":\"OSSEC Host Intrusion Detection System\",\"lang\":\"en-US\",\"frontmatter\":{\"lang\":\"en-US\",\"title\":\"OSSEC Host Intrusion Detection System\",\"description\":\"OSSEC is a full platform to monitor and control your systems. It mixes all aspects of HIDS (host-based intrusion detection), log monitoring and SIM/SIEM together in a simple, powerful and open source solution.\",\"head\":[[\"link\",{\"rel\":\"canonical\",\"href\":\"https://wwww.libellux.com/ossec/\"}]]},\"headers\":[{\"level\":2,\"title\":\"Configuration files\",\"slug\":\"configuration-files\",\"link\":\"#configuration-files\",\"children\":[]},{\"level\":2,\"title\":\"Prerequisites\",\"slug\":\"prerequisites\",\"link\":\"#prerequisites\",\"children\":[]},{\"level\":2,\"title\":\"Server installation\",\"slug\":\"server-installation\",\"link\":\"#server-installation\",\"children\":[{\"level\":3,\"title\":\"Verify file integrity\",\"slug\":\"verify-file-integrity\",\"link\":\"#verify-file-integrity\",\"children\":[]},{\"level\":3,\"title\":\"Install OSSEC with PCRE2 support\",\"slug\":\"install-ossec-with-pcre2-support\",\"link\":\"#install-ossec-with-pcre2-support\",\"children\":[]}]},{\"level\":2,\"title\":\"Server configuration\",\"slug\":\"server-configuration\",\"link\":\"#server-configuration\",\"children\":[{\"level\":3,\"title\":\"Allow list\",\"slug\":\"allow-list\",\"link\":\"#allow-list\",\"children\":[]},{\"level\":3,\"title\":\"Remote syslog\",\"slug\":\"remote-syslog\",\"link\":\"#remote-syslog\",\"children\":[]},{\"level\":3,\"title\":\"Repeated offenders\",\"slug\":\"repeated-offenders\",\"link\":\"#repeated-offenders\",\"children\":[]},{\"level\":3,\"title\":\"PSAD rules\",\"slug\":\"psad-rules\",\"link\":\"#psad-rules\",\"children\":[]}]},{\"level\":2,\"title\":\"Agent installation\",\"slug\":\"agent-installation\",\"link\":\"#agent-installation\",\"children\":[{\"level\":3,\"title\":\"Verify file integrity\",\"slug\":\"verify-file-integrity-1\",\"link\":\"#verify-file-integrity-1\",\"children\":[]},{\"level\":3,\"title\":\"Install OSSEC with PCRE2 support\",\"slug\":\"install-ossec-with-pcre2-support-1\",\"link\":\"#install-ossec-with-pcre2-support-1\",\"children\":[]}]},{\"level\":2,\"title\":\"Agent configuration\",\"slug\":\"agent-configuration\",\"link\":\"#agent-configuration\",\"children\":[]},{\"level\":2,\"title\":\"Manage agents\",\"slug\":\"manage-agents\",\"link\":\"#manage-agents\",\"children\":[]},{\"level\":2,\"title\":\"Windows agent\",\"slug\":\"windows-agent\",\"link\":\"#windows-agent\",\"children\":[]},{\"level\":2,\"title\":\"Agentless monitoring\",\"slug\":\"agentless-monitoring\",\"link\":\"#agentless-monitoring\",\"children\":[{\"level\":3,\"title\":\"VMware ESXi\",\"slug\":\"vmware-esxi\",\"link\":\"#vmware-esxi\",\"children\":[]},{\"level\":3,\"title\":\"Enabling agentless monitoring\",\"slug\":\"enabling-agentless-monitoring\",\"link\":\"#enabling-agentless-monitoring\",\"children\":[]},{\"level\":3,\"title\":\"Configure agentless monitoring\",\"slug\":\"configure-agentless-monitoring\",\"link\":\"#configure-agentless-monitoring\",\"children\":[]}]},{\"level\":2,\"title\":\"Firewall settings\",\"slug\":\"firewall-settings\",\"link\":\"#firewall-settings\",\"children\":[]},{\"level\":2,\"title\":\"Logtail\",\"slug\":\"logtail\",\"link\":\"#logtail\",\"children\":[]},{\"level\":2,\"title\":\"Slack integration\",\"slug\":\"slack-integration\",\"link\":\"#slack-integration\",\"children\":[]},{\"level\":2,\"title\":\"Cloudflare integration\",\"slug\":\"cloudflare-integration\",\"link\":\"#cloudflare-integration\",\"children\":[]},{\"level\":2,\"title\":\"Monitoring\",\"slug\":\"monitoring\",\"link\":\"#monitoring\",\"children\":[{\"level\":3,\"title\":\"Monitor failed M/Monit login attempts with OSSEC\",\"slug\":\"monitor-failed-m-monit-login-attempts-with-ossec\",\"link\":\"#monitor-failed-m-monit-login-attempts-with-ossec\",\"children\":[]}]},{\"level\":2,\"title\":\"Upgrading\",\"slug\":\"upgrading\",\"link\":\"#upgrading\",\"children\":[{\"level\":3,\"title\":\"Upgrade to OSSEC 3.3.0\",\"slug\":\"upgrade-to-ossec-3-3-0\",\"link\":\"#upgrade-to-ossec-3-3-0\",\"children\":[]}]},{\"level\":2,\"title\":\"Custom rules\",\"slug\":\"custom-rules\",\"link\":\"#custom-rules\",\"children\":[{\"level\":3,\"title\":\"Ignore snap loop devices\",\"slug\":\"ignore-snap-loop-devices\",\"link\":\"#ignore-snap-loop-devices\",\"children\":[]},{\"level\":3,\"title\":\"Monitor failed M/Monit authentication\",\"slug\":\"monitor-failed-m-monit-authentication\",\"link\":\"#monitor-failed-m-monit-authentication\",\"children\":[]},{\"level\":3,\"title\":\"Mute useless systemd-resolved message\",\"slug\":\"mute-useless-systemd-resolved-message\",\"link\":\"#mute-useless-systemd-resolved-message\",\"children\":[]},{\"level\":3,\"title\":\"Alert on fail2ban action\",\"slug\":\"alert-on-fail2ban-action\",\"link\":\"#alert-on-fail2ban-action\",\"children\":[]}]},{\"level\":2,\"title\":\"Command-line\",\"slug\":\"command-line\",\"link\":\"#command-line\",\"children\":[]},{\"level\":2,\"title\":\"Troubleshooting\",\"slug\":\"troubleshooting\",\"link\":\"#troubleshooting\",\"children\":[{\"level\":3,\"title\":\"Duplicate counter error\",\"slug\":\"duplicate-counter-error\",\"link\":\"#duplicate-counter-error\",\"children\":[]},{\"level\":3,\"title\":\"build-essential\",\"slug\":\"build-essential\",\"link\":\"#build-essential\",\"children\":[]},{\"level\":3,\"title\":\"libevent-dev\",\"slug\":\"libevent-dev\",\"link\":\"#libevent-dev\",\"children\":[]},{\"level\":3,\"title\":\"pcre2 & libpcre2-dev\",\"slug\":\"pcre2-libpcre2-dev\",\"link\":\"#pcre2-libpcre2-dev\",\"children\":[]},{\"level\":3,\"title\":\"zlib1g-dev\",\"slug\":\"zlib1g-dev\",\"link\":\"#zlib1g-dev\",\"children\":[]},{\"level\":3,\"title\":\"libssl-dev\",\"slug\":\"libssl-dev\",\"link\":\"#libssl-dev\",\"children\":[]},{\"level\":3,\"title\":\"Ignore snap partition state\",\"slug\":\"ignore-snap-partition-state\",\"link\":\"#ignore-snap-partition-state\",\"children\":[]},{\"level\":3,\"title\":\"Server returned error NXDOMAIN\",\"slug\":\"server-returned-error-nxdomain\",\"link\":\"#server-returned-error-nxdomain\",\"children\":[]},{\"level\":3,\"title\":\"Cannot unlink /queue/rids/sender\",\"slug\":\"cannot-unlink-queue-rids-sender\",\"link\":\"#cannot-unlink-queue-rids-sender\",\"children\":[]}]},{\"level\":2,\"title\":\"Enterprise solutions\",\"slug\":\"enterprise-solutions\",\"link\":\"#enterprise-solutions\",\"children\":[{\"level\":3,\"title\":\"Atomic Enterprise OSSEC\",\"slug\":\"atomic-enterprise-ossec\",\"link\":\"#atomic-enterprise-ossec\",\"children\":[]}]}],\"git\":{\"updatedTime\":1696635321000,\"contributors\":[{\"name\":\"Libellux\",\"email\":\"fredrik@libellux.com\",\"commits\":111},{\"name\":\"Fredrik Hilmersson\",\"email\":\"fredrik@libellux.com\",\"commits\":2}]},\"filePathRelative\":\"ossec/README.md\"}")
export { comp, data }
