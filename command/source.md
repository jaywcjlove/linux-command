source
===

在当前Shell环境中从指定文件读取和执行命令。

### 概要

source filename [arguments]

### 主要用途

- 执行文件并从文件中加载变量及函数到执行环境

#### 参数

filename：要执行的文件

arguments（可选）：传递给文件的参数

#### 返回值

source返回文件最后一个命令的返回值，如果文件不能读取则会失败

#### 错误用法

- 文件在`$PATH`中找不到。

- 文件未给出。

### 例子

- 在一些工具的执行过程中，会把环境变量设置以"export XXX=XXXXXX"或"declare XXX=XXXXXX"的形式导出到
一个文件中，然后用source加载该文件内容到执行环境中。

- 读取和执行/root/.bash_profile文件。

```shell
[root@localhost ~]# source ~/.bash_profile
```

### Q&A

Q：`source`和`sh`在执行文件方面有什么区别？

A：`sh`的执行是在子shell中，`source`会使得被执行文件的变量及函数加载进当前终端环境内（除去函数内local修饰的变量等）；建议您参考`export`命令的 **知识点** 部分


### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看 `help` 命令。




