lvdisplay
===

显示逻辑卷属性

## 补充说明

**lvdisplay命令** 用于显示LVM逻辑卷空间大小、读写状态和快照信息等属性。如果省略"逻辑卷"参数，则lvdisplay命令显示所有的逻辑卷属性。否则，仅显示指定的逻辑卷属性。

###  语法

```shell
lvdisplay(参数)
```

###  参数

逻辑卷：指定要显示属性的逻辑卷对应的设备文件。

###  实例

使用lvdisplay命令显示指定逻辑卷的属性。在命令行中输入下面的命令：

```shell
[root@localhost ~]# lvdisplay /dev/vg1000/lvol0     #显示逻辑卷属性
```

输出信息如下：

```shell
  --- Logical volume ---  
  LV Name                /dev/vg1000/lvol0  
......省略部分输出内容......  
  Block device           253:0
```


