mtools
===

显示mtools支持的指令

## 补充说明

**mtools命令** 显示mtools支持的指令，mtools为MS-DOS文件系统的工具程序，可模拟许多MS-DOS的指令。这些指令都是mtools的符号连接，因此会有一些共同的特性。

###  语法

```shell
mtools(选项)
```

###  选项

```shell
-a：长文件名重复时自动更改目标文件的长文件名；
-A：短文件名重复但长文件名不同时自动更改目标文件的短文件名；
-o：长文件名重复时，将目标文件覆盖现有的文件；
-O：短文件名重复但长文件名不同时，将目标文件覆盖现有的文件；
-r：长文件名重复时，要求用户更改目标文件的长文件名；
-R：短文件名重复但长文件名不同时，要求用户更改目标文件的短文件名；
-s：长文件名重复时，则不处理该目标文件；
-S：短文件名重复但长文件名不同时，则不处理该目标文件；
-v：执行时显示详细的说明；
-V：显示版本信息。
```

###  实例

使用mtools命令显示其支持的所有的指令，输入如下命令：

```shell
[root@localhost ~]# mtools     #显示所有支持的指令名称
Supported commands:
mattrib, mbadblocks, mcat, mcd, mclasserase, mcopy, mdel, mdeltree
mdir, mdoctorfat, mdu, mformat, minfo, mlabel, mmd, mmount
mpartition, mrd, mread, mmove, mren, mshowfat, mtoolstest, mtype
mwrite, mzip
```

如上所示，其显示的所有命令均为mtools工具所支持的。


