dnsdomainname
===

定义DNS系统中FQDN名称的域名

## 补充说明

**dnsdomainname命令** 用于定义DNS系统中FQDN名称中的域名。

###  语法

```shell
dnsdomainname(选项)
```

###  选项

```shell
-v：详细信息模式，输出指令执行的详细信息。
```

###  实例

```shell
[root@AY1307311912260196fcZ ~]# dnsdomainname -v
gethostname()=`AY1307311912260196fcZ'
Resolving `AY1307311912260196fcZ' ...
Result: h_name=`AY1307311912260196fcZ'
Result: h_addr_list=`10.160.7.81'
```


