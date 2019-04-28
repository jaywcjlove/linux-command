dirname
===

去除文件名中的非目录部分

## 补充说明

**dirname命令** 去除文件名中的非目录部分，仅显示与目录有关的内容。dirname命令读取指定路径名保留最后一个`/`及其后面的字符，删除其他部分，并写结果到标准输出。如果最后一个`<cite>/</cite>`后无字符，dirname 命令使用倒数第二个`/`，并忽略其后的所有字符。dirname 和 basename 通常在 shell 内部命令替换使用，以指定一个与指定输入文件名略有差异的输出文件名。

### 语法  

```shell
dirname(选项)(参数)
```

### 选项  

```shell
--help：显示帮助；
--version：显示版本号。
```

### 实例  

```shell
dirname //
结果为 /

dirname /a/b/
结果为：/a

dirname a
结果为 .

dirname a/b
结果为路径名 a
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->