hostname
===

显示和设置系统的主机名

## 补充说明

**hostname命令** 用于显示和设置系统的主机名称。环境变量HOSTNAME也保存了当前的主机名。在使用hostname命令设置主机名后，系统并不会永久保存新的主机名，重新启动机器之后还是原来的主机名。如果需要永久修改主机名，需要同时修改`/etc/hosts`和`/etc/sysconfig/network`的相关内容。(hostnamectl有效的解决了这个问题)

### 语法

```shell
hostname [-b] {hostname|-F file}         set host name (from file)
hostname [-a|-A|-d|-f|-i|-I|-s|-y]       display formatted name
hostname                                 display host name

{yp,nis,}domainname {nisdomain|-F file}  set NIS domain name (from file)
{yp,nis,}domainname                      display NIS domain name

dnsdomainname                            display dns domain name

hostname -V|--version|-h|--help          print info and exit

```

### 选项

```shell
-a, --alias            显示主机别名
-A, --all-fqdns        显示所有FQDN名称
-b, --boot             如果没有可用的主机名，则设置默认主机名
-d, --domain           显示DNS域名
-f, --fqdn, --long     显示FQDN名称
-F, --file             从给定文件中读取主机名或NIS域名
-i, --ip-address       显示主机的ip地址
-I, --all-ip-addresses 显示主机的所有ip地址
-s, --short            显示短主机名称，在第一个点处截断
-y, --yp, --nis        显示NIS域名
```

### 实例

显示主机名

```shell
[root@AY1307311912260196fcZ ~]# hostname
AY1307311912260196fcZ
```


临时改变主机名

```shell
[root@AY1307311912260196fcZ ~]# hostname newname
# 如果需要永久改变需要在/etc/hosts和etc/sysconfig/network进行修改并进行重启, 或者是用hostnamectl进行修改
```

显示主机的所有IP地址

```shell
[root@AY1307311912260196fcZ ~]# hostname -I
10.17.0.1 10.18.0.10 172.17.0.1
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->