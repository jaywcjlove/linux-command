prtstat
===

显示进程信息

## 补充说明

**prtstat命令**打印指定进程的统计信息。这个信息来自/proc/PID/stat文件。

## 语法

```shell
prtstat [-r|--raw] pid
prtstat -V|--version
```

## 参数

```shell
-t：显示系统总体状态
-p pid：显示指定进程的状态
-d：显示磁盘 I/O 统计信息
-n：显示网络 I/O 统计信息
-s：显示系统调用统计信息
-u：显示用户 CPU 使用率统计信息
-w：显示等待事件统计信息
-x：显示进程间通信统计信息
-h：显示帮助信息
-i interval：设置输出间隔时间
-c count：设置输出次数
-l：使用长格式输出
-v：显示版本信息
```

## 例子

```shell
[root@localhost command]# ps -ef|grep nginx 
root       4022 250867  0 16:39 pts/1    00:00:00 grep --color=auto nginx
root     224312      1  0 4月26 ?       00:00:00 nginx: master process /var/openresty/nginx/sbin/nginx
nobody   224313 224312  0 4月26 ?       00:00:00 nginx: worker process
[root@localhost command]# prtstat -r 224312
         pid: 224312                              comm: nginx
       state: S                                   ppid: 1
        pgrp: 224312                           session: 224312
      tty_nr: 0                                  tpgid: -1
       flags: 402040                            minflt: 110
     cminflt: 0                                 majflt: 0
     cmajflt: 0                                  utime: 0
       stime: 0                                 cutime: 0
      cstime: 0                               priority: 20
        nice: 0                            num_threads: 1
 itrealvalue: 0                              starttime: 6271470
       vsize: 56369152                             rss: 413
      rsslim: 18446744073709551615                   startcode: 4194304
     endcode: 5772276                       startstack: 140722783765648
     kstkesp: 7FFC9389BFB8                     kstkeip: 7F25CD42F6C6
       wchan: 18446744071885754297                       nswap: 0
      cnswap: 18446744071885754297                 exit_signal: 17
   processor: 2                            rt_priority: 0
      policy: 0                  delayaccr_blkio_ticks: 0
  guest_time: 0                            cguest_time: 0
```

显示当前系统的总体状态，包括 CPU 使用率、内存使用率、磁盘 I/O 等信息。

```shell
prtstat -t
```

显示指定进程的 CPU 使用率、内存使用率、线程数等信息。

```shell
prtstat -p pid
```

显示磁盘 I/O 统计信息，包括每个磁盘的读写速度、IOPS 等。

```shell
prtstat -d
```

显示网络 I/O 统计信息，包括每个网络接口的传输速度、数据包数等。

```shell
prtstat -n
```

显示系统调用统计信息，包括每个系统调用的调用次数、平均耗时等。

```shell
prtstat -s
```

显示用户 CPU 使用率统计信息，包括每个用户的 CPU 使用率、进程数等。

```shell
prtstat -u
```

显示等待事件统计信息，包括每个等待事件的等待次数、平均等待时间等。

```shell
prtstat -w
```

显示进程间通信统计信息，包括每个进程间通信方式的调用次数、平均耗时等。

```shell
prtstat -x
```

### 注意

1. `prtstat`命令来自于psmisc包。此包来自于base源仓库。
2. psmisc.x86_64 : 用于管理系统上进程的实用程序

