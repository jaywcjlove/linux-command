rcp
===

使在两台Linux主机之间的文件复制操作更简单

## 补充说明

**rcp命令** 使在两台Linux主机之间的文件复制操作更简单。通过适当的配置，在两台Linux主机之间复制文件而无需输入密码，就像本地文件复制一样简单。

###  语法 

```shell
rcp(选项)(参数)
```

###  选项 

```shell
-p：保留源文件或目录的属性，包括拥有者、所属群组、权限与时间；
-r：递归处理，将指定目录下的文件与子目录一并处理；
-x：加密两台Linux主机间传送的所有信息。
-D：指定远程服务器的端口号。
```

同名用户的主目录。如果没有给出远程用户名，就使用当前用户名。如果远程机上的路径包含特殊shell字符，需要用反斜线`\\`、双引号`""`或单引号`''`括起来，使所有的shell元字符都能被远程地解释。需要说明的是，rcp不提示输入口令，它通过rsh命令来执行拷贝。

directory 每个文件或目录参数既可以是远程文件名也可以是本地文件名。远程文件名具有如下形式`rname@rhost:path`，其中rname是远程用户名，rhost是远程计算机名，path是这个文件的路径。

###  参数 

源文件：指定要复制的源文件。源文件可以有多个。

###  实例 

 **rcp命令使用条件** 

如果系统中有`/etc/hosts`文件，系统管理员应确保该文件包含要与之进行通信的远程主机的项。配置过程:

只对root用户生效

1、在双方root用户根目录下建立rhosts文件，并将双方的hostname加进去。在此之前应在双方的`/etc/hosts`文件中加入对方的ip和hostname  
2、把rsh服务启动起来，redhat默认是不启动的。  
方法：用执行ntsysv命令，在rsh选项前用空格键选中，确定退出。然后执行`service xinetd restart`即可。  
3、到`/etc/pam.d/`目录下，把rsh文件中的`auth required /lib/security/pam_securetty.so`一行用“#”注释掉即可。（只有注释掉这一行，才能用root用户登录）

 **将当前目录下的 test1 复制到名为 webserver1 的远程系统：** 

```shell
rcp test1 webserver1:/home/root/test3
```

在这种情况下，test1 被复制到远程子目录 test3下，名称仍为 test1 。如果仅提供了远程主机名，rcp 将把 test1 复制到远程主目录下，名称仍为 test1 。

 **还可以在目的目录中包含文件名。例如，将文件复制到名为 webserver1的系统中：** 

```shell
rcp test1 webserver1:/home/root/test3
```

在这种情况下，将 test1 复制到远程目录root 下并将其命名为 test3。

 **从远程系统复制文件：要将远程系统中的文件复制到本地目录下：** 

```shell
rcp remote_hostname:remote_file local_fileEnter
```

 **将远程系统 webserver1中的 test2 复制到当前目录：** 

```shell
rcp webserver1:/home/root/test2 .Enter
```

`.`是“当前目录”的简写形式。在这种情况下，远程目录中的 test2 被复制到当前目录下，名称仍为 test2 。

如果希望用新名称复制文件，请提供目标文件名。如果希望将 test2 复制到本地系统中的其他目录下，请使用以下绝对或相对路径名：

```shell
rcp webserver1:/home/root/test2 otherdir/ Enter
```

或者，如果希望用其他文件名将文件复制到其他目录下：

```shell
rcp webserver1:/home/root/test2 otherdir/otherfile Enter
```

 **将目录复制到远程系统：** 

要将本地目录及其文件和子目录复制到远程系统，请同时使用 rcp 和 -r（递归）选项。

```shell
rcp -r local_dir remote_hostname:remote_dir Enter
```

如果当前目录下没有 local_dir，则除本地目录名外，还需要提供相对路径名（自当前目录开始）或绝对路径名（自 / 顶级目录开始）。另外，如果主目录下没有 remote_dir，则 remote_dir 将需要一个相对路径（自主目录开始）或绝对路径（自 / 开始）。

 **要将名为 work 的子目录完整地复制到 webserver1远程计算机中的主目录下名为 products 的目录，请键入以下内容：** 

```shell
rcp -r work webserver1:/home/root/products Enter
```

此命令在`webserver1:/home/root/products`下创建名为 work 的目录及其全部内容（假定`/home/root/products`已存在于 webserver1中）。

本示例假定用户处于包含 work 的本地目录下。否则，必须提供该目录的相对或绝对路径，如`/home/root/work`。

 **从远程系统复制目录：** 

要将远程目录及其所有文件和子目录复制到本地目录，请在以下语法中使用 rcp 和 -r（递归）选项。

```shell
rcp –r remote_hostname:remote_dir local_dir Enter
```

要将名为 work 的远程目录复制到当前目录，请键入以下内容：

```shell
rcp –r webserver1:/home/root/work .Enter
```

`.`表示当前目录。将在此目录下创建 work 目录。



