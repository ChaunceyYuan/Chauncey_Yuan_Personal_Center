module.exports = {
    // 打包时是否包含map映射文件
    // productionSourceMap: false,
    // 输出的文件夹配置
    // outputDir: "./xxxdist",
    // 设置所有的资源放在同一个目录中
    // assetsDir: "assets",
    // 设置路径(资源路径)
    // publicPath:"http://www.xxx.com/xxx",
    // 在vue中@代表src
    // chainWebpack: config => {
    //     config.resolve.alias.set("_v", path.resolve(__dirname, "src/views"))
    // },
    configureWebpack: {
        devtool: 'source-map',
        devServer: {
            port: 8080, //前端页面打开端口号
            // open: true, //启动时自动打开浏览器
            proxy: { //nodejs代理服务器设置
                '/api': {
                    target: 'http://127.0.0.1:3000', //服务端地址
                    // // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                    // changeOrigin: true,
                    // ws: true, //是否代理websockets
                    // pathRewrite: { // 重写请求
                    //     '^/api': '/api' // 替换target中的请求地址，也就是说在请求http://127.0.0.1:8888/XXXXX这个地址的时候直接写成/api即可。
                    // },
                    // "secure": false
                },
                '/photos': {
                    target: "https://api.unsplash.com"
                }


            }
        }
    }
}