comm
===

两个文件之间的比较

## 补充说明

**comm命令** 可以用于两个文件之间的比较，它有一些选项可以用来调整输出，以便执行交集、求差、以及差集操作。

*   交集：打印出两个文件所共有的行。
*   求差：打印出指定文件所包含的且不相同的行。
*   差集：打印出包含在一个文件中，但不包含在其他指定文件中的行。

### 语法  

```shell
comm [选项]... 文件1 文件2
```

### 选项  

```shell
如果不附带选项，程序会生成三列输出。
第一列包含文件1 特有的行，
第二列包含文件2 特有的行，
而第三列包含两个文件共有的行。

  -1    不输出文件1 特有的行
  -2    不输出文件2 特有的行
  -3    不输出两个文件共有的行

--check-order     检查输入是否被正确排序，即使所有输入行均成对
--nocheck-order   不检查输入是否被正确排序
--output-delimiter=STR  依照STR 分列
```

### 参数  

* 文件1：指定要比较的第一个**有序**文件；
* 文件2：指定要比较的第二个**有序**文件。

### 实例  

文本 `aaa.txt` 内容

```shell
[root@localhost text]# cat aaa.txt 
aaa
bbb
ccc
ddd
eee
111
222
```

文本 `bbb.txt` 内容

```shell
[root@localhost text]# cat bbb.txt 
bbb
ccc
aaa
hhh
ttt
jjj
```

两个文件之间的比较，如果没有排序需要带上`--nocheck-order`参数， 没有带上参数将会收到提示，此命令重要之功能在于比较。

```shell
comm: 文件2 没有被正确排序
comm: 文件1 没有被正确排序
```

比较结果

```shell
[root@localhost text]# comm --nocheck-order aaa.txt bbb.txt 
aaa
                bbb
                ccc
        aaa
ddd
eee
111
222
        hhh
        ttt
        jjj
第一列  第二列  第三列
```

输出的第一列只包含在aaa.txt中出现的行，第二列包含在bbb.txt中出现的行，第三列包含在aaa.txt和bbb.txt中相同的行。各列是以制表符（\t）作为定界符。

### 有序比较

有序比较，先通过 sort 将文件内容排序

```shell
[root@localhost ~]# sort aaa.txt > aaa1.txt
[root@localhost ~]# sort bbb.txt > bbb1.txt
```

有序比较结果：

```shell
[root@localhost ~]# comm aaa1.txt bbb1.txt
111
222
		aaa
		bbb
		ccc
ddd
eee
	hhh
	jjj
	ttt
```

### 交集

打印两个文件的交集，需要删除第一列和第二列：

```shell
[root@localhost text]# comm aaa.txt bbb.txt -1 -2
bbb
ccc
```

**求差** 

打印出两个文件中不相同的行，需要删除第三列：

```shell
[root@localhost text]# comm aaa.txt bbb.txt -3 | sed 's/^\t//'
aaa
aaa
ddd
eee
111
222
hhh
ttt
jjj
```

`sed 's/^\t//'` 是将制表符`\t`删除，以便把两列合并成一列。

### 差集

通过删除不需要的列，可以得到aaa.txt和bbb.txt的差集：

aaa.txt的差集

```shell
[root@localhost text]# comm aaa.txt bbb.txt -2 -3
aaa
ddd
eee
111
222
```

bbb.txt的差集

```shell
[root@localhost text]# comm aaa.txt bbb.txt -1 -3
aaa
hhh
ttt
jjj
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->