groupadd
===

用于创建一个新的工作组

## 补充说明

**groupadd命令** 用于创建一个新的工作组，新工作组的信息将被添加到系统文件中。

### 语法  

```shell
groupadd(选项)(参数)
```

### 选项  

```shell
-g：指定新建工作组的id；
-r：创建系统工作组，系统工作组的组ID小于500；
-K：覆盖配置文件“/ect/login.defs”；
-o：允许添加组ID号不唯一的工作组。
```

### 参数  

组名：指定新建工作组的组名。

### 实例  

建立一个新组，并设置组ID加入系统：

```shell
groupadd -g 344 jsdigname
```

此时在`/etc/passwd`文件中产生一个组ID（GID）是344的项目。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->