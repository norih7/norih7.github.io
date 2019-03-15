import React from "react";
import { storiesOf } from "@storybook/react";
import SkillList from "@norih/common/components/organisms/SkillList";

storiesOf("organisms", module).add("SkillList", () => {
    const skill = [
        {
            name: "Name1",
            level: 80,
            description: ""
        },
        {
            name: "NameExample",
            level: 60,
            description: ""
        },
        {
            name: "NameForTest",
            level: 60,
            description: ""
        }
    ];
    return <SkillList>{skill}</SkillList>;
});
