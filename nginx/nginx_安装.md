安装 nginx

ububtu

```
apt-get install build-essential
apt-get install libtool
```

 centos平台编译环境使用如下指令

```
// 安装make
yum -y install gcc automake autoconf libtool make
// 安装g++
yum install gcc gcc-c++
```

安装 pcre

```
cd /usr/local/src
wget https://ftp.pcre.org/pub/pcre/pcre-8.44.tar.gz 
tar -zxvf pcre-8.44.tar.gz
cd pcre-8.44
./configure
make
make install
```

zlib

```
cd /usr/local/src
 
wget http://zlib.net/zlib-1.2.11.tar.gz
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11
./configure
make
make install
```

**安装ssl（某些vps默认没装ssl)**

```
cd /usr/local/src
wget https://www.openssl.org/source/openssl-1.1.1g.tar.gz
tar -zxvf openssl-1.1.1g.tar.gz
```

**安装nginx**

```
cd /usr/local/src
wget http://nginx.org/download/nginx-1.18.0.tar.gz
tar -zxvf nginx-1.18.0.tar.gz
cd nginx-1.18.0
 
./configure --sbin-path=/usr/local/nginx/nginx \
--conf-path=/usr/local/nginx/nginx.conf \
--pid-path=/usr/local/nginx/nginx.pid \
--with-http_gzip_static_module \
--with-http_stub_status_module \
--with-file-aio \
--with-http_realip_module \
--with-http_ssl_module \
--with-pcre=/usr/local/src/pcre-8.44 \
--with-zlib=/usr/local/src/zlib-1.2.11 \
--with-openssl=/usr/local/src/openssl-1.1.1g
 
make -j2
make install
```

--with-pcre=/usr/local/src/pcre-8.44 指的是pcre-8.44 的源码路径。
--with-zlib=/usr/local/src/zlib-1.2.11指的是zlib-1.2.11 的源码路径。

安装成功后 /usr/local/nginx 目录下如下



启动

```
netstat -ano|grep 80

ubuntu下必须用sudo启动，不然只能在前台运行）
sudo /usr/local/nginx/nginx
```



