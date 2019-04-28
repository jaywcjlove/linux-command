setpci
===

查询和配置PCI设备的使用工具

## 补充说明

**setpci命令** 是一个查询和配置PCI设备的使用工具。

### 语法  

```shell
setpci(选项)(参数)
```

### 选项  

```shell
-v：显示指令执行的细节信息；
-f：当没有任何操作需要完成时，不显示任何信息；
-D：测试模式，并不真正将配置信息写入寄存器；
-d：仅显示给定厂商和设备的信息；
-s：仅显示指定总线、插槽上的设备或设备上的功能块信息。
```

### 参数  

*   PCI设备：指定要配置的PCI设备；
*   操作：指定要完成的配置操作。

### 实例  

Linux下调节笔记本屏幕亮度方法：

首先进入终端输入lspci命令，列出各种设备的地址：

```shell
lspci
00:00.0 host bridge: Intel Corporation Mobile 945GM/PM/GMS, 943/940GML and 945GT Express Memory Controller Hub (rev 03)
00:02.0 VGA compatible controller: Intel Corporation Mobile 945GM/GMS, 943/940GML Express Integrated Graphics Controller (rev 03)
00:02.1 Display controller: Intel Corporation Mobile 945GM/GMS/GME, 943/940GML Express Integrated Graphics Controller (rev 03)
00:1b.0 Audio device: Intel Corporation N10/ICH 7 Family High Definition Audio Controller (rev 02)
00:1c.0 PCI bridge: Intel Corporation N10/ICH 7 Family PCI Express Port 1 (rev 02)
00:1c.1 PCI bridge: Intel Corporation N10/ICH 7 Family PCI Express Port 2 (rev 02)
......
```

发现00:02.0是VGA设备，于是我们修改它的属性：

```shell
sudo setpci -s 00:02.0 F4.B=FF
```

解释一下：

*    **setpci**  是修改设备属性的命令。
*    **-s**  表示接下来输入的是设备的地址。
*    **00:02.0**  VGA设备地址（<总线>:<接口>.<功能>）。
*    **F4**  要修改的属性的地址，这里应该表示“亮度”。
*    **.B**  修改的长度（B应该是字节（Byte），还有w（应该是Word，两个字节）、L（应该是Long，4个字节））。
*    **=FF**  要修改的值（可以改）。

我这里00是最暗，FF是最亮，不同的电脑可能不一样。比如说我嫌FF太闪眼了，我就可以：

```shell
sudo setpci -s 00:02.0 F4.B=CC
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->