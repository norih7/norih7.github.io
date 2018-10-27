var path = require("path");
var commonPath = "node_modules/common";
var dotenv = require("dotenv").config({
    path: path.join(__dirname, "../../.env")
});

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, commonPath, "components")
            }
        }
    });
};
