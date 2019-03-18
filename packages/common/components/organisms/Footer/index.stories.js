import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Footer from "@norih/common/components/organisms/Footer";

const story = storiesOf("organisms", module).addDecorator(withKnobs);

const defaultConfig = {
    children: Footer
};

story.add("Footer", () => {
    const { children } = defaultConfig;
    const props = {};
    return <Footer {...props}>{text("children", children)}</Footer>;
});
