lvremove
===

删除指定LVM逻辑卷

## 补充说明

**lvremove命令** 用于删除指定LVM逻辑卷。如果逻辑卷已经使用mount命令加载，则不能使用lvremove命令删除。必须使用umount命令卸载后，逻辑卷方可被删除。

### 语法  

```shell
lvremove(选项)(参数)
```

### 选项  

```shell
-f：强制删除。
```

### 参数  

逻辑卷：指定要删除的逻辑卷。

### 实例  

使用lvremove命令删除指定的逻辑卷。在命令行中输入下面的命令：

```shell
[root@localhost ~]# lvremove /dev/vg1000/lvol0    #删除逻辑卷"lvol0"
```

输出信息如下：

```shell
Do you really want to remove active logical 
volume "lvol0"? [y/n]: y    #确认删除
  Logical volume "lvol0" successfully removed
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->