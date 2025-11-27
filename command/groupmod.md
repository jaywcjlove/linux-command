groupmod
===

修改系统上的组定义

## 补充说明

**groupmod命令** 通过修改组数据库（ /etc/group 与 /etc/gshadow ）的相应条目来更改指定组的定义，例如GID，组成员，组名称，组密码等。

###  语法

```shell
groupmod (选项) (参数)
```

###  选项

```shell
-a, --append: 与 -U 选项配合使用，将指定用户追加到现有成员列表，而不是采用默认的覆盖方式。
-g, --gid GID: 将组修改为指定值，必须是非负整数且唯一（除非同时使用 -o 选项），以该组为主要组的成员会自动更新以保持该组。
-n, --new-name 新组名称: 设置要修改为的组名称。
-o: 可以设置重复的gid；
-p, --password 密码: 设置组密码（也可以直接修改 /etc/gshadow 文件），密码必须是 crypt 加密后的密文，用于配合 newgrp 命令让非组成员临时切换到该组，但该机制在现代系统中已不推荐使用。
-U, --users user1,user2...: 以逗号分隔的用户列表，将组成员覆盖为该列表；若同时指定 -a 选项，则改为追加到现有成员列表中。
```

###  参数

组名：指定要修改的组。

###  实例

修改 group1 的GID

```shell
groupmod -g 1003 group1
```

修改 group2 的GID为重复的gid 1003

``` shell
groupmod -g 1003 -o  group2
```

修改 group2 名称为 group3

```shell
groupmod -n group3 group2
```

覆盖 group3 的组成员为 user1

```shell
groupmod -U user1 group3
```

追加 user2 user3 到 group3

```shell
groupmod -a -U user2,user3 group3
```

### 说明

部分系统（如 Ubuntu 22.04）上的`groupmod`命令可能不支持 -a 和 -U 选项，可以使用`gpasswd`命令代替。

```shell
groupmod -U user1,user2 groupname
```

等价于

```shell
gpasswd -M "" groupname
gpasswd -M user1,user2 groupname
```

```shell
groupmod -a -U user1,user2,user3 groupname
```

等价于

```shell
gpasswd -a user1 groupname
gpasswd -a user2 groupname
gpasswd -a user3 groupname
```
