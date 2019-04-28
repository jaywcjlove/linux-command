ssh-agent
===

ssh密钥管理器

## 补充说明

**ssh-agent命令** 是一种控制用来保存公钥身份验证所使用的私钥的程序。ssh-agent在X会话或登录会话之初启动，所有其他窗口或程序则以客户端程序的身份启动并加入到ssh-agent程序中。通过使用环境变量，可定位代理并在登录到其他使用ssh机器上时使用代理自动进行身份验证。

其实ssh-agent就是一个密钥管理器，运行ssh-agent以后，使用ssh-add将私钥交给ssh-agent保管，其他程序需要身份验证的时候可以将验证申请交给ssh-agent来完成整个认证过程。

### 语法  

```shell
ssh-agent [-c | -s] [-d] [-a bind_address] [-t life] [command [arg ...]]
ssh-agent [-c | -s] -k
```

### 选项  

```shell
-a bind_address：bind the agent to the UNIX-domain socket bind_address.
-c：生成C-shell风格的命令输出。
-d：调试模式。
-k：把ssh-agent进程杀掉。
-s：生成Bourne shell 风格的命令输出。
-t life：设置默认值添加到代理人的身份最大寿命。
```

### 实例  

运行ssh-agent：

```shell
ssh-agent
```

运行ssh-agent，它会打印出来它使用的环境和变量。


<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->