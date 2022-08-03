logrotate
===

系统日志进行轮转、压缩和删除

## 补充说明

**logrotate命令** 用于对系统日志进行轮转、压缩和删除，也可以将日志发送到指定邮箱。使用logrotate指令，可让你轻松管理系统所产生的记录文件。每个记录文件都可被设置成每日，每周或每月处理，也能在文件太大时立即处理。您必须自行编辑，指定配置文件，预设的配置文件存放在`/etc/logrotate.conf`文件中。

###  语法

```shell
logrotate(选项)(参数)
```

###  选项

```shell
-?或--help：在线帮助；
-d或--debug：详细显示指令执行过程，便于排错或了解程序执行的情况；
-f或--force ：强行启动记录文件维护操作，纵使logrotate指令认为没有需要亦然；
-s<状态文件>或--state=<状态文件>：使用指定的状态文件；
-v或--version：显示指令执行过程；
-usage：显示指令基本用法。
```

###  参数

配置文件：指定lograote指令的配置文件。

###  实例

crontab 会定时调用logrotate命令 在 `/etc/cron.daily/logrotate` 文件中配置使用

logrotate的配置文件`/etc/logrotate.conf` 定义引用`/etc/logrotate.d`目录下的一些自定义的log配置 

在`/etc/logrotate.d`目录下创建任意后缀名的文件,即可使用对日志进行轮转
```shell
/tmp/log/log.txt
{
    copytruncate
    daily
    rotate 30
    missingok
    ifempty
    compress
    noolddir
}
```

这个配置文件代表的意思是将`/tmp/log/log.txt`文件 进行轮转压缩

```
compress                 通过gzip 压缩转储以后的日志
nocompress               不做gzip压缩处理
copytruncate             用于还在打开中的日志文件，把当前日志备份并截断；是先拷贝再清空的方式，拷贝和清空之间有一个时间差，可能会丢失部分日志数据。
nocopytruncate 备份日志文件不过不截断
create mode owner group  轮转时指定创建新文件的属性，如create 0777 nobody nobody
nocreate                 不建立新的日志文件
delaycompress            和compress 一起使用时，转储的日志文件到下一次转储时才压缩
nodelaycompress          覆盖 delaycompress 选项，转储同时压缩
missingok                如果日志丢失，不报错继续滚动下一个日志
errors address           专储时的错误信息发送到指定的Email 地址
ifempty                  即使日志文件为空文件也做轮转，这个是logrotate的缺省选项。
notifempty               当日志文件为空时，不进行轮转
mail address             把转储的日志文件发送到指定的E-mail 地址
nomail                   转储时不发送日志文件
olddir directory         转储后的日志文件放入指定的目录，必须和当前日志文件在同一个文件系统
noolddir                 转储后的日志文件和当前日志文件放在同一个目录下
sharedscripts            运行postrotate脚本，作用是在所有日志都轮转后统一执行一次脚本。如果没有配置这个，那么每个日志轮转后都会执行一次脚本
prerotate                在logrotate转储之前需要执行的指令，例如修改文件的属性等动作；必须独立成行
postrotate               在logrotate转储之后需要执行的指令，例如重新启动 (kill -HUP) 某个服务！必须独立成行
daily                    指定转储周期为每天
weekly                   指定转储周期为每周
monthly                  指定转储周期为每月
rotate count             指定日志文件删除之前转储的次数，0 指没有备份，5 指保留5 个备份
dateext                  使用当期日期作为命名格式
dateformat .%s           配合dateext使用，紧跟在下一行出现，定义文件切割后的文件名，必须配合dateext使用，只支持 %Y %m %d %s 这四个参数
size(或minsize) log-size 当日志文件到达指定的大小时才转储
```
### 注意事项

在`/etc/logrotate.d`目录下创建任意后缀名的文件
```shell
/tmp/log/log*
{
    copytruncate
    daily
    rotate 30
    missingok
    ifempty
    compress
    noolddir
}
```
这种情况下，会将轮转过的log再重新轮转,因为轮转过后的文件名也是已log开头的


