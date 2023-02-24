smartmontools
===

Smartmontools 是一种硬盘检测工具，通过控制和管理硬盘的SMART（Self Monitoring Analysis and Reporting Technology，自动检测分析及报告技术）技术来实现的

##安装

```shell
sudo aptitude install smartmontools
```

## 语法

```shell
smartctl (选项) (参数)
```

## 选项
```shell
-i <硬盘> 显示硬盘设备的标识信息
-a <硬盘> 显示设备的所有SMART信息
-H <硬盘> 显示设备的健康信息
-A <硬盘> 显示设备SMART供应商特定的属性和值
```

## 参数
硬盘设备：指定要查看的硬盘(可以使用 fdisk -l 获取有哪些硬盘设备)

```shell
~ sudo fdisk -l
设备          起点      末尾      扇区   大小 类型
/dev/sda1     2048   1050623   1048576   512M EFI 系统
/dev/sda2  1050624 976771071 975720448 465.3G Linux 文件系统
```

## 实例

查看 /dev/sda1 硬盘的健康状态，在这个命令中，"-s on"标志开启指定设备上的SMART功能。如果/dev/sda上已开启SMART支持，那就省略它。\
（PASSED 表示健康；FAILED 表示即将出现故障所以需要开始备份这块磁盘上的重要数据）
```shell
~ sudo smartctl -s on -H /dev/sda1   

=== START OF READ SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED
```

查看 /dev/sda1 硬盘特定的属性和值
(Power_On_Hours: 表示通电时长 18195 小时)
```shell
~ sudo smartctl -A /dev/sda1

=== START OF READ SMART DATA SECTION ===
SMART Attributes Data Structure revision number: 16
Vendor Specific SMART Attributes with Thresholds:
ID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE
  3 Spin_Up_Time            0x0023   100   100   002    Pre-fail  Always       -       1326
  4 Start_Stop_Count        0x0032   100   100   000    Old_age   Always       -       3752
  9 Power_On_Hours          0x0032   055   055   000    Old_age   Always       -       18195
 10 Spin_Retry_Count        0x0033   174   100   030    Pre-fail  Always       -       0
 12 Power_Cycle_Count       0x0032   100   100   000    Old_age   Always       -       3118
183 Runtime_Bad_Block       0x0032   100   100   001    Old_age   Always       -       0
184 End-to-End_Error        0x0033   100   100   097    Pre-fail  Always       -       0
185 Unknown_Attribute       0x0032   100   100   001    Old_age   Always       -       65535
187 Reported_Uncorrect      0x0032   001   001   000    Old_age   Always       -       134
188 Command_Timeout         0x0032   100   098   000    Old_age   Always       -       48
191 G-Sense_Error_Rate      0x0032   100   100   000    Old_age   Always       -       2850
192 Power-Off_Retract_Count 0x0022   100   100   000    Old_age   Always       -       32047593
193 Load_Cycle_Count        0x0032   095   095   000    Old_age   Always       -       51738
194 Temperature_Celsius     0x0022   060   055   040    Old_age   Always       -       40 (Min/Max 16/44)
```

### 以指定的间隔运行，同时又能通知硬盘的测试结果
首先，编辑smartctl的配置文件(/etc/default/smartmontools)以便在系统启动时启动smartd，并以秒为单位指定间隔时间（如7200 = 2小时）

```shell
start_smartd=yes
smartd_opts="--interval=7200"
```

下一步，编辑smartd的配置文件（/etc/smartd.conf），添加以下行内容。
```shell
/dev/sda -m myemail@mydomain.com -M test
```

选项说明 \
-m ：指定发送测试报告到某个电子邮件地址。这里可以是系统用户比如root，或者如果服务器已经配置成发送电子邮件到系统外部，则是类似于 myemail@mydomain.com 的邮件地址。\
-M ：指定发送邮件报告的期望类型。\
once：为检测到的每种磁盘问题只发送一封警告邮件。\
daily：为检测到的每种磁盘问题每隔一天发送一封额外的警告提醒邮件。\
diminishing：为检测到的每种问题发送一封额外的警告提醒邮件，开始是每隔一天，然后每隔两天，每隔四天，以此类推。每个间隔是前一次间隔的2倍。\
test：只要smartd一启动，立即发送一封测试邮件。\
exec PATH：取代默认的邮件命令，运行PATH路径下的可执行文件。PATH必须指向一个可执行的二进制文件或脚本。当检测到一个问题时，可以指定执行一个期望的动作（闪烁控制台、关闭系统等等）。

保存改动并重启smartd。