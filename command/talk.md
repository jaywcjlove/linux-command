talk
===

让用户和其他用户聊天

## 补充说明

**talk命令** 是talk服务器的客户端工具，通过talk命令可以让用户和其他用户聊天。linux中talk命令参数程序的使用很简单，只要知道交谈对象的地址，就可以邀请对方交谈。

### 语法  

```shell
talk(参数)
```

### 参数  

*   用户：指定聊天的用户；
*   终端：指定用户的终端。

### 实例  

例如登录在主机rs6000.cic.test.com上的用户jdx希望和登录在主机tirc.cs.test.com上的用户wangxz进行交谈，则可以输入下面的命令：

```shell
talk wangxz@tirc.cs.test.com
```

Internet上的相关程序（Talk Daemon）就会传送一条信息邀请wangxz来交谈，这时用户wangxz的屏幕上就会出现如下信息，并响铃提示：

```shell
Message from Talk_Daemon@tirc.cs.test.com at 21:44 …
talk: connection requested by jdx@rs6000.cic.test.com
talk: respond with:  talk jdx@rs6000.cic.test.com
```

这时，用户wangxz应该做的工作就是按照上面的信息提示，即输入linux中talk命令：

```shell
talk jdx@rs6000.cic.test.com
```

之后，连接建立成功，两个用户就可以进行交谈了。这时，双方的终端屏幕上都将显示信息 **[Connection established]** 并响铃，同时屏幕被linux中talk命令程序以一条水平线分割为上下两部分，上半部分用来显示用户自己输入的内容，下半部分用来显示对方输入的内容。两个用户可以同时输入，他们输入的内容将会立即显示在双方的屏幕上。

在用户进行输入时，可按 **BACKSPACE** 见来更正前一个字符，也可按 **CTRL+w** 来删除一个完整的单词，或者用 **CTRL+U** 来删除一整行，另外，用户还可以通过按 **CTRL+L** 来刷新屏幕。如果要结束交谈，可由任何一方按下 **CTRL+C** 来中断连接，但在结束对话前最好道声“再见”，并等待对方回应。linux中talk命令程序结束时，在屏幕上将回显示一条信息：

```shell
[Connection closing. Exiting]
```

并非每次要求对方交谈都能成功，有时对方没有登录，则linux中talk命令程序提示信息：

```shell
[Your party is not logged on]
```

并退出；如果对方已登录，但因某种原因（如不是正在使用机器）没有响应，那么linux中talk命令程序将会每隔10秒钟给他发一条邀请信息，同时在自己的屏幕上显示：

```shell
[Ringing your party again]
```

如果用户不愿等待，则可以按 **CTRL+C** 终止linux中talk命令程序。还有的时候系统可能出现下面的信息：

```shell
[Checking for invitation on caller’s machine]
```

这说明双方的linux中talk命令程序不兼容，这时可以试试ntalk和ytalk命令，如果没有，就只好找系统管理员了。

如果用户在做某些紧急工作（如编辑邮件）时不希望被linux中talk命令的邀请打搅，他可以使用命令：

```shell
mesg n
```

来暂时拒绝交谈，这时如果有用户邀请他交谈，只能得到提示信息：

```shell
[Your party is refusing messages]
```

不过要注意的是，一旦完成紧急工作。最好立即打开信息接收开关（用命令`mesg y`），否则将会失去很多信息交流的机会。

以上是linux中talk命令参数的是使用方法。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->