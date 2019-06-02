pigz
===

可以用来解压缩文件，gzip的并行实现升级版。

## 补充说明

**pigz命令**可以用来解压缩文件，最重要的是支持多线程并行处理，解压缩比gzip快。主页: [http://zlib.net/pigz/](http://zlib.net/pigz/)

### 语法

```shell
pigz [ -cdfhikKlLmMnNqrRtz0..9,11 ] [ -b blocksize ] [ -p threads ] [ -S suffix ] [ name ...  ]
unpigz [ -cfhikKlLmMnNqrRtz ] [ -b blocksize ] [ -p threads ] [ -S suffix ] [ name ...  ]
```

### 参数

```shell
-0 to -9, -11       # Compression level (level 11, zopfli, is much slower)
--fast, --best      # Compression levels 1 and 9 respectively
-b, --blocksize mmm # Set compression block size to mmmK (default 128K)
-c, --stdout        # Write all processed output to stdout (won't delete)
-d, --decompress    # Decompress the compressed input
-f, --force         # Force overwrite, compress .gz, links, and to terminal
-F  --first         # Do iterations first, before block split for -11
-h, --help          # Display a help screen and quit
-i, --independent   # Compress blocks independently for damage recovery
-I, --iterations n  # Number of iterations for -11 optimization
-J, --maxsplits n   # Maximum number of split blocks for -11
-k, --keep          # Do not delete original file after processing
-K, --zip           # Compress to PKWare zip (.zip) single entry format
-l, --list          # List the contents of the compressed input
-L, --license       # Display the pigz license and quit
-m, --no-time       # Do not store or restore mod time
-M, --time          # Store or restore mod time
-n, --no-name       # Do not store or restore file name or mod time
-N, --name          # Store or restore file name and mod time
-O  --oneblock      # Do not split into smaller blocks for -11
-p, --processes n   # Allow up to n compression threads (default is the number of online processors, or 8 if unknown)
-q, --quiet         # Print no messages, even on error
-r, --recursive     # Process the contents of all subdirectories
-R, --rsyncable     # Input-determined block locations for rsync
-S, --suffix .sss   # Use suffix .sss instead of .gz (for compression)
-t, --test          # Test the integrity of the compressed input
-v, --verbose       # Provide more verbose output
-V  --version       # Show the version of pigz
-Y  --synchronous   # Force output file write to permanent storage
-z, --zlib          # Compress to zlib (.zz) instead of gzip format
--                  # All arguments after "--" are treated as files
```

### 实例

可以结合`tar`使用, 压缩命令

```shell
tar -cvf - dir1 dir2 dir3 | pigz -p 8 > output.tgz
```

解压命令

```shell
pigz -p 8 -d output.tgz
```

如果是gzip格式，也支持用tar解压

```shell
tar -xzvf output.tgz
```
