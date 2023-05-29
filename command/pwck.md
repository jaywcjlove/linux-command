pwck
===

用来验证系统认证文件内容和格式的完整性

## 补充说明

**pwck命令** 用来验证系统认证文件`/etc/passwd`和`/etc/shadow`的内容和格式的完整性。

###  语法

```shell
pwck(选项)(参数)
```

###  选项

```shell
-q：仅报告错误信息；
-s：以用户id排序文件“/etc/passwd”和“/etc/shadow”;
-r：只读方式运行指令；
-R：在指定的chroot环境下检查密码文件。
```

###  参数

*   密码文件：指定密码文件的路径；
*   影子文件：指定影子文件的路径。

###  实例

```shell
pwck
user 'ftp': directory '/var/ftp' does not exist
pwck: no changes
```
执行`pwck`命令后显示了一些警告，提示有用户`lp`的主目录 `/var/spool/lpd`不存在。为了解决这个问题，你有几个选项：
1. 如果你确定这些用户不会被使用，你可以考虑使用`userdel`命令来删除这些用户。
2. 如果这些用户需要被使用，你应该创建相应的目录。例如，你可以使用以下命令：

```shell
# 创建目录
sudo mkdir /var/ftp
# 将目录的所有权赋给相应的用户
sudo chown ftp:ftp /var/ftp
```
3. 如果这些用户对应的软件包还未安装，你可以考虑安装它们。软件包管理器（如`yum`或`apt`）通常会自动创建必要的用户和目录。
