builtin
===

执行bash内建命令。

## 补充说明

**builtin命令** 用于执行指定的bash内建命令，并返回内部命令的返回值。builtin命令在使用时，Linux中同名的外部命令及同名的shell函数失效。

###  语法

```shell
builtin(bash内建命令)(参数)
```

###  参数

bash内建命令：指定需要执行的bash内建命令。

（可选）参数：传递给bash内建命令的参数。

###  提示

**同名情况下的优先级顺序**

builtin 内建命令 > 函数 > 内建命令 > 外部命令

```shell
#!/bin/bash
#此时内建命令优先使用
echo "the Great Wall"
#调用内建命令type，显示命令的类型
type -t echo
#定义 echo 函数
echo(){
    printf "123\n"
}
#此时同名函数优先使用
echo
type -t echo
#此时内建命令优先使用
builtin echo -e "backslash \\"
```

```shell
#输出结果
the Great Wall
builtin
123
function
backslash \
```

内建命令的帮助信息请参考 'help' 命令

###  实例

使用builtin命令执行bash内建命令alias：

```shell
builtin alias                 # 执行shell内部指令
alias cp='cp -i'
alias l.='ls -d .* --color=tty'
alias ll='ls -l --color=tty'
alias ls='ls --color=tty'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
```

上面的命令执行后，将输出当前系统下的命令别名。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
