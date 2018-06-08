# fishshell

比 bash 更好用的 shell

## quick start

> [fish-shell](http://fishshell.com)：强烈推荐

配置文件: `fish_config`
Running Commands: 兼容 bash 等shell的命令执行方式
Getting Help: `help/man cmd -> browser/terminal`
Syntax Highlighting: 实时检查命令是否正确
Wildcards: 支持缩写  `*` 递归 匹配
Pipes and Redirections: 使用 `^` 代表 stderr
Autosuggestions: 自动建议, 可以使用 `Ctrl-f / ->` 来补全
Tab Completions: 更强大的 tab 补全
Variables: 使用 set 设置
Exit Status: 使用 `echo $status` 替代 `$?`
Exports (Shell Variables)
Lists: all variables in fish are really lists
Command Substitutions: 使用 `(cmd)` 来执行命令, 而不是 反引号、`$()`
Combiners (And, Or, Not): 不支持使用符合来表示逻辑运算
Functions：使用 `$argv` 替代 `$1`
Conditionals (If, Else, Switch) / Functions / Loops: 更人性化的写法(参考 py)
Prompt: `function fish_prompt` 实现
Startup (Where's .bashrc?): `~/.config/fish/config.fish`，更好的方式是 autoloading-function、universal-variables
Autoloading Functions: ` ~/.config/fish/functions/.`
Universal Variables：a variable whose value is shared across all instances of fish

```
set name 'czl' # 设置变量，替代 name=czl
echo $name
echo $status # exit status，替代 $?
env # 环境变量
set -x MyVariable SomeValue # 替代 export
set -e MyVariable
set PATH $PATH /usr/local/bin # 使用 lists 记录 PATH
set -U fish_user_paths /usr/local/bin $fish_user_paths # 永久生效
touch "testing_"(date +%s)".txt" # command subtitution，替代 `date +%s`
cp file.txt file.txt.bak; and echo 'back success'; or echo 'back fail' # combiner
functions # 列出 fish 下定义的函数
```