pwd
===

绝对路径方式显示用户当前工作目录

## 补充说明

**pwd命令** 以绝对路径的方式显示用户当前工作目录。命令将当前目录的全路径名称（从根目录）写入标准输出。全部目录使用`/`分隔。第一个`/`表示根目录，最后一个目录是当前目录。执行pwd命令可立刻得知您目前所在的工作目录的绝对路径名称。

### 语法  

```shell
pwd（选项）
```

### 选项  

```shell
--help：显示帮助信息；
--version：显示版本信息。
```

### 实例  

```shell
[root@localhost ~]# pwd
/root
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->