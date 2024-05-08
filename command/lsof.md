lsof
===

显示Linux系统当前已打开的所有文件列表 `lsof -p pid`

## 补充说明

**lsof命令** 用于查看你进程打开的文件，打开文件的进程，进程打开的端口(TCP、UDP)。找回/恢复删除的文件。是十分方便的系统监视工具，因为lsof命令需要访问核心内存和各种文件，所以需要root用户执行。

在linux环境下，任何事物都以文件的形式存在，通过文件不仅仅可以访问常规数据，还可以访问网络连接和硬件。所以如传输控制协议 (TCP) 和用户数据报协议 (UDP) 套接字等，系统在后台都为该应用程序分配了一个文件描述符，无论这个文件的本质如何，该文件描述符为应用程序与基础操作系统之间的交互提供了通用接口。因为应用程序打开文件的描述符列表提供了大量关于这个应用程序本身的信息，因此通过lsof工具能够查看这个列表对系统监测以及排错将是很有帮助的。

### 语法

```shell
lsof (选项)
```

### 选项

```shell
-a：列出打开文件存在的进程；
-c<进程名>：列出指定进程所打开的文件；
-g：列出GID号进程详情；
-d<文件号>：列出占用该文件号的进程；
+d<目录>：列出目录下被打开的文件；
+D<目录>：递归列出目录下被打开的文件；
-n<目录>：列出使用NFS的文件；
-i<条件>：列出符合条件的进程（协议、:端口、 @ip ）
-p<进程号>：列出指定进程号所打开的文件；
-u：列出UID号进程详情；
-h：显示帮助信息；
-v：显示版本信息
```

### 实例

```shell
lsof
command     PID USER   FD      type             DEVICE     SIZE       NODE NAME
init          1 root  cwd       DIR                8,2     4096          2 /
init          1 root  rtd       DIR                8,2     4096          2 /
init          1 root  txt       REG                8,2    43496    6121706 /sbin/init
init          1 root  mem       REG                8,2   143600    7823908 /lib64/ld-2.5.so
init          1 root  mem       REG                8,2  1722304    7823915 /lib64/libc-2.5.so
init          1 root  mem       REG                8,2    23360    7823919 /lib64/libdl-2.5.so
init          1 root  mem       REG                8,2    95464    7824116 /lib64/libselinux.so.1
init          1 root  mem       REG                8,2   247496    7823947 /lib64/libsepol.so.1
init          1 root   10u     FIFO               0,17                1233 /dev/initctl
migration     2 root  cwd       DIR                8,2     4096          2 /
migration     2 root  rtd       DIR                8,2     4096          2 /
migration     2 root  txt   unknown                                        /proc/2/exe
ksoftirqd     3 root  cwd       DIR                8,2     4096          2 /
ksoftirqd     3 root  rtd       DIR                8,2     4096          2 /
ksoftirqd     3 root  txt   unknown                                        /proc/3/exe
migration     4 root  cwd       DIR                8,2     4096          2 /
migration     4 root  rtd       DIR                8,2     4096          2 /
migration     4 root  txt   unknown                                        /proc/4/exe
ksoftirqd     5 root  cwd       DIR                8,2     4096          2 /
ksoftirqd     5 root  rtd       DIR                8,2     4096          2 /
ksoftirqd     5 root  txt   unknown                                        /proc/5/exe
events/0      6 root  cwd       DIR                8,2     4096          2 /
events/0      6 root  rtd       DIR                8,2     4096          2 /
events/0      6 root  txt   unknown                                        /proc/6/exe
events/1      7 root  cwd       DIR                8,2     4096          2 /
```

**lsof输出各列信息的意义如下：**

标识 | 说明
:- | :-
`COMMAND` | 进程的名称
`PID` | 进程标识符
`PPID` | 父进程标识符（需要指定-R参数）
`USER` | 进程所有者
`PGID` | 进程所属组
`FD` | 文件描述符，应用程序通过它识别该文件

文件描述符列表：

标识 | 说明
:- | :-
`cwd`  | 表示当前工作目录，即：应用程序的当前工作目录，这是该应用程序启动的目录，除非它本身对这个目录进行更改
`txt`  | 该类型的文件是程序代码，如应用程序二进制文件本身或共享库，如上列表中显示的 /sbin/init 程序
`lnn`  | 库引用 (AIX);
`er`   | FD 信息错误（参见名称栏）
`jld`  | jail 目录 (FreeBSD);
`ltx`  | 共享库文本（代码和数据）
`mxx`  | 十六进制内存映射类型编号xx
`m86`  | DOS合并映射文件
`mem`  | 内存映射文件
`mmap` | 内存映射设备
`pd`   | 父目录
`rtd`  | 根目录
`tr`   | 内核跟踪文件 (OpenBSD)
`v86`  | VP/ix 映射文件
`0`    | 表示标准输出
`1`    | 表示标准输入
`2`    | 表示标准错误

一般在标准输出、标准错误、标准输入后还跟着文件状态模式：

标识 | 说明
:- | :-
`u` | 表示该文件被打开并处于读取/写入模式
`r` | 表示该文件被打开并处于只读模式
`w` | 表示该文件被打开并处于写入模式
`空格` | 表示该文件的状态模式为 unknow，且没有锁定
`-` | 表示该文件的状态模式为 unknow，且被锁定

同时在文件状态模式后面，还跟着相关的锁：

标识 | 说明
:- | :-
`N`     | 对于未知类型的Solaris NFS锁
`r`     | 用于部分文件的读取锁定
`R`     | 对整个文件进行读取锁定
`w`     | 对文件的一部分进行写锁定(文件的部分写锁)
`W`     | 对整个文件进行写锁定(整个文件的写锁)
`u`     | 用于任何长度的读写锁
`U`     | 对于未知类型的锁
`x`     | 对于文件部分的SCO OpenServer Xenix锁
`X`     | 对于整个文件的SCO OpenServer Xenix锁
`space` | 如果没有锁


**文件类型**

标识 | 说明
:- | :-
`DIR` | 表示目录
`CHR` | 表示字符类型
`BLK` | 块设备类型
`UNIX` |  UNIX 域套接字
`FIFO` | 先进先出 (FIFO) 队列
`IPv4` | 网际协议 (IP) 套接字
`DEVICE` | 指定磁盘的名称
`SIZE` | 文件的大小
`NODE` | 索引节点（文件在磁盘上的标识）
`NAME` | 打开文件的确切名称
`REG` | 常规文件

列出指定进程号所打开的文件:

```shell
lsof -p $pid
```

获取端口对应的进程ID=>pid

```shell
lsof -i:9981 -P -t -sTCP:LISTEN
```

列出打开文件的进程:

```shell
lsof $filename
```

查看端口占用
```shell
lsof -i:$port
```

**查看所有打开的文件：**

```
lsof
```

**查看指定进程打开的文件：**

```
lsof -p <PID>
```

**查看指定用户打开的文件：**

```
lsof -u <username>
```

**查看指定文件名相关的进程：**

```
lsof <filename>
```

**查看网络连接相关的进程：**

```
lsof -i
```

**查看指定端口相关的进程：**

```
lsof -i :<port>
```

**查看正在使用某个目录的进程：**

```
lsof +D /path/to/directory
```

**查看被删除但仍然被某个进程打开的文件：**

```
lsof -u +L1
```

**查看某个文件系统上被打开的文件：**

```
lsof /mountpoint
```

**以列表形式显示结果：**

```
lsof -F
```

**显示结果中不包含主机名：**

```
lsof -n
```

**显示结果中不包含进程路径：**

```
lsof -b
```

**以逆序显示结果：**

```
lsof -r
```

**以特定间隔时间循环显示结果：**

```
lsof -r <interval>
```

**以持续模式显示结果：**

```
lsof -t <interval>
```


