chfn
===

用来改变finger命令显示的信息

## 补充说明

**chfn命令** 用来改变finger命令显示的信息。这些信息都存放在/etc目录里的passwd文件里。若不指定任何选项，则chfn命令会进入问答式界面。

### 语法  

```shell
chfn(选项)(参数)
```

### 选项  

```shell
-f<真实姓名>或--full-name<真实姓名>：设置真实姓名；
-h<家中电话>或--home-phone<家中电话>：设置家中的电话号码；
-o<办公地址>或--office<办公地址>：设置办公室的地址；
-p<办公电话>或--office-phone<办公电话>：设置办公室的电话号码；
-u或--help：在线帮助；
-v或-version：显示版本信息。
```

### 参数  

用户名：指定要改变finger信息的用户名。

### 实例  

范例1，改变finger信息：

```shell
[root@localhost Desktop]# chfn
Changing finger information for root.
Name [root]: jack
Office []: hn
Office Phone []: 888888
Home Phone []: 9999999

Finger information changed.
```

范例2，改变账号真实姓名：

```shell
[root@localhost Desktop]# chfn -f jack
Changing finger information for root.
Finger information changed.
```

范例3：

```shell
shell>> chfn
Changing finger information for user
Password: [del]
Name[]:linuxde ### 提供 finger 时的资料
Office[]:NCCU
Office Phone[]: [del]
Home Phone[]: [del]
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->