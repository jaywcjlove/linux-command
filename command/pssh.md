pssh
===

批量管理执行

## 补充说明

**pssh命令** 是一个python编写可以在多台服务器上执行命令的工具，同时支持拷贝文件，是同类工具中很出色的，类似pdsh，个人认为相对pdsh更为简便，使用必须在各个服务器上配置好密钥认证访问。

### 安装pssh  

在CentOS系统环境下，介绍yum的安装和源码安装的方式：

 **yum方法** 

```shell
yum install pssh
```

 **编译安装** 

```shell
wget http://parallel-ssh.googlecode.com/files/pssh-2.3.1.tar.gz
tar xf pssh-2.3.1.tar.gz
cd pssh-2.3.1/
python setup.py install
```

### 选项  

```shell
--version：查看版本
--help：查看帮助，即此信息
-h：主机文件列表，内容格式”[user@]host[:port]”
-H：主机字符串，内容格式”[user@]host[:port]”
-：登录使用的用户名
-p：并发的线程数【可选】
-o：输出的文件目录【可选】
-e：错误输入文件【可选】
-t：TIMEOUT 超时时间设置，0无限制【可选】
-O：SSH的选项
-v：详细模式
-A：手动输入密码模式
-x：额外的命令行参数使用空白符号，引号，反斜线处理
-X：额外的命令行参数，单个参数模式，同-x
-i：每个服务器内部处理信息输出
-P：打印出服务器返回信息
```

### 实例  

获取每台服务器的uptime：

```shell
# pssh -h ip.txt -i uptime
[1] 11:15:03 [SUCCESS] Mar.mars.he
11:15:11 up 4 days, 16:25,  1 user,  load average: 0.00, 0.00, 0.00
[2] 11:15:03 [SUCCESS] Jan.mars.he
11:15:12 up 3 days, 23:26,  0 users,  load average: 0.00, 0.00, 0.00
[3] 11:15:03 [SUCCESS] Feb.mars.he
11:15:12 up 4 days, 16:26,  2 users,  load average: 0.08, 0.02, 0.01
```

查看每台服务器上mysql复制IO/SQL线程运行状态信息：

```shell
# pssh -h IP.txt -i "/usr/local/mysql/bin/mysql -e 'show slave status \G'"|grep Running:
             Slave_IO_Running: yes
            Slave_SQL_Running: Yes
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
```

保存每台服务器运行的结果：

```shell
# pssh -h IP.txt -i -o /tmp/pssh/ uptime
[1] 11:19:47 [SUCCESS] Feb.mars.he
11:19:55 up 4 days, 16:31,  2 users,  load average: 0.02, 0.03, 0.00
[2] 11:19:47 [SUCCESS] Jan.mars.he
11:19:56 up 3 days, 23:30,  0 users,  load average: 0.01, 0.00, 0.00
[3] 11:19:47 [SUCCESS] Mar.mars.he
11:19:56 up 4 days, 16:30,  1 user,  load average: 0.00, 0.00, 0.00
```

我们来看一下/tmp/pssh/下的文件及其内容

```shell
# ll /tmp/pssh/
总用量 12
-rw-r--r--. 1 root root 70 12月  1 11:19 Feb.mars.he
-rw-r--r--. 1 root root 70 12月  1 11:19 Jan.mars.he
-rw-r--r--. 1 root root 69 12月  1 11:19 Mar.mars.he

# cat /tmp/pssh/*
11:19:55 up 4 days, 16:31,  2 users,  load average: 0.02, 0.03, 0.00
11:19:56 up 3 days, 23:30,  0 users,  load average: 0.01, 0.00, 0.00
11:19:56 up 4 days, 16:30,  1 user,  load average: 0.00, 0.00, 0.00
```

上面介绍的是pssh命令很少的一部分，大家可以将其用到适合自己的场景，发挥它的最大功效。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->