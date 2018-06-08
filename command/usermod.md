usermod
===

用于修改用户的基本信息

## 补充说明

**usermod命令** 用于修改用户的基本信息。usermod命令不允许你改变正在线上的使用者帐号名称。当usermod命令用来改变user id，必须确认这名user没在电脑上执行任何程序。你需手动更改使用者的crontab档。也需手动更改使用者的at工作档。采用NIS server须在server上更动相关的NIS设定。

### 语法

```
usermod(选项)(参数)
```

### 选项

```
-c<备注>：修改用户帐号的备注文字；
-d<登入目录>：修改用户登入时的目录；
-e<有效期限>：修改帐号的有效期限；
-f<缓冲天数>：修改在密码过期后多少天即关闭该帐号；
-g<群组>：修改用户所属的群组；
-G<群组>；修改用户所属的附加群组；
-l<帐号名称>：修改用户帐号名称；
-L：锁定用户密码，使密码无效；
-s<shell>：修改用户登入后所使用的shell；
-u<uid>：修改用户ID；
-U:解除密码锁定。
```

### 参数

登录名：指定要修改信息的用户登录名。

### 实例

将newuser2添加到组staff中：

```
usermod -G staff newuser2
```

修改newuser的用户名为newuser1：

```
usermod -l newuser1 newuser
```

锁定账号newuser1：

```
usermod -L newuser1
```

解除对newuser1的锁定：

```
usermod -U newuser1
```

增加用户到用户组中:

```
apk add shadow # 安装 shadow 包, usermod 命令包含在 usermod 中

usermod -aG group user # 添加用户到用户组中
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->