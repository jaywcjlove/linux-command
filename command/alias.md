alias
===

用来设置指令的别名

## 补充说明

**alias命令** 用来设置指令的别名。我们可以使用该命令可以将一些较长的命令进行简化。使用alias时，用户必须使用单引号`''`将原来的命令引起来，防止特殊字符导致错误。

alias命令的作用只局限于该次登入的操作。若要每次登入都能够使用这些命令别名，则可将相应的alias命令存放到bash的初始化文件`/etc/bashrc`中。

###  语法 

```shell
alias(选项)(参数)
```

###  选项 

```shell
-c string 如果有 -c 选项，那么命令将从 string 中读取。如果 string 后面有参数 (argument)，它们将用于给位置参数 (positional
         parameter，以 $0 起始) 赋值。
-i        如果有 -i 选项，shell 将交互地执行 ( interactive )。
-l        选项使得 bash 以类似登录 shell (login shell) 的方式启动 (参见下面的 启动(INVOCATION) 章节)。
-r        如果有 -r 选项，shell 成为受限的 ( restricted ) (参见下面的 受限的shell(RESTRICTED SHELL) 章节)。
-s        如果有  -s  选项，或者如果选项处理完以后，没有参数剩余，那么命令将从标准输入读取。   这个选项允许在启动一个交互
         shell 时可以设置位置参数。
-D        向标准输出打印一个以    $    为前导的，以双引号引用的字符串列表。    这是在当前语言环境不是    C    或    POSIX
         时，脚本中需要翻译的字符串。 这个选项隐含了 -n 选项；不会执行命令。
[-+]O [shopt_option]
         shopt_option 是一个 shopt 内建命令可接受的选项  (参见下面的  shell  内建命令(SHELL  BUILTIN  COMMANDS)  章节)。
         如果有     shopt_option，-O     将设置那个选项的取值；    +O    取消它。    如果没有给出    shopt_option，shopt
         将在标准输出上打印设为允许的选项的名称和值。 如果启动选项是 +O，输出将以一种可以重用为输入的格式显示。
--        -- 标志选项的结束，禁止其余的选项处理。任何 -- 之后的参数将作为文件名和参数对待。参数 - 与此等价。

Bash 也解释一些多字节的选项。在命令行中，这些选项必须置于需要被识别的单字符参数之前。

--dump-po-strings
      等价于 -D，但是输出是 GNU gettext po (可移植对象) 文件格式
--dump-strings
      等价于 -D
--help 在标准输出显示用法信息并成功退出
--init-file file
--rcfile file
      如果 shell 是交互的，执行 file 中的命令，而不是标准的个人初始化文件 ~/.bashrc (参见下面的 启动(INVOCATION) 章节)

--login
      等价于 -l

--noediting
      如果 shell 是交互的，不使用 GNU readline 库来读命令行

--noprofile
      不读取系统范围的启动文件  /etc/profile  或者任何个人初始化文件  ~/.bash_profile,  ~/.bash_login,   或   ~/.profile
      。默认情况下， bash 在作为登录 shell 启动时读取这些文件 (参见下面的 启动(INVOCATION) 章节)

--norc 如果 shell 是交互的，不读取/执行个人初始化文件 ~/.bashrc 这个选项在 shell 以 sh 命令启动时是默认启用的

--posix
      如果默认操作与 POSIX 1003.2 标准不同的话，改变 bash 的行为来符合标准 (posix mode)

--restricted
      shell 成为受限的 (参见下面的 受限的shell(RESTRICTED SHELL) 章节)

--rpm-requires
      产生一个为使脚本运行，需要的文件的列表。 这个选项包含了 -n 选项。 它是为了避免进行编译期错误检测时的限制－－ Back‐
      ticks, [] tests,  还有 evals 不会被解释，一些依赖关系可能丢失

--verbose
      等价于 -v

--version
      在标准输出显示此 bash 的版本信息并成功退出。
```

###  参数 

命令别名设置：定义命令别名，格式为“命令别名=‘实际命令’”。

###  实例 

**alias 的基本使用方法为：** 

```
alias 新的命令='原命令 -选项/参数'
```

例如：`alias l=‘ls -lsh'`将重新定义ls命令，现在只需输入l就可以列目录了。直接输入 alias 命令会列出当前系统中所有已经定义的命令别名。

要删除一个别名，可以使用 unalias 命令，如 unalias l。

**查看系统已经设置的别名：** 

```shell
[root@localhost ~]# 
[root@localhost ~]# alias
alias cp='cp -i'
alias egrep='egrep --color=auto'
alias fgrep='fgrep --color=auto'
alias grep='grep --color=auto'
alias l.='ls -d .* --color=auto'
alias ll='ls -l --color=auto'
alias ls='ls --color=auto'
alias mv='mv -i'
alias rm='rm -i'
alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'
[root@localhost ~]# 

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

这样就可以永久保存命令的别名了。因为修改的是当前用户目录下的.bashrc文件，所以这样的方式只对当前用户有用。如果要对所有用户都有效，修改/etc目录下的bashrc文件就可以了。在CentOS7下，这个文件是/etc/bash.bashrc。此外在CentOS7下，细看~/.bashrc文件，会发有这样一段代码：

```shell
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```

这个代码的意思就是加载.bash_aliases文件，CentOS7已经帮我们考虑好了，所以也可以在用户根目录下新建一个文件 `.bash_aliases` 存放命令别名设置。

### 小结

alias这个命令是shell的内建命令，可以根据自己的使用习惯设置一些别名，需要注意的就是和其他命令冲突的情况。


#### 一、 范例演示

在使用和维护Linux系统过程中，我们常常希望根据自己的需要来定义一些命令，那么这样的操作是不是很难呢？其实不是，系统已经为我们设置好了相关的命令，下面小编就以CentOS6.4系统为例，为大家演示如何创建自己的命令。

#### 二、 自定义命令简介

CentOS系统下的创建自定义命令其实比较简单，使用的命令就是alias，具体使用的方法就是 alias 自定义命令名=‘命令’。但是需要注意的是，在自定义之前需要查看自定义的命令名是否是系统已经使用的命令名，否则会冲突，另外一个就是定期清理不需要的自定义命令名。


#### 三、 演示举例

假定系统操作员希望进行如下操作：

1.进入目录 `/root`  
2.查看目录下文件  
3.切换回根目录  
 
通常这需要三条命令 `cd /root`, `ls`, `cd /` ，如果需要经常使用那么我们可以通过自定义命令的方式用一条命令完成全部操作。

#### 四、 操作过程


首先使用命令 `type` 自定义命令名 ，查看自定义命令名是否被系统占用。从图中可以看出test命令名已被系统占用，所以不能使用，而 `loo` 这个命令名经查询可以使用。

使用命令alias创建自定义命令：`alias loo='cd /root;ls;cd /'` 。需要注意的是命令的使用格式，分号与分号之间是没有空格的。

测试一下自定义命令，当输入命令 `loo` 时，发现系统依次完成了 `cd /root`、`ls`、`cd /` 三条命令，说明设置成功。同时也可直接使用命令 `alias` 查询系统中是否添加了loo这个自定义命令。

如果希望删除这个自定义命令，可以使用命令 `unalias` 自定义命令名 来完成。执行之后发现，`loo` 命令已不存在，同时自定义命令库中也没有 `loo` 命令。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
