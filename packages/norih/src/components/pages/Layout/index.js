import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../../../contaienrs/Header";
import css from "./index.module.css";

console.log("!!!!", css);

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <ErrorBoundary>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: "description", content: "Sample" },
                            { name: "keywords", content: "sample, something" }
                        ]}
                    >
                        <html lang="ja" />
                    </Helmet>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div className={css["container"]}>{children}</div>
                </ErrorBoundary>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
