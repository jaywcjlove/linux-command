lsscsi
===

列出系统中挂接的 SCSI 设备及其主机适配器信息

## 补充说明

**lsscsi命令** 通过读取 sysfs（即 `/sys` 目录）来列出当前挂接到系统上的 SCSI 设备，较新的版本同时也会列出 NVMe 设备。它常用于查看 SCSI/SATA 硬盘的连接情况，确认设备在哪条通道上，以及它对应哪一个 `/dev` 设备节点。

多数发行版并不默认安装该命令，它由独立的 `lsscsi` 软件包提供：

```shell
sudo apt install lsscsi      # Debian/Ubuntu
sudo dnf install lsscsi      # Fedora/RHEL
sudo pacman -S lsscsi        # Arch
```

默认输出中，每一行都以一个用方括号括起来的四元组开头，后面依次是设备类型、厂商、产品型号、固件版本和设备节点：

```shell
[0:0:0:0]    disk    ATA      ST3500418AS      CC38  /dev/sda
```

四元组 `[H:C:T:L]` 中的四个数字依次为：

- `H`：主机适配器编号（host）
- `C`：控制器编号（controller），即传统 SCSI 中所说的通道（channel）
- `T`：目标设备编号（target）
- `L`：逻辑单元号（LUN）

### 语法

```shell
lsscsi [选项] [H:C:T:L]
```

### 选项

```shell
-b, --brief           每个设备只输出四元组和主设备节点名
-c, --classic         以类似 /proc/scsi/scsi 的传统格式输出
-C, --controllers     列出 NVMe 控制器和 SCSI 主机适配器，等同于 --hosts
-d, --device          在设备节点名后的括号中显示主设备号和次设备号
-D, --pdt             以十六进制显示 SCSI 外围设备类型（PDT），取代设备类型缩写
-g, --generic         显示设备对应的 SCSI 通用设备（sg）节点名
-h, --help            显示帮助信息
-H, --hosts           列出主机适配器（及 NVMe 控制器），而不是设备
-i, --scsi_id         对磁盘类设备显示由 udev 生成的 /dev/disk/by-id/scsi* 标识
-k, --kname           使用内核默认命名，而不是按主次设备号去 /dev 中匹配名字
-l, --long            输出更多的设备或主机信息，最多可重复到 -lll
-L, --list            以“属性=值”的形式逐行输出，等同于 -lll
-N, --no-nvme         不显示 NVMe 设备和控制器
-p, --protection      显示目标端（DIF）和发起端（DIX）的数据保护类型
-P, --protmode        显示磁盘当前生效的数据保护模式
-s, --size            以易读的方式显示容量，重复使用可改用 IEC 单位或逻辑块数
-S, --sz-lbs          以逻辑块数显示容量
-t, --transport       显示目标设备的传输层信息，与 --hosts 合用时显示发起端信息
-u, --unit            在厂商、产品和版本字段的位置显示逻辑单元名称
-U, --long-unit       显示完整的逻辑单元名称
-v, --verbose         显示信息取自哪些 sysfs 目录
-V, --version         显示版本信息
-w, --wwn             对磁盘显示 WWN，取代厂商、型号和版本信息（与 --transport 合用时取代传输层信息）
-x, --lunhex          以 SCSI 十六进制格式显示 LUN，重复使用可显示全部 16 位
-y, --sysfsroot=PATH  使用 PATH 代替默认的 /sys 作为 sysfs 的挂载点
```

### 参数

```shell
H:C:T:L   可选的过滤器，只列出与之匹配的设备，默认为 '*:*:*:*' 即列出全部设备。
          每个元素可以是数字，'-'、'*'、'?' 以及省略掉的末尾部分都按通配符处理，
          因此 1:0:0 表示 1:0:0 下的所有 LUN，也允许写成带方括号的 [1:0:0]。
          含有 '*' 或 '?' 的过滤器需要用引号括起来，以免被 shell 展开；
          用 '-' 作通配符时需要在前面加上 '--'，以免被当成选项解析。
          与 --hosts 合用时只有 H 这一个元素起作用。
```

## 实例

### 列出所有 SCSI 设备

```shell
lsscsi

[0:0:0:0]    disk    ATA      ST3500418AS      CC38  /dev/sda
[1:0:0:0]    cd/dvd  HL-DT-ST DVDRAM GH24NSD1  LN00  /dev/sr0
```

### 只看四元组和设备节点

```shell
lsscsi -b

[0:0:0:0]    /dev/sda
[1:0:0:0]    /dev/sr0
```

### 同时显示 SCSI 通用设备节点

有些工具（如 `sg_inq`、`sdparm`）需要的是 `/dev/sg*` 节点，用 `-g` 可以直接看到它和块设备的对应关系。

```shell
lsscsi -g

[0:0:0:0]    disk    ATA      ST3500418AS      CC38  /dev/sda   /dev/sg0
```

### 显示磁盘容量

```shell
lsscsi -s

[0:0:0:0]    disk    ATA      ST3500418AS      CC38  /dev/sda   500GB
```

### 列出主机适配器

```shell
lsscsi -H

[0]    ahci
[1]    ahci
[2]    usb-storage
```

### 以传统格式输出

输出与 `/proc/scsi/scsi` 的内容类似，这里能直观地看到 `Channel` 这一列：

```shell
lsscsi -c

Attached devices:
Host: scsi0 Channel: 00 Id: 00 Lun: 00
  Vendor: ATA      Model: ST3500418AS      Rev: CC38
  Type:   Direct-Access                    ANSI SCSI revision: 05
```

### 只查看指定的设备

```shell
lsscsi 0:0:0:0
```

列出 1 号主机适配器下挂接的所有设备，注意过滤器要加引号：

```shell
lsscsi "1:*:*:*"
```

### 查看更详细的信息

```shell
lsscsi -l
```

以“属性=值”的形式输出全部细节：

```shell
lsscsi -L
```
