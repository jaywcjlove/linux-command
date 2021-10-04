slabtop
===

实时显示内核slab内存缓存信息

## 补充说明

**slabtop命令** 以实时的方式显示内核“slab”缓冲区的细节信息。

###  语法

```shell
slabtop(选项)
```

###  选项

```shell
--delay=n, -d n：每n秒更新一次显示的信息，默认是每3秒；
--sort=S, -s S：指定排序标准进行排序（排序标准，参照下面或者man手册）；
--once, -o：显示一次后退出；
--version, -V：显示版本；
--help：显示帮助信息。
```

排序标准：

*   a: sort by number of active objects
*   b: sort by objects per slab
*   c: sort by cache size
*   l: sort by number of slabs
*   v：sort by number of active slabs
*   n: sort by name
*   o: sort by number of objects
*   p: sort by pages per slab
*   s: sort by object size
*   u: sort by cache utilization

###  知识扩展

内核的模块在分配资源的时候，为了提高效率和资源的利用率，都是透过slab来分配的。通过slab的信息，再配合源码能粗粗了解系统的运行情况，比如说什么资源有没有不正常的多，或者什么资源有没有泄漏。linux系统透过/proc/slabinfo来向用户暴露slab的使用情况。

Linux 所使用的 slab 分配器的基础是 Jeff Bonwick 为 SunOS 操作系统首次引入的一种算法。Jeff 的分配器是围绕对象缓存进行的。在内核中，会为有限的对象集（例如文件描述符和其他常见结构）分配大量内存。Jeff 发现对内核中普通对象进行初始化所需的时间超过了对其进行分配和释放所需的时间。因此他的结论是不应该将内存释放回一个全局的内存池，而是将内存保持为针对特定目而初始化的状态。Linux slab 分配器使用了这种思想和其他一些思想来构建一个在空间和时间上都具有高效性的内存分配器。

保存着监视系统中所有活动的 slab 缓存的信息的文件为/proc/slabinfo。

###  实例

```shell
slabtop

 Active / Total Objects (% used)    : 897519 / 1245930 (72.0%)
 Active / Total Slabs (% used)      : 38605 / 38605 (100.0%)
 Active / Total Caches (% used)     : 94 / 145 (64.8%)
 Active / Total Size (% used)       : 129558.22K / 153432.58K (84.4%)
 Minimum / Average / Maximum Object : 0.01K / 0.12K / 128.00K

  OBJS ACTIVE  USE OBJ SIZE  SLABS OBJ/SLAB CACHE SIZE NAME                   
440136 171471  38%    0.05K   6113       72     24452K buffer_head
190086 148576  78%    0.05K   2437       78      9748K selinux_inode_security
151840 146366  96%    0.48K  18980        8     75920K ext3_inode_cache
144333 144143  99%    0.02K    711      203      2844K avtab_node
130529 128488  98%    0.13K   4501       29     18004K dentry_cache
 99214  99071  99%    0.03K    878      113      3512K size-32
 43834  28475  64%    0.27K   3131       14     12524K radix_tree_node
 17818   9450  53%    0.06K    302       59      1208K size-64
  4602   4562  99%    0.05K     59       78       236K sysfs_dir_cache
  3220   2855  88%    0.08K     70       46       280K vm_area_struct
  2460   2114  85%    0.12K     82       30       328K size-128
  1564   1461  93%    0.04K     17       92        68K Acpi-Operand
  1540   1540 100%    0.33K    140       11       560K inode_cache
  1524    466  30%    0.01K      6      254        24K anon_vma
  1440    515  35%    0.05K     20       72        80K avc_node
  1440   1154  80%    0.19K     72       20       288K filp
  1170   1023  87%    0.05K     15       78        60K ext3_xattr
   845    724  85%    0.02K      5      169        20K Acpi-Namespace
   638    315  49%    0.35K     58       11       232K proc_inode_cache
   450    434  96%    0.25K     30       15       120K size-256
   424    386  91%    0.50K     53        8       212K size-512
   312    107  34%    0.05K      4       78        16K delayacct_cache
   306    284  92%    0.43K     34        9       136K shmem_inode_cache
   303    108  35%    0.04K      3      101        12K pid
   300    261  87%    0.19K     15       20        60K skbuff_head_cache
   300    300 100%    0.12K     10       30        40K bio
   260    260 100%   32.00K    260        1      8320K size-32768
   254      6   2%    0.01K      1      254         4K revoke_table
   236     55  23%    0.06K      4       59        16K fs_cache
   216    203  93%    1.00K     54        4       216K size-1024
   214    214 100%    2.00K    107        2       428K size-2048
   203     83  40%    0.02K      1      203         4K biovec-1
```


