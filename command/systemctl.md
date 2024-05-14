systemctl
===

系统服务管理器指令

## 补充说明

**systemctl命令** 是系统服务管理器指令，它实际上将 service 和 chkconfig 这两个命令组合到一起。

| 任务 | 旧指令 | 新指令 |
| ---- | ---- | ---- |
| 使某服务自动启动 | chkconfig --level 3 httpd on | systemctl enable httpd.service |
| 使某服务不自动启动 | chkconfig --level 3 httpd off | systemctl disable httpd.service |
| 检查服务状态 | service httpd status | systemctl status httpd.service （服务详细信息） systemctl is-active httpd.service （仅显示是否 Active) |
| 显示所有已启动的服务 | chkconfig --list | systemctl list-units --type=service |
| 启动服务 | service httpd start | systemctl start httpd.service |
| 停止服务 | service httpd stop | systemctl stop httpd.service |
| 重启服务 | service httpd restart | systemctl restart httpd.service |
| 重载服务 | service httpd reload | systemctl reload httpd.service |

### 实例

```shell
systemctl start nfs-server.service . # 启动nfs服务
systemctl enable nfs-server.service # 设置开机自启动
systemctl enable nfs-server.service --now # 设置开机自启动，并立刻启动
systemctl disable nfs-server.service # 停止开机自启动
systemctl disable nfs-server.service --now # 停止开机自启动，并立刻停止
systemctl status nfs-server.service # 查看服务当前状态
systemctl restart nfs-server.service # 重新启动某服务
systemctl list-units --type=service # 查看所有已启动的服务
```

开启防火墙22端口

```shell
iptables -I INPUT -p tcp --dport 22 -j accept
```

如果仍然有问题，就可能是SELinux导致的

关闭SElinux：

修改`/etc/selinux/config`文件中的`SELINUX=""`为disabled，然后重启。

彻底关闭防火墙：

```shell
sudo systemctl status firewalld.service
sudo systemctl stop firewalld.service          
sudo systemctl disable firewalld.service
```



