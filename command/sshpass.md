sshpass
===

免交互 SSH 登录工具。

## 补充说明

免交互 SSH 登录工具，但不要用在生产服务器上。

如果你想自动在 SSH 登录提示符中提供**密码**和**用户名**怎么办？这时 **sshpass** 就可以帮到你了。

**sshpass** 是一个简单、轻量级的命令行工具，通过它我们能够向命令提示符本身提供密码（非交互式密码验证）。

### 安装

```shell
# RedHat/CentOS
yum install sshpass

# Debian/Ubuntu
apt-get install sshpass
```

###  语法

```shell
sshpass (选项)
```

###  选项

```shell
用法: sshpass [-f|-d|-p|-e] [-hV] 命令 参数
    -f 文件名     从文件中获取密码
    -d 数字       使用数字作为文件描述符来获取密码
    -p 密码       将密码作为参数提供（安全上不明智）
    -e            密码以环境变量 "SSHPASS" 的形式传递
    如果没有参数 - 密码将从标准输入中获取

    -P 提示       sshpass 搜索以检测密码提示的字符串
    -v            显示详细信息
    -h            显示帮助信息（本屏幕）
    -V            打印版本信息
只能使用 -f、-d、-p 或 -e 中的一个
```

### 实例

1.明文传输密码（**不建议**）

```shell
sshpass -p 'my_pass_here' ssh aaronkilik@10.42.0.1 'df -h'
```

2.使用文件传输密码

```shell
sshpass -f password_filename ssh aaronkilik@10.42.0.1 'df -h'
```

3.使用环境变量 `SSHPASS`

```shell
sshpass -e ssh aaronkilik@10.42.0.1 'df -h'
```

更多使用详情请参考 [https://linux.cn/article-8086-1.html](https://linux.cn/article-8086-1.html) 。