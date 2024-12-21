nohup
===

将程序以忽略挂起信号的方式运行起来

## 补充说明

**nohup命令** 可以将程序以忽略挂起信号的方式运行起来，被运行的程序的输出信息将不会显示到终端。

无论是否将 nohup 命令的输出重定向到终端，输出都将附加到当前目录的 nohup.out 文件中。如果当前目录的 nohup.out 文件不可写，输出重定向到`$HOME/nohup.out`文件中。如果没有文件能创建或打开以用于追加，那么 command 参数指定的命令不可调用。如果标准错误是一个终端，那么把指定的命令写给标准错误的所有输出作为标准输出重定向到相同的文件描述符。

### 语法

```shell
nohup(选项)(参数)
```

### 选项

```shell
--help：在线帮助；
--version：显示版本信息。
```

### 参数

程序及选项：要运行的程序及选项。

### 实例

使用nohup命令提交作业，如果使用nohup命令提交作业，那么在缺省情况下该作业的所有输出都被重定向到一个名为nohup.out的文件中，除非另外指定了输出文件：

```shell
nohup command > myout.file 2>&1 &
```

在上面的例子中，输出被重定向到myout.file文件中。

该指令表示不做挂断操作，后台下载

```shell
nohup wget site.com/file.zip
```

下面命令，会在同一个目录下生成一个名称为 `nohup.out` 的文件，其中包含了正在运行的程序的输出内容

```shell
nohup ping -c 10 baidu.com
```

最简单的后台运行

```shell
nohup command &
```

输出默认重定向到当前目录下 nohup.out 文件

```shell
nohup python main.py &
```

自定义输出文件(标准输出和错误输出合并到 main.log)

```shell
nohup python main.py >> main.log 2>&1 &
```

与上一个例子相同作用的简写方法

```shell
nohup python main.py &> main.log &
```

不记录输出信息

```shell
nohup python main.py &> /dev/null &
```

不记录输出信息并将程序的进程号写入 pidfile.txt 文件中，方便后续杀死进程

```shell
nohup python main.py &> /dev/null & echo $! > pidfile.txt
```