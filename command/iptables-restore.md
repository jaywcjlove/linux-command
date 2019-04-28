iptables-restore
===

还原iptables表的配置

## 补充说明

**iptables-restore命令** 用来还原iptables-save命令所备份的iptables配置。

### 语法  

```shell
iptables-restor(选项)
```

### 选项  

```shell
-c：指定在还原iptables表时候，还原当前的数据包计数器和字节计数器的值；
-t：指定要还原表的名称。
```

### 实例  

```shell
iptables-restor < iptables.bak
```

iptables.bak是iptables-save命令所备份的文件。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->