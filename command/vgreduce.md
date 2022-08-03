vgreduce
===

从卷组中删除物理卷

## 补充说明

**vgreduce命令** 通过删除LVM卷组中的物理卷来减少卷组容量。不能删除LVM卷组中剩余的最后一个物理卷。

### 语法

```shell
vgreduce(选项)(参数)
```

### 选项

```shell
-a：如果命令行中没有指定要删除的物理卷，则删除所有的空物理卷；
--removemissing：删除卷组中丢失的物理卷，使卷组恢复正常状态。
```

### 参数

*   卷组：指定要操作的卷组名称；
*   物理卷列表：指定要删除的物理卷列表。

### 实例

使用vgreduce命令从卷组"vg2000"中移除物理卷`/dev/sdb2`。在命令行中输入下面的命令：

```shell
[root@localhost ~]# vgreduce vg2000 /dev/sdb2    #将物理卷"/dev/sdb2"从卷组"vg2000"中删除
```

输出信息如下：

```shell
Removed "/dev/sdb2" from volume group "vg2000"
```


