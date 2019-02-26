// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require("path");
const rootPath = path.join(__dirname, "../../../");
const resolve = require(path.join(rootPath, "webpack.resolve.js"));

module.exports = {
    plugins: [
        // your custom plugins
    ],
    module: {
        rules: [
            // add your custom rules.
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader?modules"]
            }
        ]
    }
};

// TODO: Gatsbyの.storybook/webpack.config.jsの設定を記述する
