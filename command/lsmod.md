lsmod
===

显示已载入系统的模块

## 补充说明

**lsmod命令** 用于显示已经加载到内核中的模块的状态信息。执行lsmod命令后会列出所有已载入系统的模块。Linux操作系统的核心具有模块化的特性，应此在编译核心时，务须把全部的功能都放入核心。您可以将这些功能编译成一个个单独的模块，待需要时再分别载入。

###  语法

```shell
lsmod
```

###  实例

```shell
[root@LinServ-1 ~]# lsmod
Module                  Size  Used by
ipv6                  272801  15
xfrm_nalgo             13381  1 ipv6
crypto_api             12609  1 xfrm_nalgo
ip_conntrack_ftp       11569  0
xt_limit                6721  2
xt_state                6209  2
ip_conntrack           53665  2 ip_conntrack_ftp,xt_state
nfnetlink              10713  1 ip_conntrack
xt_tcpudp               7105  6
xt_multiport            7233  1
iptable_filter          7105  1
ip_tables              17029  1 iptable_filter
x_tables               17349  5 xt_limit,xt_state,xt_tcpudp,xt_multiport,ip_tables
dm_mirror              24393  0
dm_multipath           27213  0
scsi_dh                12481  1 dm_multipath
video                  21193  0
backlight              10049  1 video
sbs                    18533  0
power_meter            16461  0
hwmon                   7365  1 power_meter
i2c_ec                  9025  1 sbs
dell_wmi                8401  0
wmi                    12137  1 dell_wmi
button                 10705  0
battery                13637  0
asus_acpi              19289  0
ac                      9157  0
lp                     15849  0
snd_hda_intel         401453  0
snd_seq_dummy           7877  0
snd_seq_oss            32577  0
snd_seq_midi_event     11073  1 snd_seq_oss
snd_seq                49585  5 snd_seq_dummy,snd_seq_oss,snd_seq_midi_event
snd_seq_device         11725  3 snd_seq_dummy,snd_seq_oss,snd_seq
snd_pcm_oss            42817  0
snd_mixer_oss          19009  1 snd_pcm_oss
snd_pcm                72517  2 snd_hda_intel,snd_pcm_oss
ide_cd                 40161  0
snd_timer              24517  2 snd_seq,snd_pcm
tpm_tis                16713  0
r8169                  43077  0
snd_page_alloc         14281  2 snd_hda_intel,snd_pcm
tpm                    19041  1 tpm_tis
i2c_i801               12737  0
mii                     9409  1 r8169
serio_raw              10693  0
i2c_core               24897  2 i2c_ec,i2c_i801
snd_hwdep              12869  1 snd_hda_intel
tpm_bios               11073  1 tpm
cdrom                  36577  1 ide_cd
pcspkr                  7105  0
parport_pc             29669  1
sg                     36973  0
snd                    57797  9 snd_hda_intel,snd_seq_oss,snd_seq,snd_seq_device,snd_pcm_oss,snd_mixer_oss,snd_pcm,snd_timer,snd_hwdep
parport                37513  2 lp,parport_pc
soundcore              11553  1 snd
dm_raid45              67273  0
dm_message              6977  1 dm_raid45
dm_region_hash         15681  1 dm_raid45
dm_log                 14785  3 dm_mirror,dm_raid45,dm_region_hash
dm_mod                 63993  4 dm_mirror,dm_multipath,dm_raid45,dm_log
dm_mem_cache            9537  1 dm_raid45
ata_piix               23749  4
libata                158085  1 ata_piix
sd_mod                 25409  6
scsi_mod              144277  4 scsi_dh,sg,libata,sd_mod
ext3                  126281  3
jbd                    57705  1 ext3
uhci_hcd               25421  0
ohci_hcd               24937  0
ehci_hcd               34509  0
```

*   第1列：表示模块的名称。
*   第2列：表示模块的大小。
*   第3列：表示依赖模块的个数。
*   第4列：表示依赖模块的内容。

通常在使用lsmod命令时，都会采用类似`lsmod | grep -i ext3`这样的命令来查询当前系统是否加载了某些模块。


