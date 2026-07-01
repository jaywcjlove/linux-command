kubeadm
===

Kubernetes集群安装工具

## 补充说明

**kubeadm命令** 是官方提供的用于快速搭建Kubernetes集群的工具。它简化了K8s集群的安装过程，可以一键创建单节点或多节点集群。

kubeadm不是要完全管理K8s集群的生命周期，而是专注于提供标准化的集群安装和升级方式。

### 安装

`shell
# 安装kubeadm、kubelet和kubectl
# CentOS/RHEL
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
exclude=kubelet kubeadm kubectl
EOF

sudo yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
sudo systemctl enable --now kubelet

# Ubuntu/Debian
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubelet kubeadm kubectl
sudo systemctl enable kubelet
`

### 语法

`shell
kubeadm [command]
`

### 常用命令

`shell
init            初始化控制平面节点
join            加入节点到集群
upgrade         升级集群
reset           重置集群
token           管理令牌
config          管理配置
certificate     管理证书
kubeconfig      生成kubeconfig文件
uploadcert      上传证书
version         显示版本
help            显示帮助
`

### 实例

`shell
# 查看kubeadm版本
kubeadm version

# 查看可用版本
kubeadm version --short

# 初始化控制平面（单节点集群）
kubeadm init --pod-network-cidr=10.244.0.0/16

# 指定API服务器地址
kubeadm init --apiserver-advertise-address=192.168.1.100

# 指定Kubernetes版本
kubeadm init --kubernetes-version=v1.28.0

# 使用特定token
kubeadm init --token=abcdef.0123456789abcdef

# 跳过预检检查
kubeadm init --ignore-preflight-errors=All

# 初始化控制平面并输出配置文件
kubeadm init --config=kubeadm-config.yaml --dry-run

# 生成join命令
kubeadm token create --print-join-command

# 创建新的token
kubeadm token create

# 列出所有token
kubeadm token list

# 删除指定token
kubeadm token delete <token>

# 设置token过期时间
kubeadm token create --ttl=0  # 永不过期

# 加入worker节点
kubeadm join <control-plane-host>:<control-plane-port> --token <token> --discovery-token-ca-cert-hash sha256:<hash>

# 重置集群
kubeadm reset

# 重置并保留数据
kubeadm reset --force

# 查看升级计划
kubeadm upgrade plan

# 升级控制平面
kubeadm upgrade apply v1.28.0

# 升级kubelet和kubectl
kubectl drain <node> --ignore-daemonsets
kubectl uncordon <node>

# 升级worker节点
kubeadm upgrade node

# 生成kubeconfig文件
kubeadm kubeconfig user-output

# 上传证书
kubeadm upload-certs

# 使用配置文件初始化
cat <<EOF | tee kubeadm-config.yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
kubernetesVersion: v1.28.0
networking:
  podSubnet: 10.244.0.0/16
  serviceSubnet: 10.96.0.0/12
EOF

kubeadm init --config=kubeadm-config.yaml

# 查看集群状态
kubeadm upgrade diff

# 检查预条件
kubeadm init --dry-run

# 生成证书
kubeadm certs renew

# 查看证书信息
kubeadm certs check-expiration

# 配置集群
kubeadm config print init-defaults
kubeadm config print join-defaults

# 迁移配置
kubeadm config migrate --old-config old.yaml --new-config new.yaml

# 提取组件清单
kubeadm config uploads images

# 列出可用镜像
kubeadm config images list

# 拉取所需镜像
kubeadm config images pull

# 使用本地镜像仓库
kubeadm config images pull --image-repository registry.example.com

# 查看升级历史
kubeadm upgrade node plan

# 设置集群名称
kubeadm init --cluster-name my-kubernetes-cluster

# 启用CNI插件
kubeadm init --cri-socket unix:///var/run/cri-dockerd.sock

# 使用containerd运行时
kubeadm init --cri-socket unix:///run/containerd/containerd.sock

# 配置etcd
kubeadm init --etcd-local

# 配置外部etcd
kubeadm init --etcd.external

# 查看帮助
kubeadm init --help
kubeadm join --help
kubeadm upgrade --help
`

### 配置文件示例

`yaml
# kubeadm-config.yaml
apiVersion: kubeadm.k8s.io/v1beta3
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 192.168.1.100
  bindPort: 6443
nodeRegistration:
  criSocket: unix:///var/run/containerd/containerd.sock
  name: master
---
apiVersion: kubeadm.k8s.io/v1beta3
kind: ClusterConfiguration
kubernetesVersion: v1.28.0
controlPlaneEndpoint: "api.example.com:6443"
networking:
  podSubnet: 10.244.0.0/16
  serviceSubnet: 10.96.0.0/12
  dnsDomain: cluster.local
clusterName: kubernetes
controllerManager:
  extraArgs:
    enable-hostpath-provisioner: "true"
scheduler: {}
`

### 常见网络插件

`shell
# 部署Flannel
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml

# 部署Calico
kubectl apply -f https://raw.githubusercontent.com/projectcalico/calico/master/manifests/calico.yaml

# 部署Weave Net
kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version="

# 部署Cilium
kubectl create -f https://raw.githubusercontent.com/cilium/cilium/master/install/kubernetes/quick-install.yaml
`

### 注意

1. 初始化前需要确保所有节点的时间同步。
2. 需要配置正确的CRI（容器运行时接口）。
3. pod-network-cidr必须与所选CNI插件兼容。
4. 生产环境建议使用高可用控制平面。
5. 升级前务必备份etcd数据。
6. 使用--dry-run参数可以预览操作效果。

### 相关命令

- kubectl — Kubernetes集群管理工具
- helm — Kubernetes包管理器
- minikube — 本地K8s开发环境

### 参考链接

- [Kubeadm官方文档](https://kubernetes.io/docs/reference/setup-tools/kubeadm/)
- [Kubeadm使用指南](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/)
- [Kubeadm配置参考](https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm-init/)
