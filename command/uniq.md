uniq
===

显示或忽略重复的行。

## 概要

```shell
uniq [OPTION]... [INPUT [OUTPUT]]
```

## 主要用途

- 将输入文件（或标准输入）中邻近的重复行写入到输出文件（或标准输出）中。
- 当没有选项时，邻近的重复行将合并为一个。


## 选项

```shell
-c, --count                在每行开头增加重复次数。
-d, --repeated             所有邻近的重复行只被打印一次。
-D                         所有邻近的重复行将全部打印。
--all-repeated[=METHOD]    类似于 -D，但允许每组之间以空行分割。METHOD取值范围{none(默认)，prepend，separate}。
-f, --skip-fields=N        跳过对前N个列的比较。
--group[=METHOD]           显示所有行，允许每组之间以空行分割。METHOD取值范围：{separate(默认)，prepend，append，both}。
-i, --ignore-case          忽略大小写的差异。
-s, --skip-chars=N         跳过对前N个字符的比较。
-u, --unique               只打印非邻近的重复行。
-z, --zero-terminated      设置行终止符为NUL（空），而不是换行符。
-w, --check-chars=N        只对每行前N个字符进行比较。
--help                     显示帮助信息并退出。
--version                  显示版本信息并退出。
```

## 参数

INPUT（可选）：输入文件，不提供时为标准输入。

OUTPUT（可选）：输出文件，不提供时为标准输出。

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

注意：命令2和命令3结果一样，命令1仅作了相邻行的去重。

```shell
uniq file.txt
sort file.txt | uniq
sort -u file.txt
```

只显示单一行，区别在于是否执行排序：

```shell
uniq -u file.txt
sort file.txt | uniq -u
```

统计各行在文件中出现的次数：

```shell
sort file.txt | uniq -c
```

在文件中找出重复的行：

```shell
sort file.txt | uniq -d
```


### 注意

1. `uniq`只检测邻近的行是否重复，`sort -u`将输入文件先排序然后再处理重复行。 

2. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 uniq`，`info coreutils 'uniq invocation'`。


