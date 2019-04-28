gcc
===

基于C/C++的编译器

## 补充说明

**gcc命令** 使用GNU推出的基于C/C++的编译器，是开放源代码领域应用最广泛的编译器，具有功能强大，编译代码支持性能优化等特点。现在很多程序员都应用GCC，怎样才能更好的应用GCC。目前，GCC可以用来编译C/C++、FORTRAN、JAVA、OBJC、ADA等语言的程序，可根据需要选择安装支持的语言。

### 语法  

```shell
gcc(选项)(参数)
```

### 选项  

```shell
-o：指定生成的输出文件；
-E：仅执行编译预处理；
-S：将C代码转换为汇编代码；
-wall：显示警告信息；
-c：仅执行编译操作，不进行连接操作。
```

### 参数  

C源文件：指定C语言源代码文件。

### 实例  

**常用编译命令选项** 

假设源程序文件名为test.c

**无选项编译链接** 

```shell
gcc test.c
```

将test.c预处理、汇编、编译并链接形成可执行文件。这里未指定输出文件，默认输出为a.out。

**选项 -o** 

```shell
gcc test.c -o test
```

将test.c预处理、汇编、编译并链接形成可执行文件test。-o选项用来指定输出文件的文件名。

**选项 -E** 

```shell
gcc -E test.c -o test.i
```

将test.c预处理输出test.i文件。

**选项 -S** 

```shell
gcc -S test.i
```

将预处理输出文件test.i汇编成test.s文件。

**选项 -c** 

```shell
gcc -c test.s
```

将汇编输出文件test.s编译输出test.o文件。

**无选项链接** 

```shell
gcc test.o -o test
```

将编译输出文件test.o链接成最终可执行文件test。

**选项 -O** 

```shell
gcc -O1 test.c -o test
```

使用编译优化级别1编译程序。级别为1~3，级别越大优化效果越好，但编译时间越长。

**多源文件的编译方法** 

如果有多个源文件，基本上有两种编译方法：

假设有两个源文件为test.c和testfun.c

**多个文件一起编译** 

```shell
gcc testfun.c test.c -o test
```

将testfun.c和test.c分别编译后链接成test可执行文件。

**分别编译各个源文件，之后对编译后输出的目标文件链接。** 

```shell
gcc -c testfun.c    #将testfun.c编译成testfun.o
gcc -c test.c       #将test.c编译成test.o
gcc -o testfun.o test.o -o test    #将testfun.o和test.o链接成test
```

以上两种方法相比较，第一中方法编译时需要所有文件重新编译，而第二种方法可以只重新编译修改的文件，未修改的文件不用重新编译。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->