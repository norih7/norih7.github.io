const path = require("path");
const rootPath = path.join(__dirname, "../../");
const resolve = require(path.join(rootPath, "webpack.resolve.js"));
const dotenv = require("dotenv").config({
    path: path.join(rootPath, ".env")
});

// 現在のディレクトリのパスに置き換える
// TODO: issue
// 共通のutility関数として切り出しをする
for (let key in resolve.resolve.alias) {
    resolve.resolve.alias[key] = path.resolve(__dirname, resolve.resolve.alias[key]);
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig(resolve);
};
