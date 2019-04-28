findfs
===

标签或UUID查找文件系统

## 补充说明

**findfs命令** 依据卷标（Label）和UUID查找文件系统所对应的设备文件。findfs命令会搜索整个磁盘，看是否有匹配的标签或者UUID没有，如果有则打印到标注输出上。findfs命令也是e2fsprogs项目的一部分。

### 语法  

```shell
findfs(参数)
```

### 参数  

`LABEL=<卷标>`或者`UUID=<UUID>`：按照卷标或者UUID查询文件系统。

### 实例  

通过卷标名查找对应的文件系统：

```shell
findfs LABEL=/boot
/dev/hda1
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->