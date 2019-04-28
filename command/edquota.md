edquota
===

用于编辑指定用户或工作组磁盘配额

## 补充说明

**edquota命令** 用于编辑指定用户或工作组磁盘配额。edquota预设会使用vi来编辑使用者或群组的quota设置。

### 语法  

```shell
edquota(选项)(参数)
```

### 选项  

```shell
-u：设置用户的quota，这是预设的参数；
-g：设置群组的quota；
-p<源用户名称>：将源用户的quota设置套用至其他用户或群组；
-t：设置宽限期限。
```

### 参数  

用户：指定要编辑磁盘配额限制的用户名或者工作组。

### 实例  

 **配置系统的磁盘配额支持** 

首先，磁盘配额是区域性的，我们可以决定哪块分区进行磁盘配额，哪块分区不用（自然也就不用配置了）。一般而言，作为一台web虚拟主机服务器，`/home`和`/www`（或者类似的）是供用户存放资源的分区，所以可以对这两个分区进行磁盘配额。假定我们需要对`/home`分区实现用户级的限制，而对`/www`进行每个组的用户配额。

第一步：

```shell
vi /etc/fstab
```

找到对应于`/home`和`/www`的行，例如：

```shell
/dev/sda5 /home ext2 defaults 1 2
/dev/sda7 /www ext2 defaults 1 2
```

在`/home`里实现用户级的磁盘配额，所以对sda5行的挂装选项域做如下修改：

```shell
/dev/sda5 /home ext2 defaults，usrquota 1 2
```

注意，是usrquota哦。类似的，我们可以如下修改`/www`行：

```shell
/dev/sda7 /www ext2 defaults，grpquota 1 2
```

如编辑根用户

改`/etc/fstab`文件中

```shell
LABEL=/ / ext2 defaults,usrquota,grpquota 1 1
```

说明：`/etc/fstab`文件的每一行由六个字段组成：

*   第一个字段：文件系统（分区）的注释（类似卷标）；
*   第二个字段：文件系统的装载点；
*   第三个字段：文件系统类型（磁盘配额只能在ext2文件系统上实现）；
*   第四个字段：装载文件系统是使用的选项，如果只想实现基于用户的磁盘配额，就加入usrquota关键字，只想实现基于组的磁盘配额，就加入grpqouta关键字，如果两者都需要，就全写入，中间可以用逗号分隔。
*   第五个字段：表明该文件系统（分区）是否为只读，如果是0就表示只读，1表示可以读写。
*   第六个字段：表示系统启动执行fsck时检查的顺序。

注意：请特别注意这里的拼写，是usrquota和grpquota，不要写成userquota和groupquota。

进入单用户模式，用quotacheck生成.user或.group文件

quotacheck 你的目录

```shell
example:quotacheck / ; quotacheck /home
```

如果单用户模式报错的话umount你的设备`/dev/hda*`

再执行就ok了，重启动系统，如果一切正常的话，quota将开始正常工作。

 **设置用户和组配额的分配量** 

对磁盘配额的限制一般是从一个用户占用磁盘大小和所有文件的数量两个方面来进行的。在具体操作之前，我们先了解一下磁盘配额的两个基本概念：软限制和硬限制。

*   软限制：一个用户在文件系统可拥有的最大磁盘空间和最多文件数量，在某个宽限期内可以暂时超过这个限制。
*   硬限制：一个用户可拥有的磁盘空间或文件的绝对数量，绝对不允许超过这个限制。

 **通过edquota直接编辑数据文件：** 

使用编辑配额命令edquota为用户配置定额，在重新启动系统之后，我们假设lanf是需要定额的系统帐户，可以使用如下命令来为用户分配磁盘配额：

```shell
edquota -u lanf
```

这个命令将启动默认文本编辑器（如vi或其他由$EDITOR 环境变量指定的编辑器），其内容如下所示：

```shell
Quotas for user lanf:
/dev/sda5:blocks in use:0,limits(soft = 0,hard = 0)
inodes in use:0,limits(soft = 0,hard = 0)
```

这表示lanf用户在`/dev/sda5`分区（该分区已经在usrquota的控制之下）中迄今使用了0个数据块（以K为单位），并且没有设限制（包括软限制soft和硬限制hard），同样，lanf在这个分区也没有任何文件和目录，并且也没有任何软硬限制。如果，我们想对用户进行磁盘容量的限制的话，只需要修改blocks行的limits部分就可以了，注意单位使用的是K。例如要为lanf分配100M磁盘的软限制，400M硬限制，可以使用如下的设置：

```shell
Quotas for user lanf:
/dev/sda5:blocks in use:0,limits(soft = 102400,hard = 409800)
inodes in use:0,limits(soft = 0,hard = 0)
```

同样的，要对文件目录的数量限制可以相应的修改inodes行。我们也可以同时对这两项都作出限制。只需要如下的修改Quotas for user lanf：

```shell
/dev/sda5:blocks in use:0,limits(soft = 102400,hard = 409800)
inodes in use:0,limits(soft = 12800,hard = 51200)
```

这表示除了相应的容量的限制外，还对文件/目录的数量做了12800个的软限制和51200个的硬限制。在保存了新的配置后，该用户的磁盘使用就不能超过硬限制。如果用户试图超过这个限制，该操作将被取消，然后得到一个错误信息。但是，如果每个用户都要这么麻烦的设置的话，那这种重复的体力劳动实在有点令人不寒而栗，而且也太浪费时间了。幸好edquota还有个-p参数（prototype）可以对已有的用户设置进行拷贝。例如，我们想对Jack、Tom、Chen三个用户使用和lanf一样的限额配置，可以使用如下的命令：

```shell
edquota -p lanf -u Jack Tom Chen
```

这样一来，这三个用户就被赋予了和lanf一样的磁盘配额。

对组的配额，除了edquota命令中对应`-u`选项的改为`-g`选项，例如下面对webterm1组的操作：

```shell
edquota -g webterm1
```

实际上，以上的限制只是对用户设定的硬限制在起作用。如果需要使软限制也起作用的话，还需要对用户的软限制设定宽限期，缺省的软限制的宽限期是无穷，这可以使用edquota命令的`-t`选项来实现。运行下面的命令：

```shell
edquota -t
```

edquota将打开缺省编辑器显示如下内容：

```shell
time units may be:days,hours,minutes,or seconds
Grace period before enforcing soft limits for users:
/dev/sda5:block grace period:0 days,file grace period:0 days
```

可以使用天、小时、分、秒为单位来设定宽限期。例如，在下面这个例子中，磁盘空间限制的宽限期为两天，而文件数量限制的宽限期只有6个小时。

```shell
Time units may be:days,hours,minutes,or seconds
Grace period before enforcing soft limits for users:
/dev/sda5:block grace period:2 days,file grace period:6 hours
```

 **通过setquota工具加入：** 

比如加入用户bye2000的磁盘配额，执行以下命令：

```shell
setquota –u / 2000 2500 100 110 bye2000
```

以下是setquota命令用法的简单描述：

```shell
setquota [ -u|-g ] 装载点 软块数 硬块数 软文件数 硬文件数 用户名/组名
```

 **查看用户磁盘使用情况** 

要查明某一个用户使用了多少磁盘空间，例如lanf，可以使用如下的命令：

```shell
quota -u lanf
```

显示：

```shell
Disk quotas for user lanf(uid 503):
Filesystem blocks quota limit grace file quota limit grace
/dev/sda5 3 102400 409800 1 12800 51200
```

同样，可以使用`quota -g groupname`命令来参看某个组的磁盘使用情况。

注意：

1.  如果该用户没有配置磁盘限额的话，输出显示`Disk quotas for user hujm (uid 503): none`
2.  如果不带任何参数运行quota的话，查看的是你自己的配额使用情况。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->