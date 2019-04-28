shopt
===

显示和设置shell操作选项

## 补充说明

**shopt命令** 用于显示和设置shell中的行为选项，通过这些选项以增强shell易用性。shopt命令若不带任何参数选项，则可以显示所有可以设置的shell操作选项。

### 语法  

```shell
shopt(选项)(参数)
```

### 选项  

```shell
-s：激活指定的shell行为选项；
-u：关闭指定的shell行为选项。
```

### 参数  

shell选项：指定要操作的shell选项。

### 实例  

使用shopt命令显示当前所有可以设置的shell操作选项，输入如下命令：

```shell
shopt           #输出所有可以设置的shell操作选项
cdable_vars     off
cdspell         off
checkhash       off
checkwinsize    on
cmdhist         on
dotglob         off
execfail        off
expand_aliases  on
extdebug        off
...
```

如图上所示，选项"cdspell"的状态为"off"，即关闭cd拼写检查选项。现在，可以使用shopt命令将其开启，输入如下命令：

```shell
shopt -s cdspell          #开启cd拼写检查
```

执行上面的命令后，该选项的状态将变为"on"，即开启状态。可以再次通过该命令显示一下shell操作选项即可，输出信息如下：

```shell
cdspell on                #开启cdspell选项
```

用户可以通过实际执行cd命令检查该选项是否被成功开启。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->