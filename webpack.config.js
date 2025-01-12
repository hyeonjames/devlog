var path = require('path');
module.exports = {
    entry : "./src/app.tsx",
    output : {
        filename : "bundle.js",
        path : __dirname + "/dist"
    },

    devtool : "source-map",

    resolve : {
        extensions : [".ts", ".tsx", ".js", ".json"]
    },

    module : {
        rules : [
            { test : /\.tsx?$/, loader : "awesome-typescript-loader" },
            { enforce : "pre", test : /\.js$/, loader : "source-map-loader"}
        ]
    },
    externals : {
        "react" : "React",
        "react-dom" : "ReactDOM"
    },
    mode : "development",
    devServer : {
        port : 3000,
        contentBase : path.join(__dirname , 'dist')
    }
}