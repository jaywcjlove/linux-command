apropos
===

在 whatis 数据库中查找字符串

## 补充说明

**apropos命令** 在一些特定的包含系统命令的简短描述的数据库文件里查找关键字，然后把结果送到标准输出。

如果你不知道完成某个特定任务所需要命令的名称，可以使用一个关键字通过Linux apropos实用程序来搜索它。该实用程序可以搜索关键字并且显示所有包含匹配项的man页面的简短描述。另外，使用man实用程序和-k（关键字）选项，可以得到和用Linux apropos实用程序相同的结果（实际上是相同的命令）。

###  语法

```shell
apropos [-dalhvV] -e|-[w|-r] [-s section] [-m system[,...]] [-M path] [-L locale] -C [file] keyword ...
```

###  选项

```shell
-d, --debug：输出调试信息。
-v, --verbose：输出详细的警告信息。
-r, -- regex：将每个keyword作为正则表达式解释。这是默认行为。每个keyword将匹配手册页和描述。
-w, --wildcard：将每个keyword作为shell样式的通配符解释。
-e, --exact：每个keyword将精确匹配手册页名字和描述。
-a, --and：只显示匹配所有keyword的手册页和描述。默认显示匹配任何keyword的项。
-l, --long：不根据终端宽度缩减输出。
-s section, --section section：只查找指定的手册section。
-m system[,...], --systems=system[,...]：用于查找其它操作系统的手册页。
-M path, --manpath=path：指定从其它以冒号分隔的手册页层次查找。默认使用 $MANPATH 环境变量。这个选项覆盖 $MANPATH 的内容。
-L locale, --locale=locale：apropos调用C函数setlocale来得到当前本地化信息，包括 $LC_MESSAGE 和 $LANG 。使用该选项提供一个locale字符串来临时更改本地化信息。
-C file, --config-file=file：使用这个用户配置文件而不是默认的~/.manpath。
-h, --help：打印帮助信息并退出。
-V, --version：打印版本信息并退出。
```

###  返回值

返回0表示成功，1表示用法、语法或配置文件错误，2表示操作错误，16表示没有找到匹配的内容。

###  实例

```shell
[root@localhost ~]# man -k who
at.allow [at]        (5)  - determine who can submit jobs via at or batch
at.deny [at]         (5)  - determine who can submit jobs via at or batch
jwhois               (1)  - client for the whois service
jwhois              (rpm) - Internet whois/nicname client.
Net::LDAP::Extension::whoami (3pm)  - LDAP Who am I? Operation
w                    (1)  - Show who is logged on and what they are doing
who                  (1p)  - display who is on the system
who                  (1)  - show who is logged on
whoami               (1)  - print effective userid

[root@localhost ~]# apropos who
at.allow [at]        (5)  - determine who can submit jobs via at or batch
at.deny [at]         (5)  - determine who can submit jobs via at or batch
jwhois               (1)  - client for the whois service
jwhois              (rpm) - Internet whois/nicname client.
Net::LDAP::Extension::WhoAmI (3pm)  - LDAP Who am I? Operation
w                    (1)  - Show who is logged on and what they are doing
who                  (1p)  - display who is on the system
who                  (1)  - show who is logged on
whoami               (1)  - print effective userid
```

查找手册页名字和描述中包含emacs和vi的手册页：

```shell
apropos -a emacs vi
```
