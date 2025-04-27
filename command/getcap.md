getcap
===

显示文件的能力（capabilities）

## 补充说明

**getcap命令** 用于查看文件的能力（capabilities）。在 Linux 中，文件的能力是一种权限控制机制，可以赋予普通文件特定的特权操作，而无需完全的 root 权限。

### 语法

```shell
getcap [选项] [文件名...]
```

### 选项

```shell
-v      # 显示详细信息，通常与其他选项一起使用。
-p      # 显示进程的能力。
```

### 参数

文件名：指定要查看能力的文件路径。

### 实例

查看一个可执行文件的能力：

```shell
$ getcap /usr/bin/ping
/usr/bin/ping = cap_net_raw+ep
```

查看当前目录下所有文件的能力：

```shell
$ getcap *
/usr/bin/ping = cap_net_raw+ep
```

如果文件没有设置任何能力，getcap 不会返回任何输出。

查看进程的能力（以 PID 为例）：

```shell
$ getcap -p 1234
```