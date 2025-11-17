ncdu
===

磁盘使用情况的交互式查看工具，可视为 du 的增强版本

## 补充说明

**ncdu**（**NC**urses **D**isk **U**sage）是 Unix 系统上一款基于 ncurses 的磁盘占用分析工具，可视为传统 `du` 命令的增强版本。
与 `du` 输出静态文本不同，**ncdu 提供交互式 TUI 界面**，可通过方向键浏览目录树，并支持排序、查看文件信息、直接删除文件等功能。
它非常适合用于快速定位大文件、分析磁盘空间占用以及磁盘清理。1.09+ 版本支持将扫描结果导出为 JSON。

官网

* 官方网站（作者主页）：[https://dev.yorhel.nl/ncdu](https://dev.yorhel.nl/ncdu)
* Wikipedia：[https://en.wikipedia.org/wiki/Ncdu](https://en.wikipedia.org/wiki/Ncdu)

### ncdu 安装

在大多数的 Linux 发行版中你同样不会看到 **ncdu** 被默认预装，但作为最常用的磁盘分析工具之一，它几乎在所有主流发行版的官方仓库中都可以直接安装。

不同系统的安装方式如下：

#### **Debian/Ubuntu**

```shell
sudo apt install ncdu
```

#### **CentOS / Rocky / AlmaLinux**

```shell
sudo yum install epel-release
sudo yum install ncdu
```

#### **Fedora**

```shell
sudo dnf install ncdu
```

#### **Arch Linux**

```shell
sudo pacman -S ncdu
```

#### **macOS（Homebrew）**

```shell
brew install ncdu
```

#### **FreeBSD**

```shell
pkg install ncdu
```

### 语法

```shell
ncdu [选项] [目录]
```

### 选项

```shell
-h, --help             显示帮助信息。
-v, --version          显示版本号。
-x                     限制扫描在单一文件系统中（不跨挂载点）。
-q                     减少屏幕刷新次数（适合远程 SSH）。
-o FILE                将扫描结果导出为 FILE（JSON 格式，需 1.09+）。
-f FILE                从 JSON 文件加载扫描结果（需 1.09+）。
--exclude PATTERN      排除符合模式的文件或目录。
--exclude-from FILE    从文件读取排除模式。
--follow-symlinks      跟随符号链接。
--confirm-deletion     删除文件时要求确认。
```

### 交互说明

↑, ↓, →, ← 代表键盘方向键

| 按键          | 功能                            |
| ------------- | ------------------------------- |
| ↑ / k         | 上移光标                        |
| / j           | 下移光标                        |
| → / Enter / l | 打开当前目录                    |
| ← / h         | 返回父目录                      |
| n             | 按名称排序（再次按切换升/降序） |
| s             | 按大小排序（再次按切换升/降序） |
| d             | 删除选中项                      |
| g             | 显示百分比/图表                 |
| t             | 排序时切换“目录优先”            |
| c             | 显示或隐藏子项数量              |
| b             | 在当前目录打开 shell            |
| i             | 查看选中文件/目录的详细信息     |
| r             | 刷新/重新扫描当前目录           |
| q             | 退出 ncdu                       |

### 实例

#### 扫描当前目录

```shell
ncdu
```

#### 扫描指定目录（示例：/var/log）

```shell
ncdu /var/log
```

#### 导出扫描结果为 JSON（1.09+）

```shell
ncdu -o result.json /
```

#### 从 JSON 文件加载结果

```shell
ncdu -f result.json
```
