cut
===

选取文件每一行中的指定部分并打印到标准输出

## 补充说明

**cut 命令** 按字节（`-b`）、字符（`-c`）或字段（`-f`）选取文件中每一行的指定部分，打印到标准输出。没有指定文件，或文件为 `-` 时，读取标准输入。

使用时必须给出 `-b`、`-c`、`-f` 之一。cut 不能用来显示或合并文件（那是 `cat` 的用途），`cut f1 f2` 会报错 `you must specify a list of bytes, characters, or fields`。

### 语法

```shell
cut（选项）（参数）
```

### 选项

```shell
-b：仅显示行中指定字节范围的内容；
-c：仅显示行中指定范围的字符；
-d：指定字段的分隔符，默认的字段分隔符为“TAB”；
-f：显示指定字段的内容；
-n：GNU cut 会忽略该选项（POSIX 中它与 -b 连用，表示不分割多字节字符）；
--complement：补足被选择的字节、字符或字段；
--output-delimiter=字段分隔符：指定输出内容的字段分隔符，默认与输入的分隔符相同；
--help：显示指令的帮助信息；
--version：显示指令的版本信息。
```

### 参数

文件：指定要进行内容过滤的文件。

### 实例

例如有一个学生报表信息，包含 No、Name、Mark、Percent：

```shell
[root@localhost text]# cat test.txt
No Name Mark Percent
01 tom 69 91
02 jack 71 87
03 alex 68 98

```

使用  **-f**  选项提取指定字段（这里的 f 参数可以简单记忆为 `--fields`的缩写）：

```shell
[root@localhost text]# cut -f 1 test.txt
No
01
02
03
```

```shell
[root@localhost text]# cut -f2,3 test.txt
Name Mark
tom 69
jack 71
alex 68

```

 **--complement**  选项提取指定字段之外的列（打印除了第二列之外的列）：

```shell
[root@localhost text]# cut -f2 --complement test.txt
No Mark Percent
01 69 91
02 71 87
03 68 98
```

使用  **-d**  选项指定字段分隔符：

```shell
[root@localhost text]# cat test2.txt
No;Name;Mark;Percent
01;tom;69;91
02;jack;71;87
03;alex;68;98
```

```shell
[root@localhost text]# cut -f2 -d";" test2.txt
Name
tom
jack
alex

```

### 指定字段的字符或者字节范围

cut 命令可以将一串字符作为列来显示，字符字段的记法：

* **N-** ：从第 N 个字节、字符、字段到结尾；
* **N-M** ：从第 N 个字节、字符、字段到第 M 个（包括 M 在内）字节、字符、字段；
* **-M** ：从第 1 个字节、字符、字段到第 M 个（包括 M 在内）字节、字符、字段。

上面是记法，结合下面选项将摸个范围的字节、字符指定为字段：

* **-b**  表示字节；
* **-c**  表示字符；
* **-f**  表示定义字段。

**示例**

```shell
[root@localhost text]# cat test.txt
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz

```

打印第 1 个到第 3 个字符：

```shell
[root@localhost text]# cut -c1-3 test.txt
abc
abc
abc
abc
abc

```

打印前 2 个字符：

```shell
[root@localhost text]# cut -c-2 test.txt
ab
ab
ab
ab
ab

```

打印从第 5 个字符开始到结尾：

```shell
[root@localhost text]# cut -c5- test.txt
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
efghijklmnopqrstuvwxyz
```

打印最后5个字符: 

遗憾的是, `cut`并没有提供最后字符的支持. 不过我们可以通过字符串反转来实现. 

```shell
[root@localhost text]# cat test.txt| rev | cut -c -5 | rev
vwxyz
vwxyz
vwxyz
vwxyz
vwxyz
```

<!-- Linux 命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
