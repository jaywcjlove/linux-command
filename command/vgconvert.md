vgconvert
===

转换卷组元数据格式

## 补充说明

**vgconvert命令** 用于转换指定LVM卷组的元数据格式，通常将“LVM1”格式的卷组转换为“LVM2”格式。转换卷组元数据前必须保证卷组处于非活动状态，否则无法完成转换操作。

###  语法

```shell
vgconvert(选项)(参数)
```

###  选项

```shell
-M：要转换的卷组格式。
```

###  参数

卷组：指定要转换格式的卷组。

###  实例

转换卷组元数据格式前，使用vgchange命令将卷组设置为非活动状态。在命令行中输入下面的命令：

```shell
[root@localhost lvm]# vgchange -an vg1000    #设置卷组状态为非活动状态
0 logical volume(s) in volume group "vg1000" now active 

```shell

使用vgconvert命令将卷组"vg1000"从"LVM1"格式转换为"LVM2"格式。在命令行中输入下面的命令：

```shell
[root@localhost lvm]# vgconvert -M2 vg1000    #转换卷组为"LVM2"格式
Volume group vg1000 successfully converted
```

使用vgchange命令将卷组设置为活动状态。在命令行中输入下面的命令：

```shell
[root@localhost lvm]# vgchange -ay vg1000     #设置卷组状态为活动状态
0 logical volume(s) in volume group "vg1000" now active
```


