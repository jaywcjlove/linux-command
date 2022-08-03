hostnamectl
===

查询或更改系统主机名

## 补充说明

hostnamectl可用于查询和更改系统主机名和相关设置。

### 语法

```bash
hostnamectl [选项...] 指令 ...
```
### 指令

```bash
status                 显示当前主机名设置
set-hostname NAME      设置系统主机名
set-icon-name NAME     设置主机的图标名称
set-chassis NAME       设置主机的机箱类型 
set-deployment NAME    设置主机的部署环境 
set-location NAME      设置主机位置
```

### 选项

```bash
-h --help               显示此帮助
    --version           显示包的版本
    --no-ask-password   不提示输入密码
-H --host=[USER@]HOST   在远程主机上操作
-M --machine=CONTAINER  在本地容器上执行操作。指定要连接到的容器名称。
--transient, --static, --pretty  
                        如果调用了status（或者没有给出显式命令）并且指定了其中一个开关，hostnamectl将只打印出这个选定的主机名。
```

### 实例

显示主机名设置

```bash
$ hostnamectl status
```


改变主机名(永久修改,不用重启哦~)

```bash
$ sudo hostnamectl set-hostname newname
```

