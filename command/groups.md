groups
===

打印指定用户所在组的名称。

## 概要

```shell
groups [OPTION]... [username]...
```

## 主要用途

- 打印指定用户所在组的名称。

## 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
```

## 参数

username（可选）：可以是一到多个，不提供时默认为当前用户。

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

显示linux用户所属的组

```shell
[root@localhost ~]# groups linux
linux : linux adm dialout cdrom plugdev lpadmin admin sambashare
```

### 注意

1. 该命令等价于 `id -Gn`。
2. 每个用户属于`/etc/passwd`中指定的一个组和在`/etc/group`中指定的其他组。
3. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 groups`，`info coreutils 'groups invocation'`。


