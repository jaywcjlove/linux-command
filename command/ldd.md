ldd
===

打印程序或者库文件所依赖的共享库列表

## 补充说明

**ldd命令** 用于打印程序或者库文件所依赖的共享库列表。

### 语法  

```shell
ldd(选项)(参数)
```

### 选项  

```shell
--version：打印指令版本号；
-v：详细信息模式，打印所有相关信息；
-u：打印未使用的直接依赖；
-d：执行重定位和报告任何丢失的对象；
-r：执行数据对象和函数的重定位，并且报告任何丢失的对象和函数；
--help：显示帮助信息。
```

### 参数  

文件：指定可执行程序或者文库。

### 其他介绍  

首先ldd不是一个可执行程序，而只是一个shell脚本

ldd能够显示可执行模块的dependency，其原理是通过设置一系列的环境变量，如下：`LD_TRACE_LOADED_OBJECTS、LD_WARN、LD_BIND_NOW、LD_LIBRARY_VERSION、LD_VERBOSE`等。当`LD_TRACE_LOADED_OBJECTS`环境变量不为空时，任何可执行程序在运行时，它都会只显示模块的dependency，而程序并不真正执行。要不你可以在shell终端测试一下，如下：

```shell
export LD_TRACE_LOADED_OBJECTS=1
```

再执行任何的程序，如ls等，看看程序的运行结果。

ldd显示可执行模块的dependency的工作原理，其实质是通过ld-linux.so（elf动态库的装载器）来实现的。我们知道，ld-linux.so模块会先于executable模块程序工作，并获得控制权，因此当上述的那些环境变量被设置时，ld-linux.so选择了显示可执行模块的dependency。

实际上可以直接执行ld-linux.so模块，如：`/lib/ld-linux.so.2 --list program`（这相当于ldd program）


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->