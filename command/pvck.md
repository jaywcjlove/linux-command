pvck
===

检测物理卷的LVM元数据的一致性

## 补充说明

**pvck命令** 用来检测物理卷的LVM元数据的一致性。默认情况下，物理卷中的前4个扇区保存着LVM卷标，可以使用`--labelsector`选项指定其他的位置（例如：数据恢复时）。

### 语法  

```shell
pvck(选项)(参数)
```

### 选项  

```shell
-d：调试模式；
-v：详细信息模式；
--labelsector：指定LVE卷标所在扇区。
```

### 参数  

物理卷：指定要检查的物理卷对应的设备文件。

### 实例  

使用pvck命令检查物理卷`/dev/sdb1`。在命令行中输入下面的命令：

```shell
pvck -v /dev/sdb1    #检查物理卷元数据
Scanning /dev/sdb1  
Found label on /dev/sdb1, sector 1, type=LVM2 001  
Found text metadata area: offset=4096, size=192512 
Found LVM2 metadata record at offset=125952,  
size=70656, offset2=0 size2=0
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->