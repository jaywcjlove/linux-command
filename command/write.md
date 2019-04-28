write
===

向指定登录用户终端上发送信息

## 补充说明

**write命令** 用于向指定登录用户终端上发送信息。通过write命令可传递信息给另一位登入系统的用户，当输入完毕后，键入EOF表示信息结束，write命令就会将信息传给对方。如果接收信息的用户不只登入本地主机一次，你可以指定接收信息的终端机编号。

### 语法  

```shell
write(参数)
```

### 参数  

```shell
用户：指定要接受信息的登录用户；
登陆终端：指定接收信息的用户的登录终端。
```

### 实例  

传信息给Rollaend，此时Rollaend只有一个连线 : 

```shell
write Rollaend
```

接下来就是将信息打上去，结束请Ctrl+C：

传信息给Rollaend、Rollaend的连线有pts/2、pts/3：

```shell
write Rollaend pts/2
```

接下来就是将信息打上去，结束请Ctrl+C：

若对方设定`mesg n`，则此时信息将无法传给对方。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->