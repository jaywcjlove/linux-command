declare
===

声明或显示shell变量

## 补充说明

**declare命令** 用于声明和显示已存在的shell变量。当不提供变量名参数时显示所有shell变量。declare命令若不带任何参数选项，则会显示所有shell变量及其值。declare的功能与typeset命令的功能是相同的。

### 语法  

```shell
declare(选项)(参数)
```

### 选项  

```shell
+/-："-"可用来指定变量的属性，"+"则是取消变量所设的属性；
-f：仅显示函数；
r：将变量设置为只读；
x：指定的变量会成为环境变量，可供shell以外的程序来使用；
i：[设置值]可以是数值，字符串或运算式。
```

### 参数  

shell变量：声明shell变量，格式为“变量名=值”。

### 实例  

首先使用declare命令定义shell变量"test"，并且将其值设置为"wangchujiang.com"，输入如下命令：

```shell
declare test='wangchujiang.com'    #定义并初始化shell变量
```

上面的命令执行后，再使用echo命令将该shell变量值输出，输入如下命令：

```shell
echo $test                        #输出shell变量的值
```

上面的指令执行后，其输出的结果如下：

```shell
wangchujiang.com
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->