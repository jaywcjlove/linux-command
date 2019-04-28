rpmbuild
===

创建RPM的二进制软件包和源码软件包

## 补充说明

**rpmbuild命令** 被用于创建rpm的二进制软件包和源码软件包。

### 语法  

```shell
rpmbuild(选项)
```

### 选项  

```shell
--initdb：初始化RPM数据库；
--rebuilddb：从已安装的包头文件，方向重建RPM数据库；
-ba：创建二进制和源代码包；
-bb：创建二进制代码包；
-bs：创建源代码包。
```

### 实例  

```shell
rpmbuild -ba 'spec文件路径'
```

build完后，可以在`/usr/src/redhat/RPMS/`下找到二进制rpm包，rpm包按照其对应的cpu体系结构分类，通常在`/usr/src/redhat/RPMS/i386`目录下。`/usr/src/redhat/SRPMS/`下找到源码rpm包，此时由于是源代码，所以无须按体系结构分类。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->