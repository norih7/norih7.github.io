import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import SkillList from "@norih/common/components/organisms/SkillList";

const story = storiesOf("organisms", module).addDecorator(withKnobs);
const defaultConfig = {
    name: "Name",
    level: 80,
    description: ""
};

story.add("SkillList", () => {
    const { name, level, description } = defaultConfig;
    const skill = [
        {
            name: text("name", name),
            level: number("level", level),
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
