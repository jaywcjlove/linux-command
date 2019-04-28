shutdown
===

用来执行系统关机的命令

## 补充说明

**shutdown命令** 用来系统关机命令。shutdown指令可以关闭所有程序，并依用户的需要，进行重新开机或关机的动作。

### 语法  

```shell
shutdown(选项)(参数)
```

### 选项  

```shell
-c：当执行“shutdown -h 11:50”指令时，只要按+键就可以中断关机的指令；
-f：重新启动时不执行fsck；
-F：重新启动时执行fsck；
-h：将系统关机；
-k：只是送出信息给所有用户，但不会实际关机；
-n：不调用init程序进行关机，而由shutdown自己进行；
-r：shutdown之后重新启动；
-t<秒数>：送出警告信息和删除信息之间要延迟多少秒。
```

### 参数  

*   [时间]：设置多久时间后执行shutdown指令；
*   [警告信息]：要传送给所有登入用户的信息。

### 实例  

指定现在立即关机：

```shell
shutdown -h now
```

指定5分钟后关机，同时送出警告信息给登入用户：

```shell
shutdown +5 "System will shutdown after 5 minutes"
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->