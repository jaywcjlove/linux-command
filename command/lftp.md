lftp
===

优秀的文件客户端程序

## 补充说明

**lftp命令** 是一款优秀的文件客户端程序，它支持ftp、SETP、HTTP和FTPs等多种文件传输协议。lftp支持tab自动补全，记不得命令双击tab键，就可以看到可能的选项了。

### 语法  

```shell
lftp(选项)(参数)
```

### 选项  

```shell
-f：指定lftp指令要执行的脚本文件；
-c：执行指定的命令后退出；
--help：显示帮助信息；
--version：显示指令的版本号。
```

### 参数  

站点：要访问的站点的ip地址或者域名。

### 实例  

 **登录ftp** 

```shell
lftp 用户名:密码@ftp地址:传送端口（默认21）
```

也可以先不带用户名登录，然后在接口界面下用login命令来用指定账号登录，密码不显示。

 **查看文件与改变目录** 

```shell
ls
cd 对应ftp目录
```

 **下载** 

get当然是可以的，还可以：

```shell
mget -c *.pdf    #把所有的pdf文件以允许断点续传的方式下载。
mirror aaa/      #将aaa目录整个的下载下来，子目录也会自动复制。
pget -c -n 10 file.dat   #以最多10个线程以允许断点续传的方式下载file.dat，可以通过设置pget:default-n的值而使用默认值。
```

 **上传** 

同样的put、mput都是对文件的操作，和下载类似。

```shell
mirror -R 本地目录名
```

将本地目录以迭代（包括子目录）的方式反向上传到ftp site。

 **模式设置** 

```shell
set ftp:charset gbk
```

远程ftp site用gbk编码，对应的要设置为utf8,只要替换gbk为utf8即可。

```shell
set file:charset utf8
```

本地的charset设定为utf8,如果你是gbk，相应改掉。

```shell
set ftp:passive-mode 1
```

使用被动模式登录，有些site要求必须用被动模式或者主动模式才可以登录，这个开关就是设置这个的。0代表不用被动模式。

 **书签** 

其实命令行也可以有书签，在lftp终端提示符下：

```shell
bookmark add ustc
```

就可以把当前正在浏览的ftp site用ustc作为标签储存起来。以后在shell终端下，直接`lftp ustc`就可以自动填好用户名和密码，进入对应的目录了。

```shell
bookmark edit
```

会调用编辑器手动修改书签。当然，也可以看到，这个书签其实就是个简单的文本文件。密码，用户名都可以看到。

 **配置文件** 

```shell
vim /etc/lftp.conf
```

一般，我会添加这几行：

```shell
set ftp:charset gbk
set file:charset utf8
set pget:default-n 5
```

这样，就不用每次进入都要打命令了。其他的set可以自己tab然后help来看。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->