arping
===

通过发送ARP协议报文测试网络

## 补充说明

**arping命令** 是用于发送arp请求到一个相邻主机的工具，arping使用arp数据包，通过ping命令检查设备上的硬件地址。能够测试一个ip地址是否是在网络上已经被使用，并能够获取更多设备信息。功能类似于ping。

### 语法  

```shell
arping(选项)(参数)
```

### 选项  

```shell
-b：用于发送以太网广播帧（FFFFFFFFFFFF）。arping一开始使用广播地址，在收到响应后就使用unicast地址。
-q：quiet output不显示任何信息；
-f：表示在收到第一个响应报文后就退出；
-w timeout：设定一个超时时间，单位是秒。如果到了指定时间，arping还没到完全收到响应则退出；
-c count：表示发送指定数量的ARP请求数据包后就停止。如果指定了deadline选项，则arping会等待相同数量的arp响应包，直到超时为止；
-s source：设定arping发送的arp数据包中的SPA字段的值。如果为空，则按下面处理，如果是DAD模式（冲突地址探测），则设置为0.0.0.0，如果是Unsolicited ARP模式（Gratutious ARP）则设置为目标地址，否则从路由表得出；
-I interface：设置ping使用的网络接口。
```

### 参数  

目的主机：指定发送ARP报文的目的主机。

### 实例  

```shell
[root@localhost ~]# arping www.baidu.com 
ARPING 220.181.111.147 from 173.231.43.132 eth0
Unicast reply from 220.181.111.147 00:D0:03:[bc:48:00]  1.666ms
Unicast reply from 220.181.111.147 [00:D0:03:BC:48:00]  1.677ms
Unicast reply from 220.181.111.147 [00:D0:03:BC:48:00]  1.691ms
Unicast reply from 220.181.111.147 [00:D0:03:BC:48:00]  1.728ms
Unicast reply from 220.181.111.147 [00:D0:03:BC:48:00]  1.626ms
Unicast reply from 220.181.111.147 [00:D0:03:BC:48:00]  1.292ms
Unicast reply from 220.181.111.147 [00:D0:03:BC:48:00]  1.429ms
Unicast reply from 220.181.111.147 [00:D0:03:BC:48:00]  2.042ms
Sent 8 probes (1 broadcast(s))
Received 8 response(s)
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->