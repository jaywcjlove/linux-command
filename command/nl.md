nl
===

为每一个文件添加行号。

## 概要

```shell
nl [OPTION]... [FILE]...
```

## 主要用途

- 将每一个输入的文件添加行号后发送到标准输出。
- 当没有文件或文件为`-`时，读取标准输入
- 处理逻辑页（logical page）。

## 选项

```shell
-b, --body-numbering=STYLE           使用STYLE 为body部分的行附加行号。
-d, --section-delimiter=CC           使用CC作为logical page的分隔符。
-f, --footer-numbering=STYLE         使用STYLE 为footer部分的行附加行号。
-h, --header-numbering=STYLE         使用STYLE 为header部分的行附加行号。
-i, --line-increment=NUMBER          行号递增间隔为NUMBER。
-l, --join-blank-lines=NUMBER        连续NUMBER行的空行作为一行处理。
-n, --number-format=FORMAT           根据FORMAT插入行号。
-p, --no-renumber                    不要在每个部分重置行号。
-s, --number-separator=STRING        在行号后添加字符串STRING。
-v, --starting-line-number=NUMBER    每部分的起始行号。
-w, --number-width=NUMBER            行号宽度为NUMBER。
--help                               显示帮助信息并退出。
--version                            显示版本信息并退出。


默认选项为：-bt -d'\:' -fn -hn -i1 -l1 -nrn -sTAB -v1 -w6

CC是由两个字符组成的，默认为\: ,第二个字符如果缺失则默认为:

STYLE可以为下列可用值之一：

a       所有行标记行号。
t       仅为非空行标记行号。
n       不标记行号。
pBRE    符合基础正则表达式（BRE）的行会标记行号。

FORMAT可以为下列可用值之一：

ln    左对齐，不会在开始部分补充0以满足宽度。
rn    右对齐，不会在开始部分补充0以满足宽度。
rz    右对齐，会在开始部分补充0以满足宽度。

logical page
三部分组成（header， body， footer）
起始标记（header \:\:\:， body \:\:， footer \:）
```

## 参数

FILE（可选）：要处理的文件，可以为一或多个。

## 返回值

返回0表示成功，返回非0值表示失败。

## 例子

```shell
nl_logicalpage.txt：该文件用于说明nl命令处理逻辑页，内容如下：
\:\:\:
header_1
\:\:
body_1
\:
footer_1
\:\:\:
header_2
\:\:
body_2
\:
footer_2
```

```shell
[user2@pc ~]$ nl nl_logicalpage.txt

       header_1

     1	body_1

       footer_1

       header_2

     1	body_2

       footer_2

[user2@pc ~]$ nl -v0 -fa -ha nl_logicalpage.txt

     0	header_1

     1	body_1

     2	footer_1

     0	header_2

     1	body_2

     2	footer_2

[user2@pc ~]$ nl -p -fa -ha nl_logicalpage.txt

     1	header_1

     2	body_1

     3	footer_1

     4	header_2

     5	body_2

     6	footer_2
```

```shell
nl_normal.txt：该文件用于说明nl命令处理普通文件，内容如下：
ZhuangZhu-74
2019-11-21
127.0.0.1
```

```shell
[user2@pc ~]$ nl nl_normal.txt
     1	ZhuangZhu-74
     2	2019-11-21
     3	127.0.0.1

[user2@pc ~]$ nl -b p'1$' nl_normal.txt
       ZhuangZhu-74
     1	2019-11-21
     2	127.0.0.1

[user2@pc ~]$ nl -b p'^[A-Z]' nl_normal.txt
     1	ZhuangZhu-74
       2019-11-21
       127.0.0.1
```

### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 nl`，`info coreutils 'nl invocation'`。


