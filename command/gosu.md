gosu
===

docker 镜像构建中常用的切换用户执行命令

## 补充说明

docker 镜像构建过程中经常遇到需要切换不同用户执行命令, 比如切换当前用户和 root 用户, 而 su/sudo 命令都比较复杂并且需要大量的配置, 使用 gosu 可以轻松完成

### 语法

```
gosu --help
Usage: gosu user-spec command [args]
   ie: gosu tianon bash
       gosu nobody:root bash -c 'whoami && id'
       gosu 1000:1 id
```

### 安装

以 alpine Linux 为例:

```
# 添加 edge/testing 索引
echo "http://mirrors.ustc.edu.cn/alpine/edge/testing" >> /etc/apk/repositories && apk update
apk add gosu
```

### 实例

1. jenkins 官方镜像的 `entrypoint.sh` 为例, 脚本以 root 运行, 然后使用 gosu 切换到 jenkins 用户运行 jenkins

```
#! /bin/bash
set -e
chown -R 1000 "$JENKINS_HOME"
exec gosu jenkins /bin/tini -- /usr/local/bin/jenkins.sh
```