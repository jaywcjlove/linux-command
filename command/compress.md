compress
===

使用Lempress-Ziv编码压缩数据文件

## 补充说明

**compress命令** 使用“Lempress-Ziv”编码压缩数据文件。compress是个历史悠久的压缩程序，文件经它压缩后，其名称后面会多出".Z"的扩展名。当要解压缩时，可执行uncompress指令。事实上uncompress是指向compress的符号连接，因此不论是压缩或解压缩，都可通过compress指令单独完成。

### 语法  

```shell
compress(选项)(参数)
```

### 选项  

```shell
-f：不提示用户，强制覆盖掉目标文件；
-c：将结果送到标准输出，无文件被改变；
-r：递归的操作方式；
-b<压缩效率>：压缩效率是一个介于9~16的数值，预设值为"16"，指定愈大的数值，压缩效率就愈高；
-d：对文件进行解压缩而非压缩；
-v：显示指令执行过程；
-V：显示指令版本及程序预设值。
```

### 参数  

文件：指定要压缩的文件列表。

### 实例  

将`/etc/man.config`复到`/tmp` ，并加以压缩

```shell
[root@localhost ~]# cd /tmp
[root@localhost tmp]# cp /etc/man.config .
[root@localhost tmp]# compress man.config
[root@localhost tmp]# ls -l
```

```shell
-rw-r--r-- 1 root root 2605 Jul 27 11:43 man.config.Z
```

将刚刚的压缩档解开

```shell
[root@localhost tmp]# compress -d man.config.Z
```

将 man.config 压缩成另外一个文件来备份

```shell
[root@localhost tmp]# compress -c man.config > man.config.back.Z
[root@localhost tmp]# ll man.config*
```

```shell
-rw-r--r-- 1 root root 4506 Jul 27 11:43 man.config
-rw-r--r-- 1 root root 2605 Jul 27 11:46 man.config.back.Z
```

这个`-c`的选项比较有趣！会将压缩过程的资料输出到屏幕上，而不是写入成为file.Z文件。所以，我们可以透过资料流重导向的方法将资料输出成为另一个档名。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->