dpkg-preconfigure
===

Debian Linux中软件包安装之前询问问题

## 补充说明

**dpkg-preconfigure命令** 用于在Debian Linux中软件包安装之前询问问题。

### 语法  

```shell
dpkg-preconfigure(选项)(参数)
```

### 选项  

```shell
-f：选择使用的前端；
-p：感兴趣的最低的优先级问题；
--apt：在apt模式下运行。
```

### 参数  

软件包：指定“.deb”软件包。

### 实例  

导入debconf模板：

```shell
dpkg-preconfigure /var/cache/apt/archives/mysql-server-5.5*.deb
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->