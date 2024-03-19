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
-a, --all                              显示目录中个别文件的大小。
-B, --block-size=大小                  使用指定字节数的块
-b, --bytes                            显示目录或文件大小时，以byte为单位。
-c, --total                            除了显示个别目录或文件的大小外，同时也显示所有目录或文件的总和。
-D, --dereference-args                 显示指定符号链接的源文件大小。
-d, --max-depth=N                      限制文件夹深度
-H, --si                               与-h参数相同，但是K，M，G是以1000为换算单位。
-h, --human-readable                   以K，M，G为单位，提高信息的可读性。
-k, --kilobytes                        以KB(1024bytes)为单位输出。
-l, --count-links                      重复计算硬件链接的文件。
-m, --megabytes                        以MB为单位输出。
-L<符号链接>, --dereference<符号链接>  显示选项中所指定符号链接的源文件大小。
-P, --no-dereference                   不跟随任何符号链接(默认)
-0, --null                             将每个空行视作0 字节而非换行符
-S, --separate-dirs                    显示个别目录的大小时，并不含其子目录的大小。
-s, --summarize                        仅显示总计，只列出最后加总的值。
-x, --one-file-xystem                  以一开始处理时的文件系统为准，若遇上其它不同的文件系统目录则略过。
-X<文件>, --exclude-from=<文件>        在<文件>指定目录或文件。
--apparent-size                        显示表面用量，而并非是磁盘用量；虽然表面用量通常会小一些，但有时它会因为稀疏文件间的"洞"、内部碎片、非直接引用的块等原因而变大。
--files0-from=F                        计算文件F中以NUL结尾的文件名对应占用的磁盘空间如果F的值是"-"，则从标准输入读入文件名
--exclude=<目录或文件>                 略过指定的目录或文件。
--max-depth=N                          显示目录总计(与--all 一起使用计算文件)当N为指定数值时计算深度为N，等于0时等同--summarize
--si                                   类似-h，但在计算时使用1000 为基底而非1024
--time                                 显示目录或该目录子目录下所有文件的最后修改时间
--time=WORD                            显示WORD时间，而非修改时间：atime，access，use，ctime 或status
--time-style=样式                      按照指定样式显示时间(样式解释规则同"date"命令)：full-iso，long-iso，iso，+FORMAT
--help                                 显示此帮助信息并退出
--version                              显示版本信息并退出
```

### 实例

文件从大到小排序
```
ubuntu@VM-0-14-ubuntu:~/git-work/linux-command$ du -sh * |sort -rh
2.9M    command
1.9M    assets
148K    template
72K     package-lock.json
52K     dist
28K     build
16K     README.md
4.0K    renovate.json
4.0K    package.json
4.0K    LICENSE
```

只显示当前目录下子目录的大小。

```shell
ubuntu@VM-0-14-ubuntu:~/git-work/linux-command$ du -sh ./*/
1.9M    ./assets/
28K     ./build/
2.9M    ./command/
52K     ./dist/
148K    ./template/
```

查看指定目录下文件所占的空间：

```shell
ubuntu@VM-0-14-ubuntu:~/git-work/linux-command/assets$ du ./*
144     ./alfred.png
452     ./chrome-extensions.gif
4       ./dash-icon.png
1312    ./Linux.gif
16      ./qr.png
```

只显示总和的大小:

```shell
ubuntu@VM-0-14-ubuntu:~/git-work/linux-command/assets$ du -s .
1932    .
```

显示总和的大小且易读:

```shell
ubuntu@VM-0-14-ubuntu:~/git-work/linux-command/assets$ du -sh .
1.9M    .
```


