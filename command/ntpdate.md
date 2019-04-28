ntpdate
===

使用网络计时协议（NTP）设置日期和时间

## 补充说明

**ntpdate命令** 是用来设置本地日期和时间。它从指定的每个服务器获得了一些样本，并应用标准 NTP 时钟过滤器和选择算法来选择最好的样本。

此 ntpdate 命令使用以下方法进行时间调整：

*   如果它确定时钟偏差超过 0.5 秒，它通过调用 settimeofday 子例程设置时钟时间。在引导时间，这是一个首选的方法。
*   如 果它确定时钟偏差小于 0.5 秒，它通过调用 adjtime 子例程和偏移量来调整时钟时间。此方法倾向于用牺牲一些稳定性来保持漂移时钟更加准确。 当不是通过运行一个守护程序而是从 cron 命令有规则的运行ntpdate 命令时，每一小时或两小时执行一次可以保证足够的走时精度，从而避免调整时钟。

使用很多服务器可以大幅度改善 ntpdate 命令的可靠性与精度。尽管能使用单一服务器，但您能通过提供至少三个或四个服务器以获得更好的性能。

如果一个类似 xntpd 守护程序的 NTP 服务器守护程序正在同一主机上运行，命令将拒绝ntpdate 设置日期。

你必须有 root 权限才能在主机上运行这个命令。

### 语法  

```shell
ntpdate [ -b] [ -d] [ -s] [ -u] [ -aKeyid] [ -eAuthenticationDelay] [ -kKeyFile] [ -oVersion] [ -pSamples] [ -tTimeOut] Server...
```

### 选项  

<table>
<tbody>
<tr>
<td>-aKeyid</td>
<td>使用 Keyid 来认证全部数据包。</td>
</tr>
<tr>
<td>-b</td>
<td>通过调用 settimeofday 子例程来增加时钟的时间。</td>
</tr>
<tr>
<td>-d</td>
<td>指定调试方式。判断 ntpdate 命令会产生什么结果（不产生实际的结果）。结果再现在屏幕上。这个标志使用无特权的端口。</td>
</tr>
<tr>
<td>-eAuthenticationDelay</td>
<td>指定延迟认证处理的时间秒数。</td>
</tr>
<tr>
<td>-kKeyFile</td>
<td>当不使用缺省值 /etc/ntp.keys 文件时，为包含密钥的文件指定一个不同的名称。 请参阅文件KeyFile的描述。</td>
</tr>
<tr>
<td>-oVersion</td>
<td>当轮询它的发出数据包时，指定使用的 NTP 版本实现。 Version 的值可以是 1，2，3。缺省值是 3。</td>
</tr>
<tr>
<td>-pSamples</td>
<td>指定从每个服务器获取的样本的数目。 Samples 的值在 1 和 8 之间，并包括 1 和 8。它的缺省值是 4。</td>
</tr>
<tr>
<td>-s</td>
<td>指定日志操作 syslog 设施的使用，而不是使用标准输出。 当运行 ntpdate 命令和 cron命令时，它是很有用的。</td>
</tr>
<tr>
<td>-tTimeOut</td>
<td>指定等待响应的时间。给定 TimeOut 的值四舍五入为 0.2 秒的倍数。缺省值是 1 秒。</td>
</tr>
<tr>
<td>-u</td>
<td>指定使用无特权的端口发送数据包。 当在一个对特权端口的输入流量进行阻拦的防火墙后是很有益的， 并希望在防火墙之外和主机同步。防火墙是一个系统或者计算机，它控制从外网对专用网的访问。</td>
</tr>
</tbody>
</table>


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->