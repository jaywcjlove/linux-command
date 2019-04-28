lvresize
===

调整逻辑卷空间大小

## 补充说明

**lvresize命令** 用于调整LVM逻辑卷的空间大小，可以增大空间和缩小空间。使用lvresize命令调整逻辑卷空间大小和缩小空间时需要谨慎，因为它有可能导致数据丢失。

### 语法  

```shell
lvresize(选项)(参数)
```

### 选项  

```shell
-L：指定逻辑卷的大小，单位为“kKmMgGtT”字节；
-l：指定逻辑卷的大小（LE数）。
```

### 参数  

逻辑卷：指定要删除的逻辑卷。

### 实例  

使用lvresize命令调整最大的逻辑卷大小。在命令行中输入下面的命令：

```shell
[root@localhost ~]# lvresize -L +200M /dev/vg1000/lvol0     #将逻辑卷空间增加200M
```

输出信息如下：

```shell
Extending logical volume lvol0 to 280.00 MB
Logical volume lvol0 successfully resized
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->