vgchange
===

修改卷组属性

## 补充说明

**vgchange命令** 用于修改卷组的属性，经常被用来设置卷组是处于活动状态或非活动状态。处于活动状态的卷组无法被删除，必须使用vgchange命令将卷组设置为非活动状态后才能删除。

###  语法

```shell
vgchange(选项)(参数)
```

###  选项

```shell
-a：设置卷组的活动状态。
```

###  参数

卷组：指定要设置属性的卷组。

###  实例

使用vgchange命令将卷组状态改为活动的。在命令行中输入下面的命令：

```shell
[root@localhost ~]# vgchange -ay vg1000     #将卷组"vg1000"设置为活动状态
```

输出信息如下：

```shell
1 logical volume(s) in volume group "vg1000" now active
```


