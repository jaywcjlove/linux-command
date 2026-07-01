helm
===

Kubernetes包管理器

## 补充说明

**helm命令** 是Kubernetes的包管理工具，类似于Ubuntu的apt、CentOS的yum或macOS的homebrew。Helm使用Charts来定义、安装和升级复杂的Kubernetes应用程序。

Chart是Helm打包格式的集合，包含运行一个应用所需要的镜像、依赖关系、资源定义等。使用Helm的最大好处是可以使用别人开发的Chart，而不用自己去配置和部署复杂的应用。

### 安装

```shell
# macOS (Homebrew)
brew install helm

# Linux (官方脚本)
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
chmod 700 get_helm.sh
./get_helm.sh

# 从源码编译安装
git clone https://github.com/helm/helm.git
cd helm
make bootstrap
make build
sudo make install

# 下载预编译二进制文件
version=v3.14.0
curl -LO "https://get.helm.sh/helm-$version-linux-amd64.tar.gz"
tar -zxvf helm-$version-linux-amd64.tar.gz
sudo mv linux-amd64/helm /usr/local/bin/helm
```

### 语法

```shell
helm [command]

Available Commands:
completion   为指定的shell生成自动补全脚本
create       创建一个新的Chart
debug        调试Chart
deprecated   列出已弃用的命令
diff         显示release和Chart之间的差异
env          显示Helm环境变量
feature      列出并切换特性标志
fetch        从仓库下载Chart到本地
get          下载额外的信息
help         帮助命令
history      获取release的历史记录
install      安装一个Chart
lint         检查Chart是否存在问题
list         列出releases
manicreate   生成Helm手册
message      显示信息
module       管理Helm模块
package      将chart目录打包到chart版本中
plugin       安装、列出或卸载Helm插件
pull         从仓库下载Chart到本地
repo         添加、列出、移除、更新和索引仓库
release      release信息
render       本地渲染模板
rollback     将release回滚到以前的版本
search       搜索charts
show         显示chart的信息
template     本地渲染模板
token        管理Helm认证令牌
uninstall    卸载release
upgrade      升级release
version      显示Helm版本
```

### 实例

```shell
# 添加官方Helm仓库
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add stable https://charts.helm.sh/stable

# 更新仓库索引
helm repo update

# 列出已添加的仓库
helm repo list

# 搜索MySQL相关的Chart
helm search repo mysql

# 搜索Hub上的Chart
helm search hub mysql

# 安装MySQL Chart
helm install my-mysql bitnami/mysql

# 安装指定版本的Chart
helm install my-mysql bitnami/mysql --version 9.10.0

# 安装并指定命名空间
helm install my-release bitnami/nginx -n development --create-namespace

# 安装并指定values文件
helm install my-release bitnami/mysql -f custom-values.yaml

# 安装并设置自定义值
helm install my-release bitnami/mysql --set mysqlRootPassword=secret

# 查看release状态
helm status my-release

# 列出所有releases
helm list

# 列出指定命名空间的releases
helm list -n development

# 查看release的历史版本
helm history my-release

# 回滚到上一个版本
helm rollback my-release

# 回滚到指定版本
helm rollback my-release 2

# 升级release
helm upgrade my-release bitnami/mysql

# 升级并设置新的值
helm upgrade my-release bitnami/mysql --set mysqlRootPassword=newsecret

# 卸载release
helm uninstall my-release

# 卸载并保留历史记录
helm uninstall my-release --keep-history

# 创建新的Chart
helm create my-chart

# 打包Chart
helm package my-chart

# 本地渲染模板（不安装）
helm template my-release bitnami/mysql

# 渲染并输出YAML文件
helm template my-release bitnami/mysql > mysql.yaml

# 检查Chart是否存在问题
helm lint my-chart

# 检查远程Chart
helm lint bitnami/mysql

# 查看Chart的详细信息
helm show all bitnami/mysql

# 查看Chart的values
helm show values bitnami/mysql

# 查看Chart的README
helm show readme bitnami/mysql

# 下载Chart到本地
helm pull bitnami/mysql

# 下载并解压Chart
helm pull bitnami/mysql --untar

# 删除仓库
helm repo remove bitnami

# 导出release的资源清单
helm get manifest my-release

# 导出release的所有信息
helm get all my-release

# 检查Chart的依赖
helm dependency list my-chart

# 更新Chart的依赖
helm dependency update my-chart

# 安装带有依赖的Chart
helm install my-release ./my-chart --set redis.enabled=false

# 使用OCI注册表
helm pull oci://registry-1.docker.io/bitnamicharts/mysql

# 查看已安装的插件
helm plugin list

# 安装插件
helm plugin install https://github.com/helm/helm-sha256

# 卸载插件
helm plugin uninstall sha256
```

### Helm Chart结构

标准的Helm Chart目录结构如下：

```shell
my-chart/
├── Chart.yaml          # Chart元数据（名称、版本等）
├── values.yaml         # 默认配置值
├── charts/             # 依赖的Chart
├── templates/          # 模板文件
│   ├── deployment.yaml
│   ├── service.yaml
│   └── _helpers.tpl    # 辅助模板
├── .helmignore         # 忽略文件模式
└── README.md           # Chart说明文档
```

### 常用配置文件

```shell
# Chart.yaml示例
apiVersion: v2
name: my-app
description: A Helm chart for Kubernetes
version: 0.1.0
appVersion: "1.16.0"

# values.yaml示例
replicaCount: 1
image:
  repository: nginx
  tag: latest
  pullPolicy: IfNotPresent
service:
  type: ClusterIP
  port: 80
```

### 注意

1. Helm 3移除了Tiller组件，不再需要RBAC配置。
2. 使用`helm repo add`添加的仓库信息保存在~/.config/helm/repositories.yaml。
3. Chart的版本号遵循语义化版本（SemVer）。
4. 可以通过`--dry-run`参数预览安装效果而不实际部署。
5. 使用`helm diff`插件可以查看升级前后的资源差异。
6. 生产环境建议使用命名空间隔离不同的release。
7. 可以通过`--wait`参数等待所有资源就绪后再返回。

### 相关命令

- `kubectl` — Kubernetes集群管理工具
- `minikube` — 本地Kubernetes开发环境
- `kubeadm` — Kubernetes集群安装工具

### 参考链接

- [Helm官方文档](https://helm.sh/docs/)
- [Helm Chart作者指南](https://helm.sh/docs/chart_template_guide/)
- [Helm仓库最佳实践](https://helm.sh/docs/topics/chart_repository/)
