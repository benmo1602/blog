
supervisor

Running node-supervisor with
  program 'app.js'
  --watch '.'
  --extensions 'node,js'
  --exec 'node'


Node.js 的事件循环机制
Node.js 在什么时候会进入事件循环呢？答案是 Node.js 程序由事件循环开始，到事件循
环结束，所有的逻辑都是事件的回调函数，所以 Node.js 始终在事件循环中，程序入口就是
事件循环第一个事件的回调函数。事件的回调函数在执行的过程中，可能会发出 I/O 请求或
直接发射（emit）事件，执行完毕后再返回事件循环，事件循环会检查事件队列中有没有未
处理的事件，直到程序结束。图3-5说明了事件循环的原理


模块
事实上，exports 本身仅仅是一个普通的空对象，即 {}，它专门用来声明接口，本
质上是通过它为模块闭包①的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，
所以可以用其他东西来代替，譬如我们上面例子中的 Hello 对象。


① npm 之于 Node.js，
就像 pip 之于 Python，
gem 之于 Ruby，
pear 之于 PHP，
CPAN 之于 Perl
……同时也像
apt-get 之于 Debian/Ubutnu，
yum 之于 Fedora/RHEL/CentOS，
homebrew 之于 Mac OS X
