ifstat
===

统计网络接口流量状态

## 补充说明

**ifstat命令** 就像iostat/vmstat描述其它的系统状况一样，是一个统计网络接口活动状态的工具。ifstat工具系统中并不默认安装，需要自己下载源码包，重新编译安装，使用过程相对比较简单。

###  下载 

```shell
http://gael.roualland.free.fr/ifstat/  （官网）
wget http://gael.roualland.free.fr/ifstat/ifstat-1.1.tar.gz
```

###  编译安装 

```shell
tar -zxvf ifstat-1.1.tar.gz
cd ifstat-1.1
./configure            
make
make install # 默认会安装到/usr/local/bin/目录中
```

注释：执行`which ifstat`输出`/usr/local/bin/ifstat`

###  选项 

```shell
-l 监测环路网络接口（lo）。缺省情况下，ifstat监测活动的所有非环路网络接口。经使用发现，加上-l参数能监测所有的网络接口的信息，而不是只监测 lo的接口信息，也就是说，加上-l参数比不加-l参数会多一个lo接口的状态信息。
-a 监测能检测到的所有网络接口的状态信息。使用发现，比加上-l参数还多一个plip0的接口信息，搜索一下发现这是并口（网络设备中有一 个叫PLIP (Parallel Line Internet Protocol). 它提供了并口...）
-z 隐藏流量是无的接口，例如那些接口虽然启动了但是未用的
-i 指定要监测的接口,后面跟网络接口名
-s 等于加-d snmp:[comm@][#]host[/nn]] 参数，通过SNMP查询一个远程主机
-h 显示简短的帮助信息
-n 关闭显示周期性出现的头部信息（也就是说，不加-n参数运行ifstat时最顶部会出现网络接口的名称，当一屏显示不下时，会再一次出现接口的名称，提示我们显示的流量信息具体是哪个网络接口的。加上-n参数把周期性的显示接口名称关闭，只显示一次）
-t 在每一行的开头加一个时间 戳（能告诉我们具体的时间）
-T 报告所有监测接口的全部带宽（最后一列有个total，显示所有的接口的in流量和所有接口的out流量，简单的把所有接口的in流量相加,out流量相 加）
-w  用指定的列宽，而不是为了适应接口名称的长度而去自动放大列宽
-W 如果内容比终端窗口的宽度还要宽就自动换行
-S 在同一行保持状态更新（不滚动不换行）注：如果不喜欢屏幕滚动则此项非常方便，与bmon的显示方式类似
-b 用kbits/s显示带宽而不是kbytes/s
-q 安静模式，警告信息不出现
-v 显示版本信息
-d 指定一个驱动来收集状态信息
```

###  实例 

默认使用

```shell
[root@localhost ifstat-1.1] #ifstat
       eth0                eth1       
 KB/s in  KB/s out   KB/s in  KB/s out
    0.07      0.20      0.00      0.00
    0.07      0.15      0.58      0.00
```

默认ifstat不监控回环接口，显示的流量单位是KB。

```shell
[root@localhost ifstat-1.1]# ifstat -tT
  time           eth0                eth1                eth2                eth3               Total      
HH:MM:ss   KB/s in  KB/s out   KB/s in  KB/s out   KB/s in  KB/s out   KB/s in  KB/s out   KB/s in  KB/s out
16:53:04      0.84      0.62   1256.27   1173.05      0.12      0.18      0.00      0.00   1257.22   1173.86
16:53:05      0.57      0.40      0.57      0.76      0.00      0.00      0.00      0.00      1.14      1.17
16:53:06      1.58      0.71      0.42      0.78      0.00      0.00      0.00      0.00      2.01      1.48
16:53:07      0.57      0.40      1.91      2.61      0.00      0.00      0.00      0.00      2.48      3.01
16:53:08      0.73      0.40    924.02   1248.91      0.00      0.00      0.00      0.00    924.76   1249.31
```

监控所有网络接口

```shell
[root@localhost ifstat-1.1] # ifstat -a
        lo                 eth0                eth1       
 KB/s in  KB/s out   KB/s in  KB/s out   KB/s in  KB/s out
    0.00      0.00      0.28      0.58      0.06      0.06
    0.00      0.00      1.41      1.13      0.00      0.00
    0.61      0.61      0.26      0.23      0.00      0.00
```


