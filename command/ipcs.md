ipcs
===

分析消息队列共享内存和信号量 

## 补充说明

**ipcs命令** 用于报告Linux中进程间通信设施的状态，显示的信息包括消息列表、共享内存和信号量的信息。

### 语法  

```shell
ipcs(选项)
```

### 选项  

```shell
-a：显示全部可显示的信息；
-q：显示活动的消息队列信息；
-m：显示活动的共享内存信息；
-s：显示活动的信号量信息。
```

### 实例  

```shell
ipcs -a
------ Shared Memory Segments --------
key        shmid      owner      perms      bytes      nattch     status      
0x7401833d 2654208    root      600        4          0                       
0x00000000 3145729    root      600        4194304    9          dest         
0x7401833c 2621442    root      600        4          0                       
0xd201012b 3080195    root      600        1720       2
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->