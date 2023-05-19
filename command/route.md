route
===

显示并设置Linux中静态路由表

## 补充说明

**route命令** 用来显示并设置Linux内核中的网络路由表，route命令设置的路由主要是静态路由。要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。

在Linux系统中设置路由通常是为了解决以下问题：该Linux系统在一个局域网中，局域网中有一个网关，能够让机器访问Internet，那么就需要将这台机器的ip地址设置为Linux机器的默认路由。要注意的是，直接在命令行下执行route命令来添加路由，不会永久保存，当网卡重启或者机器重启之后，该路由就失效了；可以在`/etc/rc.local`中添加route命令来保证该路由设置永久有效。

###  语法

```shell
route(选项)(参数)
```

###  选项

```shell
-A：设置地址类型；
-C：打印将Linux核心的路由缓存；
-v：详细信息模式；
-n：不执行DNS反向查找，直接显示数字形式的IP地址；
-e：netstat格式显示路由表；
-net：到一个网络的路由表；
-host：到一个主机的路由表。
```

###  参数

```shell
add：增加指定的路由记录；
del：删除指定的路由记录；
target：目的网络或目的主机；
gw：设置默认网关；
mss：设置TCP的最大区块长度（MSS），单位MB；
window：指定通过路由表的TCP连接的TCP窗口大小；
dev：路由记录所表示的网络接口。
```

###  实例

 **显示当前路由：** 

```shell
[root@localhost ~]# route
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
112.124.12.0    *               255.255.252.0   U     0      0        0 eth1
10.160.0.0      *               255.255.240.0   U     0      0        0 eth0
192.168.0.0     10.160.15.247   255.255.0.0     UG    0      0        0 eth0
172.16.0.0      10.160.15.247   255.240.0.0     UG    0      0        0 eth0
10.0.0.0        10.160.15.247   255.0.0.0       UG    0      0        0 eth0
default         112.124.15.247  0.0.0.0         UG    0      0        0 eth1

[root@localhost ~]# route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
112.124.12.0    0.0.0.0         255.255.252.0   U     0      0        0 eth1
10.160.0.0      0.0.0.0         255.255.240.0   U     0      0        0 eth0
192.168.0.0     10.160.15.247   255.255.0.0     UG    0      0        0 eth0
172.16.0.0      10.160.15.247   255.240.0.0     UG    0      0        0 eth0
10.0.0.0        10.160.15.247   255.0.0.0       UG    0      0        0 eth0
0.0.0.0         112.124.15.247  0.0.0.0         UG    0      0        0 eth1
```

其中Flags为路由标志，标记当前网络节点的状态，Flags标志说明：

*   U Up表示此路由当前为启动状态。
*   H Host，表示此网关为一主机。
*   G Gateway，表示此网关为一路由器。
*   R Reinstate Route，使用动态路由重新初始化的路由。
*   D Dynamically,此路由是动态性地写入。
*   M Modified，此路由是由路由守护程序或导向器动态修改。
*   ! 表示此路由当前为关闭状态。

 **添加网关/设置网关：** 

```shell
route add -net 224.0.0.0 netmask 240.0.0.0 dev eth0    #增加一条到达224.0.0.0的路由。
```

 **屏蔽一条路由：** 

```shell
route add -net 224.0.0.0 netmask 240.0.0.0 reject     #增加一条屏蔽的路由，目的地址为224.x.x.x将被拒绝。
```

 **删除路由记录：** 

```shell
route del -net 224.0.0.0 netmask 240.0.0.0
route del -net 224.0.0.0 netmask 240.0.0.0 reject
```

 **删除和添加设置默认网关：** 

```shell
route del default gw 192.168.120.240
route add default gw 192.168.120.240
```


