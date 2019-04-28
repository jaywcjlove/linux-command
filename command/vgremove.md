vgremove
===

用于用户删除LVM卷组

## 补充说明

**vgremove命令** 用于用户删除LVM卷组。当要删除的卷组上已经创建了逻辑卷时，vgremove命令需要进行确认删除，防止误删除数据。

### 语法  

```shell
vgremove(选项)(参数)
```

### 选项  

```shell
-f：强制删除。
```

### 参数  

卷组：指定要删除的卷组名称。

### 实例  

使用vgremove命令删除LVM卷组"vg1000"。在命令行中输入下面的命令：

```shell
[root@localhost ~]# vgremove vg1000    #删除卷组"vg1000"
Volume group "vg1000" successfully removed
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->