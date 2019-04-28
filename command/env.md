env
===

显示系统中已存在的环境变量

## 补充说明

**env命令** 用于显示系统中已存在的环境变量，以及在定义的环境中执行指令。该命令只使用"-"作为参数选项时，隐藏了选项"-i"的功能。若没有设置任何选项和参数时，则直接显示当前的环境变量。

如果使用env命令在新环境中执行指令时，会因为没有定义环境变量"PATH"而提示错误信息"such file or directory"。此时，用户可以重新定义一个新的"PATH"或者使用绝对路径。

### 语法  

```shell
env(选项)(参数)
```

### 选项  

```shell
-i：开始一个新的空的环境；
-u<变量名>：从当前环境中删除指定的变量。
```

### 参数  

*   变量定义：定义在新的环境中变量，定义多个变量定义用空格隔开。格式为“变量名=值”；
*   指定：指定要执行的指令和参数。

### 实例  

```shell
[root@localhost ~]# env
hostname=LinServ-1
TERM=linux
SHELL=/bin/bash
HISTSIZE=1000
SSH_CLIENT=192.168.2.111 2705 22
SSH_TTY=/dev/pts/0
USER=root
LS_COLORS=no=00:fi=00:di=01;34:ln=01;36:pi=40;33:so=01;35:bd=40;33;01:cd=40;33;01:or=01;05;37;41:mi=01;05;37;41:ex=01;32:*.cmd=01;32:*.exe=01;32:*.com=01;32:*.btm=01;32:*.bat=01;32:*.sh=01;32:*.csh=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.bz=01;31:*.tz=01;31:*.rpm=01;31:*.cpio=01;31:*.jpg=01;35:*.gif=01;35:*.bmp=01;35:*.xbm=01;35:*.xpm=01;35:*.png=01;35:*.tif=01;35:
mail=/var/spool/mail/root
PATH=/usr/kerberos/sbin:/usr/kerberos/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin
INPUTRC=/etc/inputrc
pwd=/root
LANG=zh_CN.UTF-8
SHLVL=1
HOME=/root
logname=root
SSH_CONNECTION=192.168.2.111 2705 192.168.2.2 22
LESSOPEN=|/usr/bin/lesspipe.sh %s
G_BROKEN_FILENAMES=1
_=/bin/env
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->