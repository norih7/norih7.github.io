const path = require("path");

module.exports = {
    webpackFinal: async config => {
        // 先にデフォルトで有効になっているcss-loaderの設定を削除
        config.module.rules = config.module.rules.filter(f => f.test.toString() !== "/\\.css$/");
        config.module.rules.push({
            test: /\.css$/,
            use: ["style-loader", "css-loader?modules"],
            include: path.resolve(__dirname, "../")
        });

        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("ts-loader")
                },
                // Optional
                {
                    loader: require.resolve("react-docgen-typescript-loader")
                }
            ]
        });
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    }
};
