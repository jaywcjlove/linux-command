continue
===

结束本次循环，继续执行下一个for，while或until循环。

## 概要

```shell
continue [n]
```

## 主要用途

- 结束本次循环，继续执行下一个for，while或until循环；可指定从第几层循环继续执行。


## 参数

n（可选）：大于等于1的整数，用于指定从第几层循环继续执行。

## 返回值

返回状态为成功除非n小于1。

## 例子

```shell
# continue的可选参数n缺省值为1。
for((i=3;i>0;i--)); do
  # 跳到内层for循环继续执行。
  for((j=3;j>0;j--)); do
    if((j==2)); then
      # 换成continue 1时结果一样
      continue
    fi
  printf "%s %s\n" ${i} ${j}
  done
done
# 输出结果
3 3
3 1
2 3
2 1
1 3
1 1
```

```shell
# 当n为2时：
# 跳到外层for循环继续执行。
for((i=3;i>0;i--)); do
  for((j=3;j>0;j--)); do
    if((j==2)); then
      continue 2
    fi
  printf "%s %s\n" ${i} ${j}
  done
done
# 输出结果
3 3
2 3
1 3
```

### 注意

1. 该命令是bash内建命令，相关的帮助信息请查看`help`命令。



