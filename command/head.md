head
===

显示文件的开头部分。

## 概要

```shell
head [OPTION]... [FILE]...
```

## 主要用途

- 在未指定行数时默认显示前10行。
- 处理多个文件时会在各个文件之前附加含有文件名的行。
- 当没有文件或文件为`-`时，读取标准输入。

## 选项

```shell
-c, --bytes=[-]NUM       显示前NUM字节；如果NUM前有"-"，那么会打印除了文件末尾的NUM字节以外的其他内容。
-n, --lines=[-]NUM       显示前NUM行而不是默认的10行；如果NUM前有"-"，那么会打印除了文件末尾的NUM行以外的其他行。
-q, --quiet, --silent    不打印文件名行。
-v, --verbose            总是打印文件名行。
-z, --zero-terminated    行终止符为NUL而不是换行符。
--help                   显示帮助信息并退出。
--version                显示版本信息并退出。

NUM可以有一个乘数后缀：
b 512
kB 1000
k 1024
MB 1000*1000
M 1024*1024
GB 1000*1000*1000
G 1024*1024*1024
T、P、E、Z、Y等以此类推。

也可以使用二进制前缀：
KiB=K
MiB=M
以此类推。
```

## 参数

FILE（可选）：要处理的文件，可以为一或多个。

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

```shell
# 查看历史文件的前6行：
[user2@pc ~]$ head -n 6 ~/.bash_history
#1575425555
cd ~
#1575425558
ls -lh
#1575425562
vi ~/Desktop/ZhuangZhu-74.txt
```

```shell
# 查看多个文件：
[user2@pc ~]$ head -n ~/.bash_history ~/.bashrc
==> /allhome/user2/.bash_history <==
#1575425555
cd ~
#1575425558
ls -lh
#1575425562
vi ~/Desktop/ZhuangZhu-74.txt
#1575425566
uptime
#1575425570
find ~/ -maxdepth 3 -name 'test.sh' -exec lh {} \;

==> /allhome/user2/.bashrc <==
# .bashrc

# forbid use Ctrl+D to exit shell.
set -o ignoreeof

# Source global definitions.
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi

```


### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 head`，`info coreutils 'head invocation'`。


