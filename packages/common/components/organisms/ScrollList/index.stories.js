import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object, text } from "@storybook/addon-knobs";
import ScrollList from "@norih/common/components/organisms/ScrollList";

const story = storiesOf("organisms", module).addDecorator(withKnobs);
const defaultConfig = {
    style: { width: 500, height: 200 },
    children: <div style={{ padding: "100px 20px" }}>↑ padding with scroll ↓</div>
};
story.add("ScrollList", () => {
    const { style, children } = defaultConfig;
    const props = {
        style: object("style", style)
    };
    return <ScrollList {...props}>{children}</ScrollList>;
});
