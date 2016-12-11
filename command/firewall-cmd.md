firewall-cmd
===

用于查找并显示用户信息

## 补充说明

firewall-cmd 是 firewalld的字符界面管理工具，firewalld是centos7的一大特性，最大的好处有两个：支持动态更新，不用重启服务；第二个就是加入了防火墙的“zone”概念。

firewalld跟iptables比起来至少有两大好处：

1. firewalld可以动态修改单条规则，而不需要像iptables那样，在修改了规则后必须得全部刷新才可以生效。
2. firewalld在使用上要比iptables人性化很多，即使不明白“五张表五条链”而且对TCP/IP协议也不理解也可以实现大部分功能。

firewalld自身并不具备防火墙的功能，而是和iptables一样需要通过内核的netfilter来实现，也就是说firewalld和 iptables一样，他们的作用都是用于维护规则，而真正使用规则干活的是内核的netfilter，只不过firewalld和iptables的结 构以及使用方法不一样罢了。



### 语法  

```
finger(选项)(参数)
```


### 实例  

```bash
# 安装firewalld
yum install firewalld firewall-config


systemctl start  firewalld # 启动
systemctl status firewalld # 或者 firewall-cmd --state 查看状态
systemctl disable firewalld # 停止
systemctl stop firewalld  # 禁用
```

配置firewalld

```bash
firewall-cmd --version  # 查看版本
firewall-cmd --help     # 查看帮助

# 查看设置：
firewall-cmd --state  # 显示状态
firewall-cmd --get-active-zones  # 查看区域信息
firewall-cmd --get-zone-of-interface=eth0  # 查看指定接口所属区域
firewall-cmd --panic-on  # 拒绝所有包
firewall-cmd --panic-off  # 取消拒绝状态
firewall-cmd --query-panic  # 查看是否拒绝

firewall-cmd --reload # 更新防火墙规则
firewall-cmd --complete-reload
# 两者的区别就是第一个无需断开连接，就是firewalld特性之一动态添加规则，第二个需要断开连接，类似重启服务


# 将接口添加到区域，默认接口都在public
firewall-cmd --zone=public --add-interface=eth0
# 永久生效再加上 --permanent 然后reload防火墙
 
# 设置默认接口区域，立即生效无需重启
firewall-cmd --set-default-zone=public
```

打开端口

```

# 查看所有打开的端口：
firewall-cmd --zone=dmz --list-ports

# 加入一个端口到区域：
firewall-cmd --zone=dmz --add-port=8080/tcp
# 若要永久生效方法同上
 
# 打开一个服务，类似于将端口可视化，服务需要在配置文件中添加，/etc/firewalld 目录下有services文件夹，这个不详细说了，详情参考文档
firewall-cmd --zone=work --add-service=smtp
 
# 移除服务
firewall-cmd --zone=work --remove-service=smtp
```


