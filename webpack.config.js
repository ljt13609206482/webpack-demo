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
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',
            inject:'body',
            template:'index.html',
            title:'this is a.html',
            chunks:['main','a']
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
            // minify:{//压缩文件
            //     removeCommonts:true,
            //     collapseWhitespace:true
            // }
        }),
        new htmlWebpackPlugin({
            filename:'c.html',
            inject:'body',
            template:'index.html',
            title:'this is c.html',
            chunks:['c']
            // minify:{//压缩文件
            //     removeCommonts:true,
            //     collapseWhitespace:true
            // }
        })
    ]
        
}