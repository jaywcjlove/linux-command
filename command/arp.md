arp
===

arp 命令用于显示和修改 IP 到 MAC 转换表。

## 补充说明

**arp 命令** 是 Address Resolution Protocol，地址解析协议，是通过解析网络层地址来找寻数据链路层地址的一个网络协议包中极其重要的网络传输协议。而该命令可以显示和修改 arp 协议解析表中的缓冲数据。

这个核心协议模块实现RFC826中定义的 Address Resolution Protocol [译注：即TCP/IP的第三层到第一层的地址转换协议]，用于在直接相连的网络中换第二层硬件地址和 Ipv4 协议地址之间的转换。 用户除非想对其进行配置，否则一般不会直接操作这个模块。

实际上，它提供对核心中其它协议的服务。

用户进程可以使用 packet(7) 的 sockets，收到 ARP 包（译注：一译分组）。 还有一种机制是使用 netlink(7) sockets，在用户空间管理 ARP 缓存的机制。我们也可以通过 ioctl (2) 控制任意 PF_INET socket上的 ARP 表

ARP 模块维护一个硬件地址到协议地址映射的缓存。这个缓存有大小限制，所以不常用的和旧的记录（Entry）将被垃圾收集器清除（garbage-collected），垃圾收集器永远不能删除标为永久的记录。我们可以使用ioctls直接操纵缓冲， 并且其性状可以用下面定义的 sysctl 调节。

如果在限定的时间（见下面的sysctl）内，一条现存映射没有肯定反馈时， 则认为相邻层的缓存记录失效。 为了再次向目标发送数据，ARP将首先试着询问本地arp进程 app_solicit 次，获取更新了的 MAC（介质访问控制）地址。 如果失败，并且旧的MAC地址是已知的，则发送 ucast_solicit 次的 unicast probe。如果仍然失败，则将向网络广播一个新的ARP请求,此时要 有待发送数据的队列

如果 Linux 接到一个地址请求，而且该地址指向 Linux 转发的地址，并且接收接口打开了代理 arp 时，Linux 将自动添加一条非永久的代理 arp 记录；如果存在拒绝到目标的路由，则不添加代理 arp 记录。

### 语法

```shell
arp（选项）（参数）
```

### 选项

```shell
-a # 主机 ：显示 arp 缓冲区的所有条目；
-H # 地址类型 ：指定 arp 指令使用的地址类型；
-d # 主机 ：从 arp 缓冲区中删除指定主机的 arp 条目；
-D # 使用指定接口的硬件地址；
-e # 以 Linux 的显示风格显示 arp 缓冲区中的条目；
-i # 接口 ：指定要操作 arp 缓冲区的网络接口；
-s # 主机 MAC 地址 ：设置指定的主机的 IP 地址与 MAC 地址的静态映射；
-n # 以数字方式显示 arp 缓冲区中的条目；
-v # 显示详细的 arp 缓冲区条目，包括缓冲区条目的统计信息；
-f # 文件 ：设置主机的 IP 地址与 MAC 地址的静态映射。
```

### 参数

主机：查询 arp 缓冲区中指定主机的 arp 条目。

### 实例

显示arp 缓冲区内容

```shell
[root@localhost ~]# arp -v
Address                  HWtype  HWaddress           Flags Mask            Iface
192.168.0.134            ether   00:21:5E:C7:4D:88   C                     eth1
115.238.144.129          ether   38:22:D6:2F:B2:F1   C                     eth0
Entries: 2      Skipped: 0      Found: 2
```

添加静态 arp 映射

```shell
arp -s IP MAC-ADDRESS
arp -s 192.168.1.1 00:b1:b2:b3:b4:b5
```

删除 arp 缓存条目

```shell
arp -d 192.168.1.1
```

<!-- Linux 命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
