vgcreate
===

用于创建LVM卷组

## 补充说明

**vgcreate命令** 用于创建LVM卷组。卷组（Volume Group）将多个物理卷组织成一个整体，屏蔽了底层物理卷细节。在卷组上创建逻辑卷时不用考虑具体的物理卷信息。

###  语法

```shell
vgcreate(选项)(参数)
```

###  选项

```shell
-l：卷组上允许创建的最大逻辑卷数；
-p：卷组中允许添加的最大物理卷数；
-s：卷组上的物理卷的PE大小。
```

###  参数

*   卷组名：要创建的卷组名称；
*   物理卷列表：要加入到卷组中的物理卷列表。

###  实例

使用vgcreate命令创建卷组 "vg1000"，并且将物理卷`/dev/sdb1`和`/dev/sdb2`添加到卷组中。在命令行中输入下面的命令：

```shell
[root@localhost ~]# vgcreate vg1000 /dev/sdb1 /dev/sdb2  #创建卷组"vg1000"
```

输出信息如下：

```shell
Volume group "vg1000" successfully created
```


