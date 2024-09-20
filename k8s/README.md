# 快速入门指南

本指南旨在帮助您在 Kubernetes 中部署基于 `wcjiang/linux-command` 镜像的 `linux-command` 应用。该应用提供了一套 `Deployment`，并通过 `Service` 对外暴露服务端口。

## 前提条件

- 已安装并配置好的 Kubernetes 集群
- 安装并配置好的 `kubectl`，并连接至你的 Kubernetes 集群

## 安装步骤

我们将使用此存储库中的`kubectl`应用 YAML 文件，该文件将安装 `linux-command` 应用。

```bash
$ kubectl apply -f https://raw.githubusercontent.com/jaywcjlove/linux-command/refs/heads/master/k8s/linux-command.yaml
```

检查 `Deployment` 状态：

```bash
$ kubectl get deployments -n linux-command
NAME            READY   UP-TO-DATE   AVAILABLE   AGE
linux-command   1/1     1            1           17m
```

你可以查看 `Pod` 的状态以确保其正常运行：

```bash
$ kubectl get pods -n linux-command
NAME                            READY   STATUS    RESTARTS   AGE
linux-command-fff454654-427zp   1/1     Running   0          12m
```

验证 `Service` 是否成功创建并获取暴露的端口：

```
$ kubectl get services -n linux-command
NAME                    TYPE       CLUSTER-IP    EXTERNAL-IP   PORT(S)          AGE
linux-command-service   NodePort   10.96.2.225   <none>        9665:30204/TCP   18m
```

## 访问应用

通过获取 `NodePort` 的端口来访问应用。以下是获取 `NodePort` 服务信息的命令：

```
$ kubectl get svc linux-command-service -n linux-command
```

根据输出，使用 `EXTERNAL-IP:PORT` 访问服务。例如：

```
http://<Node-IP>:<NodePort>
```

## 卸载应用

如果需要删除已部署的资源，可以按以下顺序操作：

```
kubectl delete -f linux-command.yaml
```

这将会清理所有创建的 Kubernetes 资源。
