dos2unix
===

将DOS格式文本文件转换成Unix格式

## 补充说明

**dos2unix命令** 用来将DOS格式的文本文件转换成UNIX格式的（DOS/MAC to UNIX text file format converter）。DOS下的文本文件是以`\r\n`作为断行标志的，表示成十六进制就是0D 0A。而Unix下的文本文件是以\n作为断行标志的，表示成十六进制就是0A。DOS格式的文本文件在Linux底下，用较低版本的vi打开时行尾会显示`^M`，而且很多命令都无法很好的处理这种格式的文件，如果是个shell脚本，。而Unix格式的文本文件在Windows下用Notepad打开时会拼在一起显示。因此产生了两种格式文件相互转换的需求，对应的将UNIX格式文本文件转成成DOS格式的是unix2dos命令。

### 语法

```shell
dos2unix [-hkqV] [-c convmode] [-o file ...] [-n infile outfile ...]
```

### 选项

```shell
-k：保持输出文件的日期不变
-q：安静模式，不提示任何警告信息。
-V：查看版本
-c：转换模式，模式有：ASCII, 7bit, ISO, Mac, 默认是：ASCII。
-o：写入到源文件
-n：写入到新文件
```

### 参数

参数：需要转换到文件。

### 实例

最简单的用法就是dos2unix直接跟上文件名：

```shell
dos2unix file
```

如果一次转换多个文件，把这些文件名直接跟在dos2unix之后。（注：也可以加上`-o`参数，也可以不加，效果一样）

```shell
dos2unix file1 file2 file3
dos2unix -o file1 file2 file3
```

上面在转换时，都会直接在原来的文件上修改，如果想把转换的结果保存在别的文件，而源文件不变，则可以使用`-n`参数。

```shell
dos2unix oldfile newfile
```

如果要保持文件时间戳不变，加上`-k`参数。所以上面几条命令都是可以加上`-k`参数来保持文件时间戳的。

```shell
dos2unix -k file
dos2unix -k file1 file2 file3
dos2unix -k -o file1 file2 file3
dos2unix -k -n oldfile newfile
```

转换当前目录下所有文件

```shell
find -type f | xargs dos2unix
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->