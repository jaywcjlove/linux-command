chpasswd
===

批量更新用户口令的工具

## 补充说明

**chpasswd命令** 是批量更新用户口令的工具，是把一个文件内容重新定向添加到`/etc/shadow`中。

###  语法

```shell
chpasswd(选项)
```

###  选项

```shell
-e：输入的密码是加密后的密文；
-h：显示帮助信息并退出；
-m：当被支持的密码未被加密时，使用MD5加密代替DES加密。
```

###  实例

先创建用户密码对应文件，格式为`username:password`，如`abc:abc123`，必须以这种格式来书写，并且不能有空行，保存成文本文件user.txt，然后执行chpasswd命令：

```shell
chpasswd < user.txt
```

以上是运用chpasswd命令来批量修改密码。是linux系统管理中的捷径。


