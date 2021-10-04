unset
===

删除指定的shell变量或函数。

## 概要

```shell
unset [-f] [-v] [-n] [name ...]
```

## 主要用途

- 删除一到多个shell变量（不包括只读变量）。
- 删除一到多个shell函数。
- 删除一到多个具有引用属性的变量（如果-n选项存在）。

## 选项

```shell
-f：仅删除函数。
-v：仅删除变量（不包括只读变量）。
-n：删除具有引用属性的变量名（如果该选项存在）。
```

## 参数

name（可选）：要删除的变量或函数。

## 返回值

返回成功除非选项错误或要删除的变量或函数有只读属性。

## 例子

```shell
# 删除变量。
declare paper_size='B5'
unset -v paper_size
```
```shell
# 删除函数。
function show_result(){ echo 'Last Command Return: $?'; }
unset -f show_result
```
```shell
# 当不指定选项时，优先删除变量，如果失败则删除函数。
declare -i aa=100
function aa(){ echo 'aa'; }
unset aa
# 变量'aa'已被删除。
declare -p aa
# 函数'aa'存在。
declare -F|grep aa
```
```shell
# 演示unset使用-n选项，name指定了引用变量时的情况。
declare a=3
# 定义引用变量
declare -n b=a
# 查看属性，显示declare -n b="a"
declare -p b
# 显示3
echo ${b}
# 显示a
echo ${!b}
# 指定-n选项时
unset -n b
# 引用变量b已被删除
declare -p b
# 被引用的变量a未被删除
declare -p a
```

```shell
# 演示unset不使用-n选项，name指定了引用变量时的情况。
declare a=3
# 定义引用变量
declare -n b=a
# 查看属性，显示declare -n b="a"
declare -p b
# 显示3
echo ${b}
# 显示a
echo ${!b}
# 不指定-n选项时
unset b
# 引用变量b未被删除，显示declare -n b="a"
declare -p b
# 被引用的变量a被删除
declare -p a
```

### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。



