nmcli
===

地址配置工具

## 补充说明

**nmcli命令** 是 NetworkManager client 网络管理客户端。

###  语法

```shell
nmcli [OPTIONS] OBJECT { COMMAND | help }
```

###  选项

```shell
OPTIONS
  -t[erse]                                  # terse output 简洁的输出
  -p[retty]                                 # pretty output 漂亮的输出
  -m[ode] tabular|multiline                 # output mode  输出模式
  -f[ields] <field1,field2,...>|all|common  # specify fields to output 指定要输出的字段
  -e[scape] yes|no                          # escape columns separators in values 在值中转义列分隔符
  -n[ocheck]                                # 不要检查nmcli和NetworkManager版本
  -a[sk]                                    # 要求缺少参数
  -w[ait] <seconds>                         # 设置超时等待整理操作
  -v[ersion]                                # 显示程序版本
  -h[elp]                                   # 打印此帮助

OBJECT
  g[eneral]       NetworkManager的一般状态和操作
  n[etworking]    整体组网控制
  r[adio]         NetworkManager切换开关
  c[onnection]    NetworkManager的连接
  d[evice]        由NetworkManager管理的设备
  a[gent]         NetworkManager秘密代理或polkit代理
```

###  实例

```shell
nmcli connection show            # 查看当前连接状态
nmcli connection reload          # 重启服务
nmcli connection show -active    # 显示活动的连接
nmcli connection show "lan eth0" # 显示指定一个网络连接配置
nmcli device status              # 显示设备状态
nmcli device show eno16777736    # 显示指定接口属性
nmcli device show                # 显示全部接口属性
nmcli con up static              # 启用static连接配置
nmcli con up default             # 启用default连接配置 
nmcli con add help               # 查看帮助

```

### 创建网络会话

```shell
nmcli connection add con-name company ifname ens33 autoconnect no type ethernet ip4 192.168.1.2/24 gw4 192.168.1.1
# con-name 指定会话名称，
# ifname 指定本机网卡
# autoconnect no 是否自动连接
# ethernet 指定网卡类型
# ip4/ip6
# gw4/gw5
```

