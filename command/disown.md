disown
===

从当前的shell中移除作业。

## 概要

```shell
disown [-h] [-ar] [jobspec ... | pid ...]
```

## 主要用途

- 从当前shell的作业列表中移除全部作业。

- 从当前shell的作业列表中移除指定的一到多个作业。

- 从当前shell的作业列表中移除正在运行的作业。

- 标记作业，使得它们在当前shell退出后也不会结束。


## 选项

```shell
-h    标记每个作业标识符，这些作业将不会在shell接收到sighup信号时接收到sighup信号。
-a    移除所有的作业。
-r    移除运行的作业。
```

## 参数

jobspec（可选）：要移除的作业标识符，可以是一到多个。

pid（可选）：要移除的作业对应的进程ID，可以是一到多个。


## 返回值

返回成功除非未开启作业控制或执行出现错误。

## 例子

```shell
# 演示。
[user2@pc] ssh 192.168.1.4
user2@192.168.1.4's password:
# 此时按下ctrl+z使得交互停止。
[1]+  Stopped                 ssh 192.168.1.4

[user2@pc] ssh 192.168.1.7
user2@192.168.1.7's password:
# 此时按下ctrl+z使得交互停止。
[1]+  Stopped                 ssh 192.168.1.7

[user2@pc] sleep 120 &
[3] 28986

# 列出作业及pid信息。
[user2@pc] jobs -l
[1]- 28756 Stopped                 ssh 192.168.1.4
[2]+ 28833 Stopped                 ssh 192.168.1.7
[3]  28986 Running                 sleep 120 &

# 删除运行状态的作业。
[user2@pc] disown -r

[user2@pc] jobs -l
[1]- 28756 Stopped                 ssh 192.168.1.4
[2]+ 28833 Stopped                 ssh 192.168.1.7

# 注意disown只是移除作业，并没有停止。
[user2@pc] pgrep -a -u user2 -f 'sleep 120'
28986 sleep 120

# 删除指定的作业。
[user2@pc] disown %2
bash: warning: deleting stopped job 2 with process group 28833

[user2@pc] jobs -l
[1]- 28756 Stopped                 ssh 192.168.1.4

# 注意disown只是移除作业，并没有停止。
[user2@pc] pgrep -a -u user2 -f 'ssh 192.168.1.7'
28833 ssh 192.168.1.7

# 删除全部作业。
[user2@pc] disown -a
bash: warning: deleting stopped job 1 with process group 28756

[user2@pc] jobs -l

# 注意disown只是移除作业，并没有停止。
[user2@pc] pgrep -a -u user2 -f 'ssh 192.168.1.4'
28756 ssh 192.168.1.4
```

```shell
# 演示-h选项的作用。
[user2@pc] sleep 90 &
[1] 109080

[user2@pc] jobs -l
[1]+ 109080 Running                 sleep 90 &

[user2@pc] disown -h %1

[user2@pc] exit

# 此时前一个终端已经关闭，现在打开新终端查找该作业。
[user2@pc] pgrep -a -u user2 -f 'sleep 90'
109080 sleep 90
```

### 注意

1. `bash`的作业控制命令包括`bg fg kill wait disown suspend`。
2. 该命令需要`set`选项`monitor`处于开启状态时才能执行；查看作业控制状态：输入`set -o`查看`monitor`行；执行`set -o monitor`或`set -m`开启该选项。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。

### 参考链接

- [disown的用法](https://www.cyberciti.biz/faq/unix-linux-disown-command-examples-usage-syntax/)


