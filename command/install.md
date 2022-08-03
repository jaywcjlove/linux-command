install
===

安装或升级软件或备份数据

## 补充说明

**install命令** 的作用是安装或升级软件或备份数据，它的使用权限是所有用户。install命令和cp命令类似，都可以将文件/目录拷贝到指定的地点。但是，install允许你控制目标文件的属性。install通常用于程序的makefile，使用它来将程序拷贝到目标（安装）目录。

###  语法

```shell
install [OPTION]... [-T] SOURCE DEST
install [OPTION]... SOURCE... DIRECTORY
install [OPTION]... -t DIRECTORY SOURCE...
install [OPTION]... -d DIRECTORY...
```

在前两种格式中，会将<来源>复制至<目的地>或将多个<来源>文件复制至已存在的<目录>，同时设定权限模式及所有者/所属组。在第三种格式中，会创建所有指定的目录及它们的主目录。长选项必须用的参数在使用短选项时也是必须的。

###  选项

```shell
--backup[=CONTROL]：为每个已存在的目的地文件进行备份。
-b：类似 --backup，但不接受任何参数。
-c：(此选项不作处理)。
-d，--directory：所有参数都作为目录处理，而且会创建指定目录的所有主目录。
-D：创建<目的地>前的所有主目录，然后将<来源>复制至 <目的地>；在第一种使用格式中有用。
-g，--group=组：自行设定所属组，而不是进程目前的所属组。
-m，--mode=模式：自行设定权限模式 (像chmod)，而不是rwxr-xr-x。
-o，--owner=所有者：自行设定所有者 (只适用于超级用户)。
-p，--preserve-timestamps：以<来源>文件的访问/修改时间作为相应的目的地文件的时间属性。
-s，--strip：用strip命令删除symbol table，只适用于第一及第二种使用格式。
-S，--suffix=后缀：自行指定备份文件的<后缀>。
-v，--verbose：处理每个文件/目录时印出名称。
--help：显示此帮助信息并离开。
--version：显示版本信息并离开。
```

###  实例

```shell
install -d [option] DIRECTORY [DIRECTORY...]
```

支持多个，类似`mkdir -p`支持递归。例如：`install -d a/b/c e/f`结果和`mkdir -p a/b/c e/f`一样。

```shell
install [option] SOURCE DEST
```

 **复制SOURCE文件（测试不能是目录）到DEST file（文件）：** 

```shell
install a/e c
结果类似：
cp a/e c    #注意c必须是文件。
```

 **有用选项`-D`：** 

```shell
install -D x a/b/c
效果类似：
mkdir -p a/b && cp x a/b/c
```

```shell
install [option] SOURCE [SOURCE...] DIRECTORY
```

 **复制多个SOURCE文件到目的目录：** 

```shell
install a/* d
```

其中d是目录。


