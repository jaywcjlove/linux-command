chroot
===

把根目录换成指定的目的目录

## 补充说明

**chroot命令** 用来在指定的根目录下运行指令。chroot，即 change root directory （更改 root 目录）。在 linux 系统中，系统默认的目录结构都是以`/`，即是以根 (root) 开始的。而在使用 chroot 之后，系统的目录结构将以指定的位置作为`/`位置。

在经过 chroot 命令之后，系统读取到的目录和文件将不在是旧系统根下的而是新根下（即被指定的新的位置）的目录结构和文件，因此它带来的好处大致有以下3个：

**增加了系统的安全性，限制了用户的权力：** 

在经过 chroot 之后，在新根下将访问不到旧系统的根目录结构和文件，这样就增强了系统的安全性。这个一般是在登录 (login) 前使用 chroot，以此达到用户不能访问一些特定的文件。

**建立一个与原系统隔离的系统目录结构，方便用户的开发：** 

使用 chroot 后，系统读取的是新根下的目录和文件，这是一个与原系统根下文件不相关的目录结构。在这个新的环境中，可以用来测试软件的静态编译以及一些与系统不相关的独立开发。

**切换系统的根目录位置，引导 Linux 系统启动以及急救系统等：** 

chroot 的作用就是切换系统的根位置，而这个作用最为明显的是在系统初始引导磁盘的处理过程中使用，从初始 RAM 磁盘 (initrd) 切换系统的根位置并执行真正的 init。另外，当系统出现一些问题时，我们也可以使用 chroot 来切换到一个临时的系统。

###  语法

```shell
chroot(选项)(参数)
```

###  选项

```shell
--help：在线帮助；
--version：显示版本信息。
```

###  参数

*   目录：指定新的根目录；
*   指令：指定要执行的指令。

###  实例

**将target作为根目录（运行其中的`/bin/sh`）:** 

```shell
chroot target /bin/sh
```

这里,target是busybox安装好的路径，类似一个文件系统包含了许多工具。这样，将会进入一个shell界面，这个shell以target为根。运行exit退出该shell又返回原来的本机环境了，也可以使用Ctrl+D。

注意：

*   根用户才行
*   如果直接chroot target默认寻找target的/bin/bash.这会以target作为根目录

将target作为根目录(运行其中的`/bin/ls`):

```shell
chroot target /bin/ls
```

这里，target是busybox安装好的路径，类似一个文件系统包含了许多工具。这样运行的是target中的ls（不是本机的`/bin/ls`），然后返回立即本机的目录环境。

注意，自己在本地编译一个程序生成a.out之后，拷进`target/bin/`中这样运行却不行,因为它包含了动态连接的库，需要用ldd查看a.out需要那些动态库，将这些库拷贝到新根的对应路径下才能执行。

 **用chroot运行自己编译的一个程序：** 

准备chroot的根目录：

```shell
mkdir newRoot
```

编译自己的程序：

```shell
gcc main.c
```

这里main.c生成a.out，功能是输出hello。

查看程序需要的库：

```shell
ldd a.out
```

输入之后，输出如下：

```shell
linux-gate.so.1 = &gt;  (0xb8034000)
libc.so.6 = &gt; /lib/tls/i686/cmov/libc.so.6 (0xb7eab000)
/lib/ld-linux.so.2 (0xb801a000)
```

将程序需要的库和程序拷贝到新根目录下：

```shell
cp a.out newRoot
mkdir newRoot/lib
cp /lib/tls/i686/cmov/libc.so.6 newRoot/lib
cp /lib/ld-linux.so.2 newRoot/lib
```

这里newRoot内容将如下：

```shell
a.out lib/
```

使用chroot运行自己的程序：

```shell
su
chroot newRoot /a.out
```

这样就能够正确运行a.out了，因为a.out使用到了其他的动态连接库，所以需要将库拷贝到newRoot中，如果没有其他库那么直接拷贝a.out就能运行。例如静态编译后的busybox，其安装目录中的`/bin/busybox`就没有依赖其他库。


