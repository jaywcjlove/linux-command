nstat
===

nstat 是一个简单的监视内核的 SNMP 计数器和网络接口状态的实用工具。

## 补充说明

大多数命令行用户都熟悉 netstat ，这是 net-tools 软件包中的命令。目前新版本中 net-tools 软件包几乎完全被弃用，取而代之的是 ip 命令套件，而 nstat 属于新软件包。

###  语法

```s
nstat [OPTION] [ PATTERN [ PATTERN ] ]
```

###  选项

```shell
-h：显示帮助信息；
-V：显示指令版本信息；
-z：转储零计数器。默认情况下不显示它们；
-r：清零历史统计；
-n：不显示任何内容，仅更新历史；
-a：显示计数器的绝对值；
-d：以守护进程模式运行并收集统计数据
-s：不更新历史；
-j：JSON格式输出。
```

### 实例

直接输入以查询网络接口状态，以下展示了 IPv4，IPv6，TCP，UDP，ICMP 的统计数据：

```shell
nstat          
#kernel
IpInReceives                    769152             0.0
IpInAddrErrors                  1                  0.0
IpInDelivers                    769146             0.0
IpOutRequests                   764236             0.0
IpOutDiscards                   20                 0.0
IpOutNoRoutes                   1                  0.0
IcmpInMsgs                      92                 0.0
IcmpInDestUnreachs              92                 0.0
IcmpOutMsgs                     94                 0.0
IcmpOutDestUnreachs             94                 0.0
IcmpMsgInType3                  92                 0.0
IcmpMsgOutType3                 94                 0.0
TcpActiveOpens                  1786               0.0
TcpPassiveOpens                 142                0.0
TcpAttemptFails                 11                 0.0
TcpEstabResets                  72                 0.0
TcpInSegs                       756827             0.0
TcpOutSegs                      802908             0.0
TcpRetransSegs                  767                0.0
TcpOutRsts                      702                0.0
UdpInDatagrams                  12075              0.0
UdpNoPorts                      82                 0.0
UdpOutDatagrams                 7045               0.0
UdpIgnoredMulti                 70                 0.0
Ip6InReceives                   5005               0.0
Ip6InDelivers                   5005               0.0
Ip6OutRequests                  131                0.0
Ip6OutDiscards                  2                  0.0
Ip6OutNoRoutes                  959                0.0
Ip6InMcastPkts                  4999               0.0
Ip6OutMcastPkts                 125                0.0
Ip6InOctets                     797462             0.0
Ip6OutOctets                    16421              0.0
Ip6InMcastOctets                797030             0.0
Ip6OutMcastOctets               15949              0.0
Ip6InNoECTPkts                  5005               0.0
Icmp6InMsgs                     3                  0.0
Icmp6OutMsgs                    51                 0.0
Icmp6InNeighborAdvertisements   1                  0.0
Icmp6InMLDv2Reports             2                  0.0
Icmp6OutRouterSolicits          11                 0.0
Icmp6OutNeighborSolicits        4                  0.0
Icmp6OutMLDv2Reports            36                 0.0
Icmp6InType136                  1                  0.0
Icmp6InType143                  2                  0.0
Icmp6OutType133                 11                 0.0
Icmp6OutType135                 4                  0.0
Icmp6OutType143                 36                 0.0
Udp6InDatagrams                 4998               0.0
Udp6OutDatagrams                76                 0.0
TcpExtTW                        385                0.0
TcpExtPAWSEstab                 1                  0.0
TcpExtDelayedACKs               37133              0.0
TcpExtDelayedACKLocked          57                 0.0
TcpExtDelayedACKLost            456                0.0
TcpExtTCPHPHits                 417717             0.0
TcpExtTCPPureAcks               34186              0.0
TcpExtTCPHPAcks                 222980             0.0
TcpExtTCPSACKReorder            1                  0.0
TcpExtTCPLossUndo               194                0.0
TcpExtTCPLostRetransmit         169                0.0
TcpExtTCPSlowStartRetrans       1                  0.0
TcpExtTCPTimeouts               494                0.0
TcpExtTCPLossProbes             309                0.0
TcpExtTCPBacklogCoalesce        571                0.0
TcpExtTCPDSACKOldSent           281                0.0
TcpExtTCPDSACKRecv              281                0.0
TcpExtTCPAbortOnData            13                 0.0
TcpExtTCPAbortOnClose           30                 0.0
TcpExtTCPDSACKIgnoredOld        1                  0.0
TcpExtTCPDSACKIgnoredNoUndo     258                0.0
TcpExtTCPSackShiftFallback      1                  0.0
TcpExtTCPRcvCoalesce            18314              0.0
TcpExtTCPFastOpenActiveFail     2                  0.0
TcpExtTCPSpuriousRtxHostQueues  11                 0.0
TcpExtTCPAutoCorking            1684               0.0
TcpExtTCPFromZeroWindowAdv      2                  0.0
TcpExtTCPToZeroWindowAdv        2                  0.0
TcpExtTCPSynRetrans             479                0.0
TcpExtTCPOrigDataSent           359814             0.0
TcpExtTCPHystartTrainDetect     13                 0.0
TcpExtTCPHystartTrainCwnd       550                0.0
TcpExtTCPKeepAlive              18                 0.0
TcpExtTCPDelivered              361695             0.0
TcpExtTCPZeroWindowDrop         1                  0.0
TcpExtTcpTimeoutRehash          494                0.0
TcpExtTcpDuplicateDataRehash    2                  0.0
TcpExtTCPDSACKRecvSegs          281                0.0
IpExtInNoRoutes                 3                  0.0
IpExtInMcastPkts                5392               0.0
IpExtOutMcastPkts               221                0.0
IpExtInBcastPkts                70                 0.0
IpExtOutBcastPkts               10                 0.0
IpExtInOctets                   2100280442         0.0
IpExtOutOctets                  226760631          0.0
IpExtInMcastOctets              746608             0.0
IpExtOutMcastOctets             27565              0.0
IpExtInBcastOctets              5674               0.0
IpExtOutBcastOctets             778                0.0
IpExtInNoECTPkts                1885871            0.0
```