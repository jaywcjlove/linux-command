mysqladmin
===

MySQL服务器管理客户端

## 补充说明

**mysqladmin命令** 是mysql服务器管理任务的客户端工具，它可以检查mytsql服务器的配置和当前工作状态，创建和删除数据库，创建用户和修改用户密码等操作。

###  语法

```shell
mysqladmin(选项)(参数)
```

###  选项

```shell
-h：MySQL服务器主机名或ip地址；
-u：连接MySQL服务器的用户名；
-p：连接MySQL服务器的密码；
--help：显示帮助信息。
```

###  参数

管理命令：需要在MySQL服务器上执行的管理命令。

 **mysqladmin支持下列命令：** 

```shell
create databasename：创建一个新数据库；
drop databasename：删除一个数据库及其所有表；
extended-status：给出服务器的一个扩展状态消息；
flush-hosts：清空所有缓存的主机；
flush-logs：清空所有日志；
flush-tables：清空所有表；
flush-privileges：再次装载授权表(同reload)；
kill id,id,...：杀死mysql线程；
password 新口令：将老密码改为新密码；
ping：检查mysqld是否活着；
processlist：显示服务其中活跃线程列表；
reload：重载授权表；
refresh：清空所有表并关闭和打开日志文件；
shutdown：关掉服务器；
status：给出服务器的简短状态消息；
variables：打印出可用变量；
version：得到服务器的版本信息。
```


