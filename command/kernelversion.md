kernelversion
===

打印当前内核的主版本号

## 补充说明

**kernelversion命令** 用于打印当前Linux内核的主版本号。它是debianutils包的一部分，主要用于脚本中判断内核版本是否满足某些条件。

kernelversion命令输出的版本号格式为主版本号.次版本号，例如5.10、4.19等。它提取的是 /proc/version 或 uname -r 中的内核版本信息的前两部分。

### 概要

```shell
kernelversion
```

### 选项

```shell
--help       显示帮助信息并退出。
--version    显示版本信息并退出。
```

### 参数

kernelversion命令不接受任何参数，执行后即输出当前内核的主版本号。

### 实例

```shell
# 查看当前内核主版本号
kernelversion
# 输出示例: 5.10

# 在脚本中判断内核版本
ver=$(kernelversion)
if [ "$ver" \< "4.0" ]; then
    echo "内核版本过低，需要升级"
else
    echo "内核版本符合要求"
fi

# 结合uname命令查看更详细的版本信息
uname -r
# 输出示例: 5.10.0-xxx-amd64

# 查看所有内核版本信息
uname -a
# 输出示例: Linux hostname 5.10.0-xxx-amd64 #1 SMP x86_64 GNU/Linux
```

### 相关命令

- uname -- 显示系统信息
- lsb_release -- 显示Linux发行版信息
- /proc/version -- 查看内核版本信息文件

### 注意

1. kernelversion命令仅在安装了debianutils包的Debian/Ubuntu系统上可用。
2. 它输出的只是主版本号（如5.10），不包含修订号和发行信息。如需完整版本号，请使用uname -r。
3. kernelversion的比较需要注意字符串比较和数值比较的区别，建议在脚本中使用dpkg --compare-versions进行版本比较。
4. 该命令在RHEL/CentOS等其他发行版中可能不可用，可使用uname -r作为替代方案。
