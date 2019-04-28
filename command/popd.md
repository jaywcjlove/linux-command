popd
===

用于删除目录栈中的记录

## 补充说明

**popd命令** 用于删除目录栈中的记录；如果popd命令不加任何参数，则会先删除目录栈最上面的记录，然后切换到删除过后的目录栈中的最上面的目录。

### 语法  

```shell
pushd(选项)(参数)
```

### 选项  

```shell
+N：将第N个目录删除（从左边数起，数字从0开始）；
-N：将第N个目录删除（从右边数起，数字从0开始）；
-n：将目录出栈时，不切换目录。
```

### 实例  

```shell
root@Mylinux:/tmp/dir4# popd（相当于popd +0）
/tmp/dir3 /tmp/dir2 /tmp/dir1 ~

root@Mylinux:/tmp/dir3# pushd /tmp/dir4
/tmp/dir4 /tmp/dir3 /tmp/dir2 /tmp/dir1 ~

root@Mylinux:/tmp/dir4# popd +1
/tmp/dir4 /tmp/dir2 /tmp/dir1 ~

root@Mylinux:/tmp/dir4# popd -2
/tmp/dir4 /tmp/dir1 ~
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->