arp
===

arp 命令用于显示和修改 IP 到 MAC 转换表。

## 补充说明

**arp 命令** 是 Address Resolution Protocol，地址解析协议，是通过解析网络层地址来找寻数据链路层地址的一个网络协议包中极其重要的网络传输协议。而该命令可以显示和修改 arp 协议解析表中的缓冲数据。

### 语法

```shell
arp（选项）（参数）
```

### 选项

    -a 主机 ：显示 arp 缓冲区的所有条目；
    -H 地址类型 ：指定 arp 指令使用的地址类型；
    -d 主机 ：从 arp 缓冲区中删除指定主机的 arp 条目；
    -D：使用指定接口的硬件地址；
    -e：以 Linux 的显示风格显示 arp 缓冲区中的条目；
    -i 接口 ：指定要操作 arp 缓冲区的网络接口；
    -s 主机 MAC 地址 ：设置指定的主机的 IP 地址与 MAC 地址的静态映射；
    -n：以数字方式显示 arp 缓冲区中的条目；
    -v：显示详细的 arp 缓冲区条目，包括缓冲区条目的统计信息；
    -f 文件 ：设置主机的 IP 地址与 MAC 地址的静态映射。

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
