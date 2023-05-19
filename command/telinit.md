telinit
===

切换当前正在运行系统的运行等级

## 补充说明

**telinit命令** 用于切换当前正在运行的Linux系统的运行等级。

_RUNLEVEL_ 参数应该是多用户运行级别 `2-5` 之一，`0` 用于停止系统，`6` 用于重新启动系统，或 `1` 用于使系统进入单用户模式。

通常您会使用 `shutdown(8)` 工具来停止或重新启动系统，或者将其降低到单用户模式。

_RUNLEVEL_ 也可能是 S 或 s ，这会将系统直接置于单用户模式，而无需先实际停止进程，您可能不希望这样。

通过发出 `runlevel(7)` 事件来更改运行级别，该事件包括 _RUNLEVEL_ 环境变量中的新运行级别以及 PREVLEVEL 变量中的先前运行级别（从环境或 `/var/run/utmp` 获得）。

**telinit** 会将新的运行级别写入 `/var/run/utmp` 并将新条目附加到 `/var/log/wtmp`。

###  语法

```shell
telint(选项)(参数)
telinit [OPTION]... RUNLEVEL
```

###  选项

```shell
-t：指定等待的秒数。
-e 键=值
```

这指定了与 _RUNLEVEL_ 和 _PREVLEVEL_ 一起包含在事件中的附加环境变量。

###  参数

运行等级：指定要切换的运行等级。

### Environment

RUNLEVEL

如果设置优先于从 `/var/run/utmp` 读取，`telinit` 将从该环境变量读取当前运行级别

### Files

- `/var/run/utmp` 将从哪里读取当前运行级别； 此文件也将使用新的运行级别进行更新。
- `/var/log/wtmp` 新的运行级别记录将附加到此文件中以获取新的运行级别。

