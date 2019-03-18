import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Footer from "@norih/common/components/organisms/Footer";

const story = storiesOf("organisms", module).addDecorator(withKnobs);

const defaultConfig = {
    content: <div>Footer</div>
};

story.add("Footer", () => {
    const props = {};
    return <Footer {...props}>{defaultConfig.content}</Footer>;
});
