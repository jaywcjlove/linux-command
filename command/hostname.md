hostname
===

显示和设置系统的主机名

## 补充说明

**hostname命令** 
用于显示和设置系统的主机名称。

- 环境变量 `HOSTNAME` 也保存了当前的主机名。
- 在使用 `hostname` 命令设置主机名后，系统并不会永久保存新的主机名，重启之后还是原来的主机名。如果需要永久修改主机名，需要修改 `/etc/hosts` 和 `/etc/sysconfig/network` 的相关内容并进行重启；也可以使用 `hostnamectl` 命令进行永久修改。

### 语法

```shell
hostname [-b] {hostname|-F file}           设置主机名称（或从文件获取）
hostname [-a|-A|-d|-f|-i|-I|-s|-y]         显示格式化的名称
hostname                                   显示主机名称

{yp,nis,}domainname {nisdomain|-F file}    设置 NIS 主机名称（或从文件获取）
{yp,nis,}domainname                        显示 NIS 主机名称

dnsdomainname                              显示 DNS 主机名称

hostname -V|--version|-h|--help            打印信息并退出
```

### 选项

```shell
-a, --alias               显示主机别名
-A, --all-fqdns           显示所有FQDN名称
-b, --boot                如果没有可用的主机名，则设置默认主机名
-d, --domain              显示DNS域名
-f, --fqdn, --long        显示FQDN名称
-F, --file                从给定文件中读取主机名或NIS域名
-i, --ip-address          显示主机的ip地址
-I, --all-ip-addresses    显示主机所有的ip地址
-s, --short               显示短主机名称，在第一个点处截断
-y, --yp, --nis           显示NIS域名
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
```

显示主机的所有IP地址
```shell
[root@AY1307311912260196fcZ ~]# hostname -I
10.17.0.1 10.18.0.10 172.17.0.1
```


