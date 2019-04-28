who
===

显示目前登录系统的用户信息

## 补充说明

**who命令** 是显示目前登录系统的用户信息。执行who命令可得知目前有那些用户登入系统，单独执行who命令会列出登入帐号，使用的终端机，登入时间以及从何处登入或正在使用哪个X显示器。

### 语法  

```shell
who(选项)(参数)
```

### 选项  

```shell
-H或--heading：显示各栏位的标题信息列；
-i或-u或--idle：显示闲置时间，若该用户在前一分钟之内有进行任何动作，将标示成"."号，如果该用户已超过24小时没有任何动作，则标示出"old"字符串；
-m：此参数的效果和指定"am i"字符串相同；
-q或--count：只显示登入系统的帐号名称和总人数；
-s：此参数将忽略不予处理，仅负责解决who指令其他版本的兼容性问题；
-w或-T或--mesg或--message或--writable：显示用户的信息状态栏；
--help：在线帮助；
--version：显示版本信息。
```

### 参数  

文件：指定查询文件。

### 实例  

```shell
[root@localhost ~]# who
root     pts/0        2013-08-19 15:04 (192.168.0.134)
root     pts/1        2013-12-20 10:37 (180.111.155.40)

[root@localhost ~]# who -q
root root
# users=2

[root@localhost ~]# who -H
NAME     LINE         time             COMMENT
root     pts/0        2013-08-19 15:04 (192.168.0.134)
root     pts/1        2013-12-20 10:37 (180.111.155.40)

[root@localhost ~]# who -w
root     + pts/0        2013-08-19 15:04 (192.168.0.134)
root     + pts/1        2013-12-20 10:37 (180.111.155.40)
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->