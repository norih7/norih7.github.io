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
                { to: "chart1", title: "攻略チャート1 (トーティスの村〜ローンヴァレイ)" },
                { to: "hoge", title: "攻略チャート2 (精霊の森〜モーリア坑道)" },
                { to: "hoge", title: "攻略チャート3 (アルヴァニスタの都〜過去ダオス城)" },
                { to: "hoge", title: "攻略チャート4 (超古代都市トール〜ダオス城)" },
            ]}
        </CategoryList>
        <CategoryList name="各種データ" style={marginBottom} isFlex={true}>
            {[
                { to: "hoge", title: "特技一覧/詳細" },
                { to: "hoge", title: "称号一覧/獲得条件" },
                { to: "hoge", title: "料理レシピ一覧/入手場所" },
                { to: "hoge", title: "奥義、魔術一覧" },
            ]}
        </CategoryList>
    </Layout>
);

export default IndexPage;
