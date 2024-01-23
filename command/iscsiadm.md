iscsiadm
===

管理iSCSI连接

## 补充说明

**iscsiadm命令** 用于管理 iSCSI（Internet Small Computer System Interface）存储连接。iSCSI 是一种基于网络的存储协议，允许在计算机之间传输块级别的数据。iscsiadm 命令提供了与 iSCSI 存储设备进行连接、配置和管理的功能。
```shell
yum install iscsi-initiator-utils   #安装iscsiadm
/etc/iscsi/initiatorname.iscsi      #iscsi启动器名称配置文件位置
systemctl enable iscsi              #设置服务开机启动
systemctl enable iscsid             
systemctl restart iscsi             #重启iscsi服务
systemctl restart iscsid           
```

## 语法

```shell
iscsiadm [选项] <命令> <参数>
```

## 选项

```shell
-m，--mode         # <模式> 指定工作模式，如discovery（发现模式）、node（管理节点）、session（管理会话）、discoverydb、host、iface（管理 iSCSI 网络接口）；
-t，--type         # 指定类型，如sendtargets (或st)、isns、fw，仅用于discovery模式；
-T，--targetname   # 指定目标名称，仅用于node模式；
-p，--portal       # <ip:port> 指定目标IP,不带端口默认使用3260，仅用于discovery、node模式；
-l，--login        # 登录一个iSCSI设备，仅用于discovery、node模式；
-u，--logout       # 退出一个iSCSI设备，仅用于node、session模式；
-I，--interface    # 指定用于iSCSI操作的网络接口；
-P，--print        # <0-4> 打印详细，用于discovery、node、session模式；
-s，--stats        # 查看会话状态
-h，--help         # 显示帮助；
-V，--version      # 显示版本信息。
```

## 实例

发送iSCSI发现请求，并列出发现的iSCSI设备目标器：

```shell
[root@Azroy-s1 ~]# iscsiadm -m discovery -t st -p 10.10.10.10
10.10.10.10:3260,1 iqn.2000-01.com.synology:NAS.default-target.1
```

登录到发现的iSCSI目标器：

```shell
[root@Azroy-s1 ~]# iscsiadm -m node -T iqn.2000-01.com.synology:NAS.target.1 -p 10.10.10.10 -l
Logging in to [iface: default, target: iqn.2000-01.com.synology:NAS.target.1, portal: 10.10.10.10,3260] (multiple)
Login to [iface: default, target: iqn.2000-01.com.synology:NAS.target.1, portal: 10.10.10.10,3260] successful.
```

查看已登录的设备：

```shell
[root@Azroy-s1 ~]# iscsiadm -m session
tcp: [3] 10.10.10.10:3260,1 iqn.2000-01.com.synology:NAS.target.1 (non-flash)
```

退出已登录的设备：

```shell
[root@Azroy-s1 ~]# iscsiadm -m node -T iqn.2000-01.com.synology:NAS.target.1 -p 10.10.10.10 -u
Logging out of session [sid: 11, target: iqn.2000-01.com.synology:NAS.target.1, portal: 10.10.10.10,3260]
或
[root@Azroy-s1 ~]# iscsiadm -m session -u   #退出所有iscsi会话
```

使用lsblk或fdisk查看硬盘，对硬盘分区再格式化后可挂载目录

```shell
[root@Azroy-s1 ~]# lsblk
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0  1.8T  0 disk
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0  1.8T  0 part
  ├─centos-root 253:0    0  1.8T  0 lvm  /
  └─centos-swap 253:1    0  5.9G  0 lvm  [SWAP]
sdb               8:32   0   10G  0 disk

[root@Azroy-s1 ~]# lsblk -S /dev/sd*   #可以查看硬盘传输类型
NAME HCTL       TYPE VENDOR   MODEL             REV TRAN
sda  0:1:0:0    disk HP       LOGICAL VOLUME   3.00 sas
sdb  12:0:0:1   disk SYNOLOGY Storage          4.0  iscsi

[root@Azroy-s1 ~]# fdisk -l /dev/sdb
磁盘 /dev/sdb：10.7 GB, 10737418240 字节，20971520 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
```



