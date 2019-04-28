init
===

init进程是所有Linux进程的父进程

## 补充说明

**init命令** 是Linux下的进程初始化工具，init进程是所有Linux进程的父进程，它的进程号为1。init命令是Linux操作系统中不可缺少的程序之一，init进程是Linux内核引导运行的，是系统中的第一个进程。

### 语法  

```shell
init(选项)(参数)
```

### 选项  

```shell
-b：不执行相关脚本而直接进入单用户模式；
-s：切换到单用户模式。
```

### 参数  

运行等级：指定Linux系统要切换到的运行等级。

### 实例  

几个常用的命令

查看系统进程命令：`ps -ef | head`  
查看init的配置文件：`more /etc/inittab`  
查看系统当前运行的级别：`runlevel`

 **运行级别** 

到底什么是运行级呢？简单的说，运行级就是操作系统当前正在运行的功能级别。这个级别从0到6 ，具有不同的功能。你也可以在`/etc/inittab`中查看它的英文介绍。

```shell
#0  停机（千万不能把initdefault 设置为0）
#1  单用户模式
#2  多用户，没有 NFS(和级别3相似，会停止部分服务)
#3  完全多用户模式
#4  没有用到
#5  x11(Xwindow)
#6  重新启动（千万不要把initdefault 设置为6）
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->