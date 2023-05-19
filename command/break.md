break
===

结束for，while或until循环。

## 概要

```shell
break [n]
```

## 主要用途

- 结束for，while或until循环，可指定退出几层循环。


## 参数

n（可选）：大于等于1的整数，用于指定退出几层循环。

## 返回值

返回成功除非n小于1。

## 例子

```shell
# break的可选参数n缺省值为1。
# 从外层for循环继续执行。
for((i=3;i>0;i--)); do
  for((j=3;j>0;j--)); do
    if((j==2)); then
      # 换成break 1时结果一样
      break
    fi
  printf "%s %s\n" ${i} ${j}
  done
done
# 输出结果
3 3
2 3
1 3
```

```shell
# 当n为2时：
# 退出两层循环，结束。
for((i=3;i>0;i--)); do
  for((j=3;j>0;j--)); do
    if((j==2)); then
      break 2
    fi
  printf "%s %s\n" ${i} ${j}
  done
done
# 输出结果
3 3
```

### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。



