join
===

两个文件中指定栏位内容相同的行连接起来

## 补充说明

**join命令** 用来将两个文件中，制定栏位内容相同的行连接起来。找出两个文件中，指定栏位内容相同的行，并加以合并，再输出到标准输出设备。

###  语法

```shell
join(选项)(参数)
```

###  选项

```shell
-a<1或2>：除了显示原来的输出内容之外，还显示指令文件中没有相同栏位的行；
-e<字符串>：若[文件1]与[文件2]中找不到指定的栏位，则在输出中填入选项中的字符串；
-i或--ignore-case：比较栏位内容时，忽略大小写的差异；
-o<格式>：按照指定的格式来显示结果；
-t<字符>：使用栏位的分割字符；
-v<1或2>：更-a相同，但是只显示文件中没有相同栏位的行；
-1<栏位>：连接[文件1]指定的栏位；
-2<栏位>：连接[文件2]指定的栏位。
```

###  参数

*   文件1：要进行合并操作的第1个文件参数；
*   文件2：要进行合并操作的第2个文件参数。

### 常见用法

把两个文件制定栏位内容相同的行连接起来：

```shell
[root@localhost ~]# cat name 
1 xiaoming
2 xiaowang
3 xiaoliu
[root@localhost ~]# cat city 
1 beijing  beijing
2 hubei   wuhan 
3 hunan   changsha

# city文件在后，则拼接在后，如果city文件在前，则name文件拼接在后。
[root@localhost ~]# join  name  city 
1 xiaoming beijing beijing
2 xiaowang hubei wuhan 
3 xiaoliu hunan changsha
```

把两个文件指定列拼接起来：

```shell
# 把name文件的第2列和city文件的第3列拼接起来
[root@localhost ~]# join -o 1.2 2.3 name  city 
xiaoming beijing
xiaowang wuhan
xiaoliu changsha
```
