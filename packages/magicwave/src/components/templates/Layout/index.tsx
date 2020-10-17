import * as React from "react";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import "./initialize.css";
import * as styles from "./styles.module.css";
import CategoryList from "components/oraganisms/CategoryList";

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
                <div style={{ width: "920px", margin: "0 auto" }}>
                    <h1>{data.site.siteMetadata.title}</h1>
                </div>
            </header>
            <div className={styles["update"]}>
                <div style={{ width: "920px", margin: "0 auto" }}>
                    <dl>
                        <dt>UPDATE</dt>
                        <dd>アップデート</dd>
                    </dl>
                </div>
            </div>
            <div className={styles["breadcrumb"]}>
                <div style={{ width: "920px", margin: "0 auto" }}>
                    <span>パンくず</span>
                </div>
            </div>
            <div className={styles["contents"]}>
                <div style={{ width: "920px", margin: "0 auto", display: "flex" }}>
                    <div style={{ width: "660px" }}>
                        <main>{children}</main>
                    </div>
                    <div style={{ width: "240px", marginLeft: "20px" }}>
                        <CategoryList name="攻略チャート" style={{ marginBottom: "10px" }}>
                            {[
                                { to: "chart1", title: "トーティスの村〜ローンヴァレイ" },
                                { to: "hoge", title: "精霊の森〜モーリア坑道" },
                                { to: "hoge", title: "アルヴァニスタの都〜過去ダオス城" },
                                { to: "hoge", title: "超古代都市トール〜ダオス城" },
                            ]}
                        </CategoryList>
                        <CategoryList name="データ" style={{ marginBottom: "10px" }}>
                            {[
                                { to: "chart1", title: "特技" },
                                { to: "hoge", title: "称号" },
                                { to: "hoge", title: "料理レシピ" },
                                { to: "hoge", title: "奥義・魔術・忍術・召喚術" },
                                { to: "hoge", title: "武器" },
                                { to: "hoge", title: "防具" },
                                { to: "hoge", title: "アクセサリ" },
                            ]}
                        </CategoryList>
                    </div>
                </div>
            </div>
            <footer className={styles["footer"]}>
                <div style={{ width: "920px", margin: "0 auto" }}>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </div>
            </footer>
        </>
    );
};

export default Layout;
