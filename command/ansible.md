ansible
===

自动化运维和配置管理工具

## 补充说明

**ansible命令** 是一款强大的自动化运维工具，基于Python开发，采用SSH协议进行远程管理，无需在被管理节点安装代理。Ansible可以实现自动化部署、配置管理、应用部署、任务编排等多种IT自动化需求。

Ansible的核心特点是：无代理架构（Agentless）、幂等性（Idempotent）、使用YAML格式的Playbook描述自动化任务、基于SSH通信、模块化设计等。它使用简单直观，适合中小规模的自动化运维场景。

### 安装

```shell
# Ubuntu/Debian
apt-get update
apt-get install ansible

# CentOS/RHEL
yum install epel-release
yum install ansible

# 使用pip安装（推荐，获取最新版本）
pip install ansible

# macOS (Homebrew)
brew install ansible

# 验证安装
ansible --version
```

### 语法

```shell
ansible [options] <host-pattern>
ansible-playbook [options] <playbook-file>
```

### 常用命令

```shell
ansible            执行临时命令
ansible-playbook   执行Playbook
ansible-galaxy     管理角色和集合
ansible-console    交互式控制台
ansible-doc        查看模块文档
ansible-inventory  显示库存信息
ansible-pull       从远程拉取配置
ansible-vault       加密/解密文件
ansible-config      显示配置
ansible-test        运行测试
```

### 实例

```shell
# 基本用法：ping所有主机
ansible all -m ping

# ping指定组的主机
ansible webservers -m ping

# 执行简单命令
ansible all -a "/usr/bin/uptime"

# 查看主机信息
ansible all -m setup

# 查看特定fact
ansible all -m setup -a "filter=ansible_os_family"

# 安装软件包
ansible webservers -m apt -a "name=nginx state=present"

# 管理服务
ansible webservers -m service -a "name=nginx state=started enabled=yes"

# 创建目录
ansible all -m file -a "path=/opt/myapp state=directory owner=root group=root mode=0755"

# 创建文件
ansible all -m copy -a "src=/local/file.txt dest=/remote/file.txt owner=root mode=0644"

# 从模板部署文件
ansible all -m template -a "src=template.j2 dest=/etc/myapp/config.yaml"

# 执行脚本
ansible all -m script -a "/scripts/deploy.sh"

# 下载文件
ansible all -m get_url -a "url=https://example.com/file.tar.gz dest=/tmp/"

# 压缩文件
ansible all -m unarchive -a "src=/tmp/file.tar.gz dest=/opt/ remote_src=yes"

# 删除文件或目录
ansible all -m file -a "path=/tmp/oldfile state=absent"

# 查看日志
ansible all -m shell -a "tail -n 50 /var/log/syslog"

# 批量重启服务
ansible webservers -m shell -a "systemctl restart nginx"

# 使用become提权
ansible all -m ping -b --become-user=root

# 指定SSH端口
ansible all -m ping -c ssh --connection-options "port=2222"

# 并发执行
ansible all -m ping -f 10

# 限制输出
ansible all -m ping -o

# 使用vault加密
ansible-vault encrypt secret.yml
ansible-vault decrypt secret.yml
ansible-vault view secret.yml
ansible-vault edit secret.yml

# 创建新的vault文件
ansible-vault create secret.yml

# 使用vault运行playbook
ansible-playbook site.yml --ask-vault-pass

# 查看模块文档
ansible-doc apt
ansible-doc service
ansible-doc copy

# 查看所有可用模块
ansible-doc -l

# 搜索模块
ansible-doc -S nginx

# 显示库存
ansible-inventory --list
ansible-inventory --graph

# 测试playbook语法
ansible-playbook site.yml --syntax-check

# 模拟执行（dry-run）
ansible-playbook site.yml --check

# 只运行指定的任务
ansible-playbook site.yml --tags "install"

# 跳过指定的任务
ansible-playbook site.yml --skip-tags "restart"

# 限制执行的主机
ansible-playbook site.yml --limit "web1,web2"

# 使用角色
ansible-galaxy install geerlingguy.nginx

# 列出已安装的角色
ansible-galaxy list

# 从requirements文件安装角色
ansible-galaxy install -r requirements.yml

# 创建新角色
ansible-galaxy init myrole

# 创建集合
ansible-galaxy collection init mynamespace.mycollection

# 发布集合到Galaxy
ansible-galaxy collection publish mycollection-1.0.0.tar.gz

# 搜索集合
ansible-galaxy collection search nginx

# 创建Playbook示例
---
# site.yml
hosts: webservers
become: yes
tasks:
  - name: Install nginx
    apt:
      name: nginx
      state: present
  - name: Start nginx
    service:
      name: nginx
      state: started
      enabled: yes
  - name: Deploy config
    template:
      src: nginx.conf.j2
      dest: /etc/nginx/nginx.conf
    notify: Restart nginx

handlers:
  - name: Restart nginx
    service:
      name: nginx
      state: restarted

# 执行Playbook
ansible-playbook site.yml

# 执行Playbook并指定变量
ansible-playbook site.yml -e "nginx_port=8080"

# 执行Playbook并指定inventory文件
ansible-playbook site.yml -i inventory.ini

# 使用adhoc命令批量更新系统
ansible all -m shell -a "yum update -y" --limit centos_servers

# 批量检查磁盘空间
ansible all -m shell -a "df -h" -o

# 批量收集系统信息
ansible all -m setup -a "filter=ansible_*" -o > system_info.json

# 使用shell模块执行复杂命令
ansible all -m shell -a "ps aux | grep nginx | grep -v grep | wc -l"

# 使用lineinfile修改配置文件
ansible webservers -m lineinfile -a "path=/etc/nginx/nginx.conf line=\"worker_processes auto;\" insertafter=\"#worker_processes\""

# 使用block组织任务
---
tasks:
  - block:
      - name: Task 1
        apt:
          name: pkg1
      - name: Task 2
        apt:
          name: pkg2
    rescue:
      - name: Recovery task
        debug:
          msg: "Rescue executed"
    always:
      - name: Always run
        debug:
          msg: "Always executed"

# 使用when条件执行
---
tasks:
  - name: Install nginx on Debian
    apt:
      name: nginx
    when: ansible_os_family == "Debian"
  - name: Install nginx on RedHat
    yum:
      name: nginx
    when: ansible_os_family == "RedHat"

# 使用loop循环
---
tasks:
  - name: Create users
    user:
      name: "{{ item }}"
      state: present
    loop:
      - alice
      - bob
      - charlie

# 使用register保存结果
---
tasks:
  - name: Check if file exists
    stat:
      path: /etc/myapp/config.yaml
    register: config_file

  - name: Deploy config if not exists
    copy:
      src: config.yaml
      dest: /etc/myapp/config.yaml
    when: not config_file.stat.exists

# 使用notify和handlers
---
tasks:
  - name: Update nginx config
    template:
      src: nginx.conf.j2
      dest: /etc/nginx/nginx.conf
    notify: Reload nginx

handlers:
  - name: Reload nginx
    service:
      name: nginx
      state: reloaded

# 使用role结构
myrole/
├── tasks/
│   └── main.yml
├── handlers/
│   └── main.yml
├── templates/
│   └── config.j2
├── files/
│   └── app.tar.gz
├── vars/
│   └── main.yml
├── defaults/
│   └── main.yml
└── meta/
    └── main.yml

# 在playbook中使用role
---
hosts: webservers
roles:
  - common
  - nginx
  - myapp

# 使用tags标记任务
---
tasks:
  - name: Install packages
    apt:
      name: "{{ item }}"
    loop: [pkg1, pkg2]
    tags: [install, packages]

  - name: Configure service
    template:
      src: service.conf.j2
      dest: /etc/service.conf
    tags: [configure]

  - name: Restart service
    service:
      name: service
      state: restarted
    tags: [restart]

# 执行指定tag的任务
ansible-playbook site.yml --tags "install,configure"

# 跳过指定tag的任务
ansible-playbook site.yml --skip-tags "restart"
```

### Inventory文件格式

```ini
# 主机分组
[webservers]
web1.example.com ansible_host=192.168.1.10
web2.example.com ansible_host=192.168.1.11

[databases]
db1.example.com ansible_host=192.168.1.20

[production:children]
webservers
databases

# 变量定义
[webservers:vars]
http_port=80
max_clients=200

# 指定SSH参数
web3.example.com ansible_port=2222 ansible_user=admin
```

### 配置文件

```shell
# 主配置文件
/etc/ansible/ansible.cfg

# 默认inventory
/etc/ansible/hosts

# 用户配置
~/.ansible.cfg

# 常用配置项
[defaults]
inventory = /etc/ansible/hosts
remote_user = root
log_path = /var/log/ansible.log
host_key_checking = False
retry_files_enabled = False
forks = 50

[privilege_escalation]
become = True
become_method = sudo
become_user = root
become_ask_pass = False
```

### 注意

1. Ansible默认使用SSH连接，需要确保目标主机开放SSH端口且SSH密钥配置正确。
2. 被管理节点不需要安装Agent，只需要Python 2.7或Python 3.5+。
3. 使用`--check`模式可以模拟执行，不会实际修改目标主机。
4. 敏感信息（如密码）应该使用Ansible Vault加密存储。
5. Playbook具有幂等性，多次执行不会产生副作用。
6. 建议使用roles组织复杂的自动化任务，提高代码复用性。
7. 使用`--limit`参数可以限制执行范围，避免误操作。
8. 生产环境建议先在测试环境验证Playbook，再应用到生产环境。

### 相关命令

- `ansible-playbook` — 执行Playbook
- `ansible-vault` — 加密解密文件
- `ansible-galaxy` — 管理角色和集合
- `ansible-doc` — 查看模块文档

### 参考链接

- [Ansible官方文档](https://docs.ansible.com/)
- [Ansible Getting Started](https://docs.ansible.com/ansible/latest/user_guide/intro_getting_started.html)
- [Ansible Best Practices](https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html)
