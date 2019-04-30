poweroff
===

关闭Linux系统，关闭记录会被写入到/var/log/wtmp日志文件中。

## 补充说明

**grename命令** 可以重命名卷组的名称。

### 语法  

```shell
poweroff [选项]
```

### 选项  

```shell
-n 关闭之前不同步
-p 当被称为halt时关闭电源
-v 增加输出，包括消息
-q 降低输出错误唯一的消息
-w 并不实际关闭系统，只是写入/var/log/wtmp文件中
-f 强制关机，不调用shutdown
```

### 例子

关闭Linux系统。

```shell
[root@localhost ~]# poweroff
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
