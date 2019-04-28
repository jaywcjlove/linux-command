sesearch
===

查询SELinux策略的规则详情

## 补充说明

使用seinfo命令可以查询SELinux的策略提供多少相关规则，如果查到的相关类型或者布尔值，想要知道详细规则时，使用 **sesearch命令** 查询。SELinux的策略与规则管理相关命令：seinfo命令、sesearch命令、getsebool命令、setsebool命令、semanage命令。

### 语法  

```shell
sesearch [-a] [-s 主体类型] [-t 目标类型] [-b 布尔值]
```

### 选项  

```shell
-a:列出该类型或布尔值的所有相关信息
-t:后面还要接类型，例如 -t httpd_t
-b:后面还要接布尔值的规则，例如 -b httpd_enable_ftp_server
```

### 实例  

找出目标文件资源类型为`httpd_sys_content_t`的有关信息：

```shell
sesearch -a -t httpd_sys_content_t
```

找出主体进程为`httpd_t`且目标文件类型为httpd相关的所有信息：

```shell
sesearch -s httpd_t -t httpd_* -a
```

查看布尔值`httpd_enable_homedirs`设置了多少规则

```shell
sesearch -b httpd_enable_homedirs -a
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->