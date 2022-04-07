pwd
===

显示当前工作目录的绝对路径。执行 pwd 指令可立刻得知您目前所在的工作目录的绝对路径名称。

## 内建命令

#### 概要

```shell
pwd [-LP]
```

#### 选项

```shell
-L （默认值）打印环境变量"$PWD"的值，可能为符号链接。
-P 打印当前工作目录的物理位置。
```

#### 返回值

返回状态为成功除非给出了非法选项或是当前目录无法读取。

#### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。


## 外部命令

#### 概要

```shell
pwd [OPTION]...
```

#### 主要用途

- 显示当前工作目录。


#### 选项

```shell
-L, --logical 打印环境变量"$PWD"的值，可能为符号链接。
-P, --physical （默认值）打印当前工作目录的物理位置。
--help 显示帮助信息并退出。
--version 显示版本信息并退出。
```

#### 返回值

返回状态为成功除非给出了非法选项或是当前目录无法读取。

#### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man pwd`或`info coreutils 'pwd invocation'`。
2. 启动或关闭内建命令请查看`enable`命令，关于同名优先级的问题请查看`builtin`命令的例子部分的相关讨论。
3. 在不禁用内建且当前环境没有定义`pwd`函数的情况下，使用`/usr/bin/pwd`指向`coreutils`的`pwd`，使用`pwd`指向bash内建的`pwd`。


## 例子

查看当前所在路径

```shell
[root@localhost var]# pwd
/var
```

```shell
[root@localhost ~]# cd /var/   #进入/var目录，该目录下有个mail连接文件，方便对比查看
[root@localhost var]# ll
total 164
...
lrwxrwxrwx  1 root root   10 Oct 17  2015 mail -> spool/mail

[root@localhost var]# cd mail/   # 进入 mail 目录，mail 为连接文件。
[root@localhost mail]# pwd       # 默认，使用连接文件，直接显示连接文件全路径。
/var/mail
```

不使用逻辑路径，连接文件最终指向的文件

```shell
[root@localhost mail]# pwd -P    
/var/spool/mail
```
