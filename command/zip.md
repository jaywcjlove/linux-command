zip
===

可以用来解压缩文件

## 补充说明

**zip命令** 可以用来解压缩文件，或者对文件进行打包操作。zip是个使用广泛的压缩程序，文件经它压缩后会另外产生具有“.zip”扩展名的压缩文件。

### 语法

```shell
zip(选项)(参数)
zip [-选项] [-b 路径] [-t 日期] [-n 后缀名] [压缩文件列表] [-xi 列表]
```

### 选项

```shell
-f: 刷新：仅更改的文件
-u: 更新：仅更改或新文件
-d: 删除 zip 文件中的条目
-m: 移至 zip 文件（删除操作系统文件）
-r: 递归到目录
-j: 垃圾（不记录）目录名
-0: 仅存储
-l: 将 LF 转换为 CR LF (-ll CR LF 到 LF)
-1: 压缩速度更快
-9: 压缩得更好
-v: 详细操作/打印版本信息
-q: 安静运行
-c: 添加一行注释
-z: 添加 zip 文件注释
-@: 从标准输入读取名称
-o: 使 zip 文件与最新条目一样旧
-x: 排除以下名称
-i: 仅包含以下名称
-F: 修复 zip 文件（-FF 更加努力）
-D: 不添加目录条目
-A: 调整自解压exe
-D: 不添加目录条目
-T: 测试 zip 文件的完整性
-X: 排除额外的文件属性
-n: 不压缩这些后缀
-e: 加密
-y: 将符号链接存储为链接而不是引用的文件
-h2: 显示更多帮助
```

### 参数

*   zip压缩包：指定要创建的zip压缩包；
*   文件列表：指定要压缩的文件列表。

### 实例

压缩单个文件，这会将 `file.txt` 文件压缩到名为 `compressed.zip` 的归档文件中

```shell
zip compressed.zip file.txt
```

压缩多个文件，下面这个命令会把 `file1.txt`，`file2.txt`，和 `file3.txt` 压缩到一个叫做 `compressed.zip` 的归档文件中。

```shell
zip compressed.zip file1.txt file2.txt file3.txt
```

压缩整个目录，下面这个命令 `-r` 参数表示递归压缩，该命令将压缩 `folder` 目录及其所有子目录和文件

```shell
zip -r compressed.zip folder/
```

使用最大压缩比压缩文件，下面这个命令 `-9` 参数指定了最大压缩比，尽管可能需要更长的处理时间

```shell
zip -9 compressed.zip file.txt
```

创建密码保护的 zip 文件，下面这个命令 `-e` 参数会提示用户输入密码以创建加密的 zip 文件。

```shell
zip -e secure.zip file.txt
```

只压缩新文件或已更改的文件，如果 `compressed.zip` 已存在，`-u` 参数会更新归档中的 `file.txt` 或将其添加至归档中（如果它是新的）

```shell
zip -u compressed.zip file.txt
```

压缩文件但不保留目录结构，`-j` 参数将不保留 `file.txt` 的父目录 `folder`，文件在 zip 中的位置将是在根目录下

```shell
zip -j compressed.zip folder/file.txt
```

将`/home/Blinux/html/`这个目录下所有文件和文件夹打包为当前目录下的 `html.zip`：

```shell
zip -q -r html.zip /home/Blinux/html
```

上面的命令操作是将绝对地址的文件及文件夹进行压缩，以下给出压缩相对路径目录，比如目前在Bliux这个目录下，执行以下操作可以达到以上同样的效果：

```shell
zip -q -r html.zip html
```

比如现在我的html目录下，我操作的zip压缩命令是：

```shell
zip -q -r html.zip *
```

压缩 `example/basic/` 目录内容到 `basic.zip` 压缩包中 `-x` 指定排除目录，注意没有双引号将不起作用。

```shell
zip -r basic.zip example/basic/ -x "example/basic/node_modules/*" -x "example/basic/build/*" -x "example/basic/coverage/*"
```

上面压缩解压出来，内容存放在 `example/basic/`， 如果想存放到根目录，进入目录进行压缩，目前没有找到一个合适的参数来解决此问题。

```
cd example/basic/ && zip -r basic.zip . -x "node_modules/*" -x "build/*" -x "coverage/*"
```

压缩效率选择:

```shell
zip -9 # 1-9 faster->better
```

创建 `public_html` 目录下忽略所有文件和文件夹，排除包括文本 `backup` 的所有文件。

```shell
$ zip -r public_html.zip public_html -x *backup*
```

`httpdocs` 目录忽略 `.svn` 文件或 `git` 的文件和目录下创建所有文件的归档。

```shell
$ zip -r httpdocs.zip httpdocs --exclude *.svn* --exclude *.git*
```

`httpdocs` 目录忽略的所有文件，并与 `.log` 结尾的目录下创建所有文件的归档。

```shell
$ zip -r httpdocs.zip httpdocs --exclude "*.log"
```

### 问题解决

CentOS7中命令找不到

```shell
-Bash: Unzip: Command Not Found
```

解决方法

```shell
yum install -y unzip zip
```


