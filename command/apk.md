apk
===

Alpine Linux 下的包管理工具

## 使用实例

```shell
apk install xxx
apk search xxx # 支持正则
apk info xxx # 查看包的详细信息
apk show # list local package
# 卸载并删除 包
apk del openssh openntp vim
```

### 升级

upgrade命令升级系统已安装的所以软件包（一般包括内核），当然也可指定仅升级部分软件包（通过-u或–upgrade选择指定）。

```shell
apk update # 更新最新本地镜像源
apk upgrade # 升级软件
apk add --upgrade busybox # 指定升级部分软件包
```

### 搜索

```shell
apk search # 查找所以可用软件包
apk search -v # 查找所以可用软件包及其描述内容
apk search -v 'acf*' # 通过软件包名称查找软件包
apk search -v -d 'docker' # 通过描述文件查找特定的软件包
```

### 查看包信息

info命令用于显示软件包的信息。

```shell
apk info # 列出所有已安装的软件包
apk info -a zlib # 显示完整的软件包信息
apk info --who-owns /sbin/lbu # 显示指定文件属于的包
```

## 笔记

还是蛮喜欢 alpine 的，简单纯粹

```shell
apk add iproute2 # ss vs netstat
ss -ptl
apk add drill # drill vs nslookup&dig

crond # 开启 cron 服务
crontab -l -e

apk add xxx
apk search -v xxx
apk info -a xxx
apk info
echo -e "http://mirrors.aliyun.com/alpine/v3.6/main\nhttp://mirrors.aliyun.com/alpine/v3.6/community" > /etc/apk/repositories
apk update

# storage
ibu # alpine local backup

# network
echo "shortname" > /etc/hostname
hostname -F /etc/hostname
/etc/hosts
/etc/resolv.conf # conig DNS
modprobe ipv6 # enable ipv6
echo "ipv6" >> /etc/modules
iface # config interface
apk add iptables ip6tables iptables-doc
/etc/init.d/networking restart # activate change
apke add iputils # IPv6 traceroute
traceroute6 ipv6.google.com
awall # alpine wall
# setup a openvpn server

# post-install
/etc/apk/repositories
apk add cherokee --update-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted
apk search -v --description 'NTP' # show description and search from description
apk info -a zlib
apk info -vv|sort
apk info -r -R # require / depency
apk version -v -l '<' # show available updates
apk upgrade -U -a
apk add -u xxx # update xxx

/etc/runlevels # runlevel
apk add openrc # use openrc for init system
rc-update add xxx # set to start on
rc-service xxx start # equal -> /etc/init.d/xxx start
rc-status

adduser xxx
passwd xxx

apk add ansible # server
ssh-keygen
/etc/ansible/hosts
apk add python # node
ssh-copy-id

apk add man man-pages mdocml-apropos less less-doc
export PAGER=less
/etc/rc.conf # /etc/rc.conf -> funny character
apk add bash bash-doc bash-completion # bash
apk add util-linux pciutils usbutils coreutils binutils findutils grep # grep / awk
apk add build-base gcc abuild binutils binutils-doc gcc-doc # compile
apk add cmake cmake-doc extra-cmake-modules extra-cmake-modules-doc
apk add ccache ccache-doc

apk add docker # docker
rc-update add docker boot
rc-service docker start
apk add py-pip
pip install docker-compose
ln -s /usr/bin/docker-compose /usr/bin/doc

# application
apk add openssh # ssh
rc-update add sshd
/etc/init.d/sshd start
/etc/sshd_config
apk add dropbear # another openssh implementation
```