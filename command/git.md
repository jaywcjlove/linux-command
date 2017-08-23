git
===

是目前世界上最先进的分布式版本控制系统

## 补充说明

**git命令** 很多人都知道，Linus在1991年创建了开源的Linux，从此，Linux系统不断发展，已经成为最大的服务器系统软件了。

Linus虽然创建了Linux，但Linux的壮大是靠全世界热心的志愿者参与的，这么多人在世界各地为Linux编写代码，那Linux的代码是如何管理的呢？

事实是，在2002年以前，世界各地的志愿者把源代码文件通过diff的方式发给Linus，然后由Linus本人通过手工方式合并代码！

你也许会想，为什么Linus不把Linux代码放到版本控制系统里呢？不是有CVS、SVN这些免费的版本控制系统吗？因为Linus坚定地反对CVS和SVN，这些集中式的版本控制系统不但速度慢，而且必须联网才能使用。有一些商用的版本控制系统，虽然比CVS、SVN好用，但那是付费的，和Linux的开源精神不符。

不过，到了2002年，Linux系统已经发展了十年了，代码库之大让Linus很难继续通过手工方式管理了，社区的弟兄们也对这种方式表达了强烈不满，于是Linus选择了一个商业的版本控制系统BitKeeper，BitKeeper的东家BitMover公司出于人道主义精神，授权Linux社区免费使用这个版本控制系统。

安定团结的大好局面在2005年就被打破了，原因是Linux社区牛人聚集，不免沾染了一些梁山好汉的江湖习气。开发Samba的Andrew试图破解BitKeeper的协议（这么干的其实也不只他一个），被BitMover公司发现了（监控工作做得不错！），于是BitMover公司怒了，要收回Linux社区的免费使用权。

Linus可以向BitMover公司道个歉，保证以后严格管教弟兄们，嗯，这是不可能的。实际情况是这样的：

Linus花了两周时间自己用C写了一个分布式版本控制系统，这就是Git！一个月之内，Linux系统的源码已经由Git管理了！牛是怎么定义的呢？大家可以体会一下。

Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等。

历史就是这么偶然，如果不是当年BitMover公司威胁Linux社区，可能现在我们就没有免费而超级好用的Git了。

[Git常用命令清单](https://github.com/jaywcjlove/handbook/blob/master/other/Git%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E6%B8%85%E5%8D%95.md)

### 语法  

```
git [--version] [--help] [-C <path>] [-c name=value]
   [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
   [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
   [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
   <command> [<args>]
```

### 选项  

```
add              将文件内容添加到索引
bisect           通过二进制查找引入错误的更改
branch           列出，创建或删除分支
checkout         检查分支或路径到工作树
clone            将存储库克隆到新目录中
commit           将更改记录到存储库
diff             显示提交，提交和工作树等之间的更改
fetch            从另一个存储库下载对象和引用
grep             打印匹配图案的行
init             创建一个空的Git仓库或重新初始化一个现有的
log              显示提交日志
merge            加入两个或更多的开发历史
mv               移动或重命名文件，目录或符号链接
pull             从另一个存储库或本地分支获取并合并
push             更新远程引用以及相关对象
rebase           转发端口本地提交到更新的上游头
reset            将当前HEAD复位到指定状态
rm               从工作树和索引中删除文件
show             显示各种类型的对象
status           显示工作树状态
tag              创建，列出，删除或验证使用GPG签名的标签对象
```

### 例子

init

`git init` #初始化  

status

`git status` #获取状态  

add

`git add file` # .或*代表全部添加  
`git rm --cached <added_file_to_undo>` # 在commit之前撤销git add操作  
`git reset head` # 好像比上面`git rm --cached`更方便  

commit

`git commit -m "message"` #此处注意乱码  

remote

`git remote add origin git@github.com:JSLite/test.git` #添加源  

push

```bash
git push -u origin master # push同事设置默认跟踪分支  
git push origin master  
git push -f origin master # 强制推送文件，缩写 -f（全写--force）
```

clone

`git clone git://github.com/JSLite/JSLite.js.git `  
`git clone git://github.com/JSLite/JSLite.js.git mypro` #克隆到自定义文件夹  
`git clone [user@]example.com:path/to/repo.git/` #SSH协议还有另一种写法。  

git clone支持多种协议，除了HTTP(s)以外，还支持SSH、Git、本地文件协议等，下面是一些例子。`git clone <版本库的网址> <本地目录名>`  

```shell
$ git clone http[s]://example.com/path/to/repo.git/
$ git clone ssh://example.com/path/to/repo.git/
$ git clone git://example.com/path/to/repo.git/
$ git clone /opt/git/project.git 
$ git clone file:///opt/git/project.git
$ git clone ftp[s]://example.com/path/to/repo.git/
$ git clone rsync://example.com/path/to/repo.git/
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->