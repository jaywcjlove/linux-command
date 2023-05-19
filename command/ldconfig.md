ldconfig
===

动态链接库管理命令

## 补充说明

**ldconfig命令** 的用途主要是在默认搜寻目录`/lib`和`/usr/lib`以及动态库配置文件`/etc/ld.so.conf`内所列的目录下，搜索出可共享的动态链接库（格式如lib*.so*）,进而创建出动态装入程序(ld.so)所需的连接和缓存文件。缓存文件默认为`/etc/ld.so.cache`，此文件保存已排好序的动态链接库名字列表，为了让动态链接库为系统所共享，需运行动态链接库的管理命令ldconfig，此执行程序存放在`/sbin`目录下。

ldconfig通常在系统启动时运行，而当用户安装了一个新的动态链接库时，就需要手工运行这个命令。

###  语法

```shell
ldconfig [-v|--verbose] [-n] [-N] [-X] [-f CONF] [-C CACHE] [-r ROOT] [-l] [-p|--print-cache] [-c FORMAT] [--format=FORMAT] [-V] -?|--[help|--usage] path... 
```

###  选项

```shell
-v或--verbose：用此选项时，ldconfig将显示正在扫描的目录及搜索到的动态链接库，还有它所创建的连接的名字。
-n：用此选项时,ldconfig仅扫描命令行指定的目录，不扫描默认目录（/lib、/usr/lib），也不扫描配置文件/etc/ld.so.conf所列的目录。
-N：此选项指示ldconfig不重建缓存文件（/etc/ld.so.cache），若未用-X选项，ldconfig照常更新文件的连接。
-X：此选项指示ldconfig不更新文件的连接，若未用-N选项，则缓存文件正常更新。
-f CONF：此选项指定动态链接库的配置文件为CONF，系统默认为/etc/ld.so.conf。
-C CACHE：此选项指定生成的缓存文件为CACHE，系统默认的是/etc/ld.so.cache，此文件存放已排好序的可共享的动态链接库的列表。
-r ROOT：此选项改变应用程序的根目录为ROOT（是调用chroot函数实现的）。选择此项时，系统默认的配置文件/etc/ld.so.conf，实际对应的为ROOT/etc/ld.so.conf。如用-r /usr/zzz时，打开配置文件/etc/ld.so.conf时，实际打开的是/usr/zzz/etc/ld.so.conf文件。用此选项，可以大大增加动态链接库管理的灵活性。
-l：通常情况下,ldconfig搜索动态链接库时将自动建立动态链接库的连接，选择此项时，将进入专家模式，需要手工设置连接，一般用户不用此项。
-p或--print-cache：此选项指示ldconfig打印出当前缓存文件所保存的所有共享库的名字。
-c FORMAT 或 --format=FORMAT：此选项用于指定缓存文件所使用的格式，共有三种：old(老格式)，new(新格式)和compat（兼容格式，此为默认格式）。
-V：此选项打印出ldconfig的版本信息，而后退出。
-? 或 --help 或 --usage：这三个选项作用相同，都是让ldconfig打印出其帮助信息，而后退出。
```

 **ldconfig几个需要注意的地方：** 

1.  往`/lib`和`/usr/lib`里面加东西，是不用修改`/etc/ld.so.conf`的，但是完了之后要调一下ldconfig，不然这个library会找不到。
2.  想往上面两个目录以外加东西的时候，一定要修改`/etc/ld.so.conf`，然后再调用ldconfig，不然也会找不到。
3.  比如安装了一个mysql到`/usr/local/mysql`，mysql有一大堆library在`/usr/local/mysql/lib`下面，这时就需要在`/etc/ld.so.conf`下面加一行`/usr/local/mysql/lib`，保存过后ldconfig一下，新的library才能在程序运行时被找到。
4.  如果想在这两个目录以外放lib，但是又不想在`/etc/ld.so.conf`中加东西（或者是没有权限加东西）。那也可以，就是export一个全局变量LD_LIBRARY_PATH，然后运行程序的时候就会去这个目录中找library。一般来讲这只是一种临时的解决方案，在没有权限或临时需要的时候使用。
5.  ldconfig做的这些东西都与运行程序时有关，跟编译时一点关系都没有。编译的时候还是该加-L就得加，不要混淆了。
6.  总之，就是不管做了什么关于library的变动后，最好都ldconfig一下，不然会出现一些意想不到的结果。不会花太多的时间，但是会省很多的事。
7.  再有，诸如libdb-4.3.so文件头中是会含有库名相关的信息的（即含“libdb-4.3.so”，可用strings命令察看），因此仅通过修改文件名以冒充某已被识别的库（如libdb-4.8.so）是行不通的。为此可在编译库的Makefile中直接修改配置信息，指定特别的库名。


