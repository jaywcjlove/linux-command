dhcrelay
===

使用dhcrelay命令可以提供中继DHCP和BOOTP请求

## 补充说明

**dhcrelay命令** 使用dhcrelay命令可以提供中继DHCP和BOOTP请求，从一个没有DHCP服务器的子网直接连接到其它子网内的一个或多个DHCP服务器。该命令在DHCP中继服务器上使用，同时支持DHCPv4/BOOTP和DHCPv6协议。

### 语法  

```shell
dhcrelay [选项] [DHCP服务器]
```

### 选项  

```shell
-c <跳数> 当转发数据包时，dhcrelay丢弃已经达到一个最大跳数的数据包。默认值是10，最大值是255
-4 运行dhcrelay命令作为DHCPv4/BOOTP中继代理。这是默认操作模式
-6 运行dhcrelay命令作为DHCPv6中继代理
-q 安静模式
-p <端口> 监听和发送端口。DHCPv4/BOOTP默认端口是67，DHCPv6默认端口是547
-A <长度> 指定发送到DHCP服务器的最大数据包大小
-d 强制dhcrelay命令作为前台进程运行
```

### 例子

指定DHCP服务器的位置。

```shell
[root@localhost ~]# dhcrelay 192.168.0.2
Internet Systems Consortium DHCP Relay Agent4.1.1-P1
Copyright 2004-2010 Internet SystemsConsortium.
All rights reserved.
For info, please visithttps://www.isc.org/software/dhcp/
Listening on LPF/eth1/00:0c:29:fc:2f:ef
Sending on  LPF/eth1/00:0c:29:fc:2f:ef
Listening on LPF/eth0/00:0c:27:fc:25:ec
Sending on  LPF/eth0/00:0c:27:fc:25:ec
Sending on  Socket/fallback
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
