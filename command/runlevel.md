runlevel
===

打印当前Linux系统的运行等级

## 补充说明

**runlevel命令** 用于打印当前Linux系统的运行等级。

### 语法  

```shell
runlevel
```

### 知识扩展  

linux操作系统自从开始启动至启动完毕需要经历几个不同的阶段，这几个阶段就叫做runlevel，同样，当linux操作系统关闭时也要经历另外几个不同的runlevel，下面我们就准备详细介绍一下runlevel，并向您展示一些小技巧来让您的linux系统避免不必要的重启动。

runlevel可以认为是系统状态，形象一点，您可以认为runlevel有点象微软的windows操作系统中的Normal，safemode，和command prompt only。进入每个runlevel都需要启动或关闭相应的一系列服务(services)，这些服务(services)以初始化脚本的方式放置于目录`/etc/rc.d/rc?.d/`或者`/etc/rc?.d`下面（?代表runlevel的对应序号）。

在大多数的linux发行版本中，通常有8个runlevel：

```shell
0 停机
1 单用户模式
2 多用户，没有 NFS
3 完全多用户模式
4 没有用到
5 图形界面
6 重新启动
S s Single user mode
```

多数的桌面的linux系统缺省的runlevel是5，用户登陆时是图形界面，而多数的服务器版本的linux系统缺省的runlevel是3，用户登陆时是字符界面，runlevel 1和2除了调试之外很少使用，runlevel s和S并不是直接给用户使用，而是用来为Single user mode作准备。

linux的运行模式比起windows的启动模式的优势在于：你可以在系统空闲时使用init命令切换你现在使用的runlevel，另外，当你关闭或者启动linux系统时你已经不知不觉中切换你的runlevel，系统关机进程需要调用runlevel(0或6)来关闭所有正在运行中的进程。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->