read
===

从键盘读取变量值

## 补充说明

**read命令** 从键盘读取变量的值，通常用在shell脚本中与用户进行交互的场合。该命令可以一次读取多个变量的值，变量和输入的值都需要使用空格隔开。在read命令后面，如果没有指定变量名，读取的数据将被自动赋值给特定的变量REPLY

###  语法

```shell
read(选项)(参数)
```

###  选项

```shell
-p：指定读取值时的提示符；
-t：指定读取值时等待的时间（秒）。
```

###  参数

变量：指定读取值的变量名。

###  实例

下面的列表给出了read命令的常用方式：

```shell
read 1987name
从标准输入读取输入并赋值给变量1987name。
```

```shell
read first last
从标准输入读取输入到第一个空格或者回车，将输入的第一个单词放到变量first中，并将该行其他的输入放在变量last中。
```

```shell
read
从标准输入读取一行并赋值给特定变量REPLY。
```

```shell
read -a arrayname
把单词清单读入arrayname的数组里。
```

```shell
read -p "text"
打印提示（text），等待输入，并将输入存储在REPLY中。
```

```shell
read -r line
允许输入包含反斜杠。
```

```shell
read -t 3
指定读取等待时间为3秒。
```

```shell
read -n 2 var
从输入中读取两个字符并存入变量var，不需要按回车读取。
```

```shell
read -d ":" var
用定界符“:”结束输入行。
```

## read命令示例  

从标准输入读取输入并赋值给变量1987name。

```shell
#read 1987name        #等待读取输入，直到回车后表示输入完毕，并将输入赋值给变量answer
HelloWorld            #控制台输入Hello

#echo $1987name       #打印变量
HelloWorld
```

等待一组输入，每个单词之间使用空格隔开，直到回车结束，并分别将单词依次赋值给这三个读入变量。

```shell
#read one two three
1 2 3                   #在控制台输入1 2 3，它们之间用空格隔开。

#echo "one = $one, two = $two, three = $three"
one = 1, two = 2, three = 3
```

REPLY示例

```shell
#read                  #等待控制台输入，并将结果赋值给特定内置变量REPLY。
This is REPLY          #在控制台输入该行。 

#echo $REPLY           #打印输出特定内置变量REPLY，以确认是否被正确赋值。

This is REPLY
```

-p选项示例

```shell
#read -p "Enter your name: "            #输出文本提示，同时等待输入，并将结果赋值给REPLY。
Enter you name: stephen                 #在提示文本之后输入stephen

#echo $REPLY
stephen
```

等待控制台输入，并将输入信息视为数组，赋值给数组变量friends，输入信息用空格隔开数组的每个元素。

```shell
#read -a friends
Tim Tom Helen

#echo "They are ${friends[0]}, ${friends[1]} and ${friends[2]}."
They are Tim, Tom and Helen.
```

 **补充一个终端输入密码时候，不让密码显示出来的例子。** 

方法1：

```shell
#!/bin/bash
read -p "输入密码：" -s pwd
echo
echo password read, is "$pwd"
```

方法2：

```shell
#!/bin/bash
stty -echo
read -p "输入密码：" pwd
stty echo
echo
echo 输入完毕。
```

其中，选项`-echo`禁止将输出发送到终端，而选项`echo`则允许发送输出。

使用read命令从键盘读取变量值，并且将值赋给指定的变量，输入如下命令：

```shell
read v1 v3          #读取变量值
```

执行上面的指令以后，要求键入两个数据，如下所示：

```shell
Linux c+            #输入数据
```

完成之后，可以使用echo命令将指定的变量值输出查看，输入如下命令：

```shell
echo $v1 $v3       #输出变量的值
```

执行输出变量值的命令以后，将显示用户所输入的数据值，如下所示：

```shell
Linux c+           #输出变量值
```

注意：使用echo命令输出变量值时，必须在变量名前添加符号`$`。否则，echo将直接输出变量名。


