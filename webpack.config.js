const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode="development";
let target="web";
if(process.env.NODE_ENV === "production"){
    mode = "production";
    target = "browserslist";
}
module.exports = {
    mode: mode, // mode of environment
    target: target, // this is required to keep hot reloading
    devServer: {
        static: "./dist",
        hot: true,
    },
    devtool: "source-map", // we can set this true if want to see the final code without map, source-map will generate map file also
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ,"sass-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [".js",".jsx"]
    }
}