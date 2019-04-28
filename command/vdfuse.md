vdfuse
===

VirtualBox软件挂载VDI分区文件工具

## 补充说明

**vdfuse命令** 是VirtualBox软件挂载VDI分区文件的一个工具，VirtualBox是一款能创建虚拟机的开源软件，vdi是它的默认磁盘格式。

### 什么是VirtualBox  

VirtualBox是一款功能强大的x86虚拟机软件，它不仅具有丰富的特色，而且性能也很优异。更可喜的是，VirtualBox于数日前走向开源，成为了一个发布在GPL许可之下的自由软件。VirtualBox可以在Linux和Windows主机中运行，并支持在其中安装Windows (NT 4.0、2000、XP、Server 2003、Vista)、DOS/Windows 3.x、Linux (2.4 和 2.6)、OpenBSD等系列的客户操作系统。

 **在Ubuntu中安装vdfuse，打开终端，输入：** 

```shell
sudo apt-get install virtualbox-fuse
```

### 语法  

```shell
vdfuse [options] -f image-file mountpoint
```

### 选项  

```shell
-h 帮助
-r 只读
-t 类型 (VDI, VMDK, VHD, or raw; default: auto)
-f 镜像文件
-a 允许所有用户读取
-w 允许所有用户都写
-g 前台运行
-v 输出反馈
-d debug模式
```

注意：必须编辑一下`/etc/fuse.confand`，去掉 "user_allow_other" 前面的注释符号（#），否则不能正确运行。

### 实例  

使用如下如下语句挂载.vdi文件：

```shell
sudo vdfuse -f /path/to/file.vdi /path/to/mountpoint
```

`/path/to/mountpoint`应该包含如下文件EntireDisk、Partition1等，如果只有一个文件，你可能需要这样挂载：

```shell
mount /path/to/mountpoint/Partition1 /path/to/someother/mountpoint
```

文件系统就挂载到`/path/to/someother/mountpoint`了。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->