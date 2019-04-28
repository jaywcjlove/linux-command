bzcat
===

解压缩指定的.bz2文件

## 补充说明

**bzcat命令** 解压缩指定的.bz2文件，并显示解压缩后的文件内容。保留原压缩文件，并且不生成解压缩后的文件。

### 语法  

```shell
bzcat(参数)
```

### 参数  

.bz2压缩文件：指定要显示内容的.bz2压缩文件。

### 实例  

将`/tmp/man.config`以bzip2格式压缩：

```shell
bzip2 -z man.config
```

此时man.config会变成man.config.bz2

将上面的压缩文件内容读出来：

```shell
bzcat man.config.bz2
```

此时屏幕上会显示 man.config.bz2 解压缩之后的文件内容。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->