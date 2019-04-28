hostname
===

显示和设置系统的主机名

## 补充说明

**hostname命令** 用于显示和设置系统的主机名称。环境变量HOSTNAME也保存了当前的主机名。在使用hostname命令设置主机名后，系统并不会永久保存新的主机名，重新启动机器之后还是原来的主机名。如果需要永久修改主机名，需要同时修改`/etc/hosts`和`/etc/sysconfig/network`的相关内容。

### 语法

```shell
hostname(选项)(参数)
```

### 选项

```shell
-v：详细信息模式；
-a：显示主机别名；
-d：显示DNS域名；
-f：显示FQDN名称；
-i：显示主机的ip地址；
-s：显示短主机名称，在第一个点处截断；
-y：显示NIS域名。
```

### 参数

主机名：指定要设置的主机名。

### 实例

```shell
[root@AY1307311912260196fcZ ~]# hostname
AY1307311912260196fcZ

# change hostname
hostname newname # for now
vi /etc/hosts # forever
reboot
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->