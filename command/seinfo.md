seinfo
===

查询SELinux的策略提供多少相关规则

## 补充说明

**seinfo命令** 是用来查询SELinux的策略提供多少相关规则，一个主体进程能否读取到目标文件资源的重点是在于SELinux的策略以及策略内的各项规则，然后再通过该规则的定义去处理各项目标文件的安全上下文，尤其是“类型”部分。SELinux的策略与规则管理相关命令：seinfo命令、sesearch命令、getsebool命令、setsebool命令、semanage命令。

###  语法

```shell
seinfo（选项）
```

###  选项

```shell
-A：列出SELinux的状态、规则布尔值、身份识别、角色、类型等所有信息。
-t：列出SELinux所有类型(type)的种类。
-r：列出SELinux所有角色(role)的种类。
-u：列出SELinux所有身份识别(user)的种类。
-b：列出所有规则的种类（布尔值）。
```

###  实例

列出与httpd有关的规则：

```shell
seinfo -b | grep httpd
```


