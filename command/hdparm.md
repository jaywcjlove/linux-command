hdparm
===

显示与设定硬盘的参数

## 补充说明

**hdparm命令** 提供了一个命令行的接口用于读取和设置IDE或SCSI硬盘参数。

### 语法  

```shell
hdparm(选项)(参数)
```

### 选项  

```shell
-a<快取分区>：设定读取文件时，预先存入块区的分区数，若不加上<快取分区>选项，则显示目前的设定；
-A<0或1>：启动或关闭读取文件时的快取功能；
-c<I/O模式>：设定IDE32位I/O模式；
-C：检测IDE硬盘的电源管理模式；
-d<0或1>：设定磁盘的DMA模式；
-f：将内存缓冲区的数据写入硬盘，并清楚缓冲区；
-g：显示硬盘的磁轨，磁头，磁区等参数；
-h：显示帮助；
-i：显示硬盘的硬件规格信息，这些信息是在开机时由硬盘本身所提供；
-I：直接读取硬盘所提供的硬件规格信息；
-k<0或1>：重设硬盘时，保留-dmu参数的设定；
-K<0或1>：重设硬盘时，保留-APSWXZ参数的设定；
-m<磁区数>：设定硬盘多重分区存取的分区数；
-n<0或1>：忽略硬盘写入时所发生的错误；
-p<PIO模式>：设定硬盘的PIO模式；
-P<磁区数>：设定硬盘内部快取的分区数；
-q:在执行后续的参数时，不在屏幕上显示任何信息；
-r<0或1>:设定硬盘的读写模式；
-S<时间>:设定硬盘进入省电模式前的等待时间；
-t;评估硬盘的读取效率；
-T：平谷硬盘快取的读取效率；
-u<0或1>：在硬盘存取时，允许其他中断要求同时执行；
-v：显示硬盘的相关设定；
-w<0或1>：设定硬盘的写入快取；
-X<传输模式>：设定硬盘的传输模式；
-y：使IDE硬盘进入省电模式；
-Y：使IDE硬盘进入睡眠模式；
-Z：关闭某些Seagate硬盘的自动省电功能。
```

### 参数  

设备文件：指定id驱动对应的设备文件名。

### 实例  

显示硬盘的相关设置：

```shell
hdparm /dev/sda
/dev/sda:
IO_support = 0 (default 16-bit)
readonly = 0 (off)
readahead = 256 (on)
geometry = 19457［柱面数］/255［磁头数］/63［扇区数］, sectors = 312581808［总扇区数］, start = 0［起始扇区数］

```shell

显示硬盘的柱面、磁头、扇区数：

```shell
hdparm -g /dev/sda
/dev/sda:
geometry = 19457［柱面数］/255［磁头数］/63［扇区数］, sectors = 312581808［总扇区数］, start = 0［起始扇区数］
```

测试硬盘的读取速度：

```shell
hdparm -T /dev/sda
/dev/sda:
 Timing cached reads:   4684 MB in  2.00 seconds = 2342.92 MB/sec
```

测试硬盘缓存的读取速度：

```shell
hdparm -T /dev/xvda
/dev/xvda:
Timing cached reads: 11154 MB in 1.98 seconds = 5633.44 MB/sec
```

检测硬盘的电源管理模式：

```shell
hdparm -C /dev/sda
/dev/sda:
drive state is: standby [省电模式]
```

查询并设置硬盘多重扇区存取的扇区数，以增进硬盘的存取效率：

```shell
hdparm -m /dev/sda
hdparm -m    #参数值为整数值如8 /dev/sda
```

 **附：硬盘坏道修复方法** 

```shell
检查：smartctl -l selftest /dev/sda
卸载：umount /dev/sda*
修复：badblocks /dev/sda
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->