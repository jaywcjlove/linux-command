iptables
===

Linux上常用的防火墙软件

## 补充说明

**iptables命令** 是Linux上常用的防火墙软件，是netfilter项目的一部分。可以直接配置，也可以通过许多前端和图形界面配置。

### 语法  

```
iptables(选项)(参数)
```

### 选项  

```
-t<表>：指定要操纵的表；
-A：向规则链中添加条目；
-D：从规则链中删除条目；
-i：向规则链中插入条目；
-R：替换规则链中的条目；
-L：显示规则链中已有的条目；
-F：清楚规则链中已有的条目；
-Z：清空规则链中的数据包计算器和字节计数器；
-N：创建新的用户自定义规则链；
-P：定义规则链中的默认目标；
-h：显示帮助信息；
-p：指定要匹配的数据包协议类型；
-s：指定要匹配的数据包源ip地址；
-j<目标>：指定要跳转的目标；
-i<网络接口>：指定数据包进入本机的网络接口；
-o<网络接口>：指定数据包要离开本机所使用的网络接口。
```

 **iptables命令选项输入顺序：** 

```
iptables -t 表名 <-A/I/D/R> 规则链名 [规则号] <-i/o 网卡名> -p 协议名 <-s 源IP/源子网> --sport 源端口 <-d 目标IP/目标子网> --dport 目标端口 -j 动作
```

表名包括：

- **raw** ：高级功能，如：网址过滤。
- **mangle** ：数据包修改（QOS），用于实现服务质量。
- **net** ：地址转换，用于网关路由器。
- **filter** ：包过滤，用于防火墙规则。

规则链名包括：

- **INPUT链** ：处理输入数据包。
- **OUTPUT链** ：处理输出数据包。
- **PORWARD链** ：处理转发数据包。
- **PREROUTING链** ：用于目标地址转换（DNAT）。
- **POSTOUTING链** ：用于源地址转换（SNAT）。

动作包括：

- **ACCEPT** ：接收数据包。
- **DROP** ：丢弃数据包。
- **REDIRECT** ：重定向、映射、透明代理。
- **SNAT** ：源地址转换。
- **DNAT** ：目标地址转换。
- **MASQUERADE** ：IP伪装（NAT），用于ADSL。
- **LOG** ：日志记录。

```bash
                             ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓                         
 ┌───────────────┐           ┃    Network    ┃                         
 │ table: filter │           ┗━━━━━━━┳━━━━━━━┛                         
 │ chain: INPUT  │◀────┐             │                                 
 └───────┬───────┘     │             ▼                                 
         │             │   ┌───────────────────┐                       
  ┌      ▼      ┐      │   │ table: nat        │                       
  │local process│      │   │ chain: PREROUTING │                       
  └             ┘      │   └─────────┬─────────┘                       
         │             │             │                                 
         ▼             │             ▼              ┌─────────────────┐
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅    │     ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅      │table: nat       │
 Routing decision      └───── outing decision ─────▶│chain: PREROUTING│
┅┅┅┅┅┅┅┅┅┳┅┅┅┅┅┅┅┅┅          ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅      └────────┬────────┘
         │                                                   │         
         ▼                                                   │         
 ┌───────────────┐                                           │         
 │ table: nat    │           ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅               │         
 │ chain: OUTPUT │    ┌─────▶ outing decision ◀──────────────┘         
 └───────┬───────┘    │      ┅┅┅┅┅┅┅┅┳┅┅┅┅┅┅┅┅                         
         │            │              │                                 
         ▼            │              ▼                                 
 ┌───────────────┐    │   ┌────────────────────┐                       
 │ table: filter │    │   │ chain: POSTROUTING │                       
 │ chain: OUTPUT ├────┘   └──────────┬─────────┘                       
 └───────────────┘                   │                                 
                                     ▼                                 
                             ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓                         
                             ┃    Network    ┃                         
                             ┗━━━━━━━━━━━━━━━┛                         
```


### 实例  

 **清除已有iptables规则** 

```
iptables -F
iptables -X
iptables -Z
```

 **开放指定的端口** 

```
iptables -A INPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT               #允许本地回环接口(即运行本机访问本机)
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT    #允许已建立的或相关连的通行
iptables -A OUTPUT -j ACCEPT         #允许所有本机向外的访问
iptables -A INPUT -p tcp --dport 22 -j ACCEPT    #允许访问22端口
iptables -A INPUT -p tcp --dport 80 -j ACCEPT    #允许访问80端口
iptables -A INPUT -p tcp --dport 21 -j ACCEPT    #允许ftp服务的21端口
iptables -A INPUT -p tcp --dport 20 -j ACCEPT    #允许FTP服务的20端口
iptables -A INPUT -j reject       #禁止其他未允许的规则访问
iptables -A FORWARD -j REJECT     #禁止其他未允许的规则访问
```

 **屏蔽IP** 

```
iptables -I INPUT -s 123.45.6.7 -j DROP       #屏蔽单个IP的命令
iptables -I INPUT -s 123.0.0.0/8 -j DROP      #封整个段即从123.0.0.1到123.255.255.254的命令
iptables -I INPUT -s 124.45.0.0/16 -j DROP    #封IP段即从123.45.0.1到123.45.255.254的命令
iptables -I INPUT -s 123.45.6.0/24 -j DROP    #封IP段即从123.45.6.1到123.45.6.254的命令是
```

 **查看已添加的iptables规则** 

```
iptables -L -n -v
Chain INPUT (policy DROP 48106 packets, 2690K bytes)
 pkts bytes target     prot opt in     out     source               destination         
 5075  589K ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0           
 191K   90M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:22
1499K  133M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:80
4364K 6351M ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0           state RELATED,ESTABLISHED
 6256  327K ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0           

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination         

Chain OUTPUT (policy ACCEPT 3382K packets, 1819M bytes)
 pkts bytes target     prot opt in     out     source               destination         
 5075  589K ACCEPT     all  --  *      lo      0.0.0.0/0            0.0.0.0/0  
```

 **删除已添加的iptables规则** 

将所有iptables以序号标记显示，执行：

```
iptables -L -n --line-numbers
```

比如要删除INPUT里序号为8的规则，执行：

```
iptables -D INPUT 8
```

**开机启动网络转发规则**

公网`210.14.67.7`让内网`192.168.188.0/24`上网

```bash
iptables -t nat -A POSTROUTING -s 192.168.188.0/24 -j SNAT --to-source 210.14.67.127
```

**端口映射**

本机的 2222 端口映射到内网 虚拟机的22 端口

```bash
iptables -t nat -A PREROUTING -d 210.14.67.127 -p tcp --dport 2222  -j DNAT --to-dest 192.168.188.115:22
```
iptables
===

Linux上常用的防火墙软件

## 补充说明

**iptables命令** 是Linux上常用的防火墙软件，是netfilter项目的一部分。可以直接配置，也可以通过许多前端和图形界面配置。

### 语法  

```
iptables(选项)(参数)
```

### 选项  

```
-t, --table table 对指定的表 table 进行操作， table 必须是 raw， nat，filter，mangle 中的一个。如果不指定此选项，默认的是 filter 表。
-L, --list [chain] 列出链 chain 上面的所有规则，如果没有指定链，列出表上所有链的所有规则。
-F, --flush [chain] 清空指定链 chain 上面的所有规则。如果没有指定链，清空该表上所有链的所有规则。
-A, --append chain rule-specification 在指定链 chain 的末尾插入指定的规则，也就是说，这条规则会被放到最后，最后才会被执行。规则是由后面的匹配来指定。
-D, --delete chain rule-specification -D, --delete chain rulenum 在指定的链 chain 中删除一个或多个指定规则。
-I, --insert chain [rulenum] rule-specification 在链 chain 中的指定位置插入一条或多条规则。如果指定的规则号是1，则在链的头部插入。这也是默认的情况，如果没有指定规则号。
-R, --replace chain rulenum rule-specification 用新规则替换指定链 chain 上面的指定规则，规则号从1开始。
-Z, --zero [chain] ：把指定链，或者表中的所有链上的所有计数器清零。
-N, --new-chain chain 用指定的名字创建一个新的链。
-p：指定要匹配的数据包协议类型；
-X, --delete-chain [chain] ：删除指定的链，这个链必须没有被其它任何规则引用，而且这条上必须没有任何规则。如果没有指定链名，则会删除该表中所有非内置的链。
-E, --rename-chain old-chain new-chain ：用指定的新名字去重命名指定的链。这并不会对链内部照成任何影响。
-P, --policy chain target ：为指定的链 chain 设置策略 target。注意，只有内置的链才允许有策略，用户自定义的是不允许的。
-j, --jump target <指定目标> ：即满足某条件时该执行什么样的动作。target 可以是内置的目标，比如 ACCEPT，也可以是用户自定义的链。
-s, --source [!] address[/mask] ：把指定的一个／一组地址作为源地址，按此规则进行过滤。当后面没有 mask 时，address 是一个地址，比如：192.168.1.1；当 mask 指定时，可以表示一组范围内的地址，比如：192.168.1.0/255.255.255.0。
-d, --destination [!] address[/mask] ：地址格式同上，但这里是指定地址为目的地址，按此进行过滤。
-i, --in-interface [!] <网络接口name> ：指定数据包的来自来自网络接口，比如最常见的 eth0 。注意：它只对 INPUT，FORWARD，PREROUTING 这三个链起作用。如果没有指定此选项， 说明可以来自任何一个网络接口。同前面类似，"!" 表示取反。
-o, --out-interface [!] <网络接口name> ：指定数据包出去的网络接口。只对 OUTPUT，FORWARD，POSTROUTING 三个链起作用。
-h：显示帮助信息；
```

 **iptables命令选项输入顺序：** 

```
iptables -t 表名 <-A/I/D/R> 规则链名 [规则号] <-i/o 网卡名> -p 协议名 <-s 源IP/源子网> --sport 源端口 <-d 目标IP/目标子网> --dport 目标端口 -j 动作
```

表名包括：

- **raw** ：高级功能，如：网址过滤。
- **mangle** ：数据包修改（QOS），用于实现服务质量。
- **net** ：地址转换，用于网关路由器。
- **filter** ：包过滤，用于防火墙规则。

规则链名包括：

- **INPUT链** ：处理输入数据包。
- **OUTPUT链** ：处理输出数据包。
- **PORWARD链** ：处理转发数据包。
- **PREROUTING链** ：用于目标地址转换（DNAT）。
- **POSTOUTING链** ：用于源地址转换（SNAT）。

动作包括：

- **ACCEPT** ：接收数据包。
- **DROP** ：丢弃数据包。
- **REDIRECT** ：重定向、映射、透明代理。
- **SNAT** ：源地址转换。
- **DNAT** ：目标地址转换。
- **MASQUERADE** ：IP伪装（NAT），用于ADSL。
- **LOG** ：日志记录。

```bash
                             ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓                         
 ┌───────────────┐           ┃    Network    ┃                         
 │ table: filter │           ┗━━━━━━━┳━━━━━━━┛                         
 │ chain: INPUT  │◀────┐             │                                 
 └───────┬───────┘     │             ▼                                 
         │             │   ┌───────────────────┐                       
  ┌      ▼      ┐      │   │ table: nat        │                       
  │local process│      │   │ chain: PREROUTING │                       
  └             ┘      │   └─────────┬─────────┘                       
         │             │             │                                 
         ▼             │             ▼              ┌─────────────────┐
┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅    │     ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅      │table: nat       │
 Routing decision      └───── outing decision ─────▶│chain: PREROUTING│
┅┅┅┅┅┅┅┅┅┳┅┅┅┅┅┅┅┅┅          ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅      └────────┬────────┘
         │                                                   │         
         ▼                                                   │         
 ┌───────────────┐                                           │         
 │ table: nat    │           ┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅               │         
 │ chain: OUTPUT │    ┌─────▶ outing decision ◀──────────────┘         
 └───────┬───────┘    │      ┅┅┅┅┅┅┅┅┳┅┅┅┅┅┅┅┅                         
         │            │              │                                 
         ▼            │              ▼                                 
 ┌───────────────┐    │   ┌────────────────────┐                       
 │ table: filter │    │   │ chain: POSTROUTING │                       
 │ chain: OUTPUT ├────┘   └──────────┬─────────┘                       
 └───────────────┘                   │                                 
                                     ▼                                 
                             ┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓                         
                             ┃    Network    ┃                         
                             ┗━━━━━━━━━━━━━━━┛                         
```


### 实例  

#### 清除已有iptables规则

```
iptables -F
iptables -X
iptables -Z
```

#### 开放指定的端口

```
iptables -A INPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT               #允许本地回环接口(即运行本机访问本机)
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT    #允许已建立的或相关连的通行
iptables -A OUTPUT -j ACCEPT         #允许所有本机向外的访问
iptables -A INPUT -p tcp --dport 22 -j ACCEPT    #允许访问22端口
iptables -A INPUT -p tcp --dport 80 -j ACCEPT    #允许访问80端口
iptables -A INPUT -p tcp --dport 21 -j ACCEPT    #允许ftp服务的21端口
iptables -A INPUT -p tcp --dport 20 -j ACCEPT    #允许FTP服务的20端口
iptables -A INPUT -j reject       #禁止其他未允许的规则访问
iptables -A FORWARD -j REJECT     #禁止其他未允许的规则访问
```

#### 屏蔽IP

```
iptables -A INPUT -p tcp -m tcp -s 192.168.0.8 -j DROP  # 屏蔽恶意主机（比如，192.168.0.8
iptables -I INPUT -s 123.45.6.7 -j DROP       #屏蔽单个IP的命令
iptables -I INPUT -s 123.0.0.0/8 -j DROP      #封整个段即从123.0.0.1到123.255.255.254的命令
iptables -I INPUT -s 124.45.0.0/16 -j DROP    #封IP段即从123.45.0.1到123.45.255.254的命令
iptables -I INPUT -s 123.45.6.0/24 -j DROP    #封IP段即从123.45.6.1到123.45.6.254的命令是
```

#### 指定数据包出去的网络接口

只对 OUTPUT，FORWARD，POSTROUTING 三个链起作用。

```bash
iptables -A FORWARD -o eth0
```

#### 查看已添加的iptables规则

```
iptables -L -n -v
Chain INPUT (policy DROP 48106 packets, 2690K bytes)
 pkts bytes target     prot opt in     out     source               destination         
 5075  589K ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0           
 191K   90M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:22
1499K  133M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:80
4364K 6351M ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0           state RELATED,ESTABLISHED
 6256  327K ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0           

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination         

Chain OUTPUT (policy ACCEPT 3382K packets, 1819M bytes)
 pkts bytes target     prot opt in     out     source               destination         
 5075  589K ACCEPT     all  --  *      lo      0.0.0.0/0            0.0.0.0/0  
```

#### 删除已添加的iptables规则

将所有iptables以序号标记显示，执行：

```
iptables -L -n --line-numbers
```

比如要删除INPUT里序号为8的规则，执行：

```bash
iptables -D INPUT 8
```

#### 启动网络转发规则

公网`210.14.67.7`让内网`192.168.188.0/24`上网

```bash
iptables -t nat -A POSTROUTING -s 192.168.188.0/24 -j SNAT --to-source 210.14.67.127
```

#### 端口映射

本机的 2222 端口映射到内网 虚拟机的22 端口

```bash
iptables -t nat -A PREROUTING -d 210.14.67.127 -p tcp --dport 2222  -j DNAT --to-dest 192.168.188.115:22
```

#### 字符串匹配

比如，我们要过滤所有TCP连接中的字符串`test`，一旦出现它我们就终止这个连接，我们可以这么做：

```bash
iptables -A INPUT -p tcp -m string --algo kmp --string "test" -j REJECT --reject-with tcp-reset
iptables -L

# Chain INPUT (policy ACCEPT)
# target     prot opt source               destination        
# REJECT     tcp  --  anywhere             anywhere            STRING match "test" ALGO name kmp TO 65535 reject-with tcp-reset
#  
# Chain FORWARD (policy ACCEPT)
# target     prot opt source               destination        
#  
# Chain OUTPUT (policy ACCEPT)
# target     prot opt source               destination  
```

#### 阻止Windows蠕虫的攻击

```bash
iptables -I INPUT -j DROP -p tcp -s 0.0.0.0/0 -m string --algo kmp --string "cmd.exe"
```

#### 防止SYN洪水攻击

```bash
iptables -A INPUT -p tcp --syn -m limit --limit 5/second -j ACCEPT
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
