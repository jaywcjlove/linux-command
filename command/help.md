help
===

该命令是bash内建命令，用于显示bash内建命令的帮助信息。

## 补充说明

**help命令** help命令只能显示bash内建命令的帮助信息，而对于外部命令的帮助信息只能使用man或者info命令查看。

###  语法

```shell
help(选项)(参数)
```

###  选项

```shell
-d：显示内建命令的简要描述。
-m：按照man手册的格式输出内建命令的帮助信息。
-s：仅输出内建命令的命令格式。
不指定选项时：输出的帮助信息类似于-m选项，但是缺少段落名称和'SEE ALSO'，'IMPLEMENTATION'部分。
```

###  参数

bash内建命令（可以为多个，请用空格分隔开）。

### 常见问题

Q：有哪些命令是bash内建命令？我如何判断一个命令是否为bash内建命令？

A：您可以在终端使用 'man builtin' 或 'man builtins' 来获取；您可以查看bash内建命令 'type' 的帮助信息。

Q：那么help命令本身的帮助信息如何获取？

A：把help作为参数传给help命令；）

Q：为什么echo也可以用 'man echo' 来查看帮助信息？

A：因为除了bash内建的echo，GNU/linux的coreutils包里也有该命令；在echo的man手册中，DESCRIPTION段落的 'NOTE' 也提示了和同名内建的不同。

PS：当你在shell脚本里定义了一个叫 'echo' 的函数，那么调用的时候优先级会如何呢？

请参考 'builtin' 命令

Q：我需要获得更多的bash的相关帮助信息

A：限于篇幅和主题，您可以在终端执行 'man bash' ， 'info bash' ，[访问bash官方网站](http://www.gnu.org/software/bash/)，以及搜索引擎等。


###  实例

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



