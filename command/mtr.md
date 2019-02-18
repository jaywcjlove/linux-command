mtr
===

Linux中非常棒的网络连通性判断工具。

## 补充说明

**mtr命令** 它结合了ping, traceroute,nslookup 的相关特性。。

### 语法  

```
mtr(选项)(参数)
```

### 选项  

```
mtr -h  #提供帮助命令
mtr -v  #显示mtr的版本信息
mtr -r  #已报告模式显示
mtr -s  #用来指定ping数据包的大小
mtr --no-dns  #不对IP地址做域名解析
mtr -a  #来设置发送数据包的IP地址 这个对一个主机由多个IP地址是有用的
mtr -i  #使用这个参数来设置ICMP返回之间的要求默认是1秒
mtr -4  #IPv4
mtr -6  #IPv6
```
### 参数  
IP 或域名


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
