import{_ as a,c as e,o as s,a5 as i}from"./chunks/framework.BO5XLpUq.js";const b=JSON.parse('{"title":"Ansible","description":"","frontmatter":{"title":"Ansible","head":[["link",{"rel":"canonical","href":"https://libellux.com/management/ansible.html"}]]},"headers":[],"relativePath":"management/ansible.md","filePath":"management/ansible.md","lastUpdated":null}'),t={name:"management/ansible.md"},l=i(`<h1 id="ansible" tabindex="-1">Ansible <a class="header-anchor" href="#ansible" aria-label="Permalink to &quot;Ansible&quot;">​</a></h1><p>Ansible is an open-source automation tool used for configuration management, application deployment, and task automation. It allows users to automate repetitive tasks such as provisioning servers, configuring software, and managing infrastructure by defining tasks, called playbooks, and executing them across multiple servers simultaneously.</p><p><a href="https://ko-fi.com/B0B31BJU3" target="_blank"><img height="36" style="border:0px;height:36px;" src="https://storage.ko-fi.com/cdn/kofi5.png?v=3" border="0" alt="Buy Me a Coffee at ko-fi.com"></a></p><h2 id="ansible-roles" tabindex="-1">Ansible roles <a class="header-anchor" href="#ansible-roles" aria-label="Permalink to &quot;Ansible roles&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You already have ansible installed</p></div><h2 id="ossec-server" tabindex="-1">OSSEC server <a class="header-anchor" href="#ossec-server" aria-label="Permalink to &quot;OSSEC server&quot;">​</a></h2><h2 id="ossec-agent" tabindex="-1">OSSEC agent <a class="header-anchor" href="#ossec-agent" aria-label="Permalink to &quot;OSSEC agent&quot;">​</a></h2><h2 id="clamav" tabindex="-1">ClamAV <a class="header-anchor" href="#clamav" aria-label="Permalink to &quot;ClamAV&quot;">​</a></h2><h2 id="monit" tabindex="-1">Monit <a class="header-anchor" href="#monit" aria-label="Permalink to &quot;Monit&quot;">​</a></h2><h2 id="psad" tabindex="-1">PSAD <a class="header-anchor" href="#psad" aria-label="Permalink to &quot;PSAD&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Supported distributions:</p><ul><li>Ubuntu 22.04 (Jammy Jellyfish)</li><li>Debian 12 (Bookworm)</li><li>Rocky Linux 9 (Blue Onyx)</li></ul></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-i2RqV" id="tab-3BXOCzz" checked="checked"><label for="tab-3BXOCzz">Ubuntu/Debian</label><input type="radio" name="group-i2RqV" id="tab-ZdXk4zO"><label for="tab-ZdXk4zO">Rocky Linux</label></div><div class="blocks"><div class="language-shellsession vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shellsession</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sudo apt-get update --assume-yes</span></span></code></pre></div><div class="language-shellsession vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shellsession</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sudo dnf update --assumeyes</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sudo dnf install --assumeyes dnf-utils</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sudo dnf install --assumeyes epel-release</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sudo dnf install --assumeyes epel-next-release</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sudo dnf upgrade --assumeyes</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sudo yum config-manager --set-enabled powertools</span></span></code></pre></div></div></div><p><a target="_blank" href="https://betteruptime.com/"><img style="width:130px;height:52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png"></a></p>`,13),n=[l];function o(r,d,p,c,h,u){return s(),e("div",null,n)}const k=a(t,[["render",o]]);export{b as __pageData,k as default};
