nmtui
===

基于文本的用户界面（TUI），用于控制和配置 NetworkManager。

## 补充说明

**nmtui** 是一款基于 curses 库的文本用户界面工具，全称为 NetworkManager Text User Interface。它是 `nmcli` 的图形化替代方案（在没有桌面环境的终端中运行），可以让用户通过键盘的上下左右方向键、回车键等非常直观、方便地对 Linux 网络连接进行配置和管理。

使用 `nmtui`，你可以轻松地添加、修改、激活（连接）或停用网络连接，以及设置系统的主机名等。

## 安装

需要注意的是，`nmtui` 并非所有 Linux 发行版的内置默认命令。它包含在 NetworkManager 包中。在 Fedora/RHEL 中通常是默认安装的，但在 Ubuntu/Debian 中可能需要手动安装。

```bash
sudo apt install network-manager   # Ubuntu/Debian
# 或
sudo dnf install NetworkManager    # Fedora
```

## 语法

```bash
nmtui
nmtui [子命令]
```

直接执行 `nmtui` 将打开主可视化菜单界面。也可以通过子命令直接进入相应的配置界面。

### 常用子命令 (快捷方式)

- `nmtui-edit [connection-name]`：直接打开连接编辑器，用于添加或修改网络连接。
- `nmtui-connect [connection-name]`：直接打开激活连接界面，可用于迅速连接网络。
- `nmtui-hostname`：直接打开主机名修改界面。

## 实例

在终端中启动 nmtui 主界面：

```bash
nmtui
```
*执行后会弹出一个类似图形化的文本界面，提供“编辑连接”、“启用连接”和“设置系统主机名”三个主要选项。使用方向键和 Tab 键切换焦点，回车键确认。*

### 1. 配置静态 IP 地址 (以交互式方式)

1. 在终端输入 `nmtui`。
2. 选择 **Edit a connection** (编辑连接) 并按回车。
3. 选择你要配置的网络接口（如 `eth0` 或 `ens33`），按方向键右键选择 `<Edit...>` (编辑...) 并回车。
4. 在 IPv4 CONFIGURATION (IPv4 配置) 旁边，将 `<Automatic>` (自动/DHCP) 改为 `<Manual>` (手动)。
5. 展开 IPv4 配置选项，输入你的 IP 地址（Address，如 `192.168.1.100/24`），网关（Gateway）以及 DNS 服务器。
6. 一直向下滚动或者按 Tab 键，选择最底部的 `<OK>` (确定) 进行保存。
7. 返回上一级菜单后退出，此时可能需要重启网络或重新激活连接。

### 2. 快速连接 Wi-Fi

如果你在没有桌面环境（如服务器或树莓派等）下想要连接 Wi-Fi，`nmtui` 是一个极佳的选择：

1. 在终端中直接输入快捷命令：
```bash
nmtui-connect
```
2. 界面会列出当前扫描到的所有 Wi-Fi 列表。
3. 选择你需要连接的 Wi-Fi 名称（SSID），按回车。
4. 如果该 Wi-Fi 有密码，会弹出一个输入框提示输入密码。输入后确认即可连接。

### 3. 修改系统主机名

你可以跳过主菜单，直接进入主机名修改界面：

```bash
nmtui-hostname
```
输入新的主机名并选择 `<OK>` (确定) 即可。由于主机名服务是被 systemd（hostnamed）接管的，修改后即可马上反映在系统中。需要注意如果你当前就在终端里，需要重新打开终端才能看到 prompt 里的主机名发生变化。