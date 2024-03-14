nethogs
===

终端下的网络流量监控工具

## 补充说明

有很多适用于Linux系统的开源网络监视工具。比如说，你可以用命令iftop来检查带宽使用情况。netstat用来查看接口统计报告，还有top监控系统当前运行进程。但是如果你想要找一个能够按进程实时统计网络带宽利用率的工具，那么NetHogs值得一看。

 **NetHogs** 是一个开源的命令行工具（类似于Linux的top命令），用来按进程或程序实时统计网络带宽使用率。

来自NetHogs项目网站:

> NetHogs是一个小型的net top工具，不像大多数工具那样拖慢每个协议或者是每个子网的速度而是按照进程进行带宽分组。NetHogs不需要依赖载入某个特殊的内核模块。如果发生了网络阻塞你可以启动NetHogs立即看到哪个PID造成的这种状况。这样就很容易找出哪个程序跑飞了然后突然占用你的带宽。

本文为你介绍如何在Unix/Linux操作系统下如何安装和使用NetHogs按进程监控网络带宽使用率。


###  语法 

```shell
nethogs（选项）（参数）
```
###  选项 

```shell
usage: nethogs [-V] [-h] [-b] [-d seconds] [-v mode] [-c count] [-t] [-p] [-s] [device [device [device ...]]]
  -V : 打印版本。
  -h : 打印此帮助。
  -b : bughunt模式 - 暗示tracemode。
  -d : 延迟更新刷新率（以秒为单位）。 默认值为1。
  -v : 视图模式（0 = KB / s，1 =总KB，2 =总B，3 =总MB）。 默认值为0。
  -c : 更新次数。 默认为0（无限制）。
  -t : tracemode.
  -p : 煽动混乱模式（不推荐）。
  -s : 按发送列排序输出。
  -a : 监控所有设备，甚至环回/停止。
  device : 要监控的设备。 默认是所有接口启动和运行，不包括环回

当nethogs运行时，按：
  q：退出
  s：按SENT流量排序
  r：按RECEIVE流量排序
  m：在总（KB，B，MB）和KB / s模式之间切换
```

其他参数和用法

```shell
-d : 刷新间隔
-h : 帮助
-p : promiscuous 模式
-t : trace模式 
-V : 版本
```

**交互命令**

以下是NetHogs的一些交互命令（键盘快捷键）

*   m : 修改单位
*   r : 按流量排序
*   s : 按发送流量排序
*   q : 退出命令提示符

### 安装

**在RHEL、CentOS和Fedora下安装NetHogs**

要安装NetHogs，你必须要启用你所用Linux下的EPEL源。然后运行下面的yum命令下载安装NetHogs包。

```shell
yum install nethogs
```

**在Ubuntu、Linux mint和Debian下安装NetHogs**

键入apt-get命令安装NetHogs包：

```shell
$ sudo apt-get install nethogs
```

###  NetHogs用法 

在基于RedHat系统下键入如下命令启动NetHogs工具。

```shell
nethogs
```

在Debian/Ubuntu/Linux Mint下要执行NetHogs你必须拥有root权限：

```shell
$ sudo nethogs
```

!nethogs

Ubuntu 12.10 下的NetHogs预览

正如上图所示，send列和received列显示的是按照每个进程的流量统计。总的收发数据带宽在最下方，而且可以用交互命令控制排序，下面将要讨论这些交互命令。

###  NetHogs 命令行参数 

以下就是NetHogs命令行的参数，用-d来添加刷新频率参数，device name 用来检测给定的某个或者某些设备的带宽（默认是eth0）。例如：设置5秒钟的刷新频率，键入如下命令即可：

```shell
nethogs -d 5
```

```shell
$ sudo nethogs -d 5
```

如果只用来监视设备（eth0）的网络带宽可以使用如下命令：

```shell
nethogs eth0
```

```shell
$ sudo nethogs eth0
```

如果要同时监视eth0和eth1接口，使用以下命令即可：

```shell
nethogs eth0 eth1
```

```shell
$ sudo nethogs eth0 eth1

```

关于NetHogs命令行工具的完整参数列表，可以参考NetHogs的手册，使用方法是在终端里输入`man nethogs`或者`sudo man nethogs`，更多信息请参考NetHogs项目主页。



