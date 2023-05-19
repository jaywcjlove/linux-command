chcon
===

修改对象（文件）的安全上下文

## 补充说明

**chcon命令** 是修改对象（文件）的安全上下文，比如：用户、角色、类型、安全级别。也就是将每个文件的安全环境变更至指定环境。使用`--reference`选项时，把指定文件的安全环境设置为与参考文件相同。chcon命令位于`/usr/bin/chcon`。

### 语法

```shell
chcon [选项]... 环境 文件...
chcon [选项]... [-u 用户] [-r 角色] [-l 范围] [-t 类型] 文件...
chcon [选项]... --reference=参考文件 文件...
```

### 选项

```shell
-h, --no-dereference：影响符号连接而非引用的文件。
    --reference=参考文件：使用指定参考文件的安全环境，而非指定值。
-R, --recursive：递归处理所有的文件及子目录。
-v, --verbose：为处理的所有文件显示诊断信息。
-u, --user=用户：设置指定用户的目标安全环境。
-r, --role=角色：设置指定角色的目标安全环境。
-t, --type=类型：设置指定类型的目标安全环境。
-l, --range=范围：设置指定范围的目标安全环境。
```

以下选项是在指定了`-R`选项时被用于设置如何穿越目录结构体系。如果您指定了多于一个选项，那么只有最后一个会生效。

```shell
-H：如果命令行参数是一个通到目录的符号链接，则遍历符号链接。
-L：遍历每一个遇到的通到目录的符号链接。
-P：不遍历任何符号链接（默认）。
--help：显示此帮助信息并退出。
--version：显示版本信息并退出。
```

### 实例

如果你想把这个ftp共享给匿名用户的话，需要开启以下：

```shell
chcon -R -t public_content_t /var/ftp
```

如果你想让你设置的FTP目录可以上传文件的话，SELINUX需要设置：

```shell
chcon -t public_content_rw_t /var/ftp/incoming
```

允许用户HHTP访问其家目录，该设定限仅于用户的家目录主页：

```shell
setsebool -P httpd_enable_homedirs 1
chcon -R -t httpd_sys_content_t ~user/public_html
```

如果你希望将samba目录共享给其他用户，你需要设置：

```shell
chcon -t samba_share_t /directory
```

共享rsync目录时：

```shell
chcon -t public_content_t /directories
```


