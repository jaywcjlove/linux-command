rpmquery
===

从RPM数据库中查询软件包信息

## 补充说明

**rpmquery命令** 使用多种依据从rpm数据库中查询软件包信息。

###  语法

```shell
rpmquery(选项)
```

###  选项

```shell
-qf：查询指定的文件所属的软件包；
-q：查询指定的软件包是否被安装；
-qc：查询软件包中的配置文件；
-qd：查询软件包中的文档文件；
-qi：查询软件包的基本信息。
```

###  实例

使用rpmquery命令查询指定文件所属的软件包：

```shell
[root@localhost ~]# rpmquery -qf /usr/bin/htpasswd
httpd-2.2.3-81.el5.centos
```


