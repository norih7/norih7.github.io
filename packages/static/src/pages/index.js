import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/pages/Layout";
import { createUri } from "@norih/common/utils/Link";
import css from "./index.module.css";

const IndexPage = props => {
    const postList = props.data.allMarkdownRemark;
    return (
        <Layout contentName="blog">
            {postList.edges.map(({ node }, i) => {
                const key = `section-${i}`;
                const { path, title, date } = node.frontmatter;
                return (
                    <section className={css["entry"]} key={key}>
                        <Link to={createUri(path)} className="link">
                            <h1>{title}</h1>
                        </Link>
                        <span className={css["date"]}>{date}</span>
                        <p>{node.excerpt}</p>
                    </section>
                );
            })}
        </Layout>
    );
};
export default IndexPage;
export const listQuery = graphql`
    query ListQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 150)
                    frontmatter {
                        date(formatString: "MMMM Do YYYY")
                        title
                        path
                    }
                }
            }
        }
    }
`;
