man
===

查看Linux中的指令帮助

## 补充说明

**man命令** 是Linux下的帮助指令，通过man指令可以查看Linux中的指令帮助、配置文件帮助和编程帮助等信息。

###  语法 

```shell
man(选项)(参数)
```

###  选项 

```shell
-a：在所有的man帮助手册中搜索；
-f：等价于whatis指令，显示给定关键字的简短描述信息；
-P：指定内容时使用分页程序；
-M：指定man手册搜索的路径。
```

###  参数 

*   数字：指定从哪本man手册中搜索帮助；
*   关键字：指定要搜索帮助的关键字。

### 数字代表内容

```shell
1：用户在shell环境可操作的命令或执行文件；
2：系统内核可调用的函数与工具等
3：一些常用的函数(function)与函数库(library)，大部分为C的函数库(libc)
4：设备文件说明，通常在/dev下的文件
5：配置文件或某些文件格式
6：游戏(games)
7：惯例与协议等，如Linux文件系统，网络协议，ASCII code等说明
8：系统管理员可用的管理命令
9：跟kernel有关的文件
```

###  实例 

我们输入`man ls`，它会在最左上角显示“LS（1）”，在这里，“LS”表示手册名称，而“（1）”表示该手册位于第一节章，同样，我们输`man ifconfig`它会在最左上角显示“IFCONFIG（8）”。也可以这样输入命令：“man [章节号] 手册名称”。

man是按照手册的章节号的顺序进行搜索的，比如：

```shell
man sleep
```

只会显示sleep命令的手册,如果想查看库函数sleep，就要输入:

```shell
man 3 sleep
```

### 相关命令

* `tldr`: 简化版的使用手册，并不会像man一样把所有的使用参数和说明都列出来，而是只显示常用的几个使用Sample和说明
  * 开源地址: [https://github.com/tldr-pages/tldr/](https://github.com/tldr-pages/tldr/)
  * 官网: [https://tldr.sh/](https://tldr.sh/)
  * 在线版本: [https://tldr.ostera.io/](https://tldr.ostera.io/)





