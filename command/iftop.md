iftop
===

一款实时流量监控工具

## 补充说明

**iftop命令** 是一款实时流量监控工具，监控TCP/IP连接等，缺点就是无报表功能。必须以root身份才能运行。

###  语法

```shell
iftop(选项)
```

###  选项

```shell
iftop: 按主机显示接口带宽使用情况

参数: iftop -h | [-npblNBP] [-i interface] [-f filter code]
    [-F net/mask] [-G net6/mask6]

   -h                  显示帮助信息
   -n                  不要讲ip转为主机名
   -N                  不要将端口转为对应服务名
   -p                  以混杂模式运行(显示同一网段内其他主机之间的流量)
   -b                  不要展示流量通行条形图
   -B                  使用Byte展示流量情况(默认展示的bit)
   -i interface        指定需要监听的网络端口 -i eth0
   -f filter code      use filter code to select packets to count
                      (default: none, but only IP packets are counted)
   -F net/mask         展示指定IPV4网络的流量，参数可以是主机名/IP/掩码
   -G net6/mask6       展示指定IPV6网络的流量，参数可以是主机名/IP/掩码
   -l                  展示本地网络/回环网络/ipv6流量 (默认值: 关闭)
   -P                  展示主机端口
   -m limit            设置带宽规模的上限
   -c config file      指定可选配置文件
   -t                  使用文本模式展示
   
   Sorting orders:
   -o 2s                按照第一列进行排序 (每2秒的平均值为一个计数周期)
   -o 10s               按照第二列进行排序 (每10秒的平均值为一个计数周期]
   -o 40s               按照第三列进行排序 (每40秒的平均值为一个计数周期)
   -o source            按照原地址继续排序
   -o destination       按照目标地址进行排序
   
   以下选项仅在与 -t
   -s num              在num秒后打印一个文本输出，然后退出
   -L num              打印的行数
```

### 界面说明

> 第一行为带宽，这里为1Mbit,不是字节哦.
> 连接列表，最后三列分别是2秒，10秒和40秒的平均流量
> `=>` 代表发送  
> `<=` 代表接收
> 最后三行表示发送，接收和全部的流量，
> 第二列为你运行iftop到目前流量，第三列为高峰值，第四列为平均值。

###  实例

```shell
iftop           # 默认是监控第一块网卡的流量
iftop -i eth1   # 监控eth1
iftop -n        # 直接显示IP, 不进行DNS反解析
iftop -N        # 直接显示连接埠编号, 不显示服务名称
iftop -F 192.168.1.0/24 or 192.168.1.0/255.255.255.0  # 显示某个网段进出封包流量
```



