uupick
===

命令处理传送进来的文件。

## 补充说明

**uupick命令** 处理传送进来的文件。 当其他主机通过UUCP将文件传送进来时，可利用uupick指令取出这些文件。

### 语法  

```shell
uupick [-v][-I<配置文件>][-s<主机>][-x<层级>][--help]
```

### 选项  

```shell
-I<配置文件>或--config<配置文件> 指定配置文件。
-s<主机>或--system<主机> 处理由指定主机传送过来的文件。
-v或--version 显示版本信息。
--help 显示帮助。
```

### 例子

处理由主机localhost传送过来的文件。在命令行直接输入如下命令：

```shell
uupick-s localhost
```

该命令通常没有输出。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->