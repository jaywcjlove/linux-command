iostat
===

监视系统输入输出设备和CPU的使用情况

## 补充说明

**iostat命令** 被用于监视系统输入输出设备和CPU的使用情况。它的特点是汇报磁盘活动统计情况，同时也会汇报出CPU使用情况。同vmstat一样，iostat也有一个弱点，就是它不能对某个进程进行深入分析，仅对系统的整体情况进行分析。

### 语法  

```shell
iostat(选项)(参数)
```

### 选项  

```shell
-c：仅显示CPU使用情况；
-d：仅显示设备利用率；
-k：显示状态以千字节每秒为单位，而不使用块每秒；
-m：显示状态以兆字节每秒为单位；
-p：仅显示块设备和所有被使用的其他分区的状态；
-t：显示每个报告产生时的时间；
-V：显示版号并退出；
-x：显示扩展状态。
```

### 参数  

*   间隔时间：每次报告的间隔时间（秒）；
*   次数：显示报告的次数。

### 实例  

用`iostat -x /dev/sda1`来观看磁盘I/O的详细情况：

```shell
iostat -x /dev/sda1 
Linux 2.6.18-164.el5xen (localhost.localdomain)
2010年03月26日  

avg-cpu:  %user   %nice %system %iowait 
%steal   %idle  
            0.11    0.02    0.18    0.35   
0.03    99.31  

Device:         tps   Blk_read/s    Blk_wrtn/s  
Blk_read   Blk_wrtn  
sda1                0.02          0.08       
0.00          2014               4 
```

详细说明：第二行是系统信息和监测时间，第三行和第四行显示CPU使用情况（具体内容和mpstat命令相同）。这里主要关注后面I/O输出的信息，如下所示：

<table>
<tbody>
<tr>
<th>标示</th>
<th>说明</th>
</tr>
<tr>
<td>Device</td>
<td>监测设备名称</td>
</tr>
<tr>
<td>rrqm/s</td>
<td>每秒需要读取需求的数量</td>
</tr>
<tr>
<td>wrqm/s</td>
<td>每秒需要写入需求的数量</td>
</tr>
<tr>
<td>r/s </td>
<td>每秒实际读取需求的数量</td>
</tr>
<tr>
<td>w/s</td>
<td>每秒实际写入需求的数量</td>
</tr>
<tr>
<td>rsec/s</td>
<td>每秒读取区段的数量</td>
</tr>
<tr>
<td>wsec/s</td>
<td>每秒写入区段的数量</td>
</tr>
<tr>
<td>rkB/s</td>
<td>每秒实际读取的大小，单位为KB</td>
</tr>
<tr>
<td>wkB/s</td>
<td>每秒实际写入的大小，单位为KB</td>
</tr>
<tr>
<td>avgrq-sz</td>
<td>需求的平均大小区段</td>
</tr>
<tr>
<td>avgqu-sz</td>
<td>需求的平均队列长度</td>
</tr>
<tr>
<td>await</td>
<td>等待I/O平均的时间（milliseconds）</td>
</tr>
<tr>
<td>svctm</td>
<td>I/O需求完成的平均时间</td>
</tr>
<tr>
<td>%util</td>
<td>被I/O需求消耗的CPU百分比</td>
</tr>
</tbody>
</table>


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->