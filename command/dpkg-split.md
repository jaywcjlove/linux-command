dpkg-split
===

Debian Linux中将大软件包分割成小包

## 补充说明

**dpkg-split命令** 用来将Debian Linux中的大软件包分割成小软件包，它还能够将已分割的文件进行合并。

### 语法  

```shell
dpkg-split(选项)(参数)
```

### 选项  

```shell
-S：设置分割后的每个小文件最大尺寸（以字节为单位）；
-s：分割软件包；
-j<分块文件><分块文件>：把各个分块合并到一起；
-I<分块文件>：显示分块文件的相关信息；
-l：列出不匹配的部分；
-dscard<文件名>：忽略不匹配的部分。
```

### 参数  

软件包：指定需要分割的“.deb”软件包。

### 实例  

把foo.deb分割出N个大小为460KB的文件：

```shell
dpkg-split -s foo.deb
```

合并分割文件：

```shell
dpkg-split -j "foo*"
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->