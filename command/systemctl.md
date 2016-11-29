systemctl
===

系统服务管理器指令

## 补充说明

**systemctl命令** 是系统服务管理器指令，它实际上将 service 和 chkconfig 这两个命令组合到一起。

<table>

<tbody>

<tr>

<td>任务</td>

<td>旧指令</td>

<td>新指令</td>

</tr>

<tr>

<td>使某服务自动启动</td>

<td>chkconfig --level 3 httpd on</td>

<td>systemctl enable httpd.service</td>

</tr>

<tr>

<td>使某服务不自动启动</td>

<td>chkconfig --level 3 httpd off</td>

<td>systemctl disable httpd.service</td>

</tr>

<tr>

<td>检查服务状态</td>

<td>service httpd status</td>

<td>systemctl status httpd.service （服务详细信息） systemctl is-active httpd.service （仅显示是否 Active)</td>

</tr>

<tr>

<td>显示所有已启动的服务</td>

<td>chkconfig --list</td>

<td>systemctl list-units --type=service</td>

</tr>

<tr>

<td>启动某服务</td>

<td>service httpd start</td>

<td>systemctl start httpd.service</td>

</tr>

<tr>

<td>停止某服务</td>

<td>service httpd stop</td>

<td>systemctl stop httpd.service</td>

</tr>

<tr>

<td>重启某服务</td>

<td>service httpd restart</td>

<td>systemctl restart httpd.service</td>

</tr>

</tbody>

</table>

### 实例  

1.启动nfs服务

```
systemctl start nfs-server.service
```

2.设置开机自启动

```
systemctl enable nfs-server.service
```

3.停止开机自启动

```
systemctl disable nfs-server.service
```

4.查看服务当前状态

```
systemctl status nfs-server.service
```

5.重新启动某服务

```
systemctl restart nfs-server.service
```

6.查看所有已启动的服务

```
systemctl list -units --type=service
```

开启防火墙22端口

```
iptables -I INPUT -p tcp --dport 22 -j accept
```

如果仍然有问题，就可能是SELinux导致的

关闭SElinux：

修改`/etc/selinux/config`文件中的`SELINUX=””`为disabled，然后重启。

彻底关闭防火墙：

```
sudo systemctl status firewalld.service
sudo systemctl stop firewalld.service          
sudo systemctl disable firewalld.service
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->