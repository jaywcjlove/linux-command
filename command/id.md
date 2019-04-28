id
===

显示用户的ID以及所属群组的ID

## 补充说明

**id命令** 可以显示真实有效的用户ID(UID)和组ID(GID)。UID 是对一个用户的单一身份标识。组ID（GID）则对应多个UID。id命令已经默认预装在大多数Linux系统中。要使用它，只需要在你的控制台输入id。不带选项输入id会显示如下。结果会使用活跃用户。

当我们想知道某个用户的UID和GID时id命令是非常有用的。一些程序可能需要UID/GID来运行。id使我们更加容易地找出用户的UID以GID而不必在`/etc/group`文件中搜寻。如往常一样，你可以在控制台输入`man id`进入id的手册页来获取更多的详情。

### 语法  

```shell
id [-gGnru]--[help][--version][用户名称]
```

### 选项  

```shell
-g或--group 　 显示用户所属群组的ID。
-G或--groups   显示用户所属附加群组的ID。
-n或--name 　  显示用户，所属群组或附加群组的名称。
-r或--real 　  显示实际ID。
-u或--user 　  显示用户ID。
-help 　       显示帮助。
-version 　    显示版本信息。
```

### 实例  

```shell
[root@localhost ~]# id
uid=0(root) gid=0(root) groups=0(root),1(bin),2(daemon),3(sys),4(adm),6(disk),10(wheel)
```

解释：用户root的UID号码 = 0，GID号码 = 0。用户root是下面组的成员：

* root组GID号是：0
* bin组GID号是：1
* daemon组GID号是：2
* sys组GID号是：3
* adm组GID号是：4
* disk组GID号是：6
* wheel组GID号是：10

打印用户名、UID 和该用户所属的所有组，要这么做，我们可以使用 -a 选项：

```shell
[root@localhost ~]# id -a
uid=0(root) gid=0(root) groups=0(root),1(bin),2(daemon),3(sys),4(adm),6(disk),10(wheel)
```

输出所有不同的组ID ，有效的，真实的和补充的，我们可以使用 -G 选项来实现：

```shell
[root@localhost ~]# id -G
0 1 2 3 4 6 10
```

结果只会显示GID号。你可以和`/etc/group`文件比较。下面是`/etc/group`文件的示例内容：

只输出有效的组ID，通过使用 -g 选项来只输出有效组ID：

```shell
[root@localhost ~]# id -g
0
```

输出特定用户信息，我们可以输出特定的用户信息相关的UID和GID。只需要在id命令后跟上用户名：

```shell
[root@localhost ~]# id www
uid=500(www) gid=500(www) groups=500(www)
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->