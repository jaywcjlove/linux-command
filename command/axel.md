axel
===

多线程下载工具

## 补充说明

**axel** 是Linux下一个不错的HTTP/ftp高速下载工具。支持多线程下载、断点续传，且可以从多个地址或者从一个地址的多个连接来下载同一个文件。适合网速不给力时多线程下载提高下载速度。比如在国内VPS或服务器上下载lnmp一键安装包用Axel就比wget快。

### 安装  

CentOS安装Axel：

目前yum源上没有Axel，我们可以到 http://pkgs.repoforge.org/axel/ 下载rpm包安装。

32位CentOS执行下面命令：

```shell
wget -c http://pkgs.repoforge.org/axel/axel-2.4-1.el5.rf.i386.rpm
rpm -ivh axel-2.4-1.el5.rf.i386.rpm
```

64位CentOS执行下面命令：

```shell
wget -c http://pkgs.repoforge.org/axel/axel-2.4-1.el5.rf.x86_64.rpm
rpm -ivh axel-2.4-1.el5.rf.x86_64.rpm
```

Debian/Ubuntu安装Axel：

```shell
apt-get install axel
```

### 语法  

```shell
axel [options] url1 [url2] [url...]
```

### 选项  

```shell
--max-speed=x , -s x         # 最高速度x
--num-connections=x , -n x   # 连接数x
--output=f , -o f            # 下载为本地文件f
--search[=x] , -S [x]        # 搜索镜像
--header=x , -H x            # 添加头文件字符串x（指定 HTTP header）
--user-agent=x , -U x        # 设置用户代理（指定 HTTP user agent）
--no-proxy ， -N             # 不使用代理服务器
--quiet ， -q                # 静默模式
--verbose ，-v               # 更多状态信息
--alternate ， -a            # Alternate progress indicator
--help ，-h                  # 帮助
--version ，-V               # 版本信息
```

### 实例  

如下载lnmp安装包指定10个线程，存到 `/tmp/`：

```shell
axel -n 10 -o /tmp/ http://www.jsdig.com/lnmp.tar.gz
```

如果下载过程中下载中断可以再执行下载命令即可恢复上次的下载进度。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->