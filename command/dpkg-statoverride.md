dpkg-statoverride
===

Debian Linux中覆盖文件的所有权和模式

## 补充说明

**dpkg-statoverride命令** 用于Debian Linux中覆盖文件的所有权和模式，让dpkg于包安装时使得文件所有权与模式失效。

### 语法  

```shell
dpkg-statoverride(选项)
```

### 选项  

```shell
-add：为文件添加一个改写；
--remove：为文件删除一个改写；
--list：显示所有改写列表；
--update：如果文件存在，则立刻执行改写操作。
```

### 实例  

修改文件夹的权限属性：

```shell
sudo dpkg-statoverride --update --add nagios nagios 751 /var/lib/nagios3
```

强制修改文件夹的权限属性：

```shell
sudo dpkg-statoverride --force --update --add root sasl 755 /var/spool/postfix/var/run/saslauthd
```

将文件从数据库中删除：

```shell
sudo dpkg-statoverride --remove /usr/bin/wall
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->