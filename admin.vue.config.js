const path = require("path");
module.exports = {
    outputDir: path.resolve(__dirname, "./dist/admin"),
    assetsDir: "./",
    publicPath:"",
    pages:{
        index: {
            entry: './src/admin/main.js'
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