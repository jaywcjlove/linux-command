batch
===

在系统不繁忙的时候执行定时任务

## 补充说明

**batch命令** 用于在指定时间，当系统不繁忙时执行任务，用法与at相似。

### 语法  

```shell
batch(选项)(参数)
```

### 选项  

```shell
-f：指定包含具体指令的任务文件；
-q：指定新任务的队列名称；
-m：任务执行完后向用户发送E-mail。
```

### 参数  

日期时间：指定任务执行的日期时间。

### 实例  

```shell
batch 
at> echo 1234
at> <EOT>
job 5 at Sun Apr 28 08:49:00 2013
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->