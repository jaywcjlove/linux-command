jwhois
===

whois 客户端服务

## 补充说明

**jwhois**  searches Whois servers for the object on the command line.The host to query is taken from a global configuration file, a configuration file specified on the command line, or selected directly on the command line.

###  语法

```shell
jwhois [选项]
```

###  选项

```shell
--version                  display version number and patch level
--help                     display this help
-v, --verbose              verbose debug output
-c FILE, --config=FILE     use FILE as configuration file
-h HOST, --host=HOST       explicitly query HOST
-n, --no-redirect          disable content redirection
-s, --no-whoisservers      disable whois-servers.net service support
-a, --raw                  disable reformatting of the query
-i, --display-redirections display all redirects instead of hiding them
-p PORT, --port=PORT       use port number PORT (in conjunction with HOST)
-r, --rwhois               force an rwhois query to be made
--rwhois-display=DISPLAY   sets the display option in rwhois queries
--rwhois-limit=LIMIT       sets the maximum number of matches to return
```

> 注：以上英文部分寻求网友协助翻译，翻译结果可发送至 sa(at)linuxde.net，谢谢！

###  实例

显示指定用户信息：

```shell
 jwhois root

# 查找root用户信息
```

查询域名信息：

```shell
[root@localhost ~] jwhois linuxde.net
[Querying whois.verisign-grs.com]
[Redirected to whois.west263.com]
[Querying whois.west263.com]
[whois.west263.com]
Domain Name: linuxde.net                   
Registry Domain id: whois protect
Registrar WHOIS Server: whois.west263.com

...省略部分内容
```


