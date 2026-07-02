redis-cli
===

Redis命令行客户端工具

## 补充说明

**redis-cli命令** 是Redis数据库的命令行客户端工具，用于与Redis服务器进行交互。它支持所有Redis命令，可以进行数据的读写、管理和监控操作。

redis-cli提供了交互式命令行和批处理模式，支持Lua脚本执行、集群管理和哨兵模式。

### 安装

```shell# Ubuntu/Debian
apt-get update
apt-get install redis-tools

# CentOS/RHEL
yum install redis

# macOS (Homebrew)
brew install redis

# 验证安装
redis-cli --version
`

### 语法

`shellredis-cli [OPTIONS] [cmd [arg [arg ...]]]
`

### 常用选项

```shell-h --host          指定服务器主机名（默认：127.0.0.1）
-p --port          指定服务器端口（默认：6379）
-a --password      指定密码
-n --db            指定数据库编号（默认：0）
-r --repeat        指定命令重复执行次数
-i --interval      与-r一起使用，指定重复间隔（秒）
--no-auth-warning  不显示认证警告
--no-raw           不使用原始模式
--no-m escaping    不对特殊字符进行转义
--csv              以CSV格式输出
--stat             显示统计信息
--latency          启动延迟监控
--latency-history  显示延迟历史
--latency-dist     显示延迟分布
--lru-test         测试LRU模拟
--scan             使用SCAN命令迭代键
--pattern          与--scan一起使用，指定匹配模式
--bigkeys          分析大键
--hotkeys          分析热键
`

### 实例

```shell# 连接本地Redis服务器
redis-cli

# 连接远程Redis服务器
redis-cli -h 192.168.1.100 -p 6379

# 连接带密码的Redis服务器
redis-cli -a your_password

# 指定数据库
redis-cli -n 1

# 执行单个命令
redis-cli SET mykey "Hello"
redis-cli GET mykey

# 批量执行命令
redis-cli <<EOF
SET name "John"
SET age 30
GET name
GET age
EOF

# 查看Redis信息
redis-cli INFO

# 查看服务器统计
redis-cli INFO server
redis-cli INFO memory
redis-cli INFO clients
redis-cli INFO replication

# 查看键的数量
redis-cli DBSIZE

# 删除所有键
redis-cli FLUSHDB
redis-cli FLUSHALL

# 检查键是否存在
redis-cli EXISTS mykey

# 设置键的过期时间
redis-cli EXPIRE mykey 60
redis-cli PEXPIRE mykey 60000

# 查看键的剩余生存时间
redis-cli TTL mykey
redis-cli PTTL mykey

# 列出所有键
redis-cli KEYS *
redis-cli KEYS "user:*"

# 使用SCAN迭代键（更安全）
redis-cli SCAN 0 MATCH user:* COUNT 100

# 分析大键
redis-cli --bigkeys

# 监视键的变化
redis-cli WATCH mykey

# 执行事务
redis-cli MULTI
redis-cli SET name "Alice"
redis-cli SET age 25
redis-cli EXEC

# 发布/订阅
redis-cli SUBSCRIBE channel1 channel2
redis-cli PUBLISH channel1 "Hello"

# 执行Lua脚本
redis-cli EVAL "return {KEYS[1],ARGV[1]}" 1 key1 arg1

# 克隆数据
redis-cli --rdb dump.rdb
redis-cli --pipe < big.rdb

# 复制数据到另一个Redis
redis-cli --slave

# 查看慢查询
redis-cli SLOWLOG GET 10

# 重置慢查询日志
redis-cli SLOWLOG RESET

# 内存分析
redis-cli MEMORY DOCTOR
redis-cli MEMORY STATS

# 集群模式
redis-cli -c -h 127.0.0.1 -p 7000 CLUSTER INFO
redis-cli -c -h 127.0.0.1 -p 7000 CLUSTER NODES

# 哨兵模式
redis-cli -p 26379 SENTINEL master mymaster
redis-cli -p 26379 SENTINEL slaves mymaster
redis-cli -p 26379 SENTINEL get-master-addr-by-name mymaster

# 持久化操作
redis-cli BGSAVE
redis-cli LASTSAVE
redis-cli DEBUG RELOAD

# 安全操作
redis-cli SHUTDOWN
redis-cli SHUTDOWN NOSAVE

# 交互式会话中的常用操作
redis-cli
127.0.0.1:6379> SET name "Redis"
OK
127.0.0.1:6379> GET name
"Redis"
127.0.0.1:6379> HSET user:name John
(integer) 1
127.0.0.1:6379> HGETALL user:name
1) "name"
2) "John"
127.0.0.1:6379> LPUSH mylist "world"
(integer) 1
127.0.0.1:6379> LRANGE mylist 0 -1
1) "world"
127.0.0.1:6379> SADD myset "hello"
(integer) 1
127.0.0.1:6379> SMEMBERS myset
1) "hello"
127.0.0.1:6379> ZADD myzset 1 "one"
(integer) 1
127.0.0.1:6379> ZRANGE myzset 0 -1
1) "one"

# 性能测试
redis-cli --latency -i 1
redis-cli --stat -i 1

# 导出/导入数据
redis-cli --raw dump > backup.rdb
redis-cli --pipe < backup.rdb

# 使用管道提高批量写入性能
cat commands.txt | redis-cli --pipe

# 查看客户端列表
redis-cli CLIENT LIST

# 杀死客户端连接
redis-cli CLIENT KILL id 1234

# 查看当前操作的数据库
redis-cli SELECT 0

# 重命名键
redis-cli RENAME oldkey newkey

# 移动键到其他数据库
redis-cli MOVE mykey 1

# 查看键的类型
redis-cli TYPE mykey
`

### 常用数据结构命令

```shell# String类型
SET key value
GET key
INCR key
DECR key
INCRBY key increment
MSET key1 value1 key2 value2
MGET key1 key2

# Hash类型
HSET key field value
HGET key field
HGETALL key
HDEL key field
HLEN key
HEXISTS key field

# List类型
LPUSH key value
RPUSH key value
LPOP key
RPOP key
LRANGE key start stop
LLEN key

# Set类型
SADD key member
SMEMBERS key
SISMEMBER key member
SCARD key
SREM key member

# Sorted Set类型
ZADD key score member
ZRANGE key start stop
ZSCORE key member
ZCARD key
ZREM key member
`

### 注意

1. 生产环境务必设置Redis密码，并使用
equirepass配置。
2. 使用KEYS *命令在大数据库中会导致性能问题，建议使用SCAN替代。
3. 执行危险命令（如FLUSHALL、SHUTDOWN）时需要格外小心。
4. 使用--no-auth-warning选项可以避免密码警告信息。
5. redis-cli支持Tab键自动补全命令。
6. 可以使用
edis-cli -x从标准输入读取值。
7. 批量操作时使用管道可以提高性能。

### 相关命令

- 
edis-server — Redis服务器
- 
edis-sentinel — Redis哨兵
- 
edis-check-aof — AOF文件检查
- 
edis-check-rdb — RDB文件检查

### 参考链接

- [Redis官方文档](https://redis.io/documentation)
- [Redis CLI文档](https://redis.io/docs/manual/client-servers/redis-cli/)
- [Redis命令参考](https://redis.io/commands/)
