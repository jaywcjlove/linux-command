clockdiff
===

检测两台linux主机的时间差

## 补充说明

在ip报文的首部和ICMP报文的首部都可以放入时间戳数据。 **clockdiff** 程序正是使用时间戳来测算目的主机和本地主机的系统时间差。

### 选项  

```shell
-o：使用IP时间戳选项来测量系统时间差。时间戳只用3个。
-o1：使用IP时间戳选项来测量系统时间差。用4个时间戳。如果-o和-o1都没有设置，那么就是用ICMP时间戳来测试系统时间差。
```

### 实例  

```shell
lixi@lixi-desktop:~$ ping -T tsandaddr www.ustc.edu.cn -c 1
PING www.ustc.edu.cn (202.38.64.9) 56(124) bytes of data.
64 bytes from 202.38.64.9: icmp_seq=1 ttl=62 time=0.823 ms
TS:     lixi-desktop.local (210.45.74.25)    12522473 absolute
    210.45.74.1    -251
    local-gw.ustc.edu.cn (202.38.64.126)    248
    202.38.64.9    -857514
Unrecorded hops: 3

--- www.ustc.edu.cn ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.823/0.823/0.823/0.000 ms
```

首先由上面的得出在RRT不大的时候，几个ICMP时间戳的关系。本地主机和202.38.64.9之间的时间差约为：-857514+248-251=-857517。分别用-o（IP选项中时间戳）和不带选项（ICMP路由时间戳）上述路由的系统时间进行测试。得到的结果：

```shell
lixi@lixi-desktop:~# ./clockdiff -o 202.38.64.9  
..................................................
host=202.38.64.9 rtt=1(0)ms/1ms delta=-857517ms/-857517ms Wed Dec 17 11:28:30 2008
```

```shell
lixi@lixi-desktop:~# ./clockdiff 202.38.64.9
.
host=202.38.64.9 rtt=750(187)ms/0ms delta=-857517ms/-857517ms Wed Dec 17 11:28:35 2008
```

两种方法测试的都比较准确。

```shell
lixi@lixi-desktop:~#./clockdiff gigagate1.Princeton.EDU
..................................................
host=gigagate1.Princeton.EDU rtt=307(21)ms/271ms delta=-5ms/-5ms Wed Dec 17 11:50:16 2008
```

上面是测试一个RTT较大的目的主机和本地主机的系统时间差。不过在使用clockdiff的时候，需要一点运气，因为很多路由会忽略ICMP或IP时间戳。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->