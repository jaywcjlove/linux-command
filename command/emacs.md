emacs
===

功能强大的全屏文本编辑器

## 补充说明

**emacs命令** 是由GNU组织的创始人Richard Stallman开发的一个功能强大的全屏文本编辑器，它支持多种编程语言，具有很多优良的特性。有众多的系统管理员和软件开发者使用emacs。

### 语法  

```shell
emacs(选项)(参数)
```

### 选项  

```shell
+<行号>：启动emacs编辑器，并将光标移动到制定行号的行；
-q：启动emacs编辑器，而不加载初始化文件；
-u<用户>：启动emacs编辑器时，加载指定用户的初始化文件；
-t<文件>：启动emacs编辑器时，把指定的文件作为中端，不适用标准输入（stdin）与标准输出（stdout）；
-f<函数>：执行指定lisp（广泛应用于人工智能领域的编程语言）函数；
-l<lisp代码文件>：加载指定的lisp代码文件；
-batch：以批处理模式运行emacs编辑器。
```

### 参数  

文件：指定要编辑的文本文件。

## emacs命令操作大全  

基本命令

```shell
C-x C-c : 退出Emacs
C-x C-f : 打开一个文件，如果文件不存在，则创建一个文件
C-g : 取消未完成的命令
```

编辑

```shell
C-z (redefined): Undo；原来C-z是挂起Emacs（然后用fg命令调出）；C-x u 是默认的命令； 移动一下光标，再C-z就可以redo
M-d : 删除光标后的词语
```

移动光标

```shell
C-v : 向前翻页
M-v : 向后翻页
M-r : 将光标移动到屏幕中间那行
C-a : 移到行首
M-a : 移到句首，从行首到句首之间可能有空格
C-e : 移到行尾
M-e : 移到句尾
M-{ : 向上移动一段
M-} : 向下移动一段
C-right : 向前移动一个单词
C-left : 向后移动一个单词
C-up : 向前移动一段
C-down : 向后移动一段
M-< : 移到整个文本开头
M-> : 移到整个文本末尾
C-u 数字 命令 : 执行多次(数字表示次数)该命令；"M-数字 命令" 也可以
M-x goto-line : 移动到某一行
C-l : 重绘屏幕，效果就是当前编辑行移动窗口中央
```

Buffer 相关

```shell
C-x k : 关闭当前buffer
C-x b : 切换到前一个编辑的buffer
C-x C-b : 列出当前所有buffer
C-x C-s : 保存当前buffer
C-x s : 保存所有未保存的buffer，会提示你是否需要保存
C-x C-w : 文件另存为
```

拷贝与粘贴

```shell
M-space (redefined): 设置mark; C-@ 是默认命令
C-w (redefined) : 剪切一块区域；如果没有设置mark，则是剪切一行
M-w (redefined) : 拷贝一块区域；如果没有设置mark, 则是拷贝一行
C-k : 从当前位置剪切到行尾
C-y : 粘贴
M-y : 用C-y拉回最近被除去的文本后，换成 M-y可以拉回以前被除去的文本。键入多次的M-y可以拉回更早以前被除去的文本。
C-x r k : 执行矩形区域的剪切
C-x r y : 执行矩形区域的粘贴
```

```shell
窗口操作
C-x 0 : 关闭当前窗口
C-x 1 : 将当前窗口最大化
C-x 2 : 垂直分割窗口
C-x 3 : 水平分割窗口
M-o (redefined) : 在窗口之间切换; C-x o 是默认命令
C-x 5 1/2/3/0 : 对frame类似的操作
C-x < : 窗口内容右卷
C-x > : 窗口内容左卷（这两个命令在垂直分割窗口后比较有用）
(C-u) C-x ^ : 加高当前窗口，如果有C-u，则每次加高4行
(C-u) C-x } : 加宽当前窗口
(C-u) C-x { : 压窄当前窗口
ESC C-v : 在其它窗口进行卷屏操作
```

搜索和替换

```shell
C-s : 向前搜索（增量式搜索）；连续C-s，跳到下一个搜索到的目标
C-s RET : 普通搜索
C-r : 向前搜索
C-s RET C-w : 按单词查询
M-% : 查询替换，也就是替换前会询问一下
M-x replace-string : 普通替换
```

Tags

```shell
M-! etags .c .h : 创建TAGS文件
M-. : 跳到tag所在位置
M-x list-tags : 列出tags
```

书签

```shell
C-x r m : 设置书签bookmark
C-x r b : 跳到bookmark处
```

帮助

```shell
C-h ? : 查看帮助信息
C-h f : 查看一个函数
C-h v : 查看一个变量
C-h k : 查看一个键绑定 (C－h c 也是查看键绑定，但是信息较简略)
C-h C-f : 查看一个函数的info，非常有用
C-h i : 看Info
```

其它

```shell
C-M-\ : 对选中区域，按照某种格式(比如C程序)进行格式化
C-x h : 全部选中
M-! : 执行外部shell命令
M-x shell : 模拟shell的buffer
M-x term : 模拟terminal, C-c k 关闭terminal
C-x C-q : 修改buffer的只读属性
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->