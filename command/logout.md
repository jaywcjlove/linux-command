logout
===

退出当前登录的Shell

## 补充说明

**logout命令** 用于退出当前登录的Shell。logout指令让用户退出系统，其功能和login指令相互对应。

logout命令通常用于shell脚本中，表示正常结束当前的shell会话。在非交互式shell（如脚本）中，logout等同于exit命令。在交互式shell中，logout也可以用来退出登录会话。

需要注意的是，logout是一个shell内建命令，不是独立的可执行程序，因此无法通过which或whereis找到它。

### 概要

```shell
logout [status]
```

### 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
```

### 参数

```shell
status       可选的退出状态码。如果不指定，默认返回上一个命令的退出状态。
```

### 实例

```shell
# 在shell脚本中退出
#!/bin/bash
echo "正在执行任务..."
# 执行某些操作
if [ ! -f "/tmp/test.txt" ]; then
    echo "文件不存在，退出脚本"
    logout 1
fi
echo "任务完成"

# 在交互式shell中退出当前会话
logout

# 指定退出状态码
logout 0  # 正常退出
logout 1  # 异常退出
```

### 相关命令

- xit — 退出当前shell，功能与logout类似
- login — 登录到系统
- shutdown — 关闭系统
- eboot — 重启系统

### 注意

1. logout是bash等shell的内建命令，不是独立的可执行程序。
2. 在交互式登录shell中，logout的效果等同于exit。
3. 在shell脚本中，logout和exit的行为基本一致，都会终止脚本执行。
4. 如果想退出远程SSH会话，logout和exit都可以使用，也可以使用快捷键Ctrl+D。
5. logout命令不会关闭终端窗口本身，只会退出当前的shell会话。如果打开了嵌套的shell，可能需要多次执行logout才能完全退出。
