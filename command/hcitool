hcitool
===

hcitool是一个Linux命令行工具，用于管理和调试蓝牙设备。它可以用于扫描周围的蓝牙设备、连接到蓝牙设备发送命令和数据包等。

## 安装

hcitool是一个Linux命令行工具，通常已经预装在大多数Linux行版中。如果您的系统中没有安装hcitool，可以使用以下命令进行安装(debian系列发行示例)

```bash
sudo apt-get install bluez
```

## 使用
注意事项：
1. 使用ble相关命令需要提权如:lescan


### 语法

`hcitool [options] <command> [command parameters]`

### 命令

```bash
    dev  显示本地设备
    inq  查询远程设备
    scan 扫描远程设备
    name 从远程设备获取名称
    info 从远程设备获取信息
    spinq   启动定期查询
    epinq   退出定期查询
    cmd 提交任意HCI命令
    con 显示活动连接
    cc 创建到远程设备的连接
    dc 断开与远程设备的连接
    sr 交换机中心/外围角色
    cpt 更改连接数据包类型
    rssi 显示连接rssi
    lq 显示链路质量
    tpl 显示发射功率电平
    afh 显示afh通道图
    lp 设置/显示链接策略设置
    lst 设置/显示链接监控超时
    auth 请求身份验证
    enc 设置连接加密
    key 更改连接链接键
    clkoff 读取时钟偏移
    clock 读取本地或远程时钟
    lescan 启动LE扫描
    leinfo 获取LE远程信息
    lealadd 将设备添加到LE接受列表
    lealrm 从LE接受列表中删除设备
    lealsz LE接受列表的读取大小
    lealclr 清除LE接受列表 

```
### 常用简单示例
1.扫描周围的蓝牙设备

`hcitool scan`

2.通过mac地址连接到蓝牙设备

`hcitool cc <MAC地址>`

3.显示当前蓝牙适配器信息

`hcitool dev`

4.通过mac地址找到蓝牙名称

`hcitool name <MAC地址>`

5.显示当前蓝牙活动连接信息

`hcitool con`
