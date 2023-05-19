stat
===

用于显示文件的状态信息

## 补充说明

**stat命令** 用于显示文件的状态信息。stat命令的输出信息比ls命令的输出信息要更详细。

### 语法

```shell
stat(选项)(参数)
```

### 选项

```shell
-L：支持符号连接；
-f：显示文件系统状态而非文件状态；
-t：以简洁方式输出信息；
--help：显示指令的帮助信息；
--version：显示指令的版本信息。
```

### 参数

文件：指定要显示信息的普通文件或者文件系统对应的设备文件名。

### 实例

```shell
[root@localhost ~]# ls -l myfile
-rw-r--r-- 1 root root 0 2010-10-09 myfile

[root@localhost ~]# stat myfile
file: “myfile”
Size: 0               Blocks: 8          IO Block: 4096   一般空文件
Device: fd00h/64768d    Inode: 194805815   Links: 1
Access: (0644/-rw-r--r--)  Uid: (    0/    root)   Gid: (    0/    root)
Access: 2010-12-12 12:22:35.000000000 +0800
Modify: 2010-10-09 20:44:21.000000000 +0800
Change: 2010-10-09 20:44:21.000000000 +0800

[root@localhost ~]# stat -f myfile
File: "myfile"
id: 0        Namelen: 255     type: ext2/ext3
Block size: 4096       Fundamental block size: 4096
Blocks: Total: 241555461  free: 232910771  Available: 220442547
Inodes: Total: 249364480  Free: 249139691

[root@localhost ~]# stat -t myfile
myfile 0 8 81a4 0 0 fd00 194805815 1 0 0 1292127755 1286628261 1286628261 4096
```


