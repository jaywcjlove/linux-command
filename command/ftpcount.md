ftpcount
===

显示目前已FTP登入的用户人数

## 补充说明

**ftpcount命令** 用于显示目前已FTP登入的用户人数。执行这项指令可得知目前用FTP登入系统的人数以及FTP登入人数的上限。

ftpcount命令通过读取/var/run/ftpd.counts文件来获取当前FTP连接的统计信息。该文件由vsftpd或其他FTP服务器进程维护，记录了当前每个用户的FTP连接数。

### 概要

```shell
ftpcount [选项]
```

### 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
-v           详细模式，显示更多连接详情。
```

### 参数

ftpcount命令不接受文件参数，执行后自动读取FTP计数器文件并输出统计信息。

### 实例

```shell
# 查看当前FTP登录用户数和连接上限
ftpcount
# 输出示例:
# Users  Logged in (limit  25)
# 2      logged in

# 查看FTP计数器文件内容
cat /var/run/ftpd.counts

# 查看当前FTP连接详情
netstat -an | grep :21

# 查看vsftpd进程状态
systemctl status vsftpd

# 查看当前所有FTP用户的连接
who | grep ftp

# 查看FTP服务器的最大连接数配置
grep max_clients /etc/vsftpd.conf
```

### 相关命令

- vsftpd -- 非常安全的FTP守护进程
- proftpd -- 功能强大的FTP服务器
- pure-ftpd -- 注重安全和简单性的FTP服务器
- who -- 查看当前登录的用户
- netstat -- 显示网络连接状态
- lsof -- 列出打开的文件和网络连接

### 注意

1. ftpcount命令的输出依赖于FTP服务器（如vsftpd）正在运行并创建了ftpd.counts文件。
2. 如果FTP服务器未运行或配置文件不同，ftpd.counts文件可能不存在或位置不同。
3. 在某些系统中，FTP计数器文件可能位于/var/run/vsftpd/ftpd.counts。
4. 如果当前没有FTP用户登录，ftpcount可能显示"No FTP users"。
5. FTP协议本身不安全，建议使用SFTP（SSH文件传输协议）替代。
