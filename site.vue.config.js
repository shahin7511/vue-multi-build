const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "./dist/site"),
    assetsDir: "./",
    publicPath:"",
    pages:{
        index: {
            entry: './src/site/main.js'
        }
    },
    devServer: {
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 8088, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
    },
}