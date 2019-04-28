skill
===

向选定的进程发送信号冻结进程

## 补充说明

**skill命令** 用于向选定的进程发送信号，冻结进程。这个命令初学者并不常用，深入之后牵涉到系统服务优化之后可能会用到。

### 语法  

```shell
skill(选项)
```

### 选项  

```shell
-f：快速模式；
-i：交互模式，每一步操作都需要确认；
-v：冗余模式；
-w：激活模式；
-V：显示版本号；
-t：指定开启进程的终端号；
-u：指定开启进程的用户；
-p：指定进程的id号；
-c：指定开启进程的指令名称。
```

### 实例  

如果您发现了一个占用大量CPU和内存的进程，但又不想停止它，该怎么办？考虑下面的top命令输出：

```shell
top -c -p 16514
23:00:44  up 12 days,  2:04,  4 users,  load average: 0.47, 0.35, 0.31
1 processes: 1 sleeping, 0 running, 0 zombie, 0 stopped
CPU states:  cpu    user    nice  system    irq  softirq  iowait    idle
           total    0.0%    0.6%    8.7%   2.2%     0.0%   88.3%    0.0%
Mem:  1026912k av, 1010476k used,   16436k free,       0k shrd,   52128k buff
                    766724k actv,  143128k in_d,   14264k in_c
Swap: 2041192k av,   83160k used, 1958032k free                  799432k cached

  PID USER     PRI  NI  SIZE  RSS SHARE stat %CPU %MEM   time CPU command
16514 oracle    19   4 28796  26M 20252 D N   7.0  2.5   0:03   0 oraclePRODB2...
```

既然您确认进程16514占用了大量内存，您就可以使用skill命令“冻结”它，而不是停止它。

```shell
skill -STOP 1
```

之后，检查top输出：

```shell
23:01:11  up 12 days,  2:05,  4 users,  load average: 1.20, 0.54, 0.38
1 processes: 0 sleeping, 0 running, 0 zombie, 1 stopped
CPU states:  cpu    user    nice  system    irq  softirq  iowait    idle
           total    2.3%    0.0%    0.3%   0.0%     0.0%    2.3%   94.8%
Mem:  1026912k av, 1008756k used,   18156k free,       0k shrd,    3976k buff
                    770024k actv,  143496k in_d,   12876k in_c
Swap: 2041192k av,   83152k used, 1958040k free                  851200k cached

  PID USER     PRI  NI  SIZE  RSS SHARE STAT %CPU %MEM   TIME CPU COMMAND
16514 oracle    19   4 28796  26M 20252 T N   0.0  2.5   0:04   0 oraclePRODB2...
```

现在，CPU 从 0% 空闲变为 94% 空闲。该进程被有效冻结。过一段时间之后，您可能希望唤醒该进程：

```shell
skill -CONT 16514
```

如果希望暂时冻结进程以便为完成更重要的进程腾出空间，该方法非常有用。

此命令用途很广。如果您要停止 "oracle" 用户的所有进程，只需要一个命令即可实现：

```shell
skill -STOP oracle
```

可以使用用户、PID、命令或终端 id 作为参数。以下命令可停止所有 rman 命令。

```shell
skill -STOP rman
```

如您所见，skill 决定您输入的参数（进程 ID、用户 ID 或命令）并进行相应操作。这可能会导致在某些情况下出现这样的问题：您可能具有同名的用户和命令。最好的示例是 "oracle" 进程，通常由用户 "oracle" 运行。因此，当您希望停止名为 "oracle" 的进程时，可执行以下命令：

```shell
skill -STOP oracle
```

用户 "oracle" 的所有进程都停止，包括您可能要使用的会话。要非常明确地执行命令，您可以选择使用一个新参数指定参数的类型。要停止一个名为 oracle 的命令，可执行以下命令：

```shell
skill -STOP -c oracle
```

snice命令的功能与skill类似。但它用于降低进程的优先级，而不是停止进程。首先，检查 top 输出：

```shell
  PID USER     PRI  NI  SIZE  RSS SHARE STAT %CPU %MEM   TIME CPU COMMAND
    3 root      15   0     0    0     0 RW    0.0  0.0   0:00   0 kapmd
13680 oracle    15   0 11336  10M  8820 T     0.0  1.0   0:00   0 oracle
13683 oracle    15   0  9972 9608  7788 T     0.0  0.9   0:00   0 oracle
13686 oracle    15   0  9860 9496  7676 T     0.0  0.9   0:00   0 oracle
13689 oracle    15   0 10004 9640  7820 T     0.0  0.9   0:00   0 oracle
13695 oracle    15   0  9984 9620  7800 T     0.0  0.9   0:00   0 oracle
13698 oracle    15   0 10064 9700  7884 T     0.0  0.9   0:00   0 oracle
13701 oracle    15   0 22204  21M 16940 T     0.0  2.1   0:00   0 oracle
```

现在，将 "oracle" 进程的优先级降低四个点。注意，该值越高，优先级越低。

```shell
snice +4 -u oracle
  PID USER     PRI  NI  SIZE  RSS SHARE STAT %CPU %MEM   TIME CPU COMMAND
16894 oracle    20   4 38904  32M 26248 D N   5.5  3.2   0:01   0 oracle
```

注意，NI 列（nice 值）现在是 4，优先级现在设置为 20，而不是 15。这对于降低优先级非常有帮助。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->