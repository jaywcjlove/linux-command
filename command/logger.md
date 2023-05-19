logger
===

在系统日志中记录相应条目

## 补充说明

**logger命令** 是用于往系统中写入日志，他提供一个shell命令接口到syslog系统模块

###  语法

```shell
logger [options] [message]
```

###  选项

```shell
 -T, --tcp             使用流连接(TCP)
 -d, --udp             使用数据报(UDP)
 -i, --id              逐行记录每一次logger的进程ID
 -f, --file <file>     记录特定的文件
 -h, --help            显示帮助文本并退出
 -n, --server <name>   写入指定的远程syslog服务器，使用UDP代替内装式syslog的例程
 -P, --port <port>     使用指定的UDP端口。默认的端口号是514
 -p, --priority <prio> 指定输入消息的优先级，优先级可以是数字或者指定为 " facility.level" 的格式。
                       比如：" -p local3.info " local3 这个设备的消息级别为 info。
                       默认级别是 "user.notice"
 -s, --stderr          输出标准错误到系统日志。
 -t, --tag <tag>       指定标记记录
 -u, --socket <socket> 写入指定的socket，而不是到内置系统日志例程。
 -V, --version         输出版本信息并退出
```

### 例子

```shell
logger -p syslog.info "backup.sh is starting"
```



