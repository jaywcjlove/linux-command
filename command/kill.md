kill
===

发送信号到进程。

## 目录

- [bash内建命令](#内建命令)
- [GNU coreutils中的命令](#外部命令)

## 内建命令

### 概要

```shell
kill [-s sigspec | -n signum | -sigspec] pid | jobspec ...
kill -l [sigspec]
```

### 主要用途

- 发送信号到作业或进程（可以为多个）。
- 列出信号。

### 选项

```shell
-s sig    信号名称。
-n sig    信号名称对应的数字。
-l        列出信号名称。如果在该选项后提供了数字那么假设它是信号名称对应的数字。
-L        等价于-l选项。
```

### 参数

pid：进程ID

jobspec：作业标识符

### 返回值

返回状态为成功除非给出了非法选项、执行出现错误。

### 例子

```shell
[user2@pc] kill -l 9
KILL

# 列出所有信号名称：
[user2@pc] kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL
 5) SIGTRAP      6) SIGABRT      7) SIGBUS       8) SIGFPE
 9) SIGKILL     10) SIGUSR1     11) SIGSEGV     12) SIGUSR2
13) SIGPIPE     14) SIGALRM     15) SIGTERM     16) SIGSTKFLT
17) SIGCHLD     18) SIGCONT     19) SIGSTOP     20) SIGTSTP
21) SIGTTIN     22) SIGTTOU     23) SIGURG      24) SIGXCPU
25) SIGXFSZ     26) SIGVTALRM   27) SIGPROF     28) SIGWINCH
29) SIGIO       30) SIGPWR      31) SIGSYS      34) SIGRTMIN
35) SIGRTMIN+1  36) SIGRTMIN+2  37) SIGRTMIN+3  38) SIGRTMIN+4
39) SIGRTMIN+5  40) SIGRTMIN+6  41) SIGRTMIN+7  42) SIGRTMIN+8
43) SIGRTMIN+9  44) SIGRTMIN+10 45) SIGRTMIN+11 46) SIGRTMIN+12
47) SIGRTMIN+13 48) SIGRTMIN+14 49) SIGRTMIN+15 50) SIGRTMAX-14
51) SIGRTMAX-13 52) SIGRTMAX-12 53) SIGRTMAX-11 54) SIGRTMAX-10
55) SIGRTMAX-9  56) SIGRTMAX-8  57) SIGRTMAX-7  58) SIGRTMAX-6
59) SIGRTMAX-5  60) SIGRTMAX-4  61) SIGRTMAX-3  62) SIGRTMAX-2
63) SIGRTMAX-1  64) SIGRTMAX

# 下面是常用的信号。
# 只有第9种信号(SIGKILL)才可以无条件终止进程，其他信号进程都有权利忽略。

HUP     1    终端挂断
INT     2    中断（同 Ctrl + C）
QUIT    3    退出（同 Ctrl + \）
KILL    9    强制终止
TERM   15    终止
CONT   18    继续（与STOP相反，fg/bg命令）
STOP   19    暂停（同 Ctrl + Z）
```

```shell
# 以下发送KILL信号的形式等价。当然还有更多的等价形式，在此不一一列举了。
[user2@pc] kill -s SIGKILL PID
[user2@pc] kill -s KILL PID
[user2@pc] kill -n 9 PID
[user2@pc] kill -9 PID

[user2@pc] sleep 90 &
[1] 178420

# 终止作业标识符为1的作业。
[user2@pc] kill -9 %1

[user2@pc] jobs -l
[1]+ 178420 KILLED                  ssh 192.168.1.4

[user2@pc] sleep 90 &
[1] 181357

# 发送停止信号。
[user2@pc] kill -s STOP 181357

[user2@pc] jobs -l
[1]+ 181537 Stopped (signal)        sleep 90

# 发送继续信号。
[user2@pc] kill -s CONT 181357

[user2@pc] jobs -l
[1]+ 181537 Running                 sleep 90 &
```

### 注意

1. `bash`的作业控制命令包括`bg fg kill wait disown suspend`。
2. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。


## 外部命令

### 概要

```shell
kill [-signal|-s signal|-p] [-q value] [-a] [--] pid|name...
kill -l [number] | -L
```

### 主要用途

- 发送信号到进程（可以为多个）。

- 列出信号。

### 选项

```shell
-s, --signal signal    要发送的信号，可能是信号名称或信号对应的数字。
-l, --list [number]    打印信号名称或转换给定数字到信号名称。信号名称可参考文件（/usr/include/linux/signal.h）。
-L, --table            和'-l'选项类似，但是输出信号名称以及信号对应的数字。
-a, --all              不要限制“命令名到pid”的转换为具有与当前进程相同的UID的进程。
-p, --pid              打印目标进程的PID而不发送信号。
--verbose              打印信号以及接收信号的PID。
-q, --queue value      使用sigqueue(3)而不是kill(2)。参数value是信号对应的数字。
                           如果接收进程已为此信号安装了处理程序将SA_SIGINFO标记为sigaction(2)，则可以获取
                           该数据通过siginfo_t结构的si_sigval字段。
--help                 显示帮助信息并退出。
--version              显示版本信息并退出。
```

### 参数

接收信号的进程列表可以是PID以及name的混合组成。

PID：每一个PID可以是以下四种情况之一：

状态|说明
:--:|:--:
n | 当n大于0时，PID为n的进程接收信号。
0 | 当前进程组中的所有进程均接收信号。
-1 | PID大于1的所有进程均接收信号。
-n | 当n大于1时，进程组n中的所有进程接收信号。当给出了一个参数的形式为“-n”，想要让它表示一个进程组，那么必须首先指定一个信号，或参数前必须有一个“--”选项，否则它将被视为发送的信号。

name：使用此名称调用的所有进程将接收信号。

### 例子

```shell
> sleep 20 &

# 列出对应的PID。
> kill -p sleep
23021
```

### 返回值

- 0 成功。
- 1 失败。
- 64 部分成功（当指定了多个进程时）。

### 注意

1. 该命令是`GNU coreutils`包中的命令，相关的帮助信息请查看`man -s 1 kill`或`info coreutils 'kill invocation'`。
2. 启动或关闭内建命令请查看`enable`命令，关于同名优先级的问题请查看`builtin`命令的例子部分的相关讨论。
3. 与`kill`命令类似的有`xkill`，`pkill`,`killall`等，用于不同的目的和场景。

## 参考链接

[发送信号到进程](https://bash.cyberciti.biz/guide/Sending_signal_to_Processes)


