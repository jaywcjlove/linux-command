mkcert
===

用来生成自签证书的工具

## 示例

`mkcert` 是 GO 编写的，一个简单的**零配置**的用来生成自签证书的工具。

下面给一个简单的示例，在本地生成自签证书，并使用让 nc 使用生成的证书。

```zsh
~ ·········································································································································  10:46:25
❯ mkcert -install
The local CA is already installed in the system trust store! 👍The local CA is already installed in the Firefox and/or Chrome/Chromium trust store! 👍
~ ·········································································································································  10:46:34
❯ mkcert example.com "*.example.com" example.test localhost 127.0.0.1 ::1

Created a new certificate valid for the following names 📜 - "example.com"
 - "*.example.com"
 - "example.test"
 - "localhost"
 - "127.0.0.1"
 - "::1"

Reminder: X.509 wildcards only go one level deep, so this won't match a.b.example.com ℹ️

The certificate is at "./example.com+5.pem" and the key at "./example.com+5-key.pem" ✅
It will expire on 30 January 2025 🗓

~ ·········································································································································  10:47:37
❯ ls             
公共  视频  文档  音乐  aria          aria2-downloads  Dockerfile             example.com+5.pem  GOPATH  minio-binaries  nowip_hosts.txt  tech_backend.jar
模板  图片  下载  桌面  aria2-config  cv_debug.log     example.com+5-key.pem  go                 math    navicat_reset   src
~ ·········································································································································  10:47:55
❯ ncat -lvp 1589 --ssl-key example.com+5-key.pem --ssl-cert example.com+5.pem 
Ncat: Version 7.92 ( https://nmap.org/ncat )
Ncat: Listening on :::1589
Ncat: Listening on 0.0.0.0:1589
Ncat: Connection from 127.0.0.1.
Ncat: Connection from 127.0.0.1:39156.
Ncat: Failed SSL connection from 127.0.0.1: error:00000000:lib(0):func(0):reason(0)
```

`mkcert` 自动生成并安装一个本地 CA 到 root stores，并且生成 locally-trusted 证书。`mkcert` 不会自动使用证书来配置服务器，不过，这取决于你。

## 安装

> Warning: `mkcert` 自动生成的 `rootCA-key.pem` 文件提供了完整的能力来拦截你机器上的安全请求。请不要分享它。

### macOS

```bash
$ brew install mkcert
$ brew install nss # 如果用 Firefox 的话
```

### Linux

在 Linux 上，首先要安装 `certutil`

```bash
$ sudo apt install libnss3-tools
#    -or-
$ sudo yum install nss-tools
#    -or-
$ sudo pacman -S nss
#    -or-
$ sudo zypper install mozilla-nss-tools
```

然后可以使用 [Homebrew on Linux](https://docs.brew.sh/Homebrew-on-Linux) 来安装。

```bash
$ brew install mkcert
```

或者从源码构建（要求 Go 1.13+）

```bash
git clone https://github.com/FiloSottile/mkcert && cd mkcert
go build -ldflags "-X main.Version=$(git describe --tags)"
```

又或者使用 [预构建的二进制文件](https://github.com/FiloSottile/mkcert/releases)。

```bash
$ curl -JLO "https://dl.filippo.io/mkcert/latest?for=linux/amd64"
$ chmod +x mkcert-v*-linux-amd64
$ sudo cp mkcert-v*-linux-amd64 /usr/local/bin/mkcert
```

对于 Arch Linux 用户（比如我），[`mkcert`](https://www.archlinux.org/packages/community/x86_64/mkcert/) 在 Arch Linux 官方仓库中可用。

```bash
$ sudo pacman -S mkcert
```

### Windows

使用 [Chocolatey](https://chocolatey.org/)

```bash
$ choco install mkcert
```

或者使用 Scoop

```bash
$ scoop bucket add extras
$ scoop install mkcert
```

或者从源码构建（要求 Go 1.10+） ，或者使用 [预构建的二进制文件](https://github.com/FiloSottile/mkcert/releases)。

如果遇到权限问题，请使用管理员运行 `mkcert`

## 支持的 root stores

`mkcert` 支持以下 root stores：

- macOS system store
- Windows system store
- Linux 发行版提供
  - `update-ca-trust` （Fedora，RHEL，CentOS）或者
  - `update-ca-certificates` （Ubuntu，Debian，OpenSUSE，SLES）或者
  - `trust` （Arch）
- Firefox （仅 macOS 和 Linux）
- Chrome 和 Chromium
- Java（当 `JAVA_HOME` 被设置时）

为了把 local root CA 装到这些 root stores 中，你可以设置 `TRUST_STORES` 环境变量到一个逗号分隔的 list。有这些选项："system","java" 和 "nss"（包括了 Firefox）。

## 高级 topics

### 高级选项

```bash
-cert-file FILE, -key-file FILE, -p12-file FILE
    # 自定义输出路径.
-client # 生成供客户端认证使用的证书.
-ecdsa  # 生成使用一个 ECDSA （一种椭圆曲线签名算法）key 来生成证书.
-pkcs12 # 生成一个 ".p12" PKCS #12 文件，也可以被识别为 ".pfx" 文件,
        # 包含 cert 和 key for legacy applications.
-csr CSR # 生成一个给予 CSR（证书签名申请） 的证书。
         # 与除了 -install 和 -cert-file 以外的其它所以 flag 和参数冲突！
```

[SSL 证书 什么是CSR？-常见问题-文档中心-腾讯云](https://cloud.tencent.com/document/product/400/5367)

> **请注意！** 你必须把这些选项放在域名列表之前。

### 例如

```bash
mkcert -key-file key.pem -cert-file cert.pem example.com *.example.com
```

### S/MIME （邮件安全证书）

用下面这种方式 `mkcert` 会生成一个 S/MIME 证书：

```bash
mkcert filippo@example.com
```

### 移动设备

对于要让移动设备信任证书的情况，你得安装 root CA。就是 `rootCA.pem` 这个文件，可以通过 `mkcert -CAROOT` 打印出这个文件所在的目录。

在 iOS 上，你也可以使用 AirDrop，把 CA 邮件发给你自己，或者通过一个 HTTP server 提供它。在打开它之后，你需要  [install the profile in Settings > Profile Downloaded](https://github.com/FiloSottile/mkcert/issues/233#issuecomment-690110809) and then [enable full trust in it](https://support.apple.com/en-nz/HT204477) 。

对于 Android ，你得安装这个 CA 然后在应用程序的开发版本中启用 user roots。可以看一看这个 [StackOverflow 回答](https://stackoverflow.com/a/22040887/749014) 。

### 用 Node.js 来使用这个 root

Node 不使用 system root store，所以它不会自动接受 `mkcert` 证书。相反，你得设置 [`NODE_EXTRA_CA_CERTS`](https://nodejs.org/api/cli.html#cli_node_extra_ca_certs_file) 环境变量。

```bash
export NODE_EXTRA_CA_CERTS="$(mkcert -CAROOT)/rootCA.pem"
```

### 改变 CA 文件的位置

CA 证书和它的 key 被存储在用户家目录的一个文件夹中。一般来说你不会想去关注它的位置，因为它会被自动装载。但是你可以通过 `mkcert -CAROOT` 来打印这个目录位置。

如果你想要管理单独的 CA 们，你可以使用 `\$CAROOT` 环境变量来设置 mkcert 放置和寻找 CA files 的路径。

### 在其它系统上安装 CA

安装 trust store 不需要 CA key（只要 CA），所以你可以导出 CA，并且使用 `mkcert` 来安装到其它机器上。

- 找到 `rootCA.pem` 文件，可以用 `mkcert -CAROOT` 找到对应目录。
- 把它 copy 到别的机器上。
- 设置 `\$CAROOT` 为 `rootCA.pem` 所在目录。
- 运行 `mkcert -install`(arch linux 可以 `sudo trust anchor --store rootCA.pem`，其它发行版可以用自带的命令手动添加来信任 CA)

请千万记住 `mkcert` 是用于开发目的的，不建议用于生产，所以它不应该被用到用户终端上，并且你不应该导出或者共享 `rootCA-key.pem` 。
