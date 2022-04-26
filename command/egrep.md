egrep
===

在文件内查找指定的字符串

## 补充说明

**egrep命令** 用于在文件内查找指定的字符串。egrep执行效果与`grep -E`相似，使用的语法及参数可参照grep指令，与grep的不同点在于解读字符串的方法。egrep是用extended regular expression语法来解读的，而grep则用basic regular expression 语法解读，extended regular expression比basic regular expression的表达更规范。

###  语法

```shell
egrep(选项)(查找模式)(文件名1，文件名2，……)
```

###  实例

显示文件中符合条件的字符。例如，查找当前目录下所有文件中包含字符串"Linux"的文件，可以使用如下命令：

```shell
egrep Linux *
```

结果如下所示：

```shell
# 以下五行为 testfile 中包含Linux字符的行
testfile:hello Linux!
testfile:Linux is a free Unix-type operating system.
testfile:This is a Linux testfile!
testfile:Linux
testfile:Linux

# 以下两行为testfile1中含Linux字符的行
testfile1:helLinux!
testfile1:This a Linux testfile!

# 以下两行为 testfile_2 中包含Linux字符的行
testfile_2:Linux is a free unix-type opterating system
testfile_2:Linux test
```

过滤注释行和空白行

```shell
egrep -v '^\s*(#|$)' filename
```
