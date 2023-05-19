htop
===

[非内部命令]一个互动的进程查看器，可以动态观察系统进程状况

## 补充说明

htop命令 是Linux系统中的一个互动的进程查看器，一个文本模式的应用程序(在控制台或者X终端中)，需要ncurses。

与Linux传统的top相比，htop更加人性化。它可让用户交互式操作，支持颜色主题，可横向或纵向滚动浏览进程列表，并支持鼠标操作。

与top相比，htop有以下优点：

- 可以横向或纵向滚动浏览进程列表，以便看到所有的进程和完整的命令行。
- 在启动上，比top 更快。
- 杀进程时不需要输入进程号。
- htop 支持鼠标操作。
- 两者相比起来，top比较繁琐。

top缺点：

- 只支持键盘操作。
- 显示也单调。

htop 官网：http://htop.sourceforge.net/

### htop 安装

在大多数的 Linux 发行版中你不会找到预安装的 `htop`，但作为最流行的实用程序之一，你会在几乎每个 Linux 发行版的默认存储库中找到 `htop`。

因此，如果你的机器是基于 Debian/Ubuntu 驱动的，则以下命令应该可以完成你的工作：

```shell
sudo apt install htop
```

类似的，如果你使用的是 Fedora，则可以使用以下的命令：

```shell
sudo dnf install htop
```

如果你使用的是 CentOS 或 RedHat 则可以使用以下的命令：

```shell
sudo yum install htop
```
如果你想避免从源代码构建包，还有一个 Snap 包可用：

```shell
sudo snap install htop
```

如果你使用的是其它的发行版或者想从源代码构建，你可以使用 `wget` 下载并安装：
这需要你下载并安装 `wget` `cmake`

```shell
wget https://link.zhihu.com/?target=https%3A//hisham.hm/htop/releases/2.2.0/htop-2.2.0.tar.gz

tar -zxvf htop-2.2.0.tar.gz

cd htop-2.2.0/

./configure

make

make install
```

当然你也可以随时参考你可以随时参考 [htop 的 GitHub](https://link.zhihu.com/?target=https%3A//github.com/htop-dev/htop) 页面以获得详细说明。

**说明**：htop源码安装方式默认安装到 `/usr/local` 目录下，如果想安装到其它路径，在执行 configure 时通过 `—prefix` 指定，格式为：`./configure --prefix=/some/path`

###  语法

```shell
htop
```

### 参数

```shell
-C --no-color               使用单色配色方案
-d --delay=DELAY            设置更新之间的延迟，在十秒
-s --sort-key=COLUMN        纵列排序(try --sort-key=help for a list)
-u --user=USERNAME          只显示一个指定用户的进程
-p --pid=PID,[,PID,PID...]  只显示给用户
-h --help                   打印此命令帮助
-v --version                打印版本信息
```

#### 参数示例

- -C 选项：设置界面为无颜色。

- -d 选项 : 设置刷新时间，单位为秒。如，htop -d 10命令会每10秒刷新一次。

- -s 选项 : 按指定的列排序。如，htop -s PID命令会按PID 列的大小排序来显示。

- -u 选项 : 显示指定的用户的进程信息。如，htop -u test命令会只显示出用户名为test的相关进程。

###  选项

```shell
h,?     F1：查看htop使用说明
S       F2：设置
/       F3：搜索进程
\       F4：过滤器，按关键字搜索
t       F5：显示树形结构
<,>     F6：选择排序方式
[       F7：减少nice值，这样就可以提高对应进程的优先级
]       F8：增加nice值，这样可以降低对应进程的优先级
k       F9：杀掉选中的进程
q       F10：退出htop


/ : 搜索字符
h : 显示帮助
l : 显示进程打开的文件: 如果安装了lsof，按此键可以显示进程所打开的文件
u : 显示所有用户，并可以选择某一特定用户的进程
U : 取消标记所有的进程
s : 将调用strace追踪进程的系统调用
t : 显示树形结构

H：显示/隐藏用户线程
I：倒转排序顺序
K：显示/隐藏内核线程    
M：按内存占用排序
P：按CPU排序    
T：按运行时间排序

上下键或PgUP， PgDn : 移动选中进程  
左右键或Home， End : 移动列表  
Space(空格) : 标记/取消标记一个进程。命令可以作用于多个进程，例如 "kill"，将应用于所有已标记的进程  

```


### Htop设定

鼠标点击Setup或者按下F2 之后进入htop 设定的页面

#### 1. Meters

设定顶端的 显示信息，分为左右两侧，Left column 表示左侧的显示的信息，Right column表示右侧显示的信息，如果要新加选项，可以选择Available meters添加，F5新增到上方左侧，F6新增到上方右侧。Left column和Right column下面的选项，可以选定信息的显示方式，有LED、Bar(进度条)、Text(文本模式)，可以根据个人喜好进行设置

#### 2. Display options

选择要显示的内容，按空格 x表示显示，选择完后，按F10保存

#### 3. Colors

设定界面以什么颜色来显示，个人认为用处不大，各人喜好不同

#### 4. Colums

作用是增加或取消要显示的各项内容，选择后F7(向上移动)、F8(向下移动)、F9(取消显示、F10(保存更改))此处增加了PPID、PGRP，根据各人需求，显示那些信息。

**F3 搜索进程**

在界面下按F3或直接输入”/”就可以直接进入搜索模式，是按照进程名进行搜索的，搜索到的进程会用设定的颜色标记出来，方便查看。

**F4：过滤器**

相当于模糊查找，不区分大小写，下方输入要搜索的内容后，则界面只显示搜索到的内容，更加方便查看

**F5:以树形方式显示**


**F6：排序方式**

按下F6后会跳转至以树形方式显示界面，让您选择以什么方式进行排序，在Sort by下选择您要以什么来排序

**F7，F8：调整进程nice值**

F7表示减小nice值(增大优先级)，F8增大nice值(减小优先级)，选择某一进程，按F7或F8来增大或减小nice值，nice值范围为-20-19


**F9：杀死进程**

选择某一进程按F9即可杀死此进程，很方便

**F10:退出htop**


