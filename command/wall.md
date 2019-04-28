wall
===

向系统当前所有打开的终端上输出信息

## 补充说明

**wall命令** 用于向系统当前所有打开的终端上输出信息。通过wall命令可将信息发送给每位同意接收公众信息的终端机用户，若不给予其信息内容，则wall命令会从标准输入设备读取数据，然后再把所得到的数据传送给所有终端机用户。

### 语法  

```shell
wall(参数)
```

### 参数  

消息：指定广播消息。

### 实例  

```shell
[root@localhost ~]# wall this is a test line

Broadcast message from root (pts/1) (Fri Dec 20 11:36:51 2013):

this is a test line
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->