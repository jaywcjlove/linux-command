ls
===

显示目录内容列表

## 补充说明

**ls命令** 用来显示目标列表，在Linux中是使用率较高的命令。ls命令的输出信息可以进行彩色加亮显示，以分区不同类型的文件。

### 语法  

```
ls（选项）（参数）
```

### 选项  

```

-a, --all     不隐藏任何以. 开始的项目
-A, --almost-all    列出除. 及.. 以外的任何项目
    --author      与-l 同时使用时列出每个文件的作者
-b, --escape      以八进制溢出序列表示不可打印的字符
    --block-size=SIZE      scale sizes by SIZE before printing them; e.g.,
                             '--block-size=M' prints sizes in units of
                             1,048,576 bytes; see SIZE format below
-B, --ignore-backups       do not list implied entries ending with ~
-c                         with -lt: sort by, and show, ctime (time of last
                             modification of file status information);
                             with -l: show ctime and sort by name;
                             otherwise: sort by ctime, newest first
-C                         list entries by columns
    --color[=WHEN]         colorize the output; WHEN can be 'never', 'auto',
                             or 'always' (the default); more info below
-d, --directory            list directories themselves, not their contents
-D, --dired                generate output designed for Emacs' dired mode
-f                         do not sort, enable -aU, disable -ls --color
-F, --classify             append indicator (one of */=>@|) to entries
    --file-type            likewise, except do not append '*'
    --format=WORD          across -x, commas -m, horizontal -x, long -l,
                             single-column -1, verbose -l, vertical -C
    --full-time            like -l --time-style=full-iso
-g        类似-l，但不列出所有者
    --group-directories-first
                           group directories before files;
                             can be augmented with a --sort option, but any
                             use of --sort=none (-U) disables grouping
-G, --no-group    以一个长列表的形式，不输出组名
-h, --human-readable    与-l 一起，以易于阅读的格式输出文件大小
      (例如 1K 234M 2G)
    --si      同上面类似，但是使用1000 为基底而非1024
-H, --dereference-command-line
                           follow symbolic links listed on the command line
    --dereference-command-line-symlink-to-dir
                           follow each command line symbolic link
                             that points to a directory
    --hide=PATTERN         do not list implied entries matching shell PATTERN
                             (overridden by -a or -A)
    --indicator-style=WORD  append indicator with style WORD to entry names:
                             none (default), slash (-p),
                             file-type (--file-type), classify (-F)
-i, --inode                print the index number of each file
-I, --ignore=PATTERN       do not list implied entries matching shell PATTERN
-k, --kibibytes            default to 1024-byte blocks for disk usage
-l        使用较长格式列出信息
-L, --dereference   当显示符号链接的文件信息时，显示符号链接所指示
      的对象而并非符号链接本身的信息
-m        所有项目以逗号分隔，并填满整行行宽
-n, --numeric-uid-gid   类似 -l，但列出UID 及GID 号
-N, --literal     输出未经处理的项目名称 (如不特别处理控制字符)
-o        类似 -l，但不列出有关组的信息
-p,  --indicator-style=slash  对目录加上表示符号"/"
-q, --hide-control-chars   print ? instead of nongraphic characters
    --show-control-chars   show nongraphic characters as-is (the default,
                             unless program is 'ls' and output is a terminal)
-Q, --quote-name           enclose entry names in double quotes
    --quoting-style=WORD   use quoting style WORD for entry names:
                             literal, locale, shell, shell-always, c, escape
-r, --reverse     逆序排列
-R, --recursive   递归显示子目录
-s, --size      以块数形式显示每个文件分配的尺寸
-S                         sort by file size
    --sort=WORD            sort by WORD instead of name: none (-U), size (-S),
                             time (-t), version (-v), extension (-X)
    --time=WORD            with -l, show time as WORD instead of default
                             modification time: atime or access or use (-u)
                             ctime or status (-c); also use specified time
                             as sort key if --sort=time
    --time-style=STYLE     with -l, show times using style STYLE:
                             full-iso, long-iso, iso, locale, or +FORMAT;
                             FORMAT is interpreted like in 'date'; if FORMAT
                             is FORMAT1<newline>FORMAT2, then FORMAT1 applies
                             to non-recent files and FORMAT2 to recent files;
                             if STYLE is prefixed with 'posix-', STYLE
                             takes effect only outside the POSIX locale
-t                         sort by modification time, newest first
-T, --tabsize=COLS         assume tab stops at each COLS instead of 8
-u                         with -lt: sort by, and show, access time;
                             with -l: show access time and sort by name;
                             otherwise: sort by access time
-U                         do not sort; list entries in directory order
-v                         natural sort of (version) numbers within text
-w, --width=COLS           assume screen width instead of current value
-x                         list entries by lines instead of by columns
-X                         sort alphabetically by entry extension
-1                         list one file per line

SELinux options:

--lcontext                 Display security context.   Enable -l. Lines
                           will probably be too wide for most displays.
-Z, --context              Display security context so it fits on most
                           displays.  Displays only mode, user, group,
                           security context and file name.
--scontext                 Display only security context and file name.
    --help    显示此帮助信息并退出
    --version   显示版本信息并退出
```

### 参数  

目录：指定要显示列表的目录，也可以是具体的文件。

### 实例  

```bash
$ ls       # 仅列出当前目录可见文件
$ ls -l    # 列出当前目录可见文件详细信息
$ ls -hl   # 列出详细信息并以可读大小显示文件大小
$ ls -al   # 列出所有文件（包括隐藏）的详细信息
```

显示当前目录下包括影藏文件在内的所有文件列表

```
[root@localhost ~]# ls -a
.   anaconda-ks.cfg  .bash_logout   .bashrc  install.log         .mysql_history  satools  .tcshrc   .vimrc
..  .bash_history    .bash_profile  .cshrc   install.log.syslog  .rnd            .ssh     .viminfo
```

输出长格式列表

```
[root@localhost ~]# ls -1

anaconda-ks.cfg
install.log
install.log.syslog
satools
```

显示文件的inode信息

索引节点（index inode简称为“inode”）是Linux中一个特殊的概念，具有相同的索引节点号的两个文本本质上是同一个文件（除文件名不同外）。

```
[root@localhost ~]# ls -i -l anaconda-ks.cfg install.log
2345481 -rw------- 1 root root   859 Jun 11 22:49 anaconda-ks.cfg
2345474 -rw-r--r-- 1 root root 13837 Jun 11 22:49 install.log
```

水平输出文件列表

```
[root@localhost /]# ls -m

bin, boot, data, dev, etc, home, lib, lost+found, media, misc, mnt, opt, proc, root, sbin, selinux, srv, sys, tmp, usr, var
```

修改最后一次编辑的文件

最近修改的文件显示在最上面。

```
[root@localhost /]# ls -t

tmp  root  etc  dev  lib  boot  sys  proc  data  home  bin  sbin  usr  var  lost+found  media  mnt  opt  selinux  srv  misc
```

显示递归文件

```
[root@localhost ~]# ls -R
.:
anaconda-ks.cfg  install.log  install.log.syslog  satools

./satools:
black.txt  freemem.sh  iptables.sh  lnmp.sh  mysql  php502_check.sh  ssh_safe.sh

```

打印文件的UID和GID

```
[root@localhost /]# ls -n

total 254
drwxr-xr-x   2 0 0  4096 Jun 12 04:03 bin
drwxr-xr-x   4 0 0  1024 Jun 15 14:45 boot
drwxr-xr-x   6 0 0  4096 Jun 12 10:26 data
drwxr-xr-x  10 0 0  3520 Sep 26 15:38 dev
drwxr-xr-x  75 0 0  4096 Oct 16 04:02 etc
drwxr-xr-x   4 0 0  4096 Jun 12 10:26 home
drwxr-xr-x  14 0 0 12288 Jun 16 04:02 lib
drwx------   2 0 0 16384 Jun 11 22:46 lost+found
drwxr-xr-x   2 0 0  4096 May 11  2011 media
drwxr-xr-x   2 0 0  4096 Nov  8  2010 misc
drwxr-xr-x   2 0 0  4096 May 11  2011 mnt
drwxr-xr-x   2 0 0  4096 May 11  2011 opt
dr-xr-xr-x 232 0 0     0 Jun 15 11:04 proc
drwxr-x---   4 0 0  4096 Oct 15 14:43 root
drwxr-xr-x   2 0 0 12288 Jun 12 04:03 sbin
drwxr-xr-x   2 0 0  4096 May 11  2011 selinux
drwxr-xr-x   2 0 0  4096 May 11  2011 srv
drwxr-xr-x  11 0 0     0 Jun 15 11:04 sys
drwxrwxrwt   3 0 0 98304 Oct 16 08:45 tmp
drwxr-xr-x  13 0 0  4096 Jun 11 23:38 usr
drwxr-xr-x  19 0 0  4096 Jun 11 23:38 var

```

列出文件和文件夹的详细信息

```
[root@localhost /]# ls -l

total 254
drwxr-xr-x   2 root root  4096 Jun 12 04:03 bin
drwxr-xr-x   4 root root  1024 Jun 15 14:45 boot
drwxr-xr-x   6 root root  4096 Jun 12 10:26 data
drwxr-xr-x  10 root root  3520 Sep 26 15:38 dev
drwxr-xr-x  75 root root  4096 Oct 16 04:02 etc
drwxr-xr-x   4 root root  4096 Jun 12 10:26 home
drwxr-xr-x  14 root root 12288 Jun 16 04:02 lib
drwx------   2 root root 16384 Jun 11 22:46 lost+found
drwxr-xr-x   2 root root  4096 May 11  2011 media
drwxr-xr-x   2 root root  4096 Nov  8  2010 misc
drwxr-xr-x   2 root root  4096 May 11  2011 mnt
drwxr-xr-x   2 root root  4096 May 11  2011 opt
dr-xr-xr-x 232 root root     0 Jun 15 11:04 proc
drwxr-x---   4 root root  4096 Oct 15 14:43 root
drwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin
drwxr-xr-x   2 root root  4096 May 11  2011 selinux
drwxr-xr-x   2 root root  4096 May 11  2011 srv
drwxr-xr-x  11 root root     0 Jun 15 11:04 sys
drwxrwxrwt   3 root root 98304 Oct 16 08:48 tmp
drwxr-xr-x  13 root root  4096 Jun 11 23:38 usr
drwxr-xr-x  19 root root  4096 Jun 11 23:38 var

```

列出可读文件和文件夹详细信息

```
[root@localhost /]# ls -lh

total 254K
drwxr-xr-x   2 root root 4.0K Jun 12 04:03 bin
drwxr-xr-x   4 root root 1.0K Jun 15 14:45 boot
drwxr-xr-x   6 root root 4.0K Jun 12 10:26 data
drwxr-xr-x  10 root root 3.5K Sep 26 15:38 dev
drwxr-xr-x  75 root root 4.0K Oct 16 04:02 etc
drwxr-xr-x   4 root root 4.0K Jun 12 10:26 home
drwxr-xr-x  14 root root  12K Jun 16 04:02 lib
drwx------   2 root root  16K Jun 11 22:46 lost+found
drwxr-xr-x   2 root root 4.0K May 11  2011 media
drwxr-xr-x   2 root root 4.0K Nov  8  2010 misc
drwxr-xr-x   2 root root 4.0K May 11  2011 mnt
drwxr-xr-x   2 root root 4.0K May 11  2011 opt
dr-xr-xr-x 235 root root    0 Jun 15 11:04 proc
drwxr-x---   4 root root 4.0K Oct 15 14:43 root
drwxr-xr-x   2 root root  12K Jun 12 04:03 sbin
drwxr-xr-x   2 root root 4.0K May 11  2011 selinux
drwxr-xr-x   2 root root 4.0K May 11  2011 srv
drwxr-xr-x  11 root root    0 Jun 15 11:04 sys
drwxrwxrwt   3 root root  96K Oct 16 08:49 tmp
drwxr-xr-x  13 root root 4.0K Jun 11 23:38 usr
drwxr-xr-x  19 root root 4.0K Jun 11 23:38 var

```

显示文件夹信息

```
[root@localhost /]# ls -ld /etc/

drwxr-xr-x 75 root root 4096 Oct 16 04:02 /etc/

```

按时间列出文件和文件夹详细信息

```
[root@localhost /]# ls -lt

total 254
drwxrwxrwt   3 root root 98304 Oct 16 08:53 tmp
drwxr-xr-x  75 root root  4096 Oct 16 04:02 etc
drwxr-x---   4 root root  4096 Oct 15 14:43 root
drwxr-xr-x  10 root root  3520 Sep 26 15:38 dev
drwxr-xr-x  14 root root 12288 Jun 16 04:02 lib
drwxr-xr-x   4 root root  1024 Jun 15 14:45 boot
drwxr-xr-x  11 root root     0 Jun 15 11:04 sys
dr-xr-xr-x 232 root root     0 Jun 15 11:04 proc
drwxr-xr-x   6 root root  4096 Jun 12 10:26 data
drwxr-xr-x   4 root root  4096 Jun 12 10:26 home
drwxr-xr-x   2 root root  4096 Jun 12 04:03 bin
drwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin
drwxr-xr-x  13 root root  4096 Jun 11 23:38 usr
drwxr-xr-x  19 root root  4096 Jun 11 23:38 var
drwx------   2 root root 16384 Jun 11 22:46 lost+found
drwxr-xr-x   2 root root  4096 May 11  2011 media
drwxr-xr-x   2 root root  4096 May 11  2011 mnt
drwxr-xr-x   2 root root  4096 May 11  2011 opt
drwxr-xr-x   2 root root  4096 May 11  2011 selinux
drwxr-xr-x   2 root root  4096 May 11  2011 srv
drwxr-xr-x   2 root root  4096 Nov  8  2010 misc

```

按修改时间列出文件和文件夹详细信息

```
[root@localhost /]# ls -ltr

total 254
drwxr-xr-x   2 root root  4096 Nov  8  2010 misc
drwxr-xr-x   2 root root  4096 May 11  2011 srv
drwxr-xr-x   2 root root  4096 May 11  2011 selinux
drwxr-xr-x   2 root root  4096 May 11  2011 opt
drwxr-xr-x   2 root root  4096 May 11  2011 mnt
drwxr-xr-x   2 root root  4096 May 11  2011 media
drwx------   2 root root 16384 Jun 11 22:46 lost+found
drwxr-xr-x  19 root root  4096 Jun 11 23:38 var
drwxr-xr-x  13 root root  4096 Jun 11 23:38 usr
drwxr-xr-x   2 root root 12288 Jun 12 04:03 sbin
drwxr-xr-x   2 root root  4096 Jun 12 04:03 bin
drwxr-xr-x   4 root root  4096 Jun 12 10:26 home
drwxr-xr-x   6 root root  4096 Jun 12 10:26 data
dr-xr-xr-x 232 root root     0 Jun 15 11:04 proc
drwxr-xr-x  11 root root     0 Jun 15 11:04 sys
drwxr-xr-x   4 root root  1024 Jun 15 14:45 boot
drwxr-xr-x  14 root root 12288 Jun 16 04:02 lib
drwxr-xr-x  10 root root  3520 Sep 26 15:38 dev
drwxr-x---   4 root root  4096 Oct 15 14:43 root
drwxr-xr-x  75 root root  4096 Oct 16 04:02 etc
drwxrwxrwt   3 root root 98304 Oct 16 08:54 tmp

```

按照特殊字符对文件进行分类

```
[root@localhost nginx-1.2.1]# ls -F

auto/  CHANGES  CHANGES.ru  conf/  configure*  contrib/  html/  LICENSE  Makefile  man/  objs/  README  src/

```

列出文件并标记颜色分类

```
[root@localhost nginx-1.2.1]# ls --color=auto

auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  Makefile  man  objs  README  src
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
