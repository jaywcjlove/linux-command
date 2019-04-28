startx
===

用来启动X Window

## 补充说明

**startx命令** 用来启动X Window，实际上启动X Window的程序为xinit。

### 语法  

```shell
startx(参数)
```

### 参数  

*   客户端及选项：X客户端及选项；
*   服务器及选项：X服务器及选项。

### 实例  

要在工作站上或 X 终端上启动 X 会话，请输入：

```shell
startx
```

要在工作站上强制启动 X 会话，请输入： 

```shell
startx -w
```

要为 X 终端启动 X 会话，并注销用户的 telnet 会话，请输入：

```shell
startx; kill -9 $
```

要使用 .xinitrc 脚本启动 X 会话，请输入：

```shell
startx -x .xinitrc
```

要使用 mwm 窗口管理器启动 X 会话，请输入：

```shell
startx -m mwm
```

但是，如果找到启动脚本文件，则忽略`-w`选项。在启动脚本中，启动窗口管理器、装入X资源以及产生X客户机是用户的责任。以下是.xsession脚本的一个示例。

```shell
#!/bin/csh
 (mwm &)
 xrdb -load .Xdefaults
 (xclock -g 75x75+0+0 &)
 (xbiff -g 75x75+101-0 &)
 if ("/dev/lft*" == "`tty`") then
  aixterm -g 80x24+0+0 +ut -C -T `hostname`
 else
  aixterm -g 80x24+0+0 +ut -T `hostname`
 endif
```

对于工作站，startup脚本中的最后一行应该是前台aixterm命令，该命令带有`-C`选项表示控制台信息。对于X终端，startup脚本中的最后一行应该是不带有`-C`选项的前台aixterm命令。另外，由于某些X终端在关闭时不终止telnet会话，所以用户必须在使用热键切换至X会话前退出当前的telnet会话。

`/usr/lib/X11/xdm/Xsession`文件中的xdm命令也可以使用startx命令。这为xdm命令提供了startx命令的功能。

以下是启动X会话一贯使用的文件名。

```shell
$HOME/.xerrors 其中，startx 用来重定向错误消息。在缺省情况下，startx 将错误重定向至用户主目录中的 .xerrors 文件中。
$HOME/.Xinit,  
$HOME/.xinit,  
$HOME/.Xinitrc,  
$HOME/.xinitrc,  
$HOME/.xsession 作为包含 shell 命令的“启动文件”来启动窗口管理器、装入 X 资源并产生 X 客户机。
$HOME/.Xdefaults,  
$HOME/.xresources 作为装入的 X 资源文件来设置 X 客户机的用户首选项。
$HOME/.mwmrc mwm 配置文件。
$HOME/.twmrc twm 配置文件。
$HOME/.awmrc awm 配置文件。
$HOME/.uwmrc uwm 配置文件。
/dev/lft* 终端或 tty、工作站初始 login shell 的界面。
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->