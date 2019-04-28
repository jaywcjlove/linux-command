dig
===

域名查询工具

## 补充说明

**dig命令** 是常用的域名查询工具，可以用来测试域名系统工作是否正常。

### 语法  

```shell
dig(选项)(参数)
```

### 选项  

```shell
@<服务器地址>：指定进行域名解析的域名服务器；
-b<ip地址>：当主机具有多个IP地址，指定使用本机的哪个IP地址向域名服务器发送域名查询请求；
-f<文件名称>：指定dig以批处理的方式运行，指定的文件中保存着需要批处理查询的DNS任务信息；
-P：指定域名服务器所使用端口号；
-t<类型>：指定要查询的DNS数据类型；
-x<IP地址>：执行逆向域名查询；
-4：使用IPv4；
-6：使用IPv6；
-h：显示指令帮助信息。
```

### 参数  

*   主机：指定要查询域名主机；
*   查询类型：指定DNS查询的类型；
*   查询类：指定查询DNS的class；
*   查询选项：指定查询选项。

### 实例  

```shell
[root@localhost ~]# dig www.jsdig.com

; <<>> DiG 9.3.6-P1-RedHat-9.3.6-20.P1.el5_8.1 <<>> www.jsdig.com
;; global options:  printcmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 2115
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 2, ADDITIONAL: 0

;; QUESTION SECTION:
;www.jsdig.com.               IN      A

;; ANSWER SECTION:
www.jsdig.com.        0       IN      CNAME   host.1.jsdig.com.
host.1.jsdig.com.     0       IN      A       100.42.212.8

;; AUTHORITY SECTION:
jsdig.com.            8       IN      NS      f1g1ns2.dnspod.net.
jsdig.com.            8       IN      NS      f1g1ns1.dnspod.net.

;; Query time: 0 msec
;; SERVER: 202.96.104.15#53(202.96.104.15)
;; WHEN: Thu Dec 26 11:14:37 2013
;; MSG SIZE  rcvd: 121
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->