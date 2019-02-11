var path = require("path");
var commonPath = "node_modules/common/";

module.exports = {
    resolve: {
        alias: {
            "@react/common": commonPath,
            "@containers": commonPath + "containers",
            "@components": commonPath + "components",
            "@stores": commonPath + "stores",
            "@middlewares": commonPath + "middlewares"
        }
    }
};
