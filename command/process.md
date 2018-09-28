process
===

进程相关基础知识

## 进程相关基础概念

- 定义: 程序执行 -> 进程
- 衍生: fork 系统调用; COW(copy on write, 写时复制)等技术; 子进程可以通过 exec 系统调用把一个新的程序加载到自己的内存中
- 标识: PID PPID
- 空间: 物理内存 -> 虚拟内存(page 分页) -> 内核空间(可以操作硬件 **系统调用**) + 用户空间(用户进程)
- 进程的切换和调度: 并发(CPU与任务切换足够快, 宏观看**像一起执行**) vs 并行(需要多 cpu 支持)

## 进程的状态

- 可运行 TASK_RUNNING R
- 可中断的睡眠状态 TASK_INTERRUPTIBLE S
- 不可中断的睡眠状态 TASK_UNINTERRUPTIBLE D, 比如等待同步 IO 操作
- 暂停状态或跟踪状态 TASK_STOPPED TASK_TRACED T, 例如使用 GDB 调试设置断点
- 僵尸进程 TASK_DEAD-EXIT_ZOMBIE Z, 等待父进程回收
- 退出转态 TASK_DEAD-EXIT_DEAD X, 进程被分离或父进程忽略子进程的 SIGCHLD 信号, 会自动被操作系统回收

![linux进程状态转换](https://img-blog.csdn.net/20160827200931165?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

## 同步问题

多CPU/多进程/多线程之间只要存在数据共享, 就一定会牵扯出同步问题

- 竞态条件(race condition): 多个进程(线程)对同一个资源进行访问, 就可能互相干扰
- 原子操作(atomic operation): 执行过程中不能中断的操作
- 临界区(critical section): 只能被串行化访问或执行的某个资源或者某段代码
- 互斥(mutual exclusion): 保证只有一个进程/线程在临界区之内的做法的官方称谓

## 进程间通信 IPC

- 管道(pipe): 半双工, 单向, 父进程 -> 子进程; 传送字节流; 匿名管道 vs 命名管道(named pipe)
- 命名管道: 默认是阻塞式的, 可以多路复用, 支持并发
- 消息队列(MQ, message queue): 传送格式化消息对象
- 共享内存(shared memory)
- 信号(signal)进制: 异步IPC
- 信号量(semaphore): 同步IPC, PV操作
- socket通信

## 操作系统信号机制

## 相关 linux 命令

- mkfifo: 命名管道
- ipcs: 消息队列
- kill -l: 查看操作系统支持的信号