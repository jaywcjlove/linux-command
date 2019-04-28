pwunconv
===

用来关闭用户的投影密码

## 补充说明

**pwunconv命令** 与pwconv功能相反，用来关闭用户的投影密码。它会把密码从shadow文件内，重回存到passwd文件里。

### 语法  

```shell
pwunconv
```

### 实例  

```shell
pwunconv     # 关闭影子密码
cat /etc/passwd | grep test     # 发现密码已经在passwd文件中了
test:$6$nYOEWamm$bz07nlv/.RgJufb3FAqJJeULfwybzgxmrWqbk7O4vI0KsT6N.ujrh6dDIUcAJdfjksyuyAFDPIngZeD3cgcf.0:3001:3001::/home/test:/bin/sh

ls /etc/shadow     # 查看影子文件，提示没有这个文件或目录
ls: cannot access /etc/shadow: No such file or directory
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->