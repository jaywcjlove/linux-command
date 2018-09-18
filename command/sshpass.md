sshpass
===

可以在命令行直接使用密码来进行远程连接和远程拉取文件

### 实例  

```
# 直接远程连接某台主机
sshpass -p xxx ssh root@192.168.11.11

# 远程连接指定ssh的端口
sshpass -p 123456 ssh -p 1000 root@192.168.11.11

# 从密码文件读取文件内容作为密码去远程连接主机
sshpass -f xxx.txt  ssh root@192.168.11.11

# 从远程主机上拉取文件到本地
sshpass -p '123456' scp root@host_ip:/home/test/t ./tmp/
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->