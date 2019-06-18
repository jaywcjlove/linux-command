alias
===

定义或显示别名。

## 主要用途

- 使用该命令可以将一些较长的命令进行简化。
- 定义一个或多个别名。
- 修改一个或多个已定义别名的值。
- 显示一个或多个已定义别名。
- 显示全部已定义的别名。


###  语法 

```shell
alias [-p] [name[=value] ...]
```

###  选项 

-p：显示全部已定义的别名。

###  参数 

name（可选）：指定要（定义、修改、显示）的别名。

value（可选）：别名的值。

### 返回值

alias返回true除非您要显示的别名未定义。

###  实例 

**alias 的基本使用方法为：** 

```shell
#显示全部已定义的别名
alias
alias -p

#显示已定义的别名（假设当前环境存在以下别名：ls grep）
alias ls
alias ls grep

#定义（修改）别名的值
alias ls='ls --color=auto'
alias ls='ls --color=never' grep='grep --color=never'

```
### 命令别名永久生效

直接在shell里设定的命令别名，在终端关闭或者系统重新启动后都会失效，如何才能永久有效呢？办法就是将别名的设置加入 `~/.bashrc` 文件，然后重新载入下文件就可以了。

```shell
$ vim ~/.bashrc
```
在文件最后面加入别名设置，如：alias rm=’rm -i’，保存后重新载入：

```shell
$ source ~/.bashrc
```

这样就可以永久保存命令的别名了。因为修改的是当前用户目录下的`~/.bashrc`文件，所以这样的方式只对当前用户有用。如果要对所有用户都有效，修改`/etc/bashrc`文件就可以了。

> 请注意以下内容可能与您实际使用的系统有出入:
>
> 在CentOS7下，这个文件是`/etc/bash.bashrc`。此外在CentOS7下，细看`~/.bashrc`文件，会发有这样一段代码：
>
> ```shell
> if [ -f ~/.bash_aliases ]; then
>     . ~/.bash_aliases
> fi
> ```
>
> 这个代码的意思就是加载.bash_aliases文件，CentOS7已经帮我们考虑好了，所以也可以在用户根目录下新建一个文件 `.bash_aliases` 存放命令别名设置。

### 错误用法

- 要显示的别名未定义

- 当您定义（修改）别名的值的时候，由于值的字符串有空格但您没有用 **单引号扩起整个值** ，例子如下。

```shell
#为方便演示，删除全部别名
unalias -a
alias rm=rm -rf
#执行命令后报错 bash: alias: -rf: not found
#这时使用alias查看全部时结果返回 alias rm='rm'
```

```shell
#更具有迷惑性的例子
#为方便演示，删除全部别名
unalias -a
alias ls=ls --color=never
#命令运行的结果看起来没有报错

#使用alias查看全部别名会发现运行结果如下
#alias --color=never
#alias ls='ls'
#alias处理时将它们看成了两组
```


Q&A

Q：如何删除别名？

A：请查看 `unalias` 命令。

Q：如果我要显示一到多个别名，但不知道其中是否有未定义的该怎么办？

A：正常执行就是了，alias不会因为有一个未定义的别名就结束对剩余参数的执行。

Q：如果我这么定义 `alias cd='ls' ls='cd'` ，会有什么后果？

A：运行cd依然会切换目录，运行ls依然会列出文件夹的内容；不要这样定义；


### 注意

1. ***请不要用这个命令对包括你自己在内的任何人开恶意的玩笑，原因如下：***

> 如果终端环境中存在别名，那么在其中使用 `source` 命令调用bash脚本会出现以下行为：当执行的命令存在别名时，会按照别名的值调用执行；
>
> 通过 `sh` 方式调用的bash脚本或直接运行当前用户有执行权限的脚本不受终端环境的别名影响。

2. 建议您不要对 `mv cp rm` 等命令的别名设置危险的 `-f` 选项。

3. 该命令是bash内建命令，相关的帮助信息请查看 `help` 命令。

4. 需要注意的和其他命令冲突的情况。

### 其他参考链接

[Linux命令详解：\[8\]alias创建自己的命令](https://jingyan.baidu.com/article/ac6a9a5e6738422b653eac01.html)


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
