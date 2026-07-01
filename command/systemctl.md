systemctl
===

Systemd服务管理器

## 补充说明

**systemctl命令** 是systemd系统的核心控制工具，用于管理系统服务和系统状态。systemd是Linux系统中最早的初始化系统（init system），systemctl可以启动、停止、重启服务，查看服务状态，管理系统运行级别等。

systemd替代了传统的SysVinit，提供了更快的系统启动速度、并行启动服务、按需启动守护进程等功能。在现代Linux发行版（如CentOS 7+、Ubuntu 16.04+、Debian 8+）中，systemd已成为默认的init系统。

### 安装

```shell
# systemd通常是系统的基础组件，大多数Linux发行版已预装
# 查看systemd版本
systemctl --version

# 在容器环境中可能需要安装
# CentOS/RHEL
yum install systemd

# Ubuntu/Debian
apt-get install systemd
```

### 语法

```shell
systemctl [OPTIONS...] COMMAND [NAME...]
```

### 常用命令

```shell
start      启动服务
stop       停止服务
restart    重启服务
reload     重新加载服务配置
enable     设置服务开机自启
disable    取消服务开机自启
status     查看服务状态
is-active  检查服务是否正在运行
is-enabled 检查服务是否启用开机自启
list-units 列出单元
list-unit-files 列出单元文件
daemon-reload 重新加载systemd配置
list-dependencies 列出依赖
kill       向服务进程发送信号
cat        显示单元文件内容
edit       编辑单元文件
get-default 查看默认目标
set-default 设置默认目标
isolate    切换到指定目标
help       获取帮助
```

### 实例

```shell
# 查看nginx服务状态
systemctl status nginx

# 启动nginx服务
systemctl start nginx

# 停止nginx服务
systemctl stop nginx

# 重启nginx服务
systemctl restart nginx

# 重新加载nginx配置（不中断服务）
systemctl reload nginx

# 设置nginx开机自启
systemctl enable nginx

# 取消nginx开机自启
systemctl disable nginx

# 查看nginx是否开机自启
systemctl is-enabled nginx

# 查看nginx是否正在运行
systemctl is-active nginx

# 查看所有已启用的服务
systemctl list-unit-files --type=service --state=enabled

# 查看所有服务状态
systemctl list-units --type=service --all

# 查看失败的服务
systemctl --failed

# 重新加载systemd配置
systemctl daemon-reload

# 查看服务的依赖关系
systemctl list-dependencies nginx

# 查看服务的详细配置
systemctl cat nginx

# 编辑服务配置
systemctl edit nginx

# 创建自定义服务
# 创建服务文件
cat > /etc/systemd/system/myapp.service <<EOF
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/myapp
Restart=on-failure

[Install]
WantedBy=multi-user.target
EOF

# 重载配置
systemctl daemon-reload

# 启动服务
systemctl start myapp

# 设置开机自启
systemctl enable myapp

# 查看系统运行目标
systemctl get-default

# 设置默认目标为图形界面
systemctl set-default graphical.target

# 设置默认目标为命令行模式
systemctl set-default multi-user.target

# 立即切换到命令行模式
systemctl isolate multi-user.target

# 查看系统日志（与journalctl配合）
journalctl -u nginx -f

# 查看特定时间的日志
journalctl -u nginx --since "2024-01-01 00:00:00"

# 查看今天的日志
journalctl -u nginx --today

# 查看上次启动以来的日志
journalctl -u nginx -b -1

# 清空日志
journalctl --vacuum-time=1s

# 查看服务资源使用情况
systemctl status --type=service

# 列出所有单元
systemctl list-units

# 列出所有单元文件
systemctl list-unit-files

# 杀死服务的所有子进程
systemctl kill nginx --kill-who=all

# 发送特定信号
systemctl signal nginx SIGUSR1

# 查看服务的环境变量
systemctl show nginx --property=Environment

# 查看服务的属性
systemctl show nginx

# 查看服务的依赖树
systemctl list-dependencies --tree

# 临时禁用服务（不删除符号链接）
systemctl mask nginx

# 取消屏蔽服务
systemctl unmask nginx

# 查看systemd版本
systemctl --version

# 查看systemd状态摘要
systemctl --state=running

# 查看系统运行时间
systemd-analyze

# 查看启动时间分析
systemd-analyze blame

# 查看启动时间图
systemd-analyze critical-chain

# 生成服务文件模板
systemd-analyze security nginx
```

### 系统运行目标（Targets）

```shell
# 常见的运行目标
multi-user.target       # 多用户命令行模式（类似runlevel 3）
graphical.target        # 图形界面模式（类似runlevel 5）
reboot.target           # 重启
poweroff.target         # 关机
rescue.target           # 救援模式
emergency.target        # 紧急模式
```

### 服务文件位置

```shell
/etc/systemd/system/      # 管理员创建的服务文件
/usr/lib/systemd/system/  # 安装包提供的服务文件
/run/systemd/system/      # 运行时创建的服务文件
```

### 注意

1. systemctl命令需要root权限才能管理服务，普通用户只能查看自己用户单元的状态。
2. 修改服务文件后，需要执行`systemctl daemon-reload`重新加载配置。
3. `systemctl restart`会先停止再启动服务，可能导致短暂中断；`systemctl reload`只重新加载配置。
4. 使用`systemctl enable`设置开机自启，但不会立即启动服务，需要配合`start`命令。
5. `systemctl mask`比`disable`更彻底，会创建指向`/dev/null`的符号链接，防止手动启动。
6. 可以通过`journalctl -u <service>`查看服务的详细日志。
7. systemd服务文件使用INI格式，包含[Unit]、[Service]、[Install]三个主要部分。

### 相关命令

- `journalctl` — 查看systemd日志
- `systemd-analyze` — 分析系统启动性能
- `timedatectl` — 管理系统时间和日期
- `loginctl` — 管理登录会话

### 参考链接

- [systemd官方文档](https://www.freedesktop.org/wiki/Software/systemd/)
- [systemctl手册](https://www.freedesktop.org/software/systemd/man/systemctl.html)
- [systemd服务文件配置](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
