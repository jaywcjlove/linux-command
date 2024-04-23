gpg
===

可用于签名、检查、加密或解密的工具

### 支持算法:

Pubkey: `RSA`, `ELG`, `DSA`, `ECDH`, `ECDSA`, `EDDSA`
Cipher: `IDEA`, `3DES`, `CAST5`, `BLOWFISH`, `AES`, `AES192`, `AES256`, `TWOFISH`,
        `CAMELLIA128`, `CAMELLIA192`, `CAMELLIA256`
Hash: `SHA1`, `RIPEMD160`, `SHA256`, `SHA384`, `SHA512`, `SHA224`
Compression: `Uncompressed`, `ZIP`, `ZLIB`, `BZIP2`

### 语法
```shell
gpg [选项] [文件...]
```

### 参数:

```shell
 -s, --sign                  签名
     --clear-sign            生成明文签名
 -b, --detach-sign           生成一个独立的签名
 -e, --encrypt               加密数据
 -c, --symmetric             仅使用对称密码进行加密
 -d, --decrypt               解密数据 (默认)
     --verify                验签
 -k, --list-keys             列出密钥
     --list-signatures       列出密钥和签名
     --check-signatures      列出并检查密钥签名
     --fingerprint           列出密钥和指纹
 -K, --list-secret-keys      列出私钥
     --generate-key          生成新的密钥对
     --quick-generate-key    快速生成新的密钥对
     --quick-add-uid         快速添加新的用户ID
     --quick-revoke-uid      快速撤销用户ID
     --quick-set-expire      快速设置新的过期日期
     --full-generate-key     全功能密钥对生成
     --generate-revocation   生成撤销证书
     --delete-keys           从公钥环中移除密钥
     --delete-secret-keys    从私钥环中移除密钥
     --quick-sign-key        快速签名密钥
     --quick-lsign-key       快速在本地签名密钥
     --quick-revoke-sig      快速撤销密钥签名
     --sign-key              签名密钥
     --lsign-key             本地签名密钥
     --edit-key              签名或编辑密钥
     --change-passphrase     更改密码短语
     --export                导出密钥
     --send-keys             将密钥导出到密钥服务器
     --receive-keys          从密钥服务器导入密钥
     --search-keys           在密钥服务器上搜索密钥
     --refresh-keys          从密钥服务器更新所有密钥
     --import                导入/合并密钥
     --card-status           打印卡片状态
     --edit-card             更改卡片上的数据
     --change-pin            更改卡片的PIN码
     --update-trustdb        更新信任数据库
     --print-md              打印消息摘要
     --server                以服务器模式运行
     --tofu-policy VALUE     为密钥设置TOFU策略
```

### 选项:

```shell
 -a, --armor                 指定ascii格式的输出
 -r, --recipient USER-ID     对特定用户ID的加密
 -u, --local-user USER-ID    使用 USER-ID 进行签名或解密
 -z N                        设置压缩级别为N（0表示禁用）
     --textmode              使用规范文本模式
 -o, --output FILE           将输出写入文件FILE
 -v, --verbose               详细模式
 -n, --dry-run               不做任何更改
 -i, --interactive           在覆盖前提示
     --openpgp               使用严格的OpenPGP行为
```

### 示例:

```shell
 -se -r Bob [file]          为用户Bob签名并加密
 --clear-sign [file]        生成明文签名
 --detach-sign [file]       生成一个独立的签名
 --list-keys [names]        显示密钥
 --fingerprint [names]      显示指纹
```
