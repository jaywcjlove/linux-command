tar
===

Linux下的归档使用工具，用来打包和备份。

## 补充说明

**tar命令** 可以为linux的文件和目录创建档案。利用tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用tar命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。

首先要弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件。

为什么要区分这两个概念呢？这源于Linux中很多压缩程序只能针对一个文件进行压缩，这样当你想要压缩一大堆文件时，你得先将这一大堆文件先打成一个包（tar命令），然后再用压缩程序进行压缩（gzip bzip2命令）。

### 语法

```shell
tar(选项)(参数)
```

### 选项

```shell
-A或--catenate：新增文件到以存在的备份文件；
-B：设置区块大小；
-c或--create：建立新的备份文件；
-C <目录>：这个选项用在解压缩，若要在特定目录解压缩，可以使用这个选项。
-d：记录文件的差别；
-x或--extract或--get：从备份文件中还原文件；
-t或--list：列出备份文件的内容；
-z或--gzip或--ungzip：通过gzip指令处理备份文件；
-Z或--compress或--uncompress：通过compress指令处理备份文件；
-f<备份文件>或--file=<备份文件>：指定备份文件；
-v或--verbose：显示指令执行过程；
-r：添加文件到已经压缩的文件；
-u：添加改变了和现有的文件到已经存在的压缩文件；
-j：支持bzip2解压文件；
-v：显示操作过程；
-l：文件系统边界设置；
-k：保留原有文件不覆盖；
-m：保留文件不被覆盖；
-w：确认压缩文件的正确性；
-p或--same-permissions：用原来的文件权限还原文件；
-P或--absolute-names：文件名使用绝对名称，不移除文件名称前的“/”号；
-N <日期格式> 或 --newer=<日期时间>：只将较指定日期更新的文件保存到备份文件里；
--exclude=<范本样式>：排除符合范本样式的文件。
```

### 参数

文件或目录：指定要打包的文件或目录列表。

### 实例

```shell
- z：有gzip属性的
- j：有bz2属性的
- Z：有compress属性的
- v：显示所有过程
- O：将文件解开到标准输出
```

下面的参数-f是必须的

-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。

```shell
tar -cf all.tar *.jpg
# 这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。

tar -rf all.tar *.gif
# 这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。

tar -uf all.tar logo.gif
# 这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。

tar -tf all.tar
# 这条命令是列出all.tar包中所有文件，-t是列出文件的意思
```

```shell
tar -cfv archive.tar foo bar  # 从文件foo和bar创建archive.tar。
tar -tvf archive.tar         # 详细列出archive.tar中的所有文件。
tar -xf archive.tar          # 从archive.tar提取所有文件。
```

#### zip格式

压缩： zip -r [目标文件名].zip [原文件/目录名]  
解压： unzip [原文件名].zip  
注：-r参数代表递归  

#### tar格式（该格式仅仅打包，不压缩）

打包：tar -cvf [目标文件名].tar [原文件名/目录名]  
解包：tar -xvf [原文件名].tar  
注：c参数代表create（创建），x参数代表extract（解包），v参数代表verbose（详细信息），f参数代表filename（文件名），所以f后必须接文件名。  

#### tar.gz格式

方式一：利用前面已经打包好的tar文件，直接用压缩命令。

压缩：gzip [原文件名].tar  
解压：gunzip [原文件名].tar.gz  

方式二：一次性打包并压缩、解压并解包

打包并压缩： tar -zcvf [目标文件名].tar.gz [原文件名/目录名]  
解压并解包： tar -zxvf [原文件名].tar.gz  
注：z代表用gzip算法来压缩/解压。  

#### tar.bz2格式

方式一：利用已经打包好的tar文件，直接执行压缩命令：

压缩：bzip2 [原文件名].tar  
解压：bunzip2 [原文件名].tar.bz2  
方式二：一次性打包并压缩、解压并解包  

打包并压缩： tar -jcvf [目标文件名].tar.bz2 [原文件名/目录名]  
解压并解包： tar -jxvf [原文件名].tar.bz2  
注：小写j代表用bzip2算法来压缩/解压。  

#### tar.xz格式

方式一：利用已经打包好的tar文件，直接用压缩命令：

压缩：xz [原文件名].tar  
解压：unxz [原文件名].tar.xz  
方式二：一次性打包并压缩、解压并解包  

打包并压缩： tar -Jcvf [目标文件名].tar.xz [原文件名/目录名]  
解压并解包： tar -Jxvf [原文件名].tar.xz  
注：大写J代表用xz算法来压缩/解压。  

#### tar.Z格式（已过时）

方式一：利用已经打包好的tar文件，直接用压缩命令：

压缩：compress [原文件名].tar  
解压：uncompress [原文件名].tar.Z  
方式二：一次性打包并压缩、解压并解包  

打包并压缩： tar -Zcvf [目标文件名].tar.Z [原文件名/目录名]  
解压并解包： tar -Zxvf [原文件名].tar.Z  
注：大写Z代表用ncompress算法来压缩/解压。另，ncompress是早期Unix系统的压缩格式，但由于ncompress的压缩率太低，现已过时。  

#### jar格式

压缩：jar -cvf [目标文件名].jar [原文件名/目录名]  
解压：jar -xvf [原文件名].jar  

注：如果是打包的是Java类库，并且该类库中存在主类，那么需要写一个META-INF/MANIFEST.MF配置文件，内容如下：  

```shell
Manifest-Version: 1.0
Created-By: 1.6.0_27 (Sun Microsystems Inc.)
Main-class: the_name_of_the_main_class_should_be_put_here
```

然后用如下命令打包：

jar -cvfm [目标文件名].jar META-INF/MANIFEST.MF [原文件名/目录名]  
这样以后就能用“java -jar [文件名].jar”命令直接运行主类中的public static void main方法了。  

#### 7z格式

压缩：7z a [目标文件名].7z [原文件名/目录名]  
解压：7z x [原文件名].7z  
注：这个7z解压命令支持rar格式，即：  

7z x [原文件名].rar

#### 其它例子

**将文件全部打包成tar包** ：

```shell
tar -cvf log.tar log2012.log    仅打包，不压缩！
tar -zcvf log.tar.gz log2012.log   打包后，以 gzip 压缩
tar -jcvf log.tar.bz2 log2012.log  打包后，以 bzip2 压缩
```

在选项`f`之后的文件档名是自己取的，我们习惯上都用 .tar 来作为辨识。 如果加`z`选项，则以.tar.gz或.tgz来代表gzip压缩过的tar包；如果加`j`选项，则以.tar.bz2来作为tar包名。


**解压目录**

去掉第一层目录结构，要出除第二层，--strip-components 2

```shell
tar -xvf portal-web-v2.0.0.tar --strip-components 1  -C 指定目录
```

**查阅上述tar包内有哪些文件** ：

```shell
tar -ztvf log.tar.gz
```

由于我们使用 gzip 压缩的log.tar.gz，所以要查阅log.tar.gz包内的文件时，就得要加上`z`这个选项了。

**将tar包解压缩** ：

```shell
tar -zxvf /opt/soft/test/log.tar.gz
```

在预设的情况下，我们可以将压缩档在任何地方解开的

**只将tar内的部分文件解压出来** ：

```shell
tar -zxvf /opt/soft/test/log30.tar.gz log2013.log
```

我可以透过`tar -ztvf`来查阅 tar 包内的文件名称，如果单只要一个文件，就可以透过这个方式来解压部分文件！

**文件备份下来，并且保存其权限** ：

```shell
tar -zcvpf log31.tar.gz log2014.log log2015.log log2016.log
```

这个`-p`的属性是很重要的，尤其是当您要保留原本文件的属性时。

**在文件夹当中，比某个日期新的文件才备份** ：

```shell
tar -N "2012/11/13" -zcvf log17.tar.gz test
```

**备份文件夹内容是排除部分文件：**

```shell
tar --exclude scf/service -zcvf scf.tar.gz scf/*
```

**其实最简单的使用 tar 就只要记忆底下的方式即可：**

```shell
压　缩：tar -jcv -f filename.tar.bz2 要被压缩的文件或目录名称
查　询：tar -jtv -f filename.tar.bz2
解压缩：tar -jxv -f filename.tar.bz2 -C 欲解压缩的目录
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
