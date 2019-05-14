fping
===

fping检测主机是否存在

## 补充说明

**fping命令** fping类似于ping，但比ping强大。与ping要等待某一主机连接超时或发回反馈信息不同，fping给一个主机发送完数据包后，马上给下一个主机发送数据包，实现多主机同时ping，fping还可以在命令行中指定要ping的主机数量范围。

### 语法

```shell
fping(选项)(参数)
```

### 选项

```shell
-a  # 显示存活的主机
-b  # ping 数据包的大小。（默认为56）
-c  # ping每个目标的次数 (默认为1)
-f  # 从文件获取目标列表(不能与 -g 同时使用)
-l  # 循环发送ping
-g  # 通过指定开始和结束地址来生成目标列表,可以使网段
-u  # 显示不可到达的目标
```

### 实例

安装fping命令：

```shell
# 先安装epel源：
yum install epel* -y
# 安装fping包：
yum install fping -y
```

选择性ping指定ip：

```shell
~]# fping 192.168.0.1 192.168.0.125 192.168.0.126 2>/dev/null
192.168.0.1 is alive
192.168.0.125 is alive
192.168.0.126 is unreachable
```

ping整个网段：

```bash
~]# fping -g 192.168.0.0/24 2>/dev/null
192.168.0.1 is alive
192.168.0.103 is alive
...
192.168.0.253 is unreachable
192.168.0.254 is unreachable
```

ping整个网段，只显示存活的主机：

```shell
~]# fping -ag 192.168.0.0/24 2>/dev/null
192.168.0.1
192.168.0.103
...
```

ping某一段ip：

```shell
~]# fping -ag 192.168.0.5 192.168.0.130 2>/dev/null
192.168.0.103
...
192.168.0.125
192.168.0.130
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->

