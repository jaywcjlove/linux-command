dpkg-trigger
===

Debian Linux下的软件包触发器

## 补充说明

**dpkg-trigger命令** 是Debian Linux下的软件包触发器。

### 语法  

```shell
dpkg-trigger(选项)(参数)
```

### 选项  

```shell
--check-supported：检查运行的dpkg是否支持触发器，返回值为0，则支持触发器。
--help：显示帮助信息；
--admindir=<目录>：设置dpkg数据库所在的目录；
--no-act：仅用于测试，不执行任何操作；
--by-package=<软件包>：覆盖触发器等待者。
```

### 参数  

触发器名：指定触发器名称。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->