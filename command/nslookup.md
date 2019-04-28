nslookup
===

查询域名DNS信息的工具

## 补充说明

**nslookup命令** 是常用域名查询工具，就是查DNS信息用的命令。

nslookup4有两种工作模式，即“交互模式”和“非交互模式”。在“交互模式”下，用户可以向域名服务器查询各类主机、域名的信息，或者输出域名中的主机列表。而在“非交互模式”下，用户可以针对一个主机或域名仅仅获取特定的名称或所需信息。

进入交互模式，直接输入nslookup命令，不加任何参数，则直接进入交互模式，此时nslookup会连接到默认的域名服务器（即`/etc/resolv.conf`的第一个dns地址）。或者输入`nslookup -nameserver/ip`。进入非交互模式，就直接输入`nslookup 域名`就可以了。

### 语法  

```shell
nslookup(选项)(参数)
```

### 选项  

```shell
-sil：不显示任何警告信息。
```

### 参数  

域名：指定要查询域名。

### 实例  

```shell
[root@localhost ~]# nslookup www.jsdig.com
Server:         202.96.104.15
Address:        202.96.104.15#53

Non-authoritative answer:
www.jsdig.com canonical name = host.1.jsdig.com.
Name:   host.1.jsdig.com
Address: 100.42.212.8
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->