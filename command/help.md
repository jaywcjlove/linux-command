help
===

显示帮助信息

## 补充说明

**help命令** 用于显示shell内部命令的帮助信息。help命令只能显示shell内部的命令帮助信息。而对于外部命令的帮助信息只能使用man或者info命令查看。

### 语法  

```shell
help(选项)(参数)
```

### 选项  

```shell
-s：输出短格式的帮助信息。仅包括命令格式。
```

### 参数  

内部命令：指定需要显示帮助信息的shell内部命令。

### 实例  

使用help命令显示shell内部shopt命令的帮助信息，输入如下命令：

```shell
help shopt                #获取shopt命令的帮助信息
shopt: shopt [-pqsu] [-o long-option] optname [optname...]
    Toggle the values of variables controlling optional behavior.
    The -s flag means to enable (set) each OPTNAME; the -u flag
    unsets each OPTNAME.  The -q flag suppresses output; the exit
    status indicates whether each OPTNAME is set or unset.  The -o
    option restricts the OPTNAMEs to those defined for use with
    `set -o'.  With no options, or with the -p option, a list of all
    settable options is displayed, with an indication of whether or
    not each is set.
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->