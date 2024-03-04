ack
===

比grep好用的文本搜索工具

## 安装

```shell
# ubuntu下要安装ack-grep，因为在debian系中，ack这个名字被其他的软件占用了。
sudo apt-get install ack-grep
# alpine Linux-apk软件包管理器 安装 ack
apk install ack
```

## 参数

这些参数在linux上的使用频率是相当高的，尤其是你用vim做为IDE的话

```shell
-c(统计)/ -i(忽略大小)/ -h(不显示名称)/
-l(只显文件名)/ -n(加行号)/ -v(显示不匹配)
```

## 特点

ack官网列出了这工具的5大卖点：

1. 速度非常快,因为它只搜索有意义的东西。
2. 更友好的搜索，忽略那些不是你源码的东西。
3. 为源代码搜索而设计，用更少的击键完成任务。
4. 非常轻便，移植性好。
5. 免费且开源

## 实例  

在记忆的时候大体上可以分为这几个部分：

> Searching 代码搜索  
> Search output 搜索结果处理  
> File presentation 文件展示  
> File finding 文件查找  
> File inclusion/exclusion 文件过滤  

grep常用操作

```shell
grep -r 'hello_world' # 简单用法
grep '^hello_world' . # 简单正则
ls -l | grep .py # 管道用法
```

### Searching

简单的文本搜索，默认是递归的。

```
ack-grep hello
ack-grep -i hello
ack-grep -v hello
ack-grep -w hello
ack-grep -Q 'hello*'
```

### Search File

对搜索结果进行处理，比如只显示一个文件的一个匹配项，或者xxx

```shell
ack-grep --line=1       # 输出所有文件第二行
ack-grep -l 'hello'     # 包含的文件名
ack-grep -L 'print'     # 非包含文件名
```

### File presentation

输出的结果是以什么方式展示呢，这个部分有几个参数可以练习下

```shell
ack-grep hello --pager='less -R'    # 以less形式展示
ack-grep hello --noheading      # 不在头上显示文件
ack-grep hello --nocolor        # 不对匹配字符着色
```

### File finding
没错，它可以查找文件，以省去你要不断的结合find和grep的麻烦，虽然在linux的思想是一个工具做好一件事。

```shell
ack-grep -f hello.py     # 查找全匹配文件
ack-grep -g hello.py$    # 查找正则匹配文件
ack-grep -g hello  --sort-files     # 查找然后排序
```

### File inclusion/exclusion

文件过滤，个人觉得这是一个很不错的功能。如果你曾经在搜索项目源码时不小心命中日志中的某个关键字的话，你会觉得这个有用。

```shell
ack-grep --python hello       # 查找所有python文件
ack-grep -G hello.py$ hello   # 查找匹配正则的文件
```

## 参考资料

- [ack官网](https://beyondgrep.com/)
