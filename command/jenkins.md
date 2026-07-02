jenkins
===

自动化持续集成和持续交付服务器

## 补充说明

**jenkins命令** 是一个开源的自动化服务器，主要用于持续集成、持续交付和自动化软件研发相关任务。Jenkins通过插件系统扩展功能，支持各种构建、测试和部署任务。

Jenkins是CI/CD领域最流行的工具之一，可以与各种版本控制系统、构建工具和部署平台集成。

### 安装

```shell# Ubuntu/Debian
wget -q -O - https://packages.jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
echo "deb https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins.list
sudo apt-get update
sudo apt-get install jenkins

# CentOS/RHEL
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
sudo yum install jenkins

# macOS (Homebrew)
brew install jenkins-lts

# Docker方式
docker run -d -p 8080:8080 -p 50000:50000 --name=jenkins jenkins/jenkins:lts

# 验证安装
jenkins --version
`

### 语法

`shelljenkins [command]
`

### 常用命令

`shelljenkins-cli    通过命令行接口管理Jenkins
webstart       生成WebStart JNLP文件
help           显示帮助信息
version        显示版本
`

### 实例

```shell# 启动Jenkins服务
sudo systemctl start jenkins

# 查看Jenkins状态
sudo systemctl status jenkins

# 设置开机自启
sudo systemctl enable jenkins

# 查看Jenkins日志
sudo tail -f /var/log/jenkins/jenkins.log

# 获取初始管理员密码
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

# 通过Jenkins CLI连接
java -jar jenkins-cli.jar -s http://localhost:8080/ help

# 列出所有任务
java -jar jenkins-cli.jar -s http://localhost:8080/ list-jobs

# 构建指定任务
java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job

# 构建并等待完成
java -jar jenkins-cli.jar -s http://localhost:8080/ build my-job -w

# 查看任务状态
java -jar jenkins-cli.jar -s http://localhost:8080/ console my-job #1

# 停止任务
java -jar jenkins-cli.jar -s http://localhost:8080/ stop my-job #1

# 重启Jenkins
java -jar jenkins-cli.jar -s http://localhost:8080/ safe-restart

# 立即重启
java -jar jenkins-cli.jar -s http://localhost:8080/ restart

# 卸载Jenkins
java -jar jenkins-cli.jar -s http://localhost:8080/ exit

# 创建新任务（通过XML配置）
java -jar jenkins-cli.jar -s http://localhost:8080/ create-job my-job < job.xml

# 更新现有任务
java -jar jenkins-cli.jar -s http://localhost:8080/ update-job my-job < job.xml

# 删除任务
java -jar jenkins-cli.jar -s http://localhost:8080/ delete-job my-job

# 获取任务配置
java -jar jenkins-cli.jar -s http://localhost:8080/ get-job my-job

# 列出所有插件
java -jar jenkins-cli.jar -s http://localhost:8080/ list-plugins

# 安装插件
java -jar jenkins-ci.jar -s http://localhost:8080/ install-plugin git

# 更新插件
java -jar jenkins-cli.jar -s http://localhost:8080/ install-plugin git:latest

# 卸载插件
java -jar jenkins-cli.jar -s http://localhost:8080/ uninstall-plugin git

# 重启后自动安装插件
java -jar jenkins-cli.jar -s http://localhost:8080/ safe-restart

# 获取系统信息
java -jar jenkins-cli.jar -s http://localhost:8080/ system-info

# 查看节点列表
java -jar jenkins-cli.jar -s http://localhost:8080/ list-nodes

# 离线节点
java -jar jenkins-cli.jar -s http://localhost:8080/ offline-node node1

# 在线节点
java -jar jenkins-cli.jar -s http://localhost:8080/ online-node node1

# 删除节点
java -jar jenkins-cli.jar -s http://localhost:8080/ delete-node node1

# 查看队列中的任务
java -jar jenkins-cli.jar -s http://localhost:8080/ queue

# 取消队列中的任务
java -jar jenkins-cli.jar -s http://localhost:8080/ cancel-queue 123

# 获取Jenkins版本
java -jar jenkins-cli.jar -s http://localhost:8080/ version

# 查看帮助
java -jar jenkins-cli.jar -s http://localhost:8080/ help

# 通过API创建Job
curl -X POST http://jenkins:8080/createItem \
  -u admin:password \
  -H "Content-Type: text/xml" \
  -d @job-config.xml

# 通过API构建Job
curl -X POST http://jenkins:8080/job/my-job/build \
  -u admin:password

# 通过API获取Job状态
curl http://jenkins:8080/job/my-job/lastBuild/api/json \
  -u admin:password

# 通过API获取构建日志
curl http://jenkins:8080/job/my-job/1/consoleText \
  -u admin:password

# 配置Jenkins环境变量
# 编辑 /etc/default/jenkins
JENKINS_HOME="/var/lib/jenkins"
JENKINS_PORT="8080"
JENKINS_JAVA_OPTIONS="-Djava.awt.headless=true -Xmx512m"

# 配置Java堆大小
# 编辑 /etc/default/jenkins
JENKINS_JAVA_OPTIONS="-Xms256m -Xmx1024m"

# 配置HTTPS
# 在jenkins.xml中配置SSL连接器

# 配置反向代理
# Nginx配置示例：
# server {
#     listen 80;
#     server_name jenkins.example.com;
#     location / {
#         proxy_pass http://localhost:8080;
#         proxy_set_header Host \System.Management.Automation.Internal.Host.InternalHost;
#         proxy_set_header X-Real-IP \;
#     }
# }

# 备份Jenkins配置
sudo tar -czf jenkins-backup.tar.gz /var/lib/jenkins/

# 恢复Jenkins配置
sudo tar -xzf jenkins-backup.tar.gz -C /

# 查看Jenkins插件列表
curl http://localhost:8080/pluginManager/api/xml?depth=1\&xpath=/*/*/shortName|/*/*/version&wrapper=plugins

# 更新所有插件
curl -X POST http://localhost:8080/pluginManager/upgradeAllSecurityIssues

# 查看Jenkins系统配置
curl http://localhost:8080/config.xml

# 修改Jenkins系统配置
curl -X POST http://localhost:8080/configSubmit \
  -u admin:password \
  -H "Content-Type: text/xml" \
  -d @new-config.xml

# 创建用户
curl -X POST http://localhost:8080/securityRealm/createAccount \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=newuser&password=password&password2=password&full_name=New+User"

# 查看构建历史
curl http://localhost:8080/job/my-job/api/json

# 查看特定构建
curl http://localhost:8080/job/my-job/1/api/json

# 下载构建产物
curl -O http://localhost:8080/job/my-job/1/artifact/path/to/file

# 配置Webhook
# GitHub Webhook配置：
# URL: http://jenkins:8080/github-webhook/
# 触发器: Push事件

# 配置Pipeline
# Jenkinsfile示例：
# pipeline {
#     agent any
#     stages {
#         stage('Build') {
#             steps {
#                 sh 'mvn clean package'
#             }
#         }
#         stage('Test') {
#             steps {
#                 sh 'mvn test'
#             }
#         }
#         stage('Deploy') {
#             steps {
#                 sh 'kubectl apply -f deployment.yaml'
#             }
#         }
#     }
# }

# 查看Jenkins脚本控制台
# 访问 http://jenkins:8080/script

# 通过Groovy脚本批量操作
# 在脚本控制台中执行：
Jenkins.instance.items.each { job ->
    println job.name
}

# 配置邮件通知
# 在系统配置中配置SMTP服务器

# 配置Git凭据
# 在凭据管理中添加Git用户名密码或SSH密钥

# 查看Jenkins版本信息
java -jar jenkins-cli.jar -s http://localhost:8080/ version

# 检查Jenkins健康状态
curl http://localhost:8080/healthCheck/api/json

# 查看Jenkins线程信息
curl http://localhost:8080/threadDump

# 配置Jenkins系统属性
# 在jenkins.xml中添加：
# <arguments>-Dhudson.model.DirectoryBrowserSupport.CSP=</arguments>
`

### 常用插件

```shell# 核心插件
Git Plugin
GitHub Plugin
Pipeline Plugin
Credentials Plugin
Workspace Cleanup Plugin

# 构建工具插件
Maven Plugin
Gradle Plugin
Ant Plugin

# 部署插件
Docker Plugin
Kubernetes Plugin
SSH Plugin

# 报告插件
JUnit Plugin
HTML Publisher Plugin
Cobertura Plugin

# 通知插件
Email Extension Plugin
Slack Notification Plugin
Microsoft Teams Plugin
`

### 目录结构

```shell/var/lib/jenkins/           # Jenkins主目录
/var/log/jenkins/           # 日志目录
/etc/sysconfig/jenkins      # 系统配置
/usr/lib/jenkins/           # 安装目录
`

### 注意

1. 首次安装后需要输入初始管理员密码进行配置。
2. 建议配置定期备份Jenkins主目录。
3. 生产环境应启用HTTPS和适当的认证机制。
4. 合理配置Java堆大小以避免OutOfMemory错误。
5. 使用Pipeline作为主要的构建方式，便于版本控制和复用。

### 相关命令

- docker — 容器化工具
- kubectl — Kubernetes集群管理
- nsible — 自动化运维工具

### 参考链接

- [Jenkins官方文档](https://www.jenkins.io/doc/)
- [Jenkins插件市场](https://plugins.jenkins.io/)
- [Jenkins Pipeline语法](https://www.jenkins.io/doc/book/pipeline/)
