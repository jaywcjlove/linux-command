dmesg
===

显示Linux系统启动信息

## 补充说明

**dmesg命令** 被用于检查和控制内核的环形缓冲区。kernel会将开机信息存储在ring buffer中。您若是开机时来不及查看信息，可利用dmesg来查看。开机信息保存在`/var/log/dmesg`文件里。

###  语法 

```shell
dmesg(选项)
```

###  选项 

```shell
-c：显示信息后，清除ring buffer中的内容；
-s<缓冲区大小>：预设置为8196，刚好等于ring buffer的大小；
-n：设置记录信息的层级。
```

###  实例 

```shell
[root@localhost ~]# dmesg | head
Linux version 2.6.18-348.6.1.el5 (mockbuild@builder17.centos.org) (gcc version 4.1.2 20080704 (Red Hat 4.1.2-54)) #1 SMP Tue May 21 15:34:22 EDT 2013
BIOS-provided physical RAM map:
 BIOS-e820: 0000000000010000 - 000000000009f400 (usable)
 BIOS-e820: 000000000009f400 - 00000000000a0000 (reserved)
 BIOS-e820: 00000000000f0000 - 0000000000100000 (reserved)
 BIOS-e820: 0000000000100000 - 000000007f590000 (usable)
 BIOS-e820: 000000007f590000 - 000000007f5e3000 (ACPI NVS)
 BIOS-e820: 000000007f5e3000 - 000000007f5f0000 (ACPI data)
 BIOS-e820: 000000007f5f0000 - 000000007f600000 (reserved)
 BIOS-e820: 00000000e0000000 - 00000000e8000000 (reserved)
```

查看硬盘基础信息

```shell
dmesg | grep sda

[    2.442555] sd 0:0:0:0: [sda] 488281250 512-byte logical blocks: (250 GB/232 GiB)
[    2.442590] sd 0:0:0:0: [sda] Write Protect is off
[    2.442592] sd 0:0:0:0: [sda] Mode Sense: 00 3a 00 00
[    2.442607] sd 0:0:0:0: [sda] Write cache: enabled, read cache: enabled, doesn't support DPO or FUA
[    2.447533]  sda: sda1
[    2.448503] sd 0:0:0:0: [sda] Attached SCSI disk
```

查看多关键字

```shell
dmesg | grep -E "vcc5v0_host|vcc_3v3_s0|ttyS"

[    1.193143] vcc5v0_host: supplied by vcc5v0_usb
[    1.481139] feb80000.serial: ttyS5 at MMIO 0xfeb80000 (irq = 73, base_baud = 1500000) is a 16550A
[    1.513541] vcc_3v3_s0: supplied by vcc5v0_sys
```
