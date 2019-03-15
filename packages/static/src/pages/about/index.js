import React from "react";
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
            <SkillList category="frontend">
                {[
                    { name: "ES2015", level: "100", experience: "3年ほど" },
                    { name: "React、Redux", level: "90", experience: "3年ほど" },
                    { name: "Node.js", level: "70", experience: "3年以上" },
                    { name: "JS Test", level: "60", experience: "1年以上" },
                    { name: "Storybook", level: "50", experience: "1年ほど" },
                    { name: "WebRTC", level: "40", experience: "1年ほど" }
                ]}
            </SkillList>

            <SkillList category="develop">
                {[
                    { name: "リモート開発", level: "80", experience: "5年以上" },
                    { name: "Git、GitHub", level: "80", experience: "3年以上" },
                    { name: "JIRA", level: "80", experience: "3年以上" },
                    { name: "Slack", level: "70", experience: "1年以上" },
                    { name: "スクラム", level: "50", experience: "1年以上" },
                    { name: "UML", level: "40", experience: "3年以上" }
                ]}
            </SkillList>

            <SkillList category="backend">
                {[
                    { name: "PHP", level: "90", experience: "5年以上" },
                    { name: "MySQL", level: "80", experience: "5年以上" },
                    { name: "Unix", level: "70", experience: "5年以上" },
                    { name: "Docker", level: "40", experience: "1年以上" }
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
