vgrename
===

使用vgrename命令可以重命名卷组的名称。

## 补充说明

**grename命令** 可以重命名卷组的名称。

### 语法  

```shell
vgrename [选项] [旧卷组路径|旧卷组名称|旧卷组UUID] [新卷组路径|新卷组名称]
```

### 选项  

```shell
-d 启用调试模式
-t 启用测试模式
```

### 例子

重命名卷组/dev/vg1为/dev/vg2。

```shell
[root@localhost ~]# vgrename /dev/vg1 /dev/vg2
  Volume group "vg1" successfullyrenamed to "vg2"
```

重命名卷组vg1为vg2。

```shell
[root@localhost ~]# vgrename vg1 vg2
  Volume group "vg1" successfully renamed to "vg2"
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->
