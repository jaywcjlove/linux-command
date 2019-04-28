enable
===

启动或关闭shell内建命令

## 补充说明

**enable命令** 用于临时关闭或者激活指定的shell内部命令。若要执行的文件名称与shell内建命令相同，可用`enable -n`来关闭shell内建命令。若不加`-n`选项，enable可重新启动关闭的命令。

linux shell命令执行时，shell总是先在自己的shell builtin中查找该命令，如果找到则执行该命令；如果找不到该命令，则会从环境变量$PATH指定的路径中依次去查找待执行的命令。因为了解了这一点，所以看起来好像没有办法编写用户自己的命令来替代shell builtin命令。幸运的是，有了enable命令我们就能做到了。

### 语法  

```shell
enable(选项)(参数)
```

### 选项  

```shell
-n：关闭指定的内部命令；
-a：显示所有激活的内部命令；
-f：从指定文件中读取内部命令。
```

### 参数  

内部命令：指定要关闭或激活的内部命令。

### 实例  

使用enable命令显示所有激活的内部命令：

```shell
[root@localhost ~]# enable -a
enable .
enable :
enable alias
enable bg
enable bind
enable break
enable builtin
enable caller
enable cd
enable command
enable compgen
enable complete
enable continue
enable declare
enable dirs
enable disown
enable echo
enable enable
enable eval
enable exec
enable exit
enable export
enable false
enable fc
enable fg
enable getopts
enable hash
enable help
enable history
enable jobs
enable kill
enable let
enable local
enable logout
enable popd
enable printf
enable pushd
enable pwd
enable read
enable readonly
enable return
enable set
enable shift
enable shopt
enable source
enable suspend
enable test
enable times
enable trap
enable true
enable type
enable typeset
enable ulimit
enable umask
enable unalias
enable unset
enable wait
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->