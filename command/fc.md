fc
===

显示历史列表中的命令或修改指定的历史命令并执行。

## 概要

```shell
fc [-e ename] [-lnr] [first] [last]
fc -s [pat=rep] [command]
```

## 主要用途

- 显示历史列表中的命令。

- 编辑并重新执行历史列表的命令。

## 选项

```shell
-e ename                  选择使用的编辑器，默认调用次序为环境变量`FCEDIT`、环境变量`EDITOR`、`vi`。
-l                        列出而不是编辑。
-n                        列出时不输出行号（需配合-l选项）。
-r                        倒序列出命令，最近执行的先列出（需配合-l选项）。
-s [pat=rep] [command]    command（未指定时为最后执行的命令）将在pat替换为rep后重新执行。
```

## 参数

first：可选；可以是字符串（以该字符串开头的最新命令）、数字（历史列表索引，负数代表当前命令号的偏移）；未指定时设置为前一个命令并且偏移量为-16（最近的16条命令）。

last：可选；可以是字符串（以该字符串开头的最新命令）、数字（历史列表索引，负数代表当前命令号的偏移）；未指定时设置为参数first。

## 返回值

返回成功或执行命令的状态，当错误出现时返回非0值。

## 例子

替换命令参数:

```shell
# 列出 ~ 目录
ls ~
# 替换 ~ 为 / ，替换后列出根目录， 
fc -s ~=/
```

显示最近使用的10条历史命令：

```shell
[root@localhost ~]# fc -l -10
1039     type -a grep
1040     export
1041     history 10
1042     ulimit -a
1043     shopt
1044     help ls
1045     help env
1046     help short
1047     help shopt
1048     showkey -a
```

编辑第1040条历史命令：

```shell
[root@localhost ~]# fc 1040
```


### 注意

1. 关闭终端后，历史列表将被写入历史文件`~/.bash_history`。
2. 环境变量`FCEDIT`的值为`fc`默认的编辑器。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。



