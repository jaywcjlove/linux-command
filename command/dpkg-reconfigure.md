dpkg-reconfigure
===

Debian Linux中重新配制一个已经安装的软件包

## 补充说明

**dpkg-reconfigure命令** 是Debian Linux中重新配置已经安装过的软件包，可以将一个或者多个已安装的软件包传递给此指令，它将询问软件初次安装后的配置问题。

当用户需要再次对软件包配置的时候，可以使用dpkg-reconfigure命令来对指定的软件包进行配置。

###  语法

```shell
dpkg-reconfigure(选项)(参数)
```

###  选项

```shell
-a：重新配置所有的软件包；
-u或--unseen-only：仅显示未提过的问题；
--default-priority：使用默认优先级，而非“低”级；
--force：强制执行操作，需谨慎使用此选项；
--no-reload：不要轻易的重装模板（使用时请慎重考虑）；
-f或--frontend：指定 debconf 前端界面；
-p或--priority：指定要显示的问题的最优先级；
--terse：开启简要模式。
```

###  参数

软件包名：需要重新配置的已安装的软件包。

###  实例

用于配置语言：

```shell
sudo dpkg-reconfigure locales
```


