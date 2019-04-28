service
===

控制系统服务的实用工具

## 补充说明

**service命令** 是Redhat Linux兼容的发行版中用来控制系统服务的实用工具，它以启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。

### 语法  

```shell
service(选项)(参数)
```

### 选项  

```shell
-h：显示帮助信息；
--status-all：显示所服务的状态。
```

### 参数  

*   服务名：自动要控制的服务名，即`/etc/init.d`目录下的脚本文件名；
*   控制命令：系统服务脚本支持的控制命令。

### 实例  

当修改了主机名、ip地址等信息时，经常需要把网络重启使之生效。

```shell
service network status
配置设备：
lo eth0
当前的活跃设备：
lo eth0

service network restart
正在关闭接口 eth0：                                        [  确定  ]
关闭环回接口：                                             [  确定  ]
设置网络参数：                                             [  确定  ]
弹出环回接口：                                             [  确定  ]
弹出界面 eth0：                                            [  确定  ]
```

重启mysql

```shell
service mysqld status
mysqld (pid 1638) 正在运行...

service mysqld restart
停止 MySQL：                                               [  确定  ]
启动 MySQL：                                               [  确定  ]
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->