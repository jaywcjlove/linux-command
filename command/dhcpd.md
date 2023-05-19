dhcpd
===

运行DHCP服务器

###  语法

```shell
dhcpd [选项] [网络接口]
```

###  选项

```shell
-p <端口> 指定dhcpd监听的端口
-f 作为前台进程运行dhcpd
-d 启用调试模式
-q 在启动时不显示版权信息
-t 简单地测试配置文件的语法是否正确的，但不会尝试执行任何网络操作
-T 可以用来测试租约数据库文件
-4 运行DHCP服务器
-6 运行DHCPv6服务器
-s <服务器> 指定发送回复的服务器
-cf <配置文件> 指定配置文件
-lf <租约文件> 指定租约文件
-pf <PID文件> 指定PID文件
-tf <跟踪输出文件> 指定文件记录DHCP服务器的整个启动状态
```

### 例子

对DHCP服务器进行排错。

```shell
[root@localhost ~]# dhcpd
InternetSystems Consortium DHCP Server 4.1.1-P1
Copyright2004-2010 Internet Systems Consortium.
All rightsreserved.
For info,please visit https://www.isc.org/software/dhcp/
Not searchingLDAP since ldap-server, ldap-port and ldap-base-dn were not specified in theconfig file
Wrote 0deleted host decls to leases file.
Wrote 0 newdynamic host decls to leases file.
Wrote 1leases to leases file.
Listening onLPF/eth0/00:0c:29:fc:2f:e5/192.168.0.0/24
Sendingon  LPF/eth0/00:0c:29:fc:2f:e5/192.168.0.0/24
Sendingon   Socket/fallback/fallback-net
[root@rhel~]# There's already a DHCP server running.
 
This versionof ISC DHCP is based on the release available
onftp.isc.org.  Features have been addedand other changes
have beenmade to the base software release in order to make
it workbetter with this distribution.
 
exiting.
```


