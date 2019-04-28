pv
===

显示当前在命令行执行的命令的进度信息，管道查看器。

## 补充说明

**pv命令**  Pipe Viewer 的简称，由Andrew Wood 开发。意思是通过管道显示数据处理进度的信息。这些信息包括已经耗费的时间，完成的百分比(通过进度条显示)，当前的速度，全部传输的数据，以及估计剩余的时间。

## 下载安装

```shell
# Debian 系的操作系统，如 Ubuntu
sudo apt-get install pv

# RedHat系的则这样：
yum install pv
```

### 语法  

```shell
pv(选项)(参数)
pv [OPTION] [FILE]...
```

### 选项  

```shell
-p, --progress           show progress bar
-t, --timer              show elapsed time
-e, --eta                show estimated time of arrival (completion)
-I, --fineta             show absolute estimated time of arrival
                         (completion)
-r, --rate               show data transfer rate counter
-a, --average-rate       show data transfer average rate counter
-b, --bytes              show number of bytes transferred
-T, --buffer-percent     show percentage of transfer buffer in use
-A, --last-written NUM   show NUM bytes last written
-F, --format FORMAT      set output format to FORMAT
-n, --numeric            输出百分比
-q, --quiet              do not output any transfer information at all

-W, --wait               display nothing until first byte transferred
-D, --delay-start SEC    display nothing until SEC seconds have passed
-s, --size SIZE          set estimated data size to SIZE bytes
-l, --line-mode          count lines instead of bytes
-0, --null               lines are null-terminated
-i, --interval SEC       update every SEC seconds
-w, --width WIDTH        assume terminal is WIDTH characters wide
-H, --height HEIGHT      assume terminal is HEIGHT rows high
-N, --name NAME          prefix visual information with NAME
-f, --force              output even if standard error is not a terminal
-c, --cursor             use cursor positioning escape sequences

-L, --rate-limit RATE    limit transfer to RATE bytes per second
-B, --buffer-size BYTES  use a buffer size of BYTES
-C, --no-splice          never use splice(), always use read/write
-E, --skip-errors        skip read errors in input
-S, --stop-at-size       stop after --size bytes have been transferred
-R, --remote PID         update settings of process PID

-P, --pidfile FILE       save process ID in FILE

-d, --watchfd PID[:FD]   watch file FD opened by process PID

-h, --help               显示帮助
-V, --version            显示版本信息
```


### 实例  

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


```shell
# 字符一个个匀速在命令行中显示出来
echo "Tecmint[dot]com is a community of Linux Nerds and Geeks" | pv -qL 10

# 压缩文件展示进度信息
pv /media/himanshu/1AC2-A8E3/fnf.mkv | gzip > ./Desktop/fnf.log.gz 


# 用 dd 命令将 iso 写入磁盘，pv来实现进度条的显示
sudo pv -cN source < /Users/kacperwang/Downloads/CentOS-7-x86_64-Everything-1511.iso | sudo dd of=/dev/disk2 bs=4m
## 显示下面进度
source:  5.2GiB 5:11:41 [ 503KiB/s] [=====================>       ] 71% ETA 2:01:56
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->