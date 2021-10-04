grpconv
===

用来开启群组的投影密码

## 补充说明

**grpconv命令** 用来开启群组的投影密码。Linux系统里的用户和群组密码，分别存放在`/etc`目录下的passwd和group文件中。因系统运作所需，任何人都得以读取它们，造成安全上的破绽。投影密码将文件内的密码改存在`/etc`目录下的shadow和gshadow文件内，只允许系统管理者读取，同时把原密码置换为"x"字符。投影密码的功能可随时开启或关闭，您只需执行grpconv指令就能开启群组投影密码。

###  语法

```shell
grpconv
```

###  实例

设置cdy组密码

```shell
groupmod --password 123456 cdy
cat /etc/group | grep cdy
cdy:123456:1000:     # 看出密码是123456
```

启动影子系统

```shell
grpconv
cat /etc/group |  grep cdy
cdy:x:1000:      # 看出密码段已经被x替代

cat /etc/gshadow | grep cdy
cdy:123456::      # 已经移到影子文件了
```

注：gshadow, shadow只有root权限才可以查看。


