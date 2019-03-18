import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";
import ListScroll from "@norih/common/components/molecules/List/Scroll";

const story = storiesOf("molecules/List", module).addDecorator(withKnobs);
const defaultConfig = {
    style: { height: "100px" },
    children: <div style={{ padding: "50px 10px" }}>children</div>
};
story.add("Scroll", () => {
    const { style, children } = defaultConfig;
    return <ListScroll style={object("style", style)}>{children}</ListScroll>;
});
