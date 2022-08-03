depmod
===

分析可载入模块的相依性

## 补充说明

**depmod命令** 可产生模块依赖的映射文件，在构建嵌入式系统时，需要由这个命令来生成相应的文件，由modprobe使用。

###  语法

```shell
depmod(选项)
```

###  选项

```shell
-a或--all：分析所有可用的模块；
-d或debug：执行排错模式；
-e：输出无法参照的符号；
-i：不检查符号表的版本；
-m<文件>或system-map<文件>：使用指定的符号表文件；
-s或--system-log：在系统记录中记录错误；
-v或--verbose：执行时显示详细的信息；
-V或--version：显示版本信息；
--help：显示帮助。
```

###  实例

```shell
depmod -b /home/windsome/EMMA3PF-KernelSource-20080626/install_pos -e -F ./boot/System.map -v 2.6.18_pro500-bcm91250-mips2_fp_be -A -a
```

*   `/home/windsome/EMMA3PF-KernelSource-20080626/install_pos`是我`make mod_install`后，所有模块的存放路径。
*   `./boot/System.map`是`make linux`后生成，我拷贝到此目录的。
*   `2.6.18_pro500-bcm91250-mips2_fp_be`是我build的linux的版本。

编译linux过程及执行depmod的例子：

```shell
genkernel.sh (at linux-2.6.18_pro500)
#######
export INSTALL_ROOT_EMMA3PF="/home/windsome/EMMA3PF-KernelSource-20080626/install_pos"
export INSTALL_MOD_EMMA3PF="/home/windsome/EMMA3PF-KernelSource-20080626/install_pos"
rm /home/windsome/EMMA3PF-KernelSource-20080626/install_pos/lib -rf
rm /home/windsome/EMMA3PF-KernelSource-20080626/install_pos/boot/* -rf
cd <linux_src_dir>
make
make modules_install
cp vmlinux System.map /home/windsome/EMMA3PF-KernelSource-20080626/install_pos/boot/ -p
cd /home/windsome/EMMA3PF-KernelSource-20080626/install_pos
depmod -b /home/windsome/EMMA3PF-KernelSource-20080626/install_pos -e -F ./boot/System.map -v 2.6.18_pro500-bcm91250-mips2_fp_be -A -a
```

其他用法：

在linux桌面系统中，当你编译了新的驱动，为了能够用`modprobe ***`加载模块, 你需要先将模块拷贝到`/lib/modules /2.6.31-20-generic`目录下，然后运行`sudo depmod -a`将模块信息写入modules.dep、modules.dep.bin、modules.alias.bin、modules.alias和modules.pcimap文件中。

如，我编译了一个新的wifi驱动r8192se_pci.ko，将其拷贝到`/lib/modules/2.6.31-20-generic/wireless`下，然后到`/lib/modules/2.6.31-20-generic`运行`depmod -a`，之后可以在任意目录运行modprobe r8192se_pci。


