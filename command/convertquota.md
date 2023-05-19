convertquota
===

把老的配额文件转换为新的格式

## 补充说明

**convertquota命令** 用于将老的磁盘额数据文件（“quota.user”和“quota.group”）转换为新格式的文件（“quota.user”和“quota.group”）。

###  语法

```shell
convertquota(选项)(参数)
```

###  选项

```shell
-u：仅转换用户磁盘配额数据文件；
-g：仅转换组磁盘配额数据文件；
-f：将老的磁盘配额文件转换为新的格式；
-e：将新的文件格式从大字节序换为小字节序。
```

###  参数

文件系统：指定要转换磁盘配额数据文件格式的文件系统（硬盘分区）。

###  实例

使用convertquota指令转换指定文件系统`/data`的磁盘配额数据文件。在命令行中输入下面的命令：

```shell
convertquota -u /data     //转换文件系统"/data"上的用户磁盘配额文件
```


