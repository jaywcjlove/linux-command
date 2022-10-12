useradd
===

创建的新的系统用户

## 补充说明

**useradd命令** 用于Linux中创建的新的系统用户。useradd可用来建立用户帐号。帐号建好之后，再用passwd设定帐号的密码．而可用userdel删除帐号。使用useradd指令所建立的帐号，实际上是保存在`/etc/passwd`文本文件中。

在Slackware中，adduser指令是个script程序，利用交谈的方式取得输入的用户帐号资料，然后再交由真正建立帐号的useradd命令建立新用户，如此可方便管理员建立用户帐号。在Red Hat Linux中， **adduser命令** 则是useradd命令的符号连接，两者实际上是同一个指令。

###  语法

```shell
useradd(选项)(参数)
```

###  选项

```shell
-b, --base-dir BASE_DIR  # 如果未指定 -d HOME_DIR，则系统的默认基本目录。如果未指定此选项，useradd 将使用 /etc/default/useradd 中的 HOME 变量指定的基本目录，或默认使用 /home。
-c, --comment COMMENT    # 加上备注文字。任何文本字符串。它通常是对登录名的简短描述，目前用作用户全名的字段。
-d, --home HOME_DIR      # 将使用 HOME_DIR 作为用户登录目录的值来创建新用户。 
-D, --defaults           # 变更预设值。
-e, --expiredate EXPIRE_DATE # 用户帐户将被禁用的日期。 日期以 YYYY-MM-DD 格式指定。
-f, --inactive INACTIVE      # 密码过期后到帐户被永久禁用的天数。
-g, --gid GROUP   # 用户初始登录组的组名或编号。组名必须存在。组号必须引用已经存在的组。
-G, --groups GROUP1[,GROUP2,...[,GROUPN]]] # 用户也是其成员的补充组列表。每个组用逗号隔开，中间没有空格。
-h, --help # 显示帮助信息并退出。
-k, --skel SKEL_DIR # 骨架目录，其中包含要在用户的主目录中复制的文件和目录，当主目录由 useradd 创建时。
-K, --key KEY=VALUE # 覆盖 /etc/login.defs 默认值（UID_MIN、UID_MAX、UMASK、PASS_MAX_DAYS 等）。
-l, --no-log-init   # 不要将用户添加到 lastlog 和 faillog 数据库。
-m, --create-home   # 如果用户的主目录不存在，则创建它。
-M                  # 不要创建用户的主目录，即使 /etc/login.defs (CREATE_HOME) 中的系统范围设置设置为 yes。
-N, --no-user-group # 不要创建与用户同名的组，而是将用户添加到由 -g 选项或 /etc/default/useradd 中的 GROUP 变量指定的组中。
-o, --non-unique    # 允许创建具有重复（非唯一）UID 的用户帐户。 此选项仅在与 -o 选项结合使用时有效。
-p, --password PASSWORD # crypt(3) 返回的加密密码。 默认是禁用密码。
-r, --system        # 创建一个系统帐户。
-s, --shell SHELL   # 用户登录 shell 的名称。
-u, --uid UID       # 用户 ID 的数值。
-U, --user-group    # 创建一个与用户同名的组，并将用户添加到该组。
-Z, --selinux-user SEUSER # 用户登录的 SELinux 用户。 默认情况下将此字段留空，这会导致系统选择默认的 SELinux 用户。

# 更改默认值
# 当仅使用 -D 选项调用时，useradd 将显示当前默认值。 当使用 -D 和其他选项调用时，useradd 将更新指定选项的默认值。 有效的默认更改选项是：
```

###  参数

用户名：要创建的用户名。

### 退出值

`useradd` 命令以以下值退出：

```shell
0 成功
1 无法更新密码文件
2 无效的命令语法
3 选项的无效参数
4 UID 已经在使用（并且没有 -o）
6 指定的组不存在
9 用户名已被使用
10 无法更新组文件
12 无法创建主目录
13 无法创建邮件假脱机
14 无法更新 SELinux 用户映射
```

### 文件

```shell
/etc/passwd # 用户帐户信息。
/etc/shadow # 保护用户帐户信息。
/etc/group  # 组帐户信息。
/etc/gshadow # 保护组帐户信息。
/etc/default/useradd # 帐户创建的默认值。
/etc/skel/                                 # 包含默认文件的目录。
/etc/login.defs # 影子密码套件配置。
```

###  实例

新建用户加入组：

```shell
useradd –g sales jack –G company,employees    # -g：加入主要组、-G：加入次要组
```

建立一个新用户账户，并设置ID：

```shell
useradd caojh -u 544
```

需要说明的是，设定ID值时尽量要大于500，以免冲突。因为Linux安装后会建立一些特殊用户，一般0到499之间的值留给bin、mail这样的系统账号。

新建一个普通用户：

```shell
useradd lutixia
```

新建一个系统用户,系统用户一般用于管理服务，无需登录，所以分配nologin，限制其登录系统：
```shell
useradd -r -s /sbin/nologin mq
```

修改创建用户的默认参数，设置密码过期后到永久禁用的不活动时间为30天: 
```shell
useradd -D -f 30
```

