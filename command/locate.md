locate
===

比 find 好用的文件查找工具

## 补充说明

locate 让使用者可以很快速的搜寻档案系统内是否有指定的档案。其方法是先建立一个包括系统内所有档案名称及路径的数据库，之后当寻找时就只需查询这个数据库，而不必实际深入档案系统之中了。在一般的 distribution 之中，数据库的建立都被放在 crontab 中自动执行。

locate命令可以在搜寻数据库时快速找到档案，数据库由updatedb程序来更新，updatedb是由cron daemon周期性建立的，locate命令在搜寻数据库时比由整个由硬盘资料来搜寻资料来得快，但较差劲的是locate所找到的档案若是最近才建立或 刚更名的，可能会找不到，在内定值中，updatedb每天会跑一次，可以由修改crontab来更新设定值。(etc/crontab)

locate指定用在搜寻符合条件的档案，它会去储存档案与目录名称的数据库内，寻找合乎范本样式条件的档案或目录录，可以使用特殊字元（如”*” 或”?”等）来指定范本样式，如指定范本为kcpa*ner, locate 会找出所有起始字串为kcpa且结尾为ner的档案或目录，如名称为kcpartner若目录录名称为kcpa_ner则会列出该目录下包括 子目录在内的所有档案。

locate指令和find找寻档案的功能类似，但locate是透过update程序将硬盘中的所有档案和目录资料先建立一个索引数据库，在 执行loacte时直接找该索引，查询速度会较快，索引数据库一般是由操作系统管理，但也可以直接下达update强迫系统立即修改索引数据库。

### 语法

```shell
locate [-d  path | --database=path] [-e | -E | --[non-]existing] [-i |
       --ignore-case] [-0 | --null] [-c | --count] [-w |  --wholename]  [-b  |
       --basename]  [-l  N  |  --limit=N]  [-S | --statistics] [-r | --regex ]
       [--regextype R] [--max-database-age D] [-P | -H  |  --nofollow]  [-L  |
       --follow] [--version] [-A | --all] [-p | --print] [--help] pattern...
```

### 选项

```shell
-b, --basename  # 仅匹配路径名的基本名称
-c, --count     # 只输出找到的数量
-d, --database DBPATH # 使用DBPATH指定的数据库，而不是默认数据库 /var/lib/mlocate/mlocate.db
-e, --existing  # 仅打印当前现有文件的条目
-1 # 如果 是 1．则启动安全模式。在安全模式下，使用者不会看到权限无法看到 的档案。这会始速度减慢，因为 locate 必须至实际的档案系统中取得档案的  权限资料。
-0, --null            # 在输出上带有NUL的单独条目
-S, --statistics      # 不搜索条目，打印有关每个数据库的统计信息
-q                    # 安静模式，不会显示任何错误讯息。
-P, --nofollow, -H    # 检查文件存在时不要遵循尾随的符号链接
-l, --limit, -n LIMIT # 将输出（或计数）限制为LIMIT个条目
-n                    # 至多显示 n个输出。
-m, --mmap            # 被忽略，为了向后兼容
-r, --regexp REGEXP   # 使用基本正则表达式
    --regex           # 使用扩展正则表达式
-q, --quiet           # 安静模式，不会显示任何错误讯息
-s, --stdio           # 被忽略，为了向后兼容
-o                    # 指定资料库存的名称。
-h, --help            # 显示帮助
-i, --ignore-case     # 忽略大小写
-V, --version         # 显示版本信息
```

### 实例

实例1：查找和 `pwd` 相关的所有文件

```shell
root ~ # locate pwd
/bin/pwd
/etc/.pwd.lock
/sbin/unix_chkpwd
/usr/bin/pwdx
/usr/include/pwd.h
/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.py
/usr/lib/python2.7/dist-packages/twisted/python/fakepwd.pyc
/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.py
/usr/lib/python2.7/dist-packages/twisted/python/test/test_fakepwd.pyc
/usr/lib/syslinux/pwd.c32
/usr/share/help/C/empathy/irc-join-pwd.page
/usr/share/help/ca/empathy/irc-join-pwd.page
/usr/share/help/cs/empathy/irc-join-pwd.page
/usr/share/help/de/empathy/irc-join-pwd.page
/usr/share/help/el/empathy/irc-join-pwd.page
```

实例2： 搜索 etc 目录下所有以 sh 开头的文件

```shell
root ~ # locate /etc/sh
/etc/shadow
/etc/shadow-
/etc/shells
```

实例3：搜索etc目录下，所有以m开头的文件

```shell
root ~ # locate /etc/m
/etc/magic
/etc/magic.mime
/etc/mailcap
/etc/mailcap.order
/etc/manpath.config
/etc/mate-settings-daemon
```

忽略大小写搜索当前用户目录下所有以 `r` 开头的文件 ：

```shell
locate -i ~/r
```

