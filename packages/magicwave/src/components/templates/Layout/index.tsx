import * as React from "react";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import "./initialize.css";
import * as styles from "./styles.module.css";

const Layout = ({ children }: any) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            {/* <nav className={styles["navigator"]}>
                <div style={{ width: "900px", margin: "0 auto" }}>
                    <ul>
                        <li>Menu1</li>
                        <li>Menu2</li>
                    </ul>
                </div>
            </nav> */}
            <header className={styles["header"]}>
                <div style={{ width: "900px", margin: "0 auto" }}>
                    <h1>{data.site.siteMetadata.title}</h1>
                </div>
            </header>
            <div className={styles["update"]}>
                <div style={{ width: "900px", margin: "0 auto" }}>
                    <dl>
                        <dt>UPDATE</dt>
                        <dd>アップデート</dd>
                    </dl>
                </div>
            </div>
            <div className={styles["breadcrumb"]}>
                <div style={{ width: "900px", margin: "0 auto" }}>
                    <span>パンくず</span>
                </div>
            </div>
            <div className={styles["contents"]}>
                <div style={{ width: "900px", margin: "0 auto", display: "flex" }}>
                    <div style={{ width: "700px" }}>
                        <main>{children}</main>
                    </div>
                    <div style={{ width: "200px" }}>right</div>
                </div>
            </div>
            <footer className={styles["footer"]}>
                <div style={{ width: "900px", margin: "0 auto" }}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </footer>
        </>
    );
};

export default Layout;
