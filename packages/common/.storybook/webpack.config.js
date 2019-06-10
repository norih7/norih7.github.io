const path = require("path");

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve("awesome-typescript-loader")
            }
        ]
    });

    // 先にデフォルトで有効になっているcss-loaderの設定を削除
    config.module.rules = config.module.rules.filter(f => f.test.toString() !== "/\\.css$/");
    config.module.rules.push({
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"],
        include: path.resolve(__dirname, "../")
    });

    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
