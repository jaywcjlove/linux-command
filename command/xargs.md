xargs
===

给其他命令传递参数的一个过滤器

## 补充说明

**xargs命令** 是给其他命令传递参数的一个过滤器，也是组合多个命令的一个工具。它擅长将标准输入数据转换成命令行参数，xargs能够处理管道或者stdin并将其转换成特定命令的命令参数。xargs也可以将单行或多行文本输入转换为其他格式，例如多行变单行，单行变多行。xargs的默认命令是echo，空格是默认定界符。这意味着通过管道传递给xargs的输入将会包含换行和空白，不过通过xargs的处理，换行和空白将被空格取代。xargs是构建单行命令的重要组件之一。

### xargs命令用法  

xargs用作替换工具，读取输入数据重新格式化后输出。

定义一个测试文件，内有多行文本数据：

```
cat test.txt

a b c d e f g
h i j k l m n
o p q
r s t
u v w x y z

```

多行输入单行输出：

```
cat test.txt | xargs

a b c d e f g h i j k l m n o p q r s t u v w x y z
```

 **-n选项** 多行输出：

```
cat test.txt | xargs -n3

a b c
d e f
g h i
j k l
m n o
p q r
s t u
v w x
y z
```

 **-d选项** 可以自定义一个定界符：

```
echo "nameXnameXnameXname" | xargs -dX

name name name name
```

结合 **-n选项** 使用：

```
echo "nameXnameXnameXname" | xargs -dX -n2

name name
name name
```

 **读取stdin，将格式化后的参数传递给命令** 

假设一个命令为 sk.sh 和一个保存参数的文件arg.txt：

```
#!/bin/bash
#sk.sh命令内容，打印出所有参数。

echo $*

```

arg.txt文件内容：

```
cat arg.txt

aaa
bbb
ccc

```

xargs的一个 **选项-I** ，使用-I指定一个替换字符串{}，这个字符串在xargs扩展时会被替换掉，当-I与xargs结合使用，每一个参数命令都会被执行一次：

```
cat arg.txt | xargs -I {} ./sk.sh -p {} -l

-p aaa -l
-p bbb -l
-p ccc -l

```

复制所有图片文件到 /data/images 目录下：

```
ls *.jpg | xargs -n1 -I cp {} /data/images
```

 **xargs结合find使用** 

用rm 删除太多的文件时候，可能得到一个错误信息：/bin/rm Argument list too long. 用xargs去避免这个问题：

```
find . -type f -name "*.log" -print0 | xargs -0 rm -f
```

xargs -0将\0作为定界符。

统计一个源代码目录中所有php文件的行数：

```
find . -type f -name "*.php" -print0 | xargs -0 wc -l
```

查找所有的jpg 文件，并且压缩它们：

```
find . -type f -name "*.jpg" -print | xargs tar -czvf images.tar.gz

```

 **xargs其他应用** 

假如你有一个文件包含了很多你希望下载的URL，你能够使用xargs下载所有链接：

```
cat url-list.txt | xargs wget -c

```

### 子Shell（Subshells）  

运行一个shell脚本时会启动另一个命令解释器.，就好像你的命令是在命令行提示下被解释的一样，类似于批处理文件里的一系列命令。每个shell脚本有效地运行在父shell(parent shell)的一个子进程里。这个父shell是指在一个控制终端或在一个xterm窗口中给你命令指示符的进程。

```
cmd1 | ( cmd2; cmd3; cmd4 ) | cmd5
```

如果cmd2 是cd /，那么就会改变子Shell的工作目录，这种改变只是局限于子shell内部，cmd5则完全不知道工作目录发生的变化。子shell是嵌在圆括号()内部的命令序列，子Shell内部定义的变量为局部变量。

子shell可用于为一组命令设定临时的环境变量：

```
COMMAND1
COMMAND2
COMMAND3
(
  IFS=:
  PATH=/bin
  unset TERMINFO
  set -C
  shift 5
  COMMAND4
  COMMAND5
  exit 3 # 只是从子shell退出。
)
# 父shell不受影响，变量值没有更改。
COMMAND6
COMMAND7
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
