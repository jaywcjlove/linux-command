users
===

打印当前主机所有登陆用户的名称。

## 概要

```shell
users [OPTION]... [FILE]
```

## 主要用途

- 每个显示的用户名对应一个登录会话；如果一个用户有不止一个登录会话，那他的用户名将显示相同的次数。

## 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
```

## 参数

FILE（可选）：记录用户当前登录情况的文件；默认使用 `/var/run/utmp` 、`/var/log/wtmp`。

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

```shell
[root@localhost ~]# users
root root
```

### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 users`，`info coreutils 'users invocation'`。


