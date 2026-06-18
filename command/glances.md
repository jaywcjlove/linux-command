glances
===

Glances 是一个用于监控系统的跨平台、基于文本模式的命令行工具

> 注意：该命令有区别于`glance`

## 补充说明
该工具用 Python 编写的，使用 psutil 库从系统获取信息。可以用它来监控 **CPU**、**平均负载**、**内存**、**网络接口**、**磁盘 I/O**，文件系统空间利用率、挂载的设备、所有活动进程以及消耗资源最多的进程。
Glances 有很多有趣的选项。它的主要特性之一是可以在配置文件中设置阀值（`careful`小心、`warning`警告、`critical`致命），然后它会用不同颜色显示信息以表明系统的瓶颈

## 安装

Ubuntu
```
apt-get install glances
```

## 语法
直接运行，可能需要使用到sudo获取权限
```
glances
```


## 实例

```

oem-Server (Ubuntu 22.04 64bit / Linux 5.15.0-53-generic)                                                                                                       Uptime: 73 days, 3:10:59

Intel(R) Xeon(R) CPU E5-2678 v3 @ 2.50GHz - 0.00/3.30GHz              CPU -     1.6%  idle:    98.5%  ctx_sw     7K   MEM -   16.3%  active     3.81G   SWAP -    0.0%   LOAD   48-core
CPU  [|                                                       1.4%]   user      1.1%  irq       0.0%  inter      4K   total   31.2G  inactive   23.6G   total        0   1 min:    1.06
MEM  [|||||||||                                              16.3%]   system    0.4%  nice      0.0%  sw_int     4K   used    5.08G  buffers    1.03G   used         0   5 min:    0.93
SWAP [                                                        0.0%]   iowait    0.0%  steal     0.0%                  free    26.1G  cached     25.1G   free         0   15 min:   0.80

NETWORK                  Rx/s   Tx/s   CONTAINERS 1 (served by Docker 20.10.12)
br-74b0af826199            0b     0b
eno1                    175Kb   63Kb    Name          Status  CPU%    MEM   /MAX  IOR/s  IOW/s   Rx/s   Tx/s Command 
lo                       52Kb   52Kb    **********   running  44.8  2.20G  31.2G     0B     0B     0b     0b /usr/sbin/sshd -D
veth6e888b7                0b     0b
                                       TASKS 947 (2674 thr), 1 run, 647 slp, 299 oth sorted automatically by CPU consumption
DefaultGateway                   3ms
                                       CPU%   MEM%  VIRT  RES       PID USER          TIME+ THR  NI S  R/s W/s  Command ('k' to kill)
DISK I/O                 R/s    W/s    >12.9  0.2   501M  63.9M 3267378 *****          0:03 2     0 R    0 0    python3 /usr/bin/glances
sda                         0      0    12.2  0.5   1021M 172M  3196191 root           2:18 12    0 S    ? ?    node /root/.vscode-server/bin/e2816fe719a4026ffa1ee0189dc89bdfdbafb164/o
sda1                        0      0    8.9   1.7   1.44G 541M  3196442 root           1:51 9     0 S    ? ?    node /root/.vscode-server/extensions/ms-python.vscode-pylance-2023.2.20/
sda2                        0      0    5.8   0.0   10.3M 6.41M    1365 avahi      29h39:30 1     0 S    ? ?    avahi-daemon: running [oem-Server.local]
sda5                        0      0    1.9   0.5   4.84G 150M   640306 root         1h0:48 57    0 S    ? ?    dockerd -H fd:// --containerd=/run/containerd/containerd.sock
sdb                        2K      0    1.7   0.1   3.96G 21.1M    1508 root         2h8:01 47    0 S    ? ?    containerd
sdb1                        0      0    1.2   0.0   695M  12.4M 1142692 root           2:16 13    0 S    ? ?    containerd-shim-runc-v2 -namespace moby -id a05a1569c4d8e77f09701e596dc2
sdb2                       2K      0    1.2   0.0   384M  9.80M    1768 oem           11:37 4     0 S    ? ?    gvfs-udisks2-volume-monitor
                                        1.0   0.0   384M  10.1M 3633375 *****          7:13 4     0 S    0 0    gvfs-udisks2-volume-monitor
FILE SYS                 Used  Total    0.7   0.4   172M  118M  3240368 glance         0:06 1     0 S    ? ?    *****
/ (sdb2)                 583G   916G    0.7   0.2   694M  59.9M 3210698 *****         0:04 12     0 S    0 0    node /home/*****/.vscode-server/bin/441438abd1ac652551dbe4d408dfcec8a49
/HDD_DATA (sda1)         241G   427G    0.5   0.8   350M  255M      712 root        3h23:11 1    -1 S    ? ?    systemd-journald
_/common/host-hunspell   583G   916G    0.5   0.4   961M  135M  2580428 root           9:26 11    0 S    ? ?    node /root/.vscode-server/bin/e2816fe719a4026ffa1ee0189dc89bdfdbafb164/o
                                        0.5   0.1   577M  47.1M 3194060 *****          0:03 7     0 S   2K 0    node /home/*****/.vscode-remote-containers/dist/vscode-remote-container
SENSORS                                 0.5   0.1   184M  31.4M 3196391 root           0:02 3     0 S    ? ?    python /root/.vscode-server/extensions/ms-python.isort-2022.8.0/bundled/
loc1                             38C    0.5   0.1   622M  22.3M    1757 oem            1:27 6    19 S    ? ?    tracker-miner-fs-3
Package id 0                     29C    0.5   0.1   475M  18.8M    1368 root         4h2:35 3     0 S    ? ?    NetworkManager --no-daemon
Core 8                           23C    0.5   0.0   165M  13.2M       1 root         2h2:52 1     0 S    ? ?    init splash
Core 9                           24C    0.5   0.0   18.8M 11.4M    1643 oem           15:45 1     0 S    ? ?    systemd --user
Core 10                          22C    0.5   0.0   17.6M 9.91M 3633215 master      2h37:11 1     0 S    0 982  systemd --user
Core 11                          25C    0.5   0.0   308M  7.70M    3295 oem            7:23 4     0 S    ? ?    gsd-housekeeping
Core 12                          26C
2023-02-13 16:02:41 CST          23C
```
