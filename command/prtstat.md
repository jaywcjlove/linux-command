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

### 注意

1. `prtstat`命令来自于psmisc包。此包来自于base源仓库。
2. psmisc.x86_64 : 用于管理系统上进程的实用程序

