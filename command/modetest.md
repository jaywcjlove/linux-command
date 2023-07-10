modetest
===

DRM/KMS驱动程序libdrm中的模式测试工具

## 补充说明

`modetest` 是一个用于测试和验证 DRM（Direct Rendering Manager）驱动程序功能的命令行工具。

### 安装

- **源码**：[Mesa / drm · GitLab](https://gitlab.freedesktop.org/mesa/drm)
- **下载**：[Index of /libdrm (dri.freedesktop.org)](https://dri.freedesktop.org/libdrm/)

__编译__

```shell
./configure --prefix=/opt/ --host=aarch64-linux-gnu
make && make install
## 编译删除
make distclean
```

__参考__：[libdrm调试准备 - 简书](https://www.jianshu.com/p/a9152ca3e7ab)

### 语法

```shell
modetest [选项]
```

### 选项

```shell
# 查询选项
-c      列出连接器
-e      列出编码器
-f      列出帧缓冲
-p      列出 CRTCs 和平面

# 测试选项
-P <plane_id>@<crtc_id>:<w>x<h>[+<x>+<y>][*<scale>][@<format>]   设置一个平面
-s <connector_id>[,<connector_id>][@<crtc_id>]:<mode>[-<vrefresh>][@<format>]   设置一个显示模式
-C      测试硬件光标
-v      测试垂直同步页面翻转
-w <obj_id>:<prop_name>:<value>   设置属性

# 通用选项
-a      启用原子模式设置
-d      在模式设置后放弃主控权限
-M <module>      指定要使用的驱动程序模块
-D <device>      指定要使用的设
```

### 参数

`<modele>` 驱动模块

- i915：Intel 集成显卡驱动模块
- amdgpu：AMD Radeon 显卡驱动模块
- radeon：旧版 AMD Radeon 显卡驱动模块
- nouveau：NVIDIA 开源显卡驱动模块
- vmwgfx：VMware 显卡驱动模块
- omapdrm：TI OMAP 显卡驱动模块
- exynos：三星 Exynos 显卡驱动模块
- tilcdc：TI LCD 控制器显卡驱动模块
- msm：Qualcomm MSM 显卡驱动模块
- sti：STMicroelectronics 显卡驱动模块
- tegra：NVIDIA Tegra 显卡驱动模块
- imx-drm：Freescale i.MX 显卡驱动模块
- rockchip：Rockchip 显卡驱动模块

### 实例

使用 `modetest` 查看相关信息

```shell
~# modetest
Encoders:  # 省略了好多好多
id      crtc    type    possible crtcs  possible clones
194     0       Virtual 0x0000000f      0x00000001
196     88      TMDS    0x00000002      0x00000002
210     0       DSI     0x00000004      0x00000004
213     0       TMDS    0x00000001      0x00000008

Connectors:  # 省略了好多好多
id      encoder status          name            size (mm)       modes   encoders
197     196     connected       HDMI-A-1        530x300         10      196
  mode # 巴拉巴拉非常多的一大串
211     210     connected       DSI-1           184x114         1       210
214     0       disconnected    DP-1            0x0             0       213

CRTCs:  # 省略了好多好多****
id      fb      pos     size
68      0       (0,0)   (0x0)
  0 0 0 0 0 0 0 0 0 0 flags: ; type:
88      0       (0,0)   (0x0)
   0 0 0 0 0 0 0 0 0 0 flags: ; type:
108     219     (0,0)   (1200x1920)
  1200x1920 60 1200 1280 1284 1344 1920 1955 1956 1981 159400 flags: ; type:
128     0       (0,0)   (0x0)
   0 0 0 0 0 0 0 0 0 0 flags: ; type:

Planes: # 省略了好多好多
id      crtc    fb      CRTC x,y        x,y     gamma size      possible crtcs
54      0       0       0,0             0,0     0               0x0000000f
  formats: XR24 AR24 XB24 AB24 RG24 BG24 RG16 BG16 NV12 NV21 NV16 NV61 NV24 NV42 NV15 NV20 NV30 YVYU VYUY YUYV UYVY
74      0       0       0,0             0,0     0               0x0000000f
  formats: XR24 AR24 XB24 AB24 RG24 BG24 RG16 BG16 NV12 NV21 NV16 NV61 NV24 NV42 NV15 NV20 NV30 YVYU VYUY YUYV UYVY
94      108     219     0,0             0,0     0               0x0000000f
  formats: XR24 AR24 XB24 AB24 RG24 BG24 RG16 BG16 NV12 NV21 NV16 NV61 NV24 NV42 NV15 NV20 NV30 YVYU VYUY YUYV UYVY

```

------

根据以上信息在 `MIPI-DSI` 显示设备上使用 `Rockchip` 显卡驱动测试

```shell
~# modetest -M rockchip -s 211@108:1200x1920 -v
freq: 59.90Hz
freq: 59.87Hz
freq: 59.87Hz
freq: 59.87Hz
freq: 59.87Hz
freq: 59.87Hz
freq: 59.87Hz
freq: 59.87Hz
freq: 59.87Hz
```

在 `MIPI` 屏幕上将会看到闪烁的彩色块。

------

```shell
~# modetest -M rockchip -s 211@108:1200x1920 -C
setting mode 1200x1920-60Hz@XR24 on connectors 211, crtc 108
starting cursor
```

在 `MIPI` 屏幕上将会看到静止的彩色块。


