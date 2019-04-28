pushd
===

将目录加入命令堆叠中

## 补充说明

**pushd命令** 是将目录加入命令堆叠中。如果指令没有指定目录名称，则会将当前的工作目录置入目录堆叠的最顶端。置入目录如果没有指定堆叠的位置，也会置入目录堆叠的最顶端，同时工作目录会自动切换到目录堆叠最顶端的目录去。

### 语法  

```shell
pushd(选项)(参数)
```

### 选项  

```shell
-n：只加入目录到堆叠中，不进行cd操作；
+n：删除从左到右的第n个目录，数字从0开始；
-n：删除从右到左的第n个目录，数字从0开始；
```

### 参数  

目录：需要压入堆栈的目录。

### 实例  

```shell
root@Mylinux:/tmp/dir4# pushd /tmp/dir3
/tmp/dir3 /tmp/dir4 /tmp/dir1 ~

root@Mylinux:/tmp/dir3# pushd /tmp/dir2
/tmp/dir2 /tmp/dir3 /tmp/dir4 /tmp/dir1 ~

root@Mylinux:/tmp/dir2# pushd -1
/tmp/dir1 ~ /tmp/dir2 /tmp/dir3 /tmp/dir4
```

注意：最左边表示栈顶，最右边表示栈底。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->