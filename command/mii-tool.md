mii-tool
===

配置网络设备协商方式的工具

## 补充说明

**mii-tool命令** 是用于查看、管理介质的网络接口的状态，有时网卡需要配置协商方式，比如10/100/1000M的网卡半双工、全双工、自动协商的配置。但大多数的网络设备是不用我们来修改协商，因为大多数网络设置接入的时候，都采用自动协商来解决相互通信的问题。不过自动协商也不是万能的，有时也会出现错误，比如丢包率比较高，这时就要我们来指定网卡的协商方式。mii-tool就是能指定网卡的协商方式。下面我们说一说mii-tool的用法。

###  语法

```shell
usage: mii-tool [-VvRrwl] [-A media,... | -F media] [interface ...]
```

###  选项

```shell
-V 显示版本信息；
-v 显示网络接口的信息；
-R 重设MII到开启状态；
-r 重启自动协商模式；
-w 查看网络接口连接的状态变化；
-l 写入事件到系统日志；
-A 指令特定的网络接口；
-F 更改网络接口协商方式；

media: 100baseT4, 100baseTx-FD, 100baseTx-HD, 10baseT-FD, 10baseT-HD,
        (to advertise both HD and FD) 100baseTx, 10baseT
```

###  实例

查看网络接口的协商状态：

```shell
[root@localhost ~]# mii-tool -v eth0
eth0: negotiated 100baseTx-FD, link ok
  product info: vendor 00:50:ef, model 60 rev 8
  basic mode:   autonegotiation enabled
  basic status: autonegotiation complete, link ok
  capabilities: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
  advertising:  100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD flow-control
  link partner: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
```

注：上面的例子，我们可以看得到是自动协商，注意红字的部份。

更改网络接口协商方式：

更改网络接口的协商方式，我们要用到`-F`选项，后面可以接100baseT4, 100baseTx-FD, 100baseTx-HD, 10baseT-FD, 10baseT-HD等参数；

如果我们想把网络接口eth0改为1000Mb/s全双工的模式应该怎么办呢？

```shell
[root@localhost ~]# mii-tool -F 100baseTx-FD
[root@localhost ~]# mii-tool -v eth0
eth0: 100 Mbit, full duplex, link ok
  product info: vendor 00:00:00, model 0 rev 0
  basic mode:   100 Mbit, full duplex
  basic status: link ok
  capabilities: 100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
  advertising:  100baseTx-FD 100baseTx-HD 10baseT-FD 10baseT-HD
```

注：是不是已经改过来了？当然，我们也一样用ethtool工具来更改，比如执行下面的命令：

```shell
[root@localhost ~]# ethtool -s eth0 speed 100 duplex full
```


