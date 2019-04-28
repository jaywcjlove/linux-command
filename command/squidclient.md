squidclient
===

squid服务器的客户端管理工具

## 补充说明

**squidclient命令** 使用squid服务器的客户端管理工具，它可以查看squid服务器的详细运行信息和管理squid服务器。

### 语法  

```shell
squidclient(选项)(参数)
```

### 选项  

```shell
-a：不包含“accept:header”；
-r：强制缓存重新加载URL；
-s：安静模式，不输出信息到标准输出设备；
-h：从指定主机获取url
-l：指定一个本地ip地址进行绑定；
-p：端口号，默认为3128；
-m：指定发送请求的方法；
-u：代理认证用户名。
```

### 参数  

URL：指定操作缓存中的URL。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->