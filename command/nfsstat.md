nfsstat
===

列出NFS客户端和服务器的工作状态

## 补充说明

**nfsstat命令** 用于列出NFS客户端和服务器的工作状态。

### 语法  

```shell
nfsstat(选项)
```

### 选项  

```shell
-s：仅列出NFS服务器端状态；
-c：仅列出NFS客户端状态；
-n：仅列出NFS状态，默认显示nfs客户端和服务器的状态；
-2：仅列出NFS版本2的状态；
-3：仅列出NFS版本3的状态；
-4：仅列出NFS版本4的状态；
-m：打印以加载的nfs文件系统状态；
-r：仅打印rpc状态。
```

### 实例  

要显示关于客户机发送和拒绝的RPC和NFS调用数目的信息，输入：

```shell
nfsstat -c
```

要显示和打印与客户机NFS调用相关的信息，输入如下命令：

```shell
nfsstat -cn
```

要显示和打印客户机和服务器的与RPC调用相关的信息，输入如下命令：

```shell
nfsstat -r
```

要显示关于服务器接收和拒绝的RPC和NFS调用数目的信息，输入如下命令：

```shell
nfsstat –s
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->