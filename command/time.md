time
===

统计给定命令所花费的总时间

## 补充说明

`time` 命令是用来确定一个给定的命令需要运行多长时间。它对于测试你的脚本和命令的性能很有用。

例如，如果你有两个不同的脚本在做同样的工作，你想知道哪一个表现得更好，你可以用 Linux 的时间命令来确定每个脚本的执行时间。

该指令是 shell 内指令，也是一个软件包，**对于软件包的说明在这篇文档靠下的部分**

## 语法

```shell
time <指令>
```

## 参数

指令：指定需要运行的额指令及其参数。

## 实例

当测试一个程序或比较不同算法时，执行时间是非常重要的，一个好的算法应该是用时最短的。所有类UNIX系统都包含time命令，使用这个命令可以统计时间消耗。例如：

```shell
$ time ls
anaconda-ks.cfg  install.log  install.log.syslog  satools  text

real    0m0.009s
user    0m0.002s
sys     0m0.007s
```

这里的输出会因为使用的发行版本不同而导致展示的结果不同，比如：

```shell
# Bash
real 0m33.961s
user 0m0.340s
sys 0m0.940s

# Zsh
0.34s user 0.94s system 4% cpu 33.961 total

# GNU time (sh)
0.34user 0.94system 0:33.96elapsed 4%CPU (0avgtext+0avgdata 6060maxresident)k
0inputs+201456outputs (0major+315minor)pagefaults 0swaps
```

`real` 或者 `total` 或者 `elapsed`（挂钟时间）是指从调用开始到结束的时间。它是指从你按下回车键的那一刻开始，到命令完成的那一刻为止的时间。
user - 在用户模式下花费的CPU时间。
system 或 sys - 在内核模式下花费的CPU时间。

## 软件包

接下来的部分是关于 `time` 软件包提供的 `/usr/bin/time` 二进制可执行程序，而不是 shell 内建的 time 命令。

### 软件包的语法

一些 shells（例如 `bash` ）有一个内置的 `time` 命令，提供类似的关于时间和可能的其他资源的使用信息。

要访问真正的命令，可能需要指定其路径名（类似于`/usr/bin/time`）。

```shell
time [options] command [arguments...]
```

### 软件包指令参数

-f format, --format=format
指定输出格式，可能覆盖环境变量TIME中指定的格式。
-p, --portability
    使用可移植的输出格式。
-o file, --output=file
    不将结果发送到stderr，而是覆盖指定的文件。
-a, --append
    (与-o一起使用。)不覆盖而是附加。
-v, --verbose
    对程序知道的所有信息进行非常详细的输出。
-q, --quiet
    不报告异常的程序终止（当命令被信号终止时）或非零退出状态。

### 软件包实例

使用`-o`选项将执行时间写入到文件中：

```shell
/usr/bin/time -o outfile.txt ls
```

使用`-a`选项追加信息：

```shell
/usr/bin/time -a -o outfile.txt ls
```

使用`-f`选项格式化时间输出：

```shell
/usr/bin/time -f "time: %U" ls
```

`-f`选项后的参数：

参数 | 描述
--- | ---
`%E` | real时间，显示格式为[小时:]分钟:秒
`%U` | user时间。
`%S` | sys时间。
`%C` | 进行计时的命令名称和命令行参数。
`%D` | 进程非共享数据区域，以KB为单位。
`%x` | 命令退出状态。
`%k` | 进程接收到的信号数量。
`%w` | 进程被交换出主存的次数。
`%Z` | 系统的页面大小，这是一个系统常量，不用系统中常量值也不同。
`%P` | 进程所获取的CPU时间百分百，这个值等于 `user+system` 时间除以总共的运行时间。
`%K` | 进程的平均总内存使用量（data+stack+text），单位是 `KB`。
`%w` | 进程主动进行上下文切换的次数，例如等待I/O操作完成。
`%c` | 进程被迫进行上下文切换的次数（由于时间片到期）。

## 参考资料

- Linux Time Command | Linuxize <https://linuxize.com/post/linux-time-command/>
- time(1) — Arch manual pages <https://man.archlinux.org/man/time.1>
- Time - ArchWiki <https://wiki.archlinux.org/title/time>
