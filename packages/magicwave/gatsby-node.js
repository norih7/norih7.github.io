/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const items = [
        { name: "アップルグミ", type: "tool", charts: ["1-1", "1-2"], maps: ["tortis-"] },
        { name: "ライフボトル", type: "tool", charts: ["1-2"], maps: ["tortis-"] },
        { name: "マスコット", type: "other", charts: ["1-1"], maps: ["tortis-"] },
        { name: "リンゴ", type: "food", charts: ["1-1"], maps: ["none"] },
    ];
    items.forEach((item) => {
        const { name, type, maps, charts } = item;
        const node = {
            name,
            type,
            charts,
            maps,
            id: createNodeId(`Item-${item.name}`),
            internal: {
                type: "Item",
                contentDigest: createContentDigest(item),
            },
        };
        actions.createNode(node);
    });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    });
};
