sftp-server
===

sftp协议的服务器端程序

## 补充说明

**sftp-server命令** 是一个"SFTP"协议的服务器端程序，它使用加密的方式进行文件传输。它是OpenSSH套件的一部分，通常在后台由sshd守护进程调用，作为SFTP子系统的后端实现。

sftp-server提供了比传统FTP更安全的文件传输方式，所有通信数据均经过SSH加密通道传输，包括认证信息和文件内容。

### 概要

`shell
/usr/lib/openssh/sftp-server [选项]
`

### 选项

`shell
-d               调试模式，将调试信息输出到系统日志
-f facility      指定syslog的设施类型（如DAEMON、USER等）
-l log_level     指定日志级别（QUIET、FATAL、ERROR、INFO、VERBOSE、DEBUG、DEBUG1、DEBUG2、DEBUG3）
-P pid_file      将进程PID写入指定文件
-t version       SFTP协议版本（2-6）
-u umask         设置文件创建的umask值
`

### 参数

sftp-server通常不需要手动直接调用，而是由sshd通过SFTP子系统自动启动。用户可以通过sftp客户端命令连接到服务器，服务端会自动加载sftp-server。

### 实例

`shell
# 配置sshd以使用sftp-server
# 在 /etc/ssh/sshd_config 中添加或修改：
Subsystem sftp /usr/lib/openssh/sftp-server

# 使用sftp客户端连接远程服务器
sftp user@remote-host

# 通过sftp上传文件
sftp> put localfile.txt

# 通过sftp下载文件
sftp> get remotefile.txt

# 查看sftp-server的位置
which sftp-server
# 或
whereis sftp-server
`

### 相关命令

- sftp — SFTP客户端命令
- sshd — SSH守护进程
- scp — 安全的文件拷贝命令
- ssh — SSH客户端命令

### 注意

1. sftp-server通常由sshd自动管理，普通用户无需直接调用。
2. 如果需要限制用户只能使用SFTP而不能使用Shell访问，可以在/etc/passwd中将用户的shell设置为sftp-server的路径，或在sshd_config中使用ForceCommand internal-sftp。
3. 较新版本的OpenSSH推荐使用internal-sftp（内置SFTP服务器）替代独立的sftp-server程序，性能更好且更安全。
