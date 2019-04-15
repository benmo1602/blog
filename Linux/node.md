# linux 环境安装 node

    安装 node

    cd /usr/local/src/
    wget http://nodejs.org/dist/v8.11.4/node-v8.11.4.tar.gz

    tar zxvf node-v8.11.4.tar.gz

    cd node-v8.11.4

    ./configure --prefix=/usr/local/node/8.11.4

    make

    make install

    vim /etc/profile

    #set for nodejs
    export NODE_HOME=/usr/local/node/8.11.4
    export PATH=$NODE_HOME/bin:$PATH

    source /etc/profile

    node -v

    /usr/local/node/8.11.4/lib/node_modules/
