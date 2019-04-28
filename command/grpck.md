grpck
===

用于验证组文件的完整性

## 补充说明

**grpck命令** 用于验证组文件的完整性，在验证之前，需要先锁定（lock）组文件`/etc/group`和`/etc/shadow`。

grpck命令检查数据是否正确存放，每条记录是否都包含足够的信息，是否有一个唯一的组名，是否包含正确的用户，是否正确设置了组的管理员等。grpck检查发现错误以后，在命令行提示用户是否删除错误的记录。如果用户没有明确回答删除记录，grpck终止运行。

### 语法  

```shell
grpck(选项)
```

### 选项  

```shell
-r：只读模式；
-s：排序组id。
```

### 实例  

对组账号和影子文件进行验证：

```shell
grpck   # 必须以管理员身份运行
grpck /etc/group /etc/gshadow   # 后面两句一样，如果没有输出信息，则表示没有错误。
```

测试错误的实例：

```shell
**echo check_user:x: >> /etc/group    # 添加一行错误的格式数据
cat /etc/group | grep check_user**
check_user:x:  # 这儿GID字段为空，是错误的。

 **grpck /etc/group** 
invalid group file entry
delete line 'check_user:x:'? y      # 提示是否删除
grpck: the files have been updated  # 这时已经删除了错误的行，提示文件已经更新。

 **cat /etc/group  | grep check_user   # 没有查到，已经删除了。** 
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->