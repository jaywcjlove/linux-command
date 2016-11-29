watch
===

周期性的方式执行给定的指令

## 补充说明

**watch命令** 以周期性的方式执行给定的指令，指令输出以全屏方式显示。watch是一个非常实用的命令，基本所有的Linux发行版都带有这个小工具，如同名字一样，watch可以帮你监测一个命令的运行结果，省得你一遍遍的手动运行。

### 语法  

```
watch(选项)(参数)
```

### 选项  

```
-n：指定指令执行的间隔时间（秒）；
-d：高亮显示指令输出信息不同之处；
-t：不显示标题。
```

### 参数  

指令：需要周期性执行的指令。

### 实例  

```
#watch uptime
#watch -t uptime
#watch -d -n 1 netstat -ntlp
#watch -d 'ls -l | fgrep goface'     //监测goface的文件
#watch -t -differences=cumulative uptime
#watch -n 60 from            //监控mail
#watch -n 1 "df -i;df"       //监测磁盘inode和block数目变化情况
```

FreeBSD和Linux下watch命令的不同，在Linux下，watch是周期性的执行下个程序，并全屏显示执行结果，如：`watch -n 1 -d netstat -ant`，而在FreeBSD下的watch命令是查看其它用户的正在运行的操作，watch允许你偷看其它terminal正在做什么，该命令只能让超级用户使用。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->