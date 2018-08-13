mkfifo
===

命名管道

## 使用实例

新建并使用命名管道

```
mkfifo -m 644 myfifo1
tee dst.log < myfifo1 &
cat src.log > myfifo1
```