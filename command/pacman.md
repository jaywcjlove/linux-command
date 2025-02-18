pacman
===

Arch Linux 系统及其衍生系统中默认使用的包管理器

## 安装

在安装 Arch Linux 时，会需要安装 base 包组，其中包括 pacman 包，具体 Arch Linux 安装流程请参见 [Arch Wiki(CN)](https://wiki.archlinuxcn.org/wiki/%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97)

## 实例

### 安装软件包
官方软件包
```bash
pacman -S p7zip
```

非官方软件包（用户制作）
```bash
yay -S package_name1 package_name2 ...
```

### 查询软件包

```bash
pacman -Ss package_name1 package_name2 ...
```

### 列出所有软件包

```bash
pacman -Q
```

### 删除某个软件包

```bash
pacman -R p7zip
```

或者是同时删除他的依赖

```bash
pacman -Rsc p7zip
```

### 开始滚动更新

```bash
pacman -Syyu
```

## 参考资料

- Archlinux 中文维基<https://wiki.archlinuxcn.org/zh-hans/Pacman>
