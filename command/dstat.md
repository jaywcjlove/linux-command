dstat
===

通用的系统资源统计工具

## 补充说明

**dstat命令** 是一个用来替换vmstat、iostat、netstat、nfsstat和ifstat这些命令的工具，是一个全能系统信息统计工具。与sysstat相比，dstat拥有一个彩色的界面，在手动观察性能状况时，数据比较显眼容易观察；而且dstat支持即时刷新，譬如输入`dstat 3`即每三秒收集一次，但最新的数据都会每秒刷新显示。和sysstat相同的是，dstat也可以收集指定的性能资源，譬如`dstat -c`即显示CPU的使用情况。

### 下载安装  

 **方法一** 

```shell
yum install -y dstat
```

 **方法二** 

官网下载地址：http://dag.wieers.com/rpm/packages/dstat

```shell
wget http://dag.wieers.com/rpm/packages/dstat/dstat-0.6.7-1.rh7.rf.noarch.rpm
rpm -ivh dstat-0.6.7-1.rh7.rf.noarch.rpm
```

### 使用说明  

安装完后就可以使用了，dstat非常强大，可以实时的监控cpu、磁盘、网络、IO、内存等使用情况。

直接使用dstat，默认使用的是`-cdngy`参数，分别显示cpu、disk、net、page、system信息，默认是1s显示一条信息。可以在最后指定显示一条信息的时间间隔，如`dstat 5`是没5s显示一条，`dstat 5 10`表示没5s显示一条，一共显示10条。

```shell
[root@iZ23uulau1tZ ~]# dstat
----total-cpu-usage---- -dsk/total- -net/total- ---paging-- ---system--
usr sys idl wai hiq siq| read  writ| recv  send|  in   out | int   csw
  0   0  99   0   0   0|7706B  164k|   0     0 |   0     0 | 189   225
  0   0 100   0   0   0|   0     0 |4436B  826B|   0     0 | 195   248
  1   0  99   0   0   0|   0     0 |4744B  346B|   0     0 | 203   242
  0   0 100   0   0   0|   0     0 |5080B  346B|   0     0 | 206   242
  0   1  99   0   0   0|   0     0 |5458B  444B|   0     0 | 214   244
  1   0  99   0   0   0|   0     0 |5080B  346B|   0     0 | 208   242
```

下面对显示出来的部分信息作一些说明：

1.  cpu：hiq、siq分别为硬中断和软中断次数。
2.  system：int、csw分别为系统的中断次数（interrupt）和上下文切换（context switch）。

其他的都很好理解。

### 语法  

```shell
dstat [-afv] [options..] [delay [count]]
```

### 常用选项  

```shell
-c：显示CPU系统占用，用户占用，空闲，等待，中断，软件中断等信息。
-C：当有多个CPU时候，此参数可按需分别显示cpu状态，例：-C 0,1 是显示cpu0和cpu1的信息。
-d：显示磁盘读写数据大小。
-D hda,total：include hda and total。
-n：显示网络状态。
-N eth1,total：有多块网卡时，指定要显示的网卡。
-l：显示系统负载情况。
-m：显示内存使用情况。
-g：显示页面使用情况。
-p：显示进程状态。
-s：显示交换分区使用情况。
-S：类似D/N。
-r：I/O请求情况。
-y：系统状态。
--ipc：显示ipc消息队列，信号等信息。
--socket：用来显示tcp udp端口状态。
-a：此为默认选项，等同于-cdngy。
-v：等同于 -pmgdsc -D total。
--output 文件：此选项也比较有用，可以把状态信息以csv的格式重定向到指定的文件中，以便日后查看。例：dstat --output /root/dstat.csv & 此时让程序默默的在后台运行并把结果输出到/root/dstat.csv文件中。
```

当然dstat还有很多更高级的用法，常用的基本这些选项，更高级的用法可以结合man文档。

### 实例  

如想监控swap，process，sockets，filesystem并显示监控的时间：

```shell
[root@iZ23uulau1tZ ~]# dstat -tsp --socket --fs
----system---- ----swap--- ---procs--- ------sockets------ --filesystem-
  date/time   | used  free|run blk new|tot tcp udp raw frg|files  inodes
26-07 09:23:48|   0     0 |  0   0 0.0|104   8   5   0   0|  704   6488
26-07 09:23:49|   0     0 |  0   0   0|104   8   5   0   0|  704   6488
26-07 09:23:50|   0     0 |  0   0   0|104   8   5   0   0|  704   6489
26-07 09:23:51|   0     0 |  0   0   0|104   8   5   0   0|  704   6489
26-07 09:23:52|   0     0 |  0   0   0|104   8   5   0   0|  704   6489
26-07 09:23:53|   0     0 |  0   0   0|104   8   5   0   0|  704   6489
```

若要将结果输出到文件可以加`--output filename`：

```shell
[root@iZ23uulau1tZ ~]# dstat -tsp --socket --fs --output /tmp/ds.csv
----system---- ----swap--- ---procs--- ------sockets------ --filesystem-
  date/time   | used  free|run blk new|tot tcp udp raw frg|files  inodes
26-07 09:25:31|   0     0 |  0   0 0.0|104   8   5   0   0|  736   6493
26-07 09:25:32|   0     0 |  0   0   0|104   8   5   0   0|  736   6493
26-07 09:25:33|   0     0 |  0   0   0|104   8   5   0   0|  736   6493
26-07 09:25:34|   0     0 |  0   0   0|104   8   5   0   0|  736   6493
26-07 09:25:35|   0     0 |  0   0   0|104   8   5   0   0|  736   6494
26-07 09:25:36|   0     0 |  0   0   0|104   8   5   0   0|  736   6494
```

这样生成的csv文件可以用excel打开，然后生成图表。

通过`dstat --list`可以查看dstat能使用的所有参数，其中上面internal是dstat本身自带的一些监控参数，下面`/usr/share/dstat`中是dstat的插件，这些插件可以扩展dstat的功能，如可以监控电源（battery）、mysql等。

下面这些插件并不是都可以直接使用的，有的还依赖其他包，如想监控mysql，必须要装python连接mysql的一些包。

```shell
[root@iZ23uulau1tZ ~]# dstat --list
internal:
        aio, cpu, cpu24, disk, disk24, disk24old, epoch, fs, int, int24, io, ipc, load, lock, mem, net, page, page24, proc, raw, socket, swap, swapold, sys, tcp, time, udp, unix, vm
/usr/share/dstat:
        battery, battery-remain, cpufreq, dbus, disk-util, fan, freespace, gpfs, gpfs-ops, helloworld, innodb-buffer, innodb-io, innodb-ops, lustre, memcache-hits, mysql-io, mysql-keys, mysql5-cmds, mysql5-conn, mysql5-io, mysql5-keys,
        net-packets, nfs3, nfs3-ops, nfsd3, nfsd3-ops, ntp, postfix, power, proc-count, rpc, rpcd, sendmail, snooze, thermal, top-bio, top-cpu, top-cputime, top-cputime-avg, top-io, top-latency, top-latency-avg, top-mem, top-oom, utmp,
        vm-memctl, vmk-hba, vmk-int, vmk-nic, vz-cpu, vz-io, vz-ubc, wifi
```

dstat命令的基本用法就说到这里，更多用法有待摸索，如果您需要补充内容请给我们发邮件，谢谢！


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->