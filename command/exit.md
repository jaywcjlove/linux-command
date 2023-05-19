exit
===

退出当前的shell。

## 概要

```shell
exit [n]
```

## 主要用途

- 执行exit可使shell以指定的状态值退出。若不设置参数，则以最后一条命令的返回值作为exit的返回值退出。

## 参数

n（可选）：指定的shell返回值（整数）。

## 返回值

返回值为你指定的参数n的值，如果你指定的参数大于255或小于0，那么会通过加或减256的方式使得返回值总是处于0到255之间。

## 例子

退出当前shell：

```shell
[root@localhost ~]# exit
logout
```

也可以使用`ctrl+d`退出当前终端，下面列出了打开或关闭该功能的方法：

```shell
# 打开ctrl+d退出终端
set -o ignoreeof
# 关闭ctrl+d退出终端
set +o ignoreeof
```

在脚本中，进入脚本所在目录，否则退出：

```shell
cd $(dirname $0) || exit 1
```

在脚本中，判断参数数量，不匹配就打印使用方式，退出：

```shell
if [ "$#" -ne "2" ]; then
    echo "usage: $0 <area> <hours>"
    exit 2
fi
```

在脚本中，退出时删除临时文件：

```shell
trap "rm -f tmpfile; echo Bye." EXIT
```

检查上一命令的退出码：

```shell
./mycommand.sh
EXCODE=$?
if [ "$EXCODE" == "0" ]; then
    echo "O.K"
fi
```

### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。


