history
===

显示或操作历史列表。

## 概要

```shell
history [-c] [-d offset] [n]
history -anrw [filename]
history -ps arg [arg...]
```

## 主要用途

- 显示历史列表。

- 操作历史列表。

## 选项

```shell
-c           清空历史列表。
-d offset    根据offset删除记录。如果是正数则表示offset位置的记录，如果为负数则表示从结尾向前offset位置的记录。
-a           将当前终端的历史记录行添加到历史记录文件。
-n           将尚未从历史文件中读取的历史行追加到当前历史列表中。
-r           读取历史文件，并将其内容附加到历史列表中。
-w           将当前历史记录列表附加到历史记录文件中并且附加它们到历史列表中。
-p           在每个arg上执行历史记录扩展并在标准输出上显示结果，而不将结果存储在历史记录列表中。
-s           将每个arg作为单个条目附加到历史记录列表。
```

## 参数

n：可选，只列出最近的n条记录。

filename：可选，表示历史文件；默认调用顺序为`filename`、环境变量`HISTFILE`、`~/.bash_history`。

## 返回值

返回成功，除非提供了非法选项或出现了错误。

## 例子

使用history命令显示最近使用的 5 条历史命令

```shell
[root@localhost ~]# history 5
   97  cd .ssh/
   98  ls
   99  cat known_hosts
  100  exit
  101  history 10
```

清空历史记录

```shell
[root@localhost ~]# history -c
```

删除制定的行

```shell
[root@localhost ~]# history -d <指定行号>
[root@localhost ~]# history -d 2243
```

快捷执行一条历史命令

```shell
# 执行第 n 条历史命令
[root@localhost ~]# !n

# 执行最后一条 xxx 开头的命令
[root@localhost ~]# !xxx
```


### 注意

1. 在命令行中，可以使用符号`!`执行指定序号的历史命令。例如，要执行第2个历史命令，则输入`!2`。
2. 关闭终端后，历史列表将被写入历史文件`~/.bash_history`。
3. 环境变量`HISTSIZE`决定了历史文件中命令的存储数量，默认存储1000条。
4. 环境变量`HISTTIMEFORMAT`如果是非空值，则使用其值作为`strftime(3)`打印相关时间戳的格式字符串添加在每个显示的历史记录之前；否则不会打印时间戳。
5. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。



