pvremove
===

删除一个存在的物理卷

## 补充说明

**pvremove命令** 用于删除一个存在的物理卷。使用pvremove指令删除物理卷时，它将LVM分区上的物理卷信息删除，使其不再被视为一个物理卷。

###  语法

```shell
pvremove(选项)(参数)
```

###  选项

```shell
-d # 调试模式；
-f # 强制删除；
-y # 对提问回答“yes”。
```

###  参数

物理卷：指定要删除的物理卷对应的设备文件名。

###  实例

使用pvremove指令删除物理卷`/dev/sdb2`。在命令行中输入下面的命令：

```shell
pvremove /dev/sdb2 # 删除物理卷
Labels on physical volume "/dev/sdb2" successfully wiped
```


