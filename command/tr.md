tr
===

将字符进行替换压缩和删除

## 补充说明

**tr命令** 可以对来自标准输入的字符进行替换、压缩和删除。它可以将一组字符变成另一组字符，经常用来编写优美的单行命令，作用很强大。

###  语法

```shell
tr(选项)(参数)
```

###  选项

```shell
-c或——complerment：取代所有不属于第一字符集的字符；
-d或——delete：删除所有属于第一字符集的字符；
-s或--squeeze-repeats：把连续重复的字符以单独一个字符表示；
-t或--truncate-set1：先删除第一字符集较第二字符集多出的字符。
```

###  参数

*   字符集1：指定要转换或删除的原字符集。当执行转换操作时，必须使用参数“字符集2”指定转换的目标字符集。但执行删除操作时，不需要参数“字符集2”；
*   字符集2：指定要转换成的目标字符集。

###  实例

将输入字符由大写转换为小写：

```shell
echo "HELLO WORLD" | tr 'A-Z' 'a-z'
hello world
```

'A-Z' 和 'a-z'都是集合，集合是可以自己制定的，例如：'ABD-}'、'bB.,'、'a-de-h'、'a-c0-9'都属于集合，集合里可以使用'\n'、'\t'，可以可以使用其他ASCII字符。

使用tr删除字符：

```shell
echo "hello 123 world 456" | tr -d '0-9'
hello  world 
```

将制表符转换为空格：

```shell
cat text | tr '\t' ' '
```

字符集补集，从输入文本中将不在补集中的所有字符删除：

```shell
echo aa.,a 1 b#$bb 2 c*/cc 3 ddd 4 | tr -d -c '0-9 \n'
 1  2  3  4
```

此例中，补集中包含了数字0~9、空格和换行符\n，所以没有被删除，其他字符全部被删除了。

用tr压缩字符，可以压缩输入中重复的字符：

```shell
echo "thissss is      a text linnnnnnne." | tr -s ' sn'
this is a text line.
```

巧妙使用tr做数字相加操作：

```shell
echo 1 2 3 4 5 6 7 8 9 | xargs -n1 | echo $[ $(tr '\n' '+') 0 ]
```

删除Windows文件“造成”的'^M'字符：

```shell
cat file | tr -s "\r" "\n" > new_file
或
cat file | tr -d "\r" > new_file
```

 **tr可以使用的字符类：** 

```shell
[:alnum:]：字母和数字
[:alpha:]：字母
[:cntrl:]：控制（非打印）字符
[:digit:]：数字
[:graph:]：图形字符
[:lower:]：小写字母
[:print:]：可打印字符
[:punct:]：标点符号
[:space:]：空白字符
[:upper:]：大写字母
[:xdigit:]：十六进制字符  
```

使用方式：

```shell
tr '[:lower:]' '[:upper:]'
```


