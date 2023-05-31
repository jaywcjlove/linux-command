sha256sum
===

用于计算文件的 SHA-256 哈希值

## 补充说明

**sha256sum命令** 是打印或检查 SHA256（256位）校验

### 语法

```shell
sha256sum [OPTION]... [FILE]...
```

### 选项

```shell
-b, --binary  # 以二进制模式读取
-c, --check   # 从文件中读取 SHA256 校验和并进行检查
    --tag     # 创建 BSD 风格的校验和
-t, --text    # 以文本模式读取（默认）
-z, --zero    # 每行输出以 NUL 结尾，而不是换行符，并禁用文件名转义
    --help    # 显示此帮助并退出
    --version # 输出版本信息并退出
```

### 实例

以下是一些使用 sha256sum 命令的示例：

1. 计算文件的 SHA-256 哈希值

```
sha256sum file.txt
```

这将会输出文件 file.txt 的 SHA-256 哈希值和文件名。

2. 计算多个文件的 SHA-256 哈希值

```
sha256sum file1.txt file2.txt
```

这将会输出文件 file1.txt 和 file2.txt 的 SHA-256 哈希值和文件名。

3. 将 SHA-256 哈希值保存到文件中

```
sha256sum file.txt > hash.txt
```

这将会将文件 file.txt 的 SHA-256 哈希值保存到文件 hash.txt 中。

4. 验证文件的 SHA-256 哈希值

```
sha256sum -c hash.txt
```

这将会验证文件的 SHA-256 哈希值是否与 hash.txt 中的值匹配。如果匹配，输出 OK，否则输出 FAILED。