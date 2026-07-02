nginx
===

高性能HTTP服务器和反向代理服务器

## 补充说明

**nginx命令** 是一个高性能的HTTP和反向代理web服务器，同时也提供了IMAP/POP3/SMTP服务。nginx因它的稳定性、丰富的功能集、简单的配置文件和低系统资源消耗而闻名。

nginx采用事件驱动的异步架构，能够支持高并发连接，内存消耗低，非常适合构建高性能的Web平台。

### 安装

```shell# Ubuntu/Debian
apt-get update
apt-get install nginx

# CentOS/RHEL
yum install epel-release
yum install nginx

# 启动nginx服务
systemctl start nginx

# 设置开机自启
systemctl enable nginx

# 查看nginx版本
nginx -v
`

### 语法

`shellnginx [options]
`

### 常用选项

```shell-c --configuration-file   指定配置文件
-t --test-config          测试配置文件语法
-T --dump-config          转储配置文件
-s --signal               发送信号（stop/reload/reopen/restart）
-g --directive            全局指令
-v --version              显示nginx版本
-V --version-show         显示版本和编译选项
`

### 实例

```shell# 启动nginx
nginx

# 停止nginx
nginx -s stop

# 优雅停止nginx（等待请求处理完毕）
nginx -s quit

# 重新加载配置（不中断服务）
nginx -s reload

# 重新打开日志文件
nginx -s reopen

# 测试配置文件语法
nginx -t

# 测试配置文件并显示详细信息
nginx -T

# 指定配置文件启动
nginx -c /etc/nginx/custom.conf

# 查看nginx版本
nginx -v

# 查看nginx编译选项
nginx -V

# 查看nginx进程
ps aux | grep nginx

# 查看nginx监听端口
netstat -tlnp | grep nginx

# 查看nginx访问日志
tail -f /var/log/nginx/access.log

# 查看nginx错误日志
tail -f /var/log/nginx/error.log

# 创建简单的HTTP服务器
nginx -g 'daemon off;'

# 重新加载配置并测试
nginx -t && nginx -s reload

# 查看nginx状态模块信息（需启用stub_status）
curl http://localhost/nginx_status

# 配置HTTPS（需SSL证书）
# 在nginx.conf中添加：
# server {
#     listen 443 ssl;
#     server_name example.com;
#     ssl_certificate /path/to/cert.pem;
#     ssl_certificate_key /path/to/key.pem;
# }

# 反向代理配置示例
# location / {
#     proxy_pass http://backend_server;
#     proxy_set_header Host System.Management.Automation.Internal.Host.InternalHost;
#     proxy_set_header X-Real-IP ;
# }

# 负载均衡配置示例
# upstream backend {
#     server backend1.example.com;
#     server backend2.example.com;
#     server backend3.example.com;
# }
# location / {
#     proxy_pass http://backend;
# }

# Gzip压缩配置
# gzip on;
# gzip_types text/plain application/json application/javascript text/css;

# URL重写配置
# rewrite ^/old-page$ /new-page permanent;

# 虚拟主机配置
# server {
#     listen 80;
#     server_name www.example.com;
#     root /var/www/example;
# }

# 配置静态文件缓存
# location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
#     expires 30d;
#     add_header Cache-Control "public, immutable";
# }

# 限制请求速率
# limit_req_zone  zone=one:10m rate=1r/s;
# location / {
#     limit_req zone=one burst=5;
# }

# 配置HTTP/2
# listen 443 ssl http2;

# 配置WebSocket代理
# location /ws {
#     proxy_pass http://websocket_backend;
#     proxy_http_version 1.1;
#     proxy_set_header Upgrade ;
#     proxy_set_header Connection "upgrade";
# }

# 查看nginx配置包含的文件
nginx -T | grep include

# 测试特定配置片段
# 创建测试配置文件
cat > /tmp/test.conf <<EOF
server {
    listen 8080;
    server_name localhost;
    location / {
        return 200 "OK";
    }
}
EOF
nginx -t -c /tmp/test.conf
`

### 配置文件结构

```shell/etc/nginx/                    # nginx配置目录
├── nginx.conf                 # 主配置文件
├── conf.d/                    # 额外配置目录
│   └── *.conf                 # 额外的配置文件
├── sites-available/           # 可用的站点配置
├── sites-enabled/             # 启用的站点配置
├── mime.types                 # MIME类型定义
├── fastcgi.conf               # FastCGI配置
├── scgi_params                # SCGI参数
└── uwsgi_params               # uWSGI参数

/var/log/nginx/                # 日志目录
├── access.log                 # 访问日志
└── error.log                  # 错误日志

/var/www/                      # Web根目录
`

### 常用配置指令

```shell# 基本配置
worker_processes auto;        # 工作进程数
worker_connections 1024;       # 每个进程的最大连接数
pid /run/nginx.pid;           # PID文件位置

# HTTP配置
keepalive_timeout 65;         # 保持连接超时时间
client_max_body_size 10m;     # 客户端最大请求体大小
server_tokens off;            # 隐藏nginx版本信息

# 日志格式
log_format main ' -  [] "" '
                '  "" '
                '"" ""';
access_log /var/log/nginx/access.log main;
error_log /var/log/nginx/error.log warn;
`

### 性能优化建议

```shell# 1. 调整worker进程数
worker_processes auto;  # 自动设置为CPU核心数

# 2. 使用epoll事件模型（Linux）
# 在nginx.conf的events块中配置
events {
    use epoll;
    worker_connections 65535;
}

# 3. 启用sendfile
http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
}

# 4. 配置缓存
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m max_size=1g;

# 5. 启用gzip压缩
gzip on;
gzip_types text/plain application/json application/javascript text/css;
gzip_min_length 1000;
`

### 注意

1. nginx配置文件修改后需要执行
ginx -s reload重新加载配置。
2. 使用
ginx -t可以测试配置文件语法是否正确。
3. nginx采用主从进程模型，master进程管理worker进程。
4. 生产环境建议隐藏nginx版本信息以提高安全性。
5. 合理配置worker_connections和worker_processes可以显著提升性能。
6. 使用SSL证书时确保证书文件权限设置正确（600）。
7. 定期清理和维护日志文件，避免磁盘空间耗尽。

### 相关命令

- pache2 — Apache HTTP服务器
- caddy — 自动HTTPS的Web服务器
- haproxy — TCP/HTTP负载均衡器
- 	raefik — 现代HTTP反向代理

### 参考链接

- [Nginx官方文档](https://nginx.org/en/docs/)
- [Nginx配置指南](https://nginx.org/en/docs/configguide.html)
- [Nginx性能优化](https://nginx.org/en/docs/performance_metrics.html)
