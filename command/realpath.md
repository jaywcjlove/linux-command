realpath
===

解析并规范化文件路径，返回绝对路径。

## 补充说明

**realpath** 命令用于解析给定路径中的符号链接、相对路径（如 `.`、`..`），并输出其对应的**绝对路径**。
它常用于脚本中获取文件或目录的真实位置，避免因符号链接或相对路径导致的路径歧义。

与直接使用 `pwd` 或字符串拼接不同，`realpath` 能保证输出路径是唯一、真实、可访问的物理路径。

### 语法

```shell
realpath [选项] 文件...
```

### 选项

```shell
-e, --canonicalize-existing   仅在路径中所有组件都存在时才输出结果
-m, --canonicalize-missing    即使路径中部分组件不存在也输出规范化路径
-L, --logical                 按逻辑方式解析符号链接（默认）
-P, --physical                按物理方式解析符号链接
-q, --quiet                   静默模式，不输出错误信息
-s, --strip                   删除路径末尾的斜杠
--relative-to=DIR             输出相对于 DIR 的路径
--relative-base=DIR           若可能，输出相对于 DIR 的路径
--help                        显示帮助信息
--version                     显示版本信息
```

### 参数

```shell
文件               需要解析的文件或目录路径，可以是相对路径或符号链接
```

## 实例

### 获取文件的绝对路径

```shell
realpath file.txt
```

### 解析符号链接的真实路径

```shell
realpath /usr/bin/python
```

### 即使路径不存在也返回规范化结果

```shell
realpath -m ./not/exist/path
```

### 输出相对于指定目录的路径

```shell
realpath --relative-to=/usr /usr/bin/env
```
