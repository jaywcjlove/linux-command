dpkg-divert
===

Debian Linux中创建并管理一个转向列表

## 补充说明

**dpkg-divert命令** 是Debian Linux中创建并管理一个转向（diversion）列表，其使得安装文件的默认位置失效的工具。

###  语法

```shell
dpkg-divert(选项)(参数)
```

###  选项

```shell
--add：添加一个转移文件；
--remove：删除一个转移文件；
--list：列出匹配的转移；
--truename：对应转移文件真实文件名；
--quidet：安静模式。
```

###  参数

文件：指定转移文件名。

###  实例

指定软件包wibble安装时，写入`/usr/bin/example.foo`，而不是`/usr/bin/example`：

```shell
dpkg-divert --package wibble --divert /usr/bin/example.foo --rename /usr/bin/example
```

指定软件包wibble安装时，删除对`/usr/bin/example`的转移修改：

```shell
dpkg-divert --package wibble --rename --remove /usr/bin/example
```

删除对`/usr/bin/example`的转移修改：

```shell
dpkg-divert --rename --remove /usr/bin/example
```

添加一个软件包安装时，写入`/usr/bin/example.foo`，而不是`/usr/bin/example`的修改：

```shell
dpkg-divert --divert /usr/bin/example.foo --rename /usr/bin/example
```


