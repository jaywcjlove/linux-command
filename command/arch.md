arch
===

显示当前主机的硬件架构类型

## 概要

```shell
arch [OPTION]...
```

## 主要用途

- 打印机器架构信息；`arch` 命令输出结果有：i386、i486、i586、alpha、sparc、arm、m68k、mips、ppc、i686等。

## 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
```

## 例子

```shell
[root@localhost ~]# arch
x86_64
```

### 注意

1. 该命令等价于 `uname -m`。

2. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 arch`，`info coreutils 'arch invocation'`。


