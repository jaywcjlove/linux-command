fg
===
`Foreground`

将后台作业移动到前台终端运行

## 概要

```shell
fg [job_spec ...]
```

## 主要用途

- 用于将后台作业（在后台运行的或者在后台挂起的作业）放到前台终端运行。

- 若后台任务中只有一个，则使用该命令时可以省略任务号。

## 参数

job_spec（可选）：指定要移动到前台执行的作业标识符，可以是一到多个。

## 返回值

返回作业的执行状态，如果发生了错误返回失败。

## 例子

```shell
# 运行sleep命令，然后按下ctrl+z。
sleep 60
^Z
[1]+  Stopped                 sleep 60

# 使用fg命令使得作业在前台运行。
fg %1

# 返回信息：
sleep 60
```

### 注意

1. `bash`的作业控制命令包括`bg fg kill wait disown suspend`。
2. 该命令需要`set`选项`monitor`处于开启状态时才能执行；查看作业控制状态：输入`set -o`查看`monitor`行；执行`set -o monitor`或`set -m`开启该选项。
3. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。



