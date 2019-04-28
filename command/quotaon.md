quotaon
===

激活Linux内核中指定文件系统的磁盘配额功能

## 补充说明

**quotaon命令** 用于激活Linux内核中指定文件系统的磁盘配额功能。执行quotaon指令可开启用户和群组的才磅秒年空间限制，各分区的文件系统根目录必须有quota.user和quota.group配置文件。

### 语法  

```shell
quotaon(选项)(参数)
```

### 选项  

```shell
-a：开启在/ect/fstab文件里，有加入quota设置的分区的空间限制；
-g：开启群组的磁盘空间限制；
-u：开启用户的磁盘空间限制；
-v：显示指令指令执行过程。
```

### 参数  

文件系统：指定要激活磁盘配额功能的文件系统。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->