pvcreate
===

将物理硬盘分区初始化为物理卷

## 补充说明

**pvcreate命令** 用于将物理硬盘分区初始化为物理卷，以便LVM使用。

### 语法  

```shell
pvcreate(选项)(参数)
```

### 选项  

```shell
-f：强制创建物理卷，不需要用户确认；
-u：指定设备的UUID；
-y：所有的问题都回答“yes”；
-Z：是否利用前4个扇区。
```

### 参数  

物理卷：指定要创建的物理卷对应的设备文件名。

### 实例  

查看磁盘信息：

```shell
[root@localhost ~]# fdisk -l
Disk /dev/hda: 41.1 GB, 41174138880 bytes
255 heads, 63 sectors/track, 5005 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

   Device Boot      Start         End      Blocks   id  System
/dev/hda1   *           1          13      104391   83  Linux
/dev/hda2              14        1288    10241437+  83  Linux
/dev/hda3            1289        1925     5116702+  83  Linux
/dev/hda4            1926        5005    24740100    5  Extended
/dev/hda5            1926        2052     1020096   82  Linux swap / Solaris
/dev/hda6            2053        2235     1469916   8e  Linux LVM
/dev/hda7            2236        2418     1469916   8e  Linux LVM
/dev/hda8            2419        2601     1469916   8e  Linux LVM
/dev/hda9            2602        2784     1469916   8e  Linux LVM
```

检查有无 PV 在系统上，然后将`/dev/hda6`到`/dev/hda9`建立成为PV格式

```shell
[root@localhost ~]# pvscan
No matching physical volumes found    #找不到任何的 PV 存在！
```

将6-9分区转成pv，注意大括号的用途：

```shell
[root@localhost ~]# pvcreate /dev/hda{6,7,8,9}
  Physical volume "/dev/hda6" successfully created
  Physical volume "/dev/hda7" successfully created
  Physical volume "/dev/hda8" successfully created
  Physical volume "/dev/hda9" successfully created
```

这就分別表示每个 PV 的信息与系统所有 PV 的信息：

```shell
[root@localhost ~]# pvscan
  PV /dev/hda6         lvm2 [1.40 GB]
  PV /dev/hda7         lvm2 [1.40 GB]
  PV /dev/hda8         lvm2 [1.40 GB]
  PV /dev/hda9         lvm2 [1.40 GB]
  Total: 4 [5.61 GB] / in use: 0 [0   ] / in no VG: 4 [5.61 GB]
```

更详细的列示出系统上面每个 PV 信息：

```shell
[root@localhost ~]# pvdisplay
  "/dev/hda6" is a new physical volume of "1.40 GB"
  --- NEW Physical volume ---
  PV Name               /dev/hda6  #实际的 partition 分区名称
  VG Name                          #因为尚未分配出去，所以空白！
  PV Size               1.40 GB    #就是容量说明
  Allocatable           NO         #是否已被分配，结果是 NO
  PE Size (KByte)       0          #在此 PV 內的 PE 大小
  Total PE              0          #共分割出几个 PE
  free PE               0          #沒被 LV 用掉的 PE
  Allocated PE          0          #尚可分配出去的 PE 数量
  PV UUID               Z13Jk5-RCls-UJ8B-HzDa-Gesn-atku-rf2biN
....(底下省略)....
```

删除物理卷：

```shell
[root@localhost ~]# pvremove /dev/sdb2
Labels on physical volume "/dev/sdb2" successfully wiped
```

修改物理卷属性：

```shell
[root@localhost ~]# pvchange -x n /dev/sdb1    #禁止分配指定物理卷上的PE
Physical volume "/dev/sdb1" changed  
1 physical volume changed / 0 physical volumes not changed 
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->