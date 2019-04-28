lsusb
===

显示本机的USB设备列表信息

## 补充说明

**lsusb命令** 用于显示本机的USB设备列表，以及USB设备的详细信息。

lsusb命令是一个学习USB驱动开发，认识USB设备的助手，推荐大家使用，如果您的开发板中或者产品中没有lsusb命令可以自己移植一个，放到文件系统里面。

### 语法  

```shell
lsusb(选项)
```

### 选项  

```shell
-v：显示USB设备的详细信息；
-s<总线：设备号>仅显示指定的总线和（或）设备号的设备；
-d<厂商：产品>：仅显示指定厂商和产品编号的设备；
-t：以树状结构显示无理USB设备的层次；
-V：显示命令的版本信息。
```

### 实例  

插入usb鼠标后执行lsusb的输出内容如下:

```shell
Bus 005 Device 001: id 0000:0000 
Bus 001 Device 001: ID 0000:0000 
Bus 004 Device 001: ID 0000:0000 
Bus 003 Device 001: ID 0000:0000 
Bus 002 Device 006: ID 15d9:0a37 
Bus 002 Device 001: ID 0000:0000 
```

解释：

 **Bus 005** 

表示第五个usb主控制器(机器上总共有5个usb主控制器 -- 可以通过命令lspci | grep USB查看)

 **Device 006** 

表示系统给usb鼠标分配的设备号(devnum)，同时也可以看到该鼠标是插入到了第二个usb主控制器

```shell
006        usb_device.devnum
/sys/devices/pci0000:00/0000:00:1d.1/usb2/2-2/devnum
```

 **ID 15d9:0a37** 

表示usb设备的ID（这个ID由芯片制造商设置，可以唯一表示该设备）

```shell
15d9    usb_device_descriptor.idVendor
0a37    usb_device_descriptor.idProduct
/sys/devices/pci0000:00/0000:00:1d.1/usb2/2-2/idVendor
```

**Bus 002 Device 006: ID 15d9:0a37  
Bus 002 Device 001: ID 0000:0000**

表示002号usb主控制器上接入了两个设备:

* 一个是usb根Hub -- 001 
* 一个是usb鼠标  -- 006


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->