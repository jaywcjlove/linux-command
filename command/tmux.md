tmux
===

Tmux是一个优秀的终端复用软件，类似GNU Screen，但来自于OpenBSD，采用BSD授权。

## 补充说明

使用它最直观的好处就是，通过一个终端登录远程主机并运行tmux后，在其中可以开启多个控制台而无需再“浪费”多余的终端来连接这台远程主机；

## 功能

-  提供了强劲的、易于使用的命令行界面。
-  可横向和纵向分割窗口。
-  窗格可以自由移动和调整大小，或直接利用四个预设布局之一。
-  支持 UTF-8 编码及 256 色终端。
-  可在多个缓冲区进行复制和粘贴。
-  可通过交互式菜单来选择窗口、会话及客户端。
-  支持跨窗口搜索。
-  支持自动及手动锁定窗口。

## 安装

```shell
# 在 Mac OS 中，通过 brew 安装
brew install tmux
# ubuntu版本下直接apt-get安装
sudo apt-get install tmux
# centos7版本下直接yum安装
yum install -y tmux

# centos6版本需要编译安装
yum install libevent libevent-devel ncurses-devel
tar -zvxf tmux-2.3.tar.gz # (提前下载：wget https://github.com/tmux/tmux/releases/download/2.3/tmux-2.3.tar.gz)
cd tmux-2.3
./configure
make && make install
```

## 快捷键使用说明

<table class="table-view log-set-param">
<tbody>
<tr>
<td colspan="2" align="left" valign="center" width="0">
  <div>Ctrl+b</div>
</td>
<td>
  <div>激活控制台；此时以下按键生效</div>
</td>
</tr>
<tr>
<td rowspan="9" align="left" valign="center" width="0">
  <div>系统操作</div>
</td>
<td>
  <div>?</div>
</td>
<td>
  <div>列出所有快捷键；按q返回</div>
</td>
</tr>
<tr>
<td>
  <div>d</div>
</td>
<td>
  <div>脱离当前会话；这样可以暂时返回Shell界面，输入tmux attach能够重新进入之前的会话</div>
</td>
</tr>
<tr>
<td>
  <div>D</div>
</td>
<td>
  <div>选择要脱离的会话；在同时开启了多个会话时使用</div>
</td>
</tr>
<tr>
<td>
  <div>Ctrl+z</div>
</td>
<td>
  <div>挂起当前会话</div>
</td>
</tr>
<tr>
<td>
  <div>r</div>
</td>
<td>
  <div>强制重绘未脱离的会话</div>
</td>
</tr>
<tr>
<td>
  <div>s</div>
</td>
<td>
  <div>选择并切换会话；在同时开启了多个会话时使用</div>
</td>
</tr>
<tr>
<td>
  <div>:</div>
</td>
<td>
  <div>进入命令行模式；此时可以输入支持的命令，例如kill-server可以关闭服务器</div>
</td>
</tr>
<tr>
<td>
  <div>[</div>
</td>
<td>
  <div>进入复制模式；此时的操作与vi/emacs相同，按q/Esc退出</div>
</td>
</tr>
<tr>
<td>
  <div>~</div>
</td>
<td>
  <div>列出提示信息缓存；其中包含了之前tmux返回的各种提示信息</div>
</td>
</tr>
<tr>
<td rowspan="10" align="left" valign="center" width="0">
  <div>窗口操作</div>
</td>
<td>
  <div>c</div>
</td>
<td>
  <div>创建新窗口</div>
</td>
</tr>
<tr>
<td>
  <div>&amp;</div>
</td>
<td>
  <div>关闭当前窗口</div>
</td>
</tr>
<tr>
<td>
  <div>数字键</div>
</td>
<td>
  <div>切换至指定窗口</div>
</td>
</tr>
<tr>
<td>
  <div>p</div>
</td>
<td>
  <div>切换至上一窗口</div>
</td>
</tr>
<tr>
<td>
  <div>n</div>
</td>
<td>
  <div>切换至下一窗口</div>
</td>
</tr>
<tr>
<td>
  <div>l</div>
</td>
<td>
  <div>在前后两个窗口间互相切换</div>
</td>
</tr>
<tr>
<td>
  <div>w</div>
</td>
<td>
  <div>通过窗口列表切换窗口</div>
</td>
</tr>
<tr>
<td>
  <div>,</div>
</td>
<td>
  <div>重命名当前窗口；这样便于识别</div>
</td>
</tr>
<tr>
<td>
  <div>.</div>
</td>
<td>
  <div>修改当前窗口编号；相当于窗口重新排序</div>
</td>
</tr>
<tr>
<td>
  <div>f</div>
</td>
<td>
  <div>在所有窗口中查找指定文本</div>
</td>
</tr>
<tr>
<td rowspan="14" align="left" valign="center" width="0">
  <div>面板操作</div>
</td>
<td>
  <div>”</div>
</td>
<td>
  <div>将当前面板平分为上下两块</div>
</td>
</tr>
<tr>
<td>
  <div>%</div>
</td>
<td>
  <div>将当前面板平分为左右两块</div>
</td>
</tr>
<tr>
<td>
  <div>x</div>
</td>
<td>
  <div>关闭当前面板</div>
</td>
</tr>
<tr>
<td>
  <div>!</div>
</td>
<td>
  <div>将当前面板置于新窗口；即新建一个窗口，其中仅包含当前面板</div>
</td>
</tr>
<tr>
<td>
  <div>Ctrl+方向键</div>
</td>
<td>
  <div>以1个单元格为单位移动边缘以调整当前面板大小</div>
</td>
</tr>
<tr>
<td>
  <div>Alt+方向键</div>
</td>
<td>
  <div>以5个单元格为单位移动边缘以调整当前面板大小</div>
</td>
</tr>
<tr>
<td>
  <div>Space</div>
</td>
<td>
  <div>在预置的面板布局中循环切换；依次包括even-horizontal、even-vertical、main-horizontal、main-vertical、tiled</div>
</td>
</tr>
<tr>
<td>
  <div>q</div>
</td>
<td>
  <div>显示面板编号</div>
</td>
</tr>
<tr>
<td>
  <div>o</div>
</td>
<td>
  <div>在当前窗口中选择下一面板</div>
</td>
</tr>
<tr>
<td>
  <div>方向键</div>
</td>
<td>
  <div>移动光标以选择面板</div>
</td>
</tr>
<tr>
<td>
  <div>{</div>
</td>
<td>
  <div>向前置换当前面板</div>
</td>
</tr>
<tr>
<td>
  <div>}</div>
</td>
<td>
  <div>向后置换当前面板</div>
</td>
</tr>
<tr>
<td>
  <div>Alt+o</div>
</td>
<td>
  <div>逆时针旋转当前窗口的面板</div>
</td>
</tr>
<tr>
<td>
  <div>Ctrl+o</div>
</td>
<td>
  <div>顺时针旋转当前窗口的面板</div>
</td>
</tr>
</tbody>
</table>

1）进入tmux面板后，一定要先按ctrl+b，然后松开，再按其他的组合键才生效。
2）常用到的几个组合键：

```shell
ctrl+b ?        #     显示快捷键帮助
ctrl+b 空格键   #     采用下一个内置布局，这个很有意思，在多屏时，用这个就会将多有屏幕竖着展示
ctrl+b !        #     把当前窗口变为新窗口
ctrl+b  "       #     模向分隔窗口
ctrl+b %        #     纵向分隔窗口
ctrl+b q        #     显示分隔窗口的编号
ctrl+b o        #     跳到下一个分隔窗口。多屏之间的切换
ctrl+b 上下键   #    上一个及下一个分隔窗口
ctrl+b C-方向键 #    调整分隔窗口大小
ctrl+b &        #    确认后退出当前tmux
ctrl+b [        #    复制模式，即将当前屏幕移到上一个的位置上，其他所有窗口都向前移动一个。
ctrl+b c        #    创建新窗口
ctrl+b n        #    选择下一个窗口
ctrl+b l        #    最后使用的窗口
ctrl+b p        #    选择前一个窗口
ctrl+b w        #    以菜单方式显示及选择窗口
ctrl+b s        #    以菜单方式显示和选择会话。这个常用到，可以选择进入哪个tmux
ctrl+b t        #    显示时钟。然后按enter键后就会恢复到shell终端状态
ctrl+b d        #    脱离当前会话；这样可以暂时返回Shell界面，输入tmux attach能够重新进入之前的会话
```

## 参考资料

- tmux 官网下载地址：http://tmux.github.io/ 