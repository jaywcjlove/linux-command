getsebool
===

查询SElinux策略内各项规则的布尔值

## 补充说明

**getsebool命令** 是用来查询SElinux策略内各项规则的布尔值。SELinux的策略与规则管理相关命令：seinfo命令、sesearch命令、getsebool命令、setsebool命令、semanage命令。

###  语法

```shell
getsebool [-a] [布尔值条款]
```

###  选项

```shell
-a：列出目前系统上面的所有布尔值条款设置为开启或关闭值。
```

###  实例

查询本系统内所有的布尔值设置状况：

```shell
getsebool -a
NetworkManager_disable_trans --> off
allow_console_login --> off
allow_cvs_read_shadow --> off
allow_daemons_dump_core --> on
....(底下省略)....
```

查询httpd_enable_homedirs是否为关闭，若没关闭，请关闭它：

```shell
getsebool httpd_enable_homedirs
setsebool -P httpd_enable_homedirs=0    # 0是关闭  1是开启
```


