apt-key
===

管理Debian Linux系统中的软件包密钥

## 补充说明

**apt-key命令** 用于管理Debian Linux系统中的软件包密钥。每个发布的deb包，都是通过密钥认证的，apt-key用来管理密钥。

### 语法  

```shell
apt-key(参数)
```

### 参数  

操作指令：APT密钥操作指令。

### 实例  

```shell
apt-key list          # 列出已保存在系统中key。
apt-key add keyname   # 把下载的key添加到本地trusted数据库中。
apt-key del keyname   # 从本地trusted数据库删除key。
apt-key update        # 更新本地trusted数据库，删除过期没用的key。
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->