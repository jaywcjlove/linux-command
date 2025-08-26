groupdel
===

用于删除指定的工作组

## 补充说明

**groupdel命令** 用于删除指定的工作组，本命令要修改的系统文件包括/ect/group和/ect/gshadow。若该群组是某些用户的主组，则必须先删除这些用户或改变其主组后，才能删除该群组;如果该群组仅为某些用户的附加组,则可以直接删除,这些用户中的该组信息也会被删除。

###  语法

```shell
groupdel(参数)
```

###  参数

组：要删除的工作组名。

###  实例

```shell
groupadd damon  //创建damon工作组
groupdel damon  //删除这个工作组
```


