pgrep
===

根据用户给出的信息在当前运行进程中查找并列出符合条件的进程ID（PID）

## 补充说明

**pgrep命令** 以名称为依据从运行进程队列中查找进程，并显示查找到的进程id。每一个进程ID以一个十进制数表示，通过一个分割字符串和下一个ID分开，默认的分割字符串是一个新行。对于每个属性选项，用户可以在命令行上指定一个以逗号分割的可能值的集合。

### 语法  

```shell
pgrep(选项)(参数)
```

### 选项  

```shell
-o：仅显示找到的最小（起始）进程号；
-n：仅显示找到的最大（结束）进程号；
-l：显示进程名称；
-P：指定父进程号；
-g：指定进程组；
-t：指定开启进程的终端；
-u：指定进程的有效用户ID。
```

### 参数  

进程名称：指定要查找的进程名称，同时也支持类似grep指令中的匹配模式。

### 实例  

```shell
pgrep -lo httpd
4557 httpd
 [root@localhost ~]# pgrep -ln httpd
4566 httpd

[root@localhost ~]# pgrep -l httpd
4557 httpd
4560 httpd
4561 httpd
4562 httpd
4563 httpd
4564 httpd
4565 httpd
4566 httpd

[root@localhost ~]# pgrep httpd 4557
4560
4561
4562
4563
4564
4565
4566
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
