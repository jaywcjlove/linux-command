telnet
===

登录远程主机和管理(测试ip端口是否连通)

## 补充说明

**telnet命令** 用于登录远程主机，对远程主机进行管理。telnet因为采用明文传送报文，安全性不好，很多Linux服务器都不开放telnet服务，而改用更安全的ssh方式了。但仍然有很多别的系统可能采用了telnet方式来提供远程登录，因此弄清楚telnet客户端的使用方式仍是很有必要的。

### 语法

```shell
telnet(选项)(参数)
```

### 选项

```shell
-8：允许使用8位字符资料，包括输入与输出；
-a：尝试自动登入远端系统；
-b<主机别名>：使用别名指定远端主机名称；
-c：不读取用户专属目录里的.telnetrc文件；
-d：启动排错模式；
-e<脱离字符>：设置脱离字符；
-E：滤除脱离字符；
-f：此参数的效果和指定"-F"参数相同；
-F：使用Kerberos V5认证时，加上此参数可把本地主机的认证数据上传到远端主机；
-k<域名>：使用Kerberos认证时，加上此参数让远端主机采用指定的领域名，而非该主机的域名；
-K：不自动登入远端主机；
-l<用户名称>：指定要登入远端主机的用户名称；
-L：允许输出8位字符资料；
-n<记录文件>：指定文件记录相关信息；
-r：使用类似rlogin指令的用户界面；
-S<服务类型>：设置telnet连线所需的ip TOS信息；
-x：假设主机有支持数据加密的功能，就使用它；
-X<认证形态>：关闭指定的认证形态。
```

### 参数

*   远程主机：指定要登录进行管理的远程主机；
*   端口：指定TELNET协议使用的端口号。

### 实例

```shell
$ telnet 192.168.2.10
Trying 192.168.2.10...
Connected to 192.168.2.10 (192.168.2.10).
Escape character is '^]'.

    localhost (Linux release 2.6.18-274.18.1.el5 #1 SMP Thu Feb 9 12:45:44 EST 2012) (1)

login: root
Password:
Login incorrect
```

一般情况下不允许root从远程登录，可以先用普通账号登录，然后再用su -切到root用户。

```shell
$ telnet 192.168.188.132
Trying 192.168.188.132...
telnet: connect to address 192.168.188.132: Connection refused
telnet: Unable to connect to remote host
```

处理这种情况方法：

1. 确认ip地址是否正确？
1. 确认ip地址对应的主机是否已经开机？
1. 如果主机已经启动，确认路由设置是否设置正确？（使用route命令查看）
1. 如果主机已经启动，确认主机上是否开启了telnet服务？（使用netstat命令查看，TCP的23端口是否有LISTEN状态的行）
1. 如果主机已经启动telnet服务，确认防火墙是否放开了23端口的访问？（使用iptables-save查看）

**启动telnet服务**

```shell
service xinetd restart
```

配置参数，通常的配置如下：

```shell
service telnet
{
    disable = no #启用
    flags = REUSE #socket可重用
    socket_type = stream #连接方式为TCP
    wait = no #为每个请求启动一个进程
    user = root #启动服务的用户为root
    server = /usr/sbin/in.telnetd #要激活的进程
    log_on_failure += USERID #登录失败时记录登录用户名
}
```

如果要配置允许登录的客户端列表，加入
```
only_from = 192.168.0.2 #只允许192.168.0.2登录
```
如果要配置禁止登录的客户端列表，加入
```
no_access = 192.168.0.{2,3,4} #禁止192.168.0.2、192.168.0.3、192.168.0.4登录
```
如果要设置开放时段，加入
```
access_times = 9:00-12:00 13:00-17:00 # 每天只有这两个时段开放服务（我们的上班时间：P）
```

如果你有两个IP地址，一个是私网的IP地址如192.168.0.2，一个是公网的IP地址如218.75.74.83，如果你希望用户只能从私网来登录telnet服务，那么加入
```
bind = 192.168.0.2
```

各配置项具体的含义和语法可参考xined配置文件属性说明（man xinetd.conf）

配置端口，修改services文件：

```shell
# vi /etc/services
```

找到以下两句

```shell
telnet 23/tcp
telnet 23/udp
```

如果前面有#字符，就去掉它。telnet的默认端口是23，这个端口也是黑客端口扫描的主要对象，因此最好将这个端口修改掉，修改的方法很简单，就是将23这个数字修改掉，改成大一点的数字，比如61123。注意，1024以下的端口号是internet保留的端口号，因此最好不要用，还应该注意不要与其它服务的端口冲突。

启动服务：
```
service xinetd restart
```


