basename
===

打印目录或者文件的基本名称

## 补充说明

**basename命令** 用于打印目录或者文件的基本名称。basename和dirname命令通常用于shell脚本中的命令替换来指定和指定的输入文件名称有所差异的输出文件名称。

### 语法  

```shell
basename(选项)(参数)
```

### 选项  

```shell
--help：显示帮助；
--version：显示版本号。
```

### 参数  

* 文件：带路径信息的文件；
* 后缀：可选参数，指定要去除的文件后缀字符串。

### 实例  

1、要显示一个shell变量的基本名称，请输入：

```shell
basename $WORKFILE
```

此命令显示指定给shell变量WORKFILE的值的基本名称。如果WORKFILE变量的值是`/home/jim/program.c`文件，则此命令显示program.c。

要构造一个和另一个文件名称相同（除了后缀）的文件名称，请输入：

```shell
OFILE=`basename $1 .c`.o
```

此命令指定给 OFILE 文件第一个位置上的参数（$1）的值，但它的 .c 后缀更改至 .o。如果 $1 是 /home/jim/program.c 文件，则 OFILE 成为 program.o。因为 program.o 仅是一个基本文件名称，它标识在当前目录中的文件。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->