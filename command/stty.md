stty
===

修改终端命令行的相关设置

## 补充说明

**stty命令** 修改终端命令行的相关设置。

### 语法  

```
stty(选项)(参数)
```

### 选项  

```
-a：以容易阅读的方式打印当前的所有配置；
-g：以stty可读方式打印当前的所有配置。
```

### 参数  

终端设置：指定终端命令行的设置选项。

### 实例  

 **在命令行下，禁止输出大写的方法：** 

```
stty iuclc     #开启
stty -iuclc    #恢复
```

 **在命令行下禁止输出小写：** 

```
stty olcuc    #开启
stty -olcuc   #恢复
```

 **打印出终端的行数和列数：** 

```
stty size
```

 **改变Ctrl+D的方法:** 

```
stty eof "string"
```

系统默认是Ctrl+D来表示文件的结束，而通过这种方法，可以改变！

 **屏蔽显示：** 

```
stty -echo   #禁止回显
stty echo    #打开回显
```

测试方法:

```
stty -echo;read;stty echo;read
```

 **忽略回车符：** 

```
stty igncr     #开启
stty -igncr    #恢复
```

 **定时输入：** 

```
timeout_read()
{
    timeout=$1
    old_stty_settings=`stty -g`　　#save current settings
    stty -icanon min 0 time 100　　#set 10seconds,not 100seconds
    eval read varname　　          #=read $varname
    stty "$old_stty_settings"　　  #recover settings
}
```

更简单的方法就是利用read命令的`-t`选项：

```
read -t 10 varname
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->