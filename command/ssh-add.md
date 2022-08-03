ssh-add
===

把专用密钥添加到ssh-agent的高速缓存中

## 补充说明

**ssh-add命令** 是把专用密钥添加到ssh-agent的高速缓存中。该命令位置在`/usr/bin/ssh-add`。

###  语法

```shell
ssh-add [-cDdLlXx] [-t life] [file ...]
ssh-add -s pkcs11
ssh-add -e pkcs11
```

###  选项

```shell
-D：删除ssh-agent中的所有密钥.
-d：从ssh-agent中的删除密钥
-e pkcs11：删除PKCS#11共享库pkcs1提供的钥匙。
-s pkcs11：添加PKCS#11共享库pkcs1提供的钥匙。
-L：显示ssh-agent中的公钥
-l：显示ssh-agent中的密钥
-t life：对加载的密钥设置超时时间，超时ssh-agent将自动卸载密钥
-X：对ssh-agent进行解锁
-x：对ssh-agent进行加锁
```

###  实例

1、把专用密钥添加到 ssh-agent 的高速缓存中：

```shell
ssh-add ~/.ssh/id_dsa
```

2、从ssh-agent中删除密钥：

```shell
ssh-add -d ~/.ssh/id_xxx.pub
```

3、查看ssh-agent中的密钥：

```shell
ssh-add -l
```


