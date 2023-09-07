createrepo
===

创建YUM仓库

## 概要

```shell
createrepo [选项] <目录>
```

## 描述

`createrepo`是一个程序，它从一组RPM创建一个RPM元数据存储库，即YUM仓库。

## 选项

```shell
-u  --baseurl <url>
# 指定Base URL的地址

-o --outputdir <url>
# 指定元数据的输出位置

-x --excludes <packages>
# 指定在形成元数据时需要排除的包

-i --pkglist <filename>
# 指定一个文件，该文件内的包信息将被包含在即将生成的元数据中，格式为每个包信息独占一行，不含通配符、正则，以及范围表达式。

-n --includepkg
# 通过命令行指定要纳入本地库中的包信息，需要提供URL或本地路径。

-q --quiet
# 安静模式执行操作，不输出任何信息。

-g --groupfile <groupfile>
# 指定本地软件仓库的组划分，示例：createrepo -g comps.xml /path/to/rpms
# 注意：组文件需要和rpm包放置于同一路径下。

-v --verbose
# 输出详细信息。

-c --cachedir <path>
# 指定一个目录，用作存放软件仓库中软件包的校验和信息。
# 当createrepo在未发生明显改变的相同仓库文件上持续多次运行时，指定cachedir会明显提高其性能。

--basedir
# Basedir为repodata中目录的路径，默认为当前工作目录。

--update
# 如果元数据已经存在，且软件仓库中只有部分软件发生了改变或增减，
# 则可用update参数直接对原有元数据进行升级，效率比重新分析rpm包依赖并生成新的元数据要高很多。

--skip-stat
# 跳过--update上的stat()调用，假设如果文件名相同，则文件仍然相同(仅在您相当信任或容易受骗时使用此方法)。

--update-md-path
# 从这个路径使用现有的repodata来升级。

-C --checkts
# 不要生成回购元数据，如果它们的时间戳比rpm更新。如果您碰巧开启了该选项，则此选项将再次大幅减少处理时间一个未修改的回购，但它(目前)与——split选项互斥。注意:当包从repo中删除时，这个命令不会注意到。使用——update来处理这个。

--split
# 在拆分媒体模式下运行。与其传递单个目录，不如获取一组对应于媒体集中不同卷的目录。

-p --pretty
# 以整洁的格式输出xml文件。

--version
# 输出版本。

-h --help
# 显示帮助菜单。

-d --database
# 该选项指定使用SQLite来存储生成的元数据，默认项。

--no-database
# 不要在存储库中生成sqlite数据库。

-S --skip-symlinks
# 忽略包的符号链接

-s --checksum
# 选择repmed .xml中使用的校验和类型以及元数据中的包。默认值现在是“sha256”(如果python有hashlib)。旧的默认值是“sha”，它实际上是“sha1”，但是显式使用“sha1”在旧版本(3.0.x)的yum上不起作用，您需要指定“sha”。

--profile
# 输出基于时间的分析信息。

--changelog-limit CHANGELOG_LIMIT
# 只将每个rpm中的最后N个变更日志条目导入元数据

--unique-md-filenames
# 在元数据文件名中包含文件的校验和，有助于HTTP缓存(默认)

--simple-md-filenames
# 不要在元数据文件名中包含文件的校验和。

--retain-old-md
# 保留旧repodata的最新(按时间戳)N个副本(这样使用旧repodata .xml文件的客户端仍然可以访问它)。默认为0。

--distro
指定发行版标签。可以多次指定。可选语法，指定cpeid(http://cpe.mitre.org/)——distro=cpeid,distrotag

--content
# 指定关于存储库内容的关键字/标记。可以多次指定。

--repo
# 指定关于存储库本身的关键字/标签。可以多次指定。

--revision
# 存储库修订的任意字符串。

--deltas
# 告诉createrepo生成增量数据和增量元数据

--oldpackagedirs PATH
# 寻找更老的PKGS来对抗的路径。可以指定多次吗

--num-deltas int
# 要进行增量处理的旧版本的数量。默认为1

--read-pkgs-list READ_PKGS_LIST
# 使用——update将路径输出到PKGS实际读起来很有用

--max-delta-rpm-size MAX_DELTA_RPM_SIZE
# 要运行deltarpm的RPM的最大大小(以字节为单位)

--workers WORKERS
# 为读取RPMS而生成的工作线程数

--compress-type
# 指定要使用的压缩方法:compat(默认)，xz(可能不可用)，gz, bz2。

```

## 返回值

返回状态为成功除非给出了非法选项或非法参数。

## 例子

```shell
# 生成带有groups文件的存储库。注意groups文件应该和rpm包在同一个目录下(即/path/to/rpms/comps.xml)。
createrepo -g comps.xml /path/to/rpms
```
