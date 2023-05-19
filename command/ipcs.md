ipcs
===

分析消息队列共享内存和信号量

## 补充说明

**ipcs命令** 用于报告Linux中进程间通信设施的状态，显示的信息包括消息列表、共享内存和信号量的信息。

###  语法

```shell
ipcs(选项)
```

###  选项

#### 资源选项

```shell
-a, --all         显示全部(默认值)
-q, --queues      消息队列
-m, --shmems      共享内存
-s, --semaphores  信号量
```

#### 输出选项

```shell
-t, --time        显示最后一次操作时间
-p, --pid         显示创建者和最后一次操作者的PID
-c, --creator     显示创建者和拥有者的 userid, groupid
-l, --limits      显示对资源的限制
-u, --summary     显示当前状态摘要
--human           以友好的方式显示大小(eg: 500K)
-b, --bytes       以字节为单位显示大小(仅影响`-l`选项)
```

#### 通用选项

```shell
-i, --id <id>   显示指定ID的资源
-h, --help      显示帮助文档并退出
-V, --version   显示版本信息并退出
```

###  实例

```shell
ipcs -a
------ Shared Memory Segments --------
key        shmid      owner      perms      bytes      nattch     status
0x7401833d 2654208    root      600        4          0
0x00000000 3145729    root      600        4194304    9          dest
0x7401833c 2621442    root      600        4          0
0xd201012b 3080195    root      600        1720       2
```

### 相关命令

* `ipcrm`: 删除 IPC 资源
* `ipcmk`: 创建 IPC 资源

