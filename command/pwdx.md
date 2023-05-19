pwdx
===

用于显示指定进程的当前工作目录

## 内建命令


### 概要

```shell
pwdx [进程ID]
```

### 参数说明

- `进程ID`：要查询的进程ID，可以使用 `ps` 命令查看。

## 示例


下面示例中，使用 `ps` 命令查看 `nginx` 进程的信息，然后使用 `pwdx` 命令查询进程ID为 `5678` 的进程的当前工作目录。

```bash
$ ps -ef | grep nginx
# root      1234     1  0 10:00 ?        00:00:00 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
# www-data  5678  1234  0 10:01 ?        00:00:00 nginx: worker process

$ pwdx 5678
# 5678: /var/www/html
```

查看当前进程的工作目录：

```bash
$ pwdx $$
```

查看指定进程的工作目录：

```bash
$ pwdx 1234
```

批量查看多个进程的工作目录：

```bash
$ ps aux | awk '{print $2}' | xargs pwdx
```

结合其他命令，查看某个进程的工作目录和命令行：

```bash
$ ps -p 1234 -o cmd | tail -n 1 | awk '{print $1}' | xargs pwdx
```

查看所有进程的工作目录：

```bash
$ ps -eo pid | xargs pwdx
```