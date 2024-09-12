docker
===

容器化技术，可以将应用程序及其依赖项打包到一个可移植的容器中，使其可以在不同的环境中运行

## 补充说明

Docker 容器可以快速部署、可移植、可扩展，并且可以在不同的平台上运行。Docker 可以帮助开发人员和运维人员更轻松地构建、发布和管理应用程序。

## 安装

在 Linux 中输入以下命令安装 Docker。

```bash
# CentOS    参考：https://blog.csdn.net/zhaoyuanh/article/details/126610347
#如果系统里有旧版本docker的话需要先行删除：
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

#设置仓库：
yum install -y yum-utils

#添加Docker仓库：
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

#安装Docker引擎(默认最新):
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin

#启动docker:
sudo systemctl start docker

```

```bash
# Docker官方提供的快速安装脚本 https://github.com/docker/docker-install 
# 不建议在生产环境中使用
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh ./get-docker.sh --dry-run

# 使用systemctl设置开机启动
sudo systemctl enable docker.service
sudo systemctl enable containerd.service
```

## 语法

```shell
docker create [options] IMAGE
```

## 选项参数

```shell
attach	将本地标准输入、输出和错误流附加到正在运行的容器
build	从 Dockerfile 构建镜像
commit	从容器的更改创建新镜像
cp	在容器和本地文件系统之间复制文件/文件夹
create	创建一个新容器
diff	检查容器文件系统上文件或目录的更改
events	从服务器获取实时事件
exec	在正在运行的容器中运行命令
export	将容器的文件系统导出为 tar 存档
history	显示镜像的历史
images	列出镜像
import	从 tarball 导入内容以创建文件系统映像
info	显示系统范围的信息
inspect	返回有关 Docker 对象的低级信息
kill	杀死一个或多个正在运行的容器
load	从 tar 存档或 STDIN 加载镜像
login	登录到 Docker 注册表
logout	从 Docker 注册表中注销
logs	获取容器的日志
pause	暂停一个或多个容器内的所有进程
port	列出容器的端口映射或特定映射
ps	列出容器
pull	从注册表中提取镜像或存储库
push	将镜像或存储库推送到注册表
rename	重命名容器
restart	重启一个或多个容器
rm	移除一个或多个容器
rmi	移除一张或多张镜像
run	在新容器中运行命令
save	将一个或多个镜像保存到 tar 存档（默认流式传输到 STDOUT）
search	在 Docker Hub 中搜索镜像
start	启动一个或多个停止的容器
stats	显示容器资源使用统计的实时流
stop	停止一个或多个正在运行的容器
tag	创建一个引用 SOURCE_IMAGE 的标记 TARGET_IMAGE
top	显示容器的运行进程
unpause	取消暂停一个或多个容器中的所有进程
update	更新一个或多个容器的配置
version	显示 Docker 版本信息
wait	阻塞直到一个或多个容器停止，然后打印它们的退出代码

<环境参数>
    --add-host list            # 添加自定义主机到 IP 映射 (host:ip)
-a, --attach list              # 连接到 STDIN、STDOUT 或 STDERR
    --blkio-weight uint16      # 块 IO（相对权重），介于 10 和 1000 之间，或 0 禁用（默认 0）
    --blkio-weight-device list # 块 IO 权重（相对设备权重）（默认 []）
    --cap-add list             # 添加 Linux 功能
    --cap-drop list            # 放弃 Linux 功能
    --cgroup-parent string     # 容器的可选父 cgroup
    --cgroupns string   # 要使用的 Cgroup 命名空间（主机|私有）
                        #  'host':    在 Docker 主机的 cgroup 命名空间中运行容器
                        #  'private': 在自己的私有 cgroup 命名空间中运行容器
                        #  '':        使用由守护进程上的 
                        #        default-cgroupns-mode 选项配置的 cgroup 命名空间（默认）
    --cidfile string           # 将容器 ID 写入文件
    --cpu-period int           # 限制 CPU CFS（完全公平调度器）周期
    --cpu-quota int            # 限制 CPU CFS（完全公平调度器）配额
    --cpu-rt-period int        # 以微秒为单位限制 CPU 实时周期
    --cpu-rt-runtime int       # 以微秒为单位限制 CPU 实时运行时间
-c, --cpu-shares int           # CPU 份额（相对权重）
    --cpus decimal             # CPU 数量
    --cpuset-cpus string       # 允许执行的 CPU (0-3, 0,1)
    --cpuset-mems string       # 允许执行的 MEM (0-3, 0,1)
    --device list              # 将主机设备添加到容器
    --device-cgroup-rule list  # 将规则添加到 cgroup 允许的设备列表
    --device-read-bps list     # 限制设备的读取速率（每秒字节数）（默认 []）
    --device-read-iops list    # 限制设备的读取速率（每秒 IO）（默认 []）
    --device-write-bps list    # 限制设备的写入速率（每秒字节数）（默认 []）
    --device-write-iops list   # 限制设备的写入速率（每秒 IO）（默认 []）
    --disable-content-trust    # 跳过镜像验证（默认为 true）
    --dns list                 # 设置自定义 DNS 服务器
    --dns-option list          # 设置 DNS 选项
    --dns-search list          # 设置自定义 DNS 搜索域
    --domainname string        # 容器 NIS 域名
    --entrypoint string        # 覆盖镜像的默认入口点
-e, --env list                 # 设置环境变量
    --env-file list            # 读入环境变量文件
    --expose list              # 公开一个端口或一系列端口
    --gpus gpu-request         # 要添加到容器中的 GPU 设备（“全部”以传递所有 GPU）
    --group-add list           # 添加其他组以加入
    --health-cmd string        # 运行以检查运行状况的命令
    --health-interval duration # 运行检查之间的时间 (ms|s|m|h) (默认 0s)
    --health-retries int           # 需要报告不健康的连续失败
    --health-start-period duration # 开始健康重试倒计时之前容器初始化的开始时间（ms|s|m|h）（默认 0s）
    --health-timeout duration      # 允许运行一项检查的最长时间 (ms|s|m|h) (默认 0s)
    --help                     # 打印使用
-h, --hostname string          # 容器主机名
    --init                     # 在容器内运行一个 init 来转发信号并收获进程
-i, --interactive              # 即使没有连接，也保持 STDIN 打开
    --ip string                # IPv4 地址（例如 172.30.100.104）
    --ip6 string               # IPv6 地址（例如，2001:db8::33）
    --ipc string               # 要使用的 IPC 模式
    --isolation string         # 容器隔离技术
    --kernel-memory bytes      # 内核内存限制
-l, --label list               # 在容器上设置元数据
    --label-file list          # 读入以行分隔的标签文件
    --link list                # 添加到另一个容器的链接
    --link-local-ip list       # 容器 IPv4/IPv6 链路本地地址
    --log-driver string        # 容器的日志记录驱动程序
    --log-opt list             # 日志驱动程序选项
    --mac-address string       # 容器 MAC 地址（例如 92:d0:c6:0a:29:33）
-m, --memory bytes             # 内存限制
    --memory-reservation bytes # 内存软限制
    --memory-swap bytes        # 交换限制等于内存加上交换：'-1' 启用无限交换
    --memory-swappiness int    # 调整容器内存交换（0 到 100）（默认 -1）
    --mount mount              # 将文件系统挂载附加到容器
    --name string              # 为容器分配名称
    --network network          # 将容器连接到网络
    --network-alias list       # 为容器添加网络范围的别名
    --no-healthcheck           # 禁用任何容器指定的 HEALTHCHECK
    --oom-kill-disable         # 禁用 OOM 杀手
    --oom-score-adj int        # 调整主机的 OOM 首选项（-1000 到 1000）
    --pid string               # 要使用的 PID 命名空间
    --pids-limit int           # 调整容器 pids 限制（设置 -1 表示无限制）
    --platform string          # 如果服务器支持多平台，则设置平台
    --privileged               # 授予此容器扩展权限
-p, --publish list             # 将容器的端口发布到主机
-P, --publish-all              # 将所有暴露的端口发布到随机端口
    --pull string              # 创建前拉取镜像("always"|"missing"|"never")(默认"missing")
    --read-only                # 将容器的根文件系统挂载为只读
    --restart string           # 容器退出时应用的重启策略（默认“否”）
    --rm                       # 容器退出时自动移除
    --runtime string           # 用于此容器的运行时
    --security-opt list        # 安全选项
    --shm-size bytes           # /dev/shm 的大小
    --stop-signal string       # 停止容器的信号（默认“SIGTERM”）
    --stop-timeout int         # 停止容器的超时（以秒为单位）
    --storage-opt list         # 容器的存储驱动程序选项
    --sysctl map               # Sysctl 选项（默认 map[]）
    --tmpfs list               # 挂载 tmpfs 目录
-t, --tty                      # 分配一个伪 TTY
    --ulimit ulimit            # ulimit 选项（默认 []）
-u, --user string              # 用户名或 UID（格式：<name|uid>[:<group|gid>]）
    --userns string            # 要使用的用户命名空间
    --uts string               # 要使用的 UTS 命名空间
-v, --volume list              # 绑定挂载卷
    --volume-driver string     # 容器的可选卷驱动程序
    --volumes-from list        # 从指定容器挂载卷
-w, --workdir string           # 容器内的工作目录
```

## 实例

介绍几个常用场景：Docker Hub镜像市场相关，镜像仓库命令。

1、下载docker hub镜像市场中的镜像。

```bash
docker pull user/image
```

2、在 docker hub 中搜索镜像。

```bash
# 注意需要下载镜像才能使用
docker search search_word
```

3、向 docker hub 进行身份验证。

```bash
docker login
```

4、将镜像上传到 docker hub。

```bash
docker push user/image
```


## docker network
## 语法

```
docker network [COMMAND]
```

## COMMAND

### docker network connect
将容器连接到网络。您可以按名称或ID连接容器。连接后，容器可以与同一网络中的其他容器通信。

```shell
docker network connect [OPTIONS] NETWORK CONTAINER
```

#### 选项参数

```shell
--alias	为容器添加网络范围的别名
--driver-opt	网络的驱动程序选项
--ip	IPv4地址（例如172.30.100.104）
--ip6	IPv6地址（例如2001：db8 :: 33）
--link	将链接添加到另一个容器(建议不用,后期应该会删除的)
--link-local-ip	为容器添加本地链接地址
```

### docker network disconnect
断开容器与网络的连接

```shell
docker network disconnect [OPTIONS] NETWORK CONTAINER
```

#### 选项参数

```shell
-f,--force	强制容器断开网络连接
```

### docker network create
创建一个新的网络

```shell
docker network create [OPTIONS] NETWORK
```

#### 选项参数

```shell
--attachable		API 1.25+启用手动容器附件
--aux-address		网络驱动程序使用的辅助IPv4或IPv6地址
--config-from		API 1.30+从中复制配置的网络
--config-only		API 1.30+创建仅配置网络
-d,--driver	bridge	驱动程序来管理网络
--gateway		主子网的IPv4或IPv6网关
--ingress		API 1.29+创建群集路由网状网络
--internal		限制外部访问网络
--ip-range		从子范围分配容器ip
--ipam-driver		IP地址管理驱动程序
--ipam-opt		设置IPAM驱动程序特定选项
--ipv6		启用IPv6网络
--label		在网络上设置元数据
-o,--opt		设置驱动程序特定选项
--scope		API 1.30+控制网络范围
--subnet		代表网段的CIDR格式的子网
```

### docker network inspect
返回有关一个或多个网络的信息。默认情况下，此命令将所有结果呈现在JSON对象中。

```shell
docker network inspect [OPTIONS] NETWORK [NETWORK...]
```

#### 选项参数

```shell
-f,--format	使用给定的Go模板格式化输出
-v,--verbose	详细输出以进行诊断
```

### docker network ls
列出引擎daemon知道的所有网络。这包括跨群集中多个主机的网络

```shell
docker network ls [OPTIONS]
```

#### 选项参数

```shell
-f,--filter	提供过滤器值（例如"driver = bridge"）
--format	使用Go模板的精美印刷网络
--no-trunc	不要截断输出
-q,--quiet	仅显示网络ID
```

### docker network prune
删除所有未使用的网络。未使用的网络是未被任何正在使用的容器引用的网络()。

```shell
docker network prune [OPTIONS]
```

#### 选项参数

```shell
--filter	提供过滤器值（例如'until ='）
-f,--force	不提示确认
```
### docker network rm
按名称或标识符删除一个或多个网络。要删除网络，必须首先断开连接到它的所有容器。

```shell
docker network rm NETWORKID [NETWORKID...]
```

## 官网

更多安装使用方法可以访问学习：https://wangchujiang.com/reference/docs/docker.html
由上海 屠天煜编写
