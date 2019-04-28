ipcrm
===

删除消息队列、信号集、或者共享内存标识

## 补充说明

**ipcrm命令** 用来删除一个或更多的消息队列、信号量集或者共享内存标识。

### 语法  

```shell
ipcrm [ -m SharedMemoryID ] [ -M SharedMemoryKey ] [ -q MessageID ] [ -Q MessageKey ] [ -s SemaphoreID ] [ -S SemaphoreKey ]
```

### 选项  

```shell
-m SharedMemory id 删除共享内存标识 SharedMemoryID。与 SharedMemoryID 有关联的共享内存段以及数据结构都会在最后一次拆离操作后删除。
-M SharedMemoryKey 删除用关键字 SharedMemoryKey 创建的共享内存标识。与其相关的共享内存段和数据结构段都将在最后一次拆离操作后删除。
-q MessageID 删除消息队列标识 MessageID 和与其相关的消息队列和数据结构。
-Q MessageKey 删除由关键字 MessageKey 创建的消息队列标识和与其相关的消息队列和数据结构。
-s SemaphoreID 删除信号量标识 SemaphoreID 和与其相关的信号量集及数据结构。
-S SemaphoreKey 删除由关键字 SemaphoreKey 创建的信号标识和与其相关的信号量集和数据结构。
```

msgctl、shmctl 和 semctl 子例程提供了删除操作的细节。标识和关键字可以用 ipcs 命令找到。

### 示例  

如果要删除和 SharedMemoryID 18602 相关的共享内存段，请输入：

```shell
ipcrm -m 18602
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->