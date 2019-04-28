type
===

显示指定命令的类型

## 补充说明

**type命令** 用来显示指定命令的类型，判断给出的指令是内部指令还是外部指令。

命令类型：

*   alias：别名。
*   keyword：关键字，Shell保留字。
*   function：函数，Shell函数。
*   builtin：内建命令，Shell内建命令。
*   file：文件，磁盘文件，外部命令。
*   unfound：没有找到。

### 语法  

```shell
type(选项)(参数)
```

### 选项  

```shell
-t：输出“file”、“alias”或者“builtin”，分别表示给定的指令为“外部指令”、“命令别名”或者“内部指令”；
-p：如果给出的指令为外部指令，则显示其绝对路径；
-a：在环境变量“PATH”指定的路径中，显示给定指令的信息，包括命令别名。
```

### 参数  

指令：要显示类型的指令。

### 实例  

```shell
[root@localhost ~]# type ls
ls is aliased to `ls --color=tty'

[root@localhost ~]# type cd
cd is a shell builtin

[root@localhost ~]# type date
date is /bin/date

[root@localhost ~]# type mysql
mysql is /usr/bin/mysql

[root@localhost ~]# type nginx
-bash: type: nginx: not found

[root@localhost ~]# type if
if is a shell keyword

[root@localhost ~]# type which
which is aliased to `alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'

[root@localhost ~]# type -a cd
cd is a shell builtin

[root@localhost ~]# type -a grep
grep is /bin/grep
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->