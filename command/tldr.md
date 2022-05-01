tldr
===

显示命令的常见用法

## 补充说明

全称Too long, Don’t read. `tldr`根据二八原则将命令的常用场景给出示例，让人一看就懂

`tldr`是简化版的使用手册，并不会像man一样把所有的使用参数和说明都列出来，而是只显示常用的几个使用Sample和说明

* 开源地址: [https://github.com/tldr-pages/tldr/](https://github.com/tldr-pages/tldr/)
* 官网: [https://tldr.sh/](https://tldr.sh/)
* 在线版本: [https://tldr.ostera.io/](https://tldr.ostera.io/)

###  语法

```shell
tldr <command>
```

###  选项

```shell
-h,--help:                显示帮助文档
-v,--version              显示版本号
-u,--update               更新本地的离线缓存
-p,--platform PLATFORM    搜索时有限考虑特定平台(linux/osx/windows/sunos)
-a,--about                显示程序相关信息
```

###  实例

```shell
root@xxx:~# tldr pwd
pwd
Print name of current/working directory.More information: https://www.gnu.org/software/coreutils/pwd.

 - Print the current directory:
   pwd

 - Print the current directory, and resolve all symlinks (i.e. show the "physical" path):
   pwd -P

 - Print the current logical directory:
   pwd -L
```


