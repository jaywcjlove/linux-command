dmesg
===

显示Linux系统启动信息

## 补充说明

**dmesg命令** 被用于检查和控制内核的环形缓冲区。kernel会将开机信息存储在ring buffer中。您若是开机时来不及查看信息，可利用dmesg来查看。开机信息保存在`/var/log/dmesg`文件里。

### 语法  

```
dmesg(选项)
```

### 选项  

```
-c：显示信息后，清除ring buffer中的内容；
-s<缓冲区大小>：预设置为8196，刚好等于ring buffer的大小；
-n：设置记录信息的层级。
```

### 实例  

```
root@localhost ~
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


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->