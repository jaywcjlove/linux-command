journalctl
===

检索 systemd 日志，是 CentOS 7 才有的工具。

### 语法

```shell
journalctl [OPTIONS...] [MATCHES...]
```

### 选项

```shell
Flags:
 --system               # 显示系统日志
 --user                 # 显示当前用户的用户日志
-M --machine=CONTAINER  # 在本地容器上操作
-S --since=DATE         # 显示不早于指定日期的条目
-U --until=DATE         # 显示不晚于指定日期的条目
-c --cursor=CURSOR      # 显示从指定光标开始的条目
  --after-cursor=CURSOR # 在指定光标后显示条目
  --show-cursor         # 在所有条目之后打印光标
-b --boot[=ID]          # 显示当前启动或指定启动
  --list-boots          # 显示有关已记录引导的简洁信息
-k --dmesg              # 显示当前启动的内核消息日志
-u --unit=UNIT          # 显示指定单元的日志
-t --identifier=STRING  # 显示具有指定系统日志标识符的条目
-p --priority=RANGE     # 显示具有指定优先级的条目
-e --pager-end          # 在pager中立即跳转到末尾
-f --follow             # 关注期刊
-n --lines[=INTEGER]    # 要显示的日志条目数
  --no-tail             # 显示所有行，即使在跟随模式下
-r --reverse            # 首先显示最新的条目
-o --output=STRING      # 更改日志输出模式 (short, short-iso,
                                   short-precise, short-monotonic, verbose,
                                   export, json, json-pretty, json-sse, cat)
--utc                   # 以协调世界时 (UTC) 表示的时间
-x --catalog            # 在可用的情况下添加消息说明
   --no-full            # Ellipsize 字段
-a --all                # 显示所有字段，包括长的和不可打印的
-q --quiet              # 不显示特权警告
   --no-pager           # 不要将输出通过管道传输到寻呼机
-m --merge              # 显示所有可用期刊的条目
-D --directory=PATH     # 显示目录中的日志文件
   --file=PATH          # 显示日志文件
   --root=ROOT          # 对根目录下的目录文件进行操作
   --interval=TIME      # 更改 FSS 密封键的时间间隔
   --verify-key=KEY     # 指定FSS验证密钥
   --force              # 使用 --setup-keys 覆盖 FSS 密钥对 

Commands:
-h --help              # 显示此帮助文本
   --version           # 显示包版本
-F --field=FIELD       # 列出指定字段的所有值
   --new-id128         # 生成新的 128 位 ID
   --disk-usage        # 显示所有日志文件的总磁盘使用情况
   --vacuum-size=BYTES # 将磁盘使用量减少到指定大小以下
   --vacuum-time=TIME  # 删除早于指定日期的日志文件
   --flush             # 将所有日志数据从 /run 刷新到 /var
   --header            # 显示期刊头信息
   --list-catalog      # 显示目录中的所有消息 ID
   --dump-catalog      # 在消息目录中显示条目
   --update-catalog    # 更新消息目录数据库
   --setup-keys        # 生成新的 FSS 密钥对
   --verify            # 验证日志文件的一致性
```

### 实例

**过滤输出**

`journalctl` 可以根据特定字段过滤输出。如果过滤的字段比较多，需要较长时间才能显示出来。

示例：

显示本次启动后的所有日志：

```shell
journalctl -b
```

不过，一般大家更关心的不是本次启动后的日志，而是上次启动时的（例如，刚刚系统崩溃了）。可以使用 -b 参数：

- `journalctl -b -0` 显示本次启动的信息
- `journalctl -b -1` 显示上次启动的信息
- `journalctl -b -2` 显示上上次启动的信息 `journalctl -b -2`

只显示错误、冲突和重要告警信息

```shell
journalctl -p err..alert
```

也可以使用数字， `journalctl -p 3..1`。如果使用单个 number/keyword，则 `journalctl -p 3` - 还包括所有更高的优先级。

显示从某个日期 ( 或时间 ) 开始的消息:

```shell
journalctl --since="2012-10-30 18:17:16"
```

显示从某个时间 ( 例如 20分钟前 ) 的消息:

```shell
journalctl --since "20 min ago"
```

显示最新信息

```shell
journalctl -f
```

显示特定程序的所有消息:

```shell
journalctl /usr/lib/systemd/systemd
```

显示特定进程的所有消息:

```shell
journalctl _PID=1
```

显示指定单元的所有消息：

```shell
journalctl -u man-db.service
```

显示内核环缓存消息r:

```shell
journalctl -k
```

**手动清理日志**

`/var/log/journal` 存放着日志, `rm` 应该能工作. 或者使用 `journalctl`,

例如:

清理日志使总大小小于 100M:

```shell
journalctl --vacuum-size=100M
```

清理最早两周前的日志.

```shell
journalctl --vacuum-time=2weeks
```
