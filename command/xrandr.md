xrandr
===

X 窗口系统配置管理工具

## 补充说明

**xrandr命令**RandR（Rotate and Resize，旋转与缩放）是一个X窗口系统扩展，允许客户端动态调整（即缩放、旋转、翻转）屏幕。xrandr是一款官方的randr扩展配置工具。

### 语法

```shell
xrandr(选项)(参数)
```

### 选项

```shell
--auto      #以系统最大分辨率输出
--off       #指定设备设置为关闭
--output    #输出设备
--mode      #设置分辨率
--rate      #设置刷新率
--right-of  #主显示器右侧
--left-of   #主显示器左侧
--above     #主显示器上方
--below     #主显示器下方
```

### 参数

* 显示设备编号

### 实例

测试配置，列出可用设备及其信息

```shell
xrandr
Screen 0: minimum 320 x 200, current 3200 x 1080, maximum 8192 x 8192
VGA-1 disconnected (normal left inverted right x axis y axis)
HDMI-1 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 531mm x 299mm
   1920x1080     59.93 +  60.00*   50.00    59.94  
   1920x1080i    60.00    50.00    59.94  
   1680x1050     59.88  
…
```

克隆屏幕

```shell
xrandr --output HDMI-1 --auto
```

多显示器关闭不需要的

```shell
xrandr --output HDMI-1 --off --output HDMI-2 --auto
```

指定分辨率和刷新率

```shell
xrandr --output HDMI-1 --mode 1920x1080 --rate 60
```

VGA1位于HDMI1左侧，均使用最佳分辨率，分屏显示

```shell
xrandr --output VGA1 --auto --output HDMI1 --auto --right-of VGA1
```