groupmems
===

管理用户主要组的成员

## 补充说明

`groupmems` 命令允许用户管理他/她自己的组成员列表，而不需要超级用户权限。`groupmems` 实用程序适用于将其用户配置为以他们自己的名义主组（即来宾/来宾）的系统。

只有作为管理员的超级用户可以使用 `groupmems` 来更改其他组的成员资格。

### 语法

```shell
groupmems -a user_name | -d 用户名 | [-g 用户组名] | -l | -p
```

### 选项

```bash
-a, --add user_name # 将用户添加到组成员列表。如果 /etc/gshadow 文件存在，并且该组在 /etc/gshadow 文件中没有条目，则将创建一个新条目。

-d, --delete user_name
# 从组成员列表中删除用户。
# 如果 /etc/gshadow 文件存在，用户将从组的成员和管理员列表中删除。
# 如果 /etc/gshadow 文件存在，并且该组在 /etc/gshadow 文件中没有条目，则将创建一个新条目。

-g, --group group_name # 超级用户可以指定要修改的组成员列表。
-l, --list             # 列出组成员列表。
-p, --purge            # 从组成员列表中清除所有用户。
# 如果 /etc/gshadow 文件存在，并且该组在 /etc/gshadow 文件中没有条目，则将创建一个新条目。
```

## 配置

`/etc/login.defs` 中的以下配置变量会更改此工具的行为：

```shell
MAX_MEMBERS_PER_GROUP (number)
```

每个组条目的最大成员数。 当达到最大值时，在 `/etc/group` 中启动一个新的组条目（行）（具有相同的名称、相同的密码和相同的 GID）。

默认值为 0，表示组中的成员数量没有限制。

此功能（拆分组）允许限制组文件中的行长度。 这有助于确保 NIS 组的行不超过 1024 个字符。

如果你需要强制执行这样的限制，你可以使用 25。

注意：并非所有工具都支持拆分组（即使在 Shadow 工具包中）。 除非你真的需要它，否则你不应该使用这个变量。

## 例子

groupmems 可执行文件应该在模式 2770 中作为用户 root 和组组。 系统管理员可以将用户添加到组中，以允许或禁止他们使用 groupmems 实用程序来管理他们自己的组成员列表。

```shell
groupadd -r groups
chmod 2770 groupmems

chown root.groups groupmems
groupmems -g groups -a gk4
```

让我们创建一个新用户和一个新组并验证结果：

```shell
useradd student
passwd student
groupadd staff
```

使用户 student 成为组人员的成员：

```shell
groupmems -g staff -a student
groupmems -g staff -l 
```

将用户添加到组：

```shell
groupmems -a mike -g SUPPORT
groupmems --add mike -g SUPPORT 
```

从组中删除/移除用户：

```shell
groupmems -d mike SUPPORT -g SUPPORT
groupmems --delete mike SUPPORT -g SUPPORT
```

更改组名称：

```shell
groupmems -g SUPPORT
```

从组中删除用户：

```shell
groupmems -p -g SUPPORT
groupmems --purge -g SUPPORT
```

要列出组的成员：

```shell
groupmems -l -g SUPPORT
groupmems --list -g SUPPORT
```
