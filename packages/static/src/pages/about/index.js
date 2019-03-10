import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/pages/Layout";
import SkillList from "@norih/common/components/organisms/SkillList";
import css from "./index.module.css";

const About = () => (
    <Layout contentName="about">
        <section className={css["section"]}>
            <h2>Profile</h2>
            <p>
                メイン業務としてバックエンドは6年以上、フロントエンドは3年ほど経験。
                <br />
                サーバリプレイスといった作業から、React+ReduxのモダンSPA開発など幅広くやってます。
                <br />
                Webエンジニアとして割とフルスタックに仕事をこなします。
            </p>
            <h2>スキル</h2>
            <SkillList category="フロントエンド">
                {[
                    { name: "ES2015", experience: "3年ほど" },
                    { name: "Node.js", experience: "3年以上" },
                    { name: "WebRTC", experience: "1年ほど" },
                    { name: "React、Redux", experience: "3年ほど" },
                    { name: "Storybook", experience: "1年ほど" },
                    { name: "JS Test", experience: "1年以上" }
                ]}
            </SkillList>

            <SkillList category="開発">
                {[
                    { name: "スクラム", experience: "1年以上" },
                    { name: "リモート開発", experience: "5年以上" },
                    { name: "Slack", experience: "1年以上" },
                    { name: "Git、GitHub", experience: "3年以上" },
                    { name: "JIRA", experience: "3年以上" },
                    { name: "UML", experience: "3年以上" }
                ]}
            </SkillList>

            <SkillList category="バックエンド">
                {[
                    { name: "PHP", experience: "5年以上" },
                    { name: "MySQL", experience: "5年以上" },
                    { name: "Unix", experience: "5年以上" },
                    { name: "Docker", experience: "1年以上" }
                ]}
            </SkillList>
        </section>
        <hr className={css["horizon"]} />
        <section className={css["section"]}>
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
                人に説明することは得意な方です。
                <br />
                Slackの画面共有を利用したペアプロでReact、Reduxのコーディングフォローすることも経験してきました。
            </p>
        </section>
    </Layout>
);

export default About;
