yes
===

重复打印指定字符串

## 补充说明

**yes命令** 在命令行中输出指定的字符串，直到yes进程被杀死。不带任何参数输入yes命令默认的字符串就是y。

###  语法

```shell
yes(参数)
```

###  参数

字符串：指定要重复打印的字符串。

###  实例

```shell
[root@localhost ~]# yes testline

testline
testline
testline
testline
testline
testline
testline
testline
...一直重复打印 testline，按Ctrl+C结束。
```


