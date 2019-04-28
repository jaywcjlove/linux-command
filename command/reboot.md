reboot
===

重新启动正在运行的Linux操作系统

## 补充说明

**reboot命令** 用来重新启动正在运行的Linux操作系统。

### 语法  

```shell
reboot(选项)
```

### 选项  

```shell
-d：重新开机时不把数据写入记录文件/var/tmp/wtmp。本参数具有“-n”参数效果；
-f：强制重新开机，不调用shutdown指令的功能；
-i：在重开机之前，先关闭所有网络界面；
-n：重开机之前不检查是否有未结束的程序；
-w：仅做测试，并不真正将系统重新开机，只会把重开机的数据写入/var/log目录下的wtmp记录文件。
```

### 实例  

```shell
reboot        //重开机。
reboot -w     //做个重开机的模拟（只有纪录并不会真的重开机）。
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->