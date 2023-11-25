lscpu
===

显示有关CPU架构的信息

## 补充说明

**lscpu命令** 是显示有关CPU架构的信息。

###  语法

```shell
lscpu [选项]
```

###  选项

```shell
 -a, --all               # 打印在线和离线CPU（默认为-e）
 -b, --online            # 仅打印在线CPU（-p的默认值）
 -c, --offline           # 打印离线CPU
 -e, --extended[=<list>] # 打印出一个扩展的可读格式
 -p, --parse[=<list>]    # 打印出可解析的格式
 -s, --sysroot <dir>     # 将指定的目录用作系统根目录
 -x, --hex               # 打印十六进制掩码，而不是CPU列表

 -h, --help     # 显示此帮助并退出
 -V, --version  # 输出版本信息并退出
```

###  参数

```shell
可用列：
           CPU  逻辑CPU编号
          CORE  逻辑核心号码
        SOCKET  逻辑套接字号
          NODE  逻辑NUMA节点号
          BOOK  逻辑书号
         CACHE  显示了如何在CPU之间共享高速缓存
  POLARIZATION  虚拟硬件上的CPU调度模式
       ADDRESS  CPU的物理地址
    CONFIGURED  显示管理程序是否分配了CPU
        ONLINE  显示Linux是否正在使用CPU
```

### 例子

```shell
[root@localhost ~]# lscpu
Architecture:          x86_64
CPU op-mode(s):        32-bit, 64-bit
Byte Order:            Little Endian
CPU(s):                4
On-line CPU(s) list:   0-3
Thread(s) per core:    1
Core(s) per socket:    4
Socket(s):             1
NUMA node(s):          1
Vendor ID:             GenuineIntel
CPU family:            6
Model:                 30
Model name:            Intel(R) Xeon(R) CPU           X3430  @ 2.40GHz
Stepping:              5
CPU MHz:               2394.055
BogoMIPS:              4788.11
Virtualization:        VT-x
L1d cache:             32K
L1i cache:             32K
L2 cache:              256K
L3 cache:              8192K
NUMA node0 CPU(s):     0-3
```
```shell
# 查看cpu编号对应的核心号码，区分是大核还是小核。
[root@localhost ~]# lscpu -e
CPU NODE SOCKET CORE L1d:L1i:L2:L3 ONLINE MAXMHZ    MINMHZ
0   0    0      0    0:0:0:0       是     3600.0000 800.0000
1   0    0      1    1:1:1:0       是     3600.0000 800.0000
2   0    0      2    2:2:2:0       是     3600.0000 800.0000
3   0    0      3    3:3:3:0       是     3600.0000 800.0000
4   0    0      0    0:0:0:0       是     3600.0000 800.0000
5   0    0      1    1:1:1:0       是     3600.0000 800.0000
6   0    0      2    2:2:2:0       是     3600.0000 800.0000
7   0    0      3    3:3:3:0       是     3600.0000 800.0000
```

