logname
===

打印当前终端登录用户的名称。

## 概要

```shell
logname [OPTION]...
```

## 主要用途

- 打印当前终端登录用户的名称。

## 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
```

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

```shell
[root@localhost ~]# logname
root
```

### 注意

1. 注意区分 `whoami` 和 `logname` 这两个命令；比如我们以用户 `root` 打开的终端，然后切换到了用户 `user2`。此时， `whoami`返回的是当前用户 `user2`, `logname` 返回的是 `root`，大家可以自行实践验证一下。

2. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 logname`，`info coreutils 'logname invocation'`。


