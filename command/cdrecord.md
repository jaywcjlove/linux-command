cdrecord
===

Linux系统下光盘刻录功能命令

## 补充说明

**cdrecord命令** 用于Linux系统下光盘刻录，它支持cd和DVD格式。linux下一般都带有cdrecord软件。

###  语法

```shell
cdrecord(选项)(参数)
```

###  选项

```shell
-v：显示刻录光盘的详细过程；
-eject：刻录完成后弹出光盘；
speed=<刻录倍速>：指定光盘刻录的倍速；
dev=<刻录机设备号>：指定使用“-scanbus”参数扫描到的刻录机的设备号；
-scanbus：扫描系统中可用的刻录机。
```

###  参数

ISO文件：指定刻录光盘使用的ISO映像文件。

###  实例

查看系统所有 CD-R(w) 设备：

```shell
cdrecord -scanbus
scsibus0:
  0,0,0     0) *
  0,1,0     1) *
  0,2,0     2) *
  0,3,0     3) 'HP      ' 'CD-Writer+ 9200 ' '1.0c' Removable CD-ROM
```

用iso文件刻录一张光盘：

```shell
cdrecord -v -eject speed=4 dev=0,3,0 backup.iso
```

参数解释

* -v：显示刻录光盘的详细过程
* -eject：刻完自动弹出光盘
* speed=4 dev=0,3,0：四速刻录到HP CD-writer设备上。

擦写光驱：

```shell
cdrecord --dev=0,3,0 --blank=fast
```


