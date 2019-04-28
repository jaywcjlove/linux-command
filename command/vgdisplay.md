vgdisplay
===

显示LVM卷组的信息

## 补充说明

**vgdisplay命令** 用于显示LVM卷组的信息。如果不指定"卷组"参数，则分别显示所有卷组的属性。

### 语法  

```shell
vgdisplay(选项)(参数)
```

### 选项  

```shell
-A：仅显示活动卷组的属性；
-s：使用短格式输出的信息。
```

### 参数  

卷组：要显示属性的卷组名称。

### 实例  

使用vgdisplay命令显示存在的卷组"vg1000"的属性。在命令行中输入下面的命令：

```shell
[root@localhost ~]# vgdisplay vg1000     #显示卷组"vg1000"的属性
```

输出信息如下：

```shell
  --- Volume group ---  
  VG Name               vg1000  
......省略部分输出内容......  
  free  PE / Size       50 / 200.00 MB  
  VG UUID  ICprwg-ZmhA-JKYF-WYuy-jNHa-AyCN-ZS5F7B
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->