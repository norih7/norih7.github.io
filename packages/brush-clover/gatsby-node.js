var path = require("path");

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

console.log("!!!!", path.resolve(__dirname, "node_modules/common"));

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    // TODO: エイリアスの解決はできていないので修正する
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, "node_modules/common/components")
            }
        }
    });
};
