import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql, Link } from "gatsby";
import ErrorBoundary from "../ErrorBoundary";
import Header from "../../../contaienrs/Header";
import css from "./index.module.css";

const Layout = ({ children, contentName }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => {
            const { title, description } = data.site.siteMetadata;
            const contentHeader =
                typeof contentName == "undefined" ? null : (
                    <div className={css["contentHeader"]}>
                        <h2>{contentName}</h2>
                    </div>
                );

            return (
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
                        <Header siteTitle={title} description={description}>
                            {contentHeader}
                        </Header>
                        <div className={css["container"]}>{children}</div>
                    </ErrorBoundary>
                </>
            );
        }}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
