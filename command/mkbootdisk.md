mkbootdisk
===

可建立目前系统的启动盘

## 补充说明

**mkbootdisk命令** 用来为当前运行的系统创建能够单独使用的系统引导软盘，以便在系统出现故障时能够启动操作进行适当的修复工作。

### 语法  

```shell
mkbootdisk(选项)(参数)
```

### 选项  

```shell
--device<设备>：指定设备；
--mkinitrdargs<参数>：设置mkinitrd的参数；
--noprompt：不会提示用户插入磁盘；
--verbose：执行时显示详细的信息；
--version：显示版本信息。
```

### 参数  

内核：指定内核版本。

### 实例  

```shell
mkbootdisk --device /dev/fd0 `uname -r`
```

其中，``uname -r``是目前Linux 系统所使用的核心版本，如果你有多个核心版本的话，你以可以直接输入核心版本。例如在这个网页中所使用的核心有两个版本，一个是2.2.12-20，另一个是2.2.18，若要以2.2.18设定开机的话，可以使用：

```shell
mkbootdisk --device /dev/fd0 2.2.18
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->