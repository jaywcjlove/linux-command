modprobe
===

自动处理可载入模块

## 补充说明

**modprobe命令** 用于智能地向内核中加载模块或者从内核中移除模块。

modprobe可载入指定的个别模块，或是载入一组相依的模块。modprobe会根据depmod所产生的相依关系，决定要载入哪些模块。若在载入过程中发生错误，在modprobe会卸载整组的模块。

###  语法 

```shell
modprobe(选项)(参数)
```

###  选项 

```shell
-a或--all：载入全部的模块；
-c或--show-conf：显示所有模块的设置信息；
-d或--debug：使用排错模式；
-l或--list：显示可用的模块；
-r或--remove：模块闲置不用时，即自动卸载模块；
-t或--type：指定模块类型；
-v或--verbose：执行时显示详细的信息；
-V或--version：显示版本信息；
-help：显示帮助。
```

###  参数 

模块名：要加载或移除的模块名称。

###  实例 

 **查看modules的配置文件：** 

```shell
modprobe -c
```

这里，可以查看modules的配置文件，比如模块的alias别名是什么等。会打印许多行信息，例如其中的一行会类似如下：

```shell
alias symbol:ip_conntrack_unregister_notifier ip_conntrack
```

 **列出内核中所有已经或者未挂载的所有模块：** 

```shell
modprobe -l
```

这里，我们能查看到我们所需要的模块，然后根据我们的需要来挂载；其实`modprobe -l`读取的模块列表就位于/lib/modules/\`uname -r \`目录中；其中`uname -r`是内核的版本，例如输出结果的其中一行是：

```shell
/lib/modules/2.6.18-348.6.1.el5/kernel/net/netfilter/xt_statistic.ko
```

 **挂载vfat模块：** 

```shell
modprobe vfat
```

这里，使用格式`modprobe 模块名`来挂载一个模块。挂载之后，用lsmod可以查看已经挂载的模块。模块名是不能带有后缀的，我们通过`modprobe -l`所看到的模块，都是带有`.ko`或`.o`后缀。

 **移除已经加载的模块：** 

```shell
modprobe -r 模块名
```

这里，移除已加载的模块，和rmmod功能相同。



