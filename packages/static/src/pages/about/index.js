import React from "react";
import Layout from "../../components/pages/Layout";
import SkillList from "@norih/common/components/organisms/SkillList";
import css from "./index.module.css";
import Button from "../../components/pages/Button";

const json = `{
    handleName: "@norih7",
    prefer: ["frontend", "react", "beer"],
    description:
        "サーバリプレイスといった地味な作業から、React+Reduxのモダンフロントエンド開発など幅広くやってます。" + 
        "Webエンジニアとして割とフルスタックに仕事をこなします。"
};`;

const About = () => (
    <Layout contentName="about">
        <section className={css["section"]}>
            <h2>About</h2>

            <p>
                Webエンジニアのブログとポートフォリオ。Reactでいろいろ作ってみようというサイトです。
                <br />
                monoreoで構成しており、Reactコンポーネントは下記のStorybookにまとめています。
                <br />
                <a href="">https://xxxxx/</a>
            </p>
            <Button>sample</Button>
        </section>
        <section className={css["section"]}>
            <h2>Profile</h2>
            <code>
                <pre>{json}</pre>
            </code>
            <ul>
                <li>
                    <a href="https://github.com/norih7" target="_blank">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://qiita.com/norih" target="_blank">
                        Qiita
                    </a>
                </li>
            </ul>
        </section>
        <section className={css["section"]}>
            <h2>Skill</h2>
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
    </Layout>
);

export default About;
