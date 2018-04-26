1.  安装 webpack

    npm install webpack --dev-save

2.  安装 webpack-dev-server

    npm install webpack-dev-server --dev-save

3.  webpack 打包的入口文件是 app/ root.js

4.  打包完成后在 build 下生成 app.js
5.  Bable 核心思想是把 es6 换成 es5 ， 目的是让我们的代码可以在浏览器下运行，bable 不急可以处理 es6 的转码，还可以处理其他的转码，比如说 react
6.  使用 bable 等一些 loader, 根据 loader 报错 安装配置 loader
7.  webpack 的 plugin 有点类似钩子

8)  HtmlWebpackPlugin 这个插件是帮助我们打包生成 build/app.js 之后,自动生成的一个 html，并使用这个 app.js

9)  安装 HtmlWebpackPlugin

10) inline: true 热替换
