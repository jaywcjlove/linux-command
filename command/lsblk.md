lsblk
===

列出块设备信息

## 补充说明

**lsblk命令** 用于列出所有可用块设备的信息，而且还能显示他们之间的依赖关系，但是它不会列出RAM盘的信息。块设备有硬盘，闪存盘，cd-ROM等等。lsblk命令包含在util-linux-ng包中，现在该包改名为util-linux。这个包带了几个其它工具，如dmesg。要安装lsblk，请在此处下载util-linux包。Fedora用户可以通过命令`sudo yum install util-linux-ng`来安装该包。

### 选项  

```shell
-a, --all            # 显示所有设备。
-b, --bytes          # 以bytes方式显示设备大小。
-d, --nodeps         # 不显示 slaves 或 holders。
-D, --discard        # print discard capabilities。
-e, --exclude <list> # 排除设备 (default: RAM disks)。
-f, --fs             # 显示文件系统信息。
-h, --help           # 显示帮助信息。
-i, --ascii          # use ascii characters only。
-m, --perms          # 显示权限信息。
-l, --list           # 使用列表格式显示。
-n, --noheadings     # 不显示标题。
-o, --output <list>  # 输出列。
-P, --pairs          # 使用key="value"格式显示。
-r, --raw            # 使用原始格式显示。
-t, --topology       # 显示拓扑结构信息。
```

### 实例  

lsblk命令默认情况下将以树状列出所有块设备。打开终端，并输入以下命令：

```shell
lsblk

NAME   MAJ:MIN rm   SIZE RO type mountpoint
sda      8:0    0 232.9G  0 disk 
├─sda1   8:1    0  46.6G  0 part /
├─sda2   8:2    0     1K  0 part 
├─sda5   8:5    0   190M  0 part /boot
├─sda6   8:6    0   3.7G  0 part [SWAP]
├─sda7   8:7    0  93.1G  0 part /data
└─sda8   8:8    0  89.2G  0 part /personal
sr0     11:0    1  1024M  0 rom
```

7个栏目名称如下：

1.   **NAME** ：这是块设备名。
2.   **MAJ:MIN** ：本栏显示主要和次要设备号。
3.   **RM** ：本栏显示设备是否可移动设备。注意，在本例中设备sdb和sr0的RM值等于1，这说明他们是可移动设备。
4.   **SIZE** ：本栏列出设备的容量大小信息。例如298.1G表明该设备大小为298.1GB，而1K表明该设备大小为1KB。
5.   **RO** ：该项表明设备是否为只读。在本案例中，所有设备的RO值为0，表明他们不是只读的。
6.   **TYPE** ：本栏显示块设备是否是磁盘或磁盘上的一个分区。在本例中，sda和sdb是磁盘，而sr0是只读存储（rom）。
7.   **MOUNTPOINT** ：本栏指出设备挂载的挂载点。

默认选项不会列出所有空设备。要查看这些空设备，请使用以下命令：

```shell
lsblk -a
```

lsblk命令也可以用于列出一个特定设备的拥有关系，同时也可以列出组和模式。可以通过以下命令来获取这些信息：

```shell
lsblk -m
```

该命令也可以只获取指定设备的信息。这可以通过在提供给lsblk命令的选项后指定设备名来实现。例如，你可能对了解以字节显示你的磁盘驱动器大小比较感兴趣，那么你可以通过运行以下命令来实现：

```shell
lsblk -b /dev/sda

等价于

lsblk --bytes /dev/sda
```

你也可以组合几个选项来获取指定的输出。例如，你也许想要以列表格式列出设备，而不是默认的树状格式。你可能也对移除不同栏目名称的标题感兴趣。可以将两个不同的选项组合，以获得期望的输出，命令如下：

```shell
lsblk -nl
```

要获取SCSI设备的列表，你只能使用-S选项。该选项是大写字母S，不能和-s选项混淆，该选项是用来以颠倒的顺序打印依赖的。

```shell
lsblk -S
```

lsblk列出SCSI设备，而-s是逆序选项（将设备和分区的组织关系逆转过来显示），其将给出如下输出。输入命令：

```shell
lsblk -s
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->