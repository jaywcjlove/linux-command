dmidecode
===

在Linux系统下获取有关硬件方面的信息

## 补充说明

**dmidecode命令** 可以让你在Linux系统下获取有关硬件方面的信息。dmidecode的作用是将DMI数据库中的信息解码，以可读的文本方式显示。由于DMI信息可以人为修改，因此里面的信息不一定是系统准确的信息。dmidecode遵循SMBIOS/DMI标准，其输出的信息包括BIOS、系统、主板、处理器、内存、缓存等等。

DMI（Desktop Management Interface,DMI）就是帮助收集电脑系统信息的管理系统，DMI信息的收集必须在严格遵照SMBIOS规范的前提下进行。SMBIOS（System Management BIOS）是主板或系统制造者以标准格式显示产品管理信息所需遵循的统一规范。SMBIOS和DMI是由行业指导机构Desktop Management Task Force(DMTF)起草的开放性的技术标准，其中DMI设计适用于任何的平台和操作系统。

DMI充当了管理工具和系统层之间接口的角色。它建立了标准的可管理系统更加方便了电脑厂商和用户对系统的了解。DMI的主要组成部分是Management Information Format(MIF)数据库。这个数据库包括了所有有关电脑系统和配件的信息。通过DMI，用户可以获取序列号、电脑厂商、串口信息以及其它系统配件信息。

###  语法 

```shell
dmidecode [选项]
```

###  选项 

```shell
-d：(default:/dev/mem)从设备文件读取信息，输出内容与不加参数标准输出相同。
-h：显示帮助信息。
-s：只显示指定DMI字符串的信息。(string)
-t：只显示指定条目的信息。(type)
-u：显示未解码的原始条目内容。
--dump-bin file：将DMI数据转储到一个二进制文件中。
--from-dump FILE：从一个二进制文件读取DMI数据。
-V：显示版本信息。
```

 **dmidecode参数string及type列表：** 

（1）Valid string keywords are：

*   bios-vendor
*   bios-version
*   bios-release-date
*   system-manufacturer
*   system-product-name
*   system-version
*   system-serial-number
*   system-uuid
*   baseboard-manufacturer
*   baseboard-product-name
*   baseboard-version
*   baseboard-serial-number
*   baseboard-asset-tag
*   chassis-manufacturer
*   chassis-type
*   chassis-version
*   chassis-serial-number
*   chassis-asset-tag
*   processor-family
*   processor-manufacturer
*   processor-version
*   processor-frequency

（2）Valid type keywords are：

*   bios
*   system
*   baseboard
*   chassis
*   processor
*   memory
*   Cache
*   connector
*   slot

（3）type全部编码列表：

*   BIOS
*   System
*   Base Board
*   Chassis
*   Processor
*   Memory Controller
*   Memory Module
*   Cache
*   Port Connector
*   System Slots
*   On Board Devices
*   OEM Strings
*   System Configuration Options
*   BIOS Language
*   Group Associations
*   System Event Log
*   Physical Memory Array
*   Memory Device
*   32-bit Memory Error
*   Memory Array Mapped Address
*   Memory Device Mapped Address
*   Built-in Pointing Device
*   Portable Battery
*   System Reset
*   Hardware Security
*   System Power Controls
*   Voltage Probe
*   Cooling Device
*   Temperature Probe
*   Electrical Current Probe
*   Out-of-band Remote Access
*   Boot Integrity Services
*   System Boot
*   64-bit Memory Error
*   Management Device
*   Management Device Component
*   Management Device Threshold Data
*   Memory Channel
*   IPMI Device
*   Power Supply
*   Additional Information
*   Onboard Device

###  实例 

```shell
dmidecode -t 1  # 查看服务器信息
dmidecode | grep 'Product Name' # 查看服务器型号 
dmidecode |grep 'Serial Number' # 查看主板的序列号 
dmidecode -t 2  # 查看主板信息
dmidecode -s system-serial-number # 查看系统序列号 
dmidecode -t memory # 查看内存信息 
dmidecode -t 11 # 查看OEM信息 
dmidecode -t 17 # 查看内存条数
dmidecode -t 16 # 查询内存信息
dmidecode -t 4  # 查看CPU信息

cat /proc/scsi/scsi # 查看服务器硬盘信息
```

不带选项执行dmidecode命令通常会输出所有的硬件信息。dmidecode命令有个很有用的选项-t，可以按指定类型输出相关信息，假如要获得处理器方面的信息，则可以执行：

```shell
[root@localhost ~]# dmidecode -t processor
# dmidecode 2.11
SMBIOS 2.5 present.

Handle 0x0001, DMI type 4, 40 bytes
Processor Information
        Socket Designation: Node 1 Socket 1
        Type: Central Processor
        Family: Xeon MP
        Manufacturer: Intel(R) Corporation
        id: C2 06 02 00 FF FB EB BF
        Signature: Type 0, Family 6, Model 44, Stepping 2
        Flags:
                FPU (Floating-point unit on-chip)
                VME (Virtual mode extension)
                DE (Debugging extension)
                PSE (Page size extension)
                TSC (time stamp counter)
                MSR (Model specific registers)
                PAE (Physical address extension)
                MCE (Machine check exception)
                CX8 (CMPXCHG8 instruction supported)
                APIC (On-chip APIC hardware supported)
                SEP (Fast system call)
                MTRR (Memory type range registers)
                PGE (Page global enable)
                MCA (Machine check architecture)
                CMOV (Conditional move instruction supported)
                PAT (Page attribute table)
                PSE-36 (36-bit page size extension)
                CLFSH (CLFLUSH instruction supported)
                DS (Debug store)
                ACPI (ACPI supported)
                MMX (MMX technology supported)
                FXSR (FXSAVE and FXSTOR instructions supported)
                SSE (Streaming SIMD extensions)
                SSE2 (Streaming SIMD extensions 2)
                ss (Self-snoop)
                HTT (Multi-threading)
                TM (Thermal monitor supported)
                PBE (Pending break enabled)
        Version: Intel(R) Xeon(R) CPU           E5620  @ 2.40GHz
        Voltage: 1.2 V
        External Clock: 5866 MHz
        Max Speed: 4400 MHz
        Current Speed: 2400 MHz
        Status: Populated, Enabled
        Upgrade: ZIF Socket
        L1 Cache Handle: 0x0002
        L2 Cache Handle: 0x0003
        L3 Cache Handle: 0x0004
        Serial Number: Not Specified
        Asset Tag: Not Specified
        Part Number: Not Specified
        Core Count: 4
        Core Enabled: 4
        Thread Count: 8
        Characteristics:
                64-bit capable

Handle 0x0055, DMI type 4, 40 bytes
Processor Information
        Socket Designation: Node 1 Socket 2
        Type: Central Processor
        Family: Xeon MP
        Manufacturer: Not Specified
        ID: 00 00 00 00 00 00 00 00
        Signature: Type 0, Family 0, Model 0, Stepping 0
        Flags: None
        Version: Not Specified
        Voltage: 1.2 V
        External Clock: 5866 MHz
        Max Speed: 4400 MHz
        Current Speed: Unknown
        Status: Unpopulated
        Upgrade: ZIF Socket
        L1 Cache Handle: Not Provided
        L2 Cache Handle: Not Provided
        L3 Cache Handle: Not Provided
        Serial Number: Not Specified
        Asset Tag: Not Specified
        Part Number: Not Specified
        Characteristics: None
```

查看内存的插槽数，已经使用多少插槽。每条内存多大，已使用内存多大

```shell
dmidecode|grep -P -A5 "Memory\s+Device"|grep Size|grep -v Range 

#   Size: 2048 MB
#   Size: 2048 MB
#   Size: 4096 MB
#   Size: No Module Installed
```

查看内存支持的最大内存容量

```shell
dmidecode|grep -P 'Maximum\s+Capacity'

#  Maximum Capacity: 16 GB
```

查看内存的频率

```shell
dmidecode|grep -A16 "Memory Device"

#   Memory Device
#     Array Handle: 0x1000
#     Error Information Handle: Not Provided
#     Total Width: 72 bits
#     Data Width: 64 bits
#     Size: 2048 MB
#     Form Factor: DIMM
#     Set: 1
#     Locator: DIMM_A1
#     Bank Locator: Not Specified
#     Type: DDR3
#     Type Detail: Synchronous Unbuffered (Unregistered)
#     Speed: 1333 MHz
#     Manufacturer: 00CE000080CE
#     Serial Number: 4830F3E1
#     Asset Tag: 01093200
#     Part Number: M391B5673EH1-CH9
#   --
#   Memory Device
#     Array Handle: 0x1000
#     Error Information Handle: Not Provided
#     Total Width: 72 bits
#     Data Width: 64 bits
#     Size: 2048 MB
#     Form Factor: DIMM
#     Set: 1
#     Locator: DIMM_A2
#     Bank Locator: Not Specified
#     Type: DDR3
#     Type Detail: Synchronous Unbuffered (Unregistered)
#     Speed: 1333 MHz
#     Manufacturer: 00AD000080AD
#     Serial Number: 1BA1F0B5
#     Asset Tag: 01110900
#     Part Number: HMT325U7BFR8C-H9
#   --

dmidecode|grep -A16 "Memory Device"|grep 'Speed'

#  Speed: 1333 MHz
#  Speed: 1333 MHz
#  Speed: 1333 MHz
#  Speed: Unknown

```shell



