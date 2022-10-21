grub2-mkconfig
===

生成 grub.cfg 配置文件。

## 语法

```shell
Usage: grub2-mkconfig [OPTION]
Generate a grub config file

  -o, --output=FILE       output generated config to FILE [default=stdout]
  -h, --help              print this message and exit
  -v, --version           print the version information and exit

Report bugs to <bug-grub@gnu.org>.

```

## 实例

生成新的grub配置文件

```shell
grub2-mkconfig -o /boot/grub2/grub.cfg

# 或者

grub2-mkconfig > /boot/grub2/grub.cfg
```
