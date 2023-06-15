dirs
===

显示目录堆栈。

## 语法

```shell
dirs [-clpv] [+N] [-N]
```

## 主要用途

- 显示目录堆栈。
- 清空目录堆栈。

## 选项

```shell
-c    清空目录堆栈。
-l    堆栈内以~开头的目录在显示时展开。
-p    将目录堆栈内的每一个目录按行显示。
-v    将目录堆栈内的每一个目录按行显示并在每行前加上堆栈内的位置编号。
```

## 参数

+N（可选）：不带参数执行`dirs`命令显示的列表中，左起的第N个目录将被显示。（从0开始计数）

-N（可选）：不带参数执行`dirs`命令显示的列表中，右起的第N个目录将被显示。（从0开始计数）

## 返回值

返回成功除非提供了非法选项或执行出现错误。

## 例子

```shell
# 添加目录到堆栈。
[user2@pc ~]$ dirs
~
[user2@pc ~]$ pushd -n ~/Desktop
~ ~/Desktop
[user2@pc ~]$ pushd -n ~/Pictures
~ ~/Pictures ~/Desktop
[user2@pc ~]$ pushd -n ~/bin
~ ~/bin ~/Pictures ~/Desktop

# 选项和参数的示例：
[user2@pc ~]$ dirs -l
/home/user2 /home/user2/bin /home/user2/Pictures /home/user2/Desktop
[user2@pc ~]$ dirs -p
~
~/bin
~/Pictures
~/Desktop
[user2@pc ~]$ dirs -v
 0  ~
 1  ~/bin
 2  ~/Pictures
 3  ~/Desktop
[user2@pc ~]$ dirs +2
~/Pictures
[user2@pc ~]$ dirs -2
~/bin
[user2@pc ~]$ dirs -c
[user2@pc ~]$ dirs
~
```

### 注意

1. `bash`的目录堆栈命令包括`dirs popd pushd`。
2. 当前目录始终是目录堆栈的顶部。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。


