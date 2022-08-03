tty
===

显示连接到当前标准输入的终端设备文件名

## 概要

```shell
tty [option] ...
```

## 主要用途

- 显示连接到当前标准输入的终端设备文件名，当标准输入不是终端时打印 "not a tty"。

## 选项

```shell
-s, --silent, --quiet    不打印任何信息，只返回退出状态。
--help                   显示帮助信息并退出。
--version                显示版本信息并退出。
```

## 返回值

当使用 `-s, --silent, --quiet` 时，返回码为 0 表示标准输入是终端，返回码为 1 表示标准输入不是终端，返回码为 2 表示选项错误，返回码为 3 表示有写错误发生。

## 例子

显示连接到当前标准输入的终端设备文件名。

```shell
[root@localhost ~]# tty
/dev/pts/2
```

查找终端关联的进程（假设是 pts/2）

```shell
# 注意是筛选 TTY 列。
ps -ef | egrep "pts/2 " | grep -v grep
```

### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 tty`，`info coreutils 'tty invocation'`。


