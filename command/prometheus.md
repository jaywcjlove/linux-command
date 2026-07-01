prometheus
===

监控系统与告警工具

## 补充说明

**prometheus命令** 是CNCF旗下的开源监控和告警工具。Prometheus采用Pull模型采集指标数据，支持多维数据模型、灵活的查询语言和高效的存储架构。

Prometheus是云原生环境下事实标准的监控系统，与Kubernetes深度集成，广泛应用于微服务架构的监控。

### 安装

`shell
# 从官方下载
version=2.50.0
wget https://github.com/prometheus/prometheus/releases/download/v/prometheus-.linux-amd64.tar.gz
tar xzf prometheus-.linux-amd64.tar.gz
cd prometheus-.linux-amd64/

# 安装为系统服务
sudo cp prometheus /usr/local/bin/
sudo cp promtool /usr/local/bin/
sudo mkdir -p /etc/prometheus /var/lib/prometheus
sudo cp -r consoles/ console_libraries/ /etc/prometheus/
sudo cp prometheus.yml /etc/prometheus/

# 创建systemd服务文件
sudo tee /etc/systemd/system/prometheus.service > /dev/null <<EOF
[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
User=root
ExecStart=/usr/local/bin/prometheus \
    --config.file=/etc/prometheus/prometheus.yml \
    --storage.tsdb.path=/var/lib/prometheus/ \
    --web.console.templates=/etc/prometheus/consoles \
    --web.console.libraries=/etc/prometheus/console_libraries \
    --web.listen-address=0.0.0.0:9090

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable prometheus
sudo systemctl start prometheus
`

### 语法

`shell
prometheus [options]
promtool [command]
`

### 常用选项

`shell
--config.file            Prometheus配置文件路径
--storage.tsdb.path      存储路径
--storage.tsdb.retention.time  数据保留时间
--storage.tsdb.retention.size    最大存储大小
--web.listen-address     Web监听地址
--web.enable-lifecycle   启用生命周期管理API
--web.enable-admin-api   启用Admin API
--log.level              日志级别
--log.format             日志格式
`

### 实例

`shell
# 启动Prometheus
prometheus --config.file=prometheus.yml

# 指定存储路径
prometheus --storage.tsdb.path=/data/prometheus

# 设置数据保留30天
prometheus --storage.tsdb.retention.time=30d

# 查看Prometheus状态
curl http://localhost:9090/-/healthy

# 查看目标状态
curl http://localhost:9090/api/v1/targets

# 执行PromQL查询
curl 'http://localhost:9090/api/v1/query?query=up'

# 查看即时查询结果
curl 'http://localhost:9090/api/v1/query?query=node_cpu_seconds_total&time=2024-01-01T00:00:00Z'

# 查看范围查询结果
curl 'http://localhost:9090/api/v1/query_range?query=up&start=2024-01-01&end=2024-01-02&step=1m'

# 查看时间线
curl 'http://localhost:9090/api/v1/series?match[]=up'

# 查看标签值
curl 'http://localhost:9090/api/v1/label/job/values'

# 重载配置（需启用生命周期API）
curl -X POST http://localhost:9090/-/reload

# 使用promtool检查配置
promtool check config prometheus.yml

# 使用promtool检查规则文件
promtool check rules rules.yml

# 测试PromQL查询
promtool query instant http://localhost:9090 up

# 查看范围查询
promtool query range http://localhost:9090 'up{job="prometheus"}' --start=2024-01-01 --end=2024-01-02

# 生成TSDB快照
curl -X POST http://localhost:9090/api/v1/admin/tsdb/snapshot

# 删除旧快照
curl -X DELETE 'http://localhost:9090/api/v1/admin/tsdb/snapshot?name=snapshot_name'

# 清理TSDB数据
curl -X DELETE 'http://localhost:9090/api/v1/admin/tsdb/cleanup_ttl'

# 查看存储块信息
curl http://localhost:9090/api/v1/status/tsdb

# 导出指标格式
curl http://localhost:9090/metrics

# 使用Prometheus命令行工具
prometheus --help
prometheus --version

# 查看帮助信息
promtool --help
promtool check metrics metrics_file.txt
`

### 配置文件示例

`yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']

rule_files:
  - 'alerts.yml'

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'node_exporter'
    static_configs:
      - targets: ['node-exporter:9100']

  - job_name: 'cadvisor'
    static_configs:
      - targets: ['cadvisor:8080']
`

### 常用PromQL查询

`shell
# 查看可用指标
up

# 查看特定指标
node_cpu_seconds_total

# 按标签过滤
node_cpu_seconds_total{mode="idle"}

# 聚合计算
sum(node_cpu_seconds_total{mode="idle"})

# 速率计算
rate(node_network_receive_bytes_total[5m])

# 时间窗口计算
increase(prometheus_tsdb_head_chunks_created_total[1h])

# 百分比计算
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))

# 同比计算
rate(http_requests_total[1h]) / rate(http_requests_total[1h] offset 1d)
`

### 架构组件

`shell
# Prometheus核心组件
prometheus          # 时间序列数据库和查询引擎
node-exporter       # 主机指标收集器
cadvisor            # 容器指标收集器
alertmanager        # 告警管理器
grafana             # 可视化面板
pushgateway         # 短生命周期作业推送网关
blackbox-exporter   # 黑盒监控导出器
`

### 注意

1. Prometheus采用Pull模型，需要配置正确的scrape_targets。
2. 数据存储默认在内存和磁盘混合模式，需要合理配置retention参数。
3. PromQL是Prometheus的查询语言，需要学习特定的语法。
4. 监控大量指标会影响性能，需要合理设计指标标签。
5. 使用远端存储（如Cortex、Thanos）可以解决长期存储问题。
6. 生产环境建议配置高可用部署和备份策略。

### 相关命令

- grafana-server — Grafana可视化服务器
- lertmanager — Prometheus告警管理器
- 
ode-exporter — 主机指标导出器
- cadvisor — 容器指标导出器

### 参考链接

- [Prometheus官方文档](https://prometheus.io/docs/)
- [PromQL教程](https://prometheus.io/docs/prometheus/latest/querying/)
- [Prometheus架构](https://prometheus.io/docs/concepts/architecture/)
