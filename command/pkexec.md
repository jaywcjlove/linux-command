pkexec
===

以其他用户身份执行命令

## 补充说明

**pkexec** 允许授权用户以另一个用户的身份执行 PROGRAM。如果未指定
PROGRAM，则将运行默认 shell。如果未指定用户名，则程序将以管理超级用户 root
的身份执行。

### 语法

```shell
pkexec [--version] [--disable-internal-agent] [--help]
pkexec [--keep-cwd] [--user username] PROGRAM [ARGUMENTS...]
```

### 选项

```shell
PROGRAM 运行的程序
ARGUMENTS... 传递给程序的参数

--version 输出版本号然后退出
--disable-internal-agent 避免将注册自己的文本身份验证代理
--help 输出帮助文本然后退出
--keep-cwd 运行位置，默认在 /home/<username>/
--user <username> 需要运行的用户名
```

### 返回值

成功完成后，返回值为 PROGRAM 的返回值。

- `127`: 在未获得授权或者身份验证发生错误
- `126`: 用户关闭身份验证对话框而无法获得授权

### 示例

1. 运行具有管理员权限的命令：

```
pkexec command
```

将 `command` 替换为你要以管理员权限运行的命令。例如，`pkexec ls` 将以管理员权限运行 `ls` 命令。

2. 以图形界面运行具有管理员权限的命令：

```
pkexec env DISPLAY=$DISPLAY XAUTHORITY=$XAUTHORITY command
```

这个命令用于在图形界面中运行需要管理员权限的命令。将 `command` 替换为你要以管理员权限运行的命令。

3. 运行具有特定身份验证代理的命令：

```
pkexec --user username command
```

将 `username` 替换为你要作为哪个用户运行命令的用户名，将 `command` 替换为你要运行的命令。

4. 查看 `pkexec` 的帮助信息：

```
pkexec --help
```

这个命令将显示 `pkexec` 的使用说明和选项列表。

请注意，使用 `pkexec` 运行命令时，系统会提示你输入管理员密码进行身份验证。确保只在必要时使用 `pkexec` 来运行需要管理员权限的命令，并小心谨慎地处理管理员权限。

### 参考资料

- https://man.archlinux.org/man/pkexec.1.en
