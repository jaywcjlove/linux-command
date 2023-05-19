grub2-set-default
===

设置系统默认的启动内核

## 语法

```shell
Usage: grub2-set-default [OPTION] MENU_ENTRY
Set the default boot menu entry for GRUB.
This requires setting GRUB_DEFAULT=saved in /etc/default/grub.

  -h, --help              print this message and exit
  -v, --version           print the version information and exit
  --boot-directory=DIR    expect GRUB images under the directory DIR/grub2
                          instead of the /boot/grub2 directory

MENU_ENTRY is a number, a menu item title or a menu item identifier.

Report bugs to <bug-grub@gnu.org>.

```

## 实例

查看可选的系统内核：
```shell
# awk -F\' '$1=="menuentry " {print $2}' /etc/grub2.cfg
CentOS Linux (5.4.219-1.el7.elrepo.x86_64) 7 (Core)
CentOS Linux (3.10.0-1160.76.1.el7.x86_64) 7 (Core)
CentOS Linux (3.10.0-862.el7.x86_64) 7 (Core)
CentOS Linux (0-rescue-3221d376917c458992a952d6327f2d6a) 7 (Core)
```

grub2-set-default后面的序号从0开始。所以，如果想设置第一个选项为默认启动内核，则可以使用下面的命令：

```shell
# grub2-set-default 0
```
如果想使用CentOS Linux (3.10.0-862.el7.x86_64) 7 (Core)内核版本,则可以将0改为2

重启系统
```shell
~]# init 6
```