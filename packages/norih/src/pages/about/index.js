import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/pages/Layout";
import SkillList from "@components/organisms/SkillList";

const css = {
    skill: {
        float: "left",
        marginRight: "15px",
        marginBottom: "15px",
        width: "270px",
        padding: "20px",
        background: "#fff",
        borderRadius: "10px"
    },
    tag: {
        padding: "5px",
        background: "#bbb",
        marginRight: "5px",
        fontSize: "0.8em",
        borderRadius: "3px",
        color: "#fff"
    }
};
const SecondPage = () => (
    <Layout>
        <div style={{ background: "#eee" }}>
            <div style={{ width: 900, margin: "0 auto", padding: 20 }}>
                <section>
                    <h1>About</h1>
                    <h2>Profile</h2>
                    <p>メイン業務としてバックエンドは4年以上、フロントエンドは2年ほど経験。</p>
                    <p>サーバリプレイスといった作業から、React+ReduxのモダンSPA開発など幅広くやってます。</p>
                    <p>Webエンジニアとして割とフルスタックに仕事をこなします。</p>
                    <h2>経歴</h2>
                    <p>2012.04 合同会社DMM.com入社</p>
                    <p>2018.12 同社在籍中</p>
                    <h2>スキル</h2>
                    <SkillList category="フロントエンド">
                        {[
                            { name: "ES2015", experience: "1年以上" },
                            { name: "Node.js", experience: "2年以上" },
                            { name: "WebRTC", experience: "1年ほど" },
                            { name: "React/Redux", experience: "2年以上" },
                            { name: "Storybook", experience: "1年ほど" },
                            { name: "JS Test", experience: "1年以上" }
                        ]}
                    </SkillList>

                    <section style={css["skill"]}>
                        <h3>開発</h3>
                        <ul>
                            <li>スクラム</li>
                            <li>リモート開発</li>
                            <li>Slack</li>
                            <li>Git/GitHub</li>
                            <li>JIRA</li>
                        </ul>
                    </section>
                    <section style={css["skill"]}>
                        <h3>AWS</h3>
                        <ul>
                            <li>EC2</li>
                            <li>S3</li>
                            <li>ElasticSearchService</li>
                            <li>CloudFront</li>
                            <li>Lambda</li>
                        </ul>
                    </section>
                    <section style={css["skill"]}>
                        <h3>バックエンド</h3>
                        <ul>
                            <li>PHP</li>
                            <li>Fluentd/ElasticSearch</li>
                            <li>Docker</li>
                            <li>MySQL</li>
                            <li>Apache</li>
                        </ul>
                    </section>
                    <section style={css["skill"]}>
                        <h3>その他</h3>
                        <ul>
                            <li>Swagger</li>
                            <li>UML</li>
                            <li>Shell</li>
                            <li>VS Code</li>
                            <li>Photoshop</li>
                        </ul>
                    </section>
                    <hr style={{ clear: "both" }} />
                </section>
            </div>
        </div>
    </Layout>
);

export default SecondPage;
