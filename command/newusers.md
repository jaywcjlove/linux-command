newusers
===

用于批处理的方式一次创建多个命令

## 补充说明

**newusers命令** 用于批处理的方式一次创建多个命令。

###  语法

```shell
newusers(参数)
```

###  参数

用户文件：指定包含用户信息的文本文件，文件的格式要与`/etc/passwd`相同。

###  实例

实用newusers命令批量添加用户：

用法很简单，newusers后面直接跟一个文件，文件格式和`/etc/passwd`的格式相同。

```shell
用户名1:x:UID:GID:用户说明:用户的家目录:所用SHELL
```

举例：

```shell
jingang0:x:520:520::/home/jingang0:/sbin/nologin
jingang1:x:521:521::/home/jingang1:/sbin/nologin
......
```

值得一提的是关于SHELL类型，查看主机上所有SHELL，可以通过chsh来查看：

```shell
[root@localhost beinan]# chsh --list
/bin/sh
/bin/bash
/sbin/nologin
/bin/ksh
/bin/tcsh
/bin/csh
/bin/zsh
```

其中除了`/sbin/nologin`，其它类型的SHELL都能登录系统，nologin大多是虚拟用户用的SHELL，也就是说虽然他是系统用户，但他并无登录系统的权限；如果您想添加这类用户，就把他的SHELL设置成`/sbin/nologin`，比如上面的例子。

关于用户名、UID、GID及用户的家目录是怎么回事，您可以读相应的参考文档。


