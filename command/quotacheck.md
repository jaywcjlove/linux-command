quotacheck
===

检查磁盘的使用空间与限制

## 补充说明

**quotacheck命令** 通过扫描指定的文件系统，获取磁盘的使用情况，创建、检查和修复磁盘配额（quota）文件。执行quotacheck指令，扫描挂入系统的分区，并在各分区的文件系统根目录下产生quota.user和quota.group文件，设置用户和群组的磁盘空间限制。

如果在执行quotacheck命令时出现了以下信息：

```shell
quotacheck: Your kernel probably supports journaled quota but you are not using it. Consider switching to journaled quota to avoid running quotacheck after an unclean shutdown. 
```

可以考虑将之前在文件系统的配置文件中添加的quota相关字段修改为：`usrjquota=aquota.user,grpjquota=aquota.group,jqfmt=vfsv1`，然后重新挂载文件系统：`mount -vo remount 挂载目录`（注意，如果这一步操作出现了任何问题，千万不要试图通过重启解决！将配置文件恢复原状是一个好的选择）

###  语法

```shell
quotacheck(选项)(参数)
```

###  选项

```shell
-a：扫描在/etc/fstab文件里，有加入quota设置的分区；
-c：对目标文件系统进行一次新的扫描，并创建新的quota文件；
-d：详细显示指令执行过程，便于排错或了解程序执行的情形；
-g：扫描磁盘空间时，计算每个群组识别码所占用的目录和文件数目；
-R：排除根目录所在的分区；
-u：扫描磁盘空间时，计算每个用户识别码所占用的目录和文件数目；
-v：显示指令执行过程。
```

###  参数

文件系统：指定要扫描的文件系统。

###  实例

将所有的在`/etc/mtab`内，含有quota支持的partition进行扫描：

```shell
[root@linux ~]# quotacheck -avug
quotacheck: Scanning /dev/hdb1 [/disk2] done
quotacheck: Checked 3 directories and 4 files
```

强制扫描已挂载的filesystem：

```shell
[root@linux ~]# quotacheck -avug -m
```

扫描指定的filesystem：

```shell
[root@linux ~]# quotacheck -cvug /disk2
```



