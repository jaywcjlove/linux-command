ag
===

ack 的升级版，C语言编写，更快更人性化

## 补充说明

> 摘自 <https://github.com/ggreer/the_silver_searcher> 项目的 Readme.md

- 它比ack快一个数量级。
- 它忽略了你的 `.gitignore` 和 `.hgignore` 中的文件模式。
- 如果你的源码库里有你不想搜索的文件，只要把它们的模式添加到一个.ignore文件里。(*cough* *.min.js*cough*)
- 这个命令的名字比ack短33%，而且所有的键都在主行上!

### 语法

```shell
ag [options] pattern [path ...]
ag [可选项] 匹配模式 [路径...]
```

### 选项

```shell
输出选项:
     --ackmate            以 AckMate-parseable 的格式显示结果
  -A --after [LINES]      显示匹配行之后的行（默认2行）
  -B --before [LINES]     显示匹配行之前的行（默认2行）
     --[no]break          不同文件中匹配到的内容新建一行显示（默认开启）
  -c --count              只显示每个文件中匹配到的数量 （通常与匹配行数不同）
     --[no]color          在结果中打印颜色代码（默认启用）
     --color-line-number  行号的颜色代码（默认值为：1;33）。
     --color-match        匹配结果的颜色代码（默认值为：30;43）。
     --color-path         路径名称的颜色代码（默认值为：1;32）
     --column             打印结果中的列号
     --[no]filename       打印文件名（除非搜索单个文件，否则启用）。
  -H --[no]heading        在每个文件匹配前输出文件名（默认开启）
  -C --context [LINES]    显示匹配行上下两行（默认2行）
     --[no]group          和这些一样： --[no]break --[no]heading
  -g --filename-pattern PATTERN 打印匹配PATTERN的文件名
  -l --files-with-matches 显示包含匹配的文件名（不显示匹配的行）
  -L --files-without-matches  只显示不包含匹配项的文件名
     --print-all-files    打印所有搜索到的文件的标题，甚至那些不包含匹配的文件。
     --[no]numbers        打印行号。默认情况是在搜索流时省略行号。
  -o --only-matching      只输出每行匹配的部分
     --print-long-lines   在很长的行上打印匹配信息（默认：>2k字符）。
     --passthrough        当搜索一个流时，打印所有的行，即使它们不匹配。
     --silent             抑制所有的日志信息，包括错误
     --stats              打印统计（扫描的文件、花费的时间等）。
     --stats-only         打印统计信息，不打印其他信息（与搜索单个文件时的--计数相同）。
     --vimgrep            像vim的:vimgrep /pattern/g那样打印结果（它报告每一行的匹配结果）
  -0 --null --print0      用null分隔文件名（用于'xargs -0'）。

搜索选项:
  -a --all-types          搜索所有文件（包括隐藏文件）
  -D --debug              可笑的调试（可能没有用）
     --depth NUM          目录搜索最大深度（默认25）
  -f --follow             跟随链接进行搜索
  -F --fixed-strings      为了与grep兼容，--literal的别名。
  -G --file-search-regex  根据正则匹配搜索指定类型的文件
     --hidden             搜索隐藏文件 （但遵从 .*ignore 文件）
  -i --ignore-case        不区分大小写匹配
     --ignore PATTERN     忽略匹配 PATTERN 的文件/目录（也允许使用文字文件/目录名称）
     --ignore-dir NAME    为了与ack兼容，--ignore的别名
  -m --max-count NUM      在一个文件中最大匹配的数量（默认: 10,000）
     --one-device         不跟随其他设备的链接搜索
  -p --path-to-ignore STRING 在STRING使用.ignore文件
  -Q --literal            不要将PATTERN解析为正则表达式
  -s --case-sensitive     敏感地匹配案例
  -S --smart-case         不区分大小写匹配，除非 PATTERN 包含大写字符
     --search-binary      搜索二进制文件
  -t --all-text           搜索所有文本文件（不包括隐藏文件）
  -u --unrestricted       搜索所有文件 （忽略 .ignore, .gitignore, 比如：搜索二进制和隐藏文件）
  -U --skip-vcs-ignores   忽略VCS的忽略文件（指的是 .gitignore，.hgignore；仍然遵从.ignore）。
  -v --invert-match       反向匹配
  -w --word-regexp        只匹配整个单词
  -W --width NUM          在NUM字符后截断匹配行
  -z --search-zip         搜索压缩文件中的内容

文件类型:
搜索可以限制在某些类型的文件中，例如:
   ag --html needle   结果输出到指定类型文件
   - 在后缀为 .htm、.html、.shtml 或 .xhtml 的文件中搜索“needle”

有关支持的文件类型的列表，可以运行:
  ag --list-file-types  列出支持的文件类型
```

### 实例

列出当前目录下包含 `npm` 的文件

```shell
➜  vue-project ag npm ./
README.md
16:npm install
22:npm run dev
28:npm run build
```

