supervisord
===

配置后台服务/常驻进程的工具

## 实例

```
# supervisord
apt-get install supervisor
[program:app]
command=/usr/bin/gunicorn -w 1 wsgiapp:application
directory=/srv/www
user=www-data

supervisord: 启动 supervisor 服务
supervisorctl start app
supervisorctl stop app
supervisorctl reload # 修改/添加配置文件需要执行这个
```