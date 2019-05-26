const path = require("path");

// module.exports = {
//     plugins: [],
//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 loaders: ["style-loader", "css-loader?modules"]
//             },
//             {
//                 test: /\.(ts|tsx)$/,
//                 use: [
//                     {
//                         loader: require.resolve("awesome-typescript-loader")
//                     },
//                     {
//                         loader: require.resolve("react-docgen-typescript-loader")
//                     }
//                 ]
//             }
//         ]
//     }
// };

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve("awesome-typescript-loader")
            }
        ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
