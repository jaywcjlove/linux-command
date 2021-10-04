which
===

查找并显示给定命令的绝对路径

## 补充说明

**which命令** 用于查找并显示给定命令的绝对路径，环境变量PATH中保存了查找命令时需要遍历的目录。which指令会在环境变量$PATH设置的目录里查找符合条件的文件。也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。

###  语法 

```shell
which(选项)(参数)
```

###  选项 

```shell
-n<文件名长度>：制定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名；
-p<文件名长度>：与-n参数相同，但此处的<文件名长度>包含了文件的路径；
-w：指定输出时栏位的宽度；
-V：显示版本信息。
```

###  参数 

指令名：指令名列表。

###  实例 

查找文件、显示命令路径：

```shell
[root@localhost ~]# which pwd
/bin/pwd

[root@localhost ~]# which adduser
/usr/sbin/adduser
```

说明：which是根据使用者所配置的 PATH 变量内的目录去搜寻可运行档的！所以，不同的 PATH 配置内容所找到的命令当然不一样的！

用 which 去找出 cd

```shell
[root@localhost ~]# which cd
cd: shell built-in command
```
cd 这个常用的命令竟然找不到啊！为什么呢？这是因为 cd 是bash 内建的命令！ 但是 which 默认是找 PATH 内所规范的目录，所以当然一定找不到的！


