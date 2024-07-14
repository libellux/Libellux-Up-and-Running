---
title: Snort Network Intrusion Detection
description: 
---

# Snort Network Intrusion Detection

<a href='https://ko-fi.com/B0B31BJU3' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi5.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Install Snort 3 from source

::: info
Supported distributions:

* Ubuntu 22.04 (Jammy Jellyfish)
* Debian 12 (Bookworm)
* Rocky Linux 9 (Blue Onyx)
:::

::: code-group
```shellsession [Ubuntu]
sudo apt-get update --assume-yes
```
:::

https://github.com/snort3/snort3/blob/master/doc/user/tutorial.txt#L6

Optional pkgs: https://github.com/snort3/snort3/blob/master/doc/user/tutorial.txt#L36

::: code-group
```shellsession [Ubuntu]
sudo apt-get install --assume-yes \
build-essential \
libpcap-dev \
libpcre3-dev \
libnet1-dev \
zlib1g-dev \
luajit \
hwloc \
libdnet-dev \ 
libdumbnet-dev \
bison \
flex \
liblzma-dev \
openssl \
libssl-dev \
pkg-config \
libhwloc-dev \
cmake \
cpputest \
libsqlite3-dev \
uuid-dev \
libcmocka-dev \
libnetfilter-queue-dev \
libmnl-dev \
autotools-dev \
libluajit-5.1-dev \
libunwind-dev \
libfl-dev
```
:::

## Snort DAQ

::: code-group
```shellsession [Ubuntu]
wget https://www.snort.org/downloads/snortplus/libdaq-3.0.14.tar.gz
tar -xvzf libdaq-3.0.14.tar.gz
cd libdaq-3.0.14
./bootstrap
./configure
make
sudo make install
```
:::

cat /etc/ld.so.conf.d/libdaq3.conf
/usr/local/lib/daq_s3/lib/

sudo ldconfig

tcmalloc is a library created by Google (PerfTools) for improving memory handling in threaded programs. The
use of the library may lead to performance improvements and may reduce memory usage.

## Build Snort

::: code-group
```shellsession [Ubuntu]
wget https://www.snort.org/downloads/snortplus/snort3-3.1.78.0.tar.gz
tar -xvzf snort3-3.1.78.0.tar.gz
cd snort3-3.1.78.0
./configure_cmake.sh --prefix=/usr/local/snort --enable-tcmalloc
                       --with-daq-includes=/usr/local/lib/daq_s3/include/ \
                       --with-daq-libraries=/usr/local/lib/daq_s3/lib/
```
:::

```shellsession
-------------------------------------------------------
snort version 3.1.78.0

Install options:
    prefix:     /usr/local/snort
    includes:   /usr/local/snort/include/snort
    plugins:    /usr/local/snort/lib/snort

Feature options:
    DAQ Modules:    Static (afpacket;bpf;dump;fst;gwlb;nfq;pcap;savefile;trace)
    libatomic:      System-provided
    Hyperscan:      OFF // [!code highlight]
    ICONV:          ON
    Libunwind:      ON
    LZMA:           ON
    RPC DB:         Built-in
    SafeC:          OFF
    TCMalloc:       OFF // [!code highlight]
    JEMalloc:       OFF
    UUID:           ON
    NUMA:           ON
-------------------------------------------------------
```

::: code-group
```shellsession [Ubuntu]
cd build
make -j $(nproc)
sudo make install
```
:::

## Snort 3 Extra

## Testing

/usr/local/snort/bin/snort: error while loading shared libraries: libdaq.so.3: cannot open shared object file: No such file or directory

snort -c snort.lua --pcap-dir ./pcaps --pcap-filter '*.pcap' -l /var/log/snort plugin-path /extra -k none -z --4

snort -c /usr/local/snort/etc/snort/snort.lua -r test.pcap -l
/var/log/snort --plugin-path /usr/local/snort/extra -k none

<a target="_blank" class="dark-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/dark.png" /></a>
<a target="_blank" class="light-only" href="https://betteruptime.com/"><img style="width: 130px; height: 52px;" alt="Better Uptime Website Monitoring" src="https://betteruptime.com/assets/static_assets/badges/light.png" /></a>
