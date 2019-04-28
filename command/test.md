test
===

shell环境中测试条件表达式工具

## 补充说明

**test命令** 是shell环境中测试条件表达式的实用工具。

### 语法  

```shell
test(选项)
```

### 选项  

```shell
-b<文件>：如果文件为一个块特殊文件，则为真；
-c<文件>：如果文件为一个字符特殊文件，则为真；
-d<文件>：如果文件为一个目录，则为真；
-e<文件>：如果文件存在，则为真；
-f<文件>：如果文件为一个普通文件，则为真；
-g<文件>：如果设置了文件的SGID位，则为真；
-G<文件>：如果文件存在且归该组所有，则为真；
-k<文件>：如果设置了文件的粘着位，则为真；
-O<文件>：如果文件存在并且归该用户所有，则为真；
-p<文件>：如果文件为一个命名管道，则为真；
-r<文件>：如果文件可读，则为真；
-s<文件>：如果文件的长度不为零，则为真；
-S<文件>：如果文件为一个套接字特殊文件，则为真；
-u<文件>：如果设置了文件的SUID位，则为真；
-w<文件>：如果文件可写，则为真；
-x<文件>：如果文件可执行，则为真。
```

### 实例  

linux中shell编程中的test常见用法：

 **判断表达式** 

```shell
if test     #表达式为真
if test !   #表达式为假
test 表达式1 –a 表达式2     #两个表达式都为真
test 表达式1 –o 表达式2     #两个表达式有一个为真
test 表达式1 ! 表达式2       #条件求反
```

 **判断字符串** 

```shell
test –n 字符串    #字符串的长度非零
test –z 字符串    #字符串的长度是否为零
test 字符串1＝字符串2       #字符串是否相等，若相等返回true
test 字符串1!＝字符串2      #字符串是否不等，若不等反悔false
```

 **判断整数** 

```shell
test 整数1 -eq 整数2    #整数相等
test 整数1 -ge 整数2    #整数1大于等于整数2
test 整数1 -gt 整数2    #整数1大于整数2
test 整数1 -le 整数2    #整数1小于等于整数2
test 整数1 -lt 整数2    #整数1小于整数2
test 整数1 -ne 整数2    #整数1不等于整数2
```

 **判断文件** 

```shell
test File1 –ef File2    两个文件是否为同一个文件，可用于硬连接。主要判断两个文件是否指向同一个inode。
test File1 –nt File2    判断文件1是否比文件2新
test File1 –ot File2    判断文件1比是否文件2旧
test –b file   #文件是否块设备文件
test –c File   #文件并且是字符设备文件
test –d File   #文件并且是目录
test –e File   #文件是否存在 （常用）
test –f File   #文件是否为正规文件 （常用）
test –g File   #文件是否是设置了组id
test –G File   #文件属于的有效组ID
test –h File   #文件是否是一个符号链接（同-L）
test –k File   #文件是否设置了Sticky bit位
test –b File   #文件存在并且是块设备文件
test –L File   #文件是否是一个符号链接（同-h）
test –o File   #文件的属于有效用户ID
test –p File   #文件是一个命名管道
test –r File   #文件是否可读
test –s File   #文件是否是非空白文件
test –t FD     #文件描述符是在一个终端打开的
test –u File   #文件存在并且设置了它的set-user-id位
test –w File   #文件是否存在并可写
test –x File   #文件属否存在并可执行
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->