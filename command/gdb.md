gdb
===

功能强大的程序调试器

## 补充说明

**gdb命令** 包含在GNU的gcc开发套件中，是功能强大的程序调试器。GDB中的命令固然很多，但我们只需掌握其中十个左右的命令，就大致可以完成日常的基本的程序调试工作。

### 语法

```shell
gdb(选项)(参数)
```

### 选项

```shell
-cd：设置工作目录；
-q：安静模式，不打印介绍信息和版本信息；
-d：添加文件查找路径；
-x：从指定文件中执行GDB指令；
-s：设置读取的符号表文件。
```

<table border="0" cellpadding="0" cellspacing="0">
<tbody>
<tr>
<th>命令</th>
<th>解释</th>
<th>示例</th>
</tr>
<tr>
<td>file <文件名></td>
<td>加载被调试的可执行程序文件。
因为一般都在被调试程序所在目录下执行GDB，因而文本名不需要带路径。</td>
<td>(gdb) file gdb-sample</td>
</tr>
<tr>
<td>r</td>
<td>Run的简写，运行被调试的程序。
如果此前没有下过断点，则执行完整个程序；如果有断点，则程序暂停在第一个可用断点处。</td>
<td>(gdb) r</td>
</tr>
<tr>
<td>c</td>
<td>Continue的简写，继续执行被调试程序，直至下一个断点或程序结束。</td>
<td>(gdb) c</td>
</tr>
<tr>
<td>b <行号>
b <函数名称>
b *<函数名称>
b *<代码地址> d [编号]</td>

<td>b: Breakpoint的简写，设置断点。两可以使用“行号”“函数名称”“执行地址”等方式指定断点位置。
其中在函数名称前面加“*”符号表示将断点设置在“由编译器生成的prolog代码处”。如果不了解汇编，可以不予理会此用法。 d: Delete breakpoint的简写，删除指定编号的某个断点，或删除所有断点。断点编号从1开始递增。</td>
<td>(gdb) b 8
(gdb) b main
(gdb) b *main
(gdb) b *0x804835c (gdb) d</td>
</tr>
<tr>
<td>s, n</td>
<td>s: 执行一行源程序代码，如果此行代码中有函数调用，则进入该函数；
n: 执行一行源程序代码，此行代码中的函数调用也一并执行。 s 相当于其它调试器中的“Step Into (单步跟踪进入)”；
n 相当于其它调试器中的“Step Over (单步跟踪)”。 这两个命令必须在有源代码调试信息的情况下才可以使用（GCC编译时使用“-g”参数）。</td>
<td>(gdb) s
(gdb) n</td>
</tr>
<tr>
<td>si, ni</td>
<td>si命令类似于s命令，ni命令类似于n命令。所不同的是，这两个命令（si/ni）所针对的是汇编指令，而s/n针对的是源代码。</td>
<td>(gdb) si
(gdb) ni</td>
</tr>
<tr>
<td>p <变量名称></td>
<td>Print的简写，显示指定变量（临时变量或全局变量）的值。</td>
<td>(gdb) p i
(gdb) p nGlobalVar</td>
</tr>
<tr>
<td>display ... undisplay <编号></td>
<td>display，设置程序中断后欲显示的数据及其格式。
例如，如果希望每次程序中断后可以看到即将被执行的下一条汇编指令，可以使用命令
“display /i $pc”
其中 $pc 代表当前汇编指令，/i 表示以十六进行显示。当需要关心汇编代码时，此命令相当有用。 undispaly，取消先前的display设置，编号从1开始递增。</td>
<td>(gdb) display /i $pc (gdb) undisplay 1</td>
</tr>
<tr>
<td>i</td>
<td>info的简写，用于显示各类信息，详情请查阅“help i”。</td>
<td>(gdb) i r</td>
</tr>
<tr>
<td>q</td>
<td>Quit的简写，退出GDB调试环境。</td>
<td>(gdb) q</td>
</tr>
<tr>
<td>help [命令名称]</td>
<td>GDB帮助命令，提供对GDB名种命令的解释说明。
如果指定了“命令名称”参数，则显示该命令的详细说明；如果没有指定参数，则分类显示所有GDB命令，供用户进一步浏览和查询。</td>
<td>(gdb) help</td>
</tr>
</tbody>
</table>


### 参数

文件：二进制可执行程序。

### 实例

以下是linux下dgb调试的一个实例，先给出一个示例用的小程序，C语言代码：

```shell
#include <stdio.h>
int nGlobalVar = 0;

int tempFunction(int a, int b)
{
    printf("tempFunction is called, a = %d, b = %d /n", a, b);
    return (a + b);
}

int main()
{
    int n;
        n = 1;
        n++;
        n--;

        nGlobalVar += 100;
        nGlobalVar -= 12;

    printf("n = %d, nGlobalVar = %d /n", n, nGlobalVar);

        n = tempFunction(1, 2);
    printf("n = %d", n);

    return 0;
}
```

请将此代码复制出来并保存到文件 gdb-sample.c 中，然后切换到此文件所在目录，用GCC编译之：

```shell
gcc gdb-sample.c -o gdb-sample -g
```

在上面的命令行中，使用 -o 参数指定了编译生成的可执行文件名为 gdb-sample，使用参数 -g 表示将源代码信息编译到可执行文件中。如果不使用参数 -g，会给后面的GDB调试造成不便。当然，如果我们没有程序的源代码，自然也无从使用 -g 参数，调试/跟踪时也只能是汇编代码级别的调试/跟踪。

下面“gdb”命令启动GDB，将首先显示GDB说明，不管它：

```shell
GNU gdb Red Hat Linux (5.3post-0.20021129.18rh)
Copyright 2003 free Software Foundation, Inc.
GDB is free software, covered by the GNU General Public License, and you are
welcome to change it and/or distribute copies of it under certain conditions.
type "show copying" to see the conditions.
There is absolutely no warranty for GDB. Type "show warranty" for details.
This GDB was configured as "i386-redhat-linux-gnu".
(gdb)
```

上面最后一行“(gdb)”为GDB内部命令引导符，等待用户输入GDB命令。

下面使用“file”命令载入被调试程序 gdb-sample（这里的 gdb-sample 即前面 GCC 编译输出的可执行文件）：

```shell
(gdb) file gdb-sample
Reading symbols from gdb-sample...done.
```

上面最后一行提示已经加载成功。

下面使用“r”命令执行（Run）被调试文件，因为尚未设置任何断点，将直接执行到程序结束：

```shell
(gdb) r
Starting program: /home/liigo/temp/test_jmp/test_jmp/gdb-sample
n = 1, nGlobalVar = 88
tempFunction is called, a = 1, b = 2
n = 3
Program exited normally.
```

下面使用“b”命令在 main 函数开头设置一个断点（Breakpoint）：

```shell
(gdb) b main
Breakpoint 1 at 0x804835c: file gdb-sample.c, line 19.
```

上面最后一行提示已经成功设置断点，并给出了该断点信息：在源文件 gdb-sample.c 第19行处设置断点；这是本程序的第一个断点（序号为1）；断点处的代码地址为 0x804835c（此值可能仅在本次调试过程中有效）。回过头去看源代码，第19行中的代码为“n = 1”，恰好是 main 函数中的第一个可执行语句（前面的“int n;”为变量定义语句，并非可执行语句）。

再次使用“r”命令执行（Run）被调试程序：

```shell
(gdb) r
Starting program: /home/liigo/temp/gdb-sample

Breakpoint 1, main () at gdb-sample.c:19
19 n = 1;
```

程序中断在gdb-sample.c第19行处，即main函数是第一个可执行语句处。

上面最后一行信息为：下一条将要执行的源代码为“n = 1;”，它是源代码文件gdb-sample.c中的第19行。

下面使用“s”命令（Step）执行下一行代码（即第19行“n = 1;”）：

```shell
(gdb) s
20 n++;
```

上面的信息表示已经执行完“n = 1;”，并显示下一条要执行的代码为第20行的“n++;”。

既然已经执行了“n = 1;”，即给变量 n 赋值为 1，那我们用“p”命令（Print）看一下变量 n 的值是不是 1 ：

```shell
(gdb) p n
$1 = 1
```

果然是 1。（$1大致是表示这是第一次使用“p”命令——再次执行“p n”将显示“$2 = 1”——此信息应该没有什么用处。）

下面我们分别在第26行、tempFunction 函数开头各设置一个断点（分别使用命令“b 26”“b tempFunction”）：

```shell
(gdb) b 26
Breakpoint 2 at 0x804837b: file gdb-sample.c, line 26.
(gdb) b tempFunction
Breakpoint 3 at 0x804832e: file gdb-sample.c, line 12.
```

使用“c”命令继续（Continue）执行被调试程序，程序将中断在第二 个断点（26行），此时全局变量 nGlobalVar 的值应该是 88；再一次执行“c”命令，程序将中断于第三个断点（12行，tempFunction 函数开头处），此时tempFunction 函数的两个参数 a、b 的值应分别是 1 和 2：

```shell
(gdb) c
Continuing.

Breakpoint 2, main () at gdb-sample.c:26
26 printf("n = %d, nGlobalVar = %d /n", n, nGlobalVar);
(gdb) p nGlobalVar
$2 = 88
(gdb) c
Continuing.
n = 1, nGlobalVar = 88

Breakpoint 3, tempFunction (a=1, b=2) at gdb-sample.c:12
12 printf("tempFunction is called, a = %d, b = %d /n", a, b);
(gdb) p a
$3 = 1
(gdb) p b
$4 = 2
```

上面反馈的信息一切都在我们预料之中~~

再一次执行“c”命令（Continue），因为后面再也没有其它断点，程序将一直执行到结束：

```shell
(gdb) c
Continuing.
tempFunction is called, a = 1, b = 2
n = 3
Program exited normally.
```

有时候需要看到编译器生成的汇编代码，以进行汇编级的调试或跟踪，又该如何操作呢？

这就要用到display命令“display /i $pc”了（此命令前面已有详细解释）：

```shell
(gdb) display /i $pc
(gdb)
```

此后程序再中断时，就可以显示出汇编代码了：

```shell
(gdb) r
Starting program: /home/liigo/temp/test_jmp/test_jmp/gdb-sample

Breakpoint 1, main () at gdb-sample.c:19
19 n = 1;
1: x/i $pc 0x804835c <main+16>: movl $0x1,0xfffffffc(%ebp)
```

看到了汇编代码，“n = 1;”对应的汇编代码是“movl $0x1,0xfffffffc(%ebp)”。

并且以后程序每次中断都将显示下一条汇编指定（“si”命令用于执行一条汇编代码——区别于“s”执行一行C代码）：

```shell
(gdb) si
20 n++;
1: x/i $pc 0x8048363 <main+23>: lea 0xfffffffc(%ebp),%eax
(gdb) si
0x08048366 20 n++;
1: x/i $pc 0x8048366 <main+26>: incl (%eax)
(gdb) si
21 n--;
1: x/i $pc 0x8048368 <main+28>: lea 0xfffffffc(%ebp),%eax
(gdb) si
0x0804836b 21 n--;
1: x/i $pc 0x804836b <main+31>: decl (%eax)
(gdb) si
23 nGlobalVar += 100;
1: x/i $pc 0x804836d <main+33>: addl $0x64,0x80494fc
```

接下来我们试一下命令“b *<函数名称>”。

为了更简明，有必要先删除目前所有断点（使用“d”命令——Delete breakpoint）：

```shell
(gdb) d
Delete all breakpoints? (y or n) y
(gdb)
```

当被询问是否删除所有断点时，输入“y”并按回车键即可。

下面使用命令“b *main”在 main 函数的 prolog 代码处设置断点（prolog、epilog，分别表示编译器在每个函数的开头和结尾自行插入的代码）：

```shell
(gdb) b *main
Breakpoint 4 at 0x804834c: file gdb-sample.c, line 17.
(gdb) r
The program being debugged has been started already.
Start it from the beginning? (y or n) y
Starting program: /home/liigo/temp/test_jmp/test_jmp/gdb-sample

Breakpoint 4, main () at gdb-sample.c:17
17 {
1: x/i $pc 0x804834c <main>: push %ebp
(gdb) si
0x0804834d 17 {
1: x/i $pc 0x804834d <main+1>: mov %esp,%ebp
(gdb) si
0x0804834f in main () at gdb-sample.c:17
17 {
1: x/i $pc 0x804834f <main+3>: sub $0x8,%esp
(gdb) si
0x08048352 17 {
1: x/i $pc 0x8048352 <main+6>: and $0xfffffff0,%esp
(gdb) si
0x08048355 17 {
1: x/i $pc 0x8048355 <main+9>: mov $0x0,%eax
(gdb) si
0x0804835a 17 {
1: x/i $pc 0x804835a <main+14>: sub %eax,%esp
(gdb) si
19 n = 1;
1: x/i $pc 0x804835c <main+16>: movl $0x1,0xfffffffc(%ebp)
```

此时可以使用“i r”命令显示寄存器中的当前值———“i r”即“Infomation Register”：

```shell
(gdb) i r
eax 0xbffff6a4 -1073744220
ecx 0x42015554 1107383636
edx 0x40016bc8 1073834952
ebx 0x42130a14 1108544020
esp 0xbffff6a0 0xbffff6a0
ebp 0xbffff6a8 0xbffff6a8
esi 0x40015360 1073828704
edi 0x80483f0 134513648
eip 0x8048366 0x8048366
eflags 0x386 902
cs 0x23 35
ss 0x2b 43
ds 0x2b 43
es 0x2b 43
fs 0x0 0
gs 0x33 51
```

当然也可以显示任意一个指定的寄存器值：

```shell
(gdb) i r eax
eax 0xbffff6a4 -1073744220
```

最后一个要介绍的命令是“q”，退出（Quit）GDB调试环境：

```shell
(gdb) q
The program is running. exit anyway? (y or n)
```

## 补充内容

> gdb 教程：[慕课网-Linux C语言指针与内存-第三章](http://www.imooc.com/learn/394)

如果删除源代码, 就无法显示行号等辅助信息了

```shell
gcc -g gdb.c -o gdb.out # -g 支持gdb调试; -o 输出, 默认为 a.out

gdb gdb.out # 进入 gdb 调试环境
enter # 继续执行上条命令
l # 列出源代码, 默认 10 行, 按 l 继续

start # 开始单步调试, 默认 main() 第一行
p a # 查看 a 变量的值
n # 继续到下一行
s # 进入子函数
bt # 查看函数栈
f 1 # 切换函数栈

q 退出调试
```

测试用代码

```c
#include <stdio.h>

void change(int a, int b){
    int tmp=a;
    a=b; b=tmp;
}

void change2(int *a, int *b){
    int tmp=*a;
    *a=*b; *b=tmp;
}

int main(){
    int a=5,b=3;
    change(a,b);
    printf("change:\na=%d\nb=%d\n", a,b);
    change2(&a,&b);
    printf("change2:\na=%d\nb=%d\n", a,b);
}
```

<!-- Linux命令行搜索引擎：https://jaywcjlove.github.io/linux-command/ -->