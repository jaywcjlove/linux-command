sosreport
===

收集系统配置和诊断信息

## 补充说明

**sosreport命令** 是一个配置和数据收集实用程序，用于收集系统配置、日志文件和诊断信息，以便进行故障排除和分析。它将信息打包到一个压缩的tar文件中，便于传输和分析。sosreport是Red Hat Enterprise Linux系统中用于技术支持的标准工具。

### 语法

```shell
sosreport [选项]
```

### 选项

```shell
-l, --list-plugins     # 列出所有可用的插件
-n, --skip-plugins     # 跳过指定的插件（多个插件用逗号分隔）
-e, --enable-plugins   # 启用指定的插件（多个插件用逗号分隔）
-o, --only-plugins     # 只运行指定的插件（多个插件用逗号分隔）
-a, --alloptions       # 启用所有插件选项
-v, --verbose          # 详细输出模式
-q, --quiet            # 静默模式，减少输出
--batch                # 批处理模式，不提示用户输入
--build                # 收集系统构建信息
--case-id=CASE_ID      # 指定案例ID
--config-file=CONFIG   # 指定配置文件路径
--debug                # 调试模式
--experimental         # 启用实验性插件
--log-size=SIZE        # 限制日志文件大小（MB）
--plugin-timeout=TIMEOUT # 插件超时时间（秒）
--since=DATE           # 从指定日期开始收集日志
--tmp-dir=DIR          # 指定临时目录
--verify               # 验证归档的完整性
-z, --compression-type # 指定压缩类型（gzip, bzip2, xz）
```

### 常用选项

```shell
-a     # 启用所有插件选项，收集最全面的信息
-v     # 详细模式，显示收集过程
-q     # 静默模式，最小化输出
--batch # 批处理模式，不需要用户交互
```

### 实例

收集系统诊断信息：

```shell
sosreport
```

批处理模式收集信息（无需用户交互）：

```shell
sosreport --batch
```

详细模式收集信息：

```shell
sosreport -v
```

启用所有插件选项收集完整信息：

```shell
sosreport -a
```

只收集网络相关信息：

```shell
sosreport -o network
```

跳过某些插件：

```shell
sosreport -n rpm,yum
```

收集指定日期之后的日志：

```shell
sosreport --since="2023-01-01"
```

指定案例ID和批处理模式：

```shell
sosreport --batch --case-id=12345678
```

列出所有可用插件：

```shell
sosreport -l
```

收集系统信息并限制日志文件大小：

```shell
sosreport --log-size=100
```

使用不同的压缩类型：

```shell
sosreport -z xz
```

### 常见插件

```shell
block          # 块设备信息
boot           # 启动相关信息
kernel         # 内核信息
logs           # 系统日志
memory         # 内存信息
network        # 网络配置
networking     # 网络诊断
process        # 进程信息
processor      # CPU信息
rpm            # RPM包信息
system         # 系统配置
yum            # YUM包管理器信息
```

### 输出文件

sosreport会在`/var/tmp/`目录下生成一个压缩的tar文件，文件名格式为：
```
sosreport-<hostname>-<timestamp>-<hash>.tar.xz
```

### 注意事项

- sosreport需要root权限运行
- 收集的信息可能包含敏感数据，传输前请确认安全性
- 生成的文件可能较大，请确保有足够的磁盘空间
- 默认情况下，敏感信息（如密码、密钥）会被混淆处理
