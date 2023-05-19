shuf
===

产生随机的排列。

## 概要

```shell
shuf [OPTION]... [FILE]
shuf -e [OPTION]... [ARG]...
shuf -i LO-HI [OPTION]...
```

## 主要用途

- 将输入的内容随机排列并输出。
- 当没有文件或文件为`-`时，读取标准输入。

## 选项

```shell
-e, --echo                  将每个ARG视为输入行。
-i, --input-range=LO-HI     将数字范围LO（最低）到HI（最高）之间的作为输入行。
-n, --head-count=COUNT      只输出前COUNT行。
-o, --output=FILE           将结果写入到文件而不是标准输出。
    --random-source=FILE    将FILE中内容作为随机数据源。
-r, --repeat                输出行可以重复。
-z, --zero-terminated       行终止符为NUL（空字符）而不是默认的换行符。
--help                      显示帮助信息并退出。
--version                   显示版本信息并退出。
```

## 参数

FILE（可选）：要处理的文件，可以为任意数量。

ARG（可选）：作为输入行的字符串，可以为任意数量。

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

```shell
# 模拟硬币抛掷，获取前10个结果：
[user2@pc ~]$ shuf -r -n 10 -e "正面" -e "反面"
反面
正面
正面
正面
反面
反面
反面
正面
正面
正面
```

```shell
[user2@pc ~]$ shuf -i 1-35 -n 5|sort -n && shuf -i 1-12 -n 2|sort -n
4
17
20
29
31
6
11
```


### 注意

1. 该命令是`GNU coreutils`包中的命令，更多详细的帮助信息请查看`man -s 1 shuf`，`info coreutils 'shuf invocation'`。


