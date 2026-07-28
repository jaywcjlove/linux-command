#!/bin/bash
set -e

LINUX_COMMAND_DIR="${HOME}/.local/share/linux-command"

# 依赖检查
for cmd in fzf bat; do
    if ! command -v "$cmd" &>/dev/null; then
        echo "Error: $cmd is not installed. Please install it first."
        exit 1
    fi
done

# 下载数据
TMP_DIR="/tmp/linux-command-$$"
mkdir -p "$TMP_DIR"
git clone --depth=1 https://github.com/jaywcjlove/linux-command.git "$TMP_DIR"

# 安装到目标目录
rm -rf "$LINUX_COMMAND_DIR"
mkdir -p "$(dirname "$LINUX_COMMAND_DIR")"
cp -r "$TMP_DIR/command" "$LINUX_COMMAND_DIR"

# 清理
rm -rf "$TMP_DIR"

# 配置添加（检查是否已存在）
for rc in ~/.zshrc ~/.bashrc; do
    if [ -f "$rc" ] && ! grep -q "# Writen by linux-command FZF version" "$rc"; then
        cat >>"$rc" <<EOF

# Writen by linux-command FZF version
export LINUX_COMMAND_DIR="$LINUX_COMMAND_DIR"
# you can alter this alias like linux-command or anything you like
alias help='(cd "\$LINUX_COMMAND_DIR" && fzf --style full --preview "bat --color always {}" --preview-window=up:80%)'
# End of linux-command FZF version
EOF
    fi
done

echo "Installation complete. Run 'help' to start searching."
