ss
===

获取socket统计信息

## 补充说明

**ss命令** 用来显示处于活动状态的套接字信息。ss命令可以用来获取socket统计信息，它可以显示和netstat类似的内容。但ss的优势在于它能够显示更多更详细的有关TCP和连接状态的信息，而且比netstat更快速更高效。

当服务器的socket连接数量变得非常大时，无论是使用netstat命令还是直接`cat /proc/net/tcp`，执行速度都会很慢。可能你不会有切身的感受，但请相信我，当服务器维持的连接达到上万个的时候，使用netstat等于浪费 生命，而用ss才是节省时间。

天下武功唯快不破。ss快的秘诀在于，它利用到了TCP协议栈中tcp_diag。tcp_diag是一个用于分析统计的模块，可以获得Linux 内核中第一手的信息，这就确保了ss的快捷高效。当然，如果你的系统中没有tcp_diag，ss也可以正常运行，只是效率会变得稍慢。

### 语法  

```
ss(选项)
```

### 选项  

```
-h：显示帮助信息；
-V：显示指令版本信息；
-n：不解析服务名称，以数字方式显示；
-a：显示所有的套接字；
-l：显示处于监听状态的套接字；
-o：显示计时器信息；
-m：显示套接字的内存使用情况；
-p：显示使用套接字的进程信息；
-i：显示内部的TCP信息；
-4：只显示ipv4的套接字；
-6：只显示ipv6的套接字；
-t：只显示tcp套接字；
-u：只显示udp套接字；
-d：只显示DCCP套接字；
-w：仅显示RAW套接字；
-x：仅显示UNIX域套接字。
```

### 实例  

 **显示ICP连接** 

```
[root@localhost ~]# ss -t -a
State       Recv-Q Send-Q                            Local Address:Port                                Peer Address:Port   
LISTEN      0      0                                             *:3306                                           *:*       
LISTEN      0      0                                             *:http                                           *:*       
LISTEN      0      0                                             *:ssh                                            *:*       
LISTEN      0      0                                     127.0.0.1:smtp                                           *:*       
ESTAB       0      0                                112.124.15.130:42071                              42.156.166.25:http    
ESTAB       0      0                                112.124.15.130:ssh                              121.229.196.235:33398 
```

 **显示 Sockets 摘要** 

```
[root@localhost ~]# ss -s
Total: 172 (kernel 189)
TCP:   10 (estab 2, closed 4, orphaned 0, synrecv 0, timewait 0/0), ports 5

Transport Total     ip        IPv6
*         189       -         -        
RAW       0         0         0        
UDP       5         5         0        
TCP       6         6         0        
INET      11        11        0        
FRAG      0         0         0   
```

列出当前的established, closed, orphaned and waiting TCP sockets

 **列出所有打开的网络连接端口** 

```
[root@localhost ~]# ss -l
Recv-Q Send-Q                                 Local Address:Port                                     Peer Address:Port   
0      0                                                  *:3306                                                *:*       
0      0                                                  *:http                                                *:*       
0      0                                                  *:ssh                                                 *:*       
0      0                                          127.0.0.1:smtp                                                *:* 
```

 **查看进程使用的socket** 

```
[root@localhost ~]# ss -pl
Recv-Q Send-Q                                          Local Address:Port                                              Peer Address:Port   
0      0                                                           *:3306                                                         *:*        users:(("mysqld",1718,10))
0      0                                                           *:http                                                         *:*        users:(("nginx",13312,5),("nginx",13333,5))
0      0                                                           *:ssh                                                          *:*        users:(("sshd",1379,3))
0      0                                                   127.0.0.1:smtp                                                         *:*        us
```

 **找出打开套接字/端口应用程序** 

```
[root@localhost ~]# ss -pl | grep 3306
0      0                            *:3306                          *:*        users:(("mysqld",1718,10))
```

 **显示所有UDP Sockets** 

```
[root@localhost ~]# ss -u -a
State       Recv-Q Send-Q                                     Local Address:Port                                         Peer Address:Port   
UNCONN      0      0                                                      *:syslog                                                  *:*       
UNCONN      0      0                                         112.124.15.130:ntp                                                     *:*       
UNCONN      0      0                                            10.160.7.81:ntp                                                     *:*       
UNCONN      0      0                                              127.0.0.1:ntp                                                     *:*       
UNCONN      0      0                                                      *:ntp                                                     *:*
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->