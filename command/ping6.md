ping6
===

测试主机之间网络的连通性(ipv6)

## 补充说明

**ping6命令** ping6 是 ICMPv6 版的 ping 实现。正确使用、访问 IPv6 网站需要您提前配置本地环境，选择支持 v6 的网站进行访问(ping)。
执行 ping6 指令会使用 ICMPv6 传输(OSI)协议，发出要求回应的信息，若远端主机的网络功能没有问题，就会回应该信息，因而得知该主机运作正常。

###  语法

```bash
ping6 (选项) (地址) [网络接口名称]
```

###  选项

```bash
-a [addrtype]: 生成 ICMPv6 节点信息节点地址查询;
-b [bufsiz]: 设置套接字缓冲区大小;
-c [count]: 在发送(和接收)ECHO_RESPONSE数据包后停止;
-h [hoplimit]: 设置 IPv6 跳数限制;
-I [interface]: 具有给定接口地址的源数据包;
-i [wait]: 在发送每个数据包之间等待几秒钟，默认是 1 秒;
-p [policy]: policy 指定要用于探测的 IPsec 策略;
```
###  地址

目的主机：指定发送 ICMPv6 报文的目的主机。

###  实例

```bash
$ ping6 -c4 ipw.cn

PING6(56=40+8+8 bytes) 2409:xxxx:xxxx:85c0::2 --> 2409:8c70:3a00:42:3a::1
16 bytes from 2409:8c70:3a00:42:3a::1, icmp_seq=0 hlim=54 time=31.236 ms
16 bytes from 2409:8c70:3a00:42:3a::1, icmp_seq=1 hlim=54 time=29.382 ms
16 bytes from 2409:8c70:3a00:42:3a::1, icmp_seq=2 hlim=54 time=29.571 ms
16 bytes from 2409:8c70:3a00:42:3a::1, icmp_seq=3 hlim=54 time=28.973 ms

--- 66f782g2.slt-dk.sched.tdnsv8.com ping6 statistics ---
4 packets transmitted, 4 packets received, 0.0% packet loss
round-trip min/avg/max/std-dev = 28.973/29.791/31.236/0.862 ms
```

### 服务器 IPv6 Ping 失败可能原因

1. 服务器未开启 IPv6。
2. 服务器已开启 IPv6，但防火墙(安全组)未对源地址是 IPv6 地址(::/0)的 ICMPv6 协议开放访问，


