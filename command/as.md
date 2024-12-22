as
===

汇编语言编译器

## 补充说明

**as命令** 是GNU组织推出的一款汇编语言编译器，它支持多种不同类型的处理器。

### 语法

```shell
as [选项] [参数]
```

### 选项

```shell
-ac：忽略失败条件；
-ad：忽略调试指令；
-ah：包括高级源；
-al：包括装配；
-am：包括宏扩展；
-an：忽略形式处理；
-as：包括符号；
=file：设置列出文件的名字；
--alternate：以交互宏模式开始；
-f：跳过空白和注释预处理；
-g：产生调试信息；
-J：对于有符号溢出不显示警告信息；
-L：在符号表中保留本地符号；
-o：指定要生成的目标文件；
--statistics：打印汇编所用的最大空间和总时间。
```

### 参数

汇编文件：指定要汇编的源文件。

### 示例

编译一个汇编文件并生成目标文件

```shell
as -o output.o source.s
```

忽略调试指令并生成目标文件

```shell
as -ad -o output.o source.s
```

生成包含调试信息的目标文件

```shell
as -g -o output.o source.s
```

包括宏扩展并生成目标文件

```shell
as -am -o output.o source.s
```

打印汇编所用的最大空间和总时间

```shell
as --statistics -o output.o source.s
```

跳过空白和注释预处理并生成目标文件

```shell
as -f -o output.o source.s
```