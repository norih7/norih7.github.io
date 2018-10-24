var path = require("path");
var commonPath = "node_modules/common";

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, commonPath, "components")
            }
        }
    });
};
