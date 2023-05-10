dig
===

域名查询工具

## 补充说明

**dig命令** 是常用的域名查询工具，可以用来测试域名系统工作是否正常。

###  语法

```shell
dig(选项)(参数)
```

###  选项

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

###  参数

*   主机：指定要查询域名主机；
*   查询类型：指定DNS查询的类型；
*   查询类：指定查询DNS的class；
*   查询选项：指定查询选项。

###  实例

```shell
[root@localhost ~]# dig www.baidu.com

; <<>> DiG 9.10.6 <<>> www.baidu.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 57295
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;www.baidu.com.			IN	A

;; ANSWER SECTION:
www.baidu.com.		963	IN	CNAME	www.a.shifen.com.
www.a.shifen.com.	63	IN	A	180.101.50.242
www.a.shifen.com.	63	IN	A	180.101.50.188

;; Query time: 14 msec
;; SERVER: 119.29.29.29#53(119.29.29.29)
;; WHEN: Wed May 10 16:16:36 CST 2023
;; MSG SIZE  rcvd: 101
```


