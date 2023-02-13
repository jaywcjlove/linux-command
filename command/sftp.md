sftp
===

交互式的文件传输程序

## 补充说明

**sftp命令** 是一款交互式的文件传输程序，命令的运行和使用方式与ftp命令相似，但是，sftp命令对传输的所有信息使用ssh加密，它还支持公钥认证和压缩等功能。

###  语法

```shell
sftp(选项)(参数)
```

###  选项

```shell
-B：指定传输文件时缓冲区的大小；
-l：使用ssh协议版本1；
-b：指定批处理文件；
-C：使用压缩；
-o：指定ssh选项；
-F：指定ssh配置文件；
-R：指定一次可以容忍多少请求数；
-v：升高日志等级。
```

###  参数

目标主机：指定sftp服务器ip地址或者主机名。

###  实例

建立联接

```shell
$ sftp username@1.1.1.1 # 回车输入密码
```

获取文件下载到指定路径

```shell
sftp> get /export/sftp/test.csv /Users/my/Downloads
Fetching /export/sftp/test.csv to /Users/my/Downloads/test.csv
/export/sftp/test.csv            100%  133     0.3KB/s   00:00
```

上传本地文件到服务器指定路径

```shell
sftp> put /Users/my/Downloads/re-produce.gif /export/sftp
Uploading /Users/my/Downloads/re-produce.gif to /export/sftp/re-produce.gif
/Users/my/Downloads/re-produce.gif            100%  257KB  86.6KB/s   00:02
```

