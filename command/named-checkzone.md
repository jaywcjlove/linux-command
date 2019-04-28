named-checkzone
===

使用named-checkzone命令可以进行区域文件有效性检查和转换，必须指定区域名称和区域文件名称。

## 补充说明

**named-checkzone命令** 可以进行区域文件有效性检查和转换，必须指定区域名称和区域文件名称。

### 语法  

```shell
named-checkzone [选项] [区域名] [区域文件名]
```

### 选项  

```shell
-q 安静模式
-d 启用调试
-c <类别> 指定区域的类别。如果没指定就使用IN
```

### 例子

对区域文件/var/named/192.168.0.rev进行有效性检查和转换。

```shell
[root@localhost ~]# named-checkzone 0.168.192.in-addr.arpa /var/named/192.168.0.rev
zone0.168.192.in-addr.arpa/IN: loaded serial 1268360612
OK
```

对区域文件/var/named/sh.com.hosts进行有效性检查和转换。

```shell
[root@localhost ~]#  named-checkzone sh.com /var/named/sh.com.hosts
zonesh.com/IN: sh.com/MX 'mail.sh.com' is a CNAME (illegal)
zonesh.com/IN: loaded serial 1268360234
OK
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
