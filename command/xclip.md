xclip
===

管理 X 粘贴板

## 补充说明

在 X 系统里面，从一个窗口复制一段文字到另一个窗口，有两套机制，分别是 Selections 和 cut buffers。

常用的 copy & paste 是利用的 cut buffers 机制;另外用鼠标选中一段文字，然后在另一个窗口按鼠标中键实现复制，利用的是 selections 机制。selection 又可以分为 master 和 slave selection。

当用鼠标选中一段文件，这段文字就自动被复制到 master selection。然后在另一个地方按鼠标中键，就自动把 master selection 的内容粘贴出来。

当你想复制少量文字的时候，两种方法都是很方便的。但是当复制大段文字的时候就挺麻烦。另外就是你可能会频繁的执行一些复制粘贴工作，不停的用鼠标选中文字，然后再粘贴。这是对手指的折磨。

我忍受不了这种折磨，所以发现了 xclip， 方便的管理 X selections 里面内容的工具。

比如如下命令就把文件 /etc/passwd 的内容复制到 X master selections 里面了。

```shell
xclip -i /etc/passwd
```

然后到别的地方就能复制出来，利用鼠标中键。或者是更舒服的 shift+insert。 我现在最常用的方法是通过键盘绑定来管理 X master selections 的内容。比如 alt+F1 就能把我的 ~/f1 的内容复制到 X master selections，alt+F2 复制 ~/f2 的内容。这样就能把你需要经常用到的内容方便的进行复制粘贴。比如常用的密码啥的。


