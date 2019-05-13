const path = require("path");

module.exports = {
    plugins: [],
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader?modules"]
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve("awesome-typescript-loader")
                    }
                ]
            }
        ]
    }
};
