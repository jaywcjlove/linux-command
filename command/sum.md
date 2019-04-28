sum
===

计算文件的校验码和显示块数

## 补充说明

**sum命令** 用于计算并显示指定文件的校验和与文件所占用的磁盘块数。

### 语法  

```shell
sum(选项)(参数)
```

### 选项  

```shell
-r：使用BSD的校验和算法，块大小为1k；
-s：使用system V的校验和算法，块大小为512字节。
```

### 参数  

文件列表：需要计算和与磁盘块数的文件列表。

### 实例  

计算文件校验码：

```shell
[root@localhost ~]# sum insert.sql
00827    12
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->