script
===

记录终端会话的所有操作

## 补充说明

**script** 用于在终端会话中，记录用户的所有操作和命令的输出信息。简而言之，记录终端会话发生的一切信息，如同一台终端录像机。例如，用户在输入某条命令时，字符的键入和删除也都会被记录。用户在终端的所有操作、终端的回显等信息会被以 `raw` 格式存储在日志文件，称为终端数据文件。命令的时间信息会被单独以另一种结构储存为日志文件，称为时间日志文件。使用命令`exit`或者快捷键`Ctrl + D`停止记录。


###  语法

```shell
script(选项)(参数)
```

###  选项

```shell
-a, --append              # 对终端会话的操作信息，以追加方式写入文件（保留原文件内容）
-c, --command command     # 只运行 command 命令而不打开交互终端。相当于开启 script ，执行 command ，再退出 script
                          # command 可以是任意能够在终端会话执行的命令
-e, --return              # 返回子进程的退出状态码
-f, --flush               # 每次终端的内容发生变动，立马写入日志文件
--force                   # 允许默认输出终端数据文件为符号链接
-o, --output-limit size   # 限制终端数据文件和时间日志文件的大小，当文件大小达到此限制就会退出子进程
                          # size 的单位可以设置为：KiB(=1024)、KB(=1000)、MiB(1024*1024)、MB(=1000*1000)
                          # 同理还支持 GiB TiB PiB EiB ZiB YiB GB TB PB EB ZB YB
-q, --quiet               # 安静模式。启动和退出script命令不显示任何提示
-t[file], --timing[=file] # 输出时间日志信息到标准错误(stderr)或者文件
-V, --version             # 显示版本信息并退出
-h, --help                # 显示帮助文本并退出
```

###  参数

* 终端数据文件：设置存储终端数据信息的文件名称

###  实例

```shell
script                             # 开启记录，默认会在当前目录创建名称为 typescript 的文件来保存终端数据文件
script command.log                 # 开启记录，在当前目录创建名称为 command.log 的文件来保存终端数据文件
script -t 2>time.file command.log  # 开启记录，在当前目录创建名称为 command.log 的文件来保存终端数据文件
                                   # 在当前目录创建名称为 time.file 的文件来保存时间日志文件
```

 **以追加模式记录终端信息** 

```shell
zfb@localhost:~$ script -t 2>time.file -a -f command.log
Script started, file is command.log
zfb@localhost:~$ echo "hello, world"
hello, world
zfb@localhost:~$ echo $(date "+%Y-%m-%d %H:%M:%S")
2020-12-23 20:48:46
zfb@localhost:~$ echo "Bye"
Bye
zfb@localhost:~$ ls -al
total 20
drwxr-xr-x  2 zfb zfb 4096 Dec 23 20:48 .
drwxr-xr-x 37 zfb zfb 4096 Dec 23 20:49 ..
-rw-r--r--  1 zfb zfb    0 Dec 23 19:03 a.txt
-rw-r--r--  1 zfb zfb   12 Dec 23 19:04 b.txt
-rw-r--r--  1 zfb zfb 2744 Dec 23 20:49 command.log
-rw-r--r--  1 zfb zfb  790 Dec 23 20:49 time.file
zfb@localhost:~$ exit
Script done, file is command.log
zfb@localhost:~$
```

然后，用户可以查看终端数据文件，使用方法如下  

```shell
zfb@localhost:~$ cat command.log
Script started on 2020-12-23 20:48:25+08:00 [TERM="xterm-256color" TTY="/dev/pts/0" COLUMNS="75" LINES="30"]
zfb@localhost:~$ echo "hello, world"
hello, world
zfb@localhost:~$ echo $(date "+%Y-%m-%d %H:%M:%S")
2020-12-23 20:48:46
zfb@localhost:~$ echo "Bye"
Bye
zfb@localhost:~$ ls -al
total 20
drwxr-xr-x  2 zfb zfb 4096 Dec 23 20:48 .
drwxr-xr-x 37 zfb zfb 4096 Dec 23 20:49 ..
-rw-r--r--  1 zfb zfb    0 Dec 23 19:03 a.txt
-rw-r--r--  1 zfb zfb   12 Dec 23 19:04 b.txt
-rw-r--r--  1 zfb zfb 2744 Dec 23 20:49 command.log
-rw-r--r--  1 zfb zfb  790 Dec 23 20:49 time.file
zfb@localhost:~$ exit

Script done on 2020-12-23 20:49:04+08:00 [COMMAND_EXIT_CODE="0"]
zfb@localhost:~$
```

其中，只有命令`cat command.log`是用户输入，其他均为自动呈现。通过查看上面输出的时间`2020-12-23 20:48:46`，可以证明，这是重现的记录，而非重新执行一遍命令。也就是说，可以把`time.file`和`command.log`文件移动到任意一台机器上，都可以重现命令输入与终端回显。

 **记录服务器用户会话操作** 

以`root`身份编辑文件`/etc/profile`，在文件末尾追加以下内容

```bash
if [ $UID -ge 0 ]
then
    exec /usr/bin/script -t 2>/var/log/script-records/$USER-$UID-`date +%Y%m%d`.time -a -f -q /var/log/script-records/$USER-$UID-`date +%Y%m%d`.log
fi
```

然后再以`root`身份创建文件夹用于存储服务器上的各个用户在终端的所有操作信息

```bash
sudo mkdir -p /var/log/script-records/
sudo chmod 733 /var/log/script-records/
```

最后，执行命令`source /etc/profile`即可。任意用户（`UID ≥ 0`）在终端执行的所有操作都会被安静地记录下来，以天为单位存储。



