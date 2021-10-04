get_module
===

获取Linux内核模块的详细信息

## 补充说明

**get_module命令** 用于获取Linux内核模块的详细信息。

###  语法

```shell
get_module 模块名
```

###  实例

使用lsmod命令查看内核模块：

```shell
lsmod | head -5
Module                  Size  Used by
ipv6                  272801  15
xfrm_nalgo             13381  1 ipv6
crypto_api             12609  1 xfrm_nalgo
ip_conntrack_ftp       11569  0
```

使用get_module命令查看模块详细信息：

```shell
get_module ipv6
        refcnt               : 15
        srcversion           : 8CC9C024755B4483E56C0EF

Parameters:
        autoconf             : 1
        disable              : 0
        disable_ipv6         : 0
Sections:
        .altinstr_replacement : 0xf8f1a3cf
        .altinstructions     : 0xf8f1d03c
        .bss                 : 0xf8f36000
        .data.read_mostly    : 0xf8f34d20
        .data                : 0xf8f2f7a0
        .exit.text           : 0xf8f1a234
        .gnu.linkonce.this_module : 0xf8f34e00
        .init.data           : 0xf8a16a60
        .init.text           : 0xf8a16000
        .module_sig          : 0xf8f37960
        .rodata.str1.1       : 0xf8f1ae46
        .rodata              : 0xf8f1a420
        .smp_locks           : 0xf8f1d150
        .strtab              : 0xf8f29840
        .symtab              : 0xf8f24000
        .text                : 0xf8ef5000
        __kcrctab            : 0xf8f1de70
        __kcrctab_gpl        : 0xf8f1d9cc
        __ksymtab            : 0xf8f1dd78
        __ksymtab_gpl        : 0xf8f1d954
        __ksymtab_strings    : 0xf8f1da44
        __param              : 0xf8f1da08
        __versions           : 0xf8f1df00
```


