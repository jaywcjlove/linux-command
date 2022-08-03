chkconfig
===

检查或设置系统的各种服务

## 补充说明

**chkconfig命令** 检查、设置系统的各种服务。这是Red Hat公司遵循GPL规则所开发的程序，它可查询操作系统在每一个执行等级中会执行哪些系统服务，其中包括各类常驻服务。谨记chkconfig不是立即自动禁止或激活一个服务，它只是简单的改变了符号连接。

###  语法 

```shell
chkconfig(选项)
```

###  选项 

```shell
--add：增加所指定的系统服务，让chkconfig指令得以管理它，并同时在系统启动的叙述文件内增加相关数据；
--del：删除所指定的系统服务，不再由chkconfig指令管理，并同时在系统启动的叙述文件内删除相关数据；
--level<等级代号>：指定读系统服务要在哪一个执行等级中开启或关毕。
```
缺省的运行级，RHS用到的级别如下：

* 0：关机
* 1：单用户模式
* 2：无网络支持的多用户模式
* 3：有网络支持的多用户模式
* 4：保留，未使用
* 5：有网络支持有X-Window支持的多用户模式
* 6：重新引导系统，即重启

对各个运行级的详细解释：

* 0 为停机，机器关闭。
* 1 为单用户模式，就像Win9x下的安全模式类似。
* 2  为多用户模式，但是没有NFS支持。 
* 3  为完整的多用户模式，是标准的运行级。
* 4 一般不用，在一些特殊情况下可以用它来做一些事情。例如在笔记本 电脑的电池用尽时，可以切换到这个模式来做一些设置。
* 5  就是X11，进到X Window系统了。
* 6  为重启，运行init 6机器就会重启。

需要说明的是，level选项可以指定要查看的运行级而不一定是当前运行级。对于每个运行级，只能有一个启动脚本或者停止脚本。当切换运行级时，init不会重新启动已经启动的服务，也不会再次去停止已经停止的服务。

运行级文件：

每个被chkconfig管理的服务需要在对应的init.d下的脚本加上两行或者更多行的注释。第一行告诉chkconfig缺省启动的运行级以及启动和停止的优先级。如果某服务缺省不在任何运行级启动，那么使用`-`代替运行级。第二行对服务进行描述，可以用`\`跨行注释。

例如random.init包含三行：

```shell
# chkconfig: 2345 20 80
# description: Saves and restores system entropy pool for \
# higher quality random number generation.
```

###  实例 

```shell
chkconfig --list             #列出所有的系统服务。
chkconfig --add httpd        #增加httpd服务。
chkconfig --del httpd        #删除httpd服务。
chkconfig --level httpd 2345 on        #设置httpd在运行级别为2、3、4、5的情况下都是on（开启）的状态。
chkconfig --list               # 列出系统所有的服务启动情况。
chkconfig --list mysqld        # 列出mysqld服务设置情况。
chkconfig --level 35 mysqld on # 设定mysqld在等级3和5为开机运行服务，--level 35表示操作只在等级3和5执行，on表示启动，off表示关闭。
chkconfig mysqld on            # 设定mysqld在各等级为on，“各等级”包括2、3、4、5等级。

chkconfig –level redis 2345 on # 把redis在运行级别为2、3、4、5的情况下都是on（开启）的状态。
```

如何增加一个服务：

1.  服务脚本必须存放在`/etc/ini.d/`目录下；
2.  `chkconfig --add servicename`在chkconfig工具服务列表中增加此服务，此时服务会被在`/etc/rc.d/rcN.d`中赋予K/S入口了；
3.  `chkconfig --level 35 mysqld on`修改服务的默认启动等级。



