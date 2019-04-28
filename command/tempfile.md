tempfile
===

shell中给临时文件命名

## 补充说明

有时候在写Shell脚本的时候需要一些临时存储数据的才做，最适合存储临时文件数据的位置就是`/tmp`，因为该目录中所有的内容在系统重启后就会被清空。下面是两种方法为临时数据生成标准的文件名。

### tempfile命令  

`tempfile命令`只有在基于Debian的发行版中才默认自带，比如Ubuntu，其他发行版没有这个命令。

用tempfile命令为一个临时文件命名：

```shell
temp_file_name=$(tempfile)
```

用一个加带了随机数的文件名作为临时文件命名：

```shell
temp_file_name="/tmp/file_$RANDOM"
```

$RANDOM是一个返回随机数的环境变量。

### $$变量  

如果没有tempfile命令的Linux发行版，也可以使用自己的临时文件名：

```shell
temp_file_name="/tmp/file.$"
```

`$$`是系统预定义变量，显示当前所在进程的进程号，用`.$$`作为添加的后缀会被扩展成当前运行脚本的进程id。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->