systool
===

显示基于总线、类和拓扑显示系统中设备的信息

## 补充说明

**systool命令** 指令显示基于总线、类和拓扑显示系统中设备的信息。

### 语法  

```shell
systool(选项)(参数)
```

### 选项  

```shell
-a：显示被请求资源的属性；
-b<总线>：显示指定总线的信息；
-c<class>：显示指定类的信息；
-d：仅显示设备；
-h：显示指令的用法；
-m<模块名称>：显示指定模块的信息；
-p：显示资源的“sysfs”绝对路径；
-v：显示所有属性；
-A<属性>：显示请求资源的属性值；
-D：仅显示驱动程序信息；
-P：显示设备的父类。
```

### 参数  

设备：指定要查看信息的设备名称。

### 实例  

```shell
[root@localhost ~]# systool
Supported sysfs buses:
        acpi
        i2c
        ide
        pci_express
        pci
        pcmcia
        platform
        pnp
        scsi
        serio
        usb
Supported sysfs classes:
        backlight
        cpuid
        dma_v3
        firmware
        graphics
        hidraw
        hwmon
        i2c-adapter
        input
        leds
        mem
        misc
        msr
        net
        pci_bus
        pcmcia_socket
        printer
        raw
        sas_device
        sas_end_device
        sas_expander
        sas_host
        sas_phy
        sas_port
        scsi_device
        scsi_disk
        scsi_generic
        scsi_host
        sound
        tty
        usb_device
        usb_endpoint
        usb_host
        vc
        vtconsole
Supported sysfs devices:
        acpi
        pci0000:00
        platform
        pnp0
        sequencer2
        sequencer
        seq
        system
        timer
Supported sysfs modules:
        8250
        acpi_memhotplug
        ac
        asus_acpi
        ata_piix
        auth_rpcgss
        backlight
        battery
        button
        cifs
        cpufreq
        crypto_api
        dell_wmi
        dm_log
        dm_mem_cache
        dm_message
        dm_mirror
        dm_mod
        dm_multipath
        dm_raid45
        dm_region_hash
        dock
        e1000e
        edac_mc
        ehci_hcd
        exportfs
        ext3
        hwmon
        i2c_core
        i2c_ec
        i2c_i801
        i7core_edac
        i8042
        ip_conntrack_netbios_ns
        ip_conntrack
        ip_tables
        iptable_filter
        ipv6
        it821x
        jbd
        joydev
        keyboard
        libata
        lockd
        lp
        md_mod
        mousedev
        mpt2sas
        nfnetlink
        nfs_acl
        nfsd
        nls_utf8
        ohci_hcd
        parport_pc
        parport
        pci_hotplug
        pcmcia
        pcmcia_core
        pcspkr
        piix
        power_meter
        printk
        processor
        psmouse
        rsrc_nonstatic
        sbs
        scsi_dh
        scsi_mod
        scsi_transport_sas
        sd_mod
        serio_raw
        sg
        shpchp
        snd_hda_intel
        snd_hwdep
        snd_mixer_oss
        snd_page_alloc
        snd_pcm_oss
        snd_pcm
        snd_seq_device
        snd_seq_dummy
        snd_seq_midi_event
        snd_seq_oss
        snd_seq
        snd_timer
        snd
        soundcore
        sunrpc
        tcp_bic
        tpm_bios
        tpm_tis
        tpm
        uhci_hcd
        usbcore
        usbhid
        video
        wmi
        x_tables
        xfrm_nalgo
        xt_limit
        xt_state
        xt_tcpudp
        yenta_socket
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->