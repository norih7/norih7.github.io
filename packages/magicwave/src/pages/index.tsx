import * as React from "react";
import Layout from "components/templates/Layout";
import CategoryList from "components/oraganisms/CategoryList";

const marginBottom = {
    marginBottom: "16px",
};

const IndexPage = () => (
    <Layout>
        <CategoryList name="攻略チャート" style={marginBottom}>
            {[
                { to: "chart-1", title: "攻略チャート1 (トーティスの村〜ローンヴァレイ)" },
                { to: "chart-2", title: "攻略チャート2 (精霊の森〜モーリア坑道)" },
                { to: "chart-3", title: "攻略チャート3 (アルヴァニスタの都〜過去ダオス城)" },
                { to: "chart-4", title: "攻略チャート4 (超古代都市トール〜ダオス城)" },
            ]}
        </CategoryList>
        <CategoryList name="特技、奥義" style={marginBottom} isFlex={true}>
            {[
                { to: "skill-cless", title: "クレス" },
                { to: "skill-mint", title: "ミント" },
                { to: "skill-arche", title: "アーチェ" },
                { to: "skill-klarth", title: "クラース" },
                { to: "skill-chester", title: "チェスター" },
                { to: "skill-suzu", title: "すず" },
            ]}
        </CategoryList>
        <CategoryList name="各種データ" style={marginBottom} isFlex={true}>
            {[
                { to: "data-cook", title: "料理" },
                { to: "data-title", title: "称号" },
                { to: "skill-arche", title: "武器" },
                { to: "skill-klarth", title: "防具" },
                { to: "skill-chester", title: "アクセサリ" },
            ]}
        </CategoryList>
        <CategoryList name="システム" style={marginBottom} isFlex={true}>
            {[
                { to: "data-cook", title: "システム解説" },
                { to: "data-title", title: "ストーリークリア後" },
                { to: "skill-arche", title: "上限レベル/コンボ" },
                { to: "skill-klarth", title: "最強装備品" },
                { to: "skill-chester", title: "戦闘時の操作方法" },
            ]}
        </CategoryList>
        <CategoryList name="サブイベント" style={marginBottom} isFlex={true}>
            {[
                { to: "data-cook", title: "すずを仲間に" },
                { to: "data-title", title: "闘技場データ" },
                { to: "skill-arche", title: "エンヴンボウ強化イベント" },
                { to: "skill-klarth", title: "アイフリードの遺産" },
                { to: "skill-chester", title: "特殊な奥義/召喚術" },
                { to: "skill-chester", title: "経験値の購入" },
                { to: "skill-chester", title: "GROOVYアーチェ" },
                { to: "skill-chester", title: "ナンシーとエルウィンの恋" },
                { to: "skill-chester", title: "隠しイベント発生フラグ" },
                { to: "skill-chester", title: "モーリア坑道下層" },
                { to: "skill-chester", title: "闇の洞窟" },
            ]}
        </CategoryList>
    </Layout>
);

export default IndexPage;
