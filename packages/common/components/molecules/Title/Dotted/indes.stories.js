import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import TitleDotted from "@norih/common/components/molecules/Title/Dotted";

const story = storiesOf("molecules/Title", module).addDecorator(withKnobs);
const defaultConfig = {
    title: "Title"
};
story.add("Dotted", () => {
    const { title } = defaultConfig;
    return <TitleDotted>{text("children", title)}</TitleDotted>;
});
