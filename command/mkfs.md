mkfs
===

用于在设备上创建Linux文件系统

## 补充说明

**mkfs命令** 用于在设备上（通常为硬盘）创建Linux文件系统。mkfs本身并不执行建立文件系统的工作，而是去调用相关的程序来执行。

### 语法  

```shell
mkfs(选项)(参数)
```

### 选项  

```shell
fs：指定建立文件系统时的参数；
-t<文件系统类型>：指定要建立何种文件系统；
-v：显示版本信息与详细的使用方法；
-V：显示简要的使用方法；
-c：在制做档案系统前，检查该partition是否有坏轨。
```

### 参数  

*   文件系统：指定要创建的文件系统对应的设备文件名；
*   块数：指定文件系统的磁盘块数。

### 实例  

在`/dev/hda5`上建一个msdos的档案系统，同时检查是否有坏轨存在，并且将过程详细列出来：

```shell
mkfs -V -t msdos -c /dev/hda5

mkfs -t ext3 /dev/sda6     //将sda6分区格式化为ext3格式
mkfs -t ext2 /dev/sda7     //将sda7分区格式化为ext2格式
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->