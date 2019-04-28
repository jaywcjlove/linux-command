ncftp
===

是增强的的FTP工具

## 补充说明

**ncftp命令** 是增强的的ftp工具，比传统的FTP指令更加强大。FTP让用户得以下载存放于服务器主机的文件，也能将文件上传到远端主机放置。ncftp是文字模式FTP程序的佼佼者，它具备多样特色，包括显示传输速率，下载进度，自动续传，标住书签，可通过防火墙和代理服务器等。

### 语法  

```shell
ncftp(选项)(参数)
```

### 选项  

```shell
-u：指定登录FTP服务器时使用的用户名；
-p：指定登录FTP服务器时使用的密码；
-P：如果FTP服务器没有使用默认的TCP协议的21端口，则使用此选项指定FTP服务器的端口号。
-m：在传之前尝试在目录位置创建目录(用于传目录的情况)
-R：递规传子目录
```

### 参数  

FTP服务器：指定远程FTP服务器的ip地址或主机名。

### 安装  

```shell
wget ftp://ftp.ncftp.com/ncftp/ncftp-3.2.3-src.tar.gz
tar zxvf ncftp-3.2.3-src.tar.gz
cd ncftp-3.2.3/
./configure --prefix=/usr/local/ncftp
make && make install
```

### 实例  

将本地/etc/目录内的所有文件和目录，上传到FTP服务器的flv/games/目录内(如果不存在flv/games/目录则自动创建)。

```shell
/usr/local/ncftp/bin/ncftpput -u koumm -p koumm -P 21 -m -R 192.168.162.137  flv/games/ /etc/*
```

 **指令说明** 

ncftp的基本命令和普通ftp一样，可以输入help获得命令列表。对于所有的命令，都可以使用help <命令>的格式获得详细帮助。l开头的就是对本地执行的命令，其它的就是对登入的ftp服务目录的操作命令。

增加的本地文件系统的操作命令：

*   lls: 列出本地当前目录文件；
*   lmkdir : 本地建立目录；
*   lrename: 本地文件改名；
*   lpwd: 显示当前本地路 径；
*   lchmod: 改变本地文件权限；
*   lpage: 显示本地文件内容；
*   lrm: 删除本地文件；
*   lrmdir: 删除本地目录。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->