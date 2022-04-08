pv
===

显示当前在命令行执行的命令的进度信息，管道查看器

## 补充说明

**pv命令**  Pipe Viewer 的简称，由Andrew Wood 开发。意思是通过管道显示数据处理进度的信息。这些信息包括已经耗费的时间，完成的百分比(通过进度条显示)，当前的速度，全部传输的数据，以及估计剩余的时间。

## 下载安装

```shell
# Debian 系的操作系统，如 Ubuntu
sudo apt-get install pv

# RedHat系的则这样：
yum install pv
```

###  语法

```shell
pv(选项)(参数)
pv [OPTION] [FILE]...
```

###  选项

```shell
-p, --progress           显示进度条
-t, --timer              显示已用时间
-e, --eta                显示预计到达时间 (完成)
-I, --fineta             显示绝对估计到达时间
                         (完成)
-r, --rate               显示数据传输速率计数器
-a, --average-rate       显示数据传输平均速率计数器
-b, --bytes              显示传输的字节数
-T, --buffer-percent     显示正在使用的传输缓冲区百分比
-A, --last-written NUM   显示上次写入的字节数
-F, --format FORMAT      将输出格式设置为FORMAT
-n, --numeric            输出百分比
-q, --quiet              不输出任何信息

-W, --wait               在传输第一个字节之前不显示任何内容
-D, --delay-start SEC    在SEC秒过去之前不显示任何内容
-s, --size SIZE          将估算的数据大小设置为SIZE字节
-l, --line-mode          计算行数而不是字节数 
-0, --null               行以零结尾
-i, --interval SEC       每SEC秒更新一次
-w, --width WIDTH        假设终端的宽度为WIDTH个字符 
-H, --height HEIGHT      假设终端高度为HEIGHT行
-N, --name NAME          在可视信息前面加上名称
-f, --force              将标准错误输出到终端
-c, --cursor             使用光标定位转义序列

-L, --rate-limit RATE    将传输限制为每秒RATE字节
-B, --buffer-size BYTES  使用BYTES的缓冲区大小
-C, --no-splice          从不使用splice()，始终使用读/写
-E, --skip-errors        跳过输入中的读取错误
-S, --stop-at-size       传输--size字节后停止
-R, --remote PID         更新过程PID的设置

-P, --pidfile FILE       将进程ID保存在FILE中 

-d, --watchfd PID[:FD]   监视进程PID,打开的文件FD

-h, --help               显示帮助
-V, --version            显示版本信息
```


###  实例

我们（在 linux 上使用命令行的用户）的大多数使用场景都会用到的命令是从一个 USB 驱动器拷贝电影文件到你的电脑。如果你使用 cp 来完成上面的任务，你会什么情况都不清楚，直到整个复制过程结束或者出错。

```shell
# 复制文件会有进度
linux [master●] % pv ~/Downloads/CentOS-7-x86_64-Minimal-1511.iso > ~/Desktop/CentOS-7-x86_64-Minimal-1511.iso
# 下面输入信息
552MiB 0:00:02 [ 212MiB/s] [==================>           ] 91% ETA 0:00:00

# -L 可以让你修改 pv 命令的传输速率。
# 使用 -L 选项来限制传输速率为2MB/s。
pv -L 2m /media/himanshu/1AC2-A8E3/fNf.mkv > ./Desktop/fnf.mkv 
```

复制文件时显示进度条（如果没有指定选项，默认使用 -p, -t, -e, -r 和 -b 选项）

```bash
$ pv getiot.db > getiot.db.bak
```
将 `/var/log/syslog` 文件打包成 zip 压缩包，并显示进度

```bash
$ pv /var/log/syslog | zip > syslog.zip
```

使用 tar 命令解压缩时显示进度条

```bash
$ pv rootfs.tar.bz2 | tar -jxf - -C rootfs/
12.3MiB 0:00:02 [6.15MiB/s] [=========>                                     ] 21% ETA 0:00:07
````

解压完成

```bash
$ pv rootfs.tar.bz2 | tar -jxf - -C rootfs/
57.8MiB 0:00:10 [5.53MiB/s] [==============================================>] 100%
```

字符一个个匀速在命令行中显示出来

```shell
echo "Tecmint[dot]com is a community of Linux Nerds and Geeks" | pv -qL 10
```

压缩文件展示进度信息

```shell
pv /media/himanshu/1AC2-A8E3/fnf.mkv | gzip > ./Desktop/fnf.log.gz 
```

用 dd 命令将 iso 写入磁盘，pv来实现进度条的显示

```shell
sudo pv -cN source < /Users/kacperwang/Downloads/CentOS-7-x86_64-Everything-1511.iso | sudo dd of=/dev/disk2 bs=4m
## 显示下面进度
source:  5.2GiB 5:11:41 [ 503KiB/s] [=====================>       ] 71% ETA 2:01:56
```

在linux上, 如果执行的一些命令或者一些脚本需要花费很长时间, 但又不能拿出更多的精力反复盯着有没有执行结束, 这时候可以用pv监听PID, 任务完成后通过网络通知到微信或者钉钉, 这样就可以腾出来精力做其他的事, 是不是很棒

```shell
$ pv -d $(ps -ef | grep -v grep | grep "<脚本或命令的关键字>" | awk '{print $2}') && <这里执行发通知脚本或者命令,脚本或命令需要提前调试好>
```

### 注意

1. 选项"-d, --watchfd PID[:FD]", 是在1.6.6版本中才有的参数,如果使用需要`pv`升级到大于等于1.6.6的版本
2. CentOS7的Yum仓库里`pv`最新的是1.4.6版本,1.6.6版本是发布在CentOS8里面的,如果需要,可以将CentOS8里的pv下载到本地电脑上或者本地的Yum私服里, 这个是[下载地址](http://www.rpmfind.net/linux/rpm2html/search.php?query=pv&submit=Search+...&system=EPEL&arch=), 可以根据自己不同的架构下载, 1.6.6的安装: `rpm -ivh pv-1.6.6-7.el8.x86_64.rpm -U`

