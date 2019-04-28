uname
===

显示Linux系统信息

## 补充说明

**uname命令** 用于打印当前系统相关信息（内核版本号、硬件架构、主机名称和操作系统类型等）。

### 语法

```shell
uname(选项)
```

### 选项

```shell
-a或--all：显示全部的信息；
-m或--machine：显示电脑类型；
-n或-nodename：显示在网络上的主机名称；
-r或--release：显示操作系统的发行编号；
-s或--sysname：显示操作系统名称；
-v：显示操作系统的版本；
-p或--processor：输出处理器类型或"unknown"；
-i或--hardware-platform：输出硬件平台或"unknown"；
-o或--operating-system：输出操作系统名称；
--help：显示帮助；
--version：显示版本信息。
```

### 实例

使用uname命令查看全部信息：

```shell
[root@localhost ~]# uname    #单独使用uname命令时相当于uname -s
Linux

[root@localhost ~]# uname -a
Linux localhost 2.6.18-348.6.1.el5 #1 SMP Tue May 21 15:34:22 EDT 2013 i686 i686 i386 GNU/Linux

[root@localhost ~]# uname -m
i686

[root@localhost ~]# uname -n
localhost

[root@localhost ~]# uname -r
2.6.18-4-686

[root@localhost ~]# uname -s
Linux

[root@localhost ~]# uname -v
#1 SMP Tue May 21 15:34:22 EDT 2013

[root@localhost ~]# uname -p
i686

[root@localhost ~]# uname -i
i386

[root@localhost ~]# uname -o
GNU/Linux

[root@localhost ~]# uname --version
uname (GNU coreutils) 5.97
Copyright (C) 2006 free Software Foundation, Inc.
这是自由软件。您可以按照 GNU GPL 协议 <http://www.gnu.org/licenses/gpl.html> 的条款再发布此软件的副本，但我们无法保证相关法律不对这一情形进行限制。

由 David MacKenzie 编写。
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->