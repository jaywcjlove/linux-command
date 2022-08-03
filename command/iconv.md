iconv
===

转换文件的编码方式

## 补充说明

**iconv命令** 是用来转换文件的编码方式的，比如它可以将UTF8编码的转换成GB18030的编码，反过来也行。JDK中也提供了类似的工具native2ascii。Linux下的iconv开发库包括iconv_open,iconv_close,iconv等C函数，可以用来在C/C++程序中很方便的转换字符编码，这在抓取网页的程序中很有用处，而iconv命令在调试此类程序时用得着。

###  语法

```shell
iconv -f encoding [-t encoding] [inputfile]... 
```

###  选项

```shell
-f encoding :把字符从encoding编码开始转换。 
-t encoding :把字符转换到encoding编码。 
-l :列出已知的编码字符集合 
-o file :指定输出文件 
-c :忽略输出的非法字符 
-s :禁止警告信息，但不是错误信息 
--verbose :显示进度信息 
-f和-t所能指定的合法字符在-l选项的命令里面都列出来了。 
```

###  实例

列出当前支持的字符编码： 

```shell
iconv -l 
```

将文件file1转码，转后文件输出到fil2中： 

```shell
iconv file1 -f EUC-JP-MS -t UTF-8 -o file2 
```

这里，没`-o`那么会输出到标准输出。


