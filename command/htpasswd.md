htpasswd
===

apache服务器创建密码认证文件

## 补充说明

**htpasswd命令** 是Apache的Web服务器内置工具，用于创建和更新储存用户名、域和用户基本认证的密码文件。

###  语法

###  htpasswd(选项)(参数)

###  选项

```shell
-c：创建一个加密文件；
-n：不更新加密文件，只将加密后的用户名密码显示在屏幕上；
-m：默认采用MD5算法对密码进行加密；
-d：采用CRYPT算法对密码进行加密；
-p：不对密码进行进行加密，即明文密码；
-s：采用SHA算法对密码进行加密；
-b：在命令行中一并输入用户名和密码而不是根据提示输入密码；
-D：删除指定的用户。
```

###  参数

*   用户：要创建或者更新密码的用户名；
*   密码：用户的新密码。

###  实例

 **利用htpasswd命令添加用户** 

```shell
htpasswd -bc .passwd www.jsdig.com php
```

在bin目录下生成一个.passwd文件，用户名www.jsdig.com，密码：php，默认采用MD5加密方式。

 **在原有密码文件中增加下一个用户** 

```shell
htpasswd -b .passwd Jack 123456
```

去掉`-c`选项，即可在第一个用户之后添加第二个用户，依此类推。

 **不更新密码文件，只显示加密后的用户名和密码** 

```shell
htpasswd -nb Jack 123456
```

不更新.passwd文件，只在屏幕上输出用户名和经过加密后的密码。

 **利用htpasswd命令删除用户名和密码** 

```shell
htpasswd -D .passwd Jack
```

 **利用htpasswd命令修改密码** 

```shell
htpasswd -D .passwd Jack
htpasswd -b .passwd Jack 123456
```

即先使用htpasswd删除命令删除指定用户，再利用htpasswd添加用户命令创建用户即可实现修改密码的功能。


