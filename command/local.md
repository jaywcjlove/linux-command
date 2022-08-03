local
===

在函数内定义局部变量。

## 概要

```shell
local [-aAfFgilnrtux] [-p] [name[=value] ...]
```

## 主要用途

- 在函数内定义局部变量
- 显示局部变量
- 在函数内定义全局变量

## 选项

```shell
local命令的选项与declare命令的相同，请参考declare命令的选项。
```

## 参数

name（可选）：变量名或已定义函数名。

value（可选）：变量的值。

## 返回值

`local`返回true除非你提供了非法选项、赋值错误或是在函数外使用`local`命令。

## 例子

```shell
相关例子请参考declare命令
```

## 错误用法

- 在函数外使用该命令。


### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看`help`命令以及`man bash`、`info bash`的相应部分。



