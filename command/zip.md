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
-A：调整可执行的自动解压缩文件；
-b<工作目录>：指定暂时存放文件的目录；
-c：替每个被压缩的文件加上注释；
-d：从压缩文件内删除指定的文件；
-D：压缩文件内不建立目录名称；
-f：此参数的效果和指定“-u”参数类似，但不仅更新既有文件，如果某些文件原本不存在于压缩文件内，使用本参数会一并将其加入压缩文件中；
-F：尝试修复已损坏的压缩文件；
-g：将文件压缩后附加在已有的压缩文件之后，而非另行建立新的压缩文件；
-h：在线帮助；
-i<范本样式>：只压缩符合条件的文件；
-j：只保存文件名称及其内容，而不存放任何目录名称；
-J：删除压缩文件前面不必要的数据；
-k：使用MS-DOS兼容格式的文件名称；
-l：压缩文件时，把LF字符置换成LF+CR字符；
-ll：压缩文件时，把LF+cp字符置换成LF字符；
-L：显示版权信息；
-m：将文件压缩并加入压缩文件后，删除原始文件，即把文件移到压缩文件中；
-n<字尾字符串>：不压缩具有特定字尾字符串的文件；
-o：以压缩文件内拥有最新更改时间的文件为准，将压缩文件的更改时间设成和该文件相同；
-q：不显示指令执行过程；
-r：递归处理，将指定目录下的所有文件和子目录一并处理；
-S：包含系统和隐藏文件；
-t<日期时间>：把压缩文件的日期设成指定的日期；
-T：检查备份文件内的每个文件是否正确无误；
-u：更换较新的文件到压缩文件内；
-v：显示指令执行过程或显示版本信息；
-V：保存VMS操作系统的文件属性；
-w：在文件名称里假如版本编号，本参数仅在VMS操作系统下有效；
-x<范本样式>：压缩时排除符合条件的文件；
-X：不保存额外的文件属性；
-y：直接保存符号连接，而非该链接所指向的文件，本参数仅在UNIX之类的系统下有效；
-z：替压缩文件加上注释；
-$：保存第一个被压缩文件所在磁盘的卷册名称；
-<压缩效率>：压缩效率是一个介于1~9的数值。
```

### 参数

*   zip压缩包：指定要创建的zip压缩包；
*   文件列表：指定要压缩的文件列表。

### 实例

将`/home/Blinux/html/`这个目录下所有文件和文件夹打包为当前目录下的html.zip：

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


