csplit
===

将一个大文件分割成小的碎片文件

## 补充说明

**csplit命令** 用于将一个大文件分割成小的碎片，并且将分割后的每个碎片保存成一个文件。碎片文件的命名类似“xx00”，“xx01”。csplit命令是split的一个变体，split只能够根据文件大小或行数来分割，但csplit能够根据文件本身特点来分割文件。

###  语法

```shell
csplit(选项)(参数)
```

###  选项

```shell
-b<输出格式>或--suffix-format=<输出格式>：预设的输出格式其文件名称为xx00，xx01等，用户可以通过改变<输出格式>来改变输出的文件名；
-f<输出字首字符串>或--prefix=<输出字首字符串>：预设的输出字首字符串其文件名为xx00，xx01等，如果制定输出字首字符串为“hello”，则输出的文件名称会变成hello00，hello、01......
-k或--keep-files：保留文件，就算发生错误或中断执行，与不能删除已经输出保存的文件；
-n<输出文件名位数>或--digits=<输出文件名位数>：预设的输出文件名位数其文件名称为xx00，xx01......如果用户指定输出文件名位数为“3”，则输出的文件名称会变成xx000，xx001等；
-q或-s或--quiet或——silent：不显示指令执行过程；
-z或--elide-empty-files：删除长度为0 Byte文件。
```

###  参数

*   文件：指定要分割的原文件；
*   模式：指定要分割文件时的匹配模式。

###  实例

示例测试文件 server.log

```shell
cat server.log
SERVER-1
[con] 10.10.10.1 suc
[con] 10.10.10.2 fai
[dis] 10.10.10.3 pen
[con] 10.10.10.4 suc
SERVER-2
[con] 10.10.10.5 suc
[con] 10.10.10.6 fai
[dis] 10.10.10.7 pen
[con] 10.10.10.8 suc
SERVER-3
[con] 10.10.10.9 suc
[con] 10.10.10.10 fai
[dis] 10.10.10.11 pen
[con] 10.10.10.12 suc
```

需要将server.log分割成server1.log、server2.log、server3.log，这些文件的内容分别取自原文件中不同的SERVER部分：

```shell
[root@localhost split]# csplit server.log /SERVER/ -n2 -s {*} -f server -b "%02d.log"; rm server00.log
[root@localhost split]# ls
server01.log  server02.log  server03.log  server.log
```

 **命令详细说明：** 

```shell
/[正则表达式]/   #匹配文本样式，比如/SERVER/，从第一行到包含SERVER的匹配行。
{*}     #表示根据匹配重复执行分割，直到文件尾停止，使用{整数}的形式指定分割执行的次数。
-s      #静默模式，不打印其他信息。
-n      #指定分割后的文件名后缀的数字个数。比如01、02、03等。
-f      #指定分割后的文件名前缀。
-b      #指定后缀格式。比如%02d.log，类似于C语言中的printf参数格式。
rm server00.log    #是删除第一个文件，因为分割后的的第一个文件没有内容，匹配的单词就位于文件的第一行中。
```


