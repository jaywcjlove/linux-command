xz
===

POSIX 平台开发具有高压缩率的工具。

## 补充说明

**xz命令** XZ Utils 是为 POSIX 平台开发具有高压缩率的工具。它使用 LZMA2 压缩算法，生成的压缩文件比 POSIX 平台传统使用的 gzip、bzip2 生成的压缩文件更小，而且解压缩速度也很快。最初 XZ Utils 的是基于 LZMA-SDK 开发，但是 LZMA-SDK 包含了一些 WINDOWS 平台的特性，所以 XZ Utils 为以适应 POSIX 平台作了大幅的修改。XZ Utils 的出现也是为了取代 POSIX 系统中旧的 LZMA Utils。

### 语法

```shell
xz(选项)(参数)
xz [OPTION]... [FILE]...
```

### 选项

```shell
-z, --compress    # 强制压缩
-d, --decompress, --uncompress
                  # force decompression
-t, --test        # 测试压缩文件的完整性
-l, --list        # 列出有关.xz文件的信息
-k, --keep        # 保留（不要删除）输入文件
-f, --force       # 强制覆盖输出文件和（解）压缩链接
-c, --stdout, --to-stdout
                  # 写入标准输出，不要删除输入文件
-0 ... -9         # 压缩预设; 默认为6; 取压缩机*和*
                  # 使用7-9之前解压缩内存使用量考虑在内！
-e, --extreme     # 尝试通过使用更多的CPU时间来提高压缩比;
                  # 要求不影响解压缩存储器
-T, --threads=NUM # 最多使用NUM个线程; 默认值为1;  set to 0
                  # 设置为0，使用与处理器内核一样多的线程
-q, --quiet       # 抑制警告; 指定两次以抑制错误
-v, --verbose     # 冗长; 指定两次更详细
-h, --help        # 显示这个简洁的帮助并退出
-H, --long-help   # 显示更多帮助（还列出了高级选项）
-V, --version     # 显示版本号并退出
```

### 参数

* 源文件：指定连接的源文件。
* 目标文件：指定源文件的目标连接文件。

### 实例

压缩一个文件 test.txt，压缩成功后生成 test.txt.xz, 原文件会被删除。

```shell
$ xz test.txt
$ ls test.txt*

test.txt.xz
```

解压 test.txt.xz 文件，并使用参数 -k 保持原文件不被删除

```shell
$ xz -d -k test.txt.xz
$ ls test.txt*

test.txt.xz test.txt
```

使用参数 -l 显示 .xz 文件的基本信息。基本信息包括压缩率、数据完整性验证方式等。也可以和参数 -v 或 -vv 配合显示更详尽的信息。

```shell
xz -l index.txt.xz
# Strms  Blocks   Compressed Uncompressed  Ratio  Check   Filename
#    1       1        768 B      1,240 B  0.619  CRC64   index.txt.
```

使用参数 -0, -1, -2, … -6, … -9 或参数 --fast, --best 设定压缩率。xz 命令的默认为 -6 ，对于大多数系统来说，甚至是一些较旧的系统，-4 … -6 压缩率预设值都不错的表现。

```shell
$ xz -k7 xz_pipe_decomp_mini.c
$ xz -k --fast xz_pipe_decomp_mini.c
```

使用参数 -H 显示 xz 命令所有 options. 参数 -H 比使用参数 --help 显示的内容更详细。

```shell
$ xz -H  | more
```

借助 xargs 命令并行压缩多文件。下面的命令行可以将 /var/log 目录下所有的扩展名为 .log 的文件压缩。通过 xargs 命令同时运行多个 xz 进行压缩。

```shell
# 运行此命令须有 root 权限。
find /var/log -type f -iname "*.log" -print0 | xargs -P4 -n16 xz -T1
```
