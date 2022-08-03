pwconv
===

用来开启用户的投影密码

## 补充说明

**pwconv命令** 用来开启用户的投影密码。Linux系统里的用户和群组密码，分别存放在名称为passwd和group的文件中， 这两个文件位于`/etc`目录下。因系统运作所需，任何人都得以读取它们，造成安全上的破绽。投影密码将文件内的密码改存在`/etc`目录下的shadow和gshadow文件内，只允许系统管理者读取，同时把原密码置换为"x"字符，有效的强化了系统的安全性。

###  语法

```shell
pwconv
```

###  实例

```shell
cat /etc/passwd | grep test
test:x:3001:3001::/home/test:/bin/sh
```

此时可以发现密码段是x

```shell
cat /etc/shadow | grep test
test:$6$nYOEWamm$bz07nlv/.RgJufb3FAqJJeULfwybzgxmrWqbk7O4vI0KsT6N.ujrh6dDIUcAJdfjksyuyAFDPIngZeD3cgcf.0:15022:0:99999:7:::
```


