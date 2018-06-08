apk
===

Alpine Linux 下的包管理工具

## quick start

```
apk install xxx
apk search xxx # 支持正则
apk info xxx # 查看包的详细信息
apk show # list local package
```

## 笔记

还是蛮喜欢 alpine 的，简单纯粹

```
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