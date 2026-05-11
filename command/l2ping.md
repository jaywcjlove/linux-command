l2ping
===

收发 L2CAP 回显请求，用于检查与目标蓝牙设备的连通性。

## 补充说明

**l2ping** 命令用于通过发送 L2CAP 回显请求（Echo Request）并接收回显响应（Echo Response），来测试与目标蓝牙设备（由给定的蓝牙 MAC 地址指定）的底层连通性。它类似于网络中常用作检查 IP 连通性的 `ping` 命令，但它是专门针对蓝牙 L2CAP 协议设计的。

通常在通过蓝牙连接设备（如蓝牙键盘、鼠标、耳机或手机等）之前，可以使用此命令诊断物理和数据链路层面的连接情况。

## 安装

`l2ping` 不是 Linux 的内置命令，它通常包含在官方的官方蓝牙协议栈软件包 **BlueZ** 中。如果系统中未安装该命令，可以通过以下方式安装：

```bash
# Ubuntu/Debian 系统
sudo apt update
sudo apt install bluez

# CentOS/RHEL/Fedora 系统
sudo dnf install bluez
# 或早期版本
sudo yum install bluez
```

## 语法

```bash
l2ping [选项] <bd_addr>
```

*注：`bd_addr` 为目标设备的蓝牙 MAC 地址，例如 `00:11:22:33:44:55`。*

## 选项

```bash
-i <hciX>       # 指定要使用的本机宿主控制器接口（HCI设备），默认通常为 hci0
-s <size>       # 指定发送的测试请求数据包（payload）的大小，默认为 44 字节
-c <count>      # 设置发送响应请求的总次数（ping的个数）
-t <timeout>    # 设置超时时间（秒）
-d <delay>      # 设置连续 ping 之间的等待延迟时间（秒）
-f              # 泛洪（Flood）ping，尽可能快地发送数据包而不需要等待对方响应后再发
-r              # 反向（Reverse）ping，监听并等待目标设备发送过来的请求，然后进行回复
-v              # 验证响应数据的 payload 是否与发送的数据相匹配
```

## 实例

测试与特定蓝牙外设（MAC地址为 `00:11:22:33:44:55`）的连接：

```bash
l2ping 00:11:22:33:44:55
```

在测试中明确指定使用本机的 `hci0` 蓝牙适配器：

```bash
l2ping -i hci0 00:11:22:33:44:55
```

指定发送 5 个测速包后自动停止：

```bash
l2ping -c 5 00:11:22:33:44:55
```

自定义发送包的数据大小（例如 128 字节）：

```bash
l2ping -s 128 00:11:22:33:44:55
```