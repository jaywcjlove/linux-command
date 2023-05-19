scriptreplay
===

重新播放终端会话的所有操作

## 补充说明

**scriptreplay** 用于在终端中，根据 `script` 命令记录的终端数据文件和时间日志文件，重现当时用户的所有操作和命令的输出信息。简而言之，重现播放当时终端会话发生的一切信息，而不是重新运行一遍命令。例如，用户当时在输入某条命令时，字符的键入和删除也都会被重现。非常适合用于教程演示场合。而且，在机器 A 上面使用 `script` 命令记录终端操作，可以在机器 B 上面使用 `scriptreplay` 命令重新播放。


###  语法

```shell
scriptreplay [options] [-t] timingfile [typescript [divisor]]
```

###  选项

```shell
-t, --timing file         # 记录时间日志的文件名称
-s, --typescript file     # 记录终端数据信息的日志文件名称
-d, --divisor number      # 表示倍速播放，把时间日志文件记录的时间间隔都除以 number
                          # -d 2 表示播放速度是原始输入单条命令的速度的两倍，-d 0.1 表示播放单条命令的速度减慢 10 倍
-m, --maxdelay number     # 表示命令之间的最大延迟时间（单位是秒）
                          # -m 2 表示 command.log 中存放的两条命令之间的间隔时间如果大于两秒，则按两秒执行播放
-V, --version             # 显示版本信息并退出
-h, --help                # 显示帮助文本并退出
```

###  参数

* 时间日志文件：存储时间日志信息的文件名称
* 终端数据文件：存储终端数据信息的文件名称

###  实例

```shell
# 重新播放终端内容，默认第一个参数是时间日志，第二个参数是终端数据文件
scriptreplay time.file command.log
# 重新播放终端内容，播放快进速度为 1 ，命令之间最大延时为 2 秒
scriptreplay -d 1 -m 2 -t time.file -s command.log
```

 **记录终端内容到文件** 

```shell
zfb@localhost:~$ script -t 2>time.file -a -f command.log
Script started, file is command.log
zfb@localhost:~$ echo "hello, world"
hello, world
zfb@localhost:~$ echo $(date "+%Y-%m-%d %H:%M:%S")
2020-12-23 20:48:46
zfb@localhost:~$ echo "Bye"
Bye
zfb@localhost:~$ ls -al
total 20
drwxr-xr-x  2 zfb zfb 4096 Dec 23 20:48 .
drwxr-xr-x 37 zfb zfb 4096 Dec 23 20:49 ..
-rw-r--r--  1 zfb zfb    0 Dec 23 19:03 a.txt
-rw-r--r--  1 zfb zfb   12 Dec 23 19:04 b.txt
-rw-r--r--  1 zfb zfb 2744 Dec 23 20:49 command.log
-rw-r--r--  1 zfb zfb  790 Dec 23 20:49 time.file
zfb@localhost:~$ exit
Script done, file is command.log
zfb@localhost:~$
```

 **重新播放终端内容** 

```shell
zfb@localhost:~$ scriptreplay -d 1 -m 2 -t time.file -s command.log
zfb@localhost:~$ echo "hello, world"
hello, world
zfb@localhost:~$ echo $(date "+%Y-%m-%d %H:%M:%S")
2020-12-23 20:48:46
zfb@localhost:~$ echo "Bye"
Bye
zfb@localhost:~$ ls -al
total 20
drwxr-xr-x  2 zfb zfb 4096 Dec 23 20:48 .
drwxr-xr-x 37 zfb zfb 4096 Dec 23 20:49 ..
-rw-r--r--  1 zfb zfb    0 Dec 23 19:03 a.txt
-rw-r--r--  1 zfb zfb   12 Dec 23 19:04 b.txt
-rw-r--r--  1 zfb zfb 2744 Dec 23 20:49 command.log
-rw-r--r--  1 zfb zfb  790 Dec 23 20:49 time.file
zfb@localhost:~$ exit

zfb@localhost:~$
```

其中，只有命令`scriptreplay -d 1 -m 2 -t time.file -s command.log`是用户输入，其他均为自动呈现（且视觉效果与真实用户的操作一致）。通过查看上面输出的时间`2020-12-23 20:48:46`，可以证明，这是重新播放当时的记录，而非重新执行一遍命令。也就是说，可以把`time.file`和`command.log`文件移动到任意一台支持`scriptreplay`命令的机器上，都可以动态重现命令输入与终端回显。


