chsh
===

用来更换登录系统时使用的shell

## 补充说明

**chsh命令** 用来更换登录系统时使用的shell。若不指定任何参数与用户名称，则chsh会以应答的方式进行设置。

###  语法

```shell
chsh(选项)(参数)
```

###  选项

```shell
-s<shell 名称>或--shell<shell 名称>：更改系统预设的shell环境。；
-l或--list-shells：列出目前系统可用的shell清单；
-u或--help：在线帮助；
-v或-version：显示版本信息。
```

###  参数

用户名：要改变默认shell的用户。

###  实例

 **查看系统安装了哪些shell的两种方法：** 

第一种：

```shell
[rocrocket@localhost ~]$ chsh -l
/bin/sh
/bin/bash
/sbin/nologin
/bin/zsh
```

第二种：

```shell
[rocrocket@localhost ~]$ cat /etc/shells
/bin/sh
/bin/bash
/sbin/nologin
/bin/zsh
```

其实`chsh -l`也是来查看这个文件。

 **查看当前正在使用的shell：** 

```shell
[rocrocket@localhost ~]$ echo $SHELL
/bin/bash
```

注意SHELL一定要是大写。可以看到，目前使用的shell是`/bin/bash`

 **把我的shell改成zsh：** 

```shell
[rocrocket@localhost ~]$ chsh -s /bin/zsh
Changing shell for rocrocket.
Password:
Shell changed.
[rocrocket@localhost ~]$
```

使用chsh加选项`-s`就可以修改登录的shell了！你会发现你现在执行`echo $SHELL`后仍然输出为`/bin/bash`，这是因为你需要重启你的shell才完全投入到zsh怀抱中去。`chsh -s`其实修改的就是`/etc/passwd`文件里和你的用户名相对应的那一行。现在来查看下：

```shell
[rocrocket@localhost ~]$ cat /etc/passwd|grep ^rocrocket
rocrocket:x:500:500:rocrocket,China:/rocrocket/PSB/home:/bin/zsh
```

你可以发现输出内容的最后部分已经变成了`/bin/zsh`了，下次重启的时候，linux就会读取这一命令来启动shell了！

 **把shell修改回/bin/bash：** 

```shell
[rocrocket@localhost ~]$ chsh -s /bin/bash
Changing shell for rocrocket.
Password:
Shell changed.
```


