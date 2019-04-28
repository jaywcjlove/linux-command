readonly
===

定义只读shell变量或函数

## 补充说明

**readonly命令** 用于定义只读shell变量和shell函数。readonly命令的选项-p可以输出显示系统中所有定义的只读变量。

### 语法  

```shell
readonly(选项)(参数)
```

### 选项  

```shell
-f：定义只读函数；
-a：定义只读数组变量；
-p：显示系统中全部只读变量列表。
```

### 参数  

变量定义：定义变量，格式为“变量名=‘变量值’”。

### 实例  

使用readonly命令显示系统中所有的已经定义的只读变量，输入如下命令：

```shell
[root@localhost ~]# readonly     #显示只读变量
declare -ar BASH_VERSINFO='([0]="3" [1]="2" [2]="25" [3]="1" [4]="release" [5]="i686-redhat-linux-gnu")'
declare -ir EUID="0"
declare -ir PPID="31436"
declare -r SHELLOPTS="braceexpand:emacs:hashall:histexpand:history:interactive-comments:monitor"
declare -ir UID="0"
```

对于只读变量而言，若用户对其值进行修改，则会立即报错。例如，使用该指令定义一个只读变量"test"，并且将其值初始化为"ok"，输入如下命令：

```shell
[root@localhost ~]# readonly test='ok'        #定义只读变量并初始化 
```

那么当用户直接修改该只读变量时，就会被报错，如下所示：

```shell
[root@localhost ~]# test='my'                 #试图修改只读变量的值
-bash: test: readonly variable
```

当用户试图修改只读变量的值时，会被提示该变量为只读变量。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->