vault
===

秘密管理和防护工具

## 补充说明

**vault命令** 是由HashiCorp开发的工具，用于保护敏感数据（如API密钥、密码、证书等），并严格控制对数据的访问。Vault提供动态秘密、数据加密即服务、访问控制审计日志等功能。

Vault是DevSecOps领域的重要工具，广泛应用于云原生环境中的秘密管理。

### 安装

`shell
# macOS (Homebrew)
brew install vault

# Ubuntu/Debian
wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com  main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install vault

# 直接下载安装
version=1.15.0
wget https://releases.hashicorp.com/vault//vault__linux_amd64.zip
unzip vault__linux_amd64.zip
sudo mv vault /usr/local/bin/

# 验证安装
vault version
`

### 语法

`shell
vault [command]
`

### 常用命令

`shell
server          启动Vault服务器
login           认证
policy          管理策略
secret          管理秘密
auth            管理认证方法
kv              键值存储
pki             公钥基础设施
transit         加密即服务
audit           管理审计设备
operator        运维操作
config          配置Vault
policy          管理策略
namespace       命名空间管理
workspace       工作区管理
`

### 实例

`shell
# 启动开发模式服务器（仅用于测试）
vault server -dev

# 启动生产模式服务器
vault server -config=vault.hcl

# 设置Vault地址
export VAULT_ADDR=http://127.0.0.1:8200

# 设置Root Token
export VAULT_TOKEN=hvs.examples

# 检查Vault状态
vault status

# 初始化Vault
vault operator init -key-shares=5 -key-threshold=3

# 解封Vault
vault operator unseal

# 查看未密封状态
vault operator unseal -status

# 认证
vault login

# 使用Token登录
vault login hvs.examples

# 使用AppRole认证
vault write auth/approle/login role_id=<role_id> secret_id=<secret_id>

# 使用Kubernetes认证
vault write auth/kubernetes/login role=<role> jwt=<jwt_token>

# 使用LDAP认证
vault write auth/ldap/login username=<username> password=<password>

# 读取秘密
vault kv get secret/my-secret

# 读取特定版本
vault kv get -version=2 secret/my-secret

# 写入秘密
vault kv put secret/my-secret username=admin password=secret123

# 批量写入秘密
vault kv put secret/my-secret   username=admin   password=secret123   api_key=abc123

# 删除秘密
vault kv delete secret/my-secret

# 软删除秘密
vault kv metadata delete secret/

# 恢复删除的秘密
vault kv undelete -versions=1,2 secret/

# 永久删除秘密
vault kv destroy -versions=1 secret/

# 列出秘密
vault kv list secret/

# 启用KV v2引擎
vault secrets enable -version=2 kv

# 读取PKI证书
vault read pki/issue/my-role   common_name=example.com   ttl=24h

# 生成动态密码
vault read database/creds/my-db-role

# 读取动态凭证
vault read aws/creds/my-role

# 吊销凭证
vault write auth/aws-client/deny-boostrap   identity_token=

# 管理策略
vault policy write my-policy - <<EOF
path "secret/data/my-app/*" {
  capabilities = ["read", "list"]
}
path "secret/metadata/my-app/*" {
  capabilities = ["list"]
}
EOF

# 查看策略
vault policy read my-policy

# 列出所有策略
vault policy list

# 管理认证方法
vault auth list

# 启用JWT认证
vault auth enable jwt

# 配置JWT认证
vault write auth/jwt/config   role=my-role   bound_issuer=https://accounts.google.com   jwt_validation_pubkeys=<pub_key>

# 管理审计设备
vault audit enable file file_path=/tmp/vault-audit.log

# 列出审计设备
vault audit list

# 禁用审计设备
vault audit disable file

# 生成一次性密码
vault token create -num-use=1

# 创建角色令牌
vault token create -role=my-role

# 查看令牌信息
vault token lookup

# 吊销令牌
vault token revoke hvs.examples

# 提升令牌权限
vault token capabilities my-token read write

# 管理命名空间
vault namespace create engineering

# 列出命名空间
vault namespace list

# 在工作区中操作
vault workspace list
vault workspace new dev
vault workspace select dev

# 加密数据
vault write transit/encrypt/my-key   plaintext=

# 解密数据
vault read transit/decrypt/my-key   ciphertext=vault:v2:xxxxx

# 生成数据签名
vault write transit/sign/my-key   payload=

# 验证签名
vault write transit/verify/my-key   payload=   signature=vault:v1:xxxxx

# 密钥版本管理
vault list transit/keys

# 配置TLS
vault operator tls-gen   common-name=vault.example.com   out-dir=/tmp/vault-tls

# 备份状态
vault operator raft snapshot save backup.snap

# 恢复状态
vault operator raft snapshot restore backup.snap

# 查看快照信息
vault operator raft snapshot info backup.snap

# 手动引发领导选举
vault operator raft step-down

# 查看Vault日志
vault log

# 设置日志级别
vault log debug

# 健康检查
curl http://127.0.0.1:8200/v1/sys/health

# 查看性能副本状态
vault status -address=https://performance-peer-1:8200

# 迁移命名空间
vault namespace migrate from/to

# 导出秘密
vault kv get -format=json secret/my-secret > secret.json

# 导入秘密
vault kv put secret/imported @secret.json

# 使用Vault Agent自动注入秘密
vault agent -config=agent.hcl

# 模板渲染
vault write -field=template my-template template=@template.tmpl

# 管理数据库秘密引擎
vault write database/config/my-db   plugin_name=postgresql-database-plugin   allowed_roles=db-role   connection_url="postgresql://{{username}}:{{password}}@db.example.com:5432/mydb"   username="vault"   password="vault_password"

# 创建数据库角色
vault write database/roles/db-role   db_name=my-db   creation_statements="CREATE ROLE "{{name}}" WITH LOGIN PASSWORD '{{password}}' VALID UNTIL '{{expiration}}'; GRANT SELECT ON ALL TABLES IN SCHEMA public TO "{{name}}";"   default_ttl="1h"   max_ttl="24h"

# 读取动态数据库凭证
vault read database/creds/db-role

# 管理Consul集成
vault write consul/config/access   address=consul.example.com:8501   tls_ca_cert=/path/to/ca.pem   client_cert=/path/to/consul-agent.cert.pem   client_key=/path/to/consul-agent.key.pem

# 创建Consul角色
vault write consul/roles/my-consul-role   permission=simple-policy   policies=default   ttl=1h

# 获取Consul令牌
vault read consul/creds/my-consul-role

# 管理AWSSecrets Manager集成
vault write aws/config/root   access_key=AKIAIOSFODNN7EXAMPLE   secret_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY   region=us-west-2

# 创建AWS角色
vault write aws/roles/my-aws-role   credential_type=iam_user   iam_max_ttl=3600s   policies=my-policy   ttl=300

# 获取AWS凭证
vault read aws/creds/my-aws-role

# 管理GCP集成
vault write gcp/config   credentials=@gcp-credentials.json

# 创建GCP角色
vault write gcp/roles/my-gcp-role   project=my-project   bindings=[
    {
      resources=["//cloudresourcemanager.googleapis.com/projects/my-project"],
      roles=["roles/viewer"]
    }
  ]

# 获取GCP凭证
vault read gcp/creds/my-gcp-role

# 管理Azure集成
vault write azure/config   subscription_id=12345678-1234-1234-1234-123456789012   tenant_id=87654321-4321-4321-4321-210987654321   client_id=11111111-1111-1111-1111-111111111111   client_secret=my-client-secret

# 创建Azure角色
vault write azure/roles/my-azure-role   azure_roles=[
    {
      role_id=12345678-1234-1234-1234-123456789012
      permissions=roles
    }
  ]

# 获取Azure凭证
vault read azure/creds/my-azure-role

# 管理Kubernetes集成
vault write kubernetes/config   kubernetes_host=https://kubernetes.default.svc   kubernetes_ca_cert=@ca.crt

# 创建Kubernetes角色
vault write kubernetes/roles/my-k8s-role   bound_service_account_names=my-app   bound_service_account_namespaces=default   policies=my-app-policy   ttl=1h

# Kubernetes认证
vault write auth/kubernetes/login   role=my-k8s-role   jwt=<service-account-token>

# 管理SSH秘密引擎
vault write ssh/roles/my-signing-key   key_type=otp   default_ttl=1h   max_ttl=24h

# 生成SSH证书
vault read ssh/sign/my-signing-key   cidr_list=10.0.0.0/8   public_key=@id_rsa.pub

# 管理PKI引擎
vault write pki/config/urls   issuing_certificates=http://127.0.0.1:8200/v1/pki/ca   crl_distribution_points=http://127.0.0.1:8200/v1/pki/crl

# 创建PKI角色
vault write pki/roles/my-domain   allowed_domains=example.com   allow_subdomains=true   max_ttl=72h

# 生成证书
vault read pki/issue/my-domain   common_name=www.example.com   alt_names=api.example.com,api2.example.com

# 吊销证书
vault write pki/revoke   certificate=<pem_bundle>

# 旋转根CA
vault write pki/root/rotate

# 管理Transit引擎
vault write transit/keys/my-key   converance=required   min_decryption_version=1   min_encryption_version=3   deletion_allowed=true   derived=true   exportable=true   allow_plaintext_backup=true

# 配置性能副本
vault operator raft add-peers \
  -peer=https://peer1:8200 \
  -peer=https://peer2:8200

# 配置存储后端
# consul://consul.example.com:8501/vault
# s3://bucket-name
# postgresql://user:pass@db:5432/vault
# mysql://user:pass@db:3306/vault
# zookeeper://zk1:2181,zk2:2181/vault
# etcd://etcd1:2379,etcd2:2379/vault

# 配置HA
vault server -config='{
  "listener": [{"tcp": {"address": "0.0.0.0:8200", "tls_disable": 1}}],
  "storage": {"consul": {"address": "consul.example.com:8501", "path": "vault"}},
  "cluster_address": ":8201"
}'

# 管理 seals
vault operator seal
vault operator unseal
vault operator unseal -reset

# 查看密封状态
vault operator unseal -status

# 迁移密封密钥
vault operator key-recover

# 配置自动解封
vault operator raft autopilot set-config   cleanup-orphaned-peers=true   reduction-window=30s   voter-strategy=up-to-date

# 监控性能
vault status -format=json | jq '.sealed'

# 查看指标
curl http://127.0.0.1:8200/v1/sys/metrics

# 健康检查端点
curl http://127.0.0.1:8200/v1/sys/health

# 查看就绪状态
curl -s http://127.0.0.1:8200/v1/sys/health | jq '.ready'

# 查看初始化状态
curl -s http://127.0.0.1:8200/v1/sys/health | jq '.initialized'

# 查看密封状态
curl -s http://127.0.0.1:8200/v1/sys/health | jq '.sealed'
`

### 配置文件示例

`hcl
# vault.hcl
storage "consul" {
  address = "consul.example.com:8501"
  path    = "vault"
  tls_skip_verify = true
}

listener "tcp" {
  address     = "0.0.0.0:8200"
  tls_disable = 1
}

telemetry {
  statsite_address = "statsite.example.com:8125"
  statsd_address   = "statsd.example.com:8125"
}

default_lease_ttl = "768h"
max_lease_ttl     = "768h"
`

### 安全最佳实践

`shell
# 1. 使用生产模式而非开发模式
vault server -config=vault.hcl

# 2. 启用TLS
listener "tcp" {
  address       = "0.0.0.0:8200"
  tls_cert_file = "/path/to/cert.pem"
  tls_key_file  = "/path/to/key.pem"
}

# 3. 使用合适的密封机制
# Shamir密封（默认）
# AWS KMS密封
# Azure Key Vault密封
# GCP Cloud KMS密封

# 4. 定期轮换根令牌
vault token revoke -prefix hvs.root

# 5. 使用最小权限原则
vault policy write readonly - <<EOF
path "secret/*" {
  capabilities = ["read", "list"]
}
EOF

# 6. 启用审计日志
vault audit enable file file_path=/var/log/vault/audit.log

# 7. 定期备份
vault operator raft snapshot save backup.snap

# 8. 监控和告警
# 配置StatsD或Statsite发送指标
`

### 注意

1. 生产环境务必使用密封模式启动Vault服务器。
2. 根令牌应该安全存储并限制访问。
3. 定期轮换秘密和证书。
4. 启用审计日志以满足合规要求。
5. 使用TLS加密所有Vault通信。
6. 定期备份Vault数据。
7. 实施最小权限原则配置策略。

### 相关命令

- consul — 服务发现和配置
- 	erraform — 基础设施即代码
- packer — 虚拟机镜像构建

### 参考链接

- [Vault官方文档](https://www.vaultproject.io/docs)
- [Vault安全指南](https://www.vaultproject.io/docs/security)
- [Vault最佳实践](https://www.vaultproject.io/docs/best-practices)
