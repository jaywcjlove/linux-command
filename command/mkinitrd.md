mkinitrd
===

建立要载入ramdisk的映像文件

## 补充说明

**mkinitrd命令** 建立要载入ramdisk的映像文件，以供Linux开机时载入ramdisk。

这个是重新封包核心的命令，例如你自己修改了一个设备的驱动，如果这个驱动要加入核心级别的话，就需要对核心进行重新封包，把新加的配置编译到核心内部去！

###  语法

```shell
mkinitrd(选项)(参数)
```

###  选项

```shell
-f：若指定的映像问家名称与现有文件重复，则覆盖现有的文件；
-v：执行时显示详细的信息；
--omit-scsi-modules：不要载入SCSI模块；
--preload=<模块名称>：指定要载入的模块；
--with=<模块名称>：指定要载入的模块；
--version：显示版本信息。
```

###  参数

*   映像文件：指定要创建的映像文件；
*   内核版本：指定内核版本。

###  实例

```shell
[root@localhost tmp]# mkinitrd -v -f myinitrd.img $(uname -r)
Creating initramfs
WARNING: using /tmp for temporary files
Looking for deps of module ide-disk
Looking for deps of module ext3  jbd
Looking for deps of module jbd
Using modules:  ./kernel/fs/jbd/jbd.ko ./kernel/fs/ext3/ext3.ko
/sbin/nash -> /tmp/initrd.Vz3928/bin/nash
/sbin/insmod.static -> /tmp/initrd.Vz3928/bin/insmod
/sbin/udev.static -> /tmp/initrd.Vz3928/sbin/udev
/etc/udev/udev.conf -> /tmp/initrd.Vz3928/etc/udev/udev.conf
copy from /lib/modules/2.6.9-5.EL/./kernel/fs/jbd/jbd.ko(elf32-i386) to /tmp/initrd.Vz3928/lib/jbd.ko(elf32-i386)
copy from /lib/modules/2.6.9-5.EL/./kernel/fs/ext3/ext3.ko(elf32-i386) to /tmp/initrd.Vz3928/lib/ext3.ko(elf32-i386)
Loading module jbd
Loading module ext3

[root@localhost tmp]# file myinitrd.img
myinitrd.img: gzip compressed data, from Unix, max compression

[root@localhost tmp]# mv myinitrd.img  myinitrd.img.gz
[root@localhost tmp]# gzip -d myinitrd.img.gz
[root@localhost tmp]# file myinitrd.img
myinitrd.img: ASCII cpio archive (SVR4 with no CRC)
```


