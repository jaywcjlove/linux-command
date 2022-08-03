rmmod
===

从运行的内核中移除指定的内核模块

## 补充说明

**rmmod命令** 用于从当前运行的内核中移除指定的内核模块。执行rmmod指令，可删除不需要的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放如核心。你可以将这些功能编译成一个个单独的模块，待有需要时再分别载入它们。

### 语法

```shell
rmmod(选项)(参数)
```

### 选项

```shell
-v：显示指令执行的详细信息；
-f：强制移除模块，使用此选项比较危险；
-w：等待着，直到模块能够被除时在移除模块；
-s：向系统日志（syslog）发送错误信息。
```

### 参数

模块名：要移除的模块名称。

### 实例

用rmmod命令主要用于卸载正在使用的Linux内核模块，与`modprobe -r`命令相似，如下所示：

```shell
[root@localhost boot]# lsmod | grep raid1
raid1                  25153  0

[root@localhost boot]# rmmod raid1
[root@localhost boot]# lsmod | grep raid1
```


