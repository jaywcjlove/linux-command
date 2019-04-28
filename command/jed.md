jed
===

主要用于编辑代码的编辑器

## 补充说明

**jed命令** 是由Slang所开发，其主要用用途是编辑程序的源代码。它支持彩色语法加亮显示，可以模拟emacs，EDT，wordstar和Brief编辑器。

### 语法  

```shell
jed(选项)(参数)
```

### 选项  

```shell
-2：显示上下两个编辑区；
-batch：以批处理模式来执行；
-f<函数>：执行Slang函数；
-g<行数>：移到缓冲区中指定的行数；
-i<文件>：将指定的文件载入缓冲区；
-n：不要载入jed.rc配置文件；
-s<字符串>：查找并移到指定的字符串。
```

### 参数  

文件：指定待编辑的文件列表。

### 实例  

以上下两个编辑区的方式，开启 mysource.c 原始代码文件。若要切换编辑区，可利用稍后介绍的命令，开启操作命令，开启功能表后，按 3 ，再按 2 ，即可切换编辑区：

```shell
jed -2 mysource.c
```

 **操作** 

有些Emacs的组合键和jed菜单组合键冲突例如Alt+f在Emacs中应该是“前进一个单词”，而在jed中则是“文件菜单” 想使用Emacs风格的组合键的话，编辑`/usr/share/jed/lib/menus.slc`找到如下段落：

```shell
unsetsetkey ("selectmenubar", "\em");
unsetsetkey ("@\emF", "\ef");
unsetsetkey ("@\emE", "\ee");
unsetsetkey ("@\emo", "\eo");
% Mode menu unsetsetkey ("@\emS", "\es");
unsetsetkey ("@\emB", "\eb");
unsetsetkey ("@\emi", "\ei");
unsetsetkey ("@\emH", "\eh");
unset_setkey ("@\emy", "\ey");
```

可以根据自己的需要修改，也可以简单的注释掉；使用菜单可以用F10键。

由于Jed可模拟多种编辑器，其各自按键指令也有所不同。这里以模拟 Emacs 为例，说明在编辑器中的操作方法。

 **文件** 

```shell
/usr/share/jed/lib/*.sl 这是默认的运行jed slang的文件。
/usr/share/jed/lib/site.sl 这是默认的启动文件。
/etc/jed.rc 这是全局系统配置文件。
~/.jedrc 这是用户配置文件。
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->