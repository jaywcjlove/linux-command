scp
===

加密的方式在本地主机和远程主机之间复制文件

## 补充说明

**scp命令** 用于在Linux下进行远程拷贝文件的命令，和它类似的命令有cp，不过cp只是在本机进行拷贝不能跨服务器，而且scp传输是加密的。可能会稍微影响一下速度。当你服务器硬盘变为只读read only system时，用scp可以帮你把文件移出来。另外，scp还非常不占资源，不会提高多少系统负荷，在这一点上，rsync就远远不及它了。虽然 rsync比scp会快一点，但当小文件众多的情况下，rsync会导致硬盘I/O非常高，而scp基本不影响系统正常使用。

### 语法  

```shell
scp(选项)(参数)
```

### 选项  

```shell
-1：使用ssh协议版本1；
-2：使用ssh协议版本2；
-4：使用ipv4；
-6：使用ipv6；
-B：以批处理模式运行；
-C：使用压缩；
-F：指定ssh配置文件；
-i：identity_file 从指定文件中读取传输时使用的密钥文件（例如亚马逊云pem），此参数直接传递给ssh；
-l：指定宽带限制；
-o：指定使用的ssh选项；
-P：指定远程主机的端口号；
-p：保留文件的最后修改时间，最后访问时间和权限模式；
-q：不显示复制进度；
-r：以递归方式复制。
```

### 参数  

* 源文件：指定要复制的源文件。
* 目标文件：目标文件。格式为`user@host：filename`（文件名为目标文件的名称）。

### 实例  

从远程复制到本地的scp命令与上面的命令雷同，只要将从本地复制到远程的命令后面2个参数互换顺序就行了。

 **从远处复制文件到本地目录** 

```shell
scp root@10.10.10.10:/opt/soft/nginx-0.5.38.tar.gz /opt/soft/
```

从10.10.10.10机器上的`/opt/soft/`的目录中下载nginx-0.5.38.tar.gz 文件到本地`/opt/soft/`目录中。

**从亚马逊云复制OpenVPN到本地目录** 

```shell
scp -i amazon.pem ubuntu@10.10.10.10:/usr/local/openvpn_as/etc/exe/openvpn-connect-2.1.3.110.dmg openvpn-connect-2.1.3.110.dmg
```
从10.10.10.10机器上下载openvpn安装文件到本地当前目录来。

 **从远处复制到本地** 

```shell
scp -r root@10.10.10.10:/opt/soft/mongodb /opt/soft/
```

从10.10.10.10机器上的`/opt/soft/`中下载mongodb目录到本地的`/opt/soft/`目录来。

 **上传本地文件到远程机器指定目录** 

```shell
scp /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest
# 指定端口 2222
scp -rp -P 2222 /opt/soft/nginx-0.5.38.tar.gz root@10.10.10.10:/opt/soft/scptest
```

复制本地`/opt/soft/`目录下的文件nginx-0.5.38.tar.gz到远程机器10.10.10.10的`opt/soft/scptest`目录。

 **上传本地目录到远程机器指定目录** 

```shell
scp -r /opt/soft/mongodb root@10.10.10.10:/opt/soft/scptest
```

上传本地目录`/opt/soft/mongodb`到远程机器10.10.10.10上`/opt/soft/scptest`的目录中去。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
