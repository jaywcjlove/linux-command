tailf
===

在屏幕上显示指定文件的末尾若干行内容，通常用于日志文件的跟踪输出。

## 补充说明

tailf命令几乎等同于`tail -f`，严格说来应该与`tail --follow=name`更相似些。当文件改名之后它也能继续跟踪，特别适合于日志文件的跟踪（follow the growth of a log file）。与`tail -f`不同的是，如果文件不增长，它不会去访问磁盘文件。tailf特别适合那些便携机上跟踪日志文件，因为它能省电，因为减少了磁盘访问。tailf命令不是个脚本，而是一个用C代码编译后的二进制执行文件，某些Linux安装之后没有这个命令。

tailf和tail -f的区别

1. tailf 总是从文件开头一点一点的读， 而tail -f 则是从文件尾部开始读
2. tailf check文件增长时，使用的是文件名， 用stat系统调用；而tail -f 则使用的是已打开的文件描述符； 注：tail 也可以做到类似跟踪文件名的效果； 但是tail总是使用fstat系统调用，而不是stat系统调用；结果就是：默认情况下，当tail的文件被偷偷删除时，tail是不知道的，而tailf是知道的。

### 语法  

```shell
tailf logfile # 动态跟踪日志文件logfile，最初的时候打印文件的最后10行内容。
```

### 选项  

```shell
-n, --lines NUMBER  # 输出最后数行
-NUMBER             # 与NUMBER相同 `-n NUMBER'
-V, --version       # 输出版本信息并退出
-h, --help          # 显示帮助并退出
```

### 参数  

目标：指定目标日志。

### 实例

```shell
tailf log/WEB.LOG 
tailf -n 5 log2014.log   # 显示文件最后5行内容
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
