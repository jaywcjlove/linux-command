getent
===

查询 DNS 名称服务器中的命名空间

##  语法

```shell
getent [选项] 主机名或域名
```

##  选项

```shell
-h  # 显示帮助信息  
-n  # 不解析 DNS 名称  
-p  # 打印解析过程  
-s  # 只输出有关已知主机的信息  
-t  # 指定 DNS 查询类型 (默认为 NXDOMAIN)  
-U  # 使用顶级域名服务器  
-V  # 显示版本信息  
-O  # 以其他模式解析命名空间
```

主机名或域名可以是通配符 (例如 *.example.com) 或单个主机名。如果指定了 -h 选项，则显示帮助信息。如果指定了 -n 选项，则不再解析 DNS 名称。如果指定了 -p 选项，则打印解析过程。如果指定了 -s 选项，则只输出有关已知主机的信息。如果指定了 -t 选项，则指定 DNS 查询类型 (默认为 NXDOMAIN)。如果指定了 -U 选项，则使用顶级域名服务器。如果指定了 -V 选项，则显示版本信息。如果指定了 -O 选项，则解析命名空间以其他模式。  

##  实例

1. 查看所有已知账户:

```shell
getent passwd  
```

这将列出所有已知账户的密码文件，例如 `/etc/passwd` 或 `/run/user/1000/gshadow`。

2. 查看指定账户的信息:

```shell
getent passwd someuser  
```

这将只列出指定用户的信息，例如用户名、密码、uid、gid 等。

3. 查看指定域名的 DNS 记录:

```shell
getent host example.com  
```

这将列出 example.com 域名的 DNS 记录，包括主机名、IP 地址和其他相关信息。

4. 查看指定 IP 地址的 TCP 连接信息:

```shell
getentent ips8.ipaddress.com 80  
```

这将列出 IP 地址为 192.168.0.100 的 TCP 连接信息，例如连接的服务器地址、端口号和连接状态。

5. 查看指定主机的已知端口:

```shell
getent port somehost.example.com  
```

这将列出指定主机的已知端口，例如端口号、协议和主机名。

这些只是 `getent` 命令的一些例子，它还有许多其他用法和选项，可以根据需要进行调整。