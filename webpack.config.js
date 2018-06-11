var htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:{
        main:'./src/index.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js',
    },
    output:{
        filename:'js/[name]-[hash].js',
        publicPath:'http://www.cdn.com'
    },
    module:{//指定对应文件格式的loader
        rules:[
            {test: /\.css$/,
            use: [
            { loader: 'style-loader' },
            {
                loader: 'css-loader',
                options: {
                modules: true
                }
            }
            ]
        }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',
            inject:'body',
            template:'index.html',
            title:'this is a.html',
            chunks:['main','a'],
            // excludeChunks:[]除了....chunk以外
            // minify:{//压缩文件
            //     removeCommonts:true,
            //     collapseWhitespace:true
            // }
        }),
        new htmlWebpackPlugin({
            filename:'b.html',
            inject:'body',
            template:'index.html',
            title:'this is b.html',
            chunks:['b']
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            inject:'body',
            template:'index.html',
            title:'this is c.html',
            chunks:['c']
        })
    ]
        
}