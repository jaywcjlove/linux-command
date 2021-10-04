cmp
===

比较两个文件是否有差异

## 补充说明

**cmp命令** 用来比较两个文件是否有差异。当相互比较的两个文件完全一样时，则该指令不会显示任何信息。若发现有差异，预设会标示出第一个不通之处的字符和列数编号。若不指定任何文件名称或是所给予的文件名为“-”，则cmp指令会从标准输入设备读取数据。

### 语法

```shell
cmp(选项)(参数)
```

### 选项

```shell
-c或--print-chars：除了标明差异处的十进制字码之外，一并显示该字符所对应字符；
-i<字符数目>或--ignore-initial=<字符数目>：指定一个数目；
-l或——verbose：标示出所有不一样的地方；
-s或--quiet或——silent：不显示错误信息；
-v或——version：显示版本信息；
--help：在线帮助。
```

### 参数

目录：比较两个文件的差异。

### 实例

使用cmp命令比较文件"testfile"和文件"testfile1"两个文件，则输入下面的命令：

```shell
cmp testfile testfile1            #比较两个指定的文件
```

在上述指令执行之前，使用cat命令查看两个指定的文件内容，如下所示：

```shell
cat testfile                    #查看文件内容  
Absncn 50                       #显示文件“testfile”  
Asldssja 60  
Jslkadjls 85 

cat testfile1                   #查看文件内容  
Absncn 50                       #显示文件“testfile1”  
AsldssjE 62  
Jslkadjls 85  
```

然后，再执行cmp命令，并返回比较结果，具体如下所示：

```shell
cmp testfile testfile1       #比较两个文件  
testfile testfile1           #有差异：第8字节，第2行  
```

注意：在比较结果中，只能够显示第一比较结果。


