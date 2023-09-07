reposync
===

同步yum存储库到本地目录

## 概要

```shell
reposync [选项]
```

## 主要用途

reposync用于将远程yum存储库同步到本地目录，使用yum检索包。

## 选项

```shell
-h, --help
# 显示帮助信息

-c CONFIG, --config=CONFIG
# 指定配置文件(默认为/etc/yum.conf)

-a ARCH, --arch=ARCH
# 指定arch

--source
# 同时下载src和rpm文件.

-r REPOID, --repoid=REPOID
# 指定要查询的repo id，可以指定多次(默认为全部启用)。

-e CACHEDIR, --cachedir CACHEDIR
# 存储元数据的目录。

-t, --tempcache
# 使用临时目录存储/访问yum-cache。

-d, --delete
# 删除存储库中不再存在的本地包。

-p DESTDIR, --download_path=DESTDIR
# 指定下载路径:默认为当前目录。

--norepopath
# 不要将重命名添加到下载路径中。只能在同步单个存储库时使用(默认是添加重命名)。

-g, --gpgcheck
# 下载后删除GPG签名检查失败的包。如果至少有一个包被删除，退出状态为“1”。

-u, --urls
# 只列出要下载的内容的url，不要下载。

-l, --plugins
# 启用yum插件支持。

-m, --downloadcomps
# 同时下载comps.xml。

--download-metadata
# 下载所有非默认元数据。

-n, --newest-only
# 每个repo只下载最新的包。

-q, --quiet
# 输出尽可能少的信息。

--allow-path-traversal
# 允许同步存储在repo目录之外的包。这些包是在元数据中通过使用绝对路径或上一级“..”系统引用的并且出于安全原因通常会在reposync中跳过。
# 注意:使用此选项有潜在的安全隐患，因为通过提供恶意repodata，攻击者可以使reposync写入任意位置运行该文件系统的用户可以访问的文件系统。
```

## 例子

```shell
# 将'updates'仓库中的所有包同步到当前目录:
reposync --repoid=updates

# 只同步最新的包从'updates'仓库到当前目录:
reposync -n --repoid=updates

# 将'updates'和'extras'仓库中的包同步到当前目录:
reposync --repoid=updates --repoid=extras

# 将'updates'仓库中的所有包同步到repos目录:
reposync -p repos --repoid=updates

# 将'updates'仓库中的所有包同步到repos目录，排除x86_64架构文件。编辑/etc/yum.conf，添加选项exclude=*.x86_64。再执行:
reposync -p repos --repoid=updates
```

## 文件

reposync使用yum库来检索信息和包。如果没有指定配置文件，将使用默认的yum配置。

*   /etc/yum.conf
*   /etc/yum/repos.d/

