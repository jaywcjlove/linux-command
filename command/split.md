split
===

分割任意大小的文件

## 补充说明

**split命令** 可以将一个大文件分割成很多个小文件，有时需要将文件分割成更小的片段，比如为提高可读性，生成日志等。

###  选项

```shell
-b：值为每一输出档案的大小，单位为 byte。
-C：每一输出档中，单行的最大 byte 数。
-d：使用数字作为后缀。
-l：值为每一输出档的行数大小。
-a：指定后缀长度(默认为2)。
```

###  实例

生成一个大小为100KB的测试文件：

```shell
[root@localhost split]# dd if=/dev/zero bs=100k count=1 of=date.file
1+0 records in
1+0 records out
102400 bytes (102 kB) copied, 0.00043 seconds, 238 MB/s
```

使用split命令将上面创建的date.file文件分割成大小为10KB的小文件：

```shell
[root@localhost split]# split -b 10k date.file 
[root@localhost split]# ls
date.file  xaa  xab  xac  xad  xae  xaf  xag  xah  xai  xaj
```

文件被分割成多个带有字母的后缀文件，如果想用数字后缀可使用-d参数，同时可以使用-a length来指定后缀的长度：

```shell
[root@localhost split]# split -b 10k date.file -d -a 3
[root@localhost split]# ls
date.file  x000  x001  x002  x003  x004  x005  x006  x007  x008  x009
```

为分割后的文件指定文件名的前缀：

```shell
[root@localhost split]# split -b 10k date.file -d -a 3 split_file
[root@localhost split]# ls
date.file  split_file000  split_file001  split_file002  split_file003  split_file004  split_file005  split_file006  split_file007  split_file008  split_file009
```

使用-l选项根据文件的行数来分割文件，例如把文件分割成每个包含10行的小文件：

```shell
split -l 10 date.file
```



