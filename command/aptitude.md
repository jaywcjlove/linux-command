aptitude
===

Debian Linux系统中软件包管理工具

## 补充说明

**aptitude命令** 与apt-get命令一样，都是Debian Linux及其衍生系统中功能极其强大的包管理工具。与apt-get不同的是，aptitude在处理依赖问题上更佳一些。举例来说，aptitude在删除一个包时，会同时删除本身所依赖的包。这样，系统中不会残留无用的包，整个系统更为干净。它通过文本操作菜单和命令两种方式管理软件包。

### 语法  

```shell
aptitude(选项)(参数)
```

### 选项  

```shell
-h：显示帮助信息；
-d：仅下载软件包，不执行安装操作；
-P：每一步操作都要求确认；
-y：所有问题都回答“yes”；
-v：显示附加信息；
-u：启动时下载新的软件包列表。
```

### 参数  

操作命令：用户管理软件包的操作命令。

### 实例  

以下是我总结的一些常用aptitude命令，仅供参考：

```shell
aptitude update            # 更新可用的包列表
aptitude upgrade           # 升级可用的包
aptitude dist-upgrade      # 将系统升级到新的发行版
aptitude install pkgname   # 安装包
aptitude remove pkgname    # 删除包
aptitude purge pkgname     # 删除包及其配置文件
aptitude search string     # 搜索包
aptitude show pkgname      # 显示包的详细信息
aptitude clean             # 删除下载的包文件
aptitude autoclean         # 仅删除过期的包文件
```

当然，你也可以在文本界面模式中使用 aptitude。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->