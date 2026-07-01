podman
===

容器引擎，Docker的替代品

## 补充说明

**podman命令** 是Red Hat开发的无守护进程的容器引擎，用于开发、管理和运行OCI容器。podman可以作为Docker的替代品使用，其命令行接口与Docker高度兼容。

podman采用客户机-服务器架构，但不需要运行后台守护进程。它可以直接以root或rootless模式运行容器，支持rootless Kubernetes manifests。

### 安装

`shell
# CentOS/RHEL 8+
dnf install podman

# Ubuntu/Debian
apt-get install podman

# macOS (Homebrew)
brew install podman

# 验证安装
podman --version
`

### 语法

`shell
podman [options] command [arguments]
`

### 常用命令

`shell
run          运行容器
pull         从仓库拉取镜像
images       列出本地镜像
ps           列出容器
stop         停止容器
start        启动容器
rm           删除容器
rmi          删除镜像
build        构建镜像
exec         在运行中的容器内执行命令
logs         查看容器日志
port         查看端口映射
inspect      显示容器或镜像的详细信息
volume       管理卷
network      管理网络
commit       从容器创建镜像
cp           在容器和本地文件系统之间复制文件
`

### 实例

`shell
# 运行一个简单的nginx容器
podman run -d --name mynginx -p 8080:80 nginx:latest

# 运行交互式容器
podman run -it ubuntu bash

# 拉取镜像
podman pull docker.io/library/nginx:latest

# 列出所有镜像
podman images

# 列出运行中的容器
podman ps

# 列出所有容器（包括已停止的）
podman ps -a

# 停止容器
podman stop mynginx

# 启动容器
podman start mynginx

# 重启容器
podman restart mynginx

# 删除容器
podman rm mynginx

# 删除镜像
podman rmi nginx:latest

# 在运行中的容器内执行命令
podman exec -it mynginx bash

# 查看容器日志
podman logs mynginx

# 查看实时日志
podman logs -f mynginx

# 构建镜像
podman build -t myapp:latest .

# 从容器创建镜像
podman commit mynginx mynginx:custom

# 复制文件到容器
podman cp ./file.txt mycontainer:/tmp/

# 从容器复制文件
podman cp mycontainer:/tmp/file.txt ./

# 查看端口映射
podman port mynginx

# 查看容器详细信息
podman inspect mynginx

# 运行带卷的容器
podman run -d -v /host/path:/container/path --name myapp nginx

# 运行带环境变量的容器
podman run -e MY_VAR=my_value nginx

# 运行带资源限制的容器
podman run --memory=512m --cpus=1.0 nginx

# 运行健康检查
podman run --health-cmd="curl -f http://localhost/" --health-interval=30s nginx

# 导入镜像
podman load < image.tar

# 导出镜像
podman save -o image.tar nginx:latest

# 搜索镜像
podman search nginx

# 登录到容器仓库
podman login docker.io

# 推送镜像到仓库
podman push myapp:latest docker.io/username/myapp:latest
`

### 与Docker的区别

`shell
# podman可以直接替换docker命令使用
alias docker=podman

# podman不需要守护进程
# docker需要dockerd守护进程
# podman以用户身份直接运行容器

# podman支持rootless模式
# docker通常需要root权限

# podman可以生成Kubernetes manifests
podman generate kube mycontainer > pod.yaml
kubectl apply -f pod.yaml

# podman可以导入Kubernetes manifests运行
podman play kube pod.yaml
`

### 注意

1. podman的命令行接口与Docker几乎相同，大多数docker命令可以直接替换为podman。
2. podman支持rootless模式，普通用户也可以运行容器。
3. podman可以生成和运行Kubernetes YAML文件。
4. 使用podman system connection可以连接到远程Docker守护进程。
5. podman容器在主机重启后不会自动启动，需要使用podman auto-update或systemd timers。

### 相关命令

- docker — 容器引擎
- uildah — 构建容器镜像
- skopeo — 容器镜像工具
- crun — 容器运行时

### 参考链接

- [Podman官方文档](https://podman.io/)
- [Podman GitHub仓库](https://github.com/containers/podman)
- [Podman命令参考](https://docs.podman.io/en/latest/stable.html)
