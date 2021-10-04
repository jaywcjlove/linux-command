popd
===

从目录堆栈中删除目录。

## 概要

```shell
popd [-n] [+N | -N]
```

## 主要用途

- 从目录堆栈中删除目录，如果是顶部目录被删除，那么当前工作目录会切换到新的顶部目录。

- 没有参数时，删除目录堆栈顶部。

## 选项

```shell
-n    抑制删除目录引起的当前工作目录变化。
```

## 参数

+N（可选）：不带参数执行`dirs`命令显示的列表中，左起的第N个目录将被删除。（从0开始计数）

-N（可选）：不带参数执行`dirs`命令显示的列表中，右起的第N个目录将被删除。（从0开始计数）


## 返回值

返回成功除非提供了非法选项或执行出现错误。

## 例子

```shell
# 添加目录到堆栈，当前工作目录不变。
[user2@pc ~]$ dirs
~
[user2@pc ~]$ pushd -n ~/Desktop
~ ~/Desktop
[user2@pc ~]$ pushd -n ~/Pictures
~ ~/Pictures ~/Desktop
[user2@pc ~]$ pushd -n ~/bin
~ ~/bin ~/Pictures ~/Desktop

# 从目录堆栈中删除目录，删除顶部目录时会改变当前工作目录：
[user2@pc ~]$ popd -2
~ ~/Pictures ~/Desktop
[user2@pc ~]$ popd +1
~ ~/Desktop
[user2@pc ~]$ popd
~/Desktop
[user2@pc Desktop]$
```

```shell
# 从目录堆栈中删除目录，删除顶部目录时不会改变当前工作目录：
[user2@pc ~]$ dirs
~
[user2@pc ~]$ pushd -n ~/Desktop
~ ~/Desktop
[user2@pc ~]$ popd -n
~
[user2@pc ~]$ 
```

### 注意

1. `bash`的目录堆栈命令包括`dirs popd pushd`。
2. 当前目录始终是目录堆栈的顶部。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。

### 参考链接

- [popd、pushd命令'-n'选项的行为](https://superuser.com/questions/784450/popd-and-pushd-behavior-with-n-option)


