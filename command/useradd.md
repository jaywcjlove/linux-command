useradd
===

创建的新的系统用户

## 补充说明

**useradd命令** 用于Linux中创建的新的系统用户。useradd可用来建立用户帐号。帐号建好之后，再用passwd设定帐号的密码．而可用userdel删除帐号。使用useradd指令所建立的帐号，实际上是保存在`/etc/passwd`文本文件中。

在Slackware中，adduser指令是个script程序，利用交谈的方式取得输入的用户帐号资料，然后再交由真正建立帐号的useradd命令建立新用户，如此可方便管理员建立用户帐号。在Red Hat Linux中， **adduser命令** 则是useradd命令的符号连接，两者实际上是同一个指令。

### 语法  

```shell
useradd(选项)(参数)
```

### 选项  

```shell
-c<备注>：加上备注文字。备注文字会保存在passwd的备注栏位中；
-d<登入目录>：指定用户登入时的启始目录；
-D：变更预设值；
-e<有效期限>：指定帐号的有效期限；
-f<缓冲天数>：指定在密码过期后多少天即关闭该帐号；
-g<群组>：指定用户所属的群组；
-G<群组>：指定用户所属的附加群组；
-m：自动建立用户的登入目录；
-M：不要自动建立用户的登入目录；
-n：取消建立以用户名称为名的群组；
-r：建立系统帐号；
-s<shell>：指定用户登入后所使用的shell；
-u<uid>：指定用户id。
```

### 参数  

用户名：要创建的用户名。

### 实例  

新建用户加入组：

```shell
useradd –g sales jack –G company,employees    //-g：加入主要组、-G：加入次要组
```

建立一个新用户账户，并设置ID：

```shell
useradd caojh -u 544
```

需要说明的是，设定ID值时尽量要大于500，以免冲突。因为Linux安装后会建立一些特殊用户，一般0到499之间的值留给bin、mail这样的系统账号。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->