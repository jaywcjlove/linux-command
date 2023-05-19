hostid
===

显示当前主机的十六进制数字标识。

## 概要

```shell
hostid [OPTION]...
```

## 主要用途

- 显示当前主机的十六进制标识符。
- 用来限制软件的使用权限，不可改变。

## 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
```

## 例子

```shell
[root@localhost ~]# hostid
007f0100
```

### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 hostid`，`info coreutils 'hostid invocation'`。



