arp
===

显示和修改IP到MAC转换表

## 补充说明

**arp命令** 用于操作主机的arp缓冲区，它可以显示arp缓冲区中的所有条目、删除指定的条目或者添加静态的ip地址与MAC地址对应关系。

### 语法  

```
arp(选项)(参数)
```

### 选项  

```
-a<主机>：显示arp缓冲区的所有条目；
-H<地址类型>：指定arp指令使用的地址类型；
-d<主机>：从arp缓冲区中删除指定主机的arp条目；
-D：使用指定接口的硬件地址；
-e：以Linux的显示风格显示arp缓冲区中的条目；
-i<接口>：指定要操作arp缓冲区的网络接口；
-s<主机><MAC地址>：设置指定的主机的IP地址与MAC地址的静态映射；
-n：以数字方式显示arp缓冲区中的条目；
-v：显示详细的arp缓冲区条目，包括缓冲区条目的统计信息；
-f<文件>：设置主机的IP地址与MAC地址的静态映射。
```

### 参数  

主机：查询arp缓冲区中指定主机的arp条目。

### 实例  

```
[root@localhost ~]# arp -v
Address                  HWtype  HWaddress           Flags Mask            Iface
192.168.0.134            ether   00:21:5E:C7:4D:88   C                     eth1
115.238.144.129          ether   38:22:D6:2F:B2:F1   C                     eth0
Entries: 2      Skipped: 0      Found: 2
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->