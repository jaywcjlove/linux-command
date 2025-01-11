column
===

按列格式化输出文件

## 概要

```shell
column [options] [file ...]
```

## 主要用途

- 将单列数据整理为多列显示，每行宽度可以指定，超出的部分自动换行。
- 将多列数据进行快速整理，对齐每列的字符。

## 参数

file（可选），当没有指定文件时，默认会从标准输入读取，因此可以配合管道符使用。

## 选项

```shell
-c, --columns <width>           输出宽度（以字符数表示）
-t, --table                     创建一个表格（每列字符会对齐）
-s, --separator <string>        指定识别表格的分隔符
-o, --output-separator <string> 输出表格的列分隔符，默认为两个空格
-x, --fillrows                  在列之前填充行
-N, --table-columns <names>     添加列名（逗号分隔）
-J  --json                      格式化为JSON输出（需要配合-N/--table-columns使用）
-h, --help                      显示此帮助
-V, --version                   输出版本信息
```

## 返回值

格式化排列后的字符串。

## 示例

- 整理单列数据

```shell
# 生成 26 个英文字母， 每列一个
$ for a in {a..z}; do echo $a; done > test

# 每行最大 60 个字符
$ cat test | column -c 60
a       e       i       m       q       u       y
b       f       j       n       r       v       z
c       g       k       o       s       w
d       h       l       p       t       x

# 在上面的基础上，进一步整理，每列之间宽度默认两个空白符
$ cat test | column -c 60 | column -t
a  e  i  m  q  u  y
b  f  j  n  r  v  z
c  g  k  o  s  w
d  h  l  p  t  x

# 指定每列之间用 ', ' 拼接
$ cat test | column -c 60 | column -t -o ', '
a, e, i, m, q, u, y
b, f, j, n, r, v, z
c, g, k, o, s, w
d, h, l, p, t, x
```

- 整理多列数据

```shell
# 现有如下内容较为凌乱的文本文件 test
$ cat test
Address[0] Metal3,pin 133.175:159.92
Address[1] Metal3,pin 112.38:159.92
Address[2] Metal3,pin 70.775:159.92
Address[3] Metal3,pin 41.655:159.92
DataIn[0] Metal3,pin 66.615:159.92
DataIn[1] Metal3,pin 37.495:159.92
DataIn[2] Metal3,pin 122.88:159.92
DataIn[3] Metal3,pin 95.74:159.92
DataOut[0] Metal3,pin 45.815:159.92
DataOut[1] Metal3,pin 79.095:159.92
DataOut[2] Metal3,pin 104.055:159.92
DataOut[3] Metal3,pin 62.46:159.92
MemReq Metal3,pin 108.215:159.92
RdWrBar Metal3,pin 87.415:159.92
clock Metal3,pin 74.935:159.92

# 列对齐
$ cat test | column -t
Address[0]  Metal3,pin  133.175:159.92
Address[1]  Metal3,pin  112.38:159.92
Address[2]  Metal3,pin  70.775:159.92
Address[3]  Metal3,pin  41.655:159.92
DataIn[0]   Metal3,pin  66.615:159.92
DataIn[1]   Metal3,pin  37.495:159.92
DataIn[2]   Metal3,pin  122.88:159.92
DataIn[3]   Metal3,pin  95.74:159.92
DataOut[0]  Metal3,pin  45.815:159.92
DataOut[1]  Metal3,pin  79.095:159.92
DataOut[2]  Metal3,pin  104.055:159.92
DataOut[3]  Metal3,pin  62.46:159.92
MemReq      Metal3,pin  108.215:159.92
RdWrBar     Metal3,pin  87.415:159.92
clock       Metal3,pin  74.935:159.92

# 将 ',' 和 ':' 也识别为分隔符
$ cat test | column -t -s ',: '
Address[0]  Metal3  pin  133.175  159.92
Address[1]  Metal3  pin  112.38   159.92
Address[2]  Metal3  pin  70.775   159.92
Address[3]  Metal3  pin  41.655   159.92
DataIn[0]   Metal3  pin  66.615   159.92
DataIn[1]   Metal3  pin  37.495   159.92
DataIn[2]   Metal3  pin  122.88   159.92
DataIn[3]   Metal3  pin  95.74    159.92
DataOut[0]  Metal3  pin  45.815   159.92
DataOut[1]  Metal3  pin  79.095   159.92
DataOut[2]  Metal3  pin  104.055  159.92
DataOut[3]  Metal3  pin  62.46    159.92
MemReq      Metal3  pin  108.215  159.92
RdWrBar     Metal3  pin  87.415   159.92
clock       Metal3  pin  74.935   159.92
```

- 添加列名并以JSON格式输出

```shell
$ column -J -s ":" -N "Username,Password,UID,GID,Gecos,HomeDirectory,Shell" /etc/passwd
{
   "table": [
      {
         "username": "root",
         "password": "x",
         "uid": "0",
         "gid": "0",
         "gecos": "root",
         "homedirectory": "/root",
         "shell": "/bin/bash"
      },{
         "username": "daemon",
         "password": "x",
         "uid": "1",
         "gid": "1",
         "gecos": "daemon",
         "homedirectory": "/usr/sbin",
         "shell": "/usr/sbin/nologin"
      },{
         "username": "bin",
         "password": "x",
         "uid": "2",
         "gid": "2",
         "gecos": "bin",
         "homedirectory": "/bin",
         "shell": "/usr/sbin/nologin"
      },{
         "username": "sys",
         "password": "x",
         "uid": "3",
         "gid": "3",
         "gecos": "sys",
         "homedirectory": "/dev",
         "shell": "/usr/sbin/nologin"
      },{
         "username": "sync",
         "password": "x",
         "uid": "4",
         "gid": "65534",
         "gecos": "sync",
         "homedirectory": "/bin",
         "shell": "/bin/sync"
      }
   ]
}
```
