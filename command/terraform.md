terraform
===

基础设施即代码（IaC）工具

## 补充说明

**terraform命令** 是由HashiCorp公司开发的开源基础设施即代码（IaC）工具。Terraform允许用户使用声明式语言定义云基础设施，并自动执行资源的创建、修改和销毁。

Terraform支持多种云提供商（AWS、Azure、GCP等）和本地基础设施，是DevOps领域最重要的工具之一。

### 安装

`shell
# macOS (Homebrew)
brew install terraform

# Ubuntu/Debian
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com  main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install terraform

# CentOS/RHEL
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com  main" | sudo tee /etc/yum.repos.d/hashicorp.repo
sudo yum install terraform

# 直接下载安装
version=1.6.0
wget https://releases.hashicorp.com/terraform//terraform__linux_amd64.zip
unzip terraform__linux_amd64.zip
sudo mv terraform /usr/local/bin/

# 验证安装
terraform --version
`

### 语法

`shell
terraform [command]
`

### 常用命令

`shell
init            初始化工作目录
plan            生成并查看变更计划
apply           应用变更到基础设施
destroy         销毁基础设施
validate        验证配置文件语法
fmt             格式化配置文件
import          导入现有资源到Terraform状态
output          查看输出值
refresh         更新状态文件以匹配实际基础设施
state           管理状态文件
taint           标记资源需要重建
untaint         取消标记资源
providers       查看已安装的提供者
modules         管理模块
workspaces      管理工作区
`

### 实例

`shell
# 初始化Terraform工作目录
terraform init

# 初始化并获取指定版本
terraform init -backend-config=region=us-west-2

# 查看计划（不实际执行）
terraform plan

# 查看计划并指定变量
terraform plan -var='instance_type=t2.micro'

# 查看计划并保存到文件
terraform plan -out=tfplan

# 应用计划
terraform apply

# 应用预保存的计划
terraform apply tfplan

# 自动确认（不提示）
terraform apply -auto-approve

# 指定变量文件
terraform apply -var-file=production.tfvars

# 查看输出
terraform output

# 查看特定输出
terraform output instance_ip

# 格式化配置文件
terraform fmt

# 格式化指定目录
terraform fmt ./modules

# 验证配置文件语法
terraform validate

# 验证并显示详细错误
terraform validate -detail

# 销毁基础设施
terraform destroy

# 销毁并自动确认
terraform destroy -auto-approve

# 导入现有资源
terraform import aws_instance.my_server i-12345678

# 标记资源需要重建
terraform taint aws_instance.web

# 取消标记资源
terraform untaint aws_instance.web

# 刷新状态
terraform refresh

# 查看状态
terraform state list

# 查看特定资源状态
terraform state show aws_instance.web

# 移动资源到新的地址
terraform state mv aws_instance.old aws_instance.new

# 复制资源状态
terraform state cp aws_instance.source aws_instance.destination

# 移除资源（不从实际基础设施删除）
terraform state rm aws_instance.web

# 查看提供者信息
terraform providers

# 查看模块信息
terraform modules

# 创建工作区
terraform workspace new development

# 列出工作区
terraform workspace list

# 切换工作区
terraform workspace select development

# 删除工作区
terraform workspace delete staging

# 显示当前工作区
terraform workspace show

# 使用远程后端（Terraform Cloud）
terraform init -backend-config=bucket=my-terraform-state \
  -backend-config=key=prod/terraform.tfstate \
  -backend-config=region=us-west-2

# 锁定状态文件
terraform force-unlock lock_id

# 生成JSON格式的计划
terraform plan -json > plan.json

# 生成JSON格式的输出
terraform output -json

# 查看依赖关系
terraform graph

# 将图形输出为DOT格式
terraform graph > dependency.dot

# 查看资源计划变更
terraform plan -target=aws_instance.web

# 仅计划特定模块
terraform plan -target=module.database

# 排除特定资源
terraform plan -target=!aws_instance.excluded

# 使用替代提供者
terraform init -plugin-dir=./custom-plugins

# 检查提供者更新
terraform providers -refresh=false

# 清理未使用的提供者
terraform providers -lock=false

# 执行计划并发送邮件通知
terraform plan -out=tfplan && \
terraform apply -auto-approve tfplan && \
terraform output -json | mail -s "Terraform Update" admin@example.com

# 多环境配置
# 创建环境目录结构：
# project/
# ├── main.tf
# ├── variables.tf
# ├── outputs.tf
# ├── environments/
# │   ├── dev/
# │   │   └── terraform.tfvars
# │   ├── staging/
# │   │   └── terraform.tfvars
# │   └── prod/
# │       └── terraform.tfvars

# 使用不同环境
cd environments/dev
terraform init
terraform plan -var-file=dev.tfvars
terraform apply -var-file=dev.tfvars

# 使用远程状态
terraform remote config -backend=S3 -backend-config=bucket=my-terraform-state \
  -backend-config=key=prod/terraform.tfstate -backend-config=region=us-east-1

# 检查配置合规性
terraform plan -detailed-exitcode

# 退出码说明：
# 0 - 没有变更
# 1 - 错误
# 2 - 有变更

# 生成文档
terraform-docs markdown . > README.md

# 检查安全漏洞
terrascan run

# 扫描配置错误
checkov -d .

# 查看Terraform版本
terraform version

# 查看支持的提供者版本
terraform providers -json

# 更新提供者
terraform init -upgrade

# 锁定提供者版本
terraform init -lock=true

# 跳过提供者验证
terraform init -skip-provider-schema-validation

# 使用本地提供者
terraform init -get-plugins=false

# 调试模式
terraform plan -debug

# 详细日志
TF_LOG=TRACE terraform plan

# 设置超时
terraform apply -timeout=30m

# 并行度控制
terraform apply -parallelism=10

# 使用替代源
terraform init -mirror=https://mirror.example.com

# 验证签名
terraform init -verify-plugins=true

# 查看历史变更
terraform state pull > state.json

# 批量更新资源
terraform apply -target=aws_instance.web -target=aws_security_group.sg

# 条件应用
terraform apply -target=module.production -var-file=prod.tfvars

# 预览变更
terraform plan -diff

# 查看资源属性
terraform state show aws_instance.web | grep -A5 'tags:'
`

### 配置文件示例

`hcl
# main.tf
provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "web" {
  ami           = var.ami_id
  instance_type = var.instance_type

  tags = {
    Name        = "web-server"
    Environment = var.environment
  }
}

variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}

variable "ami_id" {
  description = "AMI ID"
  type        = string
}

variable "instance_type" {
  description = "Instance type"
  type        = string
  default     = "t2.micro"
}

variable "environment" {
  description = "Environment name"
  type        = string
}

output "instance_ip" {
  description = "Web server public IP"
  value       = aws_instance.web.public_ip
}
`

### 状态文件

`shell
# 状态文件默认位置
.terraform/terraform.tfstate

# 远程状态配置（S3示例）
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-west-2"
    dynamodb_table = "terraform-locks"
    encrypt = true
  }
}

# 状态锁定
# 使用DynamoDB表进行状态锁定
dynamodb_table = "terraform-locks"
`

### 模块化开发

`shell
# 创建模块
mkdir modules/vpc
cat > modules/vpc/main.tf <<EOF
resource "aws_vpc" "main" {
  cidr_block = var.cidr_block
  tags = {
    Name = var.vpc_name
  }
}
EOF

# 使用模块
module "vpc" {
  source     = "./modules/vpc"
  cidr_block = "10.0.0.0/16"
  vpc_name   = "main-vpc"
}
`

### 注意

1. Terraform状态文件包含敏感信息，应加密存储并限制访问。
2. 生产环境建议使用远程后端（如S3+DynamoDB）进行状态管理。
3. 使用工作区（workspaces）管理不同环境。
4. 定期执行	erraform plan检查基础设施漂移。
5. 使用-target参数可以精确控制要管理的资源。
6. 建议将Terraform配置纳入版本控制系统。
7. 使用	erraform fmt保持代码风格一致。

### 相关命令

- packer — 虚拟机镜像构建工具
- consul — 服务发现和配置管理
- agrant — 开发环境管理

### 参考链接

- [Terraform官方文档](https://www.terraform.io/docs/)
- [Terraform Providers](https://registry.terraform.io/browse/providers)
- [Terraform Modules](https://www.terraform.io/docs/modules/)
