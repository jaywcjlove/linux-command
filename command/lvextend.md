lvextend
===

扩展逻辑卷空间

## 补充说明

**lvextend命令** 用于在线扩展逻辑卷的空间大小，而不中断应用程序对逻辑卷的访问。使用lvextend命令动态在线扩展磁盘空间，整个空间扩展过程对于应用程序来说是完全透明的。

### 语法  

```shell
lvextend(选项)(参数)
```

### 选项  

```shell
-L：指定逻辑卷的大小，单位为“kKmMgGtT”字节；
-l：指定逻辑卷的大小（LE数）。
```

### 参数  

逻辑卷：指定要扩展空间的逻辑卷。

### 实例  

使用lvextend命令为逻辑卷`/dev/vg1000/lvol0`增加100M空间。在命令行中输入下面的命令：

```shell
[root@localhost ~]# lvextend -L +100M /dev/vg1000/lvol0    #为了解决增加100M空间
```

输出信息如下：

```shell
Extending logical volume lvol0 to 300.00 MB  
Logical volume lvol0 successfully resized
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->