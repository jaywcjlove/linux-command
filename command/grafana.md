grafana
===

可视化监控和数据展示平台

## 补充说明

**grafana命令** 是一个开源的可视化和监控平台，支持多种数据源，包括Prometheus、InfluxDB、Elasticsearch等。Grafana提供强大的仪表板功能，可以帮助用户直观地分析和监控数据。

Grafana广泛用于IT监控、应用性能管理、日志分析和业务智能等领域。

### 安装

```shell# Ubuntu/Debian
wget -q -O - https://apt.grafana.com/gpg.key | sudo apt-key add -
echo "deb https://apt.grafana.com stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list
sudo apt-get update
sudo apt-get install grafana

# CentOS/RHEL
sudo tee /etc/yum.repos.d/grafana.repo << EOF
[grafana]
name=Grafana
baseurl=https://rpm.grafana.com
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://rpm.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
EOF
sudo yum install grafana

# macOS (Homebrew)
brew install grafana

# Docker方式
docker run -d --name=grafana -p 3000:3000 grafana/grafana

# 验证安装
grafana-server --version
`

### 语法

`shellgrafana-server [options]
grafana-cli [options] command [arguments]
`

### 常用选项

```shell--config       指定配置文件路径
--homepath     指定主路径
--packaging    打包类型（rpm/deb/docker）
--cfg          配置键值对
--version      显示版本
--help         显示帮助
`

### 实例

```shell# 启动Grafana服务器
grafana-server

# 指定配置启动
grafana-server --config=/etc/grafana/grafana.ini

# 指定HTTP端口
grafana-server --http-port=3000

# 指定日志级别
grafana-server --log-level=debug

# 查看Grafana版本
grafana-server --version

# 安装插件
grafana-cli plugins install grafana-piechart-panel
grafana-cli plugins install grafana-clock-panel
grafana-cli plugins install grafana-worldmap-panel

# 列出已安装的插件
grafana-cli plugins list-remote

# 更新所有插件
grafana-cli plugins update-all

# 删除插件
grafana-cli plugins remove <plugin-id>

# 安装特定版本的插件
grafana-cli plugins install <plugin-id> <version>

# 同步插件
grafana-cli plugins install grafana-drills-app

# 启动时自动安装插件
grafana-server -homepath /usr/share/grafana

# 配置数据源
# 通过API添加Prometheus数据源
curl -X POST http://admin:admin@localhost:3000/api/datasources \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Prometheus",
    "type": "prometheus",
    "url": "http://localhost:9090",
    "access": "proxy",
    "isDefault": true
  }'

# 列出所有数据源
curl http://admin:admin@localhost:3000/api/datasources

# 删除数据源
curl -X DELETE http://admin:admin@localhost:3000/api/datasources/1

# 导入仪表板
curl -X POST http://admin:admin@localhost:3000/api/dashboards/import \
  -H "Content-Type: application/json" \
  -d '{
    "dashboardId": 1860,
    "datasource": "Prometheus"
  }'

# 导出仪表板
curl http://admin:admin@localhost:3000/api/dashboards/db/my-dashboard

# 备份整个Grafana
# 复制数据库文件
cp /var/lib/grafana/grafana.db backup.grafana.db

# 查看日志
tail -f /var/log/grafana/grafana.log

# 检查服务状态
systemctl status grafana-server

# 重启服务
systemctl restart grafana-server

# 禁用服务
systemctl disable grafana-server

# 启用服务
systemctl enable grafana-server

# 通过环境变量配置
GRAFANA_ADMIN_PASSWORD=admin123 grafana-server

# 使用Docker运行
docker run -d -p 3000:3000 --name=grafana grafana/grafana

# 挂载数据卷
docker run -d -p 3000:3000 -v grafana-storage:/var/lib/grafana grafana/grafana

# 添加环境变量
docker run -d -p 3000:3000 -e GF_SECURITY_ADMIN_PASSWORD=secret grafana/grafana

# 使用配置文件
docker run -d -p 3000:3000 -v /path/to/grafana.ini:/etc/grafana/grafana.ini grafana/grafana

# 配置SMTP邮件通知
# 在grafana.ini中添加：
[smtp]
enabled = true
host = smtp.gmail.com:587
user = myemail@gmail.com
password = password
from_address = myemail@gmail.com

# 配置LDAP认证
# 在grafana.ini中添加：
[ldap]
enabled = true
config_file = /etc/grafana/ldap.toml
allow_sign_up = true

# 配置OAuth（Google/GitHub）
# 在grafana.ini中添加：
[auth.google]
enabled = true
client_id = your_client_id
client_secret = your_client_secret
scopes = openid profile email
auth_url = https://accounts.google.com/o/oauth2/auth
token_url = https://accounts.google.com/o/oauth2/token
api_url = https://www.googleapis.com/oauth2/v1/userinfo

# 使用API创建用户
curl -X POST http://admin:admin@localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New User",
    "login": "newuser",
    "email": "newuser@example.com",
    "password": "password123"
  }'

# 使用API修改用户
curl -X PUT http://admin:admin@localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Updated Name",
    "email": "updated@example.com"
  }'

# 使用API删除用户
curl -X DELETE http://admin:admin@localhost:3000/api/admin/users/1

# 使用API创建团队
curl -X POST http://admin:admin@localhost:3000/api/teams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Development Team",
    "email": "dev@example.com"
  }'

# 使用API添加团队成员
curl -X POST http://admin:admin@localhost:3000/api/teams/1/users/2

# 使用API创建告警规则
curl -X POST http://admin:admin@localhost:3000/api/alert-rules \
  -H "Content-Type: application/json" \
  -d '{
    "title": "High CPU Usage",
    "query": {...},
    "eval_interval": "30s",
    "annotations": {...},
    "notifications": [...]
  }'

# 查看告警规则
curl http://admin:admin@localhost:3000/api/alert-rules

# 删除告警规则
curl -X DELETE http://admin:admin@localhost:3000/api/alert-rules/1

# 配置通知渠道
curl -X POST http://admin:admin@localhost:3000/api/alert-notifiers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Slack Notifications",
    "type": "slack",
    "settings": {
      "url": "https://hooks.slack.com/services/xxx"
    }
  }'

# 导出所有仪表板
for dashboard in ; do
  curl -o ".json" http://admin:admin@localhost:3000/api/dashboards/uid/done

# 批量导入仪表板
for file in *.json; do
  curl -X POST http://admin:admin@localhost:3000/api/dashboards/db \
    -H "Content-Type: application/json" \
    -d @done

# 配置备份计划
# 使用cron定期备份
0 2 * * * cp /var/lib/grafana/grafana.db /backup/grafana-\.db

# 查看插件市场
grafana-cli plugins list-remote | grep -i monitoring

# 安装官方推荐插件
grafana-cli plugins install grafana-kubernetes-app
grafana-cli plugins install grafana-clock-panel
grafana-cli plugins install grafana-piechart-panel

# 配置资源限制
# 在grafana.ini中：
[server]
max_header_size = 32768
content_security_policy = true
content_security_policy_template = """..."""

# 启用健康检查端点
curl http://localhost:3000/health

# 查看系统信息
curl http://localhost:3000/api/health

# 配置日志轮转
# 在grafana.ini中：
[log]
mode = file
level = info
rotations = 7
`

### 配置文件位置

```shell/etc/grafana/grafana.ini    # 主配置文件
/etc/grafana/ldap.toml      # LDAP配置
/var/lib/grafana/           # 数据存储目录
/var/log/grafana/           # 日志目录
/usr/share/grafana/         # 安装目录
`

### 常用数据源

```shell# 支持的数据源类型
- Prometheus
- InfluxDB
- Elasticsearch
- Graphite
- CloudWatch
- MySQL
- PostgreSQL
- Jaeger
- Loki
- Zipkin
- Azure Monitor
- Google Cloud Monitoring
- Datadog
`

### 注意

1. Grafana默认监听3000端口，访问http://localhost:3000使用admin/admin登录。
2. 生产环境务必修改默认密码并启用HTTPS。
3. 使用API时需要配置适当的认证令牌。
4. 插件安装需要重启Grafana服务才能生效。
5. 定期备份grafana.db数据库文件。
6. 配置合适的日志轮转策略避免磁盘占满。

### 相关命令

- prometheus — 监控系统
- lertmanager — 告警管理器
- loki — 日志聚合系统
- jaeger — 分布式追踪系统

### 参考链接

- [Grafana官方文档](https://grafana.com/docs/)
- [Grafana安装指南](https://grafana.com/docs/grafana/latest/setup-grafana/installation/)
- [Grafana插件开发](https://grafana.com/docs/grafana/latest/developers/plugins/)
