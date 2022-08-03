suspend
===

挂起shell的执行。

## 概要

```shell
suspend [-f]
```

## 主要用途

- 挂起shell的执行，直到收到`SIGCONT`信号。

- 除非使用`-f`选项，否则无法对`login shell`使用。


## 选项

```shell
-f    对login shell执行挂起操作。
```

## 返回值

返回成功除非未开启作业控制或发生了错误。

## 例子

```shell
# 打开一个终端，首先获取PID。
echo $$
# 执行挂起命令
suspend
```

```shell
# 再打开一个终端，发送SIGCONT命令
kill -s SIGCONT PID
# 此时之前的终端结束挂起状态，可以正常交互。
```

### 注意

1. `bash`的作业控制命令包括`bg fg kill wait disown suspend`。
2. 该命令需要`set`选项`monitor`处于开启状态时才能执行；查看作业控制状态：输入`set -o`查看`monitor`行；执行`set -o monitor`或`set -m`开启该选项。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。



