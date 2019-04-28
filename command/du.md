du
===

显示每个文件和目录的磁盘使用空间

## 补充说明

**du命令** 也是查看使用空间的，但是与df命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看，还是和df命令有一些区别的。

### 语法

```shell
du [选项][文件]
```

### 选项

```shell
-a或-all 显示目录中个别文件的大小。
-b或-bytes 显示目录或文件大小时，以byte为单位。
-c或--total 除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。
-k或--kilobytes 以KB(1024bytes)为单位输出。
-m或--megabytes 以MB为单位输出。
-s或--summarize 仅显示总计，只列出最后加总的值。
-h或--human-readable 以K，M，G为单位，提高信息的可读性。
-x或--one-file-xystem 以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
-L<符号链接>或--dereference<符号链接> 显示选项中所指定符号链接的源文件大小。
-S或--separate-dirs 显示个别目录的大小时，并不含其子目录的大小。
-X<文件>或--exclude-from=<文件> 在<文件>指定目录或文件。
--exclude=<目录或文件> 略过指定的目录或文件。
-D或--dereference-args 显示指定符号链接的源文件大小。
-H或--si 与-h参数相同，但是K，M，G是以1000为换算单位。
-l或--count-links 重复计算硬件链接的文件。
```

### 实例

显示目录或者文件所占空间：

```shell
root@localhost [test]# du
608 ./test6
308 ./test4
4 ./scf/lib
4 ./scf/service/deploy/product
4 ./scf/service/deploy/info
12 ./scf/service/deploy
16 ./scf/service
4 ./scf/doc
4 ./scf/bin
32 ./scf
8 ./test3
1288 .
```

只显示当前目录下面的子目录的目录大小和当前目录的总的大小，最下面的1288为当前目录的总大小

显示指定文件所占空间：

```shell
[root@localhost test]# du log2012.log
300 log2012.log
```

查看指定目录的所占空间：

```shell
[root@localhost test]# du scf
4 scf/lib
4 scf/service/deploy/product
4 scf/service/deploy/info
12 scf/service/deploy
16 scf/service
4 scf/doc
4 scf/bin
32 scf
```

显示多个文件所占空间：

```shell
[root@localhost test]# du log30.tar.gz log31.tar.gz
4 log30.tar.gz
4 log31.tar.gz
```

只显示总和的大小:

```shell
[root@localhost test]# du -s
1288 .

[root@localhost test]# du -s scf
32 scf

[root@localhost test]# cd ..
[root@localhost soft]# du -s test
1288 test
```

显示总和的大小且易读:

```shell
du -sh $dir
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->