# linux-command with FZF & BAT

## 简单介绍

`fzf` 是一个非常好用的搜索工具， 速度快，开销可控
`bat` 是一个非常好的终端文本查看工具

并且 fzf 支持高度自定义预览模式， 这样我们就可以通过将他们两个组合起来
实现一种非常方便的终端内的命令速查效果

当然这个脚本是针对于 Linux 的， 可以在 `wsl` 或者 `原生Linux` 环境下使用

---

## 前置条件

- fzf 已经安装并且 命令直接可用
- bat 已经安装并且命令可用

可以使用包管理器或者从官方仓库中下载编译好的发行版

[fzf官方仓库](https://github.com/junegunn/fzf/releases)
[bat官方仓库](https://github.com/sharkdp/bat/releases)

---

## 安装

- 然后通过脚本直接安装(你应该先审查一下脚本有没有问题)

```bash
curl -fsSL https://raw.githubusercontent.com/IridiumNan/linux-command/master/fzf/install.sh | bash
```

---

## 使用

```bash
# 是的就是这么一个朴实无华的别名，你可以在配置文件里面修改
# 如果你用 bash => ~/.bashrc
# 如果你用 zsh => ~/.zshrc
help
```

- 特殊情况
我脚本里面只处理了 bash 还有 zsh 的情况，因为本人不熟悉 fish

其实原理只有两行，自行添加即可

```bash

# Writen by linux-command FZF version
export LINUX_COMMAND_DIR="${HOME}/.local/share/linux-command"
# you can alter this alias like linux-command or anything you like

alias help='(cd "$LINUX_COMMAND_DIR" && fzf --style full --preview "bat --color always {}" --preview-window=up:80%)'
# End of linux-command FZF version

```

---

## 卸载

```bash
# 直接删掉目录即可
rm -rf $LINUX_COMMAND_DIR
# 至于fzf和bat自己按需处理
```

---

## 调整预览

- 这是默认的配置

```bash
alias help='(cd "$LINUX_COMMAND_DIR" && fzf --style full --preview "bat --color always {}" --preview-window=up:80%)'
```

- 如果希望预览在左侧, 把最后的 up 改成 left

```bash
alias help='(cd "$LINUX_COMMAND_DIR" && fzf --style full --preview "bat --color always {}" --preview-window=left:80%)'
```

- 所以四种方向可选
  - left
  - right
  - up
  - down

可以按需调整
