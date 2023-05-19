ipcalc
===

简单的IP地址计算器

## 补充说明

**ipcalc命令** 是一个简单的ip地址计算器，可以完成简单的IP地址计算任务。

###  语法

```shell
ipcalc(选项)
```

###  选项

```shell
-b：由给定的IP地址和网络掩码计算出广播地址；
-h：显示给定UP地址所对应的主机名；
-m：由给定的IP地址计算器网络掩码；
-p：显示给定的掩码或IP地址的前缀；
-n：由给定的IP地址和网络掩码计算网络地址；
-s：安静模式；
--help：显示帮助信息。
```

###  实例

```shell
[root@localhost ~]# ipcalc -p 192.168.2.1 255.255.255.0
PREFIX=24

[root@localhost ~]# ipcalc -n 192.168.2.1 255.255.255.0
NETWORK=192.168.2.0

[root@localhost ~]# ipcalc -h 127.0.0.1
hostname=localhost.localdomain

[root@localhost ~]# ipcalc -m 192.168.2.1
NETMASK=255.255.255.0

[root@localhost ~]# ipcalc -pnbm 192.168.2.1 255.255.255.0
NETMASK=255.255.255.0
PREFIX=24
BROADCAST=192.168.2.255
NETWORK=192.168.2.0
```


