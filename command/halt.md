halt
===

关闭正在运行的Linux操作系统

## 补充说明

**halt命令** 用来关闭正在运行的Linux操作系统。halt命令会先检测系统的runlevel，若runlevel为0或6，则关闭系统，否则即调用shutdown来关闭系统。

###  语法

```shell
halt(选项)
```

###  选项

```shell
-d：不要在wtmp中记录；
-f：不论目前的runlevel为何，不调用shutdown即强制关闭系统；
-i：在halt之前，关闭全部的网络界面；
-n：halt前，不用先执行sync；
-p：halt之后，执行poweroff；
-w：仅在wtmp中记录，而不实际结束系统。
```

###  实例

```shell
halt -p     # 关闭系统后关闭电源。
halt -d     # 关闭系统，但不留下纪录。
```


