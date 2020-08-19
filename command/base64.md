## base64

base64 编码/解码文件或标准输入输出

### 描述

base64将`文件`或`标准输入`编码或解码为标准输出; 

### 语法

base64 [OPTION]... [FILE]

### 参数

```
-d, --decode
    解码

-i, --ignore-garbage
    解码时，忽略非字母字符

-w, --wrap=COLS
    在指定的字符数后自动换行(默认为76), 0 为禁用自动换行

--help 显示此帮助说明并退出

--version
    输出版本信息并退出
```

### 实例

+ 编码字符串
```
printf foo|base64
```

+ 编码文件
```
base64 file
```

+ 解码
```
printf Zm9v|base64 -d
```

+ 解码文件
```
base64 -d file
```
