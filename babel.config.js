module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", {
            runtime: "automatic" // this is use-full when we are just using JSX but not react then it will not include react
        }]
    ]
}