rename
===

用字符串替换的方式批量改变文件名

## 补充说明

rename命令存在两个版本用法上有所区别 

```bash
C语言版本, 支持通配符
[常用通配符说明]
?    表示一个任意字符
*    表示一个或一串任意字符

Perl版本, 支持正则表达式
[常用正则表达式符号说明]
^    匹配输入的开始位置
$    匹配输入的结尾
.    匹配除换行符外的任意字符
+    匹配前一个字符一次或多次 例如，"zo+"可以匹配"zoo",但不匹配"z"
[a-z]    表示某个范围内的字符，例如，"[a-z]"匹配"a"与"z"之间的任何一个小写字母字符。
[^m-z]    否定的字符区间。与不在指定区间内的字符匹配。
```

区分方法: `rename --version`

如果返回结果中包含 **util-linux** , 说明是C语言版本, 反之是Perl版本
```bash
# Perl版本 | Ubuntu(18),Mint(20)默认的是Perl版本
$ rename --version
/usr/bin/rename using File::Rename version 1.10

# C语言版本 | Centos(7)默认的是C语言版本
$ rename --version
rename，来自 util-linux 2.23.2
```


###  语法

```bash
# Perl版本
rename [ -h|-m|-V ] [ -v ] [ -0 ] [ -n ] [ -f ] [ -d ] [ -e|-E perlexpr]*|perlexpr [ files ]

# C语言版本
rename [选项] 表达式 替换的字符 文件...
```

###  参数

```bash
# Perl版本
-v, --verbose
        详细：成功重命名的文件的打印名称。

-0, --null
        从STDIN读取时，请使用\0作为记录分隔符

-n, --nono
        不执行任何操作：打印要重命名的文件名，但不重命名。

-f, --force
        覆盖：允许覆盖现有文件

--path, --fullpath
        重命名完整路径：包括任何目录组件。默认

-d, --filename, --nopath, --nofullpath
        不重命名目录：仅重命名路径的文件名部分

-h, --help
        帮助：打印提要和选项。

-m, --man
        手册: 打印手册页.

-V, --version
        版本: 显示版本号.

-e      表达: 作用于文件名的代码.

        可以重复来构建代码（比如“perl-e”）。如果没有-e，则第一个参数用作代码。

-E      语句：对文件名执行操作的代码，如-e，但终止于 ';'.


# C语言版本
-v, --verbose
        提供视觉反馈，其中重命名了哪些文件（如果有的话）

-V, --version
        显示版本信息并退出。

-s, --symlink
        在符号链接目标上执行重命名

-h, --help
        显示帮助文本并退出
```

###  实例

---

#### Perl版本

将1.txt 2.txt重命名为1.log 2.log

```bash
$ rename -v "s/txt/log/g" 1.txt 2.txt
1.txt renamed as 1.log
2.txt renamed as 2.log
```

修改文件的后缀

```bash
rename "s//.html//.php/" *     # 把.html 后缀的改成 .php后缀
```

批量添加文件后缀

```bash
rename "s/$//.txt/" *  # 把所有的文件名都以txt结尾
```

批量删除文件名

```bash
rename "s//.txt//" *   # 把所有以.txt结尾的文件名的.txt删掉
```

---

##### C语言版本


将1.txt 2.txt重命名为1.log 2.log

```bash
$ rename -v txt log 1.txt 2.txt
`1.txt' -> `1.log'
`2.txt' -> `2.log'
```

文件夹中有这些文件foo1, ..., foo9, foo10, ..., foo278
```bash
# 把foo1到foo9的文件重命名为foo01到foo09，重命名的文件只是有4个字符长度名称的文件，文件名中的foo被替换为foo0。
rename foo foo0 foo?

# foo01到foo99的所有文件都被重命名为foo001到foo099，只重命名5个字符长度名称的文件，文件名中的foo被替换为foo0。
rename foo foo0 foo??

# foo001到foo278的所有文件都被重命名为foo0001到foo0278，所有以foo开头的文件都被重命名。
rename foo foo0 foo*

# 从foo0200到foo0278的所有文件都被重命名为foo200到foo278，文件名中的foo0被替换为foo。
rename foo0 foo foo0[2]*
```


