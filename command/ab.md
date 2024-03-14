ab
===

Apache服务器的性能测试工具


## 安装

若系统未安装，使用以下命令安装

```shell
# Ubuntu
sudo apt-get install apache2-utils

# Centos
yum install httpd-tools

```


## 补充说明

**ab命令** 是一个测试你 Apache http 服务器的工具，你可以通过这个工具，指定一个单位时间内向 apache 发出的请求数量来看看你的 Apache 和机器配合的性能如何。

### 语法

```shell
ab [ -A auth-username:password ] [ -c concurrency ] [ -C cookie-name=value
] [ -d ] [ -e csv-file ] [ -g gnuplot-file ] [ -h ] [ -H custom-header ] [
-i  ]  [  -k  ]  [  -n  requests  ] [ -p POST-file ] [ -P proxy-auth-user‐
name:password ] [ -q ] [ -s ] [ -S ] [ -t timelimit ] [ -T content-type  ]
[  -v verbosity] [ -V ] [ -w ] [ -x <table>-attributes ] [ -X proxy[:port]
]  [  -y  <tr>-attributes  ]  [  -z   <td>-attributes   ]   [http://]host‐
name[:port]/path
```

### 选项

```shell
-A auth-username:password
      #  支持基本的验证证书,用户名和密码之间使用"冒号"                    :
      # 分隔开,ab将以明文方式传送过去.不管服务器是不是需要
      # ,也就是说你的服务器需要支持401认证.

-c concurrency
      # 同时向服务器端发送的请求数目，默认状态下是一次 只执行一个http请求.

-C cookie-name=value
      # Add a Cookie: line to the request. The argument is typically in the
      # form of a name=value pair. This field is repeatable.

-d    #  Do not display  the  "percentage  served  within  XX  [ms]  table".
      # (legacy support).

-e csv-file
      # Write  a  Comma  separated value (CSV) file which contains for each
      # percentage (from 1% to 100%) the time (in milli seconds) it took to
      # serve  that percentage of the requests. This is usually more useful
      # than the 'gnuplot' file; as the results are already 'binned'.

-g gnuplot-file
      # Write all measured values out as a 'gnuplot' or TSV  (Tab  separate
      # values)  file.  This file can easily be imported into packages like
      # Gnuplot, IDL, Mathematica, Igor or even Excel. The labels  are  on
      # the first line of the file.
-h    # 显示使用说明
-H custom-header
      # 向请求包追加附加的标题字串.此参数应该是有效的标题         行(header
      # line)形式,通常使用冒号":"来分隔有效配对 (valid  pair)例如  'Accept-
      # Encoding: zip/zop;8 bit';

-i    # 使用一个 http 头(HEAD) 来替换 GET方法.不可以掺入POST 方法

-k    #  允许http      KeepAlive      ；也就是说执行多个请求在一个      http
      # 会话当中，默认是不允许的也就是no KeepAlive啦;)

-n requests
      # 执行一次测试会话的时候所发出的请求数目,默认是执行一个单一的请求
      # 当然了这样的测试结果也就没什么意义了

-p POST-file
      # 测试程序也就是ab,将向Apache server发送带有HTTP POST 的请求.

-P proxy-auth-username:password
      # 当需要通过代理测试一台 HTTP 服务器的时候而你的代理
      # 又需要用户名密码验证,这时你可以使用这个选项,同样
      # 用户名与密码之间使用冒号":"分隔开,ab将之以明文的方式
      # 发送出去,当然,前提是你的代理是处于407认证状态的

-q    #  When processing more than 150 requests, ab outputs a progress count
      # on  stderr  every  10% or 100 requests or so. The -q flag will sup‐
      # press these messages.

-s    #  When compiled in (ab -h will show you) use the SSL protected  https
      # rather  than  the  http  protocol. This feature is experimental and
      # very rudimentary. You probably do not want to use it.

-S    #  Do not display the median and standard deviation values,  nor  dis‐
      # play  the  warning/error  messages  when the average and median are
      # more than one or two times the standard deviation  apart.  And  de‐
      # fault to the min/avg/max values. (legacy support).

-t timelimit
      #  设置测试的时间的长短，使用这个选项ab将自动设置
      # 测试请求会话数目为50000，然后以你设置的时间为
      # 固定周期.默认状态下是没有时限的，也就是直到完成
      # 你所设置的请求数目为止.

-T content-type
      # 内容类型标头,使用在POST数据的时候.

-v verbosity
      # 设置冗余级别,4级打印出每个请求标头的详细信息,
      # 3级打印出回应代码(例如,404,200),2级打印出警告 信息和指示消息

-V    # 显示版本号并且退出
-w    # 打印输出结果到HTML表中. 默认的表是两列n行白底黑框

-x <table>-attributes
      # 使用字串来描述表的属性,该属性字串应该插入到<table 这里 >

-X proxy[:port]
      # Use a proxy server for the requests.

-y <tr>-attributes
      # 用于生成html表格每行的属性名 (<tr>)

-z <td>-attributes
      # 用于生成html表格每列的属性名 (<td>)
```

### 参数

主机：被测试主机。


### 实例

```shell
# 10个并发， 请求500次
ab -c 10 -n 500 https://www.qq.com/
```
