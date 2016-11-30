wget
===

Linux系统下载文件工具

## 补充说明

**wget命令** 用来从指定的URL下载文件。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。

### 语法  

```
wget(选项)(参数)
```

### 选项  

```
-a<日志文件>：在指定的日志文件中记录资料的执行过程；
-A<后缀名>：指定要下载文件的后缀名，多个后缀名之间使用逗号进行分隔；
-b：进行后台的方式运行wget；
-B<连接地址>：设置参考的连接地址的基地地址；
-c：继续执行上次终端的任务；
-C<标志>：设置服务器数据块功能标志on为激活，off为关闭，默认值为on；
-d：调试模式运行指令；
-D<域名列表>：设置顺着的域名列表，域名之间用“，”分隔；
-e<指令>：作为文件“.wgetrc”中的一部分执行指定的指令；
-h：显示指令帮助信息；
-i<文件>：从指定文件获取要下载的URL地址；
-l<目录列表>：设置顺着的目录列表，多个目录用“，”分隔；
-L：仅顺着关联的连接；
-r：递归下载方式；
-nc：文件存在时，下载文件不覆盖原有文件；
-nv：下载时只显示更新和出错信息，不显示指令的详细执行过程；
-q：不显示指令执行过程；
-nh：不查询主机名称；
-v：显示详细执行过程；
-V：显示版本信息；
--passive-ftp：使用被动模式PASV连接FTP服务器；
--follow-ftp：从HTML文件中下载FTP连接文件。
```

### 参数  

URL：下载指定的URL地址。

### 实例  

 **使用wget下载单个文件** 

```
wget http://www.jsdig.com/testfile.zip
```

以下的例子是从网络下载一个文件并保存在当前目录，在下载的过程中会显示进度条，包含（下载完成百分比，已经下载的字节，当前下载速度，剩余下载时间）。

 **下载并以不同的文件名保存** 

```
wget -O wordpress.zip http://www.jsdig.com/download.aspx?id=1080
```

wget默认会以最后一个符合`/`的后面的字符来命令，对于动态链接的下载通常文件名会不正确。

错误：下面的例子会下载一个文件并以名称`download.aspx?id=1080`保存:

```
wget http://www.jsdig.com/download?id=1
```

即使下载的文件是zip格式，它仍然以`download.php?id=1080`命令。

正确：为了解决这个问题，我们可以使用参数`-O`来指定一个文件名：

```
wget -O wordpress.zip http://www.jsdig.com/download.aspx?id=1080
```

 **wget限速下载** 

```
wget --limit-rate=300k http://www.jsdig.com/testfile.zip
```

当你执行wget的时候，它默认会占用全部可能的宽带下载。但是当你准备下载一个大文件，而你还需要下载其它文件时就有必要限速了。

 **使用wget断点续传** 

```
wget -c http://www.jsdig.com/testfile.zip
```

使用`wget -c`重新启动下载中断的文件，对于我们下载大文件时突然由于网络等原因中断非常有帮助，我们可以继续接着下载而不是重新下载一个文件。需要继续中断的下载时可以使用`-c`参数。

 **使用wget后台下载** 

```
wget -b http://www.jsdig.com/testfile.zip

Continuing in background, pid 1840.
Output will be written to `wget-log'.
```

对于下载非常大的文件的时候，我们可以使用参数`-b`进行后台下载，你可以使用以下命令来察看下载进度：

```
tail -f wget-log
```

 **伪装代理名称下载** 

```
wget --user-agent="Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16" http://www.jsdig.com/testfile.zip
```

有些网站能通过根据判断代理名称不是浏览器而拒绝你的下载请求。不过你可以通过`--user-agent`参数伪装。

 **测试下载链接** 

当你打算进行定时下载，你应该在预定时间测试下载链接是否有效。我们可以增加`--spider`参数进行检查。

```
wget --spider URL
```

如果下载链接正确，将会显示:

```
Spider mode enabled. Check if remote file exists.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [text/html]
Remote file exists and could contain further links,
but recursion is disabled -- not retrieving.
```

这保证了下载能在预定的时间进行，但当你给错了一个链接，将会显示如下错误:

```
wget --spider url
Spider mode enabled. Check if remote file exists.
HTTP request sent, awaiting response... 404 Not Found
Remote file does not exist -- broken link!!!
```

你可以在以下几种情况下使用`--spider`参数：

*   定时下载之前进行检查
*   间隔检测网站是否可用
*   检查网站页面的死链接

 **增加重试次数** 

```
wget --tries=40 URL
```

如果网络有问题或下载一个大文件也有可能失败。wget默认重试20次连接下载文件。如果需要，你可以使用`--tries`增加重试次数。

 **下载多个文件** 

```
wget -i filelist.txt
```

首先，保存一份下载链接文件：

```
cat > filelist.txt
url1
url2
url3
url4
```

接着使用这个文件和参数`-i`下载。

 **镜像网站** 

```
wget --mirror -p --convert-links -P ./LOCAL URL
```

下载整个网站到本地。

*   `--miror`开户镜像下载。
*   `-p`下载所有为了html页面显示正常的文件。
*   `--convert-links`下载后，转换成本地的链接。
*   `-P ./LOCAL`保存所有文件和目录到本地指定目录。

 **过滤指定格式下载** 

```
wget --reject=gif ur
```

下载一个网站，但你不希望下载图片，可以使用这条命令。

 **把下载信息存入日志文件** 

```
wget -o download.log URL
```

不希望下载信息直接显示在终端而是在一个日志文件，可以使用。

 **限制总下载文件大小** 

```
wget -Q5m -i filelist.txt
```

当你想要下载的文件超过5M而退出下载，你可以使用。注意：这个参数对单个文件下载不起作用，只能递归下载时才有效。

 **下载指定格式文件** 

```
wget -r -A.pdf url
```

可以在以下情况使用该功能：

*   下载一个网站的所有图片。
*   下载一个网站的所有视频。
*   下载一个网站的所有PDF文件。

 **FTP下载** 

```
wget ftp-url
wget --ftp-user=USERNAME --ftp-password=PASSWORD url
```

可以使用wget来完成ftp链接的下载。

使用wget匿名ftp下载：

```
wget ftp-url
```

使用wget用户名和密码认证的ftp下载：

```
wget --ftp-user=USERNAME --ftp-password=PASSWORD url
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->