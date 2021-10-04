who
===

显示当前所有登陆用户的信息。

## 概要

```shell
who [OPTION]... [file] [am i]
```

## 主要用途

- 当没有给出非选项参数时，按以下字段顺序为每个当前用户打印信息：登录用户名称，终端信息，登录时间，远程主机或X display。
- 当用户执行 `who am i` 时，只显示运行该命令的用户的信息。

## 选项

```shell
-a, --all                                等价于调用 '-b -d --login -p -r -t -T -u'。
-b, --boot                               上次系统启动的时间。
-d, --dead                               打印 dead 状态的进程。
-H, --heading                            打印列标题行。
-l, --login                              打印系统登录进程。
--lookup                                 尝试通过 DNS 规范主机名。
-m                                       仅显示和标准输入关联的主机名和用户。
-p, --process                            打印由 init 生成的活动进程。
-q, --count                              列出所有已登录的用户的名称和数量。
-r, --runlevel                           打印当前运行级别。
-s, --short                              仅打印名称、行和时间（默认）。
-t, --time                               打印上次系统时钟更改。
-T, -w, --mesg, --message, --writable    将 '+、-、?' 中的一个作为用户的消息状态添加到用户名称后面。
-u, --users                              列出登录的用户。
--help                                   显示帮助信息并退出。
--version                                显示版本信息并退出。

关于 -T 选项的 '+、-、?'：
'+'  允许写入信息
'-'  禁止写入信息
'?'  不能查找到终端设备
```

## 参数

file（可选）：指定 `file` 代替默认的 `/var/run/utmp` 、`/etc/utmp` ；通常使用 `/var/log/wtmp` 作为参数用于查看过去登陆系统的用户。

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

```shell
[root@localhost ~]# who
root     pts/0        2013-08-19 15:04 (192.168.0.134)
root     pts/1        2013-12-20 10:37 (180.111.155.40)

[root@localhost ~]# who -q
root root
# users=2

[root@localhost ~]# who -H
NAME     LINE         time             COMMENT
root     pts/0        2013-08-19 15:04 (192.168.0.134)
root     pts/1        2013-12-20 10:37 (180.111.155.40)

[root@localhost ~]# who -w
root     + pts/0        2013-08-19 15:04 (192.168.0.134)
root     + pts/1        2013-12-20 10:37 (180.111.155.40)
```

### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 who`，`info coreutils 'who invocation'`。


