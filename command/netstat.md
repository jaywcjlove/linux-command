netstat
===

查看Linux中网络系统状态信息

## 补充说明

**netstat命令** 用来打印Linux中网络系统的状态信息，可让你得知整个Linux系统的网络情况。

###  语法 

```shell
netstat(选项)
```

###  选项 

```shell
-a或--all：显示所有连线中的Socket；
-A<网络类型>或--<网络类型>：列出该网络类型连线中的相关地址；
-c或--continuous：持续列出网络状态；
-C或--cache：显示路由器配置的快取信息；
-e或--extend：显示网络其他相关信息；
-F或--fib：显示FIB；
-g或--groups：显示多重广播功能群组组员名单；
-h或--help：在线帮助；
-i或--interfaces：显示网络界面信息表单；
-l或--listening：显示监控中的服务器的Socket；
-M或--masquerade：显示伪装的网络连线；
-n或--numeric：直接使用ip地址，而不通过域名服务器；
-N或--netlink或--symbolic：显示网络硬件外围设备的符号连接名称；
-o或--timers：显示计时器；
-p或--programs：显示正在使用Socket的程序识别码和程序名称；
-r或--route：显示Routing Table；
-s或--statistice：显示网络工作信息统计表；
-t或--tcp：显示TCP传输协议的连线状况；
-u或--udp：显示UDP传输协议的连线状况；
-v或--verbose：显示指令执行过程；
-V或--version：显示版本信息；
-w或--raw：显示RAW传输协议的连线状况；
-x或--unix：此参数的效果和指定"-A unix"参数相同；
--ip或--inet：此参数的效果和指定"-A inet"参数相同。
```

###  实例 

 **列出所有端口 (包括监听和未监听的)** 

```shell
netstat -a     #列出所有端口
netstat -at    #列出所有tcp端口
netstat -au    #列出所有udp端口                             
```

 **列出所有处于监听状态的 Sockets** 

```shell
netstat -l        #只显示监听端口
netstat -lt       #只列出所有监听 tcp 端口
netstat -lu       #只列出所有监听 udp 端口
netstat -lx       #只列出所有监听 UNIX 端口
```

 **显示每个协议的统计信息** 

```shell
netstat -s   显示所有端口的统计信息
netstat -st   显示TCP端口的统计信息
netstat -su   显示UDP端口的统计信息

```shell

 **在netstat输出中显示 PID 和进程名称** 

```shell
netstat -pt
```

`netstat -p`可以与其它开关一起使用，就可以添加“PID/进程名称”到netstat输出中，这样debugging的时候可以很方便的发现特定端口运行的程序。

 **在netstat输出中不显示主机，端口和用户名(host, port or user)** 

当你不想让主机，端口和用户名显示，使用`netstat -n`。将会使用数字代替那些名称。同样可以加速输出，因为不用进行比对查询。

```shell
netstat -an
```

如果只是不想让这三个名称中的一个被显示，使用以下命令:

```shell
netsat -a --numeric-ports
netsat -a --numeric-hosts
netsat -a --numeric-users
```

 **持续输出netstat信息** 

```shell
netstat -c   #每隔一秒输出网络信息
```

 **显示系统不支持的地址族(Address Families)** 

```shell
netstat --verbose
```

在输出的末尾，会有如下的信息：

```shell
netstat: no support for `AF IPX' on this system.
netstat: no support for `AF AX25' on this system.
netstat: no support for `AF X25' on this system.
netstat: no support for `AF NETROM' on this system.
```

 **显示核心路由信息** 

```shell
netstat -r
```

使用`netstat -rn`显示数字格式，不查询主机名称。

 **找出程序运行的端口** 

并不是所有的进程都能找到，没有权限的会不显示，使用 root 权限查看所有的信息。

```shell
netstat -ap | grep ssh
```

找出运行在指定端口的进程：

```shell
netstat -an | grep ':80'
```

 **通过端口找进程ID**
 
```bash
netstat -anp|grep 8081 | grep LISTEN|awk '{printf $7}'|cut -d/ -f1
```

 **显示网络接口列表** 

```shell
netstat -i
```

显示详细信息，像是ifconfig使用`netstat -ie`。

 **IP和TCP分析** 

查看连接某服务端口最多的的IP地址：

```shell
netstat -ntu | grep :80 | awk '{print $5}' | cut -d: -f1 | awk '{++ip[$1]} END {for(i in ip) print ip[i],"\t",i}' | sort -nr
```

TCP各种状态列表：

```shell
netstat -nt | grep -e 127.0.0.1 -e 0.0.0.0 -e ::: -v | awk '/^tcp/ {++state[$NF]} END {for(i in state) print i,"\t",state[i]}'
```

查看phpcgi进程数，如果接近预设值，说明不够用，需要增加：

```shell
netstat -anpo | grep "php-cgi" | wc -l
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
