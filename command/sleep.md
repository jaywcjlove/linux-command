sleep
===

将目前动作延迟一段时间

## 补充说明

**sleep命令** 暂停指定的时间。

### 语法  

```shell
sleep(参数)
```

### 参数  

时间：指定要暂停时间的长度。

时间长度，后面可接 s、m、h 或 d，其中 s 为秒，m 为 分钟，h 为小时，d 为日数。

### 实例  

有时在写一些以循环方式运行的监控脚本，设置时间间隔是必不可少的，下面是一个Shell进度条的脚本演示在脚本中生成延时。

```shell
#!/bin/bash

b=''
for ((i=0;$i<=100;i++))
 do
 printf "Progress:[%-100s]%d%%\r" $b $i
 sleep 0.1
 b=#$b
 done
echo
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->