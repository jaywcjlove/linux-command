host
===

常用的分析域名查询工具

## 补充说明

**host命令** 是常用的分析域名查询工具，可以用来测试域名系统工作是否正常。

### 语法  

```shell
host(选项)(参数)
```

### 选项  

```shell
-a：显示详细的DNS信息；
-c<类型>：指定查询类型，默认值为“IN“；
-C：查询指定主机的完整的SOA记录；
-r：在查询域名时，不使用递归的查询方式；
-t<类型>：指定查询的域名信息类型；
-v：显示指令执行的详细信息；
-w：如果域名服务器没有给出应答信息，则总是等待，直到域名服务器给出应答；
-W<时间>：指定域名查询的最长时间，如果在指定时间内域名服务器没有给出应答信息，则退出指令；
-4：使用IPv4；
-6：使用IPv6.
```

### 参数  

主机：指定要查询信息的主机信息。

### 实例  

```shell
[root@localhost ~]# host www.jsdig.com 
www.jsdig.com is an alias for host.1.jsdig.com.
host.1.jsdig.com has address 100.42.212.8

[root@localhost ~]# host -a www.jsdig.com
Trying "www.jsdig.com"
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 34671
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;www.jsdig.com.               IN      ANY

;; ANSWER SECTION:
www.jsdig.com.        463     IN      CNAME   host.1.jsdig.com.

Received 54 bytes from 202.96.104.15#53 in 0 ms
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->