pidstat
===
监控进程的系统资源占用情况

## 说明
**pidstat**是sysstat工具的一个命令，用于监控全部或指定进程的cpu、内存、线程、设备IO等系统资源的占用情况。
pidstat首次运行时显示自系统启动开始的各项统计信息，之后运行pidstat将显示自上次运行该命令以后的统计信息。用户可以通过指定统计的次数和时间来获得所需的统计信息。

### 语法
```shell
pidstat [ 选项 ] [ <时间间隔> ] [ <次数> ]
```
#### 选项
- u：默认的参数，显示各个进程的cpu使用统计
- r：显示各个进程的内存使用统计
- d：显示各个进程的IO使用情况
- w：显示每个进程的上下文切换情况
- t：显示到线程的统计信息
- p：指定进程号
- T { TASK | CHILD | ALL }
 这个选项指定了pidstat监控的。TASK表示报告独立的task，CHILD关键字表示报告进程下所有线程统计信息。ALL表示报告独立的task和task下面的所有线程。
 注意：task和子线程的全局的统计信息和pidstat选项无关。这些统计信息不会对应到当前的统计间隔，这些统计信息只有在子线程kill或者完成的时候才会被收集。
- V：版本号
- h：在一行上显示了所有活动，这样其他程序可以容易解析。
- I：在SMP环境，表示任务的CPU使用率/内核数量
- l：显示命令名和所有参数

### 实例
#### 查看所有进程的CPU使用情况
```shell
# pidstat -u -p ALL
11:04:06 AM   UID       PID    %usr %system  %guest    %CPU   CPU  Command
11:04:06 AM     0         1    0.03    0.05    0.00    0.08    20  systemd
11:04:06 AM     0         2    0.00    0.00    0.00    0.00    28  kthreadd
11:04:06 AM     0         3    0.00    0.00    0.00    0.00     0  rcu_gp
11:04:06 AM     0         4    0.00    0.00    0.00    0.00     0  rcu_par_gp
11:04:06 AM     0         6    0.00    0.00    0.00    0.00     0  kworker/0:0H-kblockd
11:04:06 AM     0         9    0.00    0.00    0.00    0.00    38  mm_percpu_wq
11:04:06 AM     0        10    0.00    0.01    0.00    0.01     0  ksoftirqd/0
11:04:06 AM     0        11    0.00    0.23    0.00    0.23    15  rcu_sched
11:04:06 AM     0        12    0.00    0.00    0.00    0.00     0  migration/0
11:04:06 AM     0        14    0.00    0.00    0.00    0.00     0  cpuhp/0
11:04:06 AM     0        15    0.00    0.00    0.00    0.00     1  cpuhp/1
...
```
表头字段说明
- PID：进程ID
- %usr：进程在用户空间占用cpu的百分比
- %system：进程在内核空间占用cpu的百分比
- %guest：进程在虚拟机占用cpu的百分比
- %CPU：进程占用cpu的百分比
- CPU：处理进程的cpu编号
- Command：当前进程对应的命令

#### 查看所有进程的内存使用情况
```shell
# pidstat -r
11:10:35 AM   UID       PID  minflt/s  majflt/s     VSZ    RSS   %MEM  Command
11:10:35 AM     0         1      7.24      0.05  191312   4208   0.01  systemd
11:10:35 AM     0      1407      2.02      0.09   39316   9016   0.03  systemd-journal
11:10:35 AM     0      1442      0.03      0.00  190380   1080   0.00  lvmetad
11:10:35 AM     0      1457      0.46      0.00   46252   1560   0.00  systemd-udevd
11:10:35 AM     0      2429      0.11      0.00  163620   9472   0.03  sshd
11:10:35 AM   992      2446      0.02      0.00    8588    996   0.00  lsmd
11:10:35 AM     0      2447      0.05      0.00   90572   1468   0.00  rngd
11:10:35 AM     0      2448      0.15      0.02  451272   3520   0.01  udisksd
11:10:35 AM     0      2449      0.18      0.02  396488   1948   0.01  accounts-daemon
11:10:35 AM     0      2454      0.02      0.02  201336   1464   0.00  gssproxy
...
```
表头字段说明
- PID：进程标识符
- Minflt/s:任务每秒发生的次要错误，不需要从磁盘中加载内存页
- Majflt/s:任务每秒发生的主要错误，需要从磁盘中加载内存页
- VSZ：虚拟地址大小，虚拟内存的使用KB
- RSS：常驻集合大小，非交换区物理内存使用KB
- Command：task命令名

#### 查看所有进程的IO使用情况
```shell
# pidstat -d
11:12:30 AM   UID       PID   kB_rd/s   kB_wr/s kB_ccwr/s  Command
11:12:30 AM     0         1    250.05     11.57      2.13  systemd
11:12:30 AM     0       224      1.21      0.00      0.00  khugepaged
11:12:30 AM     0       290      0.03      0.00      0.00  kswapd0
11:12:30 AM     0       291      0.02      0.00      0.00  kswapd1
11:12:30 AM     0      1312      1.03      0.00      0.00  xfsaild/dm-0
11:12:30 AM     0      1407      1.31      0.00      0.00  systemd-journal
11:12:30 AM     0      1442      0.01      0.00      0.00  lvmetad
11:12:30 AM     0      1457      1.77      0.00      0.00  systemd-udevd
11:12:30 AM   992      2446      0.79      0.00      0.00  lsmd
11:12:30 AM     0      2447      0.07      0.00      0.00  rngd
11:12:30 AM     0      2448      0.46      0.00      0.00  udisksd
...
```
表头字段说明
- PID：进程id
- kB_rd/s：每秒从磁盘读取的KB
- kB_wr/s：每秒写入磁盘KB
- kB_ccwr/s：任务取消的写入磁盘的KB。当任务截断脏的pagecache的时候会发生。
- COMMAND:task的命令名

#### 查看进程的上下文切换情况
```shell
# pidstat -w
11:15:52 AM   UID       PID   cswch/s nvcswch/s  Command
11:15:52 AM     0         1      3.15      0.03  systemd
11:15:52 AM     0         2      0.13      0.00  kthreadd
11:15:52 AM     0         3      0.00      0.00  rcu_gp
11:15:52 AM     0         4      0.00      0.00  rcu_par_gp
11:15:52 AM     0         6      0.00      0.00  kworker/0:0H-kblockd
11:15:52 AM     0         9      0.00      0.00  mm_percpu_wq
11:15:52 AM     0        10      1.99      0.00  ksoftirqd/0
...
```
表头字段含义
- PID:进程id
- Cswch/s:每秒主动任务上下文切换数量
- Nvcswch/s:每秒被动任务上下文切换数量
- Command:命令名
