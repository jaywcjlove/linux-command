nologin
===

拒绝用户登录系统

## 补充说明

**nologin命令** 可以实现礼貌地拒绝用户登录系统，同时给出信息。如果尝试以这类用户登录，就在log里添加记录，然后在终端输出This account is currently not available信息，就是这样。一般设置这样的帐号是给启动服务的账号所用的，这只是让服务启动起来，但是不能登录系统。

### 语法  

```shell
nologin
```

### 实例  

Linux禁止用户登录：

禁止用户登录后，用户不能登录系统，但可以登录ftp、SAMBA等。我们在Linux下做系统维护的时候，希望个别用户或者所有用户不能登录系统，保证系统在维护期间正常运行。这个时候我们就要禁止用户登录。  

1、禁止个别用户登录，比如禁止lynn用户登录。

```shell
passwd -l lynn
```

这就话的意思是锁定lynn用户，这样该用户就不能登录了。  

```shell
passwd -u lynn
```

上面是对锁定的用户lynn进行解锁，用户可登录了。    

2、我们通过修改`/etc/passwd`文件中用户登录的shell

```shell
vi /etc/passwd
```

更改为：

```shell
lynn:x:500:500::/home/lynn:/sbin/nologin
```

该用户就无法登录了。  

3、禁止所有用户登录。

```shell
touch /etc/nologin
```

除root以外的用户不能登录了。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->