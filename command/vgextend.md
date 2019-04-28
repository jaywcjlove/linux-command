vgextend
===

向卷组中添加物理卷

## 补充说明

**vgextend命令** 用于动态扩展LVM卷组，它通过向卷组中添加物理卷来增加卷组的容量。LVM卷组中的物理卷可以在使用vgcreate命令创建卷组时添加，也可以使用vgextend命令动态的添加。

### 语法  

```shell
vgextend(选项)(参数)
```

### 选项  

```shell
-d：调试模式；
-t：仅测试。
```

### 参数  

*   卷组：指定要操作的卷组名称；
*   物理卷列表：指定要添加到卷组中的物理卷列表。

### 实例  

使用vgextend命令向卷组"vg2000"中添加物理卷。在命令行中输入下面的命令：

```shell
[root@localhost ~]# vgextend vg2000 /dev/sdb2     #将物理卷"/dev/sdb2"加入卷组"vg2000"
```

输出信息如下：

```shell
Volume group "vg2000" successfully extended
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->