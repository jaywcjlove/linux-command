lspci
===

显示当前主机的所有PCI总线信息

## 补充说明

**lspci命令** 用于显示当前主机的所有PCI总线信息，以及所有已连接的PCI设备信息。

### 语法  

```shell
lspci(选项)
```

### 选项  

```shell
-n：以数字方式显示PCI厂商和设备代码；
-t：以树状结构显示PCI设备的层次关系，包括所有的总线、桥、设备以及它们之间的联接；
-b：以总线为中心的视图；
-d：仅显示给定厂商和设备的信息；
-s：仅显示指定总线、插槽上的设备和设备上的功能块信息；
-i：指定PCI编号列表文件，而不使用默认的文件；
-m：以机器可读方式显示PCI设备信息。
```

### 实例  

```shell
[root@localhost ~]# lspci
00:00.0 host bridge: Intel Corporation 5500 I/O Hub to ESI Port (rev 22)
00:01.0 PCI bridge: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 1 (rev 22)
00:02.0 PCI bridge: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 2 (rev 22)
00:03.0 PCI bridge: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 3 (rev 22)
00:07.0 PCI bridge: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 7 (rev 22)
00:08.0 PCI bridge: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 8 (rev 22)
00:09.0 PCI bridge: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 9 (rev 22)
00:0a.0 PCI bridge: Intel Corporation 5520/5500/X58 I/O Hub PCI Express Root Port 10 (rev 22)
00:10.0 PIC: Intel Corporation 5520/5500/X58 Physical and Link Layer Registers Port 0 (rev 22)
00:10.1 PIC: Intel Corporation 5520/5500/X58 Routing and Protocol Layer Registers Port 0 (rev 22)
00:11.0 PIC: Intel Corporation 5520/5500 Physical and Link Layer Registers Port 1 (rev 22)
00:11.1 PIC: Intel Corporation 5520/5500 Routing & Protocol Layer Register Port 1 (rev 22)
00:14.0 PIC: Intel Corporation 5520/5500/X58 I/O Hub System Management Registers (rev 22)
00:14.1 PIC: Intel Corporation 5520/5500/X58 I/O Hub GPIO and Scratch Pad Registers (rev 22)
00:14.2 PIC: Intel Corporation 5520/5500/X58 I/O Hub Control Status and RAS Registers (rev 22)
00:14.3 PIC: Intel Corporation 5520/5500/X58 I/O Hub Throttle Registers (rev 22)
00:16.0 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:16.1 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:16.2 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:16.3 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:16.4 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:16.5 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:16.6 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:16.7 System peripheral: Intel Corporation 5520/5500/X58 Chipset QuickData Technology Device (rev 22)
00:1a.0 USB controller: Intel Corporation 82801JI (ICH10 Family) USB UHCI Controller #4
00:1a.1 USB controller: Intel Corporation 82801JI (ICH10 Family) USB UHCI Controller #5
00:1a.7 USB controller: Intel Corporation 82801JI (ICH10 Family) USB2 EHCI Controller #2
00:1b.0 Audio device: Intel Corporation 82801JI (ICH10 Family) HD Audio Controller
00:1c.0 PCI bridge: Intel Corporation 82801JI (ICH10 Family) PCI Express Root Port 1
00:1c.4 PCI bridge: Intel Corporation 82801JI (ICH10 Family) PCI Express Root Port 5
00:1c.5 PCI bridge: Intel Corporation 82801JI (ICH10 Family) PCI Express Root Port 6
00:1d.0 USB controller: Intel Corporation 82801JI (ICH10 Family) USB UHCI Controller #1
00:1d.1 USB controller: Intel Corporation 82801JI (ICH10 Family) USB UHCI Controller #2
00:1d.2 USB controller: Intel Corporation 82801JI (ICH10 Family) USB UHCI Controller #3
00:1d.3 USB controller: Intel Corporation 82801JI (ICH10 Family) USB UHCI Controller #6
00:1d.7 USB controller: Intel Corporation 82801JI (ICH10 Family) USB2 EHCI Controller #1
00:1e.0 PCI bridge: Intel Corporation 82801 PCI Bridge (rev 90)
00:1f.0 ISA bridge: Intel Corporation 82801JIR (ICH10R) lpc Interface Controller
00:1f.2 IDE interface: Intel Corporation 82801JI (ICH10 Family) 4 port SATA IDE Controller #1
00:1f.3 SMBus: Intel Corporation 82801JI (ICH10 Family) SMBus Controller
00:1f.5 IDE interface: Intel Corporation 82801JI (ICH10 Family) 2 port SATA IDE Controller #2
01:01.0 VGA compatible controller: ASPEED Technology, Inc. ASPEED Graphics Family (rev 10)
02:00.0 Ethernet controller: Intel Corporation 82574L Gigabit Network Connection
03:00.0 Ethernet controller: Intel Corporation 82574L Gigabit Network Connection
04:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2008 PCI-Express Fusion-MPT SAS-2 [Falcon] (rev 03)
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->