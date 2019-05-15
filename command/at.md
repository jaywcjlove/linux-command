at
===

在指定时间执行一个任务

## 补充说明

**at命令** 用于在指定时间执行命令。at允许使用一套相当复杂的指定时间的方法。它能够接受在当天的hh:mm（小时:分钟）式的时间指定。假如该时间已过去，那么就放在第二天执行。当然也能够使用midnight（深夜），noon（中午），teatime（饮茶时间，一般是下午4点）等比较模糊的 词语来指定时间。用户还能够采用12小时计时制，即在时间后面加上AM（上午）或PM（下午）来说明是上午还是下午。 也能够指定命令执行的具体日期，指定格式为month day（月 日）或mm/dd/yy（月/日/年）或dd.mm.yy（日.月.年）。指定的日期必须跟在指定时间的后面。

上面介绍的都是绝对计时法，其实还能够使用相对计时法，这对于安排不久就要执行的命令是很有好处的。指定格式为：`now + count time-units`，now就是当前时间，time-units是时间单位，这里能够是minutes（分钟）、hours（小时）、days（天）、weeks（星期）。count是时间的数量，究竟是几天，还是几小时，等等。 更有一种计时方法就是直接使用today（今天）、tomorrow（明天）来指定完成命令的时间。

### 语法  

```shell
at [-V] [-q 队列] [-f 文件] [-mldbv] 时间 at -c 作业 [作业...]
```

### 选项  

```shell
-f：指定包含具体指令的任务文件；
-q：指定新任务的队列名称；
-l：显示待执行任务的列表；
-d：删除指定的待执行任务；
-m：任务执行完成后向用户发送E-mail。
```

### 参数  

日期时间：指定任务执行的日期时间。

### 实例  

三天后的下午 5 点锺执行`/bin/ls`：

```shell
[root@localhost ~]# at 5pm+3 days
at> /bin/ls
at> <EOT>
job 7 at 2013-01-08 17:00
```

明天17点钟，输出时间到指定文件内：

```shell
[root@localhost ~]# at 17:20 tomorrow
at> date >/root/2013.log
at> <EOT>
job 8 at 2013-01-06 17:20
```

计划任务设定后，在没有执行之前我们可以用atq命令来查看系统没有执行工作任务：

```shell
[root@localhost ~]# atq
8       2013-01-06 17:20 a root
7       2013-01-08 17:00 a root
```

删除已经设置的任务：

```shell
[root@localhost ~]# atq
8       2013-01-06 17:20 a root
7       2013-01-08 17:00 a root

[root@localhost ~]# atrm 7
[root@localhost ~]# atq
8       2013-01-06 17:20 a root
```

显示已经设置的任务内容：

```shell
[root@localhost ~]# at -c 8
#!/bin/sh
# atrun uid=0 gid=0
# mail     root 0
umask 22此处省略n个字符
date >/root/2013.log
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
