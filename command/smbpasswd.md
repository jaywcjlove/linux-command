smbpasswd
===

samba用户和密码管理工具

## 补充说明

**smbpasswd命令** 属于samba套件，能够实现添加或删除samba用户和为用户修改密码。

###  语法

```shell
smbpasswd(选项)(参数)
```

###  选项

```shell
-a：向smbpasswd文件中添加用户；
-c：指定samba的配置文件；
-x：从smbpasswd文件中删除用户；
-d：在smbpasswd文件中禁用指定的用户；
-e：在smbpasswd文件中激活指定的用户；
-n：将指定的用户的密码置空。
```

###  参数

用户名：指定要修改SMB密码的用户。


