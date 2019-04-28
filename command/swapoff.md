swapoff
===

关闭指定的交换空间

## 补充说明

**swapoff命令** 用于关闭指定的交换空间（包括交换文件和交换分区）。swapoff实际上为swapon的符号连接，可用来关闭系统的交换区。

### 语法  

```shell
swapoff(选项)(参数)
```

### 选项  

```shell
-a：关闭配置文件“/etc/fstab”中所有的交换空间。
```

### 参数  

交换空间：指定需要激活的交换空间，可以是交换文件和交换分区，如果是交换分区则指定交换分区对应的设备文件。

### 实例  

关闭交换分区

```shell
swapoff /dev/sda2
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->