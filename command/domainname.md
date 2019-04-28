domainname
===

显示和设置系统的NIS域名

## 补充说明

**domainname命令** 用于显示和设置系统的NIS域名。

### 语法  

```shell
domainname(选项)(参数)
```

### 选项  

```shell
-v：详细信息模式；
-F：指定读取域名信息的文件。
```

### 参数  

NIS域名：指定要设置的NIS域名。

### 实例  

```shell
[root@AY1307311912260196fcZ ~]# domainname -v
getdomainname()=`(none)'
(none)
 [root@AY1307311912260196fcZ ~]# domainname
www.jsdig.com

[root@AY1307311912260196fcZ ~]# domainname -v
getdomainname()=`www.jsdig.com'
www.jsdig.com
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->