parted
===

磁盘分区和分区大小调整工具

## 补充说明

**parted命令** 是由GNU组织开发的一款功能强大的磁盘分区和分区大小调整工具，与fdisk不同，它支持调整分区的大小。作为一种设计用于Linux的工具，它没有构建成处理与fdisk关联的多种分区类型，但是，它可以处理最常见的分区格式，包括：ext2、ext3、fat16、fat32、NTFS、ReiserFS、JFS、XFS、UFS、HFS以及Linux交换分区。

###  语法

```shell
parted(选项)(参数)
```

###  选项

```shell
-h：显示帮助信息；
-i：交互式模式；
-s：脚本模式，不提示用户；
-v：显示版本号。
```

###  参数

*   设备：指定要分区的硬盘所对应的设备文件；
*   命令：要执行的parted命令。

###  实例

从串行技术出现以来，越来越多用户选择使用大容量的SATA硬盘创建磁盘阵列；特别是MD1000/MD3000，很轻易就突破2T的LUN，故在此给大家一些指引。

红帽企业 Linux 4 Update 4供对大于 2 terabytes（TB）的磁盘设备的支持。

请参考以下操作步骤：

注：

*   绿色代表你需要使用的命令。
*   红色代表你需要注意到的输出信息，在后续需要使用。

```shell
[root@localhost ~]# fdisk -l
Disk /dev/sda: 35.8 GB, 35862976512 bytes
255 heads, 63 sectors/track, 4360 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
   Device Boot      Start         End      Blocks   id  System
/dev/sda1   *           1          13      104391   83  Linux
/dev/sda2              14         144     1052257+  82  Linux swap
/dev/sda3             145        4360    33865020   83  Linux
Disk /dev/sdb: 2147 MB, 2147483648 bytes
255 heads, 63 sectors/track, 261 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Disk /dev/sdb doesn't contain a valid partition table
```

```shell
[root@localhost ~]# parted /dev/sdb
GNU Parted Copyright (C) 1998 - 2004 free Software Foundation, Inc.
This program is free software, covered by the GNU General Public License.
This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE.  See the GNU General Public License for more details.
使用/dev/sdb
(parted)mklabel gpt
(parted)print
/dev/sdb的磁盘几何结构：0.000-2048.000兆字节
磁盘标签类型：gpt
Minor   起始点       终止点 文件系统   名称                 标志
(parted)mkpart primary 0 2048  <-----上面print显示的数字
(parted)print
/dev/sdb的磁盘几何结构：0.000-2048.000兆字节
磁盘标签类型：gpt
Minor   起始点       终止点 文件系统   名称                 标志
1          0.017   2047.983
(parted)quit
```

如果必要，不要忘记更新`/etc/fstab`。

```shell
[root@localhost ~]# fdisk -l
Disk /dev/sda: 35.8 GB, 35862976512 bytes
255 heads, 63 sectors/track, 4360 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1          13      104391   83  Linux
/dev/sda2              14         144     1052257+  82  Linux swap
/dev/sda3             145        4360    33865020   83  Linux
WARNING: GPT (GUID Partition Table) detected on '/dev/sdb'! The util fdisk doesn't support GPT. Use GNU Parted.

Disk /dev/sdb: 2147 MB, 2147483648 bytes
255 heads, 63 sectors/track, 261 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
   Device Boot      Start         End      Blocks   Id  System
/dev/sdb1               1         262     2097151+  ee  EFI GPT
Partition 1 has different physical/logical beginnings (non-Linux?):
     phys=(0, 0, 1) logical=(0,0, 2)
Partition 1 has different physical/logical endings:
     phys=(1023, 254, 63) logical=(261, 21, 16)
```

```shell
[root@localhost ~]# mkfs.ext3 /dev/sdb1
mke2fs 1.35 (28-Feb-2004)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
262144 inodes, 524279 blocks
26213 blocks (5.00%) reserved for the super user
First data block=0
Maximum filesystem blocks=536870912
16 block groups
32768 blocks per group, 32768 fragments per group
16384 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912
Writing inode tables: done
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done
This filesystem will be automatically checked every 28 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
```

```shell
[root@localhost ~]# mount /dev/sdb1 /mnt
[root@localhost ~]# df -h
Filesystem            容量  已用 可用 已用% 挂载点
/dev/sda3              <?xml:namespace prefix = st1 />32G  2.6G   28G   9% /
/dev/sda1              99M   12M   82M  13% /boot
none                  252M     0  252M   0% /dev/shm
/dev/sdb1             2.0G   36M  1.9G   2% /mnt
```


