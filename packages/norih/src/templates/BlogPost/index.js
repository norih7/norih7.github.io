import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/pages/Layout";
import css from "./index.module.css";

export default function BlogPost({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <div className={css["entry"]}>
                <header>
                    <h1>{frontmatter.title}</h1>
                </header>

                <p>{frontmatter.date}</p>
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
