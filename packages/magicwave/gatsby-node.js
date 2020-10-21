/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const items = [
        {
            name: "アップルグミ",
            type: "tool",
            charts: ["1-1", "1-2"],
            maps: [
                {
                    map: "tortis",
                    description: "",
                },
            ],
        },
        {
            name: "ライフボトル",
            type: "tool",
            charts: ["1-2"],
            maps: [
                {
                    map: "tortis",
                    description: "",
                },
            ],
        },
        {
            name: "マスコット",
            type: "other",
            charts: ["1-1"],
            maps: [
                {
                    map: "tortis",
                    description: "",
                },
            ],
        },
        {
            name: "リンゴ",
            type: "food",
            charts: ["1-1"],
            maps: [
                {
                    map: "tortis",
                    description: "",
                },
            ],
        },
    ];
    const skills = {
        cless: {
            normalTech: [
                {
                    name: "魔神剣",
                    ruby: "まじんけん",
                    level: 2,
                    tp: 2,
                    hit: 1,
                    description: "剣撃を放ち敵に当てる",
                    charts: [],
                    map: [],
                },
                {
                    name: "飛燕連脚",
                    ruby: "ひえんれんきゃく",
                    level: 5,
                    tp: 4,
                    hit: 3,
                    description: "空中への蹴り上げ、蹴り、突きの3連続攻撃",
                    charts: [],
                    map: [],
                },
            ],
            secretTech: [
                {
                    name: "魔神飛燕脚",
                    ruby: "まじんひえんきゃく",
                    level: 0,
                    tp: 10,
                    hit: 4,
                    description: "魔神剣と飛燕連脚を組み合わせた奥義",
                    charts: [],
                    maps: [
                        { map: "belladam", timeline: "past", description: "武器屋の子供に裏から話す" },
                        {
                            map: "miguel",
                            timeline: "future",
                            description: "ミゲールの町の左下の民家の中のタンスを調べる",
                        },
                    ],
                },
            ],
        },
    };
    const recipes = [
        {
            name: "ハンバーガー",
            effect: "HP10%回復",
            maps: [
                {
                    map: "",
                    tileline: "present",
                    description: "初期から習得済み",
                },
            ],
        },
        {
            name: "おにぎり",
            effect: "HP10%回復 + 解毒",
            maps: [
                {
                    map: "",
                    tileline: "present",
                    description: "初期から習得済み",
                },
            ],
        },
        {
            name: "ロールキャベツ",
            effect: "HP12%回復",
            maps: [
                {
                    map: "",
                    tileline: "present",
                    description: "食材屋の料理人と話す",
                },
            ],
        },
    ];

    items.forEach((item) => {
        const { name, type, maps, charts } = item;
        const node = {
            name,
            type,
            charts,
            maps,
            id: createNodeId(`Item-${item.name}`),
            internal: {
                type: "Item",
                contentDigest: createContentDigest(item),
            },
        };
        actions.createNode(node);
    });
    Object.keys(skills).forEach((character) => {
        Object.keys(skills[character]).forEach((skillType) => {
            const skillList = skills[character][skillType];
            skillList.forEach((skill) => {
                const { name, ruby, type, level, tp, hit, description, charts, maps } = skill;
                const node = {
                    name,
                    ruby,
                    character,
                    skillType,
                    level,
                    tp,
                    hit,
                    description,
                    charts,
                    maps,
                    id: createNodeId(`Skill-${name}`),
                    internal: {
                        type: "Skill",
                        contentDigest: createContentDigest(skills[character][skillType]),
                    },
                };
                console.log(skills[character][skillType], node);
                actions.createNode(node);
            });
        });
    });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    });
};
