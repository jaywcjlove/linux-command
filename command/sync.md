sync
===

用于强制被改变的内容立刻写入磁盘

## 补充说明

**sync命令** 用于强制被改变的内容立刻写入磁盘，更新超块信息。

在Linux/Unix系统中，在文件或数据处理过程中一般先放到内存缓冲区中，等到适当的时候再写入磁盘，以提高系统的运行效率。sync命令则可用来强制将内存缓冲区中的数据立即写入磁盘中。用户通常不需执行sync命令，系统会自动执行update或bdflush操作，将缓冲区的数据写 入磁盘。只有在update或bdflush无法执行或用户需要非正常关机时，才需手动执行sync命令。

### 语法  

```shell
sync(选项)
```

### 选项  

```shell
--help：显示帮助；
 --version：显示版本信息。
```

### buffer与cache  

*   buffer：为了解决写磁盘的效率
*   cache：为了解决读磁盘的效率

linux系统为了提高读写磁盘的效率，会先将数据放在一块buffer中。在写磁盘时并不是立即将数据写到磁盘中，而是先写入这块buffer中了。此时如果重启系统，就可能造成数据丢失。

sync命令用来flush文件系统buffer，这样数据才会真正的写到磁盘中，并且buffer才能够释放出来，flush就是用来清空buffer。sync命令会强制将数据写入磁盘中，并释放该数据对应的buffer，所以常常会在写磁盘后输入sync命令来将数据真正的写入磁盘。

如果不去手动的输入sync命令来真正的去写磁盘，linux系统也会周期性的去sync数据。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->