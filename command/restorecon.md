restorecon
===

恢复文件的安全上下文

## 补充说明

**restorecon命令** 用来恢复SELinux文件属性即恢复文件的安全上下文。

### 语法  

```shell
restorecon [-iFnrRv] [-e excludedir ] [-o filename ] [-f filename | pathname...]
```

### 选项  

```shell
-i：忽略不存在的文件。
-f：infilename 文件 infilename 中记录要处理的文件。
-e：directory 排除目录。
-R/-r：递归处理目录。
-n：不改变文件标签。
-o/outfilename：保存文件列表到 outfilename，在文件不正确情况下。
-v：将过程显示到屏幕上。
-F：强制恢复文件安全语境。
```

### 实例  

假设CentOS安装了apache，网页默认的主目录是`/var/www/html`，我们经常遇到这样的问题，在其他目录中创建了一个网页文件，然后用mv移动到网页默认目录`/var/www/html`中，但是在浏览器中却打不开这个文件，这很可能是因为这个文件的SELinux配置信息是继承原来那个目录的，与`/var/www/html`目录不同，使用mv移动的时候，这个SELinux配置信息也一起移动过来了，从而导致无法打开页面，具体请看下面的实例：

使用CentOS举例,如果默认没有安装apache，确保网络连接，使用下面的命令安装

```shell
[root@jsdig.com ~]# yum install httpd
 # 我们在root的家目录新建一个html文件 
[root@jsdig.com ~]# pwd
/root

[root@jsdig.com ~]# vi index.html

# 随便输入一段文字，保存退出 
welcome to www.jsdig.com

# 将这个文件mv到网页默认目录下 
[root@jsdig.com ~]# mv index.html /var/www/html/

# 
# 这个时候我们使用firefox浏览器输入127.0.0.1/index.html发现打不开，
# 查看一下SELinux的日志文件，发现了下面这一段报错信息，从这个报错信息不难看出，
# 进程httpd访问网页主目录中的index.html时被SELinux阻止，原因是因为，SELinux配置信息不正确,
# 正确的SELinux配置信息应该是scontext=后面的部分，
# 而index.html文件的SELinux配置信息却是tcontext=后面的部分，
# 从tcontext=的第三段“admin_home_t”不难看出，这个文件的SELinux配置信息是root用户家目录的。
# 
type=AVC msg=audit(1378974214.610:465): avc:  denied  { open } for  pid=2359 comm="httpd" path="/var/www/html/index.html" dev="sda1" ino=1317685 scontext=system_u:system_r:httpd_t:s0 tcontext=unconfined_u:object_r:admin_home_t:s0 tclass=file
```

使用ls -Z也可以看出,文件和目录的SELinux信息不匹配

```shell
[root@jsdig.com html]# ls -Z /var/www/html/
.... unconfined_u:object_r:admin_home_t:s0 index.html

[root@jsdig.com html]# ls -Zd /var/www/html/
.... system_u:object_r:httpd_sys_content_t:s0 /var/www/html/
```

使用restorecon来恢复网页主目录中所有文件的SELinux配置信息(如果目标为一个目录，可以添加-R参数递归)

```shell
[root@jsdig.com html]# restorecon -R /var/www/html/
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->