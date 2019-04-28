logrotate
===

统日志进行轮转、压缩和删除

## 补充说明

**logrotate命令** 用于对系统日志进行轮转、压缩和删除，也可以将日志发送到指定邮箱。使用logrotate指令，可让你轻松管理系统所产生的记录文件。每个记录文件都可被设置成每日，每周或每月处理，也能在文件太大时立即处理。您必须自行编辑，指定配置文件，预设的配置文件存放在`/etc/logrotate.conf`文件中。

### 语法  

```shell
logrotate(选项)(参数)
```

### 选项  

```shell
-?或--help：在线帮助；
-d或--debug：详细显示指令执行过程，便于排错或了解程序执行的情况；
-f或--force ：强行启动记录文件维护操作，纵使logrotate指令认为没有需要亦然；
-s<状态文件>或--state=<状态文件>：使用指定的状态文件；
-v或--version：显示指令执行过程；
-usage：显示指令基本用法。
```

### 参数  

配置文件：指定lograote指令的配置文件。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->