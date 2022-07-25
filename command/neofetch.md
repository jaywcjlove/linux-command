neofetch
===

显示带有发行徽标的系统信息的工具

## 补充说明

**neofetch** 支持Linux/Unix、Windows、macOS。各发行版均已集成包可直接进行安装

Neofetch是一个在终端上显示带有发行徽标的系统信息工具，neofetch命令将显示有关相应系统的简要信息。 
显示的信息包括: 型号、操作系统、内核、CPU、GPU、内存、正常运行时间、程序包、shell、分辨率、DE、WM、WM主题、主题、图标和终端等

Neofetch是一个开源工具，[项目地址](https://github.com/dylanaraps/neofetch)

### 安装

Debian/Ubuntu

```shell
sudo apt install neofetch -y
```

CentOS

```shell
sudo yum install neofetch -y
sudo dnf install neofetch -y
```

[更多系统安装](https://github.com/dylanaraps/neofetch/wiki/Installation)
###  语法

```
neofetach
```

###  返回

**回显**

macOS:
```shell
                    'c.          mac@Mac-mini.local
                 ,xNMM.          --------------------------
               .OMMMMo           OS: macOS 12.4 21F79 arm64
               OMMM0,            Host: Macmini9,1
     .;loddo:' loolloddol;.      Kernel: 21.5.0
   cKMMMMMMMMMMNWMMMMMMMMMM0:    Uptime: 2 hours, 57 mins
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    Packages: 20 (brew)
 XMMMMMMMMMMMMMMMMMMMMMMMX.      Shell: zsh 5.8.1
;MMMMMMMMMMMMMMMMMMMMMMMM:       Resolution: 2560x1440, 1920x1080
:MMMMMMMMMMMMMMMMMMMMMMMM:       DE: Aqua
.MMMMMMMMMMMMMMMMMMMMMMMMX.      WM: Quartz Compositor
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    WM Theme: Blue (Dark)
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   Terminal: iTerm2
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   Terminal Font: Monaco 12
    kMMMMMMMMMMMMMMMMMMMMMMd     CPU: Apple M1
     ;KMMMMMMMWXXWMMMMMMMk.      GPU: Apple M1
       .cooc,.    .,coo:.        Memory: 2251MiB / 16384MiB
```

Ubuntu:

```shell
            .-/+oossssoo+/-.               root@root 
        `:+ssssssssssssssssss+:`           ------------ 
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu 20.04.4 LTS aarch64 
    .ossssssssssssssssssdMMMNysssso.       Host: Firefly RK3568-ROC-PC HDMI (Linux) 
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 4.19.193 
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 7 days, 13 hours, 3 mins 
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 1158 (dpkg) 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: bash 5.0.17 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 1440x900 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   WM: Openbox 
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Theme: Arc-Darker [GTK3] 
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Icons: Adwaita [GTK3] 
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Terminal: /dev/pts/0 
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    CPU: Firefly RK3568-ROC-PC HDMI (Linux) (4) @ 1.992GHz 
  +sssssssssdmydMMMMMMMMddddyssssssss+     Memory: 617MiB / 7687MiB 
   /ssssssssssshdmNNNNmyNMMMMhssssss/
    .ossssssssssssssssssdMMMNysssso.                               
      -+sssssssssssssssssyyyssss+-                                 
        `:+ssssssssssssssssss+:`
            .-/+oossssoo+/-.
```


