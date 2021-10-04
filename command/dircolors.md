dircolors
===

置ls命令在显示目录或文件时所用的色彩

## 补充说明

**dircolors命令** 设置ls命令在显示目录或文件时所用的色彩。dircolors可根据[色彩配置文件]来设置LS_COLORS环境变量或是显示设置LS_COLORS环境变量的命令。

###  语法

```shell
dircolors(选项)(参数)
```

###  选项

```shell
-b或--sh或--bourne-shell：显示在Boume shell中，将LS_COLORS设为目前预设置的shell指令；
-c或--csh或--c-shell：显示在C shell中，将LS_COLORS设为目前预设置的shell指令；
-p或--print-database：显示预设置；
-help：显示帮助；
-version：显示版本信息。
```

###  参数

文件：指定用来设置颜色的文件。

###  实例

```shell
[root@localhost ~]# dircolors -p
# Configuration file for dircolors, a utility to help you set the
# LS_COLORS environment variable used by GNU ls with the --color option.
# The keywords COLOR, OPTIONS, and EIGHTBIT (honored by the
# slackware version of dircolors) are recognized but ignored.
# Below, there should be one TERM entry for each termtype that is colorizable
TERM linux
TERM linux-c
TERM mach-color
TERM console
TERM con132x25
TERM con132x30
TERM con132x43
TERM con132x60
TERM con80x25
TERM con80x28
TERM con80x30
TERM con80x43
TERM con80x50
TERM con80x60
TERM cygwin
TERM dtterm
TERM putty
TERM xterm
TERM xterm-color
TERM xterm-debian
TERM rxvt
TERM screen
TERM screen-bce
TERM screen-w
TERM vt100
TERM Eterm
# Below are the color init strings for the basic file types. A color init
# string consists of one or more of the following numeric codes:
# Attribute codes:
# 00=none 01=bold 04=underscore 05=blink 07=reverse 08=concealed
# Text color codes:
# 30=black 31=red 32=green 33=yellow 34=blue 35=magenta 36=cyan 37=white
# Background color codes:
# 40=black 41=red 42=green 43=yellow 44=blue 45=magenta 46=cyan 47=white
NORMAL 00 # global default, although everything should be something.
FILE 00 # normal file
DIR 01;34 # directory
LINK 01;36 # symbolic link. (If you set this to 'target' instead of a
 # numerical value, the color is as for the file pointed to.)
FIFO 40;33 # pipe
SOCK 01;35 # socket
DOOR 01;35 # door
BLK 40;33;01 # block device driver
CHR 40;33;01 # character device driver
ORPHAN 40;31;01 # symlink to nonexistent file
SETUID 37;41 # file that is setuid (u+s)
SETGID 30;43 # file that is setgid (g+s)
STICKY_OTHER_WRITABLE 30;42 # dir that is sticky and other-writable (+t,o+w)
OTHER_WRITABLE 34;42 # dir that is other-writable (o+w) and not sticky
STICKY 37;44 # dir with the sticky bit set (+t) and not other-writable
# This is for files with execute permission:
exec 01;32
# List any file extensions like '.gz' or '.tar' that you would like ls
# to colorize below. Put the extension, a space, and the color init string.
# (and any comments you want to add after a '#')
# If you use DOS-style suffixes, you may want to uncomment the following:
#.cmd 01;32 # executables (bright green)
#.exe 01;32
#.com 01;32
#.btm 01;32
#.bat 01;32
.tar 01;31 # archives or compressed (bright red)
.tgz 01;31
.arj 01;31
.taz 01;31
.lzh 01;31
.zip 01;31
.z 01;31
.Z 01;31
.gz 01;31
.bz2 01;31
.deb 01;31
.rpm 01;31
.jar 01;31
# image formats
.jpg 01;35
.jpeg 01;35
.gif 01;35
.bmp 01;35
.pbm 01;35
.pgm 01;35
.ppm 01;35
.tga 01;35
.xbm 01;35
.xpm 01;35
.tif 01;35
.tiff 01;35
.png 01;35
.mov 01;35
.mpg 01;35
.mpeg 01;35
.avi 01;35
.fli 01;35
.gl 01;35
.dl 01;35
.xcf 01;35
.xwd 01;35
# audio formats
.flac 01;35
.mp3 01;35
.mpc 01;35
.ogg 01;35
.wav 01;35
```


