time
===

统计给定命令所花费的总时间

## 补充说明

**time命令** 用于统计给定命令所花费的总时间。

### 语法  

```shell
time(参数)
```

### 参数  

指令：指定需要运行的额指令及其参数。

### 实例  

当测试一个程序或比较不同算法时，执行时间是非常重要的，一个好的算法应该是用时最短的。所有类UNIX系统都包含time命令，使用这个命令可以统计时间消耗。例如：

```shell
[root@localhost ~]# time ls
anaconda-ks.cfg  install.log  install.log.syslog  satools  text

real    0m0.009s
user    0m0.002s
sys     0m0.007s
```

输出的信息分别显示了该命令所花费的real时间、user时间和sys时间。

*   real时间是指挂钟时间，也就是命令开始执行到结束的时间。这个短时间包括其他进程所占用的时间片，和进程被阻塞时所花费的时间。
*   user时间是指进程花费在用户模式中的CPU时间，这是唯一真正用于执行进程所花费的时间，其他进程和花费阻塞状态中的时间没有计算在内。
*   sys时间是指花费在内核模式中的CPU时间，代表在内核中执系统调用所花费的时间，这也是真正由进程使用的CPU时间。

shell内建也有一个time命令，当运行time时候是调用的系统内建命令，应为系统内建的功能有限，所以需要时间其他功能需要使用time命令可执行二进制文件`/usr/bin/time`。

使用`-o`选项将执行时间写入到文件中：

```shell
/usr/bin/time -o outfile.txt ls
```

使用`-a`选项追加信息：

```shell
/usr/bin/time -a -o outfile.txt ls
```

使用`-f`选项格式化时间输出：

```shell
/usr/bin/time -f "time: %U" ls
```

`-f`选项后的参数：

<table border="1" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
<tr>
<td>%E</td>
<td>real时间，显示格式为[小时:]分钟:秒</td>
</tr>
<tr>
<td>%U</td>
<td>user时间。</td>
</tr>
<tr>
<td>%S</td>
<td>sys时间。</td>
</tr>
<tr>
<td>%C</td>
<td>进行计时的命令名称和命令行参数。</td>
</tr>
<tr>
<td>%D</td>
<td>进程非共享数据区域，以KB为单位。</td>
</tr>
<tr>
<td>%x</td>
<td>命令退出状态。</td>
</tr>
<tr>
<td>%k</td>
<td>进程接收到的信号数量。</td>
</tr>
<tr>
<td>%w</td>
<td>进程被交换出主存的次数。</td>
</tr>
<tr>
<td>%Z</td>
<td>系统的页面大小，这是一个系统常量，不用系统中常量值也不同。</td>
</tr>
<tr>
<td>%P</td>
<td>进程所获取的CPU时间百分百，这个值等于user+system时间除以总共的运行时间。</td>
</tr>
<tr>
<td>%K</td>
<td>进程的平均总内存使用量（data+stack+text），单位是KB。</td>
</tr>
<tr>
<td>%w</td>
<td>进程主动进行上下文切换的次数，例如等待I/O操作完成。</td>
</tr>
<tr>
<td>%c</td>
<td>进程被迫进行上下文切换的次数（由于时间片到期）。</td>
</tr>
</tbody>
</table>


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->