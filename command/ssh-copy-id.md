ssh-copy-id
===

把本地的ssh公钥文件安装到远程主机对应的账户下

## 补充说明

**ssh-copy-id命令** 可以把本地主机的公钥复制到远程主机的authorized_keys文件上，ssh-copy-id命令也会给远程主机的用户主目录（home）和`~/.ssh`, 和`~/.ssh/authorized_keys`设置合适的权限。

**ssh-copy-id** 使用ssh登陆远程服务器，一般是通过密码校验用户身份，所以在sshd的配制中应该启用密码校验方式：
  将/etc/ssh/sshd_config中的PasswordAuthentication设置为yes，之后重启sshd
###  语法

```shell
ssh-copy-id [-i [identity_file]] [user@]machine
```

###  选项

```shell
-i：指定公钥文件
```

###  实例

1、把本地的ssh公钥文件安装到远程主机对应的账户下：

```shell
ssh-copy-id user@server
ssh-copy-id -i ~/.ssh/id_rsa.pub user@server
```


