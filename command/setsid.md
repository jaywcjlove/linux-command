setsid
===

在新的会话中运行程序

## 补充说明

**setsid命令** 子进程从父进程继承了：SessionID、进程组ID和打开的终端。子进程如果要脱离这些，代码中可通过调用setsid来实现。，而命令行或脚本中可以通过使用命令setsid来运行程序实现。setsid帮助一个进程脱离从父进程继承而来的已打开的终端、隶属进程组和隶属的会话。

###  语法

```shell
setsid[options] <program> [arguments ...]
```

###  选项

```shell
-c, --ctty   将控制终端设置为当前控制终端
-f, --fork   总是 fork
-w, --wait   等待程序退出，并使用相同的返回
```


### 实例

可见 setsid 的使用也是非常方便的，也只需在要处理的命令前加上 setsid 即可

```shell
[root@root ~]# setsid ping www.ibm.com
[root@root ~]# ps -ef |grep www.ibm.com
root 31094 1 0 07:28 ? 00:00:00 ping www.ibm.com
root 31102 29217 0 07:29 pts/4 00:00:00 grep www.ibm.com
[root@root ~]#
```


