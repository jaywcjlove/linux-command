# linux-command

linux-command 的 Helm 图表。该图表使用 Helm 软件包管理器在 Kubernetes 集群上引导部署 linux-command。

## 安装 Chart

```
$ helm install linux-command ./linux-command --namespace linux-command --create-namespace
```

## 卸载 Chart

```
$ helm -n linux-command uninstall linux-command
```

这会删除与图表相关的所有 Kubernetes 组件，并删除发布。

## 配置参数

下表列出了 linux-command 图表的可配置参数及其默认值。

| Key                                                          | Type   | Default                   | Description |
| ------------------------------------------------------------ | ------ | ------------------------- | ----------- |
| linuxCommand.linuxCommandContainer.image.repository          | string | `"wcjiang/linux-command"` |             |
| linuxCommand.linuxCommandContainer.image.tag                 | string | `"latest"`                |             |
| linuxCommand.linuxCommandContainer.imagePullPolicy           | string | `"IfNotPresent"`          |             |
| linuxCommand.linuxCommandContainer.resources.limits.cpu      | string | `"100m"`                  |             |
| linuxCommand.linuxCommandContainer.resources.limits.memory   | string | `"50Mi"`                  |             |
| linuxCommand.linuxCommandContainer.resources.requests.cpu    | string | `"100m"`                  |             |
| linuxCommand.linuxCommandContainer.resources.requests.memory | string | `"50Mi"`                  |             |
| linuxCommand.replicas                                        | int    | `1`                       |             |
| service.ports[0].port                                        | int    | `9665`                    |             |
| service.ports[0].protocol                                    | string | `"TCP"`                   |             |
| service.ports[0].targetPort                                  | int    | `3000`                    |             |
| service.type                                                 | string | `"NodePort"`              |             |

使用`-set key=value[,key=value]`参数为`helm install`指定每个参数。

或者，也可以在安装图表时提供指定参数值的 YAML 文件。例如

```
helm install <release-name> -f values.yaml ./linux-command
```
