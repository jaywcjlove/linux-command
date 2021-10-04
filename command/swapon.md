swapon
===

激活Linux系统中交换空间

## 补充说明

**swapon命令** 用于激活Linux系统中交换空间，Linux系统的内存管理必须使用交换区来建立虚拟内存。

###  语法

```shell
swapon(选项)(参数)
```

###  选项

```shell
-a：将/etc/fstab文件中所有设置为swap的设备，启动为交换区；
-h：显示帮助；
-p<优先顺序>：指定交换区的优先顺序；
-s：显示交换区的使用状况；
-V：显示版本信息。
```

###  参数

交换空间：指定需要激活的交换空间，可以是交换文件和交换分区，如果是交换分区则指定交换分区对应的设备文件。

###  实例

```shell
mkswap -c /dev/hdb4 （-c是检查有无坏块）
swapon -v /dev/hdb4
swapon -s
Filename                                type            Size    Used    Priority
/dev/hda5                               partition       506008 96      -1
/dev/hdb4                               partition       489972 0       -2
```


