uncompress
===

用来解压.Z文件

## 补充说明

**uncompress命令** 用来解压缩由compress命令压缩后产生的“.Z”压缩包。

###  语法

```shell
uncompress(选项)(参数)
```

###  选项

```shell
-f：不提示用户，强制覆盖掉目标文件；
-c：将结果送到标准输出，无文件被改变；
-r：递归的操作方式。
```

###  参数

文件：指定要压缩的“.Z”压缩包。

###  实例

先创建一个.Z压缩文件

```shell
compress FileName
```

解压：

```shell
uncompress FileName.Z
```


