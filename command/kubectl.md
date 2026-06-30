kubectl
===

Kubernetes集群管理工具

## 补充说明

**kubectl命令** 是Kubernetes（简称K8s）的命令行工具，用于管理Kubernetes集群。它允许用户部署应用程序、查看和管理集群资源、查看日志、执行故障排除等操作。

kubectl是Kubernetes生态系统中最核心的工具之一，几乎所有与K8s集群的交互都会用到它。它通过Kubernetes API与集群通信，支持多种资源类型的管理，包括Pod、Deployment、Service、ConfigMap等。

### 安装

```shell
# Ubuntu/Debian
cat <<EOF | sudo tee /etc/apt/sources.list.d/kubernetes.list
https://pkgs.k8s.io/core:/stable:/v1.30/deb/
EOF

sudo apt-get update
sudo apt-get install -y kubectl

# CentOS/RHEL
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://pkgs.k8s.io/core:/stable:/v1.30/rpm/
enabled=1
gpgcheck=yes
gpgkey=https://pkgs.k8s.io/core:/stable:/v1.30/rpm/repodata/repomd.xml.key
EOF

sudo yum install -y kubectl

# macOS (Homebrew)
brew install kubectl

# 下载二进制文件
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```

### 配置

kubectl通过~/.kube/config文件进行配置，该文件包含访问Kubernetes API所需的信息（服务器地址、认证凭据等）。

```shell
# 查看当前配置的上下文
kubectl config get-contexts

# 切换上下文
kubectl config use-context <context-name>

# 查看当前命名空间
kubectl config view --minify

# 设置默认命名空间
kubectl config set-context --current --namespace=<namespace>
```

### 语法

```shell
kubectl [command] [TYPE] [NAME] [flags]
```

### 常用命令

```shell
apply              通过文件或标准输入部署资源配置
cluster-info       显示集群信息
create             通过文件或标准输入创建资源
delete             通过文件名、标准输入、资源名称或标签选择器删除资源
describe           显示资源的详细信息
diff               显示资源的差异
drain              准备节点用于维护
exec               在容器内执行命令
get              列出资源
logs               输出容器日志
port-forward       将本地端口转发到 Pod
proxy              运行API服务器的代理
rollout            管理资源的发布
scale              对Deployment等资源进行扩缩容
version            显示客户端和服务器版本
```

### 实例

```shell
# 获取所有命名空间的Pod列表
kubectl get pods --all-namespaces

# 获取指定命名空间的Pod列表
kubectl get pods -n default

# 以宽格式查看Pod信息
kubectl get pods -o wide

# 查看Pod的详细描述信息
kubectl describe pod <pod-name>

# 查看Pod的日志
kubectl logs <pod-name>

# 查看Pod的实时日志
kubectl logs -f <pod-name>

# 进入正在运行的容器
kubectl exec -it <pod-name> -- /bin/sh

# 创建Deployment
kubectl create deployment nginx --image=nginx:latest

# 部署YAML文件
kubectl apply -f deployment.yaml

# 删除Deployment
kubectl delete deployment nginx

# 扩容Deployment到5个副本
kubectl scale deployment nginx --replicas=5

# 创建Service（暴露Deployment）
kubectl expose deployment nginx --port=80 --target-port=80 --type=NodePort

# 查看Service列表
kubectl get services

# 滚动更新镜像版本
kubectl set image deployment/nginx nginx=nginx:1.19

# 回滚到上一个版本
kubectl rollout undo deployment/nginx

# 查看Rollout状态
kubectl rollout status deployment/nginx

# 查看集群信息
kubectl cluster-info

# 查看节点状态
kubectl get nodes

# 查看事件
kubectl get events --sort-by=.metadata.creationTimestamp

# 导出资源配置为YAML
kubectl get deployment nginx -o yaml > nginx-backup.yaml

# 编辑资源配置
kubectl edit deployment nginx

# 查看命名空间列表
kubectl get namespaces

# 创建命名空间
kubectl create namespace dev

# 查看ConfigMap
kubectl get configmaps

# 查看Secret
kubectl get secrets

# 查看持久卷
kubectl get pv

# 查看持久卷声明
kubectl get pvc

# 查看Ingress
kubectl get ingress

# 端口转发（本地访问Pod）
kubectl port-forward pod/<pod-name> 8080:80

# 查看资源配额
kubectl describe resourcequota -n <namespace>

# 查看LimitRange
kubectl describe limitrange -n <namespace>

# 删除命名空间中的所有资源
kubectl delete all --all -n <namespace>

# 查看Pod的资源使用情况
kubectl top pods -n <namespace>

# 查看节点的资源使用情况
kubectl top nodes
```

### 常用资源类型

```shell
# 支持的资源类型
pods (或 po)
deployments (或 deploy)
services (或 svc)
namespaces (或 ns)
configmaps (或 cm)
secrets
persistentvolumes (或 pv)
persistentvolumeclaims (或 pvc)
serviceaccounts (或 sa)
roles
rolebindings
clusterroles
clusterrolebindings
nodes (或 no)
events
ingresses (或 ing)
replicasets (或 rs)
statefulsets
daemonsets
jobs
cronjobs
networkpolicies
poddisruptionbudgets
```

### 常用输出格式

```shell
# YAML格式（默认）
kubectl get pods -o yaml

# JSON格式
kubectl get pods -o json

# 宽表格格式
kubectl get pods -o wide

# 自定义列
kubectl get pods -o custom-columns=NAME:.metadata.name,STATUS:.status.phase

# 无标题表格
kubectl get pods -o table-custom-columns=NAME:.metadata.name,STATUS:.status.phase

# 自定义列并排序
kubectl get pods --sort-by=.metadata.name
```

### 别名

```shell
# 常用资源的短别名
po -> pods
dep -> deployments
svc -> services
ns -> namespaces
cm -> configmaps
sec -> secrets
pv -> persistentvolumes
pvc -> persistentvolumeclaims
no -> nodes
ing -> ingresses
rs -> replicasets
```

### 注意

1. kubectl命令的行为取决于当前激活的上下文（context），可以通过`kubectl config get-contexts`查看。
2. 大多数kubectl命令支持`--all-namespaces`或`-A`参数来跨命名空间操作。
3. kubectl支持丰富的过滤器语法，可以使用`-l`或`--selector`参数按标签筛选资源。
4. 对于大规模集群，建议使用`--field-selector`参数来减少API请求的数据量。
5. kubectl v1.19+移除了部分已弃用的API，升级前请检查兼容性。
6. 生产环境中建议启用RBAC（基于角色的访问控制）来管理用户权限。
7. 可以使用`--dry-run=client`或`--dry-run=server`参数预览操作效果而不实际执行。

### 相关命令

- `helm` — Kubernetes包管理器
- `minikube` — 本地Kubernetes开发环境
- `kubeadm` — Kubernetes集群安装工具
- `kubefed` — Kubernetes联邦集群管理
- `kompose` — Docker Compose转换为Kubernetes配置

### 参考链接

- [Kubernetes官方文档](https://kubernetes.io/docs/reference/kubectl/overview/)
- [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)
- [kubectl API参考](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.30/)
