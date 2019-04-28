quota
===

显示磁盘已使用的空间与限制

## 补充说明

**quota命令** 用于显示用户或者工作组的磁盘配额信息。输出信息包括磁盘使用和配额限制。

### 语法  

```shell
quota(选项)(参数)
```

### 选项  

```shell
-g：列出群组的磁盘空间限制；
-q：简明列表，只列出超过限制的部分；
-u：列出用户的磁盘空间限制；
-v：显示该用户或群组，在所有挂入系统的存储设备的空间限制；
-V：显示版本信息。
```

### 参数  

用户或者工作组：指定要显示的用户或者工作组。

### 实例  

我们可以限制某一群组所能使用的最大磁盘配额，而且可以再限制某一使用者的最大磁盘配额 ，好比做一个收费的应用，vip可以得到空间更大一些。另外，以 Link 的方式，来使邮件可以作为限制的配额（更改`/var/spool/mail` 这个路径），不2，需要重新再规划一个硬盘！直接使用 Link 的方式指向 /home （或者其它已经做好的 quota 磁盘）就可以！这通常是用在原本规划不好，但是却又不想要更动原有主机架构的情况中！

要求：Linux 主机里面主要针对 quser1 及 quser2 两个使用者来进行磁盘配额， 且这两个使用者都是挂在 qgroup 组里面的。每个使用者总共有 50MB 的磁盘空间 (不考虑 inode) 限制！并且 soft limit 为 45 MB；而宽限时间设定为 1 天， 但是在一天之内必须要将多余的文件删除掉，否则将无法使用剩下的空间 ；gquota 这个组考虑最大限额，所以设定为 90 MB！（注意，这样设置的好处是富有弹性，好比现在的邮件服务，那么多用户，承诺给用户每人最大空间为数GB，然而人们不可能每人都会使用那么大的空间，所以邮件服务的总空间，实际上肯定不是注册客户数乘以数GB，否则这样得多大啊。）

```shell
[root@localhost ~]# groupadd qgroup
[root@localhost ~]# useradd -m -g qgroup quser1
[root@localhost ~]# useradd -m -g qgroup quser2
[root@localhost ~]# passwd quser1
[root@localhost ~]# passwd quser2
[root@localhost ~]# df     ===>  自己找一个合适的分区来做实验，这里用/disk2
Filesystem             1K-blocks        Used      Available   Use% Mounted on
/dev/hda1              5952252   3193292     2451720     57%     /
/dev/hdb1            28267608       77904   26730604       1%     /disk2
/dev/hda5              9492644     227252     8775412       3%     /disk1

[root@localhost ~]# vi /etc/fstab
LABEL=/             /                ext3      defaults                                     1 1
LABEL=/disk1    /disk1        ext3      defaults                                      1 2
LABEL=/disk2    /disk2        ext3      defaults,usrquota,grpquota       1 2  
/dev/hda3         swap         swap     defaults                                     0 0
```

注意多了`usrquota,grpquota`，在`defaults,usrquota,grpquota`之间都没有空格，务必正确书写。这样就算加入了 quota 的磁盘格式了！不过，由于真正的 quota 在读取的时候是读取`/etc/mtab`这个文件的，而该文件需要重新开机之后才能够以/etc/fstab 的新数据进行改写！所以这个时候可以选择：重新开机 (reboot)。

重新`remount filesystem`来驱动设定值。

```shell
[root@localhost ~]# umount /dev/hdb1
[root@localhost ~]# mount -a
[root@localhost ~]# grep '/disk2' /etc/mtab
/dev/hdb1 /disk2 ext3 rw,usrquota,grpquota 0 0
```

事实上，也可以利用 mount 的 remount 功能。

```shell
[root@localhost ~]# mount -o remount /disk2
```

这样就已经成功的将 filesystem 的 quota 功能加入。

扫瞄磁盘的使用者使用状况，并产生重要的 aquota.group 与 aquota.user：

```shell
[root@localhost ~]# quotacheck -avug
quotacheck: Scanning /dev/hdb1 [/disk2] done
quotacheck: Checked 3 directories and 4 files

[root@localhost ~]# ll /disk2
-rw-------  1 root root  6144 Sep  6 11:44 aquota.group
-rw-------  1 root root  6144 Sep  6 11:44 aquota.user
```

使用 quotacheck 就可以轻易的将所需要的数据给他输出了！但奇怪的是，在某些 Linux 版本中，不能够以 aquota.user(group) 来启动quota ，可能是因为旧版 quota 的关系， 所以就另外做了一个 link 文件按来欺骗 quota，这个动作非必要。（主要是学习这个思维很重要）

```shell
[root@localhost ~]# cd /disk2
[root@localhost ~]# ln -s aquota.user quota.user
[root@localhost ~]# ln -s aquota.group quota.group
```

启动 quota 的限额：

```shell
[root@localhost ~]# quotaon -avug
/dev/hdb1 [/disk2]: group quotas turned on
/dev/hdb1 [/disk2]: user quotas turned on    ===>  看到turned on，才是真的成功！
```

编辑使用者的可使用空间：

```shell
[root@localhost ~]# edquota -u quser1
Disk quotas for user quser1 (uid 502):
  Filesystem    blocks    soft    hard   inodes   soft   hard
  /dev/hdb1           0     45000    50000         0      0      0
[root@localhost ~]# edquota -p quser1 quser2      ===>  直接复制给quser2
```

接下来要来设定宽限时间，还是使用 edquota

```shell
[root@localhost ~]# edquota -t
Grace period before enforcing soft limits for users:
time units may be: days, hours, minutes, or seconds
  Filesystem             Block grace period     Inode grace period
  /dev/hdb1                     1days                  7days
```

使用`quota -v`来查询：

```shell
[root@localhost ~]# quota -vu quser1 quser2
Disk quotas for user quser1 (uid 502):
     Filesystem  blocks   quota      limit   grace   files   quota   limit   grace
      /dev/hdb1         0    45000    50000                   0       0       0
Disk quotas for user quser2 (uid 503):
     Filesystem  blocks   quota      limit   grace   files   quota   limit   grace
      /dev/hdb1         0    45000    50000                   0       0       0
```

注意，由于使用者尚未超过45 MB，所以 grace ( 宽限时间 ) 就不会出现。

编辑群组可使用的空间：

```shell
[root@localhost ~]# edquota -g qgroup
Disk quotas for group qgroup (gid 502):
  Filesystem     blocks       soft       hard    inodes   soft   hard
  /dev/hdb1            0      80000   90000           0      0      0

[root@localhost ~]# quota -vg qgroup
Disk quotas for group qgroup (gid 502):
     Filesystem   blocks    quota      limit      grace    files   quota   limit   grace
      /dev/hdb1         0     80000   90000                       0        0        0
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->