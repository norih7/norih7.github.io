import * as React from "react";
import { graphql } from "gatsby";
import Layout from "components/templates/Layout";
import TableList from "components/oraganisms/TableList";

export const pageQuery = graphql`
    {
        allSkill(filter: { character: { eq: "cless" } }) {
            nodes {
                name
                ruby
                character
                skillType
                description
                tp
                hit
                level
                maps {
                    description
                    map
                    timeline
                }
            }
        }
    }
`;

const SkillsPage = (props: any) => {
    const skills: any = {
        normalTech: [],
        secretTech: []
    };
    props.data.allSkill.nodes.forEach((skill: any) => {
        const { skillType } = skill;
        skills[skillType].push(skill);
    });

    return (
        <Layout>
            <h1>クレスの特技、奥義</h1>
            <h2>クレスの特技一覧</h2>
            <TableList data={skills.normalTech}></TableList>
            <h2>クレスの奥義一覧</h2>
            <TableList data={skills.secretTech}></TableList>
        </Layout>
    );
};

export default SkillsPage;
