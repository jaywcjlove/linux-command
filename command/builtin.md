builtin
===

执行bash内建命令。

## 概要

```shell
builtin [shell-builtin [arg ...]]
```

## 主要用途

- 用于执行指定的bash内建命令。
- `builtin`命令调用的bash内建命令优先于同名的外部命令及同名的shell函数。

## 参数

shell-builtin（可选）：要调用的bash内建命令。

arg（可选）：传递给bash内建命令的一到多个参数。

## 返回值

返回该内建命令执行的返回值，除非传递的不是bash内建命令或该内建命令被禁用。

## 例子

同名情况下的优先级顺序：

builtin 内建命令 > 函数 > 内建命令 > 外部命令

```shell
# 关于外部命令优先级最高的情况请参考enable命令。
# 此时内建命令优先使用
echo "the Great Wall"
# 调用内建命令type，返回命令的类型（builtin）
type -t echo
# 定义 echo 函数
echo(){
    printf "123\n"
}
# 此时同名函数优先使用，显示（123）
echo
# 调用内建命令type，返回命令的类型（function）
type -t echo
# 此时内建命令优先使用
builtin echo -e "backslash \\"
```

```shell
# 执行shell内部指令，输出当前系统下的命令别名
builtin alias
alias cp='cp -i'
alias l.='ls -d .* --color=tty'
alias ll='ls -l --color=tty'
alias ls='ls --color=tty'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
```

### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。

2. 如果要调用的内建命令被禁用了（包括`builtin`），那么执行会报错；关于禁用和启用内建命令请参考`enable`命令。



