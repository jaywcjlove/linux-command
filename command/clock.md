clock
===

用于调整 RTC 时间

## 补充说明

**clock命令**用于调整 RTC 时间。 RTC 是电脑内建的硬件时间，执行这项指令可以显示现在时刻，调整硬件时钟的时间，将系统时间设成与硬件时钟之时间一致，或是把系统时间回存到硬件时钟。

###  语法

```shell
clock [--adjust][--debug][--directisa][--getepoch][--hctosys][--set --date="<日期时间>"]
[--setepoch --epoch=< >][--show][--systohc][--test][--utc][--version]
```

###  选项

```shell
--adjust 　第一次使用"--set"或"--systohc"参数设置硬件时钟，会在/etc目录下产生一个名称为adjtime的文件。当再次使用这两个参数调整硬件时钟，此文件便会记录两次调整间之差异，日后执行clock指令加上"--adjust"参数时，程序会自动根 据记录文件的数值差异，计算出平均值，自动调整硬件时钟的时间。
--debug 　详细显示指令执行过程，便于排错或了解程序执行的情形。
--directisa 　告诉clock指令不要通过/dev/rtc设备文件，直接对硬件时钟进行存取。这个参数适用于仅有ISA总线结构的老式电脑。
--getepoch 　把系统核心内的硬件时钟新时代数值，呈现到标准输出设备。
--hctosys 　Hardware Clock to System Time，把系统时间设成和硬件时钟一致。由于这个动作将会造成系统全面更新文件的存取时间，所以最好在系统启动时就执行它。
--set--date 　设置硬件时钟的日期和时间。
--setepoch--epoch=<年份> 　设置系统核心之硬件时钟的新时代数值，年份以四位树字表示。
--show 　读取硬件时钟的时间，并将其呈现至标准输出设备。
--systohc 　System Time to Hardware Clock，将系统时间存回硬件时钟内。
--test 　仅作测试，并不真的将时间写入硬件时钟或系统时间。
--utc 　把硬件时钟上的时间时为CUT，有时也称为UTC或UCT。
--version 　显示版本信息。
```

### 实例

获取当前的时间

```shell
clock # 获取当前的时间
```

显示UTC时间

```shell
clock -utc #显示UTC时间
```



