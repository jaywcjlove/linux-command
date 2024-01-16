pip
===

Python 编程语言中的包管理器，用于安装和管理第三方 Python 模块

## 语法

```bash
pip <命令> [选项]
```

## 选项

命令

```bash
install                     安装包。
download                    下载包。
uninstall                   卸载包。
freeze                      以requirements格式输出已安装的包。
inspect                     检查 Python 环境。
list                        列出已安装的包。
show                        显示有关已安装包的信息。
check                       验证已安装的包是否具有兼容的依赖关系。
config                      管理本地和全局配置。
search                      在 PyPI 搜索包。
cache                       检查和管理 pip 的wheel缓存。
index                       检查从软件包索引中获取的信息。
wheel                       从你的要求构建wheels。
hash                        计算包存档的哈希值。
completion                  用于命令完成的辅助命令。
debug                       显示用于调试的有用信息。
help                        显示命令的帮助信息。
```

通用选项

```bash
-h, --help                  显示帮助。
--debug                     允许未处理的异常传播到主要子例程之外，而不是将其记录到stderr。
--isolated                  在隔离模式下运行 pip，忽略环境变量和用户配置。
--require-virtualenv        允许 pip 仅在虚拟环境中运行；否则退出并显示错误。
--python <python>           使用指定的 Python 解释器运行 pip。
-v, --verbose               提供更多输出。该选项是可叠加的，最多可使用3次。
-V, --version               显示版本并退出。
-q, --quiet                 提供更少的输出。该选项是可叠加的，最多可使用3次（对应 WARNING、ERROR 和 CRITICAL 日志级别）。
--log <path>                要附加日志的路径。
--no-input                  禁用输入提示。
--keyring-provider <keyring_provider>
                            如果允许用户输入，则启用通过 keyring 库进行凭据查找。指定要使用的机制[disabled, import, subprocess]。（默认: disabled）
--proxy <proxy>             指定代理，格式为 scheme://[user:passwd@]proxy.server:port。
--retries <retries>         每个连接应尝试的最大次数（默认5次）。
--timeout <sec>             设置套接字超时（默认15秒）。
--exists-action <action>    当路径已经存在时的默认操作：(s)切换，(i)忽略，(w)擦除，(b)备份，(a)中止。
--trusted-host <hostname>   将此主机或主机:端口对标记为可信，即使它没有有效或任何 HTTPS。
--cert <path>               PEM编码的CA证书包的路径。如果提供，将覆盖默认值。有关更多信息，请参阅 pip 文档中的 'SSL证书验证'。
--client-cert <path>        SSL客户端证书的路径，一个包含私钥和PEM格式的证书的单个文件。
--cache-dir <dir>           在 <dir> 中存储缓存数据。
--no-cache-dir              禁用缓存。
--disable-pip-version-check
                            不定期检查 PyPI 是否有可下载的 pip 新版本。与 --no-index 隐含。
--no-color                  抑制有色输出。
--no-python-version-warning
                            对即将不受支持的 Python 沉默弃用警告。
--use-feature <feature>     启用可能不向后兼容的新功能。
--use-deprecated <feature>  启用在将来将被删除的已弃用功能。
```

### 安装

Pip 是 Python 的包管理工具，通常随着 Python 的安装一起安装。确保你的 Python 版本是 3.4 或更高版本。

```bash
# Ubuntu系统
sudo apt install python3-pip
```

```bash
# CentOS
sudo yum install python3-pip
```

如果需要更新 Pip，可以运行以下命令：

```bash
python -m pip install --upgrade pip
```

检查 `pip` 是否已安装

```bash
pip --version
```

确保您使用的是最新版本的 `pip`，您可以运行以下命令来**升级**

```bash
python -m pip install --upgrade pip
```

## 安装包

通过 Pip 安装 Python 包非常简单。使用以下命令：

```bash
pip install <package_name>
```

例如，安装一个名为 `requests` 的包：

```bash
pip install requests
```

## 卸载包

要卸载已安装的包，使用以下命令：

```bash
pip uninstall package_name
```

例如，卸载 `requests` 包：

```bash
pip uninstall requests
```

## 查看已安装的包

你可以使用以下命令查看当前环境中已安装的所有包及其版本：

```bash
pip list
```

## 导出和导入依赖关系

使用 `pip freeze` 命令可以将当前环境中的所有包及其版本导出到一个文本文件，通常命名为 `requirements.txt`：

```bash
pip freeze > requirements.txt
```

要在另一个环境中安装相同的依赖，可以使用以下命令：

```bash
pip install -r requirements.txt
```

## 安装特定版本的包

如果需要安装特定版本的包，可以在包名后面添加版本号：

```bash
pip install package_name==1.2.3
```

## 搜索包

要搜索可用的 Python 包，可以使用 `pip search` 命令：

```bash
pip search package_name
```

## 安装开发版本

有时你可能需要安装包的开发版本。通常，开发版本存储在版本控制系统中（如 GitHub）：

```bash
pip install git+https://github.com/user/repo.git
```

这将安装存储库的最新版本。

以上是一些常用的 Pip 命令，希望这个简要教程能够帮助你更好地使用 Python 包管理工具。

## 官网

更多安装使用方法可以访问官网学习：[https://pypi.org/project/pip/](https://pypi.org/project/pip/)
