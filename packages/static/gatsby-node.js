const path = require("path");
const rootPath = path.join(__dirname, "../../");
const resolve = require(path.join(rootPath, "webpack.resolve.js"));
const dotenv = require("dotenv").config({
    path: path.join(rootPath, ".env")
});
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

// 現在のディレクトリのパスに置き換える
// 共通のutility関数として切り出しをする
for (let key in resolve.resolve.alias) {
    resolve.resolve.alias[key] = path.resolve(__dirname, resolve.resolve.alias[key]);
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig(resolve);
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve(`src/templates/BlogPost/index.js`);

    return graphql(`
        {
            allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {} // additional data can be passed via context
            });
        });
    });
};
