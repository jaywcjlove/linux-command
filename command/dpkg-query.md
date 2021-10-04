dpkg-query
===

Debian Linux中软件包的查询工具

## 补充说明

**dpkg-query命令** 是Debian Linux中软件包的查询工具，它从dpkg软件包数据库中查询并辨识软件包的信息。

###  语法

```shell
dpkg-query(选项)(参数)
```

###  选项

```shell
-l：列出符合匹配模式的软件包；
-s：查询软件包的状态信息；
-L：显示软件包所安装的文件列表；
-S：从安装的软件包中查询文件；
-w：显示软件包信息；
-c：显示软件包的控制文件路径；
-p：显示软件包的细节。
```

###  参数

软件包名称：指定需要查询的软件包。

###  实例

查找文件file1在哪个包里安装：

```shell
dpkg-query -S file1
```

列出ubuntu下所安装软件列表：

```shell
dpkg-query -W --showformat='${Package} ${Version}\n' > filename
```

查看软件包详细信息：

```shell
dpkg-query -s capistrano
```

查看软件包安装时安装到系统的文件列表：

```shell
dpkg-query -L capistrano
```

列出所有安装的包：

```shell
dpkg-query -l
```

查看软件包的确切状态（是否安装）以及版本号：

```shell
dpkg-query -W -f='${Status} ${Version}\n' apache-perl
```


