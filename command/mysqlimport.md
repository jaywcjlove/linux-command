mysqlimport
===

为MySQL服务器用命令行方式导入数据

## 补充说明

**mysqlimport命令** 为mysql数据库服务器提供了一种命令行方式导入数据工具，它从特定格式的文本文件中读取数据插入MySQL数据库表中。

### 语法  

```shell
mysqlimport(选项)(参数)
```

### 选项  

```shell
-D：导入数据前清空表；
-f：出现错误时继续处理剩余的操作；
-h：MySQL服务器的ip地址或主机名；
-u：连接MySQL服务器的用户名；
-p：连接MySQL服务器的密码。
```

### 参数  

*   数据库名：指定要导入的数据库名称；
*   文本文件：包含特定格式文本文件。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->