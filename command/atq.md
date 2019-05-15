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

### 实例  

```shell
at now + 10 minutes
at> echo 1111
at> <eot>
job 3 at Fri Apr 26 12:56:00 2013

atq
3       Fri Apr 26 12:56:00 2013 a root
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
