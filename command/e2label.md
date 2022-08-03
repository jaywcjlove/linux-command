e2label
===

设置第二扩展文件系统的卷标

## 补充说明

**e2label命令** 用来设置第二扩展文件系统的卷标。

###  语法

```shell
e2label(参数)
```

###  参数

*   文件系统：指定文件系统所对应的设备文件名；
*   新卷标：为文件系统指定新卷标。

###  实例

许多用了多年Linux的人可能也没有用过e2label命令。但是这个命令相当有效。在介绍它之前,我们先看看`/etc/fstab文`件：

```shell
label=//ext3 defaults 1 1
/dev/hda7 /usr ext3 defaults 1 1
```

第二行的意思很容易懂，就是把`/dev/hda7` mount到`/usr`上。第一行没有指明分区，意思是把label(卷标)为/ 的分区mount到/上。这样写的好处在于即使如果把硬盘从主板上的ide0(hda) 换到ide2(hdc)上，系统仍然可以自动挂载正确的分区。通常Linux安装的时候已经自动指定了卷标。如果是手动增加的新分区，可以用下边的命令为 其指定卷标：

```shell
e2label /dev/hdax /new
mkdir /new
```

然后在`/etc/fstab`里加入：

```shell
label=/new  /new  ext3  defaults  1 1
```

下次重新起动机器的时候，就会把卷标为`/new`的分区挂接到`/new`上。


