var path = require("path");
var commonPath = "node_modules/common/";

module.exports = {
    resolve: {
        alias: {
            "@components": commonPath + "components"
        }
    }
};
