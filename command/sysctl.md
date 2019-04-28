sysctl
===

时动态地修改内核的运行参数

## 补充说明

**sysctl命令** 被用于在内核运行时动态地修改内核的运行参数，可用的内核参数在目录`/proc/sys`中。它包含一些TCP/ip堆栈和虚拟内存系统的高级选项， 这可以让有经验的管理员提高引人注目的系统性能。用sysctl可以读取设置超过五百个系统变量。

### 语法  

```shell
sysctl(选项)(参数)
```

### 选项  

```shell
-n：打印值时不打印关键字；
-e：忽略未知关键字错误；
-N：仅打印名称；
-w：当改变sysctl设置时使用此项；
-p：从配置文件“/etc/sysctl.conf”加载内核参数设置；
-a：打印当前所有可用的内核参数变量和值；
-A：以表格方式打印当前所有可用的内核参数变量和值。
```

### 参数  

变量=值：设置内核参数对应的变量值。

### 实例  

查看所有可读变量：

sysctl -a

读一个指定的变量，例如`kern.maxproc`：

sysctl kern.maxproc kern.maxproc: 1044

要设置一个指定的变量，直接用`variable=value`这样的语法：

```shell
sysctl kern.maxfiles=5000
kern.maxfiles: 2088 -> 5000
```

您可以使用sysctl修改系统变量，也可以通过编辑sysctl.conf文件来修改系统变量。sysctl.conf看起来很像rc.conf。它用`variable=value`的形式来设定值。指定的值在系统进入多用户模式之后被设定。并不是所有的变量都可以在这个模式下设定。

sysctl变量的设置通常是字符串、数字或者布尔型。（布尔型用 1 来表示'yes'，用 0 来表示'no'）。

```shell
sysctl -w kernel.sysrq=0
sysctl -w kernel.core_uses_pid=1
sysctl -w net.ipv4.conf.default.accept_redirects=0
sysctl -w net.ipv4.conf.default.accept_source_route=0
sysctl -w net.ipv4.conf.default.rp_filter=1
sysctl -w net.ipv4.tcp_syncookies=1
sysctl -w net.ipv4.tcp_max_syn_backlog=2048
sysctl -w net.ipv4.tcp_fin_timeout=30
sysctl -w net.ipv4.tcp_synack_retries=2
sysctl -w net.ipv4.tcp_keepalive_time=3600
sysctl -w net.ipv4.tcp_window_scaling=1
sysctl -w net.ipv4.tcp_sack=1
```

### 配置sysctl  

编辑此文件：`/etc/sysctl.conf`

如果该文件为空，则输入以下内容，否则请根据情况自己做调整：

```shell
# Controls source route verification
# Default should work for all interfaces
net.ipv4.conf.default.rp_filter = 1
# net.ipv4.conf.all.rp_filter = 1
# net.ipv4.conf.lo.rp_filter = 1
# net.ipv4.conf.eth0.rp_filter = 1

# Disables IP source routing
# Default should work for all interfaces
net.ipv4.conf.default.accept_source_route = 0
# net.ipv4.conf.all.accept_source_route = 0
# net.ipv4.conf.lo.accept_source_route = 0
# net.ipv4.conf.eth0.accept_source_route = 0

# Controls the System Request debugging functionality of the kernel
kernel.sysrq = 0

# Controls whether core dumps will append the PID to the core filename.
# Useful for debugging multi-threaded applications.
kernel.core_uses_pid = 1

# Increase maximum amount of memory allocated to shm
# Only uncomment if needed!
# kernel.shmmax = 67108864

# Disable ICMP Redirect Acceptance
# Default should work for all interfaces
net.ipv4.conf.default.accept_redirects = 0
# net.ipv4.conf.all.accept_redirects = 0
# net.ipv4.conf.lo.accept_redirects = 0
# net.ipv4.conf.eth0.accept_redirects = 0

# enable Log Spoofed Packets, Source Routed Packets, Redirect Packets
# Default should work for all interfaces
net.ipv4.conf.default.log_martians = 1
# net.ipv4.conf.all.log_martians = 1
# net.ipv4.conf.lo.log_martians = 1
# net.ipv4.conf.eth0.log_martians = 1

# Decrease the time default value for tcp_fin_timeout connection
net.ipv4.tcp_fin_timeout = 25

# Decrease the time default value for tcp_keepalive_time connection
net.ipv4.tcp_keepalive_time = 1200

# Turn on the tcp_window_scaling
net.ipv4.tcp_window_scaling = 1

# Turn on the tcp_sack
net.ipv4.tcp_sack = 1

# tcp_fack should be on because of sack
net.ipv4.tcp_fack = 1

# Turn on the tcp_timestamps
net.ipv4.tcp_timestamps = 1

# Enable TCP SYN Cookie Protection
net.ipv4.tcp_syncookies = 1

# Enable ignoring broadcasts request
net.ipv4.icmp_echo_ignore_broadcasts = 1

# Enable bad error message Protection
net.ipv4.icmp_ignore_bogus_error_responses = 1

# make more local ports available
# net.ipv4.ip_local_port_range = 1024 65000

# set TCP Re-Ordering value in kernel to ‘5′
net.ipv4.tcp_reordering = 5

# Lower syn retry rates
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 3

# Set Max SYN Backlog to ‘2048′
net.ipv4.tcp_max_syn_backlog = 2048

# Various Settings
net.core.netdev_max_backlog = 1024

# Increase the maximum number of skb-heads to be cached
net.core.hot_list_length = 256

# Increase the tcp-time-wait buckets pool size
net.ipv4.tcp_max_tw_buckets = 360000

# This will increase the amount of memory available for socket input/output queues
net.core.rmem_default = 65535
net.core.rmem_max = 8388608
net.ipv4.tcp_rmem = 4096 87380 8388608
net.core.wmem_default = 65535
net.core.wmem_max = 8388608
net.ipv4.tcp_wmem = 4096 65535 8388608
net.ipv4.tcp_mem = 8388608 8388608 8388608
net.core.optmem_max = 40960
```

如果希望屏蔽别人 ping 你的主机，则加入以下代码：

```shell
# Disable ping requests
net.ipv4.icmp_echo_ignore_all = 1
```

编辑完成后，请执行以下命令使变动立即生效：

```shell
/sbin/sysctl -p
/sbin/sysctl -w net.ipv4.route.flush=1
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->