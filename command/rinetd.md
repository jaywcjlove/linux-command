rinetd
===

Linux下端口映射工具

## 补充说明

Linux下端口映射工具, 用法示例 https://help.aliyun.com/document_detail/43850.html

### 语法

```
# 安装
wget http://www.boutell.com/rinetd/http/rinetd.tar.gz
tar zxvf rinetd.tar.gz
make
make install

# 配置
vi /etc/rinetd.conf
0.0.0.0 8080 172.19.94.3 8080 # 绑定地址 -> 映射地址
logfile /var/log/rinetd.log
cat /etc/rinetd.conf

# 管理
rinetd # 启动
echo rinetd >>/etc/rc.local # 自启动
pkill rinetd # 关闭
netstat -anp | grep 8080 # 查看服务是否正常
telnet rinetd-machine-ip 8080 # 本地验证是否正常
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
