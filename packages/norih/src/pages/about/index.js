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
    },
    title: {
        minWidth: "150px",
        display: "inline-block",
        height: "30px",
        background: "#444",
        lineHeight: "30px",
        fontSize: "0.9rem",
        textAlign: "center",
        fontWeight: "normal",
        color: "#fff"
    },
    header: {
        position: "absolute",
        padding: "0 20px",

        left: 0,
        right: 0,
        height: "30px",
        background: "#e5e5e5"
    },
    container: {
        width: "900px",
        margin: "0 auto"
    },
    section: {
        paddingTop: "60px"
    }
};
const SecondPage = () => (
    <Layout>
        <header style={css["header"]}>
            <div style={css["container"]}>
                <h1 style={css["title"]}>About</h1>
            </div>
        </header>
        <section style={css["section"]}>
            <h2>Profile</h2>
            <p>
                メイン業務としてバックエンドは4年以上、フロントエンドは2年ほど経験。
                <br />
                サーバリプレイスといった作業から、React+ReduxのモダンSPA開発など幅広くやってます。
                <br />
                Webエンジニアとして割とフルスタックに仕事をこなします。
            </p>
            <h2>経歴</h2>
            <ul>
                <li>2012.04 合同会社DMM.com入社</li>
                <li>2018.12 同社在籍中</li>
            </ul>
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
        <h2>得意なこと</h2>
        <h3>バランス感覚</h3>
        <p>
            バランス感覚はある方だと思います。
            <br />
            業務でもQCDを考えた線引きをするプロセスは大事にしています。
            <br />
            エンジニアのスキルとしても、フロントエンドを中心に浅く広く学ぶように心がけています。
        </p>
        <h3>人に対して説明すること</h3>
        <p>
            人に説明することはちょっと得意です。
            <br />
            Slackの画面共有を利用したペアプロでReact、Reduxのコーディングフォローすることも経験してきました。
        </p>
        <h2>嫌なこと、もの</h2>
        <h3>心理的安全が低くチャレンジしにくい環境</h3>
        <p>
            独裁政権のような文化があるところは苦手です。
            <br />
            そのような環境で仕事をしたことがあります。特に他人に対して罵詈雑言がある環境は最悪で、自分も滅入ってきます。
            <br />
            心理的安全が比較的高く、従業員が自発的に動けている環境がいいです。
        </p>

        <h3>拠点間の格差が激しいこと</h3>
        <p>
            同じ会社なのに拠点間で仲が悪いというのは嫌いです。
            <br />
            長年東京と地方で業務をしてきた経験からいうと、定着している風土はそうそう変えることはできず、最初から風通しの良い環境である必要があります。
            <br />
            また同じ仕事をしているのだから評価や給料は均等であるべきだと思っています。
        </p>
        <h3>クローズな情報やりとり</h3>
        <p>
            社内政治などプロセスが欠陥しているクローズな調整は嫌いです。
            <br />
            オープンな環境
        </p>
    </Layout>
);

export default SecondPage;
