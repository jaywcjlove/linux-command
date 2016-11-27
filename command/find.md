
find
===

指定目录下查找文件。

## 补充说明

find命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则find命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。

find指令用于查找符合条件的文件。任何位于参数之前的字符串都将被视为欲查找的目录。

## 语法

```bash
find [目录...][-amin <分钟>][-anewer <参考文件或目录>]
[-atime <24小时数>][-cmin <分钟>][-cnewer <参考文件或目录>]
[-ctime <24小时数>][-daystart][-depyh][-empty][-exec <执行指令>]
[-false][-fls <列表文件>][-follow][-fprint <列表文件>][-fprint0 <列表文件>][-fprintf <列表文件><输出格式>]
[-fstype <文件系统类型>][-gid <群组识别码>][-group <群组名称>][-help]
[-ilname <范本样式>][-iname <范本样式>][-inum <inode编号>][-ipath <范本样式>][-iregex <范本样式>]
[-links <连接数目>][-lname <范本样式>][-ls]
[-maxdepth <目录层级>][-mindepth <目录层级>][-mmin <分钟>][-mount] 
[-mtime <24小时数>][-name <范本样式>][-newer <参考文件或目录>][-nogroup][noleaf] [-nouser][-ok <执行指令>][-path <范本样式>][-perm <权限数值>][-print][-print0][-printf <输出格式>][-prune][-regex <范本样式>]
[-size <文件大小>][-true][-type <文件类型>][-uid <用户识别码>][-used <日数>][-user <拥有者名称>][-version][-xdev][-xtype <文件类型>]
```

## 参数

- -amin<分钟> 　查找在指定时间曾被存取过的文件或目录，单位以分钟计算。 
- -anewer<参考文件或目录> 　查找其存取时间较指定文件或目录的存取时间更接近现在的文件或目录。 
- -atime<24小时数> 　查找在指定时间曾被存取过的文件或目录，单位以24小时计算。 
- -cmin<分钟> 　查找在指定时间之时被更改的文件或目录。 
- -cnewer<参考文件或目录> 　查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录。 
- -ctime<24小时数> 　查找在指定时间之时被更改的文件或目录，单位以24小时计算。 
- -daystart 　从本日开始计算时间。 
- -depth 　从指定目录下最深层的子目录开始查找。 
- -expty 　寻找文件大小为0 Byte的文件，或目录下没有任何子目录或文件的空目录。 
- -exec<执行指令> 　假设find指令的回传值为True，就执行该指令。 
- -false 　将find指令的回传值皆设为False。 
- -fls<列表文件> 　此参数的效果和指定"-ls"参数类似，但会把结果保存为指定的列表文件。 
- -follow 　排除符号连接。 
- -fprint<列表文件> 　此参数的效果和指定"-print"参数类似，但会把结果保存成指定的列表文件。 
- -fprint0<列表文件> 　此参数的效果和指定"-print0"参数类似，但会把结果保存成指定的列表文件。 
- -fprintf<列表文件><输出格式> 　此参数的效果和指定"-printf"参数类似，但会把结果保存成指定的列表文件。 
- -fstype<文件系统类型> 　只寻找该文件系统类型下的文件或目录。 
- -gid<群组识别码> 　查找符合指定之群组识别码的文件或目录。 
- -group<群组名称> 　查找符合指定之群组名称的文件或目录。 
- -help或--help 　在线帮助。 
- -ilname<范本样式> 　此参数的效果和指定"-lname"参数类似，但忽略字符大小写的差别。 
- -iname<范本样式> 　此参数的效果和指定"-name"参数类似，但忽略字符大小写的差别。 
- -inum<inode编号> 　查找符合指定的inode编号的文件或目录。 
- -ipath<范本样式> 　此参数的效果和指定"-ipath"参数类似，但忽略字符大小写的差别。 
- -iregex<范本样式> 　此参数的效果和指定"-regexe"参数类似，但忽略字符大小写的差别。 
- -links<连接数目> 　查找符合指定的硬连接数目的文件或目录。 
- -iname<范本样式> 　指定字符串作为寻找符号连接的范本样式。 
- -ls 　假设find指令的回传值为True，就将文件或目录名称列出到标准输出。 
- -maxdepth<目录层级> 　设置最大目录层级。 
- -mindepth<目录层级> 　设置最小目录层级。 
- -mmin<分钟> 　查找在指定时间曾被更改过的文件或目录，单位以分钟计算。 
- -mount 　此参数的效果和指定"-xdev"相同。 
- -mtime<24小时数> 　查找在指定时间曾被更改过的文件或目录，单位以24小时计算。 
- -name<范本样式> 　指定字符串作为寻找文件或目录的范本样式。 
- -newer<参考文件或目录> 　查找其更改时间较指定文件或目录的更改时间更接近现在的文件或目录。 
- -nogroup 　找出不属于本地主机群组识别码的文件或目录。 
- -noleaf 　不去考虑目录至少需拥有两个硬连接存在。 
- -nouser 　找出不属于本地主机用户识别码的文件或目录。 
- -ok<执行指令> 　此参数的效果和指定"-exec"参数类似，但在执行指令之前会先询问用户，若回答"y"或"Y"，则放弃执行指令。 
- -path<范本样式> 　指定字符串作为寻找目录的范本样式。 
- -perm<权限数值> 　查找符合指定的权限数值的文件或目录。 
- -print 　假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式为每列一个名称，每个名称之前皆有"./"字符串。 
- -print0 　假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式为全部的名称皆在同一行。 
- -printf<输出格式> 　假设find指令的回传值为True，就将文件或目录名称列出到标准输出。格式可以自行指定。 
- -prune 　不寻找字符串作为寻找文件或目录的范本样式。 
- -regex<范本样式> 　指定字符串作为寻找文件或目录的范本样式。 
- -size<文件大小> 　查找符合指定的文件大小的文件。 
- -true 　将find指令的回传值皆设为True。 
- -typ<文件类型> 　只寻找符合指定的文件类型的文件。 
- -uid<用户识别码> 　查找符合指定的用户识别码的文件或目录。 
- -used<日数> 　查找文件或目录被更改之后在指定时间曾被存取过的文件或目录，单位以日计算。 
- -user<拥有者名称> 　查找符合指定的拥有者名称的文件或目录。 
- -version或--version 　显示版本信息。 
- -xdev 　将范围局限在先行的文件系统中。 
- -xtype<文件类型> 　此参数的效果和指定"-type"参数类似，差别在于它针对符号连接检查。

## 例子

```bash
$ find . -name '*.DS_Store' -type f -delete # 删除所有.DS_Store文件
$ find ~ -name "*.txt" -print       # 在$HOME中查.txt文件并显示
$ find . -size +1000000c -print     # 查长度大于1Mb的文件
$ find . -size 100c -print          # 查长度为100c的文件
$ find . -size +10 -print           # 查长度超过期作废10块的文件（1块=512字节）
$ find -name april*                 # 在当前目录下查找以april开始的文件
$ find -name april* fprint file     # 在当前目录下查找以april开始的文件，并把结果输出到file中
$ find -name ap* -o -name may*          # 查找以ap或may开头的文件
$ find /mnt -name tom.txt -ftype vfat   # 在/mnt下查找名称为tom.txt且文件系统类型为vfat的文件
$ find /mnt -name t.txt ! -ftype vfat   # 在/mnt下查找名称为tom.txt且文件系统类型不为vfat的文件
$ find /tmp -name wa* -type l           # 在/tmp下查找名为wa开头且类型为符号链接的文件
$ find ~ -mtime -2                  # 在/home下查最近两天内改动过的文件
$ find ~ -atime -1                  # 查1天之内被存取过的文件
$ find ~ -mmin +60                  # 在/home下查60分钟前改动过的文件
$ find ~ -amin +30                  # 查最近30分钟前被存取过的文件
$ find ~ -newer tmp.txt             # 在/home下查更新时间比tmp.txt近的文件或目录
$ find ~ -anewer tmp.txt            # 在/home下查存取时间比tmp.txt近的文件或目录
$ find ~ -used -2                   # 列出文件或目录被改动过之后，在2日内被存取过的文件或目录
$ find ~ -user cnscn                # 列出/home目录内属于用户cnscn的文件或目录
$ find ~ -uid +501                  # 列出/home目录内用户的识别码大于501的文件或目录
$ find ~ -group cnscn               # 列出/home内组为cnscn的文件或目录
$ find ~ -gid 501                   # 列出/home内组id为501的文件或目录
$ find ~ -nouser                    # 列出/home内不属于本地用户的文件或目录
$ find ~ -nogroup                   # 列出/home内不属于本地组的文件或目录
$ find ~ -name tmp.txt -maxdepth 4  # 列出/home内的tmp.txt 查时深度最多为3层
$ find ~ -name tmp.txt -mindepth 3  # 从第2层开始查
$ find ~ -empty                     # 查找大小为0的文件或空目录
$ find ~ -size   +512k              # 查大于512k的文件
$ find ~ -size   -512k              # 查小于512k的文件
$ find ~ -links   +2                # 查硬连接数大于2的文件或目录
$ find ~ -perm 0700                 # 查权限为700的文件或目录
$ find ~ -perm 755 -print | more    # 查找权限为755的文件
$ find /tmp -name tmp.txt -exec cat {} \;
$ find /tmp -name tmp.txt ok rm {} \;

$ find / -amin    -10      # 查找在系统中最后10分钟访问的文件
$ find / -atime   -2       # 查找在系统中最后48小时访问的文件
$ find / -empty            # 查找在系统中为空的文件或者文件夹
$ find / -group   cat      # 查找在系统中属于 groupcat的文件
$ find / -mmin   -5        # 查找在系统中最后5分钟里修改过的文件
$ find / -mtime   -1       # 查找在系统中最后24小时里修改过的文件
$ find / -nouser           # 查找在系统中属于作废用户的文件
$ find / -user    fred     # 查找在系统中属于FRED这个用户的文件
```
