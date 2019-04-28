let
===

简单的计算器

## 补充说明

**let命令** 是bash中用于计算的工具，提供常用运算符还提供了方幂`**`运算符。在变量的房屋计算中不需要加上`$`来表示变量，如果表达式的值是非0，那么返回的状态值是0；否则，返回的状态值是1。

### 语法  

```shell
let arg [arg ...]    #arg代表运算式
```

### 用法  

自加操作`let no++`  
自减操作`let no--`  
简写形式`let no+=10`，`let no-=20`，分别等同于`let no=no+10，``let no=no-20`

### 实例  

```shell
#!/bin/bash
let a=5+4 b=9-3
echo $a $b
```

```shell
#!/bin/bash
let "t1 = ((a = 5 + 3, b = 7 - 1, c = 15 - 4))"
echo "t1 = $t1, a = $a, b = $b"
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->