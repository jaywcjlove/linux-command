ar
===

建立或修改备存文件，或是从备存文件中抽取文件

## 补充说明

**ar命令** 是一个建立或修改备存文件，或是从备存文件中抽取文件的工具，ar可让您集合许多文件，成为单一的备存文件。在备存文件中，所有成员文件皆保有原来的属性与权限

### 语法  

```
ab(选项)(参数)
Usage: ar [emulation options] [-]{dmpqrstx}[abcDfilMNoPsSTuvV] [--plugin <name>] [member-name] [count] archive-file file...
       ar -M [<mri-脚本]
```

### 选项  


```shell
d            - 从归档文件中删除文件
m[ab]        - 在归档文件中移动文件
p            - 打印在归档文件中找到的文件
q[f]         - 将文件快速追加到归档文件中
r[ab][f][u]  - 替换归档文件中已有的文件或加入新文件
s            - act as ranlib
t            - 显示归档文件的内容
x[o]         - 从归档文件中分解文件
特定命令修饰符：
[a]          - 将文件置于 [成员名] 之后
[b]          - 将文件置于 [成员名] 之前 (于 [i] 相同)
[D]          - use zero for timestamps and uids/gids
[U]          - use actual timestamps and uids/gids (default)
[N]          - use instance [count] of name
[f]          - truncate inserted file names
[P]          - 在匹配时使用完整的路径名
[o]          - 保留原来的日期
[u]          - 只替换比当前归档内容更新的文件
通用修饰符：
[c]          - 不在必须创建库的时候给出警告
[s]          - 创建归档索引 (cf. ranlib)
[S]          - 不要创建符号表
[T]          - 做一个压缩档案
[v]          - 输出较多信息
[V]          - 显示版本号
@<file>      - 从<file>读取选项
--target=BFDNAME - 将目标对象格式指定为BFDNAME
```

选项参数 

```shell
--plugin <p> - load the specified plugin
```

ar：支持的目标： elf64-x86-64 elf32-i386 elf32-x86-64 a.out-i386-linux pei-i386 pei-x86-64 elf64-l1om elf64-k1om elf64-little elf64-big elf32-little elf32-big plugin srec symbolsrec verilog tekhex binary ihex

### 实例

打包文件

```shell
[root@localhost ~]# ls   # 显示当前目录文件   
a.c	b.c d.c   install.log	  qte
anaconda-ks.cfg c.c Desktop 

[root@localhost ~]# ar rv one.bak a.c b.c  # 打包 a.c b.c文件 
ar: 正在创建 one.bak
a - a.c
a - b.c
```

打包多个文件

```shell
[root@localhost ~]# ar rv two.bak *.c  // 打包以.c结尾的文件  
ar: 正在创建 two.bak
a - a.c
a - b.c
a - c.c
a - d.c
```

显示打包文件的内容

```shell
[root@localhost ~]# ar t two.bak    
a.c
b.c
c.c
d.c
```

删除打包文件的成员文件

```shell
[root@localhost ~]# ar d two.bak a.c b.c c.c  
[root@localhost ~]# ar t two.bak       
d.c
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
