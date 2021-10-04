mailq
===

显示待发送的邮件队列

## 补充说明

**mailq命令** 用户显示待发送的邮件队列，显示的每一个条目包括邮件队列id、邮件大小、加入队列时间、邮件发送者和接受者。如果邮件最后一次尝试后还没有将邮件投递出去，则显示发送失败的原因。

###  语法

```shell
mailq(选项)
```

###  选项

```shell
-v：显示详细的信息。
```

###  实例

```shell
[root@localhost ~]# mailq -v
/var/spool/mqueue is empty
                Total requests: 0
```


