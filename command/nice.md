nice
===

改变程序执行的优先权等级

## 补充说明

**nice命令** 用于以指定的进程调度优先级启动其他的程序。

### 语法  

```shell
nice(选项)(参数)
```

### 选项  

```shell
-n：指定进程的优先级（整数）。
```

### 参数  

指令及选项：需要运行的指令及其他选项。

### 实例  

新建一个进程并设置优先级，将当前目录下的documents目录打包，但不希望tar占用太多CPU：

```shell
nice -19 tar zcf pack.tar.gz documents
```

方法非常简单，即在原命令前加上`nice -19`。很多人可能有疑问了，最低优先级不是19么？那是因为这个“-19”中的“-”仅表示参数前缀；所以，如果希望将当前目录下的documents目录打包，并且赋予tar进程最高的优先级：

```shell
nice --19 tar zcf pack.tar.gz documents
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->