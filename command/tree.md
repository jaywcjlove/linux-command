tree
===

树状图列出目录的内容

## 补充说明

**tree命令** 以树状图列出目录的内容。

### 语法

```shell
tree(选项)(参数)
```

### 选项

```shell
------- 列表选项 -------
-a            # 显示所有文件和目录。
-d            # 显示目录名称而非文件。
-l            # 如遇到性质为符号连接的目录，直接列出该连接所指向的原始目录。
-f            # 在每个文件或目录之前，显示完整的相对路径名称。
-x            # 将范围局限在现行的文件系统中，若指定目录下的某些子目录，其存放于另一个文件系统上，则将该目录予以排除在寻找范围外。
-L level      # 限制目录显示层级。
-R            # Rerun tree when max dir level reached.
-P pattern    # <范本样式> 只显示符合范本样式的文件和目录名称。
-I pattern    # Do not list files that match the given pattern.
--ignore-case # Ignore case when pattern matching.
--matchdirs   # Include directory names in -P pattern matching.
--noreport    # Turn off file/directory count at end of tree listing.
--charset X   # Use charset X for terminal/HTML and indentation line output.
--filelimit # # Do not descend dirs with more than # files in them.
--timefmt <f> # Print and format time according to the format <f>.
-o filename   # Output to file instead of stdout.
-------- 文件选项 ---------
-q            # 用“？”号取代控制字符，列出文件和目录名称。
-N            # 直接列出文件和目录名称，包括控制字符。
-Q            # Quote filenames with double quotes.
-p            # 列出权限标示。
-u            # 列出文件或目录的拥有者名称，没有对应的名称时，则显示用户识别码。
-g            # 列出文件或目录的所属群组名称，没有对应的名称时，则显示群组识别码。
-s            # 列出文件和目录大小。
-h            # Print the size in a more human readable way.
--si          # Like -h, but use in SI units (powers of 1000).
-D            # 列出文件或目录的更改时间。
-F            # 在执行文件，目录，Socket，符号连接，管道名称名称，各自加上"*"，"/"，"@"，"|"号。
--inodes      # Print inode number of each file.
--device      # Print device ID number to which each file belongs.
------- 排序选项 -------
-v            # Sort files alphanumerically by version.
-t            # 用文件和目录的更改时间排序。
-c            # Sort files by last status change time.
-U            # Leave files unsorted.
-r            # Reverse the order of the sort.
--dirsfirst   # List directories before files (-U disables).
--sort X      # Select sort: name,version,size,mtime,ctime.
------- 图形选项 ------
-i            # 不以阶梯状列出文件和目录名称。
-A            # 使用ASNI绘图字符显示树状图而非以ASCII字符组合。
-S            # Print with CP437 (console) graphics indentation lines.
-n            # Turn colorization off always (-C overrides).
-C            # 在文件和目录清单加上色彩，便于区分各种类型。
------- XML / HTML / JSON选项 -------
-X            # Prints out an XML representation of the tree.
-J            # Prints out an JSON representation of the tree.
-H baseHREF   # Prints out HTML format with baseHREF as top directory.
-T string     # Replace the default HTML title and H1 header with string.
--nolinks     # Turn off hyperlinks in HTML output.
---- 杂项选项 ----
--version     # 输入版本信息。
--help        # 打印使用帮助信息。
--            # Options processing terminator.
```

### 参数

目录：执行tree指令，它会列出指定目录下的所有文件，包括子目录里的文件。


### 实例

列出目录`/private/` 第一级文件名

```shell
tree  /private/ -L 1
/private/
├── etc
├── tftpboot
├── tmp
└── var
```

忽略文件夹

```shell
tree -I node_modules # 忽略当前目录文件夹node_modules
tree -P node_modules # 列出当前目录文件夹node_modules的目录结构
tree -P node_modules -L 2 # 显示目录node_modules两层的目录树结构
tree -L 2 > /home/www/tree.txt # 当前目录结果存到 tree.txt 文件中
```

忽略多个文件夹

```shell
tree -I 'node_modules|icon|font' -L 2
```

非树状结构列出目录`/private/`下的所有文件

```
tree -if /private/
/private
/private/a1
/private/a2
/private/etc
/private/etc/b1
/private/etc/b2
/private/tftpboot
```

显示所有文件目录(包括隐藏文件)并忽略(node_modules|.git)目录，展示(`-L 2`)两层。

```shell
$ tree -I 'node_modules|.git' -L 2 -a

.
├── .github
│   └── workflows
├── LICENSE
├── README.md
└── renovate.json
```


