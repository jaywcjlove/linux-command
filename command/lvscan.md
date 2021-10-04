lvscan
===

扫描逻辑卷

## 补充说明

**lvscan命令** 用于扫描当前系统中存在的所有的LVM逻辑卷。使用lvscan指令可以发现系统中的所有逻辑卷，及其对应的设备文件。

###  语法

```shell
lvscan(选项)
```

###  选项

```shell
-b：显示逻辑卷的主设备和次设备号。
```

###  实例

使用lvscan命令扫描系统中的所有逻辑卷。在命令行中输入下面的命令：

```shell
[root@localhost ~]# lvscan     #扫描所有的逻辑卷
```

输出信息如下：

```shell
ACTIVE          '/dev/vg1000/lvol0' [200.00 MB] inherit
```


