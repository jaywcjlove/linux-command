lvreduce
===

收缩逻辑卷空间

## 补充说明

**lvreduce命令** 用于减少LVM逻辑卷占用的空间大小。使用lvreduce命令收缩逻辑卷的空间大小有可能会删除逻辑卷上已有的数据，所以在操作前必须进行确认。

### 语法  

```shell
lvreduce(选项)(参数)
```

### 选项  

```shell
-L：指定逻辑卷的大小，单位为“kKmMgGtT”字节；
-l：指定逻辑卷的大小（LE数）。
```

### 参数  

逻辑卷：指定要操作的逻辑卷对应的设备文件。

### 实例  

使用lvreduce命令减少指定的逻辑卷的空间大小。在命令行中输入下面的命令：

```shell
[root@localhost ~]# lvreduce -L -50M /dev/vg1000/lvol0     #将逻辑卷的空间大小减少50M
```

输出信息如下：

```shell
......省略部分输出内容......  
Do you really want to reduce lvol0? [y/n]: y  #确认操作  
  Reducing logical volume lvol0 to 252.00 MB  
  Logical volume lvol0 successfully resized
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->