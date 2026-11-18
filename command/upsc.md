upsc
===

Network UPS Tools 中用于查询 UPS 状态的轻量级只读客户端

## 补充说明

**upsc命令** 全称 **Network UPS Tools upsc**，是 NUT（Network UPS Tools）软件包中的客户端工具，由 `nut-client` 软件包提供（本文档基于 NUT 2.8.1 版本）。它用于向正在运行的 `upsd`（UPS 守护进程）服务查询信息，是快速轮询 UPS 状态的便捷方式。

**upsc命令** 本身不连接硬件，它通过 TCP 协议与 `upsd` 通信，因此既可以查询本机的 UPS，也可以查询远程主机上的 UPS，特别适合在 shell 脚本或其它只需要读取 UPS 数据的程序中使用。

**upsc命令** 共有三种使用形式：

*   列出 UPS：列出指定主机（默认 `localhost`）上由 `upsd` 管理的所有 UPS；
*   列出变量：列出指定 UPS 的全部变量及其取值，或者只显示某一个变量的值；
*   列出客户端：列出当前连接到指定 UPS 上的客户端（监听器）地址。

> 提示：NUT 版本更迭较快，`-j`（JSON 输出）、`-D`、`-W`、`-A` 等选项是 NUT 2.8.2 之后才加入的，在 2.8.1 版本中不可用，请以 `upsc -h` 与本机 `man upsc` 的输出为准。

### 语法

```shell
upsc -l | -L [<hostname>[:port]]
upsc <ups> [<variable>]
upsc -c <ups>
```

### 选项

**第一种形式（列出 UPS）**

```shell
-l      # 列出指定主机上的每个 UPS，每行一个名称；主机默认为 localhost
-L      # 列出指定主机上的每个 UPS，并在名称后附带其描述信息（来自 ups.conf）；主机默认为 localhost
```

**第二种形式（列出变量和值）**

```shell
<ups>       # 指定 upsd 服务器，格式为 <upsname>[@<hostname>[:<port>]]
<variable>  # 可选，只显示该变量的值；默认列出该 <host> 上的所有变量
```

**第三种形式（列出连接到设备的客户端）**

```shell
-c          # 列出连接到指定 <ups> 上的每个客户端，每行一个
<ups>       # 指定 upsd 服务器，格式为 <upsname>[@<hostname>[:<port>]]
```

**通用选项**

```shell
-V  # 显示当前软件的版本
-h  # 显示帮助信息
```

### 参数

```shell
<hostname>  # upsd 所在的主机名或 IP 地址，可附加 :port 指定端口，默认为 localhost
<upsname>   # UPS 名称，即 ups.conf 中定义的名字
<variable>  # UPS 变量名，如 battery.charge、ups.status 等
<port>      # upsd 监听的 TCP 端口，默认 3493
```

### 实例

列出本机 `upsd` 上配置的所有 UPS：

```shell
[root@localhost ~]# upsc -l
apc
```

列出本机所有 UPS 及其描述信息：

```shell
[root@localhost ~]# upsc -L
apc: Back-UPS 500
ppro2: Patriot Pro II
```

列出名为 `myups`、位于主机 `mybox`、端口 `1234` 的 UPS 的全部变量和值：

```shell
[root@localhost ~]# upsc myups@mybox:1234
battery.charge: 100.0
battery.voltage: 13.9
battery.voltage.nominal: 13.6
...
```

只查看某一个变量的值（常用于脚本中，省去管道 `grep`）：

```shell
[root@localhost ~]# upsc myups ups.status
OL
```

常见变量 `ups.status` 的取值含义：

```shell
OL      # 市电供电正常（On Line）
OB      # 电池供电中（On Battery），说明市电中断
LB      # 电池电量低（Low Battery）
RB      # 电池需要更换（Replace Battery）
CHRG    # 电池正在充电（Charging）
DISCHRG # 电池正在放电（Discharging）
OL CHRG # 市电正常，同时电池充电中
FSD     # 强制关机（Forced Shutdown）信号
```

列出连接到 `myups` 的所有客户端：

```shell
[root@localhost ~]# upsc -c myups
127.0.0.1
::1
192.168.1.2
```

查询远程主机 `192.168.1.10` 上通过默认端口提供的 UPS 列表，并批量获取其状态：

```shell
[root@localhost ~]# upsc -l 192.168.1.10
apc

[root@localhost ~]# for UPS in `upsc -l 192.168.1.10`; do
>     upsc "$UPS@192.168.1.10" ups.status
> done
OL
```

显示版本信息与帮助：

```shell
[root@localhost ~]# upsc -V
Network UPS Tools upsc 2.8.1
[root@localhost ~]# upsc -h
```

### 说明

*   `upsc` 只与 `upsd` 通信，使用前请确认 `upsd` 服务已经启动，例如执行 `systemctl start nut-server`（部分发行版为 `upsd`），否则会提示连接失败。
*   由于 2.8.1 版本的 `upsc` 使用 `upsclient` 库，仅通过 TCP 与 `upsd` 通信；早期版本使用 `upsfetch` 库和 UDP 套接字，这也是 `upsct` 命令后来被移除的原因。
*   在脚本中使用时，只应处理标准输出（`stdout`）的内容，错误信息会输出到标准错误（`stderr`）。
*   如果收到错误提示，请检查：指定的 UPS 名称是否正确、远程主机上的 `upsd` 是否正在运行、防火墙是否拦截了通信（默认端口 `3493`）。
*   相关命令与配置文件：`upsd`（UPS 守护进程）、`ups.conf`（UPS 配置）、`upslog`、`upsmon`。

### 安装

```shell
# Debian / Ubuntu
apt-get install nut-client

# RHEL / CentOS / Fedora
yum install nut-client
# 或
dnf install nut-client
```
