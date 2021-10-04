pmap
===

报告进程的内存映射关系

## 补充说明

**pmap命令** 用于报告进程的内存映射关系，是Linux调试及运维一个很好的工具。

###  语法

```shell
pmap(选项)(参数)
```

###  选项

```shell
-x：显示扩展格式；
-d：显示设备格式；
-q：不显示头尾行；
-V：显示指定版本。
```

###  参数

进程号：指定需要显示内存映射关系的进程号，可以是多个进程号。

###  实例

```shell
pidof nginx
13312 5371

pmap -x 5371
5371:   nginx: worker process                
Address           Kbytes     RSS   Dirty Mode   Mapping
0000000000400000     564     344       0 r-x--  nginx
000000000068c000      68      68      60 rw---  nginx
000000000069d000      56      12      12 rw---    [ anon ]
000000000a0c8000    1812    1684    1684 rw---    [ anon ]
0000003ac0a00000     112      40       0 r-x--  ld-2.5.so
0000003ac0c1c000       4       4       4 r----  ld-2.5.so
0000003ac0c1d000       4       4       4 rw---  ld-2.5.so
0000003ac0e00000    1340     284       0 r-x--  libc-2.5.so
0000003ac0f4f000    2044       0       0 -----  libc-2.5.so
0000003ac114e000      16      16       8 r----  libc-2.5.so
0000003ac1152000       4       4       4 rw---  libc-2.5.so
0000003ac1153000      20      20      20 rw---    [ anon ]
0000003ac1200000       8       4       0 r-x--  libdl-2.5.so
0000003ac1202000    2048       0       0 -----  libdl-2.5.so
0000003ac1402000       4       4       4 r----  libdl-2.5.so
0000003ac1403000       4       4       4 rw---  libdl-2.5.so
0000003ac1600000      84       0       0 r-x--  libselinux.so.1
0000003ac1615000    2048       0       0 -----  libselinux.so.1
0000003ac1815000       8       8       8 rw---  libselinux.so.1
0000003ac1817000       4       4       4 rw---    [ anon ]
0000003ac1a00000     236       0       0 r-x--  libsepol.so.1
0000003ac1a3b000    2048       0       0 -----  libsepol.so.1
0000003ac1c3b000       4       4       4 rw---  libsepol.so.1
0000003ac1c3c000      40       0       0 rw---    [ anon ]
0000003ac1e00000      88      44       0 r-x--  libpthread-2.5.so
0000003ac1e16000    2048       0       0 -----  libpthread-2.5.so
0000003ac2016000       4       4       4 r----  libpthread-2.5.so
0000003ac2017000       4       4       4 rw---  libpthread-2.5.so
0000003ac2018000      16       4       4 rw---    [ anon ]
0000003ac2600000      80      52       0 r-x--  libz.so.1.2.3
0000003ac2614000    2044       0       0 -----  libz.so.1.2.3
0000003ac2813000       4       4       4 rw---  libz.so.1.2.3
0000003ac2a00000      36       4       0 r-x--  libcrypt-2.5.so
0000003ac2a09000    2044       0       0 -----  libcrypt-2.5.so
0000003ac2c08000       4       4       4 r----  libcrypt-2.5.so
0000003ac2c09000       4       4       4 rw---  libcrypt-2.5.so
0000003ac2c0a000     184       0       0 rw---    [ anon ]
0000003ac3600000       8       0       0 r-x--  libkeyutils-1.2.so
0000003ac3602000    2044       0       0 -----  libkeyutils-1.2.so
0000003ac3801000       4       4       4 rw---  libkeyutils-1.2.so
0000003ac3a00000      68       0       0 r-x--  libresolv-2.5.so
0000003ac3a11000    2048       0       0 -----  libresolv-2.5.so
0000003ac3c11000       4       4       4 r----  libresolv-2.5.so
0000003ac3c12000       4       4       4 rw---  libresolv-2.5.so
0000003ac3c13000       8       0       0 rw---    [ anon ]
0000003ac3e00000       8       0       0 r-x--  libcom_err.so.2.1
0000003ac3e02000    2044       0       0 -----  libcom_err.so.2.1
0000003ac4001000       4       4       4 rw---  libcom_err.so.2.1
0000003ac4200000    1204       8       0 r-x--  libcrypto.so.0.9.8e
0000003ac432d000    2044       0       0 -----  libcrypto.so.0.9.8e
0000003ac452c000     132      88      12 rw---  libcrypto.so.0.9.8e
0000003ac454d000      16      12      12 rw---    [ anon ]
0000003ac4600000     176       0       0 r-x--  libgssapi_krb5.so.2.2
0000003ac462c000    2048       0       0 -----  libgssapi_krb5.so.2.2
0000003ac482c000       8       8       8 rw---  libgssapi_krb5.so.2.2
0000003ac4a00000     144       0       0 r-x--  libk5crypto.so.3.1
0000003ac4a24000    2044       0       0 -----  libk5crypto.so.3.1
0000003ac4c23000       8       8       8 rw---  libk5crypto.so.3.1
0000003ac4e00000      32       0       0 r-x--  libkrb5support.so.0.1
0000003ac4e08000    2044       0       0 -----  libkrb5support.so.0.1
0000003ac5007000       4       4       4 rw---  libkrb5support.so.0.1
0000003ac5200000     580       0       0 r-x--  libkrb5.so.3.3
0000003ac5291000    2048       0       0 -----  libkrb5.so.3.3
0000003ac5491000      16      16      12 rw---  libkrb5.so.3.3
0000003ac5a00000     288       4       0 r-x--  libssl.so.0.9.8e
0000003ac5a48000    2048       0       0 -----  libssl.so.0.9.8e
0000003ac5c48000      24      16      12 rw---  libssl.so.0.9.8e
00002b5751808000       8       8       8 rw---    [ anon ]
00002b5751810000     108      36       0 r-x--  libpcre.so.1.2.0
00002b575182b000    2044       0       0 -----  libpcre.so.1.2.0
00002b5751a2a000       4       4       4 rw---  libpcre.so.1.2.0
00002b5751a2b000      28      28      28 rw---    [ anon ]
00002b5751a32000      40      20       0 r-x--  libnss_files-2.5.so
00002b5751a3c000    2044       0       0 -----  libnss_files-2.5.so
00002b5751c3b000       4       4       4 r----  libnss_files-2.5.so
00002b5751c3c000       4       4       4 rw---  libnss_files-2.5.so
00002b5751c3d000       4       4       4 rw-s-  zero (deleted)
00002b5751c3e000   20012   20000   20000 rw---    [ anon ]
00007fffbf2ce000      84      20      20 rw---    [ stack ]
00007fffbf35e000      12       0       0 r-x--    [ anon ]
ffffffffff600000    8192       0       0 -----    [ anon ]
----------------  ------  ------  ------
total kB           72880   22940   22000
```


