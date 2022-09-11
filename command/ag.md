ag
===

ack 的升级版，C语言编写，更快更人性化

## 补充说明

**ag命令** 它比ack快一个数量级。它会忽略 .gitignore 和 .hgignore 中的文件模式。如果源代码库中有您不想搜索的文件，只需将它们的模式添加到 .ignore 文件即可。命令名称比 ack 短 33%，并且所有键都在 home 行！
[Github-参考链接](https://github.com/ggreer/the_silver_searcher)

### 语法

```shell
ag [options] pattern [path ...]
ag [可选项] 匹配模式 [路径...]
```

### 选项

```shell
Output Options:
     --ackmate            Print results in AckMate-parseable format
  -A --after [LINES]      Print lines after match (Default: 2) 显示匹配行之后的行
  -B --before [LINES]     Print lines before match (Default: 2)   显示匹配行之前的行
     --[no]break          Print newlines between matches in different files
                          (Enabled by default)
  -c --count              Only print the number of matches in each file. 只显示每个文件中匹配到的数量
                          (This often differs from the number of matching lines)
     --[no]color          Print color codes in results (Enabled by default)
     --color-line-number  Color codes for line numbers (Default: 1;33)
     --color-match        Color codes for result match numbers (Default: 30;43)
     --color-path         Color codes for path names (Default: 1;32)
     --column             Print column numbers in results
     --[no]filename       Print file names (Enabled unless searching a single file)
  -H --[no]heading        Print file names before each file\'s matches
                          (Enabled by default)
  -C --context [LINES]    Print lines before and after matches (Default: 2)   显示匹配行上下两行
     --[no]group          Same as --[no]break --[no]heading
  -g --filename-pattern PATTERN
                          Print filenames matching PATTERN
  -l --files-with-matches Only print filenames that contain matches  显示包含匹配的文件名
                          (don\'t print the matching lines)
  -L --files-without-matches  只显示不包含匹配项的文件名
                          Only print filenames that don\'t contain matches
     --print-all-files    Print headings for all files searched, even those that
                          don\'t contain matches
     --[no]numbers        Print line numbers. Default is to omit line numbers
                          when searching streams
  -o --only-matching      Prints only the matching part of the lines    只输出每行匹配的部分
     --print-long-lines   Print matches on very long lines (Default: >2k characters)
     --passthrough        When searching a stream, print all lines even if they
                          don\'t match
     --silent             Suppress all log messages, including errors
     --stats              Print stats (files scanned, time taken, etc.)
     --stats-only         Print stats and nothing else.
                          (Same as --count when searching a single file)
     --vimgrep            Print results like vim\'s :vimgrep /pattern/g would
                          (it reports every match on the line)
  -0 --null --print0      Separate filenames with null (for 'xargs -0')

Search Options:
  -a --all-types          Search all files (doesn\'t include hidden files
                          or patterns from ignore files) 搜索所有文件（包括隐藏文件）
  -D --debug              Ridiculous debugging (probably not useful)
     --depth NUM          Search up to NUM directories deep (Default: 25)
  -f --follow             Follow symlinks 跟随链接
  -F --fixed-strings      Alias for --literal for compatibility with grep
  -G --file-search-regex  PATTERN Limit search to filenames matching PATTERN    根据正则匹配搜索指定类型的文件
     --hidden             Search hidden files (obeys .*ignore files)
  -i --ignore-case        Match case insensitively
     --ignore PATTERN     Ignore files/directories matching PATTERN
                          (literal file/directory names also allowed)
     --ignore-dir NAME    Alias for --ignore for compatibility with ack.
  -m --max-count NUM      Skip the rest of a file after NUM matches (Default: 10,000)
     --one-device         Don\'t follow links to other devices.
  -p --path-to-ignore STRING
                          Use .ignore file at STRING
  -Q --literal            Don\'t parse PATTERN as a regular expression
  -s --case-sensitive     Match case sensitively
  -S --smart-case         Match case insensitively unless PATTERN contains
                          uppercase characters (Enabled by default)
     --search-binary      Search binary files for matches
  -t --all-text           Search all text files (doesn\'t include hidden files)  搜索所有文本文件（不包括隐藏文件）
  -u --unrestricted       Search all files (ignore .ignore, .gitignore, etc.;
                          searches binary and hidden files as well)
  -U --skip-vcs-ignores   Ignore VCS ignore files
                          (.gitignore, .hgignore; still obey .ignore)
  -v --invert-match         反向匹配
  -w --word-regexp        Only match whole words 匹配整个单词
  -W --width NUM          Truncate match lines after NUM characters
  -z --search-zip         Search contents of compressed (e.g., gzip) files 搜索压缩文件中的内容

File Types:
The search can be restricted to certain types of files. Example:
  ag --html needle   结果输出到指定类型文件
  - Searches for 'needle' in files with suffix .htm, .html, .shtml or .xhtml.

For a list of supported file types run:
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

