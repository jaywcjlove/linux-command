badblocks
===

查找磁盘中损坏的区块

## 补充说明

**badblock命令** 用于查找磁盘中损坏的区块。 硬盘是一个损耗设备，当使用一段时间后可能会出现坏道等物理故障。电脑硬盘出现坏道后，如果不及时更换或进行技术处理，坏道就会越来越多，并会造成频繁死机和数据丢失。最好的处理方式是更换磁盘，但在临时的情况下，应及时屏蔽坏道部分的扇区，不要触动它们。badblocks就是一个很好的检查坏道位置的工具。

### 语法  

```shell
badblock(选项)(参数)
```

### 选项  

```shell
-b<区块大小>：指定磁盘的区块大小，单位为字节；
-o<输出文件>：将检查的结果写入指定的输出文件；
-s：在检查时显示进度；
-v：执行时显示详细的信息；
-w：在检查时，执行写入测试。
```

### 参数  

* 磁盘装置：指定要检查的磁盘装置；
* 磁盘区块数：指定磁盘装置的区块总数；
* 启始区块：指定要从哪个区块开始检查。

### 实例  

badblocks以 4096 的一个block，每一个block检查16次，将结果输出到“hda-badblocks-list”文件里。

```shell
badblocks -b 4096 -c 16 /dev/hda1 -o hda-badblocks-list
```

hda-badblocks-list是个文本文件，内容如下：

```shell
cat hda-badblocks-list
51249
51250
51251
51253
51254
……
61245
……
```

可以针对可疑的区块多做几次操作。下面，badblocks以4096字节为一个“block”,每一个“block”检查1次, 将结果输出到“hda-badblocks-list.1”文件中，由第51000 block开始，到63000 block结束。

```shell
badblocks -b 4096 -c 1 /dev/hda1 -o hda-badblocks-list.1 63000 51000
```

这次花费的时间比较短，硬盘在指定的情况下在很短的时间就产生“嘎嘎嘎嘎”的响声。由于检查条件的不同，其输出的结果也不完全是相同的。重复几次同样的操作，因条件多少都有些不同，所以结果也有所不同。进行多次操作后，直到产生最后的hda-badblock-list.final文件。

### 其他  

**1、fsck使用badblocks的信息** 

badblocks只会在日志文件中标记出坏道的信息，但若希望在检测磁盘时也能跳过这些坏块不检测，可以使用fsck的-l参数：

```
fsck.ext3 -l /tmp/hda-badblock-list.final /dev/hda1
```

**2、在创建文件系统前检测坏道** 

badblocks可以随e2fsck和mke2fs的-c删除一起运行（对ext3文件系统也一样），在创建文件系统前就先检测坏道信息：

```shell
mkfs.ext3 -c /dev/hda1
```

代码表示使用-c在创建文件系统前检查坏道的硬盘。

这个操作已经很清楚地告知我们可以采用`mkfs.ext3 -c`选项用`read-only`方式检查硬盘。这个命令会在格式化硬盘时检查硬盘，并标出错误的硬盘“block”。用这个方法格式化硬盘，需要有相当大的耐心，因为命令运行后，会一个个用读的方式检查硬盘。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->