grub2-mkconfig
===

生成 grub.cfg 配置文件。

## 语法

```shell
用法: grub2-mkconfig [OPTION]
生成 grub 配置文件

  -o, --output=FILE       将生成的配置输出到 FILE 文件 [default=stdout]
  -h, --help              打印这个文件并退出
  -v, --version           打印版本信息并退出

报告 Bug 通过 <bug-grub@gnu.org>.

```

## 实例

生成新的grub配置文件

```shell
grub2-mkconfig -o /boot/grub2/grub.cfg

# 或者

grub2-mkconfig > /boot/grub2/grub.cfg
```
