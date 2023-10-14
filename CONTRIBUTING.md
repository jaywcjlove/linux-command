# 贡献者约定

感谢您对本项目提交贡献，为了便于维护者管理，请各位维护人员遵循以下约定

## 如果您希望提交一个命令

命令的存放位置在 `./command/` 文件夹中

1. 在这里创建一个 `[CommandName].md` 文件，比如 `pacman.md`
2. 打开文件，键入指令在终端中执行的命令
3. 第二行输入三个等号
4. 创建二级标题“补充说明”，并且在这个标题下面创建至少下面几个三级标题
   - 语法
   - 选项
   - 参数

按照预期，文档应该是这样的

```markdown
CommandName
===

这里是命令介绍，它可以被搜索到，如果你有个流行的应用，包含多个命令，可放到这里，以便搜索到对应的命令

## 补充说明

**CommandName命令** 是用于演示的文档

### 语法

(具体编写文档时，请使用 shell 代码块包裹以下内容)

CommandName <-abcdABCD> <必选参数> [可选参数]

### 选项

(具体编写文档时，请使用 shell 代码块包裹以下内容)

-a xxxxx
-b xxxxx
...
-C xxxxx
-D xxxxx

### 参数

(具体编写文档时，请使用 shell 代码块包裹以下内容)

可选参数：一般情况下可以不给出

```

## 如果您希望维护前端页面

- 请确保您的代码可以完整的运行在最新的 Chromium 和 Safari 浏览器 (#489)

## 对于提交信息的其他规范

- 约定式提交 <https://www.conventionalcommits.org/zh-hans/v1.0.0/>
- 中文文案排版指北 <https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-Hans.md>
- 扉页 — Google 开源项目风格指南 <https://zh-google-styleguide.readthedocs.io/en/latest/google-shell-styleguide/>
