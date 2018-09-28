httpie
===

HTTPie 是一个命令行 HTTP 客户端

## 补充说明

官方文档中文翻译: https://keelii.com/2018/09/03/HTTPie

## 安装

```bash
brew install httpie
pip install --upgrade httpie # 使用 python 安装, 推荐 py3 以上
```

## 语法

    http [flags] [METHOD] URL [ITEM [ITEM]]

## 使用

```bash
http httpie.org
http -v example.org # -v 查看请求信息

# wget 风格下载文件 --download -d
http --download example.org/file

# 上传文件
http example.org < file.json

# 使用 github api 向 issue 发表一条评论(需要授权验证)
http -a USERNAME POST https://api.github.com/repos/jkbrzt/httpie/issues/83/comments body='HTTPie is awesome! :heart:'

# 保持 session 进行持久通信
http --session=logged-in -a username:password httpbin.org/get API-Key:123
http --session=logged-in httpbin.org/headers

# method + header + json data
http PUT example.org X-API-Token:123 name=John

# 提交数据
# 默认使用 json, content-type:application/json accept:application/json,*/*
http PUT example.org name=John email=john@example.org
http PUT api.example.com/person/1 \
    name=John \
    age:=29 married:=false hobbies:='["http", "pies"]' \  # Raw JSON
    description=@about-john.txt \   # Embed text file
    bookmarks:=@bookmarks.json      # Embed JSON file
# 表单提交 -f --form, Content-Type:application/x-www-form-urlencoded;charset=utf-8
http -f POST example.org hello=World
# 文件上传, 自动设置 content-type:multipart/form-data
http -f POST example.com/jobs name='John Smith' cv@~/Documents/cv.pdf

# http header
http example.org  User-Agent:Bacon/1.0  'Cookie:valued-visitor=yes;foo=bar'  \
    X-Foo:Bar  Referer:http://httpie.org/
# 设置空header
http httpbin.org/headers Accept: User-Agent:

# 授权验证
# basic
http -a username:password example.org
# digest
http -A digest -a username:password example.org
# 密码提示
http -a username example.org<Paste>

# 重定向
# 默认不会重定向
http httpbin.org/redirect/3
# -f --follow 重定向, --all 显示中间跳转的响应, --max-redirects=<limit> 最大重定向次数
http --follow httpbin.org/redirect/3

# 代理 --proxy
# 为了防止跨协义的重定向，协义被包含在了参数值中
http --proxy=http:http://10.10.1.10:3128 --proxy=https:https://10.10.1.10:1080 example.org
# basic 授权
http --proxy=http:http://user:pass@10.10.1.10:3128 example.org
# 环境变量
export HTTP_PROXY=http://10.10.1.10:3128
export HTTPS_PROXY=https://10.10.1.10:1080
export NO_PROXY=localhost,example.com

# socks 支持
pip install -U requests[socks]
http --proxy=http:socks5://user:pass@host:port --proxy=https:socks5://user:pass@host:port example.org

# https
# --verify=no 跳过 SSL 验证
http --verify=no https://example.org
# 自定义 CA, --cert= 证书文件, --cert-key= 秘钥文件
http --cert=client.pem https://example.org
http --cert=client.crt --cert-key=client.key https://example.org
# ssl, --ssl 自定义 ssl 版本
http --ssl=ssl3 https://vulnerable.example.org

# 输出
# -headers -h 响应头, -body -b 响应体, -verbose -v 所有(包括 --all)
http --verbose PUT httpbin.org/put hello=world
# H 请求头 B 请求体 h 响应头 b 响应体
http --print=Hh PUT httpbin.org/put hello=world

```

## 更多

- HTTP method: GET(缺省) POST PUT DELETE 等
- 请求 URL: 缺省 `http://`
- query string 参数: 可以使用 `param==value`形式, 比如 `http www.google.com search=='HTTPie logo' tbm==isch`
- localhost 和端口 80 缩写
- 自定义默认方案, 比如默认使用 https `alias https='http --default-scheme=https'`
- 授权插件

```bash
http : # localhost
http :/foo # localhost/foo
http :3000/bar # localhost:3000/bar

```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->