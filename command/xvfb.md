xvfb
===

辅助需要界面的程序的运行

## 补充说明

xvfb 相当于一个wrapper， 给应用程序提供虚拟的 X server. 适用于不关注程序是否有界面, 比如自动化测试.

## 使用

```
Xvfb -ac :0 -screen 0 1024x768x16 &

# 或者配置到 service 中管理
service xvfb start
```