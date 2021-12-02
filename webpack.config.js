let mode="development";
if(process.env.NODE_ENV === "production"){
    mode = "production";
}
module.exports = {
    mode: mode,
    devServer: {
        static: "./dist"
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}