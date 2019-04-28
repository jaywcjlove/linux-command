speedtest-cli
===

命令行下测试服务器外网速度

## 补充说明

**speedtest-cli** 是一个使用python编写的命令行脚本，通过调用speedtest.net测试上下行的接口来完成速度测试，最后我会测试运维生存时间所在服务器的外网速度。项目地址：https://github.com/sivel/speedtest-cli

### 安装speedtest－cli  

speedtest-cli需要在python 2.4-3.4的环境下，安装方法都很简单，自己选择以下最适合你的一种。

 **pip方式** 

```shell
＃ pip install speedtest－cli
```

 **easy_install方式** 

```shell
＃ easy_install speedtest-cli
```

 **github＋pip方式** 

```shell
＃ pip install git+https://github.com/sivel/speedtest-cli.git
```

或者

```shell
＃ git clone https://github.com/sivel/speedtest-cli.git
＃ python speedtest-cli/setup.py install
```

 **下载脚本方式** 

```shell
＃ wget -O speedtest-cli https://raw.github.com/sivel/spe ... er/speedtest_cli.py
＃ chmod +x speedtest-cli
```

或者

```shell
＃ curl -o speedtest-cli https://raw.github.com/sivel/spe ... er/speedtest_cli.py
＃ chmod +x speedtest-cli
```

直接下载脚本，给予执行权限即可。

### 用法  

```shell
-h, --help       show this help message and exit
--share          分享你的网速，该命令会在speedtest网站上生成网速测试结果的图片。
--simple         Suppress verbose output, only show basic information
--list           根据距离显示speedtest.net的测试服务器列表。
--server=SERVER  指定列表中id的服务器来做测试。
--mini=MINI      URL of the Speedtest Mini server
--source=SOURCE  Source ip address to bind to
--version        Show the version number and exit
```

### 实例  

列出所有在中国的测试服务器：

```shell
[root@li229-122 ~]# speedtest-cli --list | grep China
1185) China Unicom (Changchun, China) [10534.35 km]
3784) China Mobile (Urumqi, China) [10581.15 km]
2667) Beijing Normal University (Beijing, China) [11117.03 km]
2529) Beijing Normal University (Beijing, China) [11117.03 km]
2816) Capital Online Data service (Beijing, China) [11117.03 km]
4354) SXmobile (Taiyuan, China) [11383.17 km]
3973) China Telecom (Lanzhou, China) [11615.43 km]
3633) China Telecom (Shanghai, China) [11983.37 km]
3927) China Mobile Jiangsu Co., Ltd. (Suzhou, China) [11989.27 km]
2461) China Unicom (Chengdu, China) [12213.35 km]
1028) Shepherd Software (Xiamen, China) [12785.57 km]
1628) Xiamen Guangdian Xinxu (Xiamen, China) [12785.57 km]
3891) GZinternet (Guangzhou, China) [13005.36 km]
3871) SZWCDMA (Shenzhen, China) [13059.20 km]
3819) SZU (Shenzhen, China) [13059.20 km]
1536) STC (Hong Kong, China) [13088.37 km]
1890) Telin (Hong Kong, China) [13088.37 km]
```

 **结果解释** 

```shell
3633) China Telecom (Shanghai, China) [11983.37 km]
```

```shell
3633: 服务器id
china telecom：isp，这里是中国电信
shanghai,china ：服务器所在地址
11983.37 km：两台服务器地理位置之间距离，我这台机器在美国，和上海相距11983.37公里，很远呐.
```

 **外网速度测试** 

```shell
[root@li229-122 ~]# speedtest-cli --server=3633 --share
Retrieving speedtest.net configuration...
Retrieving speedtest.net server list...
Testing from Linode (173.255.219.122)...
Hosted by China Telecom (Shanghai) [11983.37 km]: 23.603 ms
Testing download speed........................................
Download: 24.84 Mbit/s
Testing upload speed..................................................
Upload: 4.57 Mbit/s
Share results: http://www.speedtest.net/result/3240988007.png
```


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->