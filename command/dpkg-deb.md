dpkg-deb
===

Debian Linux下的软件包管理工具

## 补充说明

**dpkg-deb命令** 是Debian Linux下的软件包管理工具，它可以对软件包执行打包和解包操作以及提供软件包信息。

###  语法

```shell
dpkg-deb(选项)(参数)
```

###  选项

```shell
-c：显示软件包中的文件列表；
-e：将主控信息解压；
-f：把字段内容打印到标准输出；
-x：将软件包中的文件释放到指定目录下；
-X：将软件包中的文件释放到指定目录下，并显示释放文件的详细过程；
-w：显示软件包的信息；
-l：显示软件包的详细信息；
-R：提取控制信息和存档的清单文件；
-b：创建debian软件包。
```

###  参数

文件：指定要操作的“.deb”软件包的全名或软件名。

###  实例

解压程序文件：

```shell
dpkg-deb -x drcom-pum_1.0-0ubuntu1~ppa1~jaunty1_i386.deb drcom
```

解压控制文件：

```shell
dpkg-deb -e drcom-pum_1.0-0ubuntu1~ppa1~jaunty1_i386.deb drcom/DEBIAN
```

打包生成deb文件：

```shell
dpkg-deb -b drcom drcom_1.4.8.2_i386.deb
```

查询deb包中的文件内容：

```shell
dpkg-deb -c demo.deb
```


