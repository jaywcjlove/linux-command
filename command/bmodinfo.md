bmodinfo
===

显示给定模块的详细信息

## 补充说明

**bmodinfo命令** 用于显示给定模块的详细信息。

### 语法  

```shell
bmodinfo(选项)(参数)
```

### 选项  

```shell
-a：显示模块作者；
-d：显示模块的描述信息；
-l：显示模块的许可信息；
-p：显示模块的参数信息；
-n：显示模块对应的文字信息；
-0：用ASCII码的0字符分割字段值，而不使用新行。
```

### 参数  

模块名：要显示详细信息的模块名称。

### 实例  

显示sg模块的信息：

```shell
[root@localhost ~]# modinfo sg
filename:    /lib/modules/2.6.9-42.ELsmp/kernel/drivers/scsi/sg.ko
author:     Douglas Gilbert
description:  SCSI generic (sg) driver
license:    GPL
version:    3.5.31 B0B0CB1BB59F0669A1F0D6B
parm:      def_reserved_size:size of buffer reserved for each fd
parm:      allow_dio:allow direct I/O (default: 0 (disallow))
alias:     char-major-21-*
vermagic:    2.6.9-42.ELsmp SMP 686 REGPARM 4KSTACKS gcc-3.4
depends:    scsi_mod
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->