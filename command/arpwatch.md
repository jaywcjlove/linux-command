arpwatch
===

监听网络上ARP的记录

## 补充说明

**arpwatch命令** 用来监听网络上arp的记录。

### 语法  

```shell
arpwatch(选项)
```

### 选项  

```shell
-d：启动排错模式；
-f<记录文件>：设置存储ARP记录的文件，预设为/var/arpwatch/arp.dat；
-i<接口>：指定监听ARP的接口，预设的接口为eth0；
-r<记录文件>：从指定的文件中读取ARP记录，而不是从网络上监听。
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->