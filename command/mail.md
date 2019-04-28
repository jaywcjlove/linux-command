mail
===

命令行下发送和接收电子邮件

## 补充说明

**mail命令** 是命令行的电子邮件发送和接收工具。操作的界面不像elm或pine那么容易使用，但功能非常完整。

### 语法  

```shell
mail(选项)(参数)
```

### 选项  

```shell
-b<地址>：指定密件副本的收信人地址；
-c<地址>：指定副本的收信人地址；
-f<邮件文件>：读取指定邮件文件中的邮件；
-i：不显示终端发出的信息；
-I：使用互动模式；
-n：程序使用时，不使用mail.rc文件中的设置；
-N：阅读邮件时，不显示邮件的标题；
-s<邮件主题>：指定邮件的主题；
-u<用户帐号>：读取指定用户的邮件；
-v：执行时，显示详细的信息。
```

### 参数  

邮件地址：收信人的电子邮箱地址。

### 实例  

 **直接使用shell当编辑器** 

```shell
mail -s "Hello from jsdig.com by shell" admin@jsdig.com
hello,this is the content of mail.
welcome to www.jsdig.com
```

第一行是输入的命令，`-s`表示邮件的主题，后面的`admin@jsdig.com`则是邮件的接收人，输入完这行命令后回车，会进入邮件正文的编写，我们可以输入任何文字，比如上面的两行。当邮件正文输入完成后，需要按 **CTRL+D** 结束输入，此时会提示你输入Cc地址，即邮件抄送地址，没有直接回车就完成了邮件的发送。

 **使用管道进行邮件发送** 

```shell
echo "hello,this is the content of mail.welcome to www.jsdig.com" | mail -s "Hello from jsdig.com by pipe" admin@jsdig.com
```

使用管道直接敲入这行命令即可完成邮件的发送，其中echo后的是邮件正文。

 **使用文件进行邮件发送** 

```shell
mail -s "Hello from jsdig.com by file" admin@jsdig.com < mail.txt
```

使用上面的命令后，我们就可以把mail.txt文件的内容作为邮件的内容发送给admin@jsdig.com了。

使用上述三种方式都可以给外部邮箱进行邮件发送，但因为前面2中都是直接在shell中敲入邮件内容，因此无法输入中文，即使我们使用粘贴的方式输入了中文，那么收到的邮件也是乱码的。但第3种方式，我们可以在window下编辑好邮件内容后，放到linux下，再进行发送，这样就可以正常发送中文了。不过目前邮件的中文标题暂时没有找到解决办法。

因为mail程序本身就是调用sendmail来进行邮件发送的，因此我们可以在mail命令中使用sendmail的参数进行配置，比如我想使用特定的发件人发送邮件，可以使用如下命令：

```shell
mail -s "Hello from jsdig.com with sender" admin@jsdig.com -- -f user@jsdig.com<mail.txt
```

上面的命令中，我们使用了– -f user@jsdig.com这样的参数，这是sendmail的选项，其中-f表示邮件的发送人邮件地址。

很多情况下，我们也需要使用邮件来发送附件，在linux下使用mail命令发送附件也很简单，不过首先需要安装uuencode软件包，这个程序是对二进制文件进行编码使其适合通过邮件进行发送，在CentOS上安装该软件包如下：

```shell
yum install sharutils
```

安装完成后我们就可以来进行附件的发送了，使用如下命令：

```shell
uuencode test.txt test | mail -s "hello,see the attachement" admin@jsdig.com<mail.txt
```

完成后就可以把text.txt文件作为邮件的附件发送出去了。uuencode有两个参数，第一个是要发送的文件，第二个是显示的文件名称。

这里我主要介绍的是在CentOS下使用mail发送电子邮件的一些使用方法，需要的要求是你的linux必须安装了sendmail并开启了，同时保证可以连接外网。另外，文章中提到的命令本人都经过亲自测试，保证完全可用，不过你需要将命令中的电子邮件地址换成自己的电子邮件地址。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->