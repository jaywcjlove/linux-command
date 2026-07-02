minikube
===

本地Kubernetes开发环境

## 补充说明

**minikube命令** 是在本地运行单个节点Kubernetes集群的工具，专为开发和测试Kubernetes应用而设计。它支持多种容器运行时和驱动程序，可以轻松启动、配置和管理本地K8s集群。

minikube是学习Kubernetes和开发K8s应用的理想工具，无需昂贵的云端K8s集群即可进行本地测试。

### 安装

```shell# macOS (Homebrew)
brew install minikube

# Linux (二进制安装)
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube

# Windows (Chocolatey)
choco install minikube

# 验证安装
minikube version
`

### 语法

`shellminikube [command]
`

### 常用命令

`shellstart          启动集群
stop           停止集群
delete         删除集群
status         查看集群状态
ssh            SSH到节点
ip             获取节点IP
url            获取服务URL
dashboard      打开Kubernetes仪表盘
addons         管理插件
config         修改配置
update-context 更新kubeconfig
logs           查看日志
mount          挂载目录
ssh-keygen     生成SSH密钥
`

### 实例

```shell# 启动默认配置的集群
minikube start

# 指定Kubernetes版本
minikube start --kubernetes-version=v1.28.0

# 指定驱动程序（docker/podman/virtualbox/kvm2等）
minikube start --driver=docker

# 指定CPU核心数
minikube start --cpus=4

# 指定内存大小
minikube start --memory=8192

# 指定磁盘大小
minikube start --disk-size=50g

# 指定节点数量
minikube start --nodes=3

# 启用特定插件
minikube start --addons=registry
minikube start --addons=metrics-server

# 查看集群状态
minikube status

# 获取集群IP
minikube ip

# 查看运行中的节点
minikube nodes

# 打开Dashboard
minikube dashboard

# 停止集群
minikube stop

# 删除集群
minikube delete

# SSH到节点
minikube ssh

# 在节点上执行命令
minikube ssh -- docker ps

# 获取服务URL
minikube service <service-name> --url

# 端口转发
minikube service <service-name> --port=8080:80

# 挂载本地目录
minikube mount :/path/on/node

# 查看日志
minikube logs

# 更新kubeconfig
minikube update-context

# 列出所有配置
minikube config list

# 修改配置
minikube config set memory 8192
minikube config set cpus 4

# 使用特定ISO镜像
minikube start --image-mirror-country=cn

# 启用Ingress控制器
minikube addons enable ingress

# 启用Metrics Server
minikube addons enable metrics-server

# 启用Registry
minikube addons enable registry

# 使用自定义镜像仓库
minikube start --image-repository=mirror

# 查看集群信息
minikube profile list

# 切换集群配置
minikube profile switch myprofile

# 导出kubeconfig
minikube kubeconfig --env

# 设置默认上下文
minikube kubeconfig --set-context

# 查看增补列表
minikube addons list

# 禁用增补
minikube addons disable registry

# 查看增补配置
minikube addons configure registry

# 重置集群
minikube reset

# 清理所有资源
minikube delete --all

# 查看驱动信息
minikube driver

# 查看启动参数
minikube start --help

# 使用特定容器运行时
minikube start --container-runtime=cri-o

# 启用网络插件
minikube start --network-plugin=cni

# 配置代理
minikube start --http-proxy=http://proxy.example.com:8080

# 查看启动进度
minikube start -v=5

# 使用配置文件启动
minikube start --profile=mycluster -f config.yaml

# 检查集群健康状态
kubectl cluster-info --context=minikube

# 在minikube中部署应用
kubectl apply -f deployment.yaml
kubectl expose deployment myapp --port=80 --type=NodePort

# 访问部署的应用
minikube service myapp

# 查看Pod状态
kubectl get pods -n kube-system

# 查看事件
kubectl get events --sort-by=.metadata.creationTimestamp

# 清理不再使用的配置文件
minikube config unset memory

# 查看minikube版本信息
minikube version -o json
`

### 常用驱动程序

```shell# Docker驱动（推荐用于开发）
minikube start --driver=docker

# Podman驱动
minikube start --driver=podman

# VirtualBox驱动
minikube start --driver=virtualbox

# KVM2驱动（Linux）
minikube start --driver=kvm2

# Hyperkit驱动（macOS）
minikube start --driver=hyperkit

# 查看可用驱动
minikube drivers
`

### 常用增补（Addons）

```shell# 启用Ingress控制器
minikube addons enable ingress

# 启用Metrics Server
minikube addons enable metrics-server

# 启用Registry
minikube addons enable registry

# 启用Dashboard
minikube addons enable dashboard

# 启用Storage Provisioner
minikube addons enable storage-provisioner

# 列出所有可用增补
minikube addons list
`

### 配置选项

```shell# 内存配置
minikube config set memory 8192

# CPU配置
minikube config set cpus 4

# 磁盘大小配置
minikube config set disk-size 50g

# Kubernetes版本配置
minikube config set kubernetes-version v1.28.0

# 驱动配置
minikube config set driver docker

# 网络插件配置
minikube config set network-plugin cni

# 容器运行时配置
minikube config set container-runtime containerd
`

### 注意

1. minikube默认使用docker驱动，需要确保Docker已安装并运行。
2. 首次启动会自动下载Kubernetes镜像，需要良好的网络连接。
3. 使用--profile参数可以管理多个集群配置。
4. minikube的集群数据存储在~/.minikube目录下。
5. 修改配置后需要重新启动集群才能生效。
6. 生产环境应使用真正的Kubernetes集群，minikube仅用于开发测试。
7. 可以使用--mount参数实现主机目录挂载。

### 相关命令

- kubectl — Kubernetes集群管理工具
- helm — Kubernetes包管理器
- kind — 另一种本地K8s集群工具
- kubeadm — Kubernetes集群安装工具

### 参考链接

- [Minikube官方文档](https://minikube.sigs.k8s.io/docs/)
- [Minikube启动指南](https://minikube.sigs.k8s.io/docs/start/)
- [Minikube增补列表](https://minikube.sigs.k8s.io/docs/addons/)
