pgrep
===

根据用户给出的信息在当前运行进程中查找并列出符合条件的进程ID（PID）

## 补充说明

**pgrep命令** 以名称为依据从运行进程队列中查找进程，并显示查找到的进程id。每一个进程ID以一个十进制数表示，通过一个分割字符串和下一个ID分开，默认的分割字符串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分割的可能值的集合。

###  语法

```shell
pgrep(选项)(参数)
```

###  选项

```shell
-d, --delimiter <string>：指定输出的分隔符。
-l, --list-name：列出进程ID和进程名称。
-a, --list-full：列出进程ID和完整的命令行。
-v, --inverse：反向匹配，即只显示不匹配的进程。
-w, --lightweight：列出所有TID（轻量级线程）。
-c, --count：显示匹配的进程数量。
-f, --full：使用完整的进程名称进行匹配。
-g, --pgroup <PGID,...>：匹配指定的进程组ID。
-G, --group <GID,...>：匹配真实组ID。
-i, --ignore-case：忽略大小写进行匹配。
-n, --newest：选择最近启动的进程。
-o, --oldest：选择最早启动的进程。
-O, --older <seconds>：选择启动时间早于指定秒数的进程。
-P, --parent <PPID,...>：只匹配给定父进程的子进程。
-s, --session <SID,...>：匹配会话ID。
-t, --terminal <tty,...>：根据控制终端进行匹配。
-u, --euid <ID,...>：根据有效用户ID进行匹配。
-U, --uid <ID,...>：根据真实用户ID进行匹配。
-x, --exact：精确匹配进程名称。
-F, --pidfile <file>：从文件中读取PID。
-L, --logpidfile：如果PID文件没有锁定，则失败。
-r, --runstates <state>：匹配运行状态（D, S, Z等）。
--ns <PID>：匹配与指定PID相同命名空间的进程。
--nslist <ns,...>：列出将在 --ns 选项中考虑的命名空间。可用的命名空间包括：ipc、mnt、net、pid、user、uts。
```

###  参数

进程名称：指定要查找的进程名称，同时也支持类似grep指令中的匹配模式。

###  实例

```shell
pgrep -lo httpd
4557 httpd
 [root@localhost ~]# pgrep -ln httpd
4566 httpd

[root@localhost ~]# pgrep -l httpd
4557 httpd
4560 httpd
4561 httpd
4562 httpd
4563 httpd
4564 httpd
4565 httpd
4566 httpd

[root@localhost ~]# pgrep httpd 4557
4560
4561
4562
4563
4564
4565
4566

[root@localhost ~]# pgrep -x httpd
4557
4560
4561
4562
4563
4564
4565
4566
```



