getfacl
===

获取文件访问控制列表(access control lists)

## 补充说明

对于每个文件，`getfacl`都会显示文件名、所有者、组和访问控制列表 (ACL)。如果目录有默认ACL，`getfacl` 也会显示默认ACL。非目录不能有默认ACL。
如果在不支持 ACL 的文件系统上使用`getfacl`，`getfacl`会显示由传统文件模式权限位定义的访问权限。请参考`setfacl`。

###  选项

```shell
-a, --access              # 显示文件访问控制列表。
-d, --default             # 显示默认访问控制列表。
-c, --omit-header         # 不显示注释头（每个文件输出的前三行）。
-e, --all-effective       # 打印所有有效权限注释，即使与 ACL 条目定义的权限相同。
-E, --no-effective        # 不打印有效权限注释。
-s, --skip-base           # 跳过只有基本 ACL 条目（所有者、组、其他）的文件。
-R, --recursive           # 递归列出所有文件和目录的 ACL。
-L, --logical             # 逻辑路径，跟踪目录的符号链接。默认行为是跟踪符号链接参数，跳过子目录中遇到的符号链接。仅与 -R 结合使用时有效。
-P, --physical            # 物理路径，不跟踪指向目录的符号链接。这也会跳过符号链接参数。 仅与 -R 结合使用时有效。
-t, --tabular             # 使用另一种表格输出格式。同时显示 ACL 和默认 ACL。因 ACL 屏蔽条目而无效的权限会以大写。ACL_USER_OBJ 和 ACL_GROUP_OBJ 条目的条目标签名称也以大写字母显示，这有助于识别这些条目。
-p, --absolute-names      # 不删除前导斜线字符 (`/')。默认行为是去掉前导斜线字符。
-n, --numeric             # 列出数字用户和组 ID。
-v, --version             # 打印 getfacl 的版本并退出。
-h, --help                # 打印命令行选项的帮助说明。
--                        # 命令行选项结束。所有剩余参数都被解释为文件名，即使它们以破折号字符开头。
-                         # 如果文件名参数是单破折号字符，getfacl 将从标准输入读取文件列表。
```

###  实例

getfacl 命令默认显示文件访问控制列表。打开终端，并输入以下命令：

```shell
getfacl tmp 

# file: tmp
# owner: zdx
# group: zdx
# flags: -s-
user::rwx
group::rwx
other::r-x
default:user::rwx
default:group::rwx
default:other::r-x
```
