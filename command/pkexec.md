pkexec
===
以另一个用户身份执行命令

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

127: 在未获得授权或者身份验证发生错误

126: 用户关闭身份验证对话框而无法获得授权

### 参考资料

- https://man.archlinux.org/man/pkexec.1.en
