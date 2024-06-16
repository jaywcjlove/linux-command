lvcreate
===

用于创建LVM的逻辑卷

## 补充说明

**lvcreate命令** 用于创建LVM的逻辑卷。逻辑卷是创建在卷组之上的。逻辑卷对应的设备文件保存在卷组目录下，例如：在卷组"vg1000"上创建一个逻辑卷"lvol0"，则此逻辑卷对应的设备文件为"/dev/vg1000/lvol0"。

###  语法

```shell
lvcreate(选项)(参数)
```

###  选项

```shell
-n: 指定逻辑卷的名称
-L：指定逻辑卷的大小，单位为“kKmMgGtT”字节；
-l：指定逻辑卷的大小（LE数）。
```

###  参数

逻辑卷：指定要创建的逻辑卷名称。

###  实例

使用lvcreate命令在卷组"vg1000"上创建一个200MB的逻辑卷。在命令行中输入下面的命令：

```shell
[root@localhost ~]# lvcreate -L 200M -n lvol0 vg1000    #创建大小为200M的逻辑卷
```

输出信息如下：

```shell
Logical volume "lvol0" created
```

说明：创建成功后，新的逻辑卷"lvol0"，将通过设备文件`/dev/vg1000/lvol0`进行访问。


