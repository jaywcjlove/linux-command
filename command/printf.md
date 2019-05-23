printf
===

格式化并输出结果

## 补充说明

**printf命令** 格式化并输出结果到标准输出。

### 语法  

```shell
printf(选项)(参数)
--help：在线帮助；
--version：显示版本信息。
```

### 参数  

*   输出格式：指定数据输出时的格式；
*   输出字符串：指定要输出的数据。

 **格式替代符** 

*   %b 相对应的参数被视为含有要被处理的转义序列之字符串。
*   %c ASCII字符。显示相对应参数的第一个字符
*   %d, %i 十进制整数
*   %e, %E, %f 浮点格式
*   %g %e或%f转换，看哪一个较短，则删除结尾的零
*   %G %E或%f转换，看哪一个较短，则删除结尾的零
*   %o 不带正负号的八进制值
*   %s 字符串
*   %u 不带正负号的十进制值
*   %x 不带正负号的十六进制值，使用a至f表示10至15
*   %X 不带正负号的十六进制值，使用A至F表示10至15
*   %% 字面意义的%

 **转义序列** 

*   \a 警告字符，通常为ASCII的BEL字符
*   \b 后退
*   \c 抑制（不显示）输出结果中任何结尾的换行字符（只在%b格式指示符控制下的参数字符串中有效），而且，任何留在参数里的字符、任何接下来的参数以及任何留在格式字符串中的字符，都被忽略
*   \f 换页（formfeed）
*   \n 换行
*   \r 回车（Carriage return）
*   \t 水平制表符
*   \v 垂直制表符
*   \\\\ 一个字面上的反斜杠字符
*   \ddd 表示1到3位数八进制值的字符，仅在格式字符串中有效
*   \0ddd 表示1到3位的八进制值字符

### 实例  

```shell
printf "hello world"
```

```shell
#!/bin/bash

printf "%-5s %-10s %-4s\n" NO Name Mark
printf "%-5s %-10s %-4.2f\n" 01 Tom 90.3456
printf "%-5s %-10s %-4.2f\n" 02 Jack 89.2345
printf "%-5s %-10s %-4.2f\n" 03 Jeff 98.4323
```

* %-5s 格式为左对齐且宽度为5的字符串代替（-表示左对齐），不使用则是右对齐。
* %-4.2f 格式为左对齐宽度为4，保留两位小数。

### 按行打印数组和关联数组的下标及值

```shell
#!/bin/bash
#声明数组（array）可以不加 'declare -a' 或 'local -a'（在函数内声明的局部变量）
array1=('line1' 'line2')
#声明关联数组（也就是字典）必须加 'declare -A' 或 'local -A'（在函数内声明的局部变量）
declare -A assoc_array1=(['key1']='value1' ['key2']='value2')

printf "%s\n" ${array1[@]}
#line1
#line2
printf "%s\n" ${!array1[@]}
#0
#1
printf "%s\n" ${assoc_array1[@]}
#value2
#value1
printf "%s\n" ${!assoc_array1[@]}
#key2
#key1
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
