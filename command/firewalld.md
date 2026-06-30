firewalld
===

动态防火墙管理器

## 补充说明

**firewalld命令** 是CentOS/RHEL 7+系统中的动态防火墙管理器，提供对iptables内核模块的封装，支持网络/防火墙区域(zone)的概念，支持IPv4防火墙设置和IPv6设置。firewalld使用daemon守护进程，支持网络连接的动态管理和防火墙区域的即时生效，无需重启服务。

firewalld替代了传统的iptables服务，提供了更灵活、更易用的防火墙管理方式。它使用XML格式的区域和服务定义，支持丰富的规则配置，并且可以在运行时即时修改规则而不会中断现有连接。

### 安装

```shell
# CentOS/RHEL 7+
yum install firewalld

# 启动firewalld服务
systemctl start firewalld

# 设置开机自启
systemctl enable firewalld

# 查看firewalld状态
systemctl status firewalld
```

### 语法

```shell
firewall-cmd [OPTIONS...] COMMAND
```

### 常用命令

```shell
--version              显示firewalld版本
--help                 显示帮助信息
--reload               重新加载规则，断开所有连接后重新应用
--complete-reload      重新加载规则，立即断开所有连接
--runtime-to-permanent # 将当前运行时配置保存为永久配置
--get-default-zone     查看默认区域
--set-default-zone     设置默认区域
--get-zones            查看所有可用区域
--get-active-zones     查看所有活动区域
--zone=ZONE            指定操作区域
--add-service=SERVICE  添加服务
--remove-service=SERVICE # 移除服务
--add-port=PORT        添加端口
--remove-port=PORT     移除端口
--list-services        列出服务
--list-ports           列出端口
--list-all             列出所有信息
--list-all-zones       列出所有区域信息
```

### 实例

```shell
# 查看firewalld状态
firewall-cmd --state

# 查看默认区域
firewall-cmd --get-default-zone

# 设置默认区域为public
firewall-cmd --set-default-zone=public

# 查看所有可用区域
firewall-cmd --get-zones

# 查看所有活动区域
firewall-cmd --get-active-zones

# 查看当前区域的所有规则
firewall-cmd --list-all

# 查看所有区域的规则
firewall-cmd --list-all-zones

# 查看public区域的所有规则
firewall-cmd --zone=public --list-all

# 查看当前开放的服务
firewall-cmd --list-services

# 查看当前开放的端口
firewall-cmd --list-ports

# 永久开放HTTP服务（80端口）
firewall-cmd --permanent --add-service=http

# 永久开放HTTPS服务（443端口）
firewall-cmd --permanent --add-service=https

# 永久开放SSH服务（22端口）
firewall-cmd --permanent --add-service=ssh

# 永久开放自定义端口（如8080）
firewall-cmd --permanent --add-port=8080/tcp

# 永久开放端口范围（如9000-9999）
firewall-cmd --permanent --add-port=9000-9999/tcp

# 永久开放UDP端口
firewall-cmd --permanent --add-port=53/udp

# 移除服务
firewall-cmd --permanent --remove-service=http

# 移除端口
firewall-cmd --permanent --remove-port=8080/tcp

# 重新加载配置（不中断连接）
firewall-cmd --reload

# 重新加载配置（中断连接）
firewall-cmd --complete-reload

# 立即生效并保存到永久配置
firewall-cmd --runtime-to-permanent

# 查看已安装的服务列表
firewall-cmd --get-services

# 富规则：允许特定IP访问
firewall-cmd --permanent --add-rich-rule="rule family=ipv4 source address=192.168.1.100 service name=http accept"

# 富规则：拒绝特定IP访问
firewall-cmd --permanent --add-rich-rule="rule family=ipv4 source address=10.0.0.0/8 drop"

# 富规则：端口转发
firewall-cmd --permanent --add-forward-port=port=80:proto=tcp:toport=8080:toaddr=192.168.1.100

# 富规则：ICMP阻塞
firewall-cmd --permanent --add-rich-rule="rule protocol value=icmp drop"

# 查看富规则
firewall-cmd --list-rich-rules

# 区域切换：将接口eth0分配到trusted区域
firewall-cmd --zone=trusted --add-interface=eth0

# 区域切换：移除接口的区域分配
firewall-cmd --zone=public --remove-interface=eth0

# 直接模式：添加直接规则
firewall-cmd --direct --add-rule ipv4 filter INPUT 0 -s 192.168.1.0/24 -j ACCEPT

# 查看直接规则
firewall-cmd --direct --get-all-rules

# 端口复用：将外部80端口映射到内部8080
firewall-cmd --permanent --add-forward-port=port=80:proto=tcp:toport=8080

# IP伪装（NAT）
firewall-cmd --permanent --zone=external --add-masquerade

# 转发端口（NAT）
firewall-cmd --permanent --zone=external --add-forward-port=port=22:proto=tcp:toport=22:toaddr=192.168.1.100

# 服务定义：创建自定义服务
# 创建服务定义文件 /etc/firewalld/services/myapp.xml
<?xml version="1.0" encoding="utf-8"?>
<service>
  <short>MyApp</short>
  <description>My Custom Application</description>
  <port protocol="tcp" port="8888"/>
</service>

# 重载firewalld使新服务生效
firewall-cmd --reload

# 使用自定义服务
firewall-cmd --permanent --add-service=myapp

# 查看firewalld日志
journalctl -u firewalld -f

# 测试配置（不实际应用）
firewall-cmd --test-policy=trusted

# 查看配置更改历史
firewall-cmd --get-config
```

### 防火墙区域（Zones）

firewalld使用区域的概念来管理不同网络的信任级别：

```shell
drop           # 最低信任，所有传入连接都被丢弃
block          # 拒绝所有传入连接，返回icmp-host-prohibited
public         # 默认区域，只接受选定的连接
external       # 外部网络，支持IP伪装
dmz            # DMZ区域，只接受选定的端口
work           # 工作网络，可信的计算机
transport      # 数据传输网络
managerment    # 管理网络
home           # 家庭网络
internal       # 内部网络
trusted        # 最高信任，所有连接都接受
```

### 配置文件位置

```shell
/etc/firewalld/           # 永久配置目录
/etc/firewalld/zones/     # 区域配置文件
/etc/firewalld/services/  # 服务定义文件
/etc/firewalld/icmptypes/ # ICMP类型定义
/etc/firewalld/ipsets/    # IP集合定义
/usr/lib/firewalld/       # 默认配置（不要修改）
/usr/lib/firewalld/zones/ # 默认区域配置
/usr/lib/firewalld/services/ # 默认服务定义
~/.config/firewalld/      # 用户级配置
```

### 注意

1. `--permanent`参数用于修改永久配置，修改后需要执行`--reload`才能生效。
2. 不带`--permanent`参数的命令只修改运行时配置，重启后失效。
3. 建议使用`--runtime-to-permanent`将测试通过的运行时配置保存为永久配置。
4. 区域配置优先级：接口分配 > 源地址 > 默认区域。
5. 富规则按顺序匹配，第一条匹配的规则生效。
6. 修改防火墙规则前建议备份当前配置：`firewall-cmd --get-config > backup.xml`。
7. firewalld与iptables可以同时存在，但建议只使用一种以避免冲突。
8. 使用`--test-service`和`--test-port`可以测试端口和服务是否开放。

### 相关命令

- `iptables` — 传统的Linux防火墙工具
- `ufw` — Ubuntu的 uncomplicated Firewall
- `firewalld` — 动态防火墙管理器
- `nftables` — 新一代防火墙框架

### 参考链接

- [firewalld官方文档](https://firewalld.org/)
- [firewalld Zones](https://firewalld.org/documentation/man-pages/firewalld.zones.html)
- [firewalld Rich Language](https://firewalld.org/documentation/man-pages/firewalld.richlanguage.html)
