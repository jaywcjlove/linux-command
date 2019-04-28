pvdisplay
===

显示物理卷的属性

## 补充说明

**pvdisplay命令** 用于显示物理卷的属性。pvdisplay命令显示的物理卷信息包括：物理卷名称、所属的卷组、物理卷大小、PE大小、总PE数、可用PE数、已分配的PE数和UUID。

### 语法  

```shell
pvdisplay(选项)(参数)
```

### 选项  

```shell
-s：以短格式输出；
-m：显示PE到LE的映射。
```

### 参数  

物理卷：要显示的物理卷对应的设备文件名。

### 实例  

使用pvdisplay命令显示指定的物理卷的基本信息。在命令行中输入下面的命令：

```shell
[root@localhost ~]# pvdisplay /dev/sdb1    #显示物理卷基本信息
```

输出信息如下：

```shell
"/dev/sdb1" is a new physical volume of "101.94 MB"  
--- NEW Physical volume ---  
PV Name               /dev/sdb1  
....省略部分输出内容......  
PV UUID         FOXiS2-Ghaj-Z0Mf- cdVZ-pfpk- dP9p-ifIZXN
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->