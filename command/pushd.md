pushd
===

将目录添加到目录堆栈顶部。

## 概要

```shell
pushd [-n] [+N | -N | dir]
```

## 主要用途

- 将目录添加到目录堆栈顶部，切换当前工作目录到该目录。

- 旋转目录堆栈，使堆栈的新顶部成为当前工作目录。

- 没有参数时，交换目录堆栈的前两个目录。

## 选项

```shell
-n    抑制添加目录引起的当前工作目录变化。
```

## 参数

+N（可选）：不带参数执行`dirs`命令显示的列表中，左起的第N个目录将作为堆栈顶部，在它前面的会移动到底部。（从0开始计数）

-N（可选）：不带参数执行`dirs`命令显示的列表中，右起的第N个目录将作为堆栈顶部，在它前面的会移动到底部。（从0开始计数）

dir（可选）：要推送的目录。

## 返回值

返回成功除非提供了非法选项或执行出现错误。

## 例子

```shell
# 添加目录到堆栈，改变了当前工作目录。
[user2@pc ~]$ dirs
~
[user2@pc ~]$ pushd ~/Desktop
~/Desktop ~
[user2@pc Desktop]$ 
```

```shell
# 添加目录到堆栈，当前工作目录不变。
[user2@pc ~]$ dirs
~
[user2@pc ~]$ pushd -n ~/Desktop
~ ~/Desktop
[user2@pc ~]$ pushd -n ~/Pictures
~ ~/Pictures ~/Desktop

# 调整顺序。
[user2@pc ~]$ pushd +1
~/Pictures ~/Desktop ~
[user2@pc ~]$ pushd -1
~/Desktop ~ ~/Pictures
[user2@pc ~]$ pushd
~ ~/Desktop ~/Pictures
```

### 注意

1. `bash`的目录堆栈命令包括`dirs popd pushd`。
2. 当前目录始终是目录堆栈的顶部。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。

### 参考链接

- [popd、pushd命令'-n'选项的行为](https://superuser.com/questions/784450/popd-and-pushd-behavior-with-n-option)


