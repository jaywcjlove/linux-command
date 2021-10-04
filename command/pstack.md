pstack
===

显示每个进程的栈跟踪

## 补充说明

**pstack命令** 可显示每个进程的栈跟踪。<kbd>pstack</kbd> 命令必须由相应进程的属主或 <tt>root</tt> 运行。可以使用 <kbd>pstack</kbd> 来确定进程挂起的位置。此命令允许使用的唯一选项是要检查的进程的 <tt>PID</tt>。

命令软件包下载地址：https://packages.debian.org/sid/pstack

###  实例

pstree以树结构显示进程

```shell
pstree -p work | grep ad
sshd(22669)---bash(22670)---ad_preprocess(4551)-+-{ad_preprocess}(4552)
                                                |-{ad_preprocess}(4553)
                                                |-{ad_preprocess}(4554)
                                                |-{ad_preprocess}(4555)
                                                |-{ad_preprocess}(4556)
                                                `-{ad_preprocess}(4557)
```

work为工作用户，-p为显示进程识别码，ad_preprocess共启动了6个子线程，加上主线程共7个线程。

```shell
ps -Lf 4551
UID        PID  PPID   LWP  C NLWP STIME TTY      stat   time CMD
work      4551 22670  4551  2    7 16:30 pts/2    Sl+    0:02 ./ad_preprocess
work      4551 22670  4552  0    7 16:30 pts/2    Sl+    0:00 ./ad_preprocess
work      4551 22670  4553  0    7 16:30 pts/2    Sl+    0:00 ./ad_preprocess
work      4551 22670  4554  0    7 16:30 pts/2    Sl+    0:00 ./ad_preprocess
work      4551 22670  4555  0    7 16:30 pts/2    Sl+    0:00 ./ad_preprocess
work      4551 22670  4556  0    7 16:30 pts/2    Sl+    0:00 ./ad_preprocess
work      4551 22670  4557  0    7 16:30 pts/2    Sl+    0:00 ./ad_preprocess
```

进程共启动了7个线程

pstack显示每个进程的栈跟踪：

```shell
pstack 4551
Thread 7 (Thread 1084229984 (LWP 4552)):
#0  0x000000302afc63dc in epoll_wait () from /lib64/tls/libc.so.6
#1  0x00000000006f0730 in ub::EPollEx::poll ()
#2  0x00000000006f172a in ub::NetReactor::callback ()
#3  0x00000000006fbbbb in ub::UBTask::CALLBACK ()
#4  0x000000302b80610a in start_thread () from /lib64/tls/libpthread.so.0
#5  0x000000302afc6003 in clone () from /lib64/tls/libc.so.6
#6  0x0000000000000000 in ?? ()
Thread 6 (Thread 1094719840 (LWP 4553)):
#0  0x000000302afc63dc in epoll_wait () from /lib64/tls/libc.so.6
#1  0x00000000006f0730 in ub::EPollEx::poll ()
#2  0x00000000006f172a in ub::NetReactor::callback ()
#3  0x00000000006fbbbb in ub::UBTask::CALLBACK ()
#4  0x000000302b80610a in start_thread () from /lib64/tls/libpthread.so.0
#5  0x000000302afc6003 in clone () from /lib64/tls/libc.so.6
#6  0x0000000000000000 in ?? ()
Thread 5 (Thread 1105209696 (LWP 4554)):
#0  0x000000302b80baa5 in __nanosleep_nocancel ()
#1  0x000000000079e758 in comcm::ms_sleep ()
#2  0x00000000006c8581 in ub::UbClientManager::healthyCheck ()
#3  0x00000000006c8471 in ub::UbClientManager::start_healthy_check ()
#4  0x000000302b80610a in start_thread () from /lib64/tls/libpthread.so.0
#5  0x000000302afc6003 in clone () from /lib64/tls/libc.so.6
#6  0x0000000000000000 in ?? ()
Thread 4 (Thread 1115699552 (LWP 4555)):
#0  0x000000302b80baa5 in __nanosleep_nocancel ()
#1  0x0000000000482b0e in armor::armor_check_thread ()
#2  0x000000302b80610a in start_thread () from /lib64/tls/libpthread.so.0
#3  0x000000302afc6003 in clone () from /lib64/tls/libc.so.6
#4  0x0000000000000000 in ?? ()
Thread 3 (Thread 1126189408 (LWP 4556)):
#0  0x000000302af8f1a5 in __nanosleep_nocancel () from /lib64/tls/libc.so.6
#1  0x000000302af8f010 in sleep () from /lib64/tls/libc.so.6
#2  0x000000000044c972 in Business_config_manager::run ()
#3  0x0000000000457b83 in Thread::run_thread ()
#4  0x000000302b80610a in start_thread () from /lib64/tls/libpthread.so.0
#5  0x000000302afc6003 in clone () from /lib64/tls/libc.so.6
#6  0x0000000000000000 in ?? ()
Thread 2 (Thread 1136679264 (LWP 4557)):
#0  0x000000302af8f1a5 in __nanosleep_nocancel () from /lib64/tls/libc.so.6
#1  0x000000302af8f010 in sleep () from /lib64/tls/libc.so.6
#2  0x00000000004524bb in Process_thread::sleep_period ()
#3  0x0000000000452641 in Process_thread::run ()
#4  0x0000000000457b83 in Thread::run_thread ()
#5  0x000000302b80610a in start_thread () from /lib64/tls/libpthread.so.0
#6  0x000000302afc6003 in clone () from /lib64/tls/libc.so.6
#7  0x0000000000000000 in ?? ()
Thread 1 (Thread 182894129792 (LWP 4551)):
#0  0x000000302af8f1a5 in __nanosleep_nocancel () from /lib64/tls/libc.so.6
#1  0x000000302af8f010 in sleep () from /lib64/tls/libc.so.6
#2  0x0000000000420d79 in Ad_preprocess::run ()
#3  0x0000000000450ad0 in main ()
```


