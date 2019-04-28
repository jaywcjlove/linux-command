groups
===

用来打印指定用户所属的工作组

## 补充说明

**groups命令** 在标准输入输出上输出指定用户所在组的组成员，每个用户属于`/etc/passwd`中指定的一个组和在`/etc/group`中指定的其他组。

### 语法  

```shell
groups(选项)(参数)
```

### 选项  

```shell
-help：显示命令的帮助信息；
--version：显示命令的版本信息。
```

### 参数  

用户名：指定要打印所属工作组的用户名。

### 实例  

显示linux用户所属的组

```shell
groups linux
linux : linux adm dialout cdrom plugdev lpadmin admin sambashare
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->