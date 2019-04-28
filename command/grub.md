grub
===

多重引导程序grub的命令行shell工具

## 补充说明

**grub命令** 是多重引导程序grub的命令行shell工具。

### 语法  

```shell
grub(选项)
```

### 选项  

```shell
--batch：打开批处理模式；
--boot-drive=<驱动器>：指定stage2的引导驱动器；
--config-file<配置文件>：指定stage2的配置文件；
--device-map=<文件>：指定设备的映射文件；
--help：显示帮助信息；
--install-partition=<分区>：指定stage2安装分区；
--no-config-file：不使用配置文件；
--no-pager：不使用内部分页器；
--preset-menu：使用预设菜单；
--probe-second-floppy：检测第二个软盘驱动器；
--read-only：只读模式。
```

### 实例  

利用grub命令来启动损坏的Linux系统，可能你的电脑因为某些原因损坏不能自动启动了。当然原因很多，可能的现象也很多。

这里说一下这种情况下的处理方法，即：屏幕上提示`grub>`，但你的硬盘上数据没有丢失，各分区都是好的。这种情况是你的grub信息损坏了，但比较严重的是系统启动不了。

当然，在正常启动情况下，屏幕上出现grub的启动项选择菜单时按`c`键也是可以进入`grub>`状态的。这时候我们需要用grub的命令来手工启动系统。

只需要用到四个命令boot、kernel、initrd、boot。

但grub本身命令很多，比如查看文件内容的cat ，你输入help会得到。

首先，输入“ root (hd ” ，然后按两次 TAB 键； /* 这会列出你电脑上可能的磁盘设备，硬盘为 hd0/hd1 或 sd0/sd1 等 */

然后，选择你的安装 Linux 系统的硬盘，比如 hd0 ，输入 “ root (hd0, ” 再按两次 TAB 键； /* 这会列出你的第一块硬盘上的分区情况，你会知道哪个是 swap 交换分区， 0x82 ，哪个是 Linux 分区 0x83 */

选择你认为可能的 /boot 目录所在的分区， 输入`root (hd0, 1)`回车；

接着，输入`cat /boot/vm`， 按两次 TAB 键，如果出现一些 vm 开头的文件，比如 vmlinuz-2.6.15-26-386 说明这里是 /boot 所在的分区。

删除上一次的输入，再输入`cat /boot/initrd`，按两次 TAB 键，如果出现一些 initrd 开头的文件，比如 initrd.img-2.6.15-26-386 说明这个 /boot 所在的分区有 initrd ，即 ramdisk 镜像；

删除上一次的输入，再输入`cat /sbin/init`，按两次 TAB 键，如果出现一些 init 开头的文件，比如`/sbin/init`说明这个分区是`/`所在的分区；

如果没有出现`/sbin/init`文件，说明`(hd0,1)`分区仅仅是`/boot`分区而不是`/`分区。重新输入`root (hd0,N)`命令，这里 N 是某个 Linux 分区，然后再试`cat /sbin/init`， 直到屏幕上出现`/sbin/init`，说明你找到了`/`分区，严格来说，应该是`/sbin`目录所在的分区；

依次输入命令：

```shell
root (hd0,1)   /* 假设 /dev/hda2 是你的 /boot 所在的分区 */
kernel /boot/vmlinuz-2.6.15-26-386 ro dev=/dev/hda3    /* 假设 /dev/hda3 是你的 / 所在的分区 */
initrd /boot/initrd.img-2.6.15-26-386
boot
```

即可启动系统。

这里的关键问题是如何确定系统的几个分区：`/boot` `/` `/sbin`


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->