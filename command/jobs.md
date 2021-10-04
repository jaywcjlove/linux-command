jobs
===

显示作业的状态。

## 概要

```shell
jobs [-lnprs] [jobspec ...]
jobs -x command [args]
```

## 主要用途

- 显示作业的状态。
- 列出活动的作业。
- 列出停止的作业。

## 选项

```shell
-l	在作业信息中额外的列出PID。
-n	只列出最近一次通知以来状态变更的作业。
-p	只列出PID。
-r	只输出处于运行状态的作业。
-s	只输出处于停止状态的作业。
```

## 返回值

返回状态为成功除非给出了非法选项、执行出现错误。

如果使用`jobs -x command [args]`形式执行，那么返回值为`command`的退出状态。

## 例子

```shell
[user2@pc] ssh 192.168.1.4
pc@192.168.1.4's password:
# 此时按下ctrl+z使得交互停止。
[1]+  Stopped                 ssh 192.168.1.4

[user2@pc] sleep 60 &
[2] 13338

[user2@pc] jobs
[1]-  Stopped                 ssh 192.168.1.4
[2]   Running                 sleep 60 &

[user2@pc] jobs -l
[1]- 12927 Stopped                 ssh 192.168.1.4
[2]  13338 Running                 sleep 60 &

[user2@pc] jobs -p
12927
13338

[user2@pc] jobs -s
[1]-  Stopped                 ssh 192.168.1.4

[user2@pc] jobs -r
[2]   Running                 sleep 60 &

[user2@pc] kill -9 12927
[2]   Done                    sleep 60

[user2@pc] jobs -n -l
[1]+ 12927 Killed             ssh 192.168.1.4

[user2@pc] jobs -n -l
```

### 注意

1. `bash`的作业控制命令包括`bg fg kill wait disown suspend`。
2. 该命令需要`set`选项`monitor`处于开启状态时才能执行；查看作业控制状态：输入`set -o`查看`monitor`行；执行`set -o monitor`或`set -m`开启该选项。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。


