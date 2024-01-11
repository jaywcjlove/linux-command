tcpreplay
===

将保存在 PCAP 文件包重新发送，用于性能或者功能测试

## 补充说明

`tcpreplay` 用于重放保存在 pcap 文件中的网络流量，它支持按照捕获 pcap 文件时数据包的速度、或者指定速度去重放网络流量，只要在硬件承受的范围内即可。

它可以根据需要，使流量可以在两个网卡直接拆分、写入文件、进行筛选、以各种方式进行编辑，从而为测试防火墙、NIDS和其他网络设备提供了方法。

### 命令参数

-d number, --dbug=number

启用调试输出。此选项最多可出现1次。此选项将整数作为参数。 number的值被限制为：在0到5的范围内
此选项的默认输入number为：0
如果使用--enable-debug进行配置，则可以为调试输出指定详细级别。数字越大，越详细。

`-q, --quiet`

静默模式。除了运行结束时的统计数据外，不打印任何内容

`-T string, --timer=string`

选择数据包计时模式：select，ioport，gtod，nano。此选项最多可出现1次。此选项的默认string是：gtod
允许您选择要使用的数据包计时方法：

nano - 使用 nanosleep() API

select - 使用 select() API

ioport - 写入 i386 IO 端口 0x80

gtod [default] - 使用 gettimeofday() 循环

`--maxsleep=number`

设置数据包之间休眠不超过X毫秒。此选项将整数作为参数。此选项的默认输入number为：0
设置tcpreplay在数据包之间休眠的最大毫秒数限制。有效防止数据包之间的长时间延迟，而不会影响大多数数据包。默认为禁用。

`-v, --verbose`

通过tcpdump将解码后的数据包打印到标准输出。此选项最多可出现1次

`-A string, --decode=string`

传递给tcpdump解码器的参数。此选项最多可出现1次。此选项必须与-v参数以前使用。
当启用详细模式（-v）时，您还可以指定一个或多个附加参数以传递给tcpdump来修改数据包的解码方式。默认情况下，使用-n和-l。确保string用双引号引起来，如：-A“-axxx”，否则会被tcpreplay作为参数误用。有关选项的完整列表，请参见tcpdump(1)手册页

`-K, --preload-pcap`

在发送之前将数据包预加载到RAM中。
此选项在开始发送之前将指定的pcap加载到RAM中，以便提高启动性能，进而提高重放性能。预加载可以使用或不使用--loop。此选项还会控制每次迭代的流统计信息收集，这可以显着减少内存使用量。基于所提供的选项和从第一循环迭代收集的统计来预测流(flow)统计。

`-c string, --cachefile=string`

通过tcpprep缓存(cache)文件拆分流量。此选项最多可出现1次。此选项必须与以下选项一起使用：intf2。此选项不得与以下选项一起使用：dualfile。
如果你有一个pcap文件，你想用它来通过一个设备（防火墙，路由器，IDS等）发送双向流量，然后使用tcpprep你可以创建一个缓存文件，tcpreplay将用它来分割两个网络接口的流量。 

`-2, --dualfile`

从 network tap  一次重放两个文件。此选项最多可出现1次。此选项必须与以下选项一起使用：intf2。此选项不得与以下任项一起使用：cachefile。
如果您使用网络分流器捕获网络流量，那么您最终可以获得两个pcap文件 - 每个方向一个。此选项将同时重放这两个文件，每个接口一个，并使用每个文件中的时间戳混合它们

`-i string, --intf1=string`

客户端到 server/RX/primary(主要) 流量输出接口。该选项最多可出现 1 次。
用于发送所有流量或通过 tcpprep 标记为 "primary" 流量的所需网络接口。primary 流量通常是客户端到服务器或 khial 虚拟接口上的入站（RX）流量。

`-I string, --intf2=string`

服务器到 client/TX/secondary(辅助) 流量输出接口。该选项最多可能出现 1 次。

用于发送通过 tcpprep 标记为 “secondary” 流量的可选网络接口。辅助(secondary)流量通常是服务器到客户端或 khial 虚拟接口上的出站 (TX)。一般来说，只有将此选项与 --cachefile 一起使用才有意义。

`--listnics`

列出所有可用的网卡并退出。

`-l number, --loop=number`

循环捕获文件X次。此选项最多可出现1次。此选项将整数作为输入参数。 number的值被限制为：
大于或等于0，此选项的默认输入number为：1

`--loopdelay-ms=number`

循环之间的延迟（以毫秒为单位）。此选项必须与以下选项一起出现：--loop。此选项将整数作为输入参数。 number的值被限制为：大于或等于0，此选项的默认输入number为：0

`--pktlen`

覆盖snaplen并使用实际的数据包len。此选项最多可出现1次。
默认情况下，tcpreplay将根据pcap文件中存储的“snaplen”的大小发送数据包，这通常是正确的做法。但是，偶尔，工具会存储更多的字节。通过指定此选项，tcpreplay将忽略snaplen字段，而是尝试根据原始数据包长度发送数据包。如果指定此选项，可能会发生错误。

`-L number, --limit=number`

限制要发送的数据包数量。此选项最多可出现1次。此选项将整数作为输如参数。 number的值被限制为：大于或等于1，此选项的默认输如number为：-1
默认情况下，tcpreplay将发送所有数据包。或者手工指定要发送的最大数据包数。

`--duration=number`

限制发送的秒数。此选项最多可出现1次。此选项将整数作为输入参数。 number的值被限制为：大于或等于1，此选项的默认number为：-1
默认情况下，tcpreplay将发送所有数据包。或者手工指定要传输的最大秒数。

`-x string, --multiplier=string`

将重放速度修改为指定倍数。此选项最多可出现1次。此选项不得与以下任何选项一起出现：pps，mbps，oneatatime，topspeed。
指定一个值以修改数据包重放速度。例子：
2.0：将以捕获速度的两倍重放流量
0.7：将以捕获的速度的70％重放流量

`-p string, --pps=string`

以给定的packets/sec重放数据包。此选项最多可出现1次。此选项不得与以下任何选项一起出现：multiplier, mbps, oneatatime, topspeed.。
指定一个值以将数据包重放调整为特定的packets/sec速率。例子：
200：将以每秒200个数据包重放流量
0.25：将以每分钟15个数据包重放流量

`-M string, --mbps=string`

以给定的Mbps重放数据包。此选项最多可出现1次。此选项不得与以下任何选项一起出现：multiplier，pps，oneatatime，topspeed。
可为tcpreplay设定其发送数据包的Mbps速率，该值可以指定为浮点值

`-t, --topspeed`

尽可能快地重放数据包。此选项不得与以下任何选项一起出现: mbps, multiplier, pps, oneatatime.

`-o, --oneatatime`

根据用户输入重放每个数据包。此选项不得与以下任何选项一起出现：mbps，pps，multiplier，topspeed。
允许您一次单步执行一个或多个数据包。 

`--pps-multi=number`

指定每个时间间隔要发送的数据包数。此选项必须与以下选项一起使用：pps。此选项将整数作为输入参数。 number的值被限制为：大于或等于1，此选项的默认值为：1
当尝试以非常高的速率发送数据包时，每个数据包之间的时间可能很短，以至于不可能在所需的时间段内准确地休眠。此选项允许您一次发送多个数据包，从而允许更长的睡眠时间，这可以更准确地实现。

`--unique-ip`

修改每个循环迭代的IP地址以生成唯一流。此选项必须与以下选项一起使用：loop。
确保每个--loop迭代的IPv4和IPv6数据包都是唯一的。这是以不会改变数据包CRC的方式完成的，因此通常不会影响性能。此选项将显着增加多次循环迭代生成的flow/sec。

`--unique-ip-loops=string`

分配新的唯一 IP 之前的 --loop 迭代次数。默认值为 1。假定同时使用 --loop 和 --unique-ip。

`--netmap`

将数据包直接写入启用netmap的网络适配器。
此功能将检测Linux和BSD系统上支持netmap的网络驱动程序。如果检测到，则会在执行期间绕过网络驱动程序，并直接写入网络缓冲区。这将允许您在商用网络适配器上实现全线速率，类似于商用网络流量生成器实现的速率。请注意，绕过网络驱动程序将中断通过测试接口连接的其他应用程序。

还可以通过将接口指定为`netmap:<intf>`或 `vale:<intf>` 来启用此功能。例如，`netmap:eth0` 指定接口 eth0 上的网络映射。

`--nm-delay=number`

Netmap启动延迟。此选项将整数作为参数。此选项的默认输入为：10
加载netmap后延迟的秒数。在netmap传输之前确保接口完全开启工作。需要netmap选项。默认值为10秒。

`--no-flow-stats`

阻止打印和跟踪流量，速率和到期

禁止收集和打印流量统计信息。 不使用--preload-pcap选项时，此选项可以提高性能，否则它的唯一功能是禁止打印。

流功能将跟踪和打印正在发送的流的统计信息。 简单来讲，一个流是由5元组进行唯一区分的，即源IP、目的IP、源端口、目的端口和协议。
如果指定了--loop，则从一次迭代到下一次迭代的流将不是唯一的，除非数据包被更改。 使用--unique-ip或tcpreplay-edit在迭代之间更改数据包。 

`--flow-expiry=number`

流被视为过期前的非活动秒数。此选项不得与以下选项一起使用：no-flow-stats。此选项将整数作为输入参数。 number的值被限制为：大于或等于0
此选项的默认值为：0
此选项将根据流的idle time来跟踪和报告流的过期。 pcap文件中的时间戳用于确定到期时间，而不是重放数据包的实际时间戳。例如，值30表示如果流上没有流量持续30秒，则任何后续流量都将被视为新流量，从而将增加流量和每秒流量（fps）统计量。

（例如，值 30 表示如果某个流在 30 秒内没有看到任何流量，则任何后续流量都将被视为新流，从而增加流量和每秒流量 (fps) 统计数据。）

此选项可用于优化流产品的流超时设置。当实际流量响应速度很慢时，将超时设置较低可能会导致流量被丢弃。将流量超时配置得过高可能会增加流量产品所需的资源。
请注意，在高于原始速度的重放时使用此选项可能会导致流量和fps计数膨胀。
默认值为0（无到期），典型值为30-120秒

`-P, --pid`

在启动时打印tcpreplay的PID

`--stats=number`

每X秒打印统计信息，如果为'0'则打印每个循环。此选项将整数作为输入参数。number 的值被限制为：大于或等于 0

请注意，定时延迟是"best effort"，发送数据包之间的长延迟可能会导致打印统计数据之间同样长的延迟。

`-V, --version`

打印版本信息

`-h, --less-help`

打印简单的帮助信息

`-H, --help`

打印帮助信息

`-!, --more-help`

打印详细帮助信息

`--save-opts [=cfgfile]`

将选项状态保存到cfgfile。默认值是下面的OPTION PRESETS章节中列出的最后一个配置文件。该命令在更新配置文件后退出。

`--load-opts=cfgfile, --no-load-opts`

从 cfg 文件加载选项。 no-load-opts 形式将禁止加载早期的 config/rc/ini 文件。`--no-load-opts` 提前处理，无序。

###  实例

**1、重放在客户端 ftp 连接的报文 ** 

a、在客户端使用 ethereal 抓包，存为 ftp.pcap 文件。

b、 将 ftp.pcap 文件进行 tcpprep 操作，制作 cache 文件。

```shell
[root@A ~]# tcpprep -an client -i ftp.pcap -o ftp.cache –v 
```

c、 将 DUT 设备的两个接口和 PC 的两个接口使用网线连接，使用 tcpreplay 重 放报文。注意防火墙的配置为网桥（透明）模式。 

```shell
[root@A ~]# tcpreplay -c ftp.cache -i eth0 -j eth1 ftp.pcap -R –v 
```

-R 参数表示全速发送，-v 显示打印信息。 

**2、重放在客户端 BT 连接的报文 ** 

a、在实验室 BT 下载一些台湾的娱乐节目和热门的大片，使用 ethereal 抓包， 存为 bt.pcap 文件。注意 pcap 文件大小的控制，对 pc 的内存要求比较高，我保 存了一个 600 多 M 的 pcap 文件用了 40 多分钟，大家有需要可以直接从实验室 copy。 

b、将 bt.pcap 文件进行 tcpprep 操作，制作 cache 文件。

```shell
 [root@A ~]# tcpprep -an client -i bt.pcap -o bt.cache -C "100M BT Packet" –v
```

制作 cache 文件，在 cache 文件中写入“100M BT Packet”的注释。 

c、使用 tcpreplay 重放报文。 

```shell
[root@A ~]# tcpreplay -c bt.cache -i eth0 -j eth1 bt.pcap -v –R 
```

**3、重放 tftp 服务器上抓到的报文 ** 

a、在 tftp 服务器上使用 ethereal 抓包，存为 tftp.pcap 文件。 

b、将 pcap 文件进行 tcpprep 的操作，制作 cache 文件。 

```shell
[root@A ~]# tcpprep -an server -i tftp.pcap -o tftp.cache –v 
```

注意：我在测试的时候犯了一个错误，使用 DUT 的 tftp 升级来做实验，同时穿 过 DUT 重放报文，结果在网卡发送报文的后，DUT 的 mac 地址做了的回应，导致 交互过程没有穿过 DUT，这个问题比较搞笑，上午弄了半天才发现原因，开始还 以为 udp 的连接不能重放。 

c、使用 tcpreplay 重放报文。 

```shell
[root@A ~]# tcpreplay -c tftp.cache -i eth0 -j eth1 tftp.pcap –v
```

**4、重放pcap包，并指定速率和 loop 次数**

```shell
[root@A ~]# tcpreplay -i eth1 -M 10 -l 0 /home/demo/LSDK/LSDK.pcap
```

以速率10Mbps，0为无限次循环进行重放
