exit
===

退出当前的shell

## 补充说明

**exit命令** 同于退出shell，并返回给定值。在shell脚本中可以终止当前脚本执行。执行exit可使shell以指定的状态值退出。若不设置状态值参数，则shell以预设值退出。状态值0代表执行成功，其他值代表执行失败。

### 语法  

```shell
exit(参数)
```

### 参数  

返回值：指定shell返回值。

### 实例  

退出当前shell：

```shell
[root@localhost ~]# exit
logout
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


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->