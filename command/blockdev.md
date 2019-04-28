blockdev
===

从命令行调用区块设备控制程序

## 补充说明

**blockdev命令** 在命令调用“ioxtls”函数，以实现对设备的控制。

### 语法  

```shell
blockdev(选项)(参数)
```

选项

```shell
-V：打印版本号并退出；
-q：安静模式；
-v：详细信息模式；
--setro：只读；
--setrw：只写；
--getro：打印只读状态，“1”表示只读，“0”表示非只读；
--getss：打印扇区大小。通常为521；
--flushbufs：刷新缓冲区；
--rereadpt：重新读取分区表。
```

### 参数  

设备文件名：指定要操作的磁盘的设备文件名。

### 实例  

设置设备为只读：

```shell
blockdev --setro /dev/hda4
```

读取设备是否为只读：

```shell
blockdev --getro /dev/hda4
```

设置设别为可读写：

```shell
blockdev --setrw /dev/hda4
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->