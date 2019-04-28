gpasswd
===

Linux下工作组文件的管理工具

## 补充说明

**gpasswd命令** 是Linux下工作组文件`/etc/group`和`/etc/gshadow`管理工具。

### 语法  

```shell
gpasswd(选项)(参数)
```

### 选项  

```shell
-a：添加用户到组；
-d：从组删除用户；
-A：指定管理员；
-M：指定组成员和-A的用途差不多；
-r：删除密码；
-R：限制用户登入组，只有组中的成员才可以用newgrp加入该组。
```

### 参数  

组：指定要管理的工作组。

### 实例  

如系统有个peter账户，该账户本身不是groupname群组的成员，使用newgrp需要输入密码即可。

```shell
gpasswd groupname
```

让使用者暂时加入成为该组成员，之后peter建立的文件group也会是groupname。所以该方式可以暂时让peter建立文件时使用其他的组，而不是peter本身所在的组。

所以使用`gpasswd groupname`设定密码，就是让知道该群组密码的人可以暂时切换具备groupname群组功能的。

```shell
gpasswd -A peter users
```

这样peter就是users群组的管理员，就可以执行下面的操作:

```shell
gpasswd -a mary users
gpasswd -a allen users
```

注意：添加用户到某一个组 可以使用`usermod -G group_name user_name`这个命令可以添加一个用户到指定的组，但是以前添加的组就会清空掉。

所以想要添加一个用户到一个组，同时保留以前添加的组时，请使用gpasswd这个命令来添加操作用户：

```shell
gpasswd -a user_name group_name
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->