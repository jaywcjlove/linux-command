nano
===

字符终端文本编辑器

## 补充说明

**nano** 是一个字符终端的文本编辑器，有点像DOS下的editor程序。它比vi/vim要简单得多，比较适合Linux初学者使用。某些Linux发行版的默认编辑器就是nano。

nano命令可以打开指定文件进行编辑，默认情况下它会自动断行，即在一行中输入过长的内容时自动拆分成几行，但用这种方式来处理某些文件可能会带来问题，比如Linux系统的配置文件，自动断行就会使本来只能写在一行上的内容折断成多行了，有可能造成系统不灵了。因此，如果你想避免这种情况出现，就加上`-w`选项吧。

### 语法  

```shell
nano [选项] [[+行,列] 文件名]...
```

### 选项  

```shell
 -h, -?         --help                  显示此信息
 +行,列                                 从所指列数与行数开始
 -A             --smarthome             启用智能 HOME 键
 -B             --backup                储存既有文件的备份
 -C <目录>      --backupdir=<目录>      用以储存独一备份文件的目录
 -D             --boldtext              用粗体替代颜色反转
 -E             --tabstospaces          将已输入的制表符转换为空白
 -F             --multibuffer           启用多重文件缓冲区功能
 -H             --historylog            记录与读取搜索/替换的历史字符串
 -I             --ignorercfiles         不要参考nanorc 文件
 -K             --rebindkeypad          修正数字键区按键混淆问题
 -L             --nonewlines            不要将换行加到文件末端
 -N             --noconvert             不要从 DOS/Mac 格式转换
 -O             --morespace             编辑时多使用一行
 -Q <字符串>    --quotestr=<字符串>     引用代表字符串
 -R             --restricted            限制模式
 -S             --smooth                按行滚动而不是半屏
 -T <#列数>     --tabsize=<#列数>       设定制表符宽度为 #列数
 -U             --quickblank            状态行快速闪动
 -V             --version               显示版本资讯并离开
 -W             --wordbounds            更正确地侦测单字边界
 -Y <字符串>    --syntax=<字符串>       用于加亮的语法定义
 -c             --const                 持续显示游标位置
 -d             --rebinddelete          修正退格键/删除键混淆问题
 -i             --autoindent            自动缩进新行
 -k             --cut                   从游标剪切至行尾
 -l             --nofollow              不要依照符号连结，而是覆盖
 -m             --mouse                 启用鼠标功能
 -o <目录>      --operatingdir=<目录>   设定操作目录
 -p             --preserve              保留XON (^Q) 和XOFF (^S) 按键
 -q             --quiet                 沉默忽略启动问题, 比如rc 文件错误
 -r <#列数>     --fill=<#列数>          设定折行宽度为 #列数
 -s <程序>      --speller=<程序>        启用替代的拼写检查程序
 -t             --tempfile              离开时自动储存，不要提示
 -u             --undo                  允许通用撤销[试验性特性]
 -v             --view                  查看(只读)模式
 -w             --nowrap                不要自动换行
 -x             --nohelp                不要显示辅助区
 -z             --suspend               启用暂停功能
 -$             --softwrap              启用软换行
 -a, -b, -e,
 -f, -g, -j                             (忽略，为与pico 相容)
```

### 用法  

**光标控制** 

* 移动光标：使用用方向键移动。
* 选择文字：按住鼠标左键拖到。

**复制、剪贴和粘贴** 

* 复制一整行：Alt+6
* 剪贴一整行：Ctrl+K

**粘贴：Ctrl+U** 

如果需要复制／剪贴多行或者一行中的一部分，先将光标移动到需要复制／剪贴的文本的开头，按Ctrl+6（或者Alt+A）做标记，然后移动光标到 待复制／剪贴的文本末尾。这时选定的文本会反白，用Alt+6来复制，Ctrl+K来剪贴。若在选择文本过程中要取消，只需要再按一次Ctrl+6。

**搜索** 

按Ctrl+W，然后输入你要搜索的关键字，回车确定。这将会定位到第一个匹配的文本，接着可以用Alt+W来定位到下一个匹配的文本。

**翻页** 

* `Ctrl+Y` 到上一页
* `Ctrl+V` 到下一页

**保存** 

使用Ctrl+O来保存所做的修改

**退出** 

按Ctrl+X

如果你修改了文件，下面会询问你是否需要保存修改。输入Y确认保存，输入N不保存，按Ctrl+C取消返回。如果输入了Y，下一步会让你输入想要保存的文件名。如果不需要修改文件名直接回车就行；若想要保存成别的名字（也就是另存为）则输入新名称然后确 定。这个时候也可用Ctrl+C来取消返回。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->