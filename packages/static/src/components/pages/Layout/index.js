import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Header from "../../../contaienrs/Header";
import Footer from "@norih/common/components/organisms/Footer";
import Wrapper from "@norih/common/components/organisms/Wrapper";
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
                <React.Fragment>
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
                    <Wrapper style={{ padding: "40px 0" }}>{children}</Wrapper>
                    <Footer>&copy; {title} </Footer>
                </React.Fragment>
            );
        }}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
