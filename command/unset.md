unset
===

删除指定的shell变量或函数

## 补充说明

**unset命令** 用于删除已定义的shell变量（包括环境变量）和shell函数。unset命令不能够删除具有只读属性的shell变量和环境变量。

### 语法  

```shell
unset(选项)(参数)
```

### 选项  

```shell
-f：仅删除函数；
-v：仅删除变量。
```

### 参数  

shell变量或函数：指定要删除的shell变量或shell函数。

### 实例  

使用unset命令将前面所创建的环境变量mylove及其对应的值进行删除，输入如下命令：

```shell
unset -v mylove         #删除指定的环境变量
```

执行以上命令后，系统将删除指定的环境变量。用户可以使用env命令和grep命令对其进行查询。已经删除的环境变量再次使用指令查询时，将出现查询不到指定环境变量的输出信息。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->