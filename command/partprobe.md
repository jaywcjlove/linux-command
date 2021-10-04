partprobe
===

不重启的情况下重读分区

## 补充说明

**partprobe命令** 用于重读分区表，当出现删除文件后，出现仍然占用空间。可以partprobe在不重启的情况下重读分区。

###  语法

```shell
partprobe(选项)(参数)
```

###  选项

```shell
-d：不更新内核；
-s：显示摘要和分区；
-h：显示帮助信息；
-v：显示版本信息。
```

###  参数

设备：指定需要确认分区表改变的硬盘对应的设备文件。

###  实例

使用partprobe不重启系统添加新的磁盘分区，主机自带硬盘超过300GB，目前只划分使用了3个主分区，不到70GB，如下：

```shell
[root@localhost ~]# df -h 
Filesystem Size Used Avail Use% Mounted on 
/dev/sda1 29G 3.7G  24G 14% / 
/dev/sda2 29G  22G 5.2G 81% /oracle 
tmpfs    2.0G    0 2.0G  0% /dev/shm
```

```shell
[root@localhost ~]# cat /proc/partitions
major minor  #blocks  name

   8     0  311427072 sda
   8     1   30716248 sda1
   8     2   30716280 sda2
   8     3    8193150 sda3
   8    16     976896 sdb
   8    32     976896 sdc

…省略其他
```

现在需要给系统添加1个100GB的空间存放数据文件，而又不影响现有系统上业务的运行，使用fdisk结合partprobe命令不重启系统添加一块新的磁盘分区。操作步骤如下：

 **第1步 添加新的磁盘分区** ：

```shell
[root@localhost ~]# fdisk /dev/sda
The number of cylinders for this disk is set to 38770.
There is nothing wrong with that, but this is larger than 1024,
and could in certain setups cause problems with:
1) software that runs at boot time (e.g., old versions of lilo)
2) booting and partitioning software from other OSs
   (e.g., DOS FDISK, OS/2 FDISK)

command (m for help): p

Disk /dev/sda: 318.9 GB, 318901321728 bytes
255 heads, 63 sectors/track, 38770 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

   Device Boot      Start         End      Blocks   id  System
/dev/sda1   *           1        3824    30716248+  83  Linux
/dev/sda2            3825        7648    30716280   83  Linux
/dev/sda3            7649        8668     8193150   82  Linux swap / Solaris

Command (m for help): n
Command action
   e   extended
   p   primary partition (1-4)
p
Selected partition 4
First cylinder (8669-38770, default 8669):
Using default value 8669
last cylinder or +size or +sizeM or +sizeK (8669-38770, default 38770): +100G   
Command (m for help): w
The partition table has been altered!

Calling ioctl() to re-read partition table.

WARNING: Re-reading the partition table failed with error 16: 

Device or resource busy.
The kernel still uses the old table.
The new table will be used at the next reboot.
Syncing disks.
```

 **第2步 使用工具partprobe让kernel读取分区信息：** 

```shell
[root@localhost ~]# partprobe
```

使用fdisk工具只是将分区信息写到磁盘，如果需要mkfs磁盘分区则需要重启系统，而使用partprobe则可以使kernel重新读取分区信息，从而避免重启系统。

 **第3步 格式化文件系统：** 

```shell
[root@localhost ~]# mkfs.ext3 /dev/sda4
mke2fs 1.39 (29-May-2006)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
12222464 inodes, 24416791 blocks
1220839 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=4294967296
746 block groups
32768 blocks per group, 32768 fragments per group
16384 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 
　　　　2654208, 4096000, 7962624, 11239424, 20480000, 23887872

Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information:

done

This filesystem will be automatically checked every 26 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
[root@localhost ~]#
```

 **第4步 mount新的分区`/dev/sda4`：** 

```shell
[root@localhost ~]# e2label  /dev/sda4 /data
[root@localhost ~]# mkdir /data
[root@localhost ~]# mount /dev/sda4 /data
[root@localhost ~]# df
Filesystem           1K-blocks      Used Available Use% Mounted on
/dev/sda1             29753556   3810844  24406900  14% /
/dev/sda2             29753588  11304616  16913160  41% /oracle
tmpfs                  2023936         0   2023936   0% /dev/shm
/dev/sda4             96132968    192312  91057300   1% /data
```

使用partprobe可以不用重启系统即可配合fdisk工具创建新的分区。


