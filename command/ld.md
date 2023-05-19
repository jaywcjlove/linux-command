ld
===

将目标文件连接为可执行程序

## 补充说明

**ld命令** 是GNU的连接器，将目标文件连接为可执行程序。

###  语法 

```shell
ld(选项)(参数)
ld [options] objfile ...
```

###  选项 

```shell
-o：指定输出文件名；
-e：指定程序的入口符号。
```

###  参数 

目标文件：指定需要连接的目标文件。

### 实例

这告诉ld通过将文件 `/lib/crt0.o` 与 `hello.o` 和库 `libc.a` 链接起来，生成一个名为 `output` 的文件，该文件将来自标准搜索目录。

```shell
ld -o <output> /lib/crt0.o hello.o -lc
ld -o output /lib/crt0.o hello.o -lc
```



