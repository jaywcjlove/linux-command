pvscan
===

扫描系统中所有硬盘的物理卷列表

## 补充说明

**pvscan命令** 会扫描系统中连接的所有硬盘，列出找到的物理卷列表。使用pvscan命令的`-n`选项可以显示硬盘中的不属于任何卷组的物理卷，这些物理卷是未被使用的。

### 语法  

```shell
pvscan(选项)
```

### 选项  

```shell
-d：调试模式；
-e：仅显示属于输出卷组的物理卷；
-n：仅显示不属于任何卷组的物理卷；
-s：短格式输出；
-u：显示UUID。
```

### 实例  

使用pvscan命令扫描当前系统中所有硬盘的物理卷，在命令行中输入下面的命令：

```shell
[root@localhost ~]# pvscan     #扫描所有硬盘上的物理卷 
```

输出信息如下：

```shell
PV /dev/sdb1         lvm2 [101.94 MB]  
PV /dev/sdb2         lvm2 [101.98 MB]  
Total: 2 [203.92 MB] / in use: 0 [0   ] / in no VG: 2 [203.92  
MB] 
```

说明：本例中，输出了两个物理卷，它们不属于任何卷组，是可被利用的物理卷。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->