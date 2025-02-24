ufw
===  

ubuntu防火墙管理工具

## 概要

```shell
sudo ufw [选项] [规则/命令]
```

## 用途

- 管理Ubuntu系统防火墙规则，简化`iptables`操作。
- 启用或禁用防火墙，查看当前防火墙状态。
- 快速配置允许/拒绝端口、服务或特定IP的访问。

## 参数

### 常用操作命令

- `enable`: 启用防火墙并设置开机自启。
- `disable`: 关闭防火墙。
- `reload`: 重新加载防火墙规则（不中断现有连接）。
- `reset`: 重置所有规则到初始状态。
- `allow <rule>`: 允许指定规则（如端口、服务）。
- `deny <rule>`: 拒绝指定规则。
- `status`: 显示防火墙状态和规则列表。

### 规则格式

- `<port>`: 端口号（如 `22`、`80/tcp`）。
- `<protocol>`: 协议类型（`tcp` 或 `udp`）。
- `comment <text>`: 为规则添加注释（需配合 `allow`/`deny` 使用）。

### 选项

- `--dry-run`: 仅显示规则变更，不实际应用。

------

## 返回值

- 成功执行返回 `0`。
- 错误或无效参数返回非零值。

------

## 示例

### 基础操作

```
# 启用防火墙
sudo ufw enable

# 关闭防火墙
sudo ufw disable

# 查看防火墙状态
sudo ufw status
```

### 规则配置

```
# 允许SSH默认端口（22/tcp）
sudo ufw allow ssh

# 允许TCP协议的8080端口并添加注释
sudo ufw allow 8080/tcp comment "Web Server"

# 拒绝来自192.168.1.5的访问
sudo ufw deny from 192.168.1.5

# 拒绝UDP协议的53端口
sudo ufw deny 53/udp
```

### 高级操作

```
# 显示带编号的规则列表（便于删除）
sudo ufw status numbered

# 删除第3条规则
sudo ufw delete 3

# 重置所有规则
sudo ufw reset
```

------

## 注意

1. **权限要求**：需使用 `sudo` 执行命令。
2. **默认策略**：首次启用时默认阻止所有入站流量，允许所有出站流量。
3. **规则优先级**：
   规则按顺序匹配，先拒绝后允许可能导致冲突
4. **日志记录**：
   可通过 `sudo ufw logging on` 启用日志，日志路径为 `/var/log/ufw.log`
5. **服务名称支持**：
   支持 `/etc/services` 中定义的服务名（如 `http`、`ssh`）
