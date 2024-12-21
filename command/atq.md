atq
===

列出当前用户的at任务列表

## 补充说明

**atq命令** 显示系统中待执行的任务列表，也就是列出当前用户的at任务列表。

### 语法

```shell
atq [-V] [-q 队列] [-v]
```

### 选项

```shell
-V：显示版本号；
-q：查询指定队列的任务。
```

### 示例

创建一个在10分钟后执行的任务，并列出当前用户的任务列表：

```shell
[root@localhost ~]# at now + 10 minutes
at> echo 1111
at> <EOT>
job 3 at Fri Apr 26 12:56:00 2013
```

使用`atq`命令查看当前用户的任务列表：

```shell
[root@localhost ~]# atq
3       Fri Apr 26 12:56:00 2013 a root
```

查询指定队列的任务：

```shell
[root@localhost ~]# at -q a now + 10 minutes
at> echo "Task in queue a"
at> <EOT>
job 4 at Fri Apr 26 13:06:00 2013
```

使用`atq`命令查看队列`a`中的任务：

```shell
[root@localhost ~]# atq -q a
4       Fri Apr 26 13:06:00 2013 a root
```

显示`atq`命令的版本号：

```shell
[root@localhost ~]# atq -V
atq (GNU at) 3.1.20
```