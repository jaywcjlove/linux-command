diffstat
===

显示diff命令输出信息的柱状图

## 补充说明

**diffstat命令** 用来显示diff命令输出信息的柱状图，用以显示diff命令比较两个文件的不同统计信息。用户也可以直接使用`|`将diff命令所输出的结果直接送给diffstat命令进行统计结果的显示。使用该命令时，若所比较的文件或者子目录不在当前目录下，则应该使用其完整路径。

###  语法

```shell
diffstat(选项)(参数)
```

###  选项

```shell
-n<文件名长度>：指定文件名长度，指定的长度必须大于或等于所有文件中最长的文件名；
-p<文件名长度>：与-n参数相同，但此处的<文件名长度>包括了文件的路径；
-w：指定要输出时栏位的宽度；
-v：显示版本信息。
```

###  参数

文件：指定保存有diff命令的输出信息文件。

###  实例

将目录"test1"和"test2"下的同名文件"testf.txt"使用diff命令进行比较。然后使用diffstat命令对结果进行统计显示，输入如下命令：

```shell
diff test1 test2 | diffstat    #进行比较结果的统计显示
```

注意：使用这条命令可以非常方便地实现统计显示的功能。

对于查看文件中的内容，用户可以通过cat命令进行查看即可，具体操作如下：

```shell
cat test1/testf.txt           #查看test1/testf的内容
abc
def
ghi
jkl
mno
pqr
stu
vws

cat test2/testf.txt          #查看test2/testf的内容
abc
def
ghi
jkl
mno
```

从上面的文件内容显示，可以看到两个文件内容的差别。现在来运行刚才的命令，对文件比较的结果进行统计显示，结果如下：

```shell
testfile | 2 +-             #统计信息输出显示
1 file changed, 1 insertion(+), 1 deletion(-)
```


