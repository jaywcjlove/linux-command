uniq
===

报告或忽略文件中的重复行

## 补充说明

**uniq命令** 用于报告或忽略文件中的重复行，一般与sort命令结合使用。

### 语法  

```shell
uniq(选项)(参数)
```

### 选项  

```shell
-c或——count：在每列旁边显示该行重复出现的次数；
-d或--repeated：仅显示重复出现的行列；
-f<栏位>或--skip-fields=<栏位>：忽略比较指定的栏位；
-s<字符位置>或--skip-chars=<字符位置>：忽略比较指定的字符；
-u或——unique：仅显示出一次的行列；
-w<字符位置>或--check-chars=<字符位置>：指定要比较的字符。
```

### 参数  

*   输入文件：指定要去除的重复行文件。如果不指定此项，则从标准读取数据；
*   输出文件：指定要去除重复行后的内容要写入的输出文件。如果不指定此选项，则将内容显示到标准输出设备（显示终端）。

### 实例  

删除重复行：

```shell
uniq file.txt
sort file.txt | uniq
sort -u file.txt
```

只显示单一行：

```shell
uniq -u file.txt
sort file.txt | uniq -u
```

统计各行在文件中出现的次数：

```shell
sort file.txt | uniq -c
```

在文件中找出重复的行：

```shell
sort file.txt | uniq -d
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->